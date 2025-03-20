---
description: How to create a Salesforce DX project from existing source code
globs: 
alwaysApply: false
---
# Create a Salesforce DX Project from Existing Source

## Overview
When migrating from traditional Salesforce development to Salesforce DX, you often need to create a Salesforce DX project from existing source code. This rule outlines the process for converting your existing metadata into a source-tracked Salesforce DX project.

## Prerequisites
- Salesforce CLI installed and updated
- Appropriate permissions to access the source org
- Git installed (for version control)

## Project Creation Process

### 1. Create a New SFDX Project
First, create a new Salesforce DX project as a foundation:

```bash
sf project generate --name ExistingSourceProject
cd ExistingSourceProject
```

### 2. Options for Getting the Metadata

#### Option A: Retrieve directly from an org to source format

1. Authorize the org that contains your existing metadata:
```bash
sf org login web --alias sourceOrg
```

2. Retrieve the metadata directly into your project's source format:
```bash
# Retrieve specific metadata types
sf project retrieve start --target-org sourceOrg --metadata-path force-app -m "CustomObject,ApexClass,CustomTab,Layout"

# Or retrieve all metadata
sf project retrieve start --target-org sourceOrg --metadata-path force-app
```

#### Option B: Convert from Metadata API format

1. If your source is already in Metadata API format (e.g., from ANT Migration Tool or retrieved via Workbench):

```bash
# Create a directory for your metadata API-formatted files
mkdir mdapi_source

# Move your existing files into this directory
# Then convert to source format
sf project convert source:mdapi --root-dir mdapi_source --output-dir force-app
```

### 3. Update Project Configuration

Update the `sfdx-project.json` file to reflect your project structure:

```json
{
  "packageDirectories": [
    {
      "path": "force-app",
      "default": true,
      "package": "ExistingSourcePackage",
      "versionName": "Version 1.0",
      "versionNumber": "1.0.0.NEXT"
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "58.0"
}
```

## Working with Complex Existing Sources

### Handling Package Dependencies
If your source has dependencies on managed packages:

1. Document all package dependencies in your project configuration:

```json
"packageAliases": {
  "DependencyPackage": "04tXXXXXXXXXXXXXXXX"
}
```

2. Install dependencies when creating scratch orgs:

```bash
sf org create scratch --definition-file config/project-scratch-def.json --duration-days 30 --alias devScratch
sf package install --package DependencyPackage --target-org devScratch
```

### Handling Large Source Code Bases

For very large code bases, consider:

1. Retrieving metadata in batches:

```bash
# Retrieve core objects first
sf project retrieve start --target-org sourceOrg --metadata-path force-app -m "CustomObject:Account,CustomObject:Contact"

# Then retrieve classes
sf project retrieve start --target-org sourceOrg --metadata-path force-app -m "ApexClass"

# And so on for other metadata types
```

2. Using package development model to split source:

```bash
# Create multiple package directories in your project
mkdir -p force-app/core
mkdir -p force-app/features
```

Then update your `sfdx-project.json` accordingly.

## Best Practices

### Organize Source Code
After retrieving metadata, organize it logically:

```bash
# Example organization by feature
mkdir -p force-app/main/default/featureA
mkdir -p force-app/main/default/featureB
```

### Initialize Git
Initialize Git for version control:

```bash
git init
git add .
git commit -m "Initial commit from existing source"
```

### Create a .gitignore File
Create a proper `.gitignore` file for Salesforce DX:

```
# Standard .gitignore entries for Salesforce DX
.sfdx/
.sf/
.vscode/
.idea/
IlluminatedCloud/
node_modules/
*.sublime-*
```

### Validate the Project
Validate that your project works correctly:

```bash
# Create a scratch org
sf org create scratch --definition-file config/project-scratch-def.json --alias testorg

# Deploy to scratch org
sf project deploy start --target-org testorg

# Run tests
sf apex run test --target-org testorg --code-coverage --synchronous
```

## Troubleshooting

### Common Issues
1. **Profile Errors**: Profiles often contain references to components that don't exist in the project. Consider using permission sets instead.

```bash
# Retrieve just the permission sets
sf project retrieve start --target-org sourceOrg --metadata-path force-app -m "PermissionSet"
```

2. **Missing Dependencies**: Install required packages before deploying:

```bash
sf package install --package packageId --target-org orgAlias
```

3. **API Version Mismatches**: Ensure consistent API versions:

```bash
# Update project's API version in sfdx-project.json
"sourceApiVersion": "58.0"
```

## Further Reading
For more information about creating a Salesforce DX project from existing source, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_convert_mdapi.htm) 