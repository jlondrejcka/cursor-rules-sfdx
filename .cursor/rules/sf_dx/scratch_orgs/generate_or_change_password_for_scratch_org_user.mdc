---
description: How to generate or change a password for a Scratch Org user
globs: 
alwaysApply: false
---
 ---
description: How to generate or change a password for a Scratch Org user
globs: 
alwaysApply: false
---
# Generate or Change a Password for a Scratch Org User

## Overview
Scratch Org users need passwords to log in directly to the Salesforce UI. This guide explains how to generate or change passwords for Scratch Org users, including both the default admin user and any additional users you create.

## Key Concepts
- Passwords are not automatically set when Scratch Orgs or users are created
- Password generation is required for direct UI login
- Passwords can be randomly generated or specifically set
- Password operations are performed using the Salesforce CLI

## Generating a Password for the Admin User
When you create a Scratch Org, the default admin user doesn't have a password by default. To generate a password:

```bash
sf org generate password -o MyScratchOrg
```

### Output
The command returns information including:
- Username
- Password
- Instance URL
- Login URL

Example:
```
Username: test-wvkm2eik13u6@example.com
Password: Test1234
Login URL: https://power-velocity-1234-dev-ed.cs18.my.salesforce.com
```

## Generating a Password for a Specific User
If you've created additional users in your Scratch Org, you can generate passwords for them:

```bash
sf org generate password -o MyScratchOrg -u username@example.com
```

Where `username@example.com` is the username of the specific user.

## Setting a Specific Password
To set a specific password instead of generating a random one:

```bash
sf org generate password -o MyScratchOrg -u username@example.com -p YourPassword123
```

The password must meet Salesforce password requirements:
- At least 8 characters
- At least one letter and one number
- Cannot contain the username

## Password Generation During User Creation
You can generate a password at the same time you create a user:

```bash
sf org create user -o MyScratchOrg -f config/user-def.json -g
```

The `-g` flag tells the CLI to generate a password for the new user.

## Changing an Existing Password
To change an existing password, use the same command as for generating a new password:

```bash
sf org generate password -o MyScratchOrg -u username@example.com -p NewPassword123
```

This overwrites the previous password.

## Viewing Current Login Information
To see the current login information for the admin user:

```bash
sf org display -o MyScratchOrg
```

To see information for a specific user:

```bash
sf org display user -o MyScratchOrg -u username@example.com
```

## Common Use Cases

### Creating a Script to Set Up Multiple Users with Passwords
```bash
#!/bin/bash
# Create admin user password
sf org generate password -o MyScratchOrg

# Create additional users with passwords
sf org create user -o MyScratchOrg -f config/users/sales-manager.json -g
sf org create user -o MyScratchOrg -f config/users/sales-rep.json -g
sf org create user -o MyScratchOrg -f config/users/support-agent.json -g
```

### Setting Identical Passwords for Testing
```bash
sf org generate password -o MyScratchOrg -p "TestPass123"
sf org generate password -o MyScratchOrg -u sales.manager@example.com -p "TestPass123"
sf org generate password -o MyScratchOrg -u sales.rep@example.com -p "TestPass123"
```

## Troubleshooting

### Common Issues
- **"Password doesn't meet complexity requirements"**: Ensure the password meets Salesforce requirements
- **"User not found"**: Verify the username is correct
- **"Authentication failed"**: Ensure you have access to the Scratch Org

### Verifying Password Generation
After generating a password, try logging in with the provided URL and credentials to verify it works.

## Best Practices
1. Generate passwords immediately after creating users
2. Document login credentials for team members in a secure location
3. Consider using standardized passwords for test environments
4. Include password generation in setup scripts
5. For security, use strong, unique passwords even in development environments
6. Use parameter files or environment variables for scripts to avoid hardcoding passwords

## Further Reading
[Salesforce DX Developer Guide: Generate or Change a Scratch Org User Password](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_users_password.htm)