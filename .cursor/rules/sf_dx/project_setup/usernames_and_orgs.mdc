---
description: Understanding Salesforce DX Usernames and Orgs
globs: 
alwaysApply: false
---
 ---
description: Understanding Salesforce DX Usernames and Orgs
globs: 
alwaysApply: false
---
# Salesforce DX Usernames and Orgs

## Overview
Salesforce DX introduces a new approach to managing orgs and usernames for development. This rule explains how usernames work across different org types, how to manage them, and best practices for implementing a username strategy in your development process.

## Types of Orgs in Salesforce DX

### Dev Hub Org
- Central org that manages scratch orgs
- Used for creating and deleting scratch orgs
- Can be a production org, Developer Edition, or trial org
- Typically limited to one per team or project

```bash
# Authorize a Dev Hub org
sf org login web --set-default-dev-hub --alias DevHub
```

### Scratch Orgs
- Short-lived, disposable orgs
- Created from your Dev Hub org
- Can be created with specific configurations, features, and settings
- Used for development, testing, and automation

```bash
# Create a scratch org
sf org create scratch --definition-file config/project-scratch-def.json --alias MyScratchOrg
```

### Sandbox Orgs
- Copies of production orgs
- Used for testing, UAT, and staging
- Created from your production org
- Longer-lived than scratch orgs

```bash
# Authorize a sandbox org
sf org login web --instance-url https://test.salesforce.com --alias MySandbox
```

### Production Orgs
- Your live, customer-facing org
- Used for final deployments and production releases
- Typically has stricter security controls and change management

```bash
# Authorize a production org
sf org login web --instance-url https://login.salesforce.com --alias Production
```

## Username Management

### Username Format
- Scratch org usernames are automatically generated unless specified
- Follow the format: `username@example.com.orgname`
- Org-specific domains help avoid conflicts between different orgs

### Org Aliases
Aliases provide a convenient shorthand for referencing orgs:

```bash
# Set an alias for an existing authorized org
sf alias set MyProdOrg=username@example.com

# List all aliases
sf alias list

# Delete an alias
sf alias unset MyProdOrg
```

### Default Username
Set a default username to avoid specifying it in every command:

```bash
# Set default username for current project
sf config set target-org=MyScratchOrg

# Set default Dev Hub
sf config set target-dev-hub=DevHub
```

## Managing Orgs and Authentication

### View Authenticated Orgs
List all orgs you're authenticated to:

```bash
# List all authorized orgs
sf org list

# View details of a specific org
sf org display --target-org MyScratchOrg
```

### Organization Details
View detailed information about an org:

```bash
# Get org details
sf org display --target-org MyScratchOrg --verbose
```

### Logout from Orgs
Remove authentication for orgs you're no longer using:

```bash
# Logout from a specific org
sf org logout --target-org MyScratchOrg

# Logout from all orgs
sf org logout --all
```

## Username Strategy for Teams

### Dev Hub Username Conventions
For the Dev Hub, consider a team-wide naming convention:

```
team-devhub@yourcompany.com
```

### Scratch Org Username Conventions
For scratch orgs, include developer initials and purpose:

```
# Example format: dev-initials.purpose@project.scratchorg
jd.feature123@myproject.scratchorg
```

### Sandbox Username Conventions
For sandboxes, use consistent format to identify purpose:

```
# Format: username.sandbox-name@yourcompany.com.sandbox
developer1.qa@yourcompany.com.qa
developer1.uat@yourcompany.com.uat
```

## Automating Username Management

### Configuration Files
Store org and username configurations in your project:

```bash
# Create a local config file
mkdir -p .sf
touch .sf/config.json
```

Example `.sf/config.json`:
```json
{
  "target-org": "MyScratchOrg",
  "target-dev-hub": "DevHub"
}
```

### Scripting Org Creation
Automate org creation with scripts:

```bash
#!/bin/bash
# Create a scratch org with predefined username
sf org create scratch \
  --definition-file config/project-scratch-def.json \
  --username developer@example.com.scratch \
  --alias DevScratch \
  --duration-days 7
```

### CI/CD Integration
For CI/CD pipelines, use service accounts with clear naming:

```
ci-user@yourproject.com
```

## Troubleshooting Username Issues

### Common Problems

1. **Username Already in Use**:
   ```bash
   # Use a more unique username
   sf org create scratch --definition-file config/project-scratch-def.json --username unique-name@example.com.scratch
   ```

2. **Username Invalid Format**:
   ```bash
   # Ensure username is in email format
   sf org create scratch --definition-file config/project-scratch-def.json --username validformat@example.com
   ```

3. **Authentication Issues**:
   ```bash
   # Refresh authentication
   sf org logout --target-org ProblemOrg
   sf org login web --alias ProblemOrg
   ```

### Debug Commands

Check current authentication:
```bash
# Show current user details
sf org display --target-org MyScratchOrg
```

## Best Practices

1. **Use Meaningful Aliases**: Create descriptive aliases for your orgs (e.g., `DevScratch`, `QASandbox`, etc.)
2. **Document Username Strategy**: Include your username convention in your project README
3. **Rotate Service Account Credentials**: Regularly update passwords for service accounts used in automated processes
4. **Limit Org Access**: Only authenticate to orgs you actively need
5. **Use Project-Specific Configuration**: Set local org defaults for each project

## Further Reading
For more information about Salesforce DX usernames and orgs, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_usernames_orgs.htm)