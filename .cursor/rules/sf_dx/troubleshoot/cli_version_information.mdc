---
description: How to retrieve and use CLI version information for troubleshooting Salesforce DX issues
globs: 
alwaysApply: false
---
 ---
description: How to retrieve and use CLI version information for troubleshooting Salesforce DX issues
globs: 
alwaysApply: false
---
# CLI Version Information

## Overview
This rule provides guidance on how to retrieve and use Salesforce CLI version information for troubleshooting and resolving compatibility issues.

## Key Concepts
- CLI version checking
- Plugin management
- Version compatibility
- CLI updating

## Checking Version Information

### Basic Version Check
The most basic way to check your Salesforce CLI version:

```bash
sf version
```

This shows you the main CLI version but doesn't provide detailed information about plugins.

### Detailed Version Information
For more comprehensive information about your CLI installation:

```bash
sf plugins --core
```

This command lists all installed core plugins and their versions.

### Plugin-Specific Information
To see information about specific plugins:

```bash
sf plugins
```

This shows all installed plugins, including custom ones.

## Troubleshooting with Version Information

### Identifying Outdated Components

If you're experiencing issues, check if any components are outdated:

```bash
sf update
```

This will show if there are any available updates for the CLI or plugins.

### Version Mismatch Issues
Common problems tied to version issues:

1. **Command Not Found**: A command might not be available in your version
2. **Unexpected Behavior**: Commands might work differently between versions
3. **Deprecation Warnings**: Older commands might show deprecation warnings

### Resolving Version-Related Issues

#### Update the CLI
To update the Salesforce CLI:

```bash
sf update
```

#### Reinstall the CLI
If updating doesn't resolve the issue:

```bash
# For npm installation
npm uninstall -g @salesforce/cli
npm install -g @salesforce/cli

# For other installation methods, reinstall via the installer
```

#### Check for Deprecated Commands
Reference the [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/) to see if commands have been deprecated or changed.

## Using Version Information for Support
When seeking help:

1. Always include your CLI version information
2. Specify which commands are causing issues
3. Include any error messages exactly as shown
4. Mention recent updates or changes to your environment

Example support information:
```
CLI Version: @salesforce/cli 2.x.x
Node Version: v16.x.x
OS: Windows/macOS/Linux
Command run: sf org create scratch
Error message: <exact error message>
```

## Best Practices
1. Regularly update the CLI using `sf update`
2. Check release notes for breaking changes before updating
3. Keep all plugins updated
4. For critical environments, test CLI updates in a non-production environment first
5. Document your CLI version in project documentation for team consistency

## Further Reading
- [Salesforce CLI Installation Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)
- [Salesforce CLI Release Notes](https://github.com/forcedotcom/cli/blob/main/releasenotes/README.md)
- [Salesforce DX Troubleshooting](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshooting.htm)