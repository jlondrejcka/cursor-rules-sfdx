---
description: How to resolve the "No default dev hub found" error in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to resolve the "No default dev hub found" error in Salesforce DX
globs: 
alwaysApply: false
---
# Error: No Default Dev Hub Found

## Overview
This rule provides guidance for resolving the "Error: No default dev hub found" error that occurs when trying to create scratch orgs or work with packages in Salesforce DX.

## Key Concepts
- Dev Hub authorization and configuration
- Default Dev Hub settings
- Scratch org creation prerequisites

## Error Details
The "No default dev hub found" error occurs when:
1. You have not authorized a Dev Hub org
2. You have authorized a Dev Hub org but haven't set it as the default
3. Your Dev Hub authorization has expired

## Resolution Steps

### 1. Check Authorized Orgs
First, check if you have any authorized orgs:

```bash
sf org list
```

Look for an org with Dev Hub enabled. If you don't see any, you need to authorize a Dev Hub org.

### 2. Authorize a Dev Hub Org
If you haven't authorized a Dev Hub org yet:

```bash
sf org login web --set-default-dev-hub --alias DevHub
```

The `--set-default-dev-hub` flag automatically sets this org as your default Dev Hub.

### 3. Set an Existing Org as Default Dev Hub
If you've already authorized a Dev Hub org but it's not set as default:

```bash
sf config set target-dev-hub=your-dev-hub-username@example.com
```

Alternatively, you can use the org's alias:

```bash
sf config set target-dev-hub=DevHubAlias
```

### 4. Verify Default Dev Hub Setting
Confirm your default Dev Hub is properly set:

```bash
sf config get target-dev-hub
```

### 5. Re-Authorize if Expired
If your Dev Hub authorization has expired, reauthorize it:

```bash
sf org logout -o your-dev-hub-username@example.com
sf org login web --set-default-dev-hub --alias DevHub -o your-dev-hub-username@example.com
```

## Best Practices
1. Always set a default Dev Hub when working with scratch orgs or packages
2. Use meaningful aliases for your Dev Hub orgs
3. If working on multiple projects, configure the default Dev Hub in each project's configuration file
4. For team environments, document the Dev Hub settings to ensure consistency

## Further Reading
- [Salesforce DX Developer Guide: Set Up the Dev Hub](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_hub_intro.htm)
- [Salesforce CLI Config Commands](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_config.htm)