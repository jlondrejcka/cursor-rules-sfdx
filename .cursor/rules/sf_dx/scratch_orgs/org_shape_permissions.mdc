---
description: Understanding the necessary permissions to work with Org Shape
globs: 
alwaysApply: false
---
 ---
description: Understanding the necessary permissions to work with Org Shape
globs: 
alwaysApply: false
---
# Org Shape Permissions

## Overview
Working with Org Shape requires specific permissions in both your Dev Hub org and your source orgs. This guide explains the permissions needed to create and manage Org Shape Scratch Orgs.

## Key Concepts
- Different permission sets are required for administrators and developers
- Permissions must be configured in the Dev Hub org
- Source org access requires proper authentication
- Permission assignments determine who can create and use Org Shape Scratch Orgs

## Required Permissions

### Dev Hub Administrator Permissions
Administrators who enable and configure Org Shape need:
- "Manage Dev Hub" permission
- System Administrator profile (or equivalent privileges)
- Access to modify Dev Hub settings in Setup

### Developer Permissions
Developers who create and use Org Shape Scratch Orgs need:
- "Create and Manage Scratch Orgs" permission
- Access to the Dev Hub org
- Access to source orgs used for creating Org Shape
- "View Setup and Configuration" permission

## Setting Up Permissions

### Creating Permission Sets for Org Shape
1. In your Dev Hub, go to **Setup > Users > Permission Sets**
2. Click **New**
3. Enter a Label (e.g., "Org Shape Developer")
4. Select a license type (typically "Salesforce")
5. Click **Save**
6. Under System Permissions, click **Edit**
7. Enable "Create and Manage Scratch Orgs" permission
8. Click **Save**

### Assigning Permission Sets
1. In your Dev Hub, go to **Setup > Users > Permission Sets**
2. Select the Org Shape permission set
3. Click **Manage Assignments**
4. Click **Add Assignments**
5. Select the users who need Org Shape access
6. Click **Assign**

## Connected App Permissions
If using a connected app for Org Shape authorization:

1. In your Dev Hub, go to **Setup > Apps > App Manager**
2. Find and select your connected app
3. Under "Manage", select **Edit Policies**
4. Ensure "API Only" is selected for Permitted Users
5. Set appropriate IP relaxation settings
6. Save changes

## Permission Verification
To verify a user has proper permissions:

```bash
sf org list shape --target-dev-hub DevHub
```

If the command succeeds, the user has appropriate permissions.

## Troubleshooting Permission Issues

### Common Permission Error Messages
- "Insufficient Privileges" - User lacks necessary permissions
- "Authentication Failed" - Source org authentication issues
- "User does not have required permissions in Dev Hub" - Missing Dev Hub permissions

### Resolving Permission Problems
1. Verify the user has the "Create and Manage Scratch Orgs" permission
2. Check that the Dev Hub is properly authorized
3. Ensure the user has access to the source org
4. Verify that Org Shape is enabled in the Dev Hub

## Best Practices
1. Use permission sets rather than modifying profiles directly
2. Create different permission sets for administrators and developers
3. Document permission assignments for team reference
4. Regularly audit permissions to ensure proper access
5. Include permission setup in onboarding documentation

## Further Reading
[Salesforce DX Developer Guide: Org Shape Permissions](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_org_shape_permissions.htm)