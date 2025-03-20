---
description: How to use the default Connected App security in Salesforce DX
globs: 
alwaysApply: false
---
# Use the Default Connected App Security

## Overview
Salesforce DX provides a default Connected App for authentication that simplifies the process for developers. Understanding how this default Connected App works and its security implications is important for effective development with Salesforce DX.

## Default Connected App Details

### What is the Default Connected App?
The default Connected App is a pre-configured Connected App that ships with the Salesforce CLI. It is used automatically when you authenticate using the web-based flow without specifying a client ID.

### Key Characteristics
- Pre-configured OAuth settings
- Standard callback URL
- Predefined OAuth scopes
- Managed by Salesforce

## Using the Default Connected App

### Web-Based Authentication
When you use the basic web authentication command without specifying a client ID, the default Connected App is used:

```bash
# Uses the default Connected App
sf org login web --alias MyOrg
```

### Viewing Default Connected App Details
While you can't directly view all details of the default Connected App, you can see the authorization details after authenticating:

```bash
# Display details of the authenticated org
sf org display --target-org MyOrg --verbose
```

## Default Connected App Security Considerations

### Security Model
The default Connected App follows these security principles:
- Uses standard OAuth 2.0 authorization code flow
- Stores refresh tokens securely in your local keychain
- Implements standard token rotation policies
- Adheres to Salesforce platform security standards

### Limitations and Constraints
- Cannot be used for JWT-based authentication
- Cannot modify the OAuth scopes or policies
- Relies on web-based user interaction (not suitable for headless scenarios)
- Subject to standard Salesforce session timeout policies

## When to Use Custom Connected Apps Instead

### Scenarios Requiring Custom Connected Apps
Consider creating your own Connected App when you need to:
1. Implement JWT-based authentication
2. Customize OAuth scopes
3. Set specific security policies
4. Use custom certificate-based authentication
5. Implement IP restrictions
6. Control token lifetimes
7. Track API usage by application

### Command With Custom Connected App
When using a custom Connected App, include the client ID:

```bash
# Uses a custom Connected App
sf org login web --client-id YOUR_CONSUMER_KEY --alias MyOrg
```

## Revoking Access for Default Connected App

### From Salesforce UI
1. Log in to your Salesforce org
2. Navigate to Setup > Connected Apps OAuth Usage
3. Find "Salesforce CLI" or "SFDX CLI" in the list
4. Click "Revoke" to revoke all refresh tokens

### From CLI
```bash
# Logout from a specific org
sf org logout --target-org MyOrg

# Logout from all orgs
sf org logout --all
```

## Best Practices

### For Development and Personal Use
1. The default Connected App is suitable for individual developer activities
2. Secure your device to protect stored tokens
3. Log out when working on shared computers
4. Regularly review and clean up authenticated orgs

### For Team and Enterprise Use
1. Create dedicated Connected Apps for team/project use
2. Implement appropriate security policies on custom Connected Apps
3. Use JWT-based authentication for CI/CD and automation
4. Track and audit Connected App usage

### For Production Deployments
1. Never use the default Connected App for production deployments
2. Create a dedicated Connected App with appropriate security policies
3. Assign proper user permissions and profiles
4. Implement strict IP restrictions

## Troubleshooting

### Common Issues
1. **Authorization Errors**: Could be due to user permissions or security settings
2. **Invalid Session ID**: Token expired and needs re-authentication
3. **Access Denied**: User doesn't have proper permissions or IP restrictions are enforced

### Resolution Steps
1. Re-authenticate using `sf org login web`
2. Verify network connectivity and proxy settings
3. Check user permissions in Salesforce

## Further Reading
For more information about Connected Apps and authentication, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm) 