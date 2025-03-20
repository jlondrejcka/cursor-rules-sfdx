---
description:  How to authorize your production org for sandbox operations in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to authorize your production org for sandbox operations in Salesforce DX
globs: 
alwaysApply: false
---
# Authorize Your Production Org

## Overview
Before creating or working with sandboxes in Salesforce DX, you must first authorize your production org. This rule provides guidance on authorizing your production organization to enable sandbox management.

## Key Concepts
- Production org authorization is required for sandbox operations
- Web-based OAuth flow is recommended for production org authorization
- Production orgs are identified with a "." suffix in alias names

## Authorization Process
### Using Web-Based OAuth Flow
```bash
sf org login web --instance-url https://login.salesforce.com --alias yourProdOrg
```

### Verifying Authorization
```bash
sf org list --all
```

## Important Notes
- Always use the production org (not a sandbox) for creating and managing sandboxes
- Ensure your user account has appropriate permissions to create sandboxes
- Store your production org authentication for reuse in scripts and CI/CD pipelines

## Best Practices
1. Use a distinct alias for your production org (e.g., "prodOrg")
2. Verify authorization before attempting sandbox operations
3. For headless environments, consider using JWT-based authentication

## Further Reading
- [Salesforce CLI Authentication](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth.htm)
- [Sandbox Management Permissions](https://help.salesforce.com/articleView?id=sf.create_test_instance.htm)