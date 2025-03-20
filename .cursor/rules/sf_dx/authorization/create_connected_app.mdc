---
description: How to create a Connected App in your Salesforce org for API integration and authentication
globs: 
alwaysApply: false
---
# Create a Connected App in Your Org

## Overview
A Connected App is required for OAuth-based authentication flows in Salesforce, including JWT-based authentication. It defines how an external application can connect to Salesforce and what data it can access.

## Connected App Configuration Steps

### 1. Navigate to Connected App Setup
1. Log in to your Salesforce org
2. Go to Setup
3. In the Quick Find box, enter "App Manager"
4. Click on "App Manager"
5. Click "New Connected App" button in the upper right

### 2. Basic Information
Fill in the required basic information:
- Connected App Name: A descriptive name (e.g., "SFDX Integration")
- API Name: Will auto-populate based on the Connected App Name
- Contact Email: Your email address or a team email
- Description: Purpose of the Connected App (e.g., "Used for SFDX CLI authentication")

### 3. API (Enable OAuth Settings)
Configure OAuth settings:
1. Check "Enable OAuth Settings"
2. Callback URL: `http://localhost:1717/OauthRedirect` (for SFDX CLI)
3. Selected OAuth Scopes:
   - "Manage user data via APIs (api)"
   - "Perform requests at any time (refresh_token, offline_access)"
   - Add other scopes as needed

### 4. JWT Authentication Settings (for JWT Flow)
If using JWT authentication:
1. Check "Use digital signatures"
2. Upload your certificate file (.crt)

### 5. Save the Connected App
Click "Save" to create the Connected App.

## Important Connected App Values

After saving, you'll need these values for authentication:
- **Consumer Key**: Used as the client ID in authentication commands
- **Consumer Secret**: Used as the client secret in some authentication flows
- **Callback URL**: The configured redirect URL

To view these values after creation:
1. Go to Setup > App Manager
2. Find your Connected App
3. Click the dropdown arrow and select "View"
4. In the "API (Enable OAuth Settings)" section, you'll see the Consumer Key and Secret

## Connected App Security Policies

### Configure Policies
After creating the Connected App, you need to set security policies:

1. From Setup > App Manager, find your Connected App
2. Click the dropdown arrow and select "Manage"
3. Click "Edit Policies"

### OAuth Policies
Set appropriate policies:
- **Permitted Users**: Choose who can access your app
  - "All users may self-authorize" - Any user can authorize themselves
  - "Admin approved users are pre-authorized" - Only users with proper profile/permission set can access

### IP Relaxation
Choose an IP relaxation setting:
- **Enforce IP restrictions**: Users must be in trusted IP ranges
- **Relax IP restrictions**: IP restrictions are validated but users outside the range can approve access
- **Relax IP restrictions with second factor**: Requires two-factor authentication for users outside trusted IP ranges

### Refresh Token Policy
Set refresh token behavior:
- **Refresh token is valid until revoked**: Tokens never expire (best for long-term automation)
- **Refresh token expires after X**: Set an expiration period

## Assign Users to the Connected App

If using "Admin approved users are pre-authorized":

1. From Setup > App Manager, find your Connected App
2. Click the dropdown arrow and select "Manage"
3. Scroll down to "Profiles" or "Permission Sets" section
4. Click "Manage Profiles" or "Manage Permission Sets"
5. Add appropriate profiles or permission sets

## Testing the Connected App

### Test Web-Based OAuth
```bash
sf org login web --instance-url https://login.salesforce.com
```

### Test JWT-Based OAuth
```bash
sf org login jwt --username user@example.com --jwt-key-file server.key --client-id YOUR_CONSUMER_KEY --instance-url https://login.salesforce.com
```

## Troubleshooting Connected App Issues

### Common Problems
1. **Invalid client**: Incorrect Consumer Key or Connected App not properly set up
2. **Invalid redirect_uri**: Callback URL in authentication request doesn't match Connected App
3. **Authorization failure**: User doesn't have permission to access the Connected App
4. **Certificate issues**: Certificate not properly uploaded or formatted

### Debugging Steps
1. Verify the Consumer Key matches what's in the Connected App
2. Check that your callback URL matches exactly (including http/https)
3. Ensure the user has been assigned to the Connected App (if using admin approval)
4. Try authentication with the `--loglevel debug` flag

## Best Practices
1. Use a meaningful Connected App name that identifies its purpose
2. Request only the OAuth scopes that your application needs
3. Implement proper IP restrictions for production Connected Apps
4. Use a dedicated user for automated processes
5. Create separate Connected Apps for different environments
6. Regularly audit Connected App usage and assigned users
7. Implement session policies appropriate to your security requirements

## Further Reading
For more information, see the [Salesforce Connected App Documentation](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_connected_app.htm) 