---
description: How to create a Scratch Org Snapshot using Salesforce CLI
globs: 
alwaysApply: false
---
 ---
description: How to create a Scratch Org Snapshot using Salesforce CLI
globs: 
alwaysApply: false
---
# Create a Scratch Org Snapshot

## Overview
Creating a Scratch Org Snapshot allows you to capture the current state of a Scratch Org, including its metadata, configuration, and customizations. This snapshot can then be used to create new Scratch Orgs with identical state.

## Key Concepts
- Snapshots preserve the complete state of a Scratch Org
- Snapshot creation is performed using the Salesforce CLI
- Snapshots are stored in your Dev Hub org
- Snapshots have a unique name and ID for reference

## Prerequisites
- A configured Scratch Org with the state you want to capture
- Access to the Dev Hub org
- Proper permissions to create snapshots
- Salesforce CLI installed and configured

## Creating a Basic Snapshot

### Command Syntax
```bash
sf org snapshot create -o MyScratchOrg -n "My Snapshot"
```

### Parameters
- `-o, --target-org` - Username or alias of the source Scratch Org
- `-n, --snapshot-name` - Name for the snapshot (required)
- `-d, --description` - Description of the snapshot (optional)
- `-v, --target-dev-hub` - Username or alias of the Dev Hub org
- `--async` - Run the command asynchronously
- `--wait` - Number of minutes to wait for the snapshot creation to complete

### Example
```bash
sf org snapshot create -o DevScratchOrg -n "Release Candidate v1.2" -d "Snapshot for RC testing"
```

## Creating Snapshots for Different Purposes

### Snapshot for Team Development
```bash
sf org snapshot create -o TeamOrg -n "Team Development Baseline" -d "Standard configuration for team development"
```

### Snapshot for Testing
```bash
sf org snapshot create -o TestOrg -n "QA Environment" -d "Configuration for testing release v2.1"
```

### Snapshot for Package Development
```bash
sf org snapshot create -o PackageOrg -n "Package Dev Environment" -d "Environment for developing the managed package"
```

## Verifying Snapshot Creation
After creating a snapshot, verify its status:

```bash
sf org snapshot list
```

The output will show all available snapshots, including their IDs, names, and creation dates.

## Snapshot Creation Process
1. Prepare your Scratch Org with all necessary customizations
2. Deploy all required metadata
3. Make any UI-based configurations
4. Create the snapshot using the CLI command
5. Wait for the snapshot process to complete
6. Verify the snapshot is available in the snapshot list

## Troubleshooting Snapshot Creation

### Common Issues
- **Timeout Error**: For large orgs, use `--async` and check status later
- **Permission Error**: Ensure you have proper permissions in the Dev Hub
- **Connectivity Issues**: Check your network connection and authentication

### Resolution Steps
1. For timeouts: `sf org snapshot create -o MyScratchOrg -n "My Snapshot" --async`
2. For permission issues: Verify permissions in the Dev Hub
3. For authentication issues: Re-authenticate to the Dev Hub

## Best Practices
1. Give snapshots descriptive names that indicate their purpose
2. Add detailed descriptions for better documentation
3. Create snapshots at key development milestones
4. Verify the snapshot contents by creating a test Scratch Org
5. Document which state each snapshot represents
6. Clean up unused snapshots to avoid clutter

## Further Reading
[Salesforce DX Developer Guide: Create a Scratch Org Snapshot](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create_snapshot.htm)