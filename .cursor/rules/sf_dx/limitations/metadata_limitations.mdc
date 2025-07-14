---
description: Understanding the limitations of metadata support in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: Understanding the limitations of metadata support in Salesforce DX
globs: 
alwaysApply: false
---
# Metadata Support Limitations in Salesforce DX

## Overview
While Salesforce DX improves many aspects of development, not all metadata types are fully supported in the source format and deployment workflows. Understanding these limitations helps you plan your development and deployment strategies accordingly.

## Metadata Coverage Limitations

### Source Format Limitations
- Some metadata types are only partially decomposed in source format
- Large XML files may require special handling 
- Some metadata types maintain relationships in ways that aren't obvious
- Complex dependencies can cause deployment order issues

### Deployment Behavior
- Certain metadata components must be deployed in a specific order
- Some metadata types can't be deleted directly through source deployment
- Destructive changes require special handling
- Organization settings may vary between environments affecting deployments

### Profile and Permission Set Challenges
- Profiles retrieved from production include all permissions, not just customizations
- Permission dependencies can cause deployment failures
- User permissions are environment-specific and may require filtering
- Custom field permissions require special handling during deployment

## Common Problematic Metadata Types

### Reports and Dashboards
- Report types with complex folder structures
- Dashboards with dynamic components
- Reports with org-specific formula fields

### Workflow and Process Automation
- Process Builder flows with complex conditions
- Workflow rules with time-dependent actions
- Flow interviews and saved states

### User Interface Components
- Lightning page layouts with dynamic components
- Custom Lightning components with complex dependencies
- AppExchange-installed components

## Workarounds and Solutions

### For Partially Supported Types
1. Use post-deployment scripts to configure metadata
2. Create specialized deployment tools for specific metadata types
3. Break down complex metadata into smaller components

### For Profiles and Permissions
1. Use permission sets instead of profiles where possible
2. Create dedicated deployment profiles for each environment
3. Use tools to filter permissions before deployment

### For Complex Dependencies
1. Document dependency orders for manual deployments
2. Create package.xml files with proper sequencing
3. Implement pre-deployment validation checks

## Best Practices

1. Regularly check the [Metadata Coverage Report](https://mdcoverage.secure.force.com/docs/metadata-coverage)
2. Test deployments in sandboxes before production
3. Create environment-specific deployment strategies for problematic metadata
4. Document known limitations for your specific organization
5. Use specialized tools for complex metadata management
6. Consider change set deployment for certain metadata types

## Further Reading
- [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_intro.htm)
- [Metadata Coverage Report](https://mdcoverage.secure.force.com/docs/metadata-coverage)
- [Salesforce DX Metadata Format](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_source_file_format.htm)