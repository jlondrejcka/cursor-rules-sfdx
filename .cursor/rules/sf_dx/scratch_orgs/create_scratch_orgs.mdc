---
description: How to create and manage Scratch Orgs using Salesforce CLI
globs: 
alwaysApply: false
---
 ---
description: How to create and manage Scratch Orgs using Salesforce CLI
globs: 
alwaysApply: false
---
# Create Scratch Orgs

## Overview
Scratch Orgs are temporary Salesforce environments optimized for development and testing. They provide a clean, isolated environment for development, and can be easily created and destroyed.

## Key Concepts
- Scratch Orgs are created from your Dev Hub org
- A definition file specifies the configuration of the Scratch Org
- Scratch Orgs have a maximum lifetime of 30 days
- Each Scratch Org has a unique username and password

## Basic Creation Command
```bash
sf org create scratch -f config/project-scratch-def.json -a MyScratchOrg
```

### Parameters
- `-f, --definition-file` - Path to a scratch org definition file
- `-a, --alias` - Alias to associate with the scratch org
- `-d, --duration-days` - Number of days before the scratch org expires (1-30, default is 7)
- `-v, --target-dev-hub` - Username or alias of the Dev Hub org
- `-c, --no-ancestors` - Don't include second-generation package ancestors in the scratch org
- `-n, --no-namespace` - Create the scratch org with no namespace
- `--no-track` - Don't track the newly created org with the org tracking file
- `-w, --wait` - Number of minutes to wait for the scratch org to be ready
- `--async` - Run the command asynchronously

## Creating Different Types of Scratch Orgs

### Basic Scratch Org
```bash
sf org create scratch -f config/project-scratch-def.json -a MyScratchOrg
```

### Scratch Org with Specific Duration
```bash
sf org create scratch -f config/project-scratch-def.json -a MyScratchOrg -d 14
```

### Scratch Org from a Different Dev Hub
```bash
sf org create scratch -f config/project-scratch-def.json -a MyScratchOrg -v MyDevHub
```

### Namespaced Scratch Org
```bash
sf org create scratch -f config/project-scratch-def.json -a MyNamespacedOrg
```

### Non-Namespaced Scratch Org
```bash
sf org create scratch -f config/project-scratch-def.json -a MyNonNamespacedOrg -n
```

## Accessing Scratch Orgs
To open a scratch org in the browser:

```bash
sf org open -o MyScratchOrg
```

To get login details for a scratch org:

```bash
sf org display -o MyScratchOrg
```

## Managing Scratch Orgs
To list all scratch orgs:

```bash
sf org list
```

To delete a scratch org:

```bash
sf org delete scratch -o MyScratchOrg
```

## Best Practices
1. Use aliases to make it easier to reference your scratch orgs
2. Set an appropriate expiration duration based on your development needs
3. Delete scratch orgs when you no longer need them to free up allocations
4. Use version control for your scratch org definition files
5. Create different definition files for different development scenarios
6. Automate scratch org creation and setup for repeatable development environments

## Further Reading
[Salesforce DX Developer Guide: Create Scratch Orgs](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create.htm)