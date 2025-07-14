---
description: Understanding Salesforce DX metadata coverage and how to check component support
globs: 
alwaysApply: false
---
 ---
description: Understanding Salesforce DX metadata coverage and how to check component support
globs: 
alwaysApply: false
---
# Metadata Coverage Overview

## Overview
Metadata coverage refers to which Salesforce metadata components can be used with different Salesforce tools and features. The coverage varies across different deployment methods, packaging types, and development tools. This rule explains how to determine metadata coverage and use the Metadata Coverage Report.

## Key Concepts

- **Metadata Coverage**: Indicates whether a specific metadata type is supported by a particular Salesforce feature
- **Source Tracking**: Ability to track changes to metadata in source format
- **Packaging Types**: Different package formats (unlocked, 2GP, 1GP) support different metadata types
- **Deployment Methods**: Change sets, Metadata API, and Salesforce DX CLI may have different metadata support

## Understanding the Metadata Coverage Report

### Accessing the Report
The Metadata Coverage Report is the official source of truth for metadata support:

```bash
# Open the Metadata Coverage Report in a browser
sf open metadata:coverage
```

Alternatively, visit: [Metadata Coverage Report](mdc:https:/developer.salesforce.com/docs/metadata-coverage)

### Using the Report
The Metadata Coverage Report provides information on:

1. **Metadata API**: Can the component be deployed using Metadata API?
2. **Source Tracking**: Is the component tracked in scratch orgs?
3. **Unlocked Packaging**: Can the component be included in unlocked packages?
4. **2GP Managed Packaging**: Can the component be included in second-generation managed packages?
5. **1GP Managed Packaging**: Can the component be included in first-generation managed packages?
6. **Change Sets**: Can the component be included in change sets?
7. **Apex Metadata API**: Can the component be accessed via Apex Metadata API?

### Filtering the Report
The report can be filtered by:
- Metadata type name
- API version
- Support status for different features

## Handling Unsupported Metadata

### When Metadata Is Not Supported
If a metadata type is unsupported for your chosen deployment method:

1. **Manual Deployment**: Deploy the component manually in the target org
2. **Alternative Methods**: Use a supported deployment method for that component
3. **Custom Solutions**: Create automation using the UI API or other APIs

### Common Unsupported Metadata Types
Some metadata types have limited support across features:
- Certain Einstein features
- Some Experience Cloud components
- Enterprise Territory Management
- Certain Knowledge settings
- Multi-currency settings

## Working with Partially Supported Metadata

### Handling Partial Support
Some metadata components have partial support:

```bash
# Check details for a specific component
sf open metadata:coverage --metadata-type CustomObject
```

For partially supported types:
1. Check which aspects are supported
2. Deploy supported elements through automation
3. Document manual steps for unsupported elements

## Best Practices

1. **Check Before Development**: Verify metadata coverage before starting development
2. **Keep API Versions Updated**: Newer API versions often support more metadata types
3. **Plan Deployment Strategy**: Consider metadata coverage when choosing deployment methods
4. **Document Manual Steps**: For unsupported components, document manual configuration steps
5. **Test in Sandboxes**: Validate metadata deployment in sandbox environments first

## Further Reading
For more information about metadata coverage, see the [Salesforce Metadata Coverage Report](mdc:https:/developer.salesforce.com/docs/metadata-coverage) and the [Metadata API Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_types_list.htm)