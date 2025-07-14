---
description: Understanding Metadata API versions and their impact on metadata coverage
globs: 
alwaysApply: false
---
 ---
description: Understanding Metadata API versions and their impact on metadata coverage
globs: 
alwaysApply: false
---
# Metadata API Versions

## Overview
Salesforce releases new API versions three times a year, and each version may introduce new metadata types, modify existing ones, or deprecate others. Understanding how API versions affect metadata coverage is crucial for effective Salesforce DX development. This rule explains how to work with different Metadata API versions and their impact on your projects.

## API Version Basics

### Release Cycle
- Three releases per year (Spring, Summer, Winter)
- New API version with each release
- Version format: `XX.0` (e.g., `58.0` for Summer '23)

### Version Impacts
- New metadata types may be introduced
- Existing metadata fields may be added or modified
- Behavior of existing metadata types may change
- Certain metadata types may be deprecated

## Setting API Versions

### In sfdx-project.json
Set the default API version for your project:

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

### In CLI Commands
Specify API version in CLI commands:

```bash
# Deploy with a specific API version
sf project deploy start --source-dir force-app --api-version 58.0

# Retrieve with a specific API version
sf project retrieve start --source-dir force-app --api-version 58.0
```

### In Component Files
Individual components may specify their API version:

```xml
<!-- In Apex class metadata -->
<ApexClass xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion>
    <status>Active</status>
</ApexClass>
```

## API Version Strategy

### Choosing the Right Version
Factors to consider when selecting an API version:

1. **Org Compatibility**: Ensure all target orgs support your chosen version
2. **Feature Requirements**: Choose a version that supports needed features
3. **Stability**: Older versions may be more stable but lack new features
4. **Support Timeline**: Consider Salesforce's version support policy

### Version Alignment
Keep API versions aligned across:
- Project configuration
- Individual components
- CI/CD pipelines
- Development environments

```bash
# Update API version in multiple files
find force-app -name "*.xml" -type f -exec sed -i 's/<apiVersion>57.0<\/apiVersion>/<apiVersion>58.0<\/apiVersion>/g' {} \;
```

## API Version and Metadata Coverage

### Checking Coverage by Version
The Metadata Coverage Report allows filtering by API version:

```bash
# Check coverage for a specific version
sf open metadata:coverage --api-version 58.0
```

### Version-Specific Coverage Issues

#### New Metadata Types
New metadata types are typically only available in newer API versions:

```bash
# Check if a new type is available in your version
sf open metadata:coverage --metadata-type NewFeatureType --api-version 58.0
```

#### Modified Metadata
Existing metadata may gain new fields or behavior:

```bash
# Deploy with a newer version to access new fields
sf project deploy start --source-dir force-app --api-version 58.0
```

#### Deprecated Metadata
Some metadata may be deprecated in newer versions:

```bash
# Use an older version if needed for deprecated features
sf project deploy start --source-dir force-app --api-version 54.0
```

## Upgrading API Versions

### Incremental Approach
Take an incremental approach to version upgrades:

1. Test in sandbox environments first
2. Identify and resolve any compatibility issues
3. Update all component API versions
4. Update project configuration

### Upgrade Process
```bash
# Update project configuration
sed -i 's/"sourceApiVersion": "57.0"/"sourceApiVersion": "58.0"/g' sfdx-project.json

# Update component API versions
find force-app -name "*.xml" -type f -exec sed -i 's/<apiVersion>57.0<\/apiVersion>/<apiVersion>58.0<\/apiVersion>/g' {} \;

# Test deployment with new version
sf project deploy start --source-dir force-app --check-only
```

### Testing After Upgrade
Test thoroughly after upgrading API version:

```bash
# Run all tests
sf apex run test --target-org DevSandbox --code-coverage --test-level RunLocalTests
```

## API Version Best Practices

1. **Standardize Versions**: Use the same API version across your project
2. **Document Version Choice**: Document why a specific version was chosen
3. **Regular Reviews**: Review API version strategy with each Salesforce release
4. **Version Control**: Include API version changes in version control
5. **Test Coverage**: Test thoroughly when changing API versions

## Troubleshooting Version Issues

### Common Issues
1. **Missing Features**: Newer features not available in older versions
2. **Behavior Changes**: Different behavior between versions
3. **Deployment Failures**: Errors when deploying between orgs with different versions

### Resolution Strategies
1. Check the [Salesforce Release Notes](mdc:https:/help.salesforce.com/s/articleView?id=release-notes.salesforce_release_notes.htm) for version-specific changes
2. Test deployments with the target org's API version
3. Consider using feature detection instead of version checks in code

## Further Reading
For more information about API versions and metadata coverage, see the [Metadata API Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_api_version.htm) and [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_api_version.htm)