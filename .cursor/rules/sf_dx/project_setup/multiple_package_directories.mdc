---
description: How to work with multiple package directories in Salesforce DX projects
globs: 
alwaysApply: false
---
 ---
description: How to work with multiple package directories in Salesforce DX projects
globs: 
alwaysApply: false
---
# Multiple Package Directories

## Overview
Salesforce DX supports organizing your project into multiple package directories, allowing for modular development, easier dependency management, and improved team collaboration. This rule explains how to configure and work with multiple package directories in your Salesforce DX project.

## Understanding Package Directories

### What is a Package Directory?
- A directory in your project that contains source files for a package
- Defined in the `packageDirectories` array in `sfdx-project.json`
- Can represent a standalone package or a module of a larger application
- Each directory can be deployed independently or as part of a larger project

### Benefits of Multiple Package Directories
- **Modular Development**: Separate your application into logical modules
- **Dependency Management**: Define explicit dependencies between components
- **Team Collaboration**: Different teams can work on different packages
- **Release Management**: Release packages independently or together
- **Code Reuse**: Share common components across multiple packages

## Configuring Multiple Package Directories

### Basic Configuration
To define multiple package directories, edit your `sfdx-project.json` file:

```json
{
  "packageDirectories": [
    {
      "path": "core-app",
      "default": true,
      "package": "Core",
      "versionName": "Core v1.0",
      "versionNumber": "1.0.0.NEXT"
    },
    {
      "path": "feature-module",
      "package": "Feature",
      "versionName": "Feature v1.0",
      "versionNumber": "1.0.0.NEXT",
      "dependencies": [
        {
          "package": "Core",
          "versionNumber": "1.0.0.LATEST"
        }
      ]
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "58.0"
}
```

### Directory Structure
Example project structure with multiple package directories:

```
my-sfdx-project/
├── core-app/                 # Core package directory
│   └── main/
│       └── default/
│           ├── classes/
│           └── objects/
├── feature-module/           # Feature package directory
│   └── main/
│       └── default/
│           ├── classes/
│           └── lwc/
├── config/                   # Project configuration
│   └── project-scratch-def.json
└── sfdx-project.json         # Project definition
```

### Setting the Default Package Directory
The `default` property determines which directory is used when no directory is specified:

```json
{
  "packageDirectories": [
    {
      "path": "core-app",
      "default": true
    },
    {
      "path": "feature-module"
    }
  ]
}
```

## Working with Multiple Package Directories

### Creating Source in Different Directories
To create a source file in a specific directory:

```bash
# Create an Apex class in the core-app directory
sf apex generate class --class-name CoreClass --output-dir core-app/main/default/classes

# Create an Apex class in the feature-module directory
sf apex generate class --class-name FeatureClass --output-dir feature-module/main/default/classes
```

### Deploying Specific Directories
Deploy directories individually or together:

```bash
# Deploy just the core-app directory
sf project deploy start --source-dir core-app

# Deploy just the feature-module directory
sf project deploy start --source-dir feature-module

# Deploy both directories
sf project deploy start --source-dir core-app,feature-module
```

### Retrieving to Specific Directories
Retrieve metadata to a specific directory:

```bash
# Retrieve to the core-app directory
sf project retrieve start --source-dir core-app -m "CustomObject:Account"

# Retrieve to the feature-module directory
sf project retrieve start --source-dir feature-module -m "LightningComponentBundle:myComponent"
```

## Package Directory Dependencies

### Defining Dependencies
Specify dependencies between packages:

```json
{
  "packageDirectories": [
    {
      "path": "core-app",
      "package": "CorePackage",
      "versionNumber": "1.0.0.NEXT",
      "default": true
    },
    {
      "path": "feature-module",
      "package": "FeaturePackage",
      "versionNumber": "1.0.0.NEXT",
      "dependencies": [
        {
          "package": "CorePackage",
          "versionNumber": "1.0.0.LATEST"
        }
      ]
    }
  ]
}
```

### Installing Package Dependencies
Install dependencies when creating scratch orgs:

```bash
# Create a scratch org
sf org create scratch --definition-file config/project-scratch-def.json --alias MyScratchOrg

# Install the core package
sf package install --package CorePackage@1.0.0.1 --target-org MyScratchOrg

# Then install the feature package
sf package install --package FeaturePackage@1.0.0.1 --target-org MyScratchOrg
```

## Common Use Cases

### Shared Library Pattern
Create a shared library of components that multiple packages can use:

```json
{
  "packageDirectories": [
    {
      "path": "shared-lib",
      "package": "SharedLib",
      "versionNumber": "1.0.0.NEXT"
    },
    {
      "path": "app-one",
      "dependencies": [
        {
          "package": "SharedLib",
          "versionNumber": "1.0.0.LATEST"
        }
      ]
    },
    {
      "path": "app-two",
      "dependencies": [
        {
          "package": "SharedLib",
          "versionNumber": "1.0.0.LATEST"
        }
      ]
    }
  ]
}
```

### Feature Branch Development
Use different directories for feature branches:

```
my-sfdx-project/
├── core-app/                  # Core functionality
├── feature-branch-a/          # Feature A development
├── feature-branch-b/          # Feature B development
└── sfdx-project.json
```

### Environment-Specific Configuration
Separate environment-specific configurations:

```
my-sfdx-project/
├── base-app/                  # Base application
├── dev-config/                # Development-specific configurations
├── test-config/               # Test-specific configurations
├── prod-config/               # Production-specific configurations
└── sfdx-project.json
```

## Best Practices

1. **Logical Separation**: Divide your project into logically related components
2. **Minimize Dependencies**: Keep dependencies between packages to a minimum
3. **Consistent Structure**: Use consistent directory structures across packages
4. **Document Dependencies**: Clearly document package dependencies
5. **Version Control**: Consider using Git submodules for shared packages

### Recommended Package Structure
For each package directory:

```
package-directory/
├── main/
│   └── default/
│       ├── classes/          # Apex classes
│       ├── objects/          # Custom objects
│       ├── lwc/              # Lightning Web Components
│       ├── aura/             # Aura components
│       └── ...
├── README.md                 # Package documentation
└── scripts/                  # Package-specific scripts
```

## Troubleshooting

### Common Issues

1. **Deployment Order Issues**:
   - Deploy packages in the correct order based on dependencies
   - Use `sf project deploy start --source-dir dir1,dir2 --test-level RunLocalTests`

2. **Dependency Conflicts**:
   - Ensure package versions are compatible
   - Check for duplicate component names across packages

3. **Package Version Issues**:
   - Use explicit version numbers for stable dependencies
   - Use `LATEST` only for development

### Validation Command
Validate your package configuration:

```bash
# Validate project configuration
sf project validate
```

## Further Reading
For more information about working with multiple package directories, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_pkg.htm)