---
description: Managing environment-specific configuration and variables in Salesforce DX projects
globs: 
alwaysApply: false
---
# Managing Environment Configuration and Variables

## Overview
When working with multiple environments in Salesforce DX, you need to manage different configurations for each environment. Salesforce DX provides tools to handle environment-specific variables and settings.

## Configuration Files

### 1. Project Configuration File
The `sfdx-project.json` file contains project-wide settings:
```json
{
  "packageDirectories": [
    {
      "path": "force-app",
      "default": true
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "58.0"
}
```

### 2. Scratch Org Definition Files
Stored in `config/` directory, these files define scratch org settings:
```json
// config/project-scratch-def.json
{
  "orgName": "My Company",
  "edition": "Developer",
  "features": ["EnableSetPasswordInApi"],
  "settings": {
    "lightningExperienceSettings": {
      "enableS1DesktopEnabled": true
    }
  }
}
```

Create environment-specific definition files:
- `config/project-scratch-def.json` (default)
- `config/dev-scratch-def.json` (development)
- `config/qa-scratch-def.json` (QA)

## Environment Variables

### Using Environment Variables
Salesforce CLI supports environment variables for sensitive information and environment-specific settings.

1. Set environment variables:
```bash
# Unix/Linux/macOS
export SFDX_DEV_HUB_AUTH_URL=myDevHubAuthUrl

# Windows (Command Prompt)
set SFDX_DEV_HUB_AUTH_URL=myDevHubAuthUrl

# Windows (PowerShell)
$env:SFDX_DEV_HUB_AUTH_URL="myDevHubAuthUrl"
```

2. Use environment variables in scripts:
```bash
sf org login web --instance-url $SFDX_INSTANCE_URL
```

### Common Environment Variables
- `SF_LOG_LEVEL`: Controls CLI logging level
- `SF_TARGET_ORG`: Default username or alias for commands
- `SF_INSTANCE_URL`: Default Salesforce instance URL
- `SF_DEV_HUB`: Default Dev Hub org

## Configuration Files for CI/CD

### Environment-Specific Config
Create configuration files for different environments:

```
myproject/
  ├── config/
  │   ├── project-scratch-def.json
  │   ├── dev-settings.json
  │   ├── staging-settings.json
  │   └── prod-settings.json
  └── scripts/
      └── deploy.sh
```

### Sample Deployment Script
```bash
#!/bin/bash
ENVIRONMENT=$1
CONFIG_FILE="./config/${ENVIRONMENT}-settings.json"

if [ -f "$CONFIG_FILE" ]; then
  echo "Deploying to $ENVIRONMENT using $CONFIG_FILE"
  # Use configuration file in deployment
  sf project deploy start --source-dir force-app --target-org $ENVIRONMENT
else
  echo "Configuration for $ENVIRONMENT not found"
  exit 1
fi
```

## Managing Secrets

### Secure Handling of Credentials
1. Store secrets in environment variables
2. Use CI/CD platform's secret management
3. Never commit secrets to version control

Example GitHub Actions secret usage:
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: 'Deploy to Org'
        run: sf project deploy start --target-org ${{ secrets.SF_TARGET_ORG }}
        env:
          SFDX_CLIENT_ID: ${{ secrets.SFDX_CLIENT_ID }}
          SFDX_CLIENT_SECRET: ${{ secrets.SFDX_CLIENT_SECRET }}
```

## Best Practices
1. Use environment variables for sensitive information
2. Create environment-specific configuration files
3. Parameterize deployment scripts
4. Use CI/CD platform's secret management
5. Document required variables for each environment
6. Keep consistent naming conventions across environments
7. Validate configurations before deployment

## Further Reading
For more information, see the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_cli_env_variables.htm) 