---
description: How to create and use a user definition file for customizing Scratch Org users
globs: 
alwaysApply: false
---
 ---
description: How to create and use a user definition file for customizing Scratch Org users
globs: 
alwaysApply: false
---
# User Definition File for Customizing a Scratch Org User

## Overview
User definition files provide a standardized way to specify user properties when creating users in Scratch Orgs. This guide explains how to create and structure user definition files to customize Scratch Org users according to your testing needs.

## Key Concepts
- User definition files are JSON files containing user information
- Files can specify profiles, permissions, roles, and other user attributes
- Multiple definition files can be created for different user types
- Definition files ensure consistent user creation across environments

## User Definition File Structure
A basic user definition file includes required fields and optional customizations:

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

## Required Fields
The following fields are required in all user definition files:

| Field | Description | Example |
|-------|-------------|---------|
| `Username` | Unique username in email format | "testuser@example.com" |
| `LastName` | User's last name | "User" |
| `Email` | User's email address | "testuser@example.com" |
| `ProfileName` | Name of an existing profile | "Standard User" |
| `TimeZoneSidKey` | Time zone | "America/Los_Angeles" |
| `LocaleSidKey` | Locale | "en_US" |
| `EmailEncodingKey` | Email encoding | "UTF-8" |
| `LanguageLocaleKey` | Language and locale | "en_US" |

## Optional Fields
These fields are optional but useful for customization:

| Field | Description | Example |
|-------|-------------|---------|
| `FirstName` | User's first name | "Test" |
| `Alias` | Short name (8 char max) | "tuser" |
| `UserRoleId` | ID of a user role | "00E000000012345" |
| `UserRole` | Name of a user role | "CEO" |
| `IsActive` | Whether user is active | true |
| `Title` | Job title | "Developer" |
| `CompanyName` | Company name | "Acme Corp" |
| `Department` | Department | "Engineering" |
| `Division` | Division | "Products" |
| `ManagerId` | ID of the user's manager | "005000000012345" |

## Common User Types

### System Administrator
```json
{
  "Username": "admin@example.com",
  "LastName": "Admin",
  "FirstName": "System",
  "Email": "admin@example.com",
  "ProfileName": "System Administrator",
  "TimeZoneSidKey": "America/Los_Angeles",
  "LocaleSidKey": "en_US",
  "EmailEncodingKey": "UTF-8",
  "LanguageLocaleKey": "en_US"
}
```

### Standard User with Role
```json
{
  "Username": "sales.rep@example.com",
  "LastName": "Rep",
  "FirstName": "Sales",
  "Email": "sales.rep@example.com",
  "ProfileName": "Standard User",
  "UserRole": "Sales Representative",
  "Title": "Sales Representative",
  "Department": "Sales",
  "Division": "North America",
  "TimeZoneSidKey": "America/Los_Angeles",
  "LocaleSidKey": "en_US",
  "EmailEncodingKey": "UTF-8",
  "LanguageLocaleKey": "en_US"
}
```

### Customer Community User
```json
{
  "Username": "customer@example.com",
  "LastName": "Customer",
  "FirstName": "Community",
  "Email": "customer@example.com",
  "ProfileName": "Customer Community User",
  "CompanyName": "Customer Company",
  "TimeZoneSidKey": "America/Los_Angeles",
  "LocaleSidKey": "en_US",
  "EmailEncodingKey": "UTF-8",
  "LanguageLocaleKey": "en_US"
}
```

## Using Definition Files with the CLI
To create a user with a definition file:

```bash
sf org create user -o MyScratchOrg -f config/users/admin-user.json
```

To create a user and generate a password:

```bash
sf org create user -o MyScratchOrg -f config/users/standard-user.json -g
```

## Creating Multiple Users with Different Files
You can create multiple users in a script:

```bash
#!/bin/bash
sf org create user -o MyScratchOrg -f config/users/admin-user.json -g
sf org create user -o MyScratchOrg -f config/users/sales-manager.json -g
sf org create user -o MyScratchOrg -f config/users/sales-rep1.json -g
sf org create user -o MyScratchOrg -f config/users/sales-rep2.json -g
```

## Customizing the Default Admin User
You can customize the admin user during Scratch Org creation by specifying `adminEmail` in the Scratch Org definition file:

```json
{
  "orgName": "My Company",
  "edition": "Developer",
  "adminEmail": "admin@mycompany.com",
  "features": []
}
```

## Best Practices
1. Store user definition files in a version-controlled directory
2. Use descriptive filenames that indicate the user type
3. Create templates for common user types
4. Include only the necessary fields to avoid clutter
5. Document the purpose of each user definition file
6. Standardize formats for usernames and emails
7. Group related users in subdirectories

## Further Reading
[Salesforce DX Developer Guide: User Definition Files](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users_def_files.htm)