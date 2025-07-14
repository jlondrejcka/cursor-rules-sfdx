---
description: How to safely release your Salesforce app to production
globs: 
alwaysApply: false
---
 ---
description: How to safely release your Salesforce app to production
globs: 
alwaysApply: false
---
# Release Your App to Production

## Overview
Releasing your app to production is the final step in the deployment process, requiring careful planning and execution to minimize risks and ensure a smooth transition.

## Key Concepts
- Production deployments require thorough preparation and testing
- Deployment windows should be scheduled during low-activity periods
- Post-deployment validation confirms success
- Rollback plans provide safety in case of issues

## Detailed Guide
### Pre-Deployment Preparation
1. Schedule a maintenance window if needed
2. Notify users of potential downtime
3. Ensure all stakeholders have approved the release
4. Prepare detailed deployment and rollback plans

### Executing the Production Deployment
1. Validate the deployment without committing changes
2. Monitor system performance during deployment
3. Run automated tests to verify functionality
4. Perform manual checks of critical functionality

### Post-Deployment Activities
1. Notify users that deployment is complete
2. Monitor for any issues or performance degradation
3. Document the deployment for audit purposes
4. Update documentation and release notes

## Code Examples
```bash
# Validate deployment without committing changes
sf project deploy start --source-dir mdapioutput/ --target-org Production --check-only --test-level RunLocalTests

# Execute production deployment
sf project deploy start --source-dir mdapioutput/ --target-org Production --test-level RunLocalTests

# Check deployment status
sf project deploy report --job-id 0Afxxxxxxxxxxxx
```

## Best Practices
1. Always validate deployments before committing changes
2. Deploy during off-peak hours to minimize impact
3. Have a detailed rollback plan ready
4. Test critical functionality immediately after deployment
5. Document each production deployment thoroughly
6. Implement progressive deployments for complex changes

## Further Reading
- [Salesforce Deployment Best Practices](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy_best_practices.htm)
- [Monitoring Deployments](https://help.salesforce.com/articleView?id=sf.deploy_monitoring.htm)