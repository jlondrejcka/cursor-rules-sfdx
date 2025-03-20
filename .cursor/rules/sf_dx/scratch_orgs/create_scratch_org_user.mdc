---
description: How to create additional users in a Scratch Org
globs: 
alwaysApply: false
---
 ---
description: How to create additional users in a Scratch Org
globs: 
alwaysApply: false
---
# Create a Scratch Org User

## Overview
Creating additional users in a Scratch Org allows you to test your application with different user profiles, roles, and permission sets. This guide explains how to create and manage users in your Scratch Orgs.

## Key Concepts
- Additional users can be created beyond the default admin user
- User details can be specified in a definition file
- Users can be assigned specific profiles, roles, and permission sets
- User creation can be scripted for consistent test environments

## Prerequisites
- An active Scratch Org
- Appropriate licenses available in the Scratch Org
- Required profiles and permission sets in the Scratch Org

## Creating a User with the CLI

### Basic Command Syntax
```bash
sf org create user -o MyScratchOrg -f config/user-def.json
```

### Parameters
- `-o, --target-org` - Username or alias of the Scratch Org
- `-f, --definition-file` - Path to a user definition file
- `-a, --alias` - Alias to associate with the user
- `-g, --generate-password` - Generate a password for the user
- `-p, --password` - Set a specific password for the user

### Example
```bash
sf org create user -o MyScratchOrg -f config/standard-user.json -g
```

## User Definition File Format
The user definition file is a JSON file that specifies the user's properties:

```json
{
  "Username": "testuser@example.com",
  "LastName": "User",
  "FirstName": "Test",
  "Email": "testuser@example.com",
  "ProfileName": "Standard User",
  "Alias": "tuser",
  "TimeZoneSidKey": "America/Los_Angeles",
  "LocaleSidKey": "en_US",
  "EmailEncodingKey": "UTF-8",
  "LanguageLocaleKey": "en_US"
}
```

### Required Properties
- `Username`: Must be in email format and unique
- `LastName`: User's last name
- `Email`: User's email address
- `ProfileName`: Name of an existing profile in the org
- `TimeZoneSidKey`: User's time zone
- `LocaleSidKey`: User's locale
- `EmailEncodingKey`: Email encoding (typically UTF-8)
- `LanguageLocaleKey`: User's language and locale

### Optional Properties
- `FirstName`: User's first name
- `Alias`: Short name for the user (max 8 characters)
- `UserRoleId` or `UserRole`: Role ID or name
- Additional custom fields can be included as needed

## Creating Different Types of Users

### Standard User
```json
{
  "Username": "standard.user@example.com",
  "LastName": "User",
  "FirstName": "Standard",
  "Email": "standard.user@example.com",
  "ProfileName": "Standard User",
  "TimeZoneSidKey": "America/Los_Angeles",
  "LocaleSidKey": "en_US",
  "EmailEncodingKey": "UTF-8",
  "LanguageLocaleKey": "en_US"
}
```

### Sales Manager
```json
{
  "Username": "sales.manager@example.com",
  "LastName": "Manager",
  "FirstName": "Sales",
  "Email": "sales.manager@example.com",
  "ProfileName": "Standard User",
  "UserRole": "Sales Manager",
  "TimeZoneSidKey": "America/Los_Angeles",
  "LocaleSidKey": "en_US",
  "EmailEncodingKey": "UTF-8",
  "LanguageLocaleKey": "en_US"
}
```

### Custom Profile User
```json
{
  "Username": "custom.user@example.com",
  "LastName": "User",
  "FirstName": "Custom",
  "Email": "custom.user@example.com",
  "ProfileName": "Custom: Support Profile",
  "TimeZoneSidKey": "America/Los_Angeles",
  "LocaleSidKey": "en_US",
  "EmailEncodingKey": "UTF-8",
  "LanguageLocaleKey": "en_US"
}
```

## Generating Passwords for Users
To generate a password for a specific user:

```bash
sf org generate password -o MyScratchOrg -u username@example.com
```

To create a user and generate a password in one step:

```bash
sf org create user -o MyScratchOrg -f config/user-def.json -g
```

## Assigning Permission Sets
After creating users, you can assign permission sets:

```bash
sf org assign permset -o MyScratchOrg -n PermissionSetName -u username@example.com
```

## Verifying User Creation
To verify the user was created successfully:

```bash
sf org list users -o MyScratchOrg
```

## Best Practices
1. Store user definition files in a dedicated directory like `config/users/`
2. Create standardized definition files for common user types
3. Document the purpose and permissions of each user definition
4. Use scripts to create consistent sets of users across Scratch Orgs
5. Create users with minimal necessary permissions for security testing
6. Test your application with various user profiles and permission levels

## Further Reading
[Salesforce DX Developer Guide: Create Scratch Org Users](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users_create.htm)