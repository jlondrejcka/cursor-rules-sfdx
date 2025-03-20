---
description: How to create, list, delete, and manage Org Shapes in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to create, list, delete, and manage Org Shapes in Salesforce DX
globs: 
alwaysApply: false
---
# Create and Manage Org Shapes

## Overview
Org Shapes allow you to capture the configuration and settings of an existing org for use in creating consistent Scratch Orgs. This guide explains how to create and manage Org Shapes using Salesforce CLI.

## Key Concepts
- Org Shapes are templates based on existing orgs
- Multiple Org Shapes can be created and managed
- Org Shapes are stored in the Dev Hub
- Org Shapes can be listed, viewed, and deleted

## Prerequisites
- Org Shape feature enabled in your Dev Hub
- Appropriate permissions to create and manage Org Shapes
- Access to source orgs you want to capture

## Creating Org Shapes

### Capturing an Org Shape
To capture an Org Shape from an existing org:

```bash
sf org create shape -o SourceOrg
```

### Parameters
- `-o, --target-org` - Username or alias of the source org
- `-v, --target-dev-hub` - Username or alias of the Dev Hub org
- `--async` - Run the command asynchronously
- `--wait` - Number of minutes to wait for the shape capture to complete

## Listing Org Shapes

### View All Org Shapes
To list all available Org Shapes in your Dev Hub:

```bash
sf org list shape --target-dev-hub DevHub
```

### Output Format
The list command returns information about each Org Shape, including:
- Source Org ID
- Creation Date
- Status
- Edition
- Features

## Using Org Shapes in Scratch Org Definition Files
To use an Org Shape in a Scratch Org definition file:

```json
{
  "orgName": "My Company",
  "edition": "Enterprise",
  "sourceOrg": "00Dxx0000000001EAA",
  "hasSampleData": false
}
```

## Deleting Org Shapes
To delete an Org Shape when no longer needed:

```bash
sf org delete shape -o 00Dxx0000000001EAA -v DevHub
```

## Refreshing Org Shapes
Org Shapes are point-in-time snapshots. To update an Org Shape with the latest configuration:

1. Delete the existing Org Shape
2. Create a new Org Shape from the same source org

## Common Management Tasks

### Finding Org Shape Details
To get detailed information about a specific Org Shape:

```bash
sf org describe shape -o 00Dxx0000000001EAA -v DevHub
```

### Checking Org Shape Status
To verify if an Org Shape creation is complete:

```bash
sf org list shape --target-dev-hub DevHub
```

## Best Practices
1. Name your source orgs clearly to identify their purpose
2. Document which Org Shapes are used for which development scenarios
3. Periodically refresh Org Shapes to capture configuration changes
4. Delete unused Org Shapes to maintain a clean environment
5. Use consistent naming conventions for source orgs and Scratch Orgs
6. Create Org Shapes for different environments (e.g., development, UAT, production)

## Troubleshooting
- If Org Shape creation fails, check permissions and connectivity
- If a Scratch Org doesn't reflect the expected configuration, verify the Org Shape ID
- For persistent issues, try recreating the Org Shape

## Further Reading
[Salesforce DX Developer Guide: Create and Manage Org Shapes](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_org_shape_create.htm)