---
description: How to view and manage authorization information for Salesforce orgs
globs: 
alwaysApply: false
---
# Authorization Information for an Org

## Overview
Managing authorization information is essential for working with Salesforce DX. This rule explains how to view, understand, and manage the authorization details of your authenticated Salesforce orgs.

## Viewing Organization Authorization Information

### Basic Org Information
View basic information about an authenticated org:

```bash
# Display information about a specific org
sf org display --target-org MyOrgAlias
```

### Detailed Authorization Information
View detailed authorization information, including access tokens and refresh tokens:

```bash
# Display verbose information about a specific org
sf org display --target-org MyOrgAlias --verbose
```

### List All Authorized Orgs
See all orgs you currently have access to:

```bash
# List all authenticated orgs
sf org list
```

## Understanding Authorization Information

### Key Information Fields

When you run `sf org display`, you'll see information such as:

- **Username**: The authenticated user's username
- **Org ID**: The 18-character Salesforce organization ID
- **Instance URL**: The URL of the Salesforce instance
- **Access Token**: (in verbose mode) The OAuth access token
- **Refresh Token**: (not directly displayed) Used to get new access tokens
- **Client ID**: The Connected App's consumer key
- **Connected Status**: Whether the connection is still valid
- **Alias**: Your locally assigned alias for this org

### Example Output
```
=== Org Description
Key              Value
───────────────  ────────────────────────────────────────────────────────────────
Access Token     00D...
Alias            DevHub
Client Id        PlatformCLI
Connected Status Connected
Id               00D1a000000xxxXXXX
Instance Url     https://mycompany.my.salesforce.com
Is Dev Hub       Yes
Org Id           00D1a000000xxxXXXAA
Status           Active
Username         admin@mycompany.com
```

## Managing Authorization Information

### Setting Default Orgs
Set a default org for cli commands:

```bash
# Set default username
sf config set target-org=MyOrgAlias

# Set default Dev Hub org
sf config set target-dev-hub=MyDevHubAlias
```

### Changing Org Aliases
Change the alias for an authenticated org:

```bash
# Change org alias
sf alias set MyNewAlias=username@example.com
```

### Revoking Authorization
Remove the authorization when it's no longer needed:

```bash
# Logout from a specific org
sf org logout --target-org MyOrgAlias

# Logout from all orgs
sf org logout --all
```

## Authorization Storage

### Local Storage Location
Authentication information is stored securely in your local environment:

- **MacOS**: Keychain
- **Windows**: Windows Credential Manager
- **Linux**: Secret Service API/gnome-keyring/libsecret

### Manual Management
In some cases, you may need to manage the auth files directly:

```bash
# View config location
sf config list

# Alternative environment variables for auth storage
export SF_USE_GENERIC_UNIX_KEYCHAIN=true
export SF_DISABLE_ENCRYPTION=true  # Not recommended for production
```

## Troubleshooting Authorization Issues

### Checking Connection Status
Verify if your authorization is still valid:

```bash
# Check status
sf org display --target-org MyOrgAlias
```

Look for "Connected Status: Connected" in the output.

### Common Auth Problems
1. **Expired Access Token**: Re-authenticate using the stored refresh token (happens automatically)
2. **Expired Refresh Token**: You'll need to completely re-authenticate
3. **Revoked Access**: If access was revoked from Salesforce, you'll need to re-authenticate
4. **Invalid Alias**: Verify your alias with `sf org list`

### Refreshing Authentication
If you're experiencing authorization issues:

```bash
# Re-authenticate using web flow
sf org login web --alias MyOrgAlias 

# Force token refresh (if supported by auth method)
sf org refresh --target-org MyOrgAlias
```

## Security Best Practices

### Protecting Authorization Information
1. Never share access or refresh tokens
2. Secure your local machine to protect stored credentials
3. Use short-lived tokens in CI/CD environments
4. Implement proper key rotation for JWT-based auth
5. Avoid using `--verbose` flag in shared environments or scripts

### Regular Maintenance
1. Periodically review authenticated orgs with `sf org list`
2. Remove unused authentications with `sf org logout`
3. Update authentication for long-running integrations regularly
4. Audit Connected App usage in your Salesforce org

## Further Reading
For more information about authorization in Salesforce DX, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_view_info.htm) 