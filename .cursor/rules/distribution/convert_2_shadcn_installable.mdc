---
description: 
globs: 
alwaysApply: false
---
---
description: Guidelines for converting cursor rules to shadcn-compatible JSON format
globs: '.cursor/rules/**/*.mdc'
---

# Converting Cursor Rules to shadcn-compatible JSON

You are an expert in converting Cursor Rules to a shadcn-compatible registry format. Follow these guidelines to generate a JSON file that adheres to the shadcn registry schema.

## Implementation

The conversion is implemented in TypeScript using the script at `scripts/convert-rules-to-shadcn.ts`. The implementation requires:

```json
{
  "dependencies": {
    "yaml": "^2.3.4"
  },
  "devDependencies": {
    "@types/node": "^20.11.19",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  }
}
```

## Usage

1. Install dependencies:
```bash
npm install
```

2. Run the conversion:
```bash
npm run convert
```

The script will generate `cursor-rules-sfdx.json` in the project root.

## Output Structure

The generated JSON file follows this structure:

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "cursor-rules-sfdx",
  "type": "registry:file",
  "title": "Prompt rules for Salesforce DX in Cursor IDE",
  "description": "Prompts for working with Salesforce DX projects using Cursor AI-powered IDE tools",
  "dependencies": [],
  "registryDependencies": [],
  "files": []
}
```

## File Processing

The script processes files according to these rules:

1. **File Selection**:
   - Recursively scans `.cursor/rules` directory
   - Includes all `.mdc` files
   - Excludes files starting with `@`
   - Handles nested directories

2. **Path Conversion**:
   - Original: `.cursor/rules/example.mdc`
   - Converted: `registry/default/cursor-rules/example.md`
   - Maintains relative path structure
   - Preserves directory hierarchy

3. **Content Handling**:
   - Preserves original file content exactly
   - Maintains all YAML frontmatter
   - Keeps markdown formatting intact
   - Preserves line breaks and special characters

## File Entry Structure

Each cursor rule is converted to this format:

```json
{
  "path": "registry/default/cursor-rules/[rule-name].md",
  "content": "[original-content]",
  "type": "registry:file",
  "target": ".cursor/rules/[original-file-name]"
}
```

## Error Handling

The script includes error handling for:
- File system operations
- Invalid file contents
- Processing failures
- Output writing errors

## Validation

The script ensures:
1. All required fields are present
2. Paths are properly formatted
3. Content is preserved accurately
4. Output JSON is valid

## Example Output

For a file at `.cursor/rules/example.mdc`:

Input:
```markdown
---
description: Example rule
globs: '**/*.ts'
---

# Example Rule
Content here...
```

Generated entry in `cursor-rules-sfdx.json`:
```json
{
  "path": "registry/default/cursor-rules/example.md",
  "content": "---\ndescription: Example rule\nglobs: '**/*.ts'\n---\n\n# Example Rule\nContent here...",
  "type": "registry:file",
  "target": ".cursor/rules/example.mdc"
}
```

## Limitations

1. File size is limited only by system memory
2. All files must be valid markdown with frontmatter
3. File paths must not contain special characters
4. Target directory must exist and be writable