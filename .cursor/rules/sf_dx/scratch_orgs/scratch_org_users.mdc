---
description: Understanding Scratch Org user management and permissions
globs: 
alwaysApply: false
---
 ---
description: Understanding Scratch Org user management and permissions
globs: 
alwaysApply: false
---
# Scratch Org Users

## Overview
Scratch Orgs come with an admin user by default, but you may need to create additional users for testing, development, or to simulate a production environment with different user roles and permissions. This guide explains how to manage users in Scratch Orgs.

## Key Concepts
- Each Scratch Org has a default admin user created automatically
- Additional users can be created for testing different permission levels
- User definitions can be stored in files for reuse
- Scratch Org users can have passwords set for direct login

## Default Admin User

### Characteristics
- Created automatically with the Scratch Org
- Has System Administrator profile by default
- Username is automatically generated
- Can be customized during Scratch Org creation

### Viewing Admin User Details
To see information about the default admin user:

```bash
sf org display -o MyScratchOrg
```

This shows the admin username, password (if set), and other details.

## Managing Scratch Org Users

### Listing Users in a Scratch Org
To see all users in a Scratch Org:

```bash
sf org list users -o MyScratchOrg
```

### Accessing User Information
To get detailed information about a specific user:

```bash
sf org display user -o MyScratchOrg -u username@example.com
```

### Generating a Password for the Admin User
To set or reset the admin user's password:

```bash
sf org generate password -o MyScratchOrg
```

This generates a random password for the admin user or you can specify a password with the `--password` option.

## User Management Considerations

### User Licenses
- Scratch Orgs have limited user licenses available
- The number of users you can create depends on the Scratch Org edition
- User licenses are consumed when you create new users

### User Profiles and Permissions
- Users can be assigned any profile available in the Scratch Org
- Custom permission sets can be assigned to users
- Role hierarchy can be configured for testing sharing and visibility

### Data Visibility
- Different users see different data based on:
  - Profile permissions
  - Role hierarchy
  - Sharing rules
  - Record ownership

## Simulating Multi-User Environments

### Testing Sharing Rules
Create multiple users with different roles to test sharing behavior:

```bash
sf org create user -o MyScratchOrg -f config/user-def.json
```

### Testing Permission Sets
Assign different permission sets to users to test feature access:

```bash
sf data create record -o MyScratchOrg -s PermissionSetAssignment -v "AssigneeId=005xx000000abcdAAA PermissionSetId=0PS000000000123"
```

### Impersonating Different Users
Log in as different users to test the user experience:

1. Generate a password for the user
2. Use the login URL and credentials to log in

## Best Practices
1. Document user configurations for consistent testing
2. Use user definition files to create users with consistent settings
3. Create users with different profiles for comprehensive testing
4. Test sharing and visibility from multiple user perspectives
5. Include user creation in setup scripts for Scratch Orgs
6. Consider creating a standardized set of test users for common scenarios

## Further Reading
[Salesforce DX Developer Guide: Scratch Org Users](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users.htm)