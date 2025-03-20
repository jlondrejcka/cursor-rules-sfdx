---
description: 
globs: 
alwaysApply: false
---
# Exclude Source When Syncing with Salesforce DX

## Overview
The `.forceignore` file lets you exclude source files and directories from syncing operations between your local project and Salesforce orgs. This rule defines best practices for using `.forceignore` in Salesforce DX projects.

## File Location
- Place the `.forceignore` file in the root of your Salesforce DX project
- You can also place additional `.forceignore` files in subdirectories to apply specific ignores to those directories

## Format and Syntax
- Uses same format as `.gitignore`
- Each line contains a pattern for files to ignore
- Blank lines are ignored
- Lines starting with # are comments
- Use ! to negate a previously defined pattern

## Examples

### Basic patterns
```
# Ignore specific files
**/jsconfig.json
**/.eslintrc.json

# Ignore directories
**/.sfdx
**/node_modules

# Ignore specific metadata type
**/profiles

# Exclude all Apex classes
**/*.cls

# But don't ignore the Test classes
!**/*Test.cls
```

### Exclude Remote Changes
To prevent retrieving certain components, use the `-r` flag in your `.forceignore` file:
```
# Ignore in both directions
**/profiles

# Ignore only when retrieving from an org
-r **/objects/Account
```

### Excluding MetadataWithContent Types
For metadata with content (like StaticResource, Document, ContentAsset):
```
# Ignore both metadata and content
**/staticresources/MyResource.resource
**/staticresources/MyResource.resource-meta.xml

# Using wildcard
**/staticresources/MyResource*
```

### Excluding Bundles
For bundles (like Aura, LWC, Experience):
```
# Ignore entire bundle
**/aura/myComponent

# Ignore specific files in bundle
**/lwc/myComponent/myComponent.js
**/lwc/myComponent/myComponent.html
```

### Handling Special Characters
For metadata with special characters in names:
```
# Escape special characters
**/objects/My\%Object__c
```

## Tips
1. To view which files are ignored, use: `sf project ignore list`
2. When in doubt about a file path, use `sf project retrieve` or `sf project deploy` with the `-n` flag to see which files would be included without performing the operation
3. By default, `.git`, `.sf`, `.sfdx`, and `.sf/config/` are automatically ignored

## Determining Exact File Paths
To identify the exact path of components to exclude:
1. Use command: `sf project retrieve start -m "YourMetadata" -x manifest/package.xml`
2. Look at retrieved files in the source directory
3. Copy the file path relative to project root into `.forceignore`

## Further Reading
Check [official documentation](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_exclude_source.htm) for additional details.