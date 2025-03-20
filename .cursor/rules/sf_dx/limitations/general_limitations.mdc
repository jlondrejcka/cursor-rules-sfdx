---
description: Understanding general limitations and constraints when working with Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: Understanding general limitations and constraints when working with Salesforce DX
globs: 
alwaysApply: false
---
# Salesforce DX Limitations

## Overview
Salesforce DX has several limitations and constraints that developers should be aware of when building and deploying applications. Understanding these limitations helps you make informed decisions about your development approach and avoid common pitfalls.

## Key Limitations

- **Metadata Type Coverage**: Not all metadata types are fully supported in source format
- **API Limits**: Standard Salesforce API governor limits apply to DX operations
- **Scratch Org Limitations**: Scratch orgs have time and feature limitations
- **Package Version Creation**: Creating package versions can be time-consuming
- **Performance**: Large deployments may experience performance issues
- **Source Tracking**: Some metadata types have limitations with source tracking

## Metadata Coverage Limitations

### Partially Supported Metadata Types
Some metadata types are only partially supported in source format:
- Profiles and permission sets may require special handling
- Custom settings with large data volumes
- Some Lightning components with complex dependencies

### Unsupported Metadata Types
Some metadata types are not supported in source format and require workarounds:
- Certain types of reports and dashboards
- Some customizations made through the Setup menu
- Organization-specific settings

## Scratch Org Limitations

### Time Constraints
- Default 7-day lifespan (max 30 days)
- Limited number of active scratch orgs per Dev Hub (default allocation)

### Feature Constraints
- Not all Salesforce features available in production are available in scratch orgs
- Edition-specific features may not be available in all scratch org types
- Performance differences between scratch orgs and production environments

## Deployment Limitations

### Size and Complexity
- Large deployments may time out or fail
- Complex dependency trees can cause deployment issues
- Certain components must be deployed in a specific order

### API Limits
- Salesforce API limits apply to deployment operations
- Bulk operations are subject to governor limits
- Rate limiting may affect continuous integration processes

## Source Tracking Limitations

### Performance Issues
- Source tracking may be slow for orgs with large amounts of metadata
- Pull and push operations can time out for complex changes

### Tracking Gaps
- Not all changes are tracked automatically
- Profile changes may require special handling
- Some UI customizations may not be properly tracked

## Best Practices to Mitigate Limitations

1. Break deployments into smaller, manageable packages
2. Implement retry mechanisms in CI/CD pipelines
3. Use selective deployment to focus on changed components
4. Test deployments in full sandboxes before production
5. Document known limitations for your specific organization
6. Create specialized scripts to handle problematic metadata types
7. Implement proper error handling in automated processes

## Further Reading
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Metadata Coverage Report](https://mdcoverage.secure.force.com/docs/metadata-coverage)
- [Known Issues](https://success.salesforce.com/issues_index)