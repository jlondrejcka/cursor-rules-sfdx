---
description: Understanding the Source Format in Salesforce DX projects
globs: 
alwaysApply: false
---
# Source Format in Salesforce DX

## Overview
Salesforce DX uses a source-driven development approach with a specific format for organizing metadata. Understanding this format is critical for effective development.

## Source Format Structure
The source format is organized hierarchically:
- Package directories (e.g., `force-app`)
  - Main directory (usually `main`)
    - Default directory (`default`)
      - Metadata type directories (e.g., `classes`, `objects`, `lwc`)
        - Individual metadata files and components

## Standard Directory Structure
```
force-app/
  └── main/
      └── default/
          ├── applications/
          ├── aura/
          ├── classes/
          ├── layouts/
          ├── lwc/
          ├── objects/
          │   └── Account/
          │       ├── Account.object-meta.xml
          │       ├── fields/
          │       ├── listViews/
          │       └── validationRules/
          ├── permissionsets/
          ├── profiles/
          ├── staticresources/
          ├── tabs/
          └── triggers/
```

## Metadata File Naming Conventions

### Standard Metadata Files
- Standard metadata files use the format: `<ComponentName>.<MetadataType>-meta.xml`
- Example: `MyClass.cls-meta.xml` for Apex class metadata

### Apex Classes
- Apex class files have two parts:
  - The class code: `MyClass.cls`
  - The metadata file: `MyClass.cls-meta.xml`

### Custom Objects
- Object metadata: `CustomObject__c.object-meta.xml`
- Fields: `CustomObject__c/fields/CustomField__c.field-meta.xml`
- List Views: `CustomObject__c/listViews/MyView.listView-meta.xml`
- Validation Rules: `CustomObject__c/validationRules/MyRule.validationRule-meta.xml`

### Lightning Web Components
- Lightning Web Components use a bundle structure:
  ```
  lwc/
    └── myComponent/
        ├── myComponent.html
        ├── myComponent.js
        ├── myComponent.js-meta.xml
        ├── myComponent.css (optional)
        └── myComponent.svg (optional)
  ```

### Aura Components
- Aura components also use a bundle structure:
  ```
  aura/
    └── myComponent/
        ├── myComponent.cmp
        ├── myComponent.cmp-meta.xml
        ├── myComponentController.js
        ├── myComponentHelper.js
        ├── myComponent.css
        ├── myComponent.design
        └── myComponent.svg
  ```

## Working with Source Format

### Convert from Metadata Format
- To convert from metadata format to source format:
  `sf project convert mdapi:source -r path/to/metadata -d path/to/source`

### Convert to Metadata Format
- To convert from source format to metadata format:
  `sf project convert source:mdapi -r path/to/source -d path/to/metadata`

## Source Tracking
- Salesforce DX tracks changes to source files relative to the org
- Use `sf project track` command to view tracked changes

## Best Practices
1. Adhere to the standard directory structure
2. Keep metadata files and source files together
3. Use conventional naming for clarity
4. Organize large projects with multiple package directories
5. Include only necessary metadata types in your project

## Further Reading
For more details, see the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm) 