---
description: How to use JWT-based OAuth flow for automated and headless authentication
globs: 
alwaysApply: false
---
# JWT-Based Authentication in Salesforce DX

## Overview
JWT-based authentication provides a secure way to authenticate to Salesforce orgs in non-interactive or automated scenarios, such as CI/CD pipelines. It uses a JWT (JSON Web Token) and a private key for authentication without user interaction.

## Prerequisites

### 1. Create a Connected App
1. In your Salesforce org, go to Setup > App Manager > New Connected App
2. Configure the Connected App:
   - Enable OAuth Settings
   - Set Callback URL (e.g., `http://localhost:1717/OauthRedirect`)
   - Select "Use digital signatures" and upload a certificate
   - Add "Manage user data via APIs" to Selected OAuth Scopes

### 2. Generate Certificate and Private Key
```bash
# Generate private key
openssl genrsa -out server.key 2048

# Generate certificate signing request
openssl req -new -key server.key -out server.csr

# Generate self-signed certificate
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

### 3. Configure Connected App Policies
1. In your Connected App settings, set appropriate policies:
   - Permitted Users: "Admin approved users are pre-authorized"
2. Manage Profiles and Permission Sets to authorize appropriate users

## JWT Authentication Command

### Basic Syntax
```bash
sf org login jwt --username <username> --jwt-key-file <path/to/server.key> --client-id <connected_app_consumer_key> [--instance-url <url>] [--set-default] [--alias <alias>]
```

### Parameters
- `--username`: The username of the Salesforce user
- `--jwt-key-file`: Path to the private key file
- `--client-id`: Consumer Key from the Connected App
- `--instance-url`: Login URL (default is https://login.salesforce.com)
- `--set-default`: Set as default username
- `--alias`: Set an alias for this authenticated org

## Authentication Examples

### Production Org
```bash
sf org login jwt --username user@example.com --jwt-key-file server.key --client-id 1234567890abcdef --alias ProdOrg
```

### Sandbox Org
```bash
sf org login jwt --username user@example.com.sandbox --jwt-key-file server.key --client-id 1234567890abcdef --instance-url https://test.salesforce.com --alias SandboxOrg
```

## Implementation in CI/CD

### CircleCI Example
```yaml
jobs:
  deploy:
    docker:
      - image: salesforce/salesforcedx:latest
    steps:
      - checkout
      - run:
          name: Setup Salesforce Authentication
          command: |
            echo "$SERVER_KEY" > server.key
            sf org login jwt --username $SF_USERNAME --jwt-key-file server.key --client-id $CLIENT_ID --instance-url $INSTANCE_URL
      - run:
          name: Deploy to Org
          command: sf project deploy start
```

### GitHub Actions Example
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Salesforce CLI
        run: npm install @salesforce/cli --global
      - name: Authenticate to Salesforce
        run: |
          echo "${{ secrets.SERVER_KEY }}" > server.key
          sf org login jwt --username ${{ secrets.SF_USERNAME }} --jwt-key-file server.key --client-id ${{ secrets.CLIENT_ID }}
      - name: Deploy Changes
        run: sf project deploy start
```

## Troubleshooting

### Common Issues
1. **Invalid Key Format**: Ensure the private key is in PEM format and includes header/footer
2. **Consumer Key Issues**: Verify the Connected App's consumer key is correct
3. **User Authorization**: Check that the user is pre-authorized for the Connected App
4. **IP Restrictions**: Verify IP restrictions on the profile or Connected App allow access

### Debugging
```bash
# Run with debug logging
sf org login jwt --username user@example.com --jwt-key-file server.key --client-id 1234567890abcdef --loglevel debug
```

## Security Best Practices
1. Store private keys securely (use secret management in CI/CD)
2. Rotate certificates and keys regularly
3. Use IP restrictions on Connected Apps when possible
4. Create dedicated integration users with minimum required permissions
5. Avoid committing keys or credentials to source control
6. Use environment variables for sensitive information

## Further Reading
For detailed information on JWT-based authentication, see the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm) 