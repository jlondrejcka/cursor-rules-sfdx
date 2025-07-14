---
description: How to convert files in Metadata API format to Salesforce DX source format
globs: 
alwaysApply: false
---
 ---
description: How to convert files in Metadata API format to Salesforce DX source format
globs: 
alwaysApply: false
---
# Convert Files in Metadata Format to Source Format

## Overview
Salesforce DX introduces a new, more granular file format known as "source format" that improves team development and version control. This rule outlines the process for converting traditional Metadata API format files to the Salesforce DX source format.

## Understanding the Formats

### Metadata API Format
- Monolithic XML files grouped by metadata type
- Used by traditional Salesforce development tools (ANT Migration Tool, Workbench, etc.)
- Located in directories named after metadata types (`classes/`, `objects/`, etc.)

### Source Format
- Decomposed into smaller, component-based files
- Optimized for version control and team development
- Files have `-meta.xml` suffix and are organized in typed directories
- Custom objects and fields are broken down into individual files

## Conversion Process

### Using the Salesforce CLI

The basic command for conversion is:

```bash
sf project convert source:mdapi --root-dir <mdapi-dir> --output-dir <source-dir>
```

#### Example Workflow:

1. Create a directory for your Metadata API format files:
```bash
mkdir mdapi_source
```

2. Add your Metadata API files to this directory (manually or retrieve them)

3. Convert to source format:
```bash
sf project convert source:mdapi --root-dir mdapi_source --output-dir force-app
```

### Converting Retrieved Metadata

If you need to retrieve metadata first:

1. Authorize the source org:
```bash
sf org login web --alias sourceOrg
```

2. Retrieve metadata into a directory:
```bash
sf project retrieve start --target-org sourceOrg --retrievetargetdir mdapi_source
```

3. Convert the retrieved metadata:
```bash
sf project convert source:mdapi --root-dir mdapi_source --output-dir force-app
```

### Batch Conversion for Large Metadata Sets

For very large orgs, convert in batches:

```bash
# Step 1: Retrieve specific metadata types
sf project retrieve start --target-org sourceOrg --retrievetargetdir mdapi_batch1 -m "CustomObject"

# Step 2: Convert just that batch
sf project convert source:mdapi --root-dir mdapi_batch1 --output-dir force-app

# Repeat for other types
sf project retrieve start --target-org sourceOrg --retrievetargetdir mdapi_batch2 -m "ApexClass,ApexTrigger"
sf project convert source:mdapi --root-dir mdapi_batch2 --output-dir force-app
```

## Handling Special Conversion Cases

### Package.xml File
The Package.xml file isn't needed in source format but can be used for deployments:

```bash
# Convert but keep package.xml for future use
sf project convert source:mdapi --root-dir mdapi_source --output-dir force-app --preserve-package-xml
```

### Profiles and Permission Sets
Profiles and permission sets may need special attention:

```bash
# Convert just profiles
sf project convert source:mdapi --root-dir mdapi_profiles --output-dir force-app -m "Profile"
```

### Handling Destructive Changes
To handle destructive changes:

```bash
# Place your destructiveChanges.xml file in the mdapi directory
# Then convert with the preserve flag
sf project convert source:mdapi --root-dir mdapi_with_destructive --output-dir force-app --preserve-package-xml
```

## Post-Conversion Steps

### Review Converted Files
After conversion, review the structure to ensure everything converted properly:

```bash
# List source directory structure
find force-app -type f | sort
```

### Validate in a Scratch Org
Deploy the converted source to a scratch org to validate:

```bash
# Create a scratch org
sf org create scratch --definition-file config/project-scratch-def.json --alias validateOrg

# Deploy converted source
sf project deploy start --target-org validateOrg
```

### Update Project Configuration
Update your `sfdx-project.json` with appropriate values:

```json
{
  "packageDirectories": [
    {
      "path": "force-app",
      "default": true
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "58.0"
}
```

## Converting Back to Metadata Format

If you need to convert source format back to Metadata API format:

```bash
sf project convert source:mdapi --root-dir force-app --output-dir mdapi_output
```

This is useful for:
- Deploying to orgs that don't support source format
- Working with legacy tools
- Creating migration packages

## Troubleshooting

### Common Conversion Issues

1. **Missing Files After Conversion**: Check for files with special characters:
```bash
# Find files with special characters
find mdapi_source -name '*[^a-zA-Z0-9._-]*' -print
```

2. **Conversion Errors**: Enable debug logging:
```bash
sf config set logLevel=debug --global
sf project convert source:mdapi --root-dir mdapi_source --output-dir force-app
```

3. **Large File Sets**: Break down into smaller batches by metadata type

### Handling Specific Errors

For "Entity name must immediately follow the '&' in the entity reference" errors:
```bash
# Use a text tool to fix XML special characters in the source files
sed -i 's/&/&amp;/g' mdapi_source/**/*.xml
```

## Best Practices

1. **Commit After Conversion**: Create a Git commit immediately after successful conversion
2. **Keep Original Metadata**: Maintain a copy of the original metadata for reference
3. **Convert in Batches**: For large orgs, convert metadata types in logical groups
4. **Test After Conversion**: Deploy to a scratch org to ensure everything works
5. **Use Source Format Going Forward**: Once converted, maintain the source format for all future work

## Further Reading
For more information about converting Metadata API format to source format, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_convert_mdapi.htm)