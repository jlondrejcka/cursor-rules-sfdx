---
description: Understanding decomposed metadata types in Salesforce DX source format
globs: 
alwaysApply: false
---
 ---
description: Understanding decomposed metadata types in Salesforce DX source format
globs: 
alwaysApply: false
---
# Decomposed Metadata Types

## Overview
In Salesforce DX, metadata types are "decomposed" into smaller, more manageable components in the source format. This decomposition allows for better version control and more granular deployments. This rule explains how metadata types are broken down in the source format.

## Understanding Decomposition

### Metadata API vs. Source Format
- **Metadata API Format**: Stores most metadata in large XML files (e.g., one file for all fields of an object)
- **Source Format**: Breaks down metadata into individual files and directories (e.g., one file per field)

### Benefits of Decomposition
- More granular version control
- Easier merge conflict resolution
- More precise deployments
- Better organization of source files
- Improved developer collaboration

## Common Decomposed Metadata Types

### Custom Objects
Custom objects are decomposed into:

```
force-app/main/default/objects/MyObject__c/
  ├── MyObject__c.object-meta.xml       # Object definition
  ├── fields/                           # Fields directory
  │   ├── Field1__c.field-meta.xml
  │   └── Field2__c.field-meta.xml
  ├── listViews/                        # List Views directory
  │   ├── All.listView-meta.xml
  │   └── Recent.listView-meta.xml
  ├── validationRules/                  # Validation Rules directory
  │   └── Rule1.validationRule-meta.xml
  ├── webLinks/                         # Web Links directory
  │   └── Link1.webLink-meta.xml
  ├── compactLayouts/                   # Compact Layouts directory
  │   └── Layout1.compactLayout-meta.xml
  └── recordTypes/                      # Record Types directory
      └── Type1.recordType-meta.xml
```

### Profiles
Profiles are optionally decomposed:

```
force-app/main/default/profiles/
  └── Admin.profile-meta.xml            # Full profile in one file (standard format)

# OR decomposed format
force-app/main/default/profiles/Admin/
  ├── layout.profile-meta.xml           # Layout settings for the profile
  ├── objectPermissions.profile-meta.xml # Object permissions
  └── fieldPermissions.profile-meta.xml  # Field permissions
```

### Permission Sets
Permission sets are decomposed similar to profiles:

```
force-app/main/default/permissionsets/
  └── MyPermSet.permissionset-meta.xml   # Standard format

# OR decomposed format
force-app/main/default/permissionsets/MyPermSet/
  ├── layout.permissionset-meta.xml
  ├── objectPermissions.permissionset-meta.xml
  └── fieldPermissions.permissionset-meta.xml
```

## Working with Decomposed Metadata

### Retrieving Decomposed Metadata
When retrieving metadata from an org, it's automatically decomposed:

```bash
# Retrieve a custom object - will be decomposed
sf project retrieve start -m "CustomObject:Account"
```

### Deploying Decomposed Metadata
When deploying, Salesforce DX automatically handles the decomposed structure:

```bash
# Deploy all components of an object
sf project deploy start -p force-app/main/default/objects/MyObject__c
```

### Best Practices for Version Control
1. Commit each metadata component separately when possible
2. Create pull requests that focus on related metadata changes
3. Review changes at the component level for better precision

## Handling Special Cases

### Bundle Types
Some metadata types are stored as bundles:

```
force-app/main/default/lwc/myComponent/     # LWC bundle
  ├── myComponent.html
  ├── myComponent.js
  └── myComponent.js-meta.xml

force-app/main/default/aura/myComponent/    # Aura bundle
  ├── myComponent.cmp
  ├── myComponentController.js
  ├── myComponentHelper.js
  └── myComponent.cmp-meta.xml
```

### Partial Decomposition
Some metadata types are only partially decomposed:

```
force-app/main/default/layouts/
  └── Account-Account Layout.layout-meta.xml  # Not decomposed

force-app/main/default/objects/Account/layouts/  # Alternative location (when decomposed)
  └── Account_Layout.layout-meta.xml
```

## Converting Between Formats

### Convert from Metadata API to Source Format
```bash
# Convert metadata API format to source format
sf project convert mdapi:source -r mdapioutput/ -d force-app/
```

### Convert from Source Format to Metadata API
```bash
# Convert source format to metadata API format
sf project convert source:mdapi -r force-app/ -d mdapioutput/
```

## Troubleshooting

### Common Issues
1. **Missing Components**: Check if components are stored in unexpected locations
2. **Deployment Errors**: Ensure all dependent components are included in deployment
3. **Merge Conflicts**: Handle conflicts at the component level, not the file level

### Resolution Strategies
1. Use `sf project retrieve start` to see how Salesforce organizes components
2. Reference the [Metadata Coverage Report](mdc:https:/developer.salesforce.com/docs/metadata-coverage) for supported types
3. Check both standard and decomposed locations for components

## Further Reading
For more information about decomposed metadata types, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm)