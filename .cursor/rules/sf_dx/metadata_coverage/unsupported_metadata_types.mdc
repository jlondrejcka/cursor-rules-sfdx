---
description:  Understanding metadata types that are not supported in Salesforce DX deployments
globs: 
alwaysApply: false
---
 ---
description: Understanding metadata types that are not supported in Salesforce DX deployments
globs: 
alwaysApply: false
---
# Unsupported Metadata Types

## Overview
While Salesforce DX and the Metadata API support many metadata components, some Salesforce features cannot be retrieved or deployed programmatically. This rule explains which metadata types are unsupported, why they're unsupported, and strategies for handling them in your development lifecycle.

## Common Unsupported Metadata Types

### Organization Settings
Some organization-wide settings cannot be deployed via Metadata API:
- Multi-currency settings
- Fiscal year settings
- Company information
- Business hours
- Certain security settings

### Feature-Specific Settings
Certain feature settings have limited or no API support:
- Some Einstein Analytics/Tableau CRM settings
- Experience Cloud template choices
- Certain Knowledge settings
- Data category group assignments
- Some Lightning App Builder elements

### User-Related Settings
Settings specific to users often cannot be deployed:
- Personal email templates
- Private reports and dashboards
- Individual user settings and preferences
- Personal folders

## Reasons for Lack of Support

### Technical Limitations
- Complex dependencies on other metadata
- Customizations that are too specific to an organization
- Features that require live connections to third-party systems

### Security Considerations
- Settings that could compromise security if deployed programmatically
- Sensitive configuration that requires manual verification
- Settings requiring explicit user consent

### Product Lifecycle
- Recently released features often gain API support in later releases
- Beta features may not have API support until GA
- Legacy features might never receive API support

## Strategies for Handling Unsupported Metadata

### Documentation
Document unsupported metadata components in your project:

```bash
# Create a deployment guide that includes manual steps
echo "# Deployment Guide: Manual Steps" > deployment-guide.md
echo "The following components must be configured manually:" >> deployment-guide.md
echo "1. Multi-currency settings" >> deployment-guide.md
echo "2. Business hours" >> deployment-guide.md
```

### Alternative Approaches
1. **UI Automation**: Use Selenium or similar tools to automate UI configuration
2. **Step-by-Step Guides**: Create detailed guides with screenshots for manual configuration
3. **Salesforce Inspector**: Use tools like Salesforce Inspector to copy settings between orgs
4. **Configuration Snapshots**: Take before/after snapshots of settings for reference

### Continuous Verification
Build verification steps into your CI/CD process:

```bash
# Example verification script
sf org open --target-org production
echo "Please verify the following manual configurations have been completed:"
echo "1. Multi-currency settings"
echo "2. Business hours"
```

## Working with Partially Supported Types

Some metadata types are partially supported, meaning some aspects can be deployed while others cannot:

### Profiles and Permission Sets
- Structure can be deployed, but some permissions might be ignored
- References to unsupported metadata are ignored during deployment

### Custom Objects
- Basic structure can be deployed, but some advanced settings might require manual configuration
- Data sharing settings might need manual adjustment

## Best Practices

1. **Check Coverage Early**: Identify unsupported metadata types at the beginning of your project
2. **Create Checklists**: Maintain checklists of manual steps for each environment
3. **Environment Parity**: Keep development environments as similar as possible to reduce configuration drift
4. **Regular Reviews**: Regularly check the Metadata Coverage Report for newly supported types
5. **Feedback to Salesforce**: Submit feedback for unsupported types that are critical to your workflow

## Further Reading
For more information about unsupported metadata types, see the [Metadata API Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_unsupported_types.htm) and [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_unsupported_metadata.htm)