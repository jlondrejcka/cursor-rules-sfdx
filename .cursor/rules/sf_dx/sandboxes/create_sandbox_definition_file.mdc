---
description: How to create and configure a sandbox definition file for Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to create and configure a sandbox definition file for Salesforce DX
globs: 
alwaysApply: false
---
# Create a Sandbox Definition File

## Overview
A sandbox definition file is a JSON configuration file that specifies the settings for creating a Salesforce sandbox. This rule provides guidance on creating and configuring a sandbox definition file for use with Salesforce DX.

## Key Concepts
- Sandbox definition files are used to specify sandbox configuration
- JSON format with specific properties to define sandbox characteristics
- Can be used for both creating new and refreshing existing sandboxes

## File Structure
Sandbox definition files have the following structure:
```json
{
  "sandboxName": "MySandbox",
  "licenseType": "DEVELOPER",
  "description": "Development environment for feature X",
  "cloneFrom": "ExistingSandbox",
  "autoActivate": true,
  "apexClassId": "01p3X000000XXXXX",
  "copyChatter": false
}
```

## Required and Optional Properties
### Required Properties
- `sandboxName`: Name of the sandbox (must be unique within the org)
- `licenseType`: Type of sandbox (DEVELOPER, DEVELOPER_PRO, PARTIAL, FULL)

### Optional Properties
- `description`: Description of the sandbox
- `cloneFrom`: Name of an existing sandbox to clone from
- `autoActivate`: Whether to automatically activate the sandbox after creation
- `apexClassId`: ID of an Apex class implementing the SandboxPostCopy interface
- `copyChatter`: Whether to copy Chatter data to the sandbox

## Example Definition Files
### Basic Developer Sandbox
```json
{
  "sandboxName": "DevSandbox",
  "licenseType": "DEVELOPER",
  "description": "Development sandbox for testing",
  "autoActivate": true
}
```

### Full Copy Sandbox with Post-Copy Script
```json
{
  "sandboxName": "FullQA",
  "licenseType": "FULL",
  "description": "Full QA environment",
  "autoActivate": true,
  "apexClassId": "01p3X000000XXXXX"
}
```

## Best Practices
1. Store definition files in source control for reuse and tracking
2. Create separate definition files for different sandbox purposes
3. Use descriptive names and include details in the description
4. Consider post-copy automation using Apex classes

## Further Reading
- [Salesforce Sandbox Types](https://help.salesforce.com/articleView?id=sf.data_sandbox_environments.htm)
- [Post-Copy Scripts](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_interface_System_SandboxPostCopy.htm)