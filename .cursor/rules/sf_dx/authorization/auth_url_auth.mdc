---
description: How to use SFDX Auth URL for authentication between environments and in CI/CD pipelines
globs: 
alwaysApply: false
---
# SFDX Auth URL Authentication

## Overview
SFDX Auth URL authentication allows you to authenticate to Salesforce orgs using a URL string that contains encoded credentials. This method is particularly useful for transferring authentication between environments or machines, and for setting up automated CI/CD pipelines.

## What is an SFDX Auth URL?
An SFDX Auth URL is a specially formatted URL string that contains:
- The OAuth refresh token
- The instance URL
- The login URL
- The client ID (consumer key)
- Other authentication details

The URL follows this format:
```
force://<clientId>:<clientSecret>:<refreshToken>@<instanceUrl>
```

## Generating an Auth URL

### From an Existing Authenticated Org
```bash
# Display org details with auth URL
sf org display --target-org MyOrg --verbose
```

Look for the "Sfdx Auth Url" in the output.

### Saving the Auth URL to a File
```bash
# Save auth URL to a file
sf org display --target-org MyOrg --verbose --json | jq -r .result.sfdxAuthUrl > authFile.txt
```

## Using an Auth URL for Authentication

### Command Syntax
```bash
sf org login sfdx-url --sfdx-url-file <path/to/file> [--set-default] [--alias <alias>]
```

### Parameters
- `--sfdx-url-file`: Path to the file containing the SFDX Auth URL
- `--sfdx-url`: The actual SFDX Auth URL string (alternative to file)
- `--set-default`: Set as default username
- `--alias`: Set an alias for this authenticated org

### Authentication Examples

#### Using a File
```bash
# Authenticate using a file
sf org login sfdx-url --sfdx-url-file ~/authFile.txt --alias MyOrg
```

#### Using the URL Directly
```bash
# Authenticate using the URL string directly
sf org login sfdx-url --sfdx-url "force://CLIENT_ID:CLIENT_SECRET:REFRESH_TOKEN@INSTANCE_URL" --alias MyOrg
```

## Implementation in CI/CD Environments

### Environment Variables
```bash
# Set auth URL as environment variable
export SFDX_AUTH_URL=force://CLIENT_ID:CLIENT_SECRET:REFRESH_TOKEN@INSTANCE_URL

# Use environment variable for authentication
sf org login sfdx-url --sfdx-url $SFDX_AUTH_URL
```

### GitHub Actions Example
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Authenticate to Salesforce
        run: |
          echo ${{ secrets.SFDX_AUTH_URL }} > authFile.txt
          sf org login sfdx-url --sfdx-url-file authFile.txt
          rm authFile.txt
      - name: Deploy Changes
        run: sf project deploy start
```

### Circle CI Example
```yaml
jobs:
  deploy:
    docker:
      - image: salesforce/salesforcedx:latest
    steps:
      - checkout
      - run:
          name: Authenticate to Salesforce
          command: |
            echo $SFDX_AUTH_URL > authFile.txt
            sf org login sfdx-url --sfdx-url-file authFile.txt
            rm authFile.txt
      - run:
          name: Deploy
          command: sf project deploy start
```

## Security Considerations

### Protecting Auth URLs
Auth URLs contain sensitive information and should be protected:
1. Never commit auth URLs to version control
2. Use secret management in CI/CD platforms
3. Delete auth URL files after use
4. Limit access to environment variables containing auth URLs

### Revoking Access
If an auth URL is compromised:
1. Revoke the connected app's access in Salesforce
2. Reset the user's password
3. Generate new auth URLs if needed

## Troubleshooting

### Common Issues
1. **Expired Refresh Token**: Auth URLs contain refresh tokens that can expire
2. **URL Format**: Ensure the URL is correctly formatted
3. **Special Characters**: URL-encode any special characters in the auth URL
4. **File Access**: Verify file permissions when using auth URL files

### Error Handling
```bash
# Debug auth URL login
sf org login sfdx-url --sfdx-url-file authFile.txt --loglevel debug
```

## Best Practices
1. Regenerate auth URLs periodically for security
2. Use dedicated integration users with appropriate permissions
3. Store auth URLs securely using environment variables or secrets managers
4. Delete auth URL files immediately after use
5. Consider JWT-based authentication for long-term automated processes
6. Use different auth URLs for different environments (dev, staging, prod)

## Further Reading
For more information about SFDX Auth URL authentication, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_sfdxurl.htm) 