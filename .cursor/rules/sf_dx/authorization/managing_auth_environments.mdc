---
description: Best practices for managing authentication across different Salesforce environments
globs: 
alwaysApply: false
---
# Managing Authentication Across Environments

## Overview
When working with Salesforce DX, developers often need to authenticate to multiple orgs across different environments (development, testing, staging, production). This rule provides best practices for managing these authentication contexts effectively.

## Environment Types

### Development Environments
- Developer sandboxes
- Scratch orgs
- Developer Edition orgs
- Personal dev environments

### Testing and Staging Environments
- UAT sandboxes
- Integration testing environments
- Partial/Full copy sandboxes
- Staging environments

### Production Environments
- Production orgs
- Release orgs

## Authentication Strategies by Environment

### Local Development
```bash
# Create aliases for different environments
sf org login web --alias DevSandbox --instance-url https://test.salesforce.com
sf org login web --alias Scratch1 --set-default
sf org login web --alias Scratch2

# Switch between environments
sf config set target-org=DevSandbox
```

### CI/CD Pipelines
```bash
# JWT-based auth for automated processes
sf org login jwt --username ciuser@example.com --jwt-key-file server.key --client-id $CLIENT_ID --alias CIOrg

# Auth URL for simpler setups
sf org login sfdx-url --sfdx-url $SFDX_AUTH_URL --alias CIOrg
```

### Production Deployments
```bash
# Authenticate to production for deployment
sf org login web --alias Production --instance-url https://login.salesforce.com
sf project deploy validate --target-org Production
sf project deploy start --target-org Production
```

## Managing Multiple Authentication Contexts

### Listing and Viewing Orgs
```bash
# List all authenticated orgs
sf org list

# List org details
sf org display --target-org MyOrg

# List all default settings
sf config list
```

### Setting Default Orgs
```bash
# Set default username
sf config set target-org=MyOrg

# Set default DevHub org
sf config set target-dev-hub=MyDevHub
```

### Removing Authentication
```bash
# Logout from specific org
sf org logout --target-org MyOrg

# Logout from all orgs
sf org logout --all
```

## Project-Specific Configuration

### Using Configuration Files
Create a `.sf/config.json` file in your project to set project-specific defaults:

```json
{
  "target-org": "MyProjectOrg",
  "target-dev-hub": "MyDevHub",
  "org-api-version": "58.0"
}
```

### Environment Variables
Set environment variables for different contexts:

```bash
# Development environment
export SF_TARGET_ORG=DevSandbox

# Testing environment
export SF_TARGET_ORG=TestSandbox

# Production environment
export SF_TARGET_ORG=Production
```

## Authentication in Team Environments

### Team Development Workflow
1. Each developer authenticates to their own environments
2. Shared integration environments use dedicated service accounts
3. CI/CD uses JWT-based authentication with dedicated users
4. Production access is limited to release managers

### Sharing Authentication Context (When Needed)
```bash
# Generate auth URL (Only share through secure channels!)
sf org display --target-org MyOrg --verbose

# Use auth URL on other machine
sf org login sfdx-url --sfdx-url "force://..." --alias SharedOrg
```

## Security Best Practices

### Authentication Hygiene
1. Regularly review and clean up authenticated orgs
2. Use different users for different environments
3. Implement MFA for all Salesforce users
4. Rotate secrets and certificates regularly

### Credential Management
1. Use system keychain for local development
2. Use secret management for CI/CD (GitHub Secrets, Jenkins Credentials, etc.)
3. Never store credentials in version control
4. Use environment variables for sensitive information

### Permissions and Access
1. Use principle of least privilege for integration users
2. Create permission sets specifically for API/integration access
3. Implement IP restrictions for API access when possible
4. Audit API access regularly

## Troubleshooting Authentication Issues

### Common Issues
1. **Session Expiration**: Re-authenticate if session has expired
2. **Invalid Credentials**: Verify username, password, and security token
3. **IP Restrictions**: Check for IP restrictions on profile or Connected App
4. **API Permissions**: Ensure user has API access enabled

### Debugging Tools
```bash
# Enable debug logging
sf org login web --loglevel debug

# Check current auth status
sf org display --target-org MyOrg --verbose
```

## Further Reading
For detailed information about Salesforce DX authentication, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm) 