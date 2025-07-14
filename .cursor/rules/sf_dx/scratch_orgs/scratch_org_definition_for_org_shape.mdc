---
description: How to create and configure a Scratch Org definition file for Org Shape
globs: 
alwaysApply: false
---
 ---
description: How to create and configure a Scratch Org definition file for Org Shape
globs: 
alwaysApply: false
---
# Scratch Org Definition for Org Shape

## Overview
When using Org Shape to create Scratch Orgs, you need a specific definition file configuration. This guide explains how to create and configure a Scratch Org definition file specifically for use with Org Shape.

## Key Concepts
- Org Shape definition files require the `sourceOrg` parameter
- Some parameters override settings from the source org
- Conflict resolution follows specific rules for overlapping settings
- Multiple definition files can reference the same Org Shape

## Basic Structure for Org Shape
A basic Scratch Org definition file for Org Shape includes:

```json
{
  "orgName": "My Company",
  "edition": "Enterprise",
  "sourceOrg": "00Dxx0000000001EAA",
  "hasSampleData": false
}
```

## Required Parameters
- `sourceOrg`: The ID of the source org to use as the shape template

## Optional Parameters
- `orgName`: Name of the org (overrides source org name)
- `edition`: Edition to use (must match source org edition)
- `features`: Additional features to enable (supplements source org features)
- `settings`: Settings to override or supplement from source org
- `hasSampleData`: Whether to include sample data (default is false)
- `language`: Default language for the org
- `country`: Default country for the org

## Parameter Precedence
When there are conflicts between source org settings and definition file settings:
1. Settings explicitly defined in the definition file take precedence
2. Features explicitly defined in the definition file supplement source org features
3. Edition must match the source org edition

## Example: Supplementing Source Org Features
```json
{
  "orgName": "Feature Enriched Org",
  "edition": "Enterprise",
  "sourceOrg": "00Dxx0000000001EAA",
  "features": ["Communities", "PersonAccounts"],
  "hasSampleData": false
}
```

## Example: Overriding Source Org Settings
```json
{
  "orgName": "Custom Settings Org",
  "edition": "Enterprise",
  "sourceOrg": "00Dxx0000000001EAA",
  "settings": {
    "lightningExperienceSettings": {
      "enableS1DesktopEnabled": false
    },
    "securitySettings": {
      "passwordPolicies": {
        "enableSetPasswordInApi": true
      }
    }
  },
  "hasSampleData": false
}
```

## Finding Source Org ID
To find a source org ID for use in the definition file:

```bash
sf org list shape --target-dev-hub DevHub
```

Or from an authorized org:

```bash
sf org display -o SourceOrg --json
```

## Limitations
- Edition in the definition file must match the source org edition
- Some features cannot be added if not supported by the org edition
- Some settings may not take effect if they conflict with enabled features
- Not all source org settings are captured in the Org Shape

## Best Practices
1. Keep definition files simple by relying on the source org for most settings
2. Only override settings when necessary
3. Document why certain settings are overridden
4. Version control your Org Shape definition files
5. Name files clearly to indicate which source org they use
6. Test Scratch Orgs after creation to verify settings were applied correctly

## Further Reading
[Salesforce DX Developer Guide: Scratch Org Definition for Org Shape](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_org_shape_def_file.htm)