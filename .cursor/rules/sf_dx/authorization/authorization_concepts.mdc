---
description: Understanding the key authorization concepts in Salesforce DX
globs: 
alwaysApply: false
---
# Salesforce DX Authorization Concepts

## Overview
Authorization in Salesforce DX involves authenticating and connecting to different Salesforce orgs. Understanding the authentication mechanisms and authorization flows is essential for effective Salesforce DX development.

## Key Concepts

### Authentication Methods
- **Web-Based OAuth Flow**: Interactive browser-based authentication
- **JWT OAuth Flow**: Non-interactive, server-to-server authentication
- **Refresh Token Flow**: Uses stored refresh tokens for re-authentication
- **SFDX Auth URL**: URL format that contains encoded credentials

### Org Types and Authorization
- **Dev Hub Org**: Production or Developer Edition org that has Dev Hub enabled
- **Scratch Org**: Short-lived, disposable org for development
- **Sandbox Org**: Testing and staging environment
- **Production Org**: Live environment with real data

### Credential Storage
- Salesforce DX stores encrypted credentials locally
- Credentials include access tokens, refresh tokens, and instance URLs
- Default location varies by operating system

## Authorization Commands

### Interactive Web-Based Login
```bash
# Login to a production or Developer Edition org
sf org login web --alias MyOrg

# Login to a sandbox org
sf org login web --alias MySandbox --instance-url https://test.salesforce.com
```

### Non-Interactive JWT-Based Login
```bash
# Login using JWT flow
sf org login jwt --username username@example.com --jwt-key-file server.key --client-id your_consumer_key --instance-url https://login.salesforce.com
```

### List and Manage Authenticated Orgs
```bash
# List all authorized orgs
sf org list

# Display org details
sf org display --target-org MyOrg

# Set default username for subsequent commands
sf config set target-org=MyOrg
```

### Logout and Revoke Access
```bash
# Logout from a specific org
sf org logout --target-org MyOrg

# Logout from all orgs
sf org logout --all
```

## Authorization for CI/CD Environments

### Using SFDX Auth URL
```bash
# Login using auth URL
sf org login sfdx-url --sfdx-url-file /path/to/auth-url-file.txt
```

### Generating Auth URLs
```bash
# Generate auth URL for a connected org
sf org display --target-org MyOrg --verbose
```

### Environment Variables
```bash
# Example of using environment variables
export SF_USE_GENERIC_UNIX_KEYCHAIN=true
export SFDX_AUDIENCE_URL=https://login.salesforce.com
```

## Best Practices
1. Use named aliases for all authenticated orgs
2. Store credentials securely, especially in CI/CD environments
3. Implement JWT-based authentication for automated processes
4. Regularly refresh and rotate credentials
5. Never hardcode credentials in scripts or configuration files
6. Use environment variables for sensitive information
7. For local development, leverage the system keychain for secure storage

## Further Reading
For detailed information about authorization in Salesforce DX, see the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm) 