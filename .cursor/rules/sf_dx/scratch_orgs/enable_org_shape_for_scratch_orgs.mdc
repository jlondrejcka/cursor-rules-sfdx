---
description: How to enable Org Shape functionality for Scratch Orgs in your Dev Hub
globs: 
alwaysApply: false
---
 ---
description: How to enable Org Shape functionality for Scratch Orgs in your Dev Hub
globs: 
alwaysApply: false
---
# Enable Org Shape for Scratch Orgs

## Overview
Org Shape is a powerful feature that allows you to create Scratch Orgs that mirror the configuration and settings of an existing org. Before you can use Org Shape, you need to enable it in your Dev Hub org.

## Key Concepts
- Org Shape must be enabled in the Dev Hub org before use
- Enabling Org Shape requires admin permissions in the Dev Hub
- Once enabled, all users with appropriate permissions can create Org Shape Scratch Orgs
- Org Shape enablement is managed through Setup in your Dev Hub org

## Prerequisites
- A Dev Hub org with admin access
- Salesforce DX enabled in your Dev Hub org
- Proper permissions to modify Dev Hub settings

## Enabling Org Shape in Dev Hub

### Through the Salesforce UI
1. Log in to your Dev Hub org
2. Go to **Setup**
3. In the Quick Find box, search for **Dev Hub**
4. Select **Dev Hub** in the Setup menu
5. Check the box for **Enable Org Shape for Scratch Orgs**
6. Click **Save**

### Verification
To verify that Org Shape is enabled, you can use the Salesforce CLI:

```bash
sf org list shape --target-dev-hub DevHub
```

## Permission Requirements
Users need the following permissions to create and manage Org Shape Scratch Orgs:

- "Create and Manage Scratch Orgs" permission
- Access to the Dev Hub org
- Source org access (for the org being used as the shape model)

## Setting Up User Permissions
To grant users the ability to use Org Shape:

1. In your Dev Hub, go to **Setup**
2. Navigate to **Users > Permission Sets**
3. Create a new Permission Set or modify an existing one
4. Add the "Create and Manage Scratch Orgs" permission
5. Assign the Permission Set to appropriate users

## Common Issues When Enabling Org Shape
- Insufficient permissions in the Dev Hub
- Dev Hub not properly set up or authenticated
- License limitations in your Dev Hub org

## Testing Org Shape After Enablement
After enabling Org Shape, test it by creating a simple Org Shape Scratch Org:

```bash
sf org create scratch -f config/org-shape-def.json -a TestOrgShape
```

Where the definition file contains:
```json
{
  "orgName": "Org Shape Test",
  "edition": "Developer",
  "sourceOrg": "YOUR_SOURCE_ORG_ID"
}
```

## Best Practices
1. Enable Org Shape in a centralized Dev Hub that the whole team can access
2. Document the enablement process for team reference
3. Create a dedicated permission set for Org Shape users
4. Regularly verify that Org Shape is functioning correctly
5. Monitor usage to ensure compliance with Scratch Org limits

## Further Reading
[Salesforce DX Developer Guide: Enable Org Shape](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_org_shape_enable.htm)