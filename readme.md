# Salesforce DX Project Template with Cursor Rules

This repository serves as a template for Salesforce DX projects, complete with comprehensive cursor rules for AI-assisted development.

## What's Included

- **Salesforce DX Project Structure**: Standard force-app directory structure with proper configuration
- **Cursor Rules**: Extensive rules for Salesforce DX development workflows (`cursor-rules-sfdx.json`)
- **VS Code Configuration**: Optimized settings for Salesforce development
- **Development Tools**: Pre-configured linting, formatting, and testing setup

## Getting Started

### Prerequisites

1. Install [Salesforce CLI](https://developer.salesforce.com/tools/sfdxcli)
2. Install [VS Code](https://code.visualstudio.com/) with [Salesforce Extensions](https://marketplace.visualstudio.com/items?itemName=salesforce.salesforcedx-vscode)

### Setup

1. **Clone this template**:
   ```bash
   git clone <your-repo-url>
   cd your-project-name
   ```

2. **Authorize a Dev Hub** (if not already done):
   ```bash
   sf org login web --set-default-dev-hub --alias DevHub
   ```

3. **Create a Scratch Org**:
   ```bash
   sf org create scratch --definition-file config/project-scratch-def.json --alias MyScratchOrg --set-default
   ```

4. **Push source to your scratch org**:
   ```bash
   sf project deploy start
   ```

5. **Open your scratch org**:
   ```bash
   sf org open
   ```

## Project Structure

```
├── config/                     # Org configuration files
│   └── project-scratch-def.json
├── force-app/                  # Source code
│   └── main/
│       └── default/
│           ├── classes/        # Apex classes
│           ├── triggers/       # Apex triggers
│           ├── lwc/           # Lightning Web Components
│           ├── aura/          # Aura components
│           └── objects/       # Custom objects
├── scripts/                    # Utility scripts
│   ├── apex/                  # Anonymous Apex scripts
│   └── soql/                  # SOQL queries
├── .vscode/                   # VS Code configuration
├── cursor-rules-sfdx.json     # Cursor AI rules for Salesforce DX
└── sfdx-project.json          # Project configuration
```

## Cursor Rules

This template includes comprehensive cursor rules (`cursor-rules-sfdx.json`) that provide AI assistance for:

- **Project Setup**: Creating projects, managing orgs, and configuration
- **Development**: Apex, Lightning components, custom objects
- **Testing**: Running tests, debugging, and log analysis
- **Deployment**: Source tracking, deployments, and CI/CD
- **Troubleshooting**: Common issues and solutions

## Development Workflow

1. **Make changes** in the `force-app/` directory
2. **Push to scratch org**: `sf project deploy start`
3. **Test your changes** in the scratch org
4. **Pull any changes** from org: `sf project retrieve start`
5. **Commit and push** to version control

## Common Commands

```bash
# Create a new Apex class
sf apex generate class --name MyClass --output-dir force-app/main/default/classes

# Create a new Lightning Web Component
sf lightning generate component --name myComponent --type lwc --output-dir force-app/main/default/lwc

# Run Apex tests
sf apex run test --test-level RunLocalTests

# View org info
sf org display

# Generate password for scratch org user
sf org generate password
```

## Resources

- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
- [Lightning Web Components Guide](https://developer.salesforce.com/docs/component-library/documentation/en/lwc)
- [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/)

## Contributing

1. Fork this repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This template is provided as-is for educational and development purposes.
