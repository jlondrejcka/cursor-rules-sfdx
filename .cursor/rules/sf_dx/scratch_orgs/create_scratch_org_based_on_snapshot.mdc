---
description: How to create a Scratch Org based on a previously captured snapshot
globs: 
alwaysApply: false
---
 ---
description: How to create a Scratch Org based on a previously captured snapshot
globs: 
alwaysApply: false
---
# Create a Scratch Org Based on a Snapshot

## Overview
Once you've created a Scratch Org Snapshot, you can use it as a template to create new Scratch Orgs with identical configuration, metadata, and customizations. This approach significantly reduces setup time and ensures consistency across development environments.

## Key Concepts
- Snapshot-based Scratch Orgs inherit the entire configuration of the source Scratch Org
- Creating from a snapshot is faster than manually configuring a new Scratch Org
- Snapshots are referenced by their unique ID or name
- Snapshot-based Scratch Orgs can still use definition file parameters for customization

## Prerequisites
- A previously created Scratch Org Snapshot
- Access to the Dev Hub org
- Proper permissions to create Scratch Orgs from snapshots
- Salesforce CLI installed and configured

## Creating a Scratch Org from a Snapshot

### Basic Command Syntax
```bash
sf org create scratch -f config/project-scratch-def.json -s SnapshotId -a SnapshotOrg
```

### Parameters
- `-f, --definition-file` - Path to a scratch org definition file
- `-s, --snapshot` - ID or name of the snapshot to use
- `-a, --alias` - Alias to assign to the new Scratch Org
- `-d, --duration-days` - Number of days before the scratch org expires (1-30, default is 7)
- `-v, --target-dev-hub` - Username or alias of the Dev Hub org
- `-w, --wait` - Number of minutes to wait for the scratch org to be ready
- `--async` - Run the command asynchronously

### Example Using Snapshot ID
```bash
sf org create scratch -f config/project-scratch-def.json -s 0Oxx00000000001 -a TestOrg
```

### Example Using Snapshot Name
```bash
sf org create scratch -f config/project-scratch-def.json -s "Release Candidate v1.2" -a RCTestOrg
```

## Definition File Requirements
When creating a Scratch Org from a snapshot, the definition file is still required but can be minimal:

```json
{
  "orgName": "Snapshot-based Org",
  "edition": "Developer"
}
```

The snapshot's configuration overrides most settings in the definition file, but you can still specify:
- `orgName`: Custom name for the org
- `adminEmail`: Email for the admin user
- `username`: Custom username (if not auto-generated)
- `hasSampleData`: Whether to include sample data (though the snapshot may already include data)

## Finding Available Snapshots
To see all available snapshots for use:

```bash
sf org snapshot list
```

This lists all snapshots with their IDs, names, and creation dates.

## Verifying the New Scratch Org
After creating a Scratch Org from a snapshot:

```bash
sf org open -o SnapshotOrg
```

Verify that the configuration matches the expected state from the snapshot.

## Common Use Cases

### Team Development
```bash
sf org create scratch -f config/minimal-def.json -s "Team Development Baseline" -a TeamDevOrg
```

### QA Testing
```bash
sf org create scratch -f config/minimal-def.json -s "QA Environment" -a QATestOrg -d 14
```

### Package Development
```bash
sf org create scratch -f config/minimal-def.json -s "Package Dev Environment" -a PackageDevOrg
```

## Troubleshooting

### Common Issues
- **Snapshot Not Found**: Verify the snapshot ID or name is correct
- **Permission Error**: Ensure you have proper permissions in the Dev Hub
- **Creation Timeout**: For complex snapshots, use `--async` and check status later

### Resolution Steps
1. For snapshot not found: `sf org snapshot list` to verify available snapshots
2. For permission issues: Verify permissions in the Dev Hub
3. For timeouts: `sf org create scratch -f config/project-scratch-def.json -s SnapshotId -a SnapshotOrg --async`

## Best Practices
1. Use descriptive aliases for snapshot-based Scratch Orgs
2. Document which snapshot was used for each Scratch Org
3. Regularly update snapshots as your configuration evolves
4. Use snapshot-based Scratch Orgs in CI/CD pipelines for consistent testing
5. Create different snapshots for different stages of development or features

## Further Reading
[Salesforce DX Developer Guide: Create a Scratch Org from a Snapshot](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_create_from_snapshot.htm)