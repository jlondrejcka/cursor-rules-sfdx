---
description: How to authorize a Scratch Org using the JWT-based OAuth flow
globs: 
alwaysApply: false
---
# Authorize a Scratch Org Using the JWT Flow

## Overview
Scratch orgs can be authorized using the JWT-based OAuth flow, which is particularly useful for automated processes and CI/CD pipelines. This approach allows for non-interactive authentication to scratch orgs.

## Prerequisites

Before authorizing a scratch org with JWT flow, ensure you have:
1. A Dev Hub org that's already authenticated
2. A private key and certificate for JWT authentication
3. A Connected App configured in your Dev Hub org
4. The username of the scratch org you want to authenticate to

## Scratch Org JWT Authorization Process

### 1. Create a Scratch Org
First, create a scratch org if you don't already have one:

```bash
# Create a scratch org using your Dev Hub
sf org create scratch --target-dev-hub MyDevHub --definition-file config/project-scratch-def.json --set-default --alias MyScratchOrg
```

### 2. Get the Scratch Org Username
Retrieve the username of your scratch org:

```bash
# Display scratch org information
sf org display --target-org MyScratchOrg

# The output will include the username (typically ends with @example.com)
```

Note the username, which will look something like `test-xyzabc@example.com`.

### 3. Authenticate Using JWT Flow
Use the JWT-based authentication command with the scratch org username:

```bash
# JWT authentication to scratch org
sf org login jwt --username test-xyzabc@example.com --jwt-key-file server.key --client-id YOUR_CONNECTED_APP_CONSUMER_KEY --instance-url https://test.salesforce.com --alias MyScratchOrg
```

## Key Parameters for Scratch Org JWT Authentication

- `--username`: The full username of the scratch org user
- `--jwt-key-file`: Path to your private key file
- `--client-id`: Consumer Key from your Connected App in the Dev Hub
- `--instance-url`: For scratch orgs, typically https://test.salesforce.com
- `--alias`: A local alias to refer to this scratch org

## Use Cases for JWT Authentication with Scratch Orgs

### CI/CD Pipeline Integration
Authenticate to scratch orgs in automated build processes:

```yaml
# Example GitHub Actions workflow step
- name: Authenticate to Scratch Org
  run: |
    echo "${{ secrets.SERVER_KEY }}" > server.key
    sf org login jwt --username $SCRATCH_ORG_USERNAME --jwt-key-file server.key --client-id ${{ secrets.CLIENT_ID }} --instance-url https://test.salesforce.com
```

### Automated Testing
Set up authentication for automated test suites:

```bash
#!/bin/bash
# Create scratch org
sf org create scratch --target-dev-hub DevHub --definition-file config/test-scratch-def.json --alias TestOrg

# Get username
SCRATCH_USERNAME=$(sf org display --target-org TestOrg --json | jq -r .result.username)

# JWT auth for scripts
sf org login jwt --username $SCRATCH_USERNAME --jwt-key-file server.key --client-id $CLIENT_ID --instance-url https://test.salesforce.com --alias TestOrg

# Run tests
sf apex run test --target-org TestOrg
```

### Multiple Scratch Org Management
When working with multiple scratch orgs in different contexts:

```bash
# For each scratch org, authenticate using JWT
for org in $(sf org list scratch --json | jq -r '.scratchOrgs[].username'); do
  sf org login jwt --username $org --jwt-key-file server.key --client-id $CLIENT_ID --instance-url https://test.salesforce.com
done
```

## Special Considerations for Scratch Orgs

### Authentication Lifecycle
- Scratch orgs have a limited lifespan (typically 1-30 days)
- JWT authentication will fail after the scratch org expires
- The connected app in the Dev Hub must have appropriate permissions

### User Provisioning
- The admin user is automatically created when the scratch org is created
- This user has a username that ends with @example.com
- The Connected App must be configured to allow this user to authenticate

### Instance URL
- Scratch orgs use different instances, but you can typically use https://test.salesforce.com
- For more specific control, use the exact instance URL from `sf org display`

## Troubleshooting JWT Authentication with Scratch Orgs

### Common Issues
1. **Invalid User**: Verify the scratch org username is correct and the org hasn't expired
2. **Connected App Issues**: Ensure your Connected App in Dev Hub is properly configured
3. **Permission Problems**: Check that the Connected App has proper OAuth scopes
4. **Certificate Mismatch**: Verify the certificate in the Connected App matches your private key

### Debugging Steps
```bash
# Check scratch org status
sf org list scratch

# Get detailed info
sf org display --target-org MyScratchOrg --verbose

# Attempt JWT auth with debug logging
sf org login jwt --username test-xyz@example.com --jwt-key-file server.key --client-id YOUR_CONSUMER_KEY --instance-url https://test.salesforce.com --loglevel debug
```

## Best Practices

1. Create a dedicated Connected App in your Dev Hub for scratch org JWT authentication
2. Use descriptive aliases for scratch orgs to keep track of their purpose
3. In CI/CD, ensure scratch orgs are created with sufficient duration for your processes
4. Clean up expired scratch orgs regularly
5. Store JWK keys securely, especially in automation environments
6. Consider using different Connected Apps for different environments/purposes

## Further Reading
For more information about JWT-based authentication with scratch orgs, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_jwt_flow.htm) 