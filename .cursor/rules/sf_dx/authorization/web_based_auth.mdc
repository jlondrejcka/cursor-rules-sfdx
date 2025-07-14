---
description: How to authenticate to Salesforce orgs using the web-based OAuth flow
globs: 
alwaysApply: false
---
# Web-Based Authentication in Salesforce DX

## Overview
Web-based authentication is the most common and user-friendly method for authenticating to Salesforce orgs. It uses the OAuth 2.0 web server flow to authenticate a user through their web browser.

## How It Works
1. The CLI opens a browser window to Salesforce login page
2. User enters credentials and approves access
3. Salesforce issues an access token and refresh token
4. The CLI securely stores these tokens locally
5. Tokens are used for subsequent API calls

## Command Syntax

### Basic Authentication
```bash
sf org login web [--set-default] [--alias <alias>] [--instance-url <url>]
```

### Common Parameters
- `--set-default`: Sets the authenticated org as the default for future commands
- `--alias <alias>`: Assigns a name to the authenticated org for future reference
- `--instance-url <url>`: Specifies the login URL (e.g., https://test.salesforce.com for sandboxes)

## Authentication Examples

### Production or Developer Edition Org
```bash
# Basic authentication
sf org login web

# With alias and set as default
sf org login web --set-default --alias DevOrg
```

### Sandbox Org
```bash
# Authenticate to a sandbox
sf org login web --instance-url https://test.salesforce.com --alias MySandbox
```

### Custom Domain
```bash
# Authenticate to org with custom domain
sf org login web --instance-url https://mycustomdomain.my.salesforce.com --alias CustomDomain
```

## Managing Web-Based Authentications

### List Authenticated Orgs
```bash
sf org list
```

### Display Org Details
```bash
sf org display --target-org MyOrgAlias
```

### Set Default Username
```bash
sf config set target-org=MyOrgAlias
```

### Revoking Access
```bash
# Logout from a specific org
sf org logout --target-org MyOrgAlias

# Logout from all orgs
sf org logout --all
```

## Troubleshooting

### Common Issues
1. **Session Timeout**: If you encounter "Session expired or invalid" errors, re-authenticate
2. **Browser Issues**: If browser doesn't open automatically, use the URL displayed in the terminal
3. **Permission Issues**: Ensure your user has appropriate API permissions in the org

### Error Handling
```bash
# Force login refresh
sf org login web --instance-url https://login.salesforce.com --alias MyOrg --no-prompt
```

## Security Considerations
1. Tokens are stored securely in your local system keychain
2. Never share credential files between machines or users
3. Avoid using shared computers for authentication when possible
4. Set reasonable session timeout policies in your Salesforce org

## Best Practices
1. Use meaningful aliases for different orgs
2. Create separate authentications for each project
3. Regularly verify your authenticated orgs with `sf org list`
4. Log out from unused or unnecessary org connections
5. For automated processes, consider using JWT-based authentication instead

## Further Reading
For more details on web-based authentication, see the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_web_flow.htm) 