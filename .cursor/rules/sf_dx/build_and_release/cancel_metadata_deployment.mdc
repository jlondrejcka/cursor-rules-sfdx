---
description: How to cancel a Metadata API deployment in progress
globs: 
alwaysApply: false
---
 ---
description: How to cancel a Metadata API deployment in progress
globs: 
alwaysApply: false
---
# Cancel a Metadata Deployment

## Overview
Sometimes it's necessary to cancel a deployment that's in progress due to errors, performance issues, or other concerns. Salesforce provides mechanisms to safely cancel deployments.

## Key Concepts
- Deployments can be canceled while they're in a queued or in-progress state
- Cancellation rolls back any partially applied changes
- Quick action can prevent negative impacts on your organization
- Not all deployments can be canceled once they reach certain stages

## Detailed Guide
### When to Cancel a Deployment
Consider canceling a deployment when:
1. You discover errors in the deployment package
2. The deployment is causing unexpected system behavior
3. The deployment is taking too long during business hours
4. You need to make urgent changes to the deployment package

### How to Cancel a Deployment
1. Identify the deployment job ID
2. Use Salesforce CLI or Setup UI to cancel the deployment
3. Verify the cancellation was successful
4. Document the reason for cancellation

## Code Examples
```bash
# Check deployment status
sf project deploy report --job-id 0Afxxxxxxxxxxxx

# Cancel an in-progress deployment
sf project deploy cancel --job-id 0Afxxxxxxxxxxxx

# Verify the deployment was canceled
sf project deploy report --job-id 0Afxxxxxxxxxxxx
```

## Best Practices
1. Monitor deployments actively so you can quickly identify issues
2. Have authorized personnel ready to make cancellation decisions
3. Document all canceled deployments and their reasons
4. Review canceled deployments to improve future releases
5. Consider using validation deployments (--check-only) to identify issues before actual deployment

## Further Reading
- [Salesforce Metadata API Deployment Options](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy_options.htm)
- [Canceling Deployments in Salesforce](https://help.salesforce.com/articleView?id=sf.deploy_cancel.htm)