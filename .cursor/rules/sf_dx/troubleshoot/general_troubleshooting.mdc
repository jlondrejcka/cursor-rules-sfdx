---
description:  General troubleshooting approaches and techniques for Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: General troubleshooting approaches and techniques for Salesforce DX
globs: 
alwaysApply: false
---
# General Salesforce DX Troubleshooting

## Overview
This rule provides a comprehensive troubleshooting approach for resolving common issues encountered when working with Salesforce DX.

## Key Concepts
- Methodical troubleshooting approach
- Common error patterns
- Diagnostic commands
- Environment verification

## General Troubleshooting Process

### 1. Identify the Exact Error
Before attempting to fix an issue:
- Note the exact error message and code
- Identify which command triggered the error
- Note any recent changes to your environment or project

### 2. Check CLI and System Status

```bash
# Check CLI version
sf version

# Check CLI plugins
sf plugins

# Check Node.js version
node -v

# Check system resources
# (Memory, disk space, etc.)
```

### 3. Verify Connectivity

```bash
# Test connectivity to Salesforce
sf org list

# Check if you can ping Salesforce domains
ping login.salesforce.com
```

### 4. Review Project Configuration

```bash
# Check project configuration
cat sfdx-project.json

# Verify org configuration
sf org display -o YourOrgAlias
```

### 5. Common Error Categories and Solutions

#### Authentication Errors
- Verify authorization status: `sf org list`
- Re-authenticate if needed: `sf org login web -a YourAlias`
- Check connected app settings in Salesforce

#### Deployment Errors
- Validate your metadata: `sf project deploy validate`
- Check API version compatibility
- Deploy with more information: `sf project deploy start --verbose`

#### Scratch Org Errors
- Verify Dev Hub connection: `sf org display -o DevHub`
- Check scratch org limits: `sf limits display --available`
- Ensure org definition file is valid

#### Permission Errors
- Verify user permissions in target org
- Check file permissions on your local machine
- Ensure you have the correct license types

#### Configuration Errors
- Validate sfdx-project.json syntax
- Check for correct package directories
- Verify namespace configuration

## Advanced Diagnostics

### Enable Debug Logging
For detailed debugging information:

```bash
# Enable debug mode for a single command
sf org list --loglevel debug

# Set persistent debug logging
sf config set logLevel=debug
```

### Check Log Files
Salesforce CLI logs are stored in:
- macOS/Linux: `~/.sfdx/sf/sf.log`
- Windows: `%USERPROFILE%\.sfdx\sf\sf.log`

### Run Clean-Up Utilities

```bash
# Clean CLI cache
sf plugins uninstall @salesforce/plugin-cache
sf plugins install @salesforce/plugin-cache
sf cache clean

# Reset configuration (use with caution)
sf config reset
```

## Common Resolution Strategies

### The Restart Approach
1. Close all terminal/command prompt windows
2. Restart your computer
3. Try the operation again with a fresh session

### The Clean Reinstall
1. Uninstall Salesforce CLI: `npm uninstall -g @salesforce/cli`
2. Clear npm cache: `npm cache clean --force`
3. Reinstall CLI: `npm install -g @salesforce/cli`

### The Environment Isolation
1. Create a new project directory
2. Initialize a fresh SFDX project: `sf project generate`
3. Try to reproduce the issue in the clean environment

## Best Practices
1. Keep detailed notes of errors and solutions
2. Update CLI and plugins regularly
3. Follow Salesforce release notes for known issues
4. Maintain clean project structure and source organization
5. Use version control for tracking changes

## Further Reading
- [Salesforce CLI Troubleshooting](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshooting.htm)
- [Salesforce Developer Forums](https://developer.salesforce.com/forums)
- [Salesforce CLI GitHub Issues](https://github.com/forcedotcom/cli/issues)