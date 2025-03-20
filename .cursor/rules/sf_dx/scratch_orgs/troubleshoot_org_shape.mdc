---
description: How to troubleshoot common issues with Org Shape in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to troubleshoot common issues with Org Shape in Salesforce DX
globs: 
alwaysApply: false
---
# Troubleshoot Org Shape

## Overview
When working with Org Shape, you may encounter various issues during creation, management, or usage. This guide provides troubleshooting steps for common Org Shape problems.

## Key Concepts
- Org Shape issues can occur at different stages: creation, usage, or management
- Common problems include permission issues, configuration conflicts, and command errors
- Diagnostic tools help identify the root cause of issues
- Most problems have specific resolution steps

## Common Issues and Solutions

### Org Shape Creation Issues

#### "Insufficient Privileges" Error
**Problem**: Unable to create an Org Shape due to permission issues.
**Solution**:
1. Verify the user has the "Create and Manage Scratch Orgs" permission
2. Check that Org Shape is enabled in the Dev Hub
3. Ensure the user has access to the source org

#### Timeout During Org Shape Creation
**Problem**: Org Shape creation takes too long and times out.
**Solution**:
1. Use the `--async` flag to run the shape capture asynchronously
2. Check the status later using `sf org list shape`
3. For large orgs, increase the wait time: `sf org create shape -o SourceOrg --wait 60`

#### "Source Org Not Found" Error
**Problem**: The system cannot find the source org.
**Solution**:
1. Verify the source org is properly authenticated
2. Re-authenticate to the source org: `sf org login web -a SourceOrg`
3. Check that the source org ID or alias is correct

### Scratch Org Creation Issues with Org Shape

#### Edition Mismatch Error
**Problem**: The edition in the definition file doesn't match the source org edition.
**Solution**:
1. Verify the source org's edition: `sf org list shape`
2. Update the definition file to match the source org's edition
3. If needed, create a new Org Shape from a different source org

#### Feature Enablement Failures
**Problem**: Some features specified in the definition file fail to enable.
**Solution**:
1. Check for feature dependencies or conflicts
2. Verify the features are supported by the edition
3. Try enabling features one at a time to identify the problematic one

#### Incomplete Configuration
**Problem**: The Scratch Org doesn't have all the expected settings from the source org.
**Solution**:
1. Be aware that not all settings are captured in Org Shape
2. Explicitly add critical settings to the definition file
3. Document settings that must be configured manually

### Org Shape Management Issues

#### Unable to Delete Org Shape
**Problem**: Error when trying to delete an Org Shape.
**Solution**:
1. Verify there are no active Scratch Orgs using the Org Shape
2. Check that you have the necessary permissions
3. Ensure you're using the correct Org Shape ID

#### Missing Org Shapes in List
**Problem**: Expected Org Shapes don't appear in the list.
**Solution**:
1. Verify you're checking the correct Dev Hub: `sf org list shape --target-dev-hub DevHub`
2. Ensure the Org Shapes were successfully created
3. Check if another user created the Org Shapes under different permissions

## Diagnostic Approaches

### Collecting Debug Information
To get more detailed error information:

```bash
sf org create shape -o SourceOrg --json --loglevel debug
```

### Verifying Org Shape Status
To check if an Org Shape was successfully created:

```bash
sf org list shape --target-dev-hub DevHub
```

### Checking Dev Hub Status
To verify Dev Hub configuration:

```bash
sf org display -o DevHub --json
```

## Best Practices for Avoiding Issues
1. Start with simple Org Shapes before attempting complex configurations
2. Test Org Shape creation with smaller, simpler orgs first
3. Document successful Org Shape workflows for team reference
4. Keep definition files simple, adding complexity incrementally
5. Maintain clear naming conventions for source orgs and Scratch Orgs

## Further Reading
[Salesforce DX Developer Guide: Troubleshoot Org Shape](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_org_shape_troubleshoot.htm)