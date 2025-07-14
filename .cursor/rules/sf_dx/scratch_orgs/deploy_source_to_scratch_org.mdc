---
description: How to deploy source code from your project to a Scratch Org
globs: 
alwaysApply: false
---
 ---
description: How to deploy source code from your project to a Scratch Org
globs: 
alwaysApply: false
---
# Deploy Source From Your Project to the Scratch Org

## Overview
After creating a Scratch Org, you'll typically need to deploy your project source code to it. Salesforce DX provides several commands to push your source code to a Scratch Org.

## Key Concepts
- Source code deployment moves code from your local project to the Scratch Org
- Deployment can be incremental or complete
- Source tracking helps manage changes between your local project and the Scratch Org
- Deployment can target specific files, directories, or metadata types

## Basic Deployment Commands

### Push Source to Scratch Org
The push command deploys source from your project to the Scratch Org. It uses source tracking to determine what needs to be deployed.

```bash
sf project deploy start -o MyScratchOrg
```

### Deploy Specific Source
To deploy only specific files or directories:

```bash
sf project deploy start -o MyScratchOrg -d force-app/main/default/classes
```

### Deploy All Source (Overwrite)
To force deployment of all source, even if it hasn't changed:

```bash
sf project deploy start -o MyScratchOrg --ignore-conflicts --force-overwrite
```

### Deploy with Tests
To run tests as part of the deployment:

```bash
sf project deploy start -o MyScratchOrg -l RunLocalTests
```

## Command Parameters

- `-o, --target-org` - Username or alias of the target org
- `-d, --source-dir` - Path to the source files to deploy
- `-x, --manifest` - Path to a manifest file (package.xml) that specifies metadata to deploy
- `-m, --metadata` - Comma-separated list of metadata component names to deploy
- `-w, --wait` - Number of minutes to wait for the deployment to complete
- `-l, --test-level` - Level of testing for the deployment (RunLocalTests, RunAllTestsInOrg, etc.)
- `--ignore-conflicts` - Ignore conflicts and deploy anyway
- `--force-overwrite` - Force an overwrite of the remote components

## Source Deployment Examples

### Deploy Using Package.xml Manifest
```bash
sf project deploy start -o MyScratchOrg -x path/to/package.xml
```

### Deploy Specific Metadata Components
```bash
sf project deploy start -o MyScratchOrg -m ApexClass:MyClass,ApexTrigger:MyTrigger
```

### Deploy with Validation Only (No Deployment)
```bash
sf project deploy validate -o MyScratchOrg
```

### Deploy with Specific Test Class
```bash
sf project deploy start -o MyScratchOrg -l RunSpecifiedTests -t MyTestClass
```

## Best Practices
1. Use source tracking to manage changes between your local project and the Scratch Org
2. Validate your deployment before actually deploying to catch potential errors
3. Deploy small, incremental changes to make debugging easier
4. Use the `--json` flag to get detailed error information for failed deployments
5. Set up deployment scripts for consistent and repeatable deployments
6. Clear source tracking if you encounter persistent deployment issues

## Further Reading
[Salesforce DX Developer Guide: Deploy Source to an Org](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_push_md_to_scratch_org.htm)