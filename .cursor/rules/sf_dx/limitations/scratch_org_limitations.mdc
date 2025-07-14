---
description: Understanding the limitations of Scratch Orgs in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: Understanding the limitations of Scratch Orgs in Salesforce DX
globs: 
alwaysApply: false
---
# Scratch Org Limitations in Salesforce DX

## Overview
Scratch orgs are ephemeral Salesforce environments that serve as development and testing spaces. While they're powerful, they have several limitations that developers need to understand to use them effectively.

## Time and Allocation Limitations

### Scratch Org Lifespan
- Default lifespan is 7 days (configurable up to 30 days)
- Once expired, scratch orgs are deleted and cannot be recovered
- Snapshots must be created to preserve configurations

### Dev Hub Allocations
- Limited number of active scratch orgs per Dev Hub (varies by license)
- Enterprise Edition: Default 40 active scratch orgs
- Developer Edition: Default 6 active scratch orgs
- Expired orgs count toward your allocation until they're deleted

## Feature and Configuration Limitations

### Edition Differences
- Not all Salesforce features are available in all scratch org editions
- Some Enterprise/Unlimited Edition features are not available in Developer Edition scratch orgs
- Edition-specific limits apply (records, custom objects, etc.)

### Configuration Constraints
- Some features cannot be enabled via the scratch org definition file
- Certain org settings require manual configuration after creation
- Some features have dependencies that must be configured in the right order

### Performance Differences
- Scratch orgs may have different performance characteristics than sandboxes/production
- Resource allocation may vary based on Salesforce infrastructure
- Batch processes and integrations may behave differently

## Data and Integration Limitations

### Data Volume
- Not suitable for large data volume testing
- Data import operations have performance limitations
- Some data-intensive operations may fail or time out

### External System Integration
- External system connections must be reconfigured for each new scratch org
- OAuth tokens are specific to each scratch org
- IP whitelisting may be required for each new org

### Connected App Limitations
- Connected apps need to be recreated or configured for each scratch org
- OAuth callback URLs may need to be updated
- Consumer keys/secrets need to be managed for each org

## Workarounds and Solutions

### For Lifespan Limitations
1. Use the maximum lifespan setting for complex projects
2. Implement automated recreation scripts
3. Create and use scratch org snapshots to preserve configurations
4. Automate deployment of source code and configuration

### For Feature Limitations
1. Document which features are available in which scratch org types
2. Use post-creation scripts to configure features not supported in definition files
3. Consider using sandboxes for testing features not available in scratch orgs

### For Data Limitations
1. Create synthetic data generation scripts
2. Use data factories in Apex for test data
3. Implement data minimization strategies for testing

## Best Practices

1. Automate scratch org creation and setup
2. Create comprehensive scratch org definition files
3. Document known limitations for your specific project
4. Implement CI/CD pipelines that create fresh scratch orgs
5. Use scratch org snapshots for complex configurations
6. Maintain separate scratch orgs for different feature development
7. Implement regular pull/push cycles to avoid losing work

## Further Reading
- [Scratch Org Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_editions_allocations.htm)
- [Scratch Org Definition File](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file.htm)
- [Scratch Org Features](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)