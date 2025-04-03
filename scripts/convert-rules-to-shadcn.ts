import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import * as yaml from 'yaml';

interface RuleFile {
  path: string;
  content: string;
  type: 'registry:file';
  target: string;
}

interface ShadcnRegistry {
  $schema: string;
  name: string;
  type: 'registry:file';
  title: string;
  description: string;
  dependencies: string[];
  registryDependencies: string[];
  files: RuleFile[];
}

// Function to recursively get all .mdc files
function getMdcFiles(dir: string): string[] {
  const files: string[] = [];
  
  readdirSync(dir).forEach(file => {
    const fullPath = join(dir, file);
    
    if (statSync(fullPath).isDirectory()) {
      files.push(...getMdcFiles(fullPath));
    } else if (file.endsWith('.mdc') && !file.startsWith('@')) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Function to convert a single rule file to registry format
function convertRuleFile(filePath: string): RuleFile {
  const content = readFileSync(filePath, 'utf-8');
  const relativePath = relative(process.cwd(), filePath);
  const registryPath = relativePath
    .replace('.mdc', '.md')
    .replace('.cursor/rules/', 'registry/default/cursor-rules/');

  return {
    path: registryPath,
    content: content,
    type: 'registry:file',
    target: relativePath
  };
}

// Main conversion function
function convertRulesToShadcn(rulesDir: string, outputPath: string) {
  // Get all .mdc files
  const ruleFiles = getMdcFiles(rulesDir);
  
  // Convert each file
  const convertedFiles = ruleFiles.map(file => convertRuleFile(file));
  
  // Create the registry object
  const registry: ShadcnRegistry = {
    $schema: 'https://ui.shadcn.com/schema/registry-item.json',
    name: 'cursor-rules-sfdx',
    type: 'registry:file',
    title: 'Prompt rules for Salesforce DX in Cursor IDE',
    description: 'Prompts for working with Salesforce DX projects using Cursor AI-powered IDE tools',
    dependencies: [],
    registryDependencies: [],
    files: convertedFiles
  };
  
  // Write the output file
  writeFileSync(
    outputPath,
    JSON.stringify(registry, null, 2),
    'utf-8'
  );
  
  console.log(`✅ Successfully converted ${convertedFiles.length} rules to ${outputPath}`);
}

// Run the conversion
const RULES_DIR = '.cursor/rules';
const OUTPUT_FILE = 'cursor-rules-sfdx.json';

try {
  convertRulesToShadcn(RULES_DIR, OUTPUT_FILE);
} catch (error) {
  console.error('❌ Error converting rules:', error);
  process.exit(1);
} 