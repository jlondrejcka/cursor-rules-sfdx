---
description: How to build and release your Salesforce app using the Metadata API
globs: 
alwaysApply: false
---
 ---
description: How to build and release your Salesforce app using the Metadata API
globs: 
alwaysApply: false
---
# Build and Release Your App with Metadata API

## Overview
The Metadata API provides a comprehensive way to build and release Salesforce applications through a structured deployment process.

## Key Concepts
- Metadata API is the foundation for deploying changes between Salesforce orgs
- The deployment process follows a defined workflow: development, testing, staging, and production
- Salesforce CLI provides commands to interact with the Metadata API

## Detailed Guide
### Understanding the Deployment Process
The complete deployment process typically includes:
1. Developing and testing changes locally
2. Building a release artifact
3. Testing the artifact in a staging environment
4. Releasing to production

### Using Metadata API for Deployments
The Metadata API allows you to:
- Deploy metadata components between orgs
- Validate deployments without committing changes
- Roll back failed deployments
- Monitor deployment status

## Code Examples
```bash
# Deploy metadata to an org
sf project deploy start --source-dir force-app

# Validate a deployment without making changes
sf project deploy start --source-dir force-app --check-only

# Deploy with specified test level
sf project deploy start --source-dir force-app --test-level RunLocalTests
```

## Best Practices
1. Always validate deployments before committing to production
2. Use appropriate test levels for different deployment scenarios
3. Monitor deployment status through the CLI or Salesforce Setup
4. Maintain detailed release notes for each deployment

## Further Reading
- [Salesforce Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_intro.htm)
- [Salesforce CLI Deployment Commands](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_mdapi.htm)