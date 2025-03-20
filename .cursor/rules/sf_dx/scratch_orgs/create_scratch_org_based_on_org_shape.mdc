---
description: How to create a Scratch Org based on an existing org's shape
globs: 
alwaysApply: false
---
 ---
description: How to create a Scratch Org based on an existing org's shape
globs: 
alwaysApply: false
---
# Create a Scratch Org Based on an Org Shape

## Overview
Org Shape allows you to create Scratch Orgs that closely match the shape and configuration of an existing org. This ensures consistency between your development environment and production or sandbox orgs.

## Key Concepts
- Org Shape captures configuration, settings, and feature enablement from a source org
- Org Shape Scratch Orgs inherit features and settings from the source org
- Source orgs can be production orgs, sandboxes, or other Scratch Orgs
- Org Shape requires special permissions in your Dev Hub

## Prerequisites
- Org Shape must be enabled in your Dev Hub
- You must have the right permissions to create Org Shape Scratch Orgs
- The source org must be accessible and authorized

## Creating an Org Shape Scratch Org

### Using the sourceOrg Parameter
In your Scratch Org definition file, specify the source org ID:

```json
{
  "orgName": "My Company",
  "edition": "Enterprise",
  "sourceOrg": "00Dxx0000000001EAA",
  "hasSampleData": false
}
```

### Command to Create Org Shape Scratch Org
```bash
sf org create scratch -f config/org-shape-scratch-def.json -a OrgShapeScratch
```

## Source Org Authorization
Before creating an Org Shape Scratch Org, you need to authorize the source org:

```bash
sf org login web -a SourceOrg
```

## Overriding Source Org Settings
You can override specific settings from the source org in your definition file:

```json
{
  "orgName": "My Company",
  "edition": "Enterprise",
  "sourceOrg": "00Dxx0000000001EAA",
  "features": ["Communities"],
  "settings": {
    "lightningExperienceSettings": {
      "enableS1DesktopEnabled": true
    }
  },
  "hasSampleData": false
}
```

## Checking Org Shape Status
To check if Org Shape is enabled and available:

```bash
sf org list shape --target-dev-hub DevHub
```

## Benefits of Org Shape
1. More accurate development environment that reflects production
2. Simplified configuration management
3. Reduced setup time when creating new Scratch Orgs
4. Consistent testing environments that match production

## Limitations
- Not all settings and configurations are captured in Org Shape
- Some features may not be completely replicated
- Custom code and data are not included in Org Shape

## Best Practices
1. Use a stable source org to ensure consistency
2. Document which org was used as the source
3. Include the sourceOrg parameter in version-controlled definition files
4. Test Org Shape Scratch Orgs to ensure they have the necessary configuration
5. Consider creating multiple Org Shape definitions for different scenarios

## Further Reading
[Salesforce DX Developer Guide: Create a Scratch Org Based on an Org Shape](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_org_shape.htm)