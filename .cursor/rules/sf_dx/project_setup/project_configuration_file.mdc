---
description: Understanding and configuring the Salesforce DX Project Configuration File (sfdx-project.json)
globs: 
alwaysApply: false
---
# Salesforce DX Project Configuration File

## Overview
The `sfdx-project.json` file is a key configuration file that defines project settings for Salesforce DX development. It contains information about your package directories, namespace, and other project-specific configurations.

## File Location
- Always located in the root directory of your Salesforce DX project

## Basic Structure
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

## Key Elements

### Package Directories
- Defines the directories that contain your package source
- The `default` attribute identifies the default directory for source operations
- You can include multiple package directories for modular development

```json
"packageDirectories": [
  {
    "path": "force-app",
    "default": true,
    "package": "MyPackage",
    "versionName": "Version 1.0",
    "versionNumber": "1.0.0.NEXT"
  },
  {
    "path": "my-feature",
    "default": false
  }
]
```

### Namespace
- Specifies the namespace prefix for your package
- Leave blank for projects without a namespace

### Source API Version
- Specifies the Salesforce API version to use for source operations
- Should be updated when you want to use features from newer API versions

### Login URL
- Specifies the default login URL
- Can be set to different values for production (`https://login.salesforce.com`) or sandbox (`https://test.salesforce.com`)

## Package Configuration
For package development, additional configuration is required:

```json
"packageDirectories": [
  {
    "path": "force-app",
    "default": true,
    "package": "MyPackage",
    "versionName": "Version 1.0",
    "versionNumber": "1.0.0.NEXT",
    "ancestorVersion": "1.0.0.LATEST",
    "unpackagedMetadata": {
      "path": "unpackaged"
    }
  }
]
```

## CLI Commands for Project Configuration
- View project details: `sf project display`
- Update API version: `sf project update api`

## Best Practices
1. Keep the configuration file in version control
2. Update the API version regularly to access new features
3. Use meaningful package and version names
4. For multi-package projects, clearly organize package directories 

## Further Reading
For detailed information, see the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) 