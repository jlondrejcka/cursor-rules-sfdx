---
description: Setting up your project for package development in Salesforce DX
globs: 
alwaysApply: false
---
# Setting Up for Package Development

## Overview
Package development in Salesforce DX allows you to organize your code into modular, versioned packages. This approach supports modern application lifecycle management and enables better organizational practices.

## Package Types
Salesforce DX supports several package types:
- **Unlocked Packages**: Upgradeable and not namespace-bound
- **Second-Generation Managed Packages**: Upgradeable, namespace-bound, with IP protection
- **First-Generation Managed Packages**: Legacy package type (not recommended for new development)

## Prerequisites
Before setting up for package development:
1. Enable Dev Hub in your production org
2. Install Salesforce CLI
3. Enable Package Development in Dev Hub (for 2GP)
4. Optionally, register a namespace

## Project Setup

### 1. Create a Project with Package Configuration
```bash
sf project generate --name MyPackageProject
```

### 2. Configure the Project for Packaging
Edit the `sfdx-project.json` file:

```json
{
  "packageDirectories": [
    {
      "path": "force-app",
      "default": true,
      "package": "MyPackage",
      "versionName": "Version 1.0",
      "versionNumber": "1.0.0.NEXT"
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "58.0",
  "packageAliases": {}
}
```

### 3. Create a Package
```bash
sf package create --name "My Package" --description "My package description" --package-type Unlocked --path force-app
```

The command adds the package ID to the `packageAliases` section of your `sfdx-project.json` file.

## Package Versioning

### Create a Package Version
```bash
sf package version create --package "My Package" --installation-key password --wait 10
```

### List Package Versions
```bash
sf package version list
```

### Promote a Package Version
```bash
sf package version promote --package "My Package@1.0.0-1"
```

## Dependency Management

### Adding Package Dependencies
To add a dependency on another package, modify the `sfdx-project.json`:

```json
"packageDirectories": [
  {
    "path": "force-app",
    "default": true,
    "package": "MyPackage",
    "versionName": "Version 1.0",
    "versionNumber": "1.0.0.NEXT",
    "dependencies": [
      {
        "package": "DependencyPackage",
        "versionNumber": "1.0.0.LATEST"
      }
    ]
  }
]
```

## Best Practices
1. Plan your package structure before development
2. Use a source control system for your project
3. Create separate scratch orgs for development and testing
4. Implement CI/CD for automated testing and deployment
5. Follow semantic versioning for package versions
6. Document dependencies and installation requirements
7. Keep packages focused and modular

## Common Commands
- Create package: `sf package create`
- Create package version: `sf package version create`
- List packages: `sf package list`
- Install package: `sf package install`
- Uninstall package: `sf package uninstall`

## Further Reading
For detailed information about package development, see the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_dev2gp.htm) 