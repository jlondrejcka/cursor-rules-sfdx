---
description: Understanding special behavior and considerations during metadata deployments
globs: 
alwaysApply: false
---
 ---
description: Understanding special behavior and considerations during metadata deployments
globs: 
alwaysApply: false
---
# Special Behavior in Metadata Deployments

## Overview
Certain metadata types exhibit special behavior during deployment through Salesforce DX and the Metadata API. Understanding these behaviors is essential for successful deployments and avoiding common pitfalls. This rule explains the special considerations for different metadata types during deployment.

## Metadata Types with Special Behavior

### Profiles and Permission Sets

#### Special Behavior
- Not all permissions can be deployed
- Some permissions are environment-specific
- References to non-existent components are silently ignored

#### Handling Strategy
```bash
# Deploy profiles after all other components
sf project deploy start --metadata Profile:Admin
```

Best practices:
1. Deploy profiles last, after all other components
2. Consider using permission sets instead of profiles when possible
3. Use minimal profiles with permission sets for granular control

### Custom Objects and Fields

#### Special Behavior
- Dependencies must be deployed in the correct order
- Field deletions require special handling
- Master-detail relationships have specific requirements

#### Handling Strategy
```bash
# Deploy objects before relationships
sf project deploy start --metadata "CustomObject:Account,CustomObject:Contact"

# Then deploy relationships
sf project deploy start --metadata CustomField:Contact.AccountId
```

Best practices:
1. Deploy parent objects before child objects
2. Handle picklist values carefully
3. Be cautious with field type changes

### Apex Classes and Triggers

#### Special Behavior
- Test coverage requirements (75% coverage for production)
- Code dependencies must be resolved
- Trigger order can affect behavior

#### Handling Strategy
```bash
# Deploy with test execution
sf project deploy start --metadata ApexClass --test-level RunLocalTests
```

Best practices:
1. Include test classes in deployments
2. Handle code dependencies explicitly
3. Be aware of test data requirements

## Destructive Changes

### Special Considerations
- Deleting components can have cascading effects
- Some deletions require special permissions
- Order of deletion matters

### Handling Strategy
```bash
# Create a destructiveChanges.xml file
echo '<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>OldClass</members>
        <name>ApexClass</name>
    </types>
</Package>' > destructiveChanges.xml

# Deploy with destructive changes
sf project deploy start --metadata-dir your_metadata_dir --pre-destructive-changes destructiveChanges.xml
```

Best practices:
1. Document dependencies before deletion
2. Deploy destructive changes in phases
3. Test deletions in sandbox environments first

## Metadata Deployment Ordering

### Natural Deployment Order
The Metadata API attempts to deploy components in a logical order:

1. Custom objects
2. Custom fields
3. Validation rules
4. Page layouts
5. Workflows
6. Apex classes
7. Visualforce components
8. Visualforce pages
9. Profiles

### Handling Order Issues
Sometimes you need to control deployment order:

```bash
# Deploy in multiple steps
sf project deploy start --metadata CustomObject
sf project deploy start --metadata CustomField
sf project deploy start --metadata ValidationRule
```

## Package.xml Considerations

### Wildcard Behaviors
Wildcards (`*`) behave differently for different metadata types:

```xml
<!-- This includes all custom fields on Account -->
<types>
    <members>Account.*</members>
    <name>CustomField</name>
</types>

<!-- This includes all Apex classes -->
<types>
    <members>*</members>
    <name>ApexClass</name>
</types>
```

### Handling Package.xml
```bash
# Create specialized package.xml files for different deployment phases
cp package.xml package-phase1.xml
cp package.xml package-phase2.xml

# Edit each file to include appropriate components

# Deploy in phases
sf project deploy start --manifest package-phase1.xml
sf project deploy start --manifest package-phase2.xml
```

## Partial Deployments

### Validation-Only Deployments
Validate deployments before executing them:

```bash
# Validate deployment without making changes
sf project deploy start --metadata CustomObject:Account --check-only
```

### Quick Deployments
After validation, deploy without running tests again:

```bash
# Deploy using a previously validated deployment ID
sf project deploy start --validation-id 0Af0x00000123ABC
```

## Best Practices

1. **Test Deployments**: Always test deployments in sandbox environments first
2. **Understand Dependencies**: Map component dependencies before deployment
3. **Use Versioning**: Include API versions for all deployments
4. **Incremental Deployments**: Deploy changes in small, incremental batches
5. **Monitor Logs**: Review deployment logs for warning messages
6. **Rollback Strategy**: Always have a rollback plan for failed deployments

## Further Reading
For more information about special behavior in metadata deployments, see the [Metadata API Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_deploy_considerations.htm) and [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_deploy.htm)