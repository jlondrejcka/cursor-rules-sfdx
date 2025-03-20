---
description: Configure organization settings in a Scratch Org definition file
globs: 
alwaysApply: false
---
 ---
description: Configure organization settings in a Scratch Org definition file
globs: 
alwaysApply: false
---
# Scratch Org Settings

## Overview
Scratch Org settings allow you to configure specific organization preferences, capabilities, and behaviors when creating a Scratch Org. Settings are specified in the `settings` object in the Scratch Org definition file.

## Key Concepts
- Settings are organized into related groups based on Salesforce functionality
- Settings configurations mirror the Metadata API settings objects
- Each setting group contains one or more configuration options
- Settings values can be boolean, string, number, or complex objects

## Common Settings

### User Interface Settings
```json
"lightningExperienceSettings": {
  "enableS1DesktopEnabled": true
}
```

### Mobile Settings
```json
"mobileSettings": {
  "enableS1EncryptedStoragePref2": false
}
```

### Security Settings
```json
"securitySettings": {
  "passwordPolicies": {
    "enableSetPasswordInApi": true
  },
  "sessionSettings": {
    "sessionTimeout": "TwoHours"
  }
}
```

### Account Settings
```json
"accountSettings": {
  "enableRelateContactToMultipleAccounts": true
}
```

### Case Management Settings
```json
"caseSettings": {
  "emailToCase": {
    "enableEmailToCase": true
  }
}
```

### Language Settings
```json
"languageSettings": {
  "enableTranslationWorkbench": true
}
```

### Chatter Settings
```json
"chatterSettings": {
  "enableChatter": true
}
```

## Example Settings Configuration
```json
{
  "orgName": "My Company",
  "edition": "Developer",
  "features": ["API"],
  "settings": {
    "lightningExperienceSettings": {
      "enableS1DesktopEnabled": true
    },
    "securitySettings": {
      "passwordPolicies": {
        "enableSetPasswordInApi": true
      }
    },
    "mobileSettings": {
      "enableS1EncryptedStoragePref2": false
    },
    "emailAdministrationSettings": {
      "enableEnhancedEmailEnabled": true
    },
    "languageSettings": {
      "enableTranslationWorkbench": true
    }
  }
}
```

## Finding Available Settings
Settings correspond to Metadata API types. You can explore available settings in the Metadata API documentation.

To see the current settings in an existing org, you can retrieve the metadata:

```bash
sf project retrieve start --metadata Settings:Security
```

## Best Practices
1. Only configure settings that are relevant to your development needs
2. Test with settings that match your production environment
3. Document which settings are required for your application
4. Create different definition files for different settings configurations
5. Use descriptive names for your definition files that indicate the included settings

## Further Reading
[Salesforce DX Developer Guide: Scratch Org Definition Configuration Values](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)
[Metadata API Developer Guide: Settings](mdc:https:/developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)