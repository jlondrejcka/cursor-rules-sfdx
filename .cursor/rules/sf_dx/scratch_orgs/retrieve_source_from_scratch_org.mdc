---
description: How to retrieve source code from a Scratch Org to your local project
globs: 
alwaysApply: false
---
 ---
description: How to retrieve source code from a Scratch Org to your local project
globs: 
alwaysApply: false
---
# Retrieve Source from the Scratch Org to Your Project

## Overview
When you make changes directly in a Scratch Org (through the UI or developer console), you'll need to retrieve those changes back to your local project. Salesforce DX provides commands to pull or retrieve source from a Scratch Org to your project.

## Key Concepts
- Source retrieval brings changes from the Scratch Org back to your local project
- Retrieval can be incremental (based on source tracking) or for specific components
- Source tracking helps identify what has changed in the Scratch Org
- Retrieved source is formatted according to Salesforce DX source format

## Basic Retrieval Commands

### Pull Source from Scratch Org
The pull command retrieves source from the Scratch Org to your project using source tracking to identify changes.

```bash
sf project retrieve start -o MyScratchOrg
```

### Retrieve Specific Source
To retrieve only specific files or metadata:

```bash
sf project retrieve start -o MyScratchOrg -m ApexClass:MyClass
```

### Retrieve Based on Package.xml
To retrieve based on a manifest file:

```bash
sf project retrieve start -o MyScratchOrg -x path/to/package.xml
```

### Retrieve a Directory
To retrieve a specific directory:

```bash
sf project retrieve start -o MyScratchOrg -d force-app/main/default/classes
```

## Command Parameters

- `-o, --target-org` - Username or alias of the target org
- `-d, --source-dir` - Path to the local directory to retrieve the source to
- `-x, --manifest` - Path to a manifest file (package.xml) that specifies what to retrieve
- `-m, --metadata` - Comma-separated list of metadata component names to retrieve
- `-w, --wait` - Number of minutes to wait for the retrieval to complete
- `--ignore-conflicts` - Ignore conflicts and retrieve anyway
- `--to-scratch-org` - Useful when retrieving between non-source-tracked orgs

## Source Retrieval Examples

### Retrieve All Metadata of Specific Types
```bash
sf project retrieve start -o MyScratchOrg -m ApexClass,ApexTrigger,CustomObject
```

### Retrieve and Overwrite Local Changes
```bash
sf project retrieve start -o MyScratchOrg --force-overwrite
```

### Retrieve Multiple Specific Components
```bash
sf project retrieve start -o MyScratchOrg -m "ApexClass:MyClass1,ApexClass:MyClass2"
```

### Retrieve Source to a Different Directory
```bash
sf project retrieve start -o MyScratchOrg -d alternate-app
```

## Handling Conflicts
When retrieving source, you might encounter conflicts if the same component has been modified both locally and in the Scratch Org. You have several options:

1. Use `--force-overwrite` to overwrite local changes with the Scratch Org version
2. Use `--ignore-conflicts` to skip conflicting files
3. Manually resolve conflicts by editing the files

## Best Practices
1. Pull changes frequently to minimize potential conflicts
2. Use source tracking to manage changes between your local project and the Scratch Org
3. Use specific retrieval for precise control over what gets pulled
4. Back up your local changes before retrieving if you're unsure about conflicts
5. Set up retrieval scripts for consistent and repeatable operations
6. Use manifest files (package.xml) for complex retrieval operations

## Further Reading
[Salesforce DX Developer Guide: Pull Source from the Scratch Org to Your Project](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_pull.htm)