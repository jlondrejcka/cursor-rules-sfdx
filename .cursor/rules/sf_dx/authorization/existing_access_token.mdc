---
description: How to use an existing access token for Salesforce DX authentication
globs: 
alwaysApply: false
---
# Use an Existing Access Token

## Overview
In some scenarios, you may already have a valid Salesforce access token that you want to use with Salesforce DX. This approach allows you to authenticate without going through the web-based or JWT-based flows again.

## What is an Access Token?
An access token is a security credential that allows you to make authorized API calls to Salesforce. It's a string that:
- Is obtained through OAuth authentication
- Has a limited lifetime (typically 2 hours)
- Represents a specific user's access permissions
- Can be used with the Salesforce REST, SOAP, and other APIs

## Using an Existing Access Token

### Command Syntax
```bash
sf org login access-token --instance-url <instance_url> --alias <alias> [--set-default]
```

### Parameters
- `--instance-url`: The Salesforce instance URL (e.g., https://yourInstance.my.salesforce.com)
- `--alias`: An alias to identify this authenticated org
- `--set-default`: Sets this as the default org for future commands
- `--no-prompt`: Bypass prompt for access token input

### Interactive Example
```bash
# Interactive method (will prompt for access token)
sf org login access-token --instance-url https://yourInstance.my.salesforce.com --alias MyOrg
```

### Non-Interactive Example
```bash
# Non-interactive method (using command line pipe)
echo "00D...your_access_token" | sf org login access-token --instance-url https://yourInstance.my.salesforce.com --alias MyOrg --no-prompt
```

## Scenarios for Using Access Tokens

### Integration with External Systems
When you have an authentication system that already obtains Salesforce access tokens:
```bash
# Script example
ACCESS_TOKEN=$(get-token-from-external-system)
echo $ACCESS_TOKEN | sf org login access-token --instance-url $INSTANCE_URL --alias ExternalAuth --no-prompt
```

### Custom Authentication Flows
When you've implemented a custom OAuth flow that obtains access tokens:
```bash
# Example script using curl to get token and then use it
TOKEN_RESPONSE=$(curl -s -d "grant_type=password&client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&username=$USERNAME&password=$PASSWORD" https://login.salesforce.com/services/oauth2/token)
ACCESS_TOKEN=$(echo $TOKEN_RESPONSE | jq -r .access_token)
INSTANCE_URL=$(echo $TOKEN_RESPONSE | jq -r .instance_url)

echo $ACCESS_TOKEN | sf org login access-token --instance-url $INSTANCE_URL --alias CustomAuth --no-prompt
```

### Sharing Authentication Context
When another team member or system has provided you with a valid access token:
```bash
# Store token securely first
echo $ACCESS_TOKEN > token.txt
sf org login access-token --instance-url https://yourInstance.my.salesforce.com --alias SharedToken
# Immediately delete the token file
rm token.txt
```

## Limitations of Access Token Authentication

### Short Lifespan
- Access tokens typically expire after 2 hours
- No refresh token is stored, so you can't automatically re-authenticate
- You need to obtain a new access token when the current one expires

### Limited Operations
Without a refresh token:
- Long-running operations might fail if the token expires
- You'll need to re-authenticate more frequently
- Some CLI commands that require a refresh token won't work

### Security Considerations
- Access tokens provide immediate access to your org
- They should be treated as sensitive credentials
- They are transmitted in plain text when used with this command

## Best Practices

### Secure Handling of Access Tokens
1. Never store access tokens in version control
2. Transmit access tokens only through secure channels
3. Delete access tokens when no longer needed
4. Use environment variables for temporary storage

### Workflow Suggestions
1. For short-term operations, access token authentication is convenient
2. For development work, prefer web-based or JWT-based authentication
3. For CI/CD pipelines, prefer JWT-based authentication
4. For automated processes, implement proper token refresh mechanisms

### Alternate Approaches
For most scenarios, consider these alternatives:
- Web-based authentication: `sf org login web`
- JWT-based authentication: `sf org login jwt`
- SFDX Auth URL: `sf org login sfdx-url`

## Further Reading
For more information about authentication methods, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_access_token.htm) 