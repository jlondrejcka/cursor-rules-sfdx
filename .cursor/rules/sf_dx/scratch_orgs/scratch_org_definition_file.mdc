---
description: How to build and customize a Scratch Org definition file
globs: 
alwaysApply: false
---
 ---
description: How to build and customize a Scratch Org definition file
globs: 
alwaysApply: false
---
# Build Your Own Scratch Org Definition File

## Overview
A Scratch Org definition file is a JSON file that specifies the configuration details for a Scratch Org. It defines the edition, features, settings, and other properties needed when creating a Scratch Org.

## Key Concepts
- Scratch Org definition files use JSON format
- They specify configuration details required to create consistent Scratch Orgs
- Definition files can be stored in the `config` folder of your project
- The file is used with the `sf org create scratch` command

## Basic Structure
A basic Scratch Org definition file includes:

```json
{
  "orgName": "My Company",
  "edition": "Developer",
  "features": [],
  "settings": {},
  "hasSampleData": false
}
```

## Required Properties
- `edition`: Specifies the Salesforce edition to use (Developer, Enterprise, Group, Professional, etc.)

## Optional Properties
- `orgName`: Name of the org
- `username`: Username for the admin user (auto-generated if not specified)
- `adminEmail`: Email for the admin user
- `hasSampleData`: Whether to include sample data (default is false)
- `features`: Array of features to enable
- `settings`: Object containing org settings to configure
- `sourceOrg`: Source org ID for org shape-based Scratch Orgs
- `release`: Salesforce release version (Current, Previous, Preview)
- `language`: Default language for the org
- `country`: Default country for the org
- `description`: Description of the Scratch Org

## Example Definition File
```json
{
  "orgName": "My Company",
  "edition": "Enterprise",
  "features": ["Communities", "ServiceCloud", "MarketingUser"],
  "settings": {
    "lightningExperienceSettings": {
      "enableS1DesktopEnabled": true
    },
    "mobileSettings": {
      "enableS1EncryptedStoragePref2": false
    },
    "securitySettings": {
      "passwordPolicies": {
        "enableSetPasswordInApi": true
      }
    }
  },
  "hasSampleData": true
}
```

## Command Usage
To create a Scratch Org using a definition file:

```bash
sf org create scratch -f config/project-scratch-def.json -a MyScratchOrg
```

## Best Practices
1. Store definition files in the `config` directory of your project
2. Version control your definition files
3. Create different definition files for different development scenarios
4. Document the purpose of each definition file in your project
5. Include only the features and settings required for your development needs

## Further Reading
[Salesforce DX Developer Guide: Scratch Org Definition File](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm)