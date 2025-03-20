---
description: How to deploy and retrieve changes identified by source tracking
globs: 
alwaysApply: false
---
 ---
description: How to deploy and retrieve changes identified by source tracking
globs: 
alwaysApply: false
---
# Deploy and Retrieve Changes Identified by Source Tracking

## Overview
After identifying changes through source tracking, you need to know how to deploy local changes to your org and retrieve remote changes to your local project. This rule covers the processes for deploying and retrieving source-tracked changes.

## Key Concepts
- Source-tracked deployments only deploy what has changed
- Source-tracked retrievals only retrieve what has changed
- Changes can be deployed/retrieved selectively or all at once
- Deployment and retrieval operations update source tracking data

## Detailed Sections
### Deploying Source-Tracked Changes
Learn how to push your local changes to a Salesforce org.

### Retrieving Source-Tracked Changes
Discover how to pull org changes to your local project.

### Selective Deployment and Retrieval
Understand how to deploy or retrieve specific components rather than all tracked changes.

### Validating Deployments
Test your deployments before committing them to production.

## Code Examples
```bash
# Deploy source-tracked changes to org
sf project deploy start -o your-org-alias

# Retrieve source-tracked changes from org
sf project retrieve start -o your-org-alias

# Deploy specific components
sf project deploy start -o your-org-alias -m ApexClass:MyClass,CustomObject:Account

# Validate deployment without actually deploying
sf project deploy validate -o your-org-alias
```

## Best Practices
1. Always preview changes before deploying or retrieving
2. Use validation deployments in critical environments
3. Deploy and retrieve frequently to minimize conflicts
4. Be selective with deployments when working on large orgs
5. Keep track of your deployment history for auditing purposes

## Further Reading
See the official Salesforce DX documentation for detailed information on deploying and retrieving tracked changes.