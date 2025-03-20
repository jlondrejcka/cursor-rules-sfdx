---
description: How to assign permission sets to users in Salesforce orgs using Salesforce CLI
globs: 
alwaysApply: false
---
 ---
description: How to assign permission sets to users in Salesforce orgs using Salesforce CLI
globs: 
alwaysApply: false
---
# Assign a Permission Set

## Overview
This rule covers how to assign permission sets to users in your Salesforce orgs using Salesforce CLI commands.

## Key Concepts
- Permission set assignments through CLI
- Managing user access programmatically
- Automation of permission assignments in deployment scripts

## Detailed Sections
### Assigning Permission Sets
- Identify the permission set API name
- Find the username to assign to
- Use the CLI command to assign the permission set

### Managing Permission Set Assignments
- Listing existing permission set assignments
- Removing permission set assignments
- Bulk assignment operations

## Code Examples
```bash
# Assign a permission set to a user
sf org assign permset -n PermissionSetName -u username@example.com

# Assign a permission set to the default org user
sf org assign permset -n PermissionSetName

# List all permission sets assigned to a user
sf data query -q "SELECT PermissionSet.Name FROM PermissionSetAssignment WHERE Assignee.Username = 'username@example.com'" -u OrgAlias
```

## Best Practices
1. Include permission set assignments in deployment scripts for consistent environments
2. Use permission sets to manage access instead of modifying profiles directly
3. Document which permission sets are required for different user roles
4. Create scripts to automate permission assignments for consistent org setup

## Further Reading
- [Salesforce CLI Command Reference: Permission Set Assignment](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_user.htm)
- [Permission Sets and Permission Set Groups](https://help.salesforce.com/articleView?id=perm_sets_overview.htm)