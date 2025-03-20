---
description: How to use the sample Salesforce DX repositories on GitHub for learning and reference
globs: 
alwaysApply: false
---
---
description: How to use the sample Salesforce DX repositories on GitHub for learning and reference
globs: 
alwaysApply: false
---
# Sample Repository on GitHub

## Overview
Salesforce provides sample repositories on GitHub that demonstrate best practices for Salesforce DX project setup and development workflows. These repositories serve as references and starting points for your own projects.

## Key Sample Repositories

### Salesforce DX Examples Repository
The official Salesforce DX examples repository contains sample applications and configurations:

```bash
# Clone the repository
git clone https://github.com/forcedotcom/sfdx-simple.git
cd sfdx-simple
```

This repository includes:
- Basic project structure
- Sample configuration files
- CI/CD examples
- Sample metadata

### Dreamhouse Application
The Dreamhouse app is a comprehensive sample that demonstrates Salesforce DX capabilities:

```bash
# Clone the repository
git clone https://github.com/dreamhouseapp/dreamhouse-sfdx.git
cd dreamhouse-sfdx
```

This application includes:
- Complete application with Lightning components
- Apex classes and triggers
- Permission sets and profiles
- Sample data

## Exploring a Sample Repository

### 1. Review Project Structure
Explore the repository structure to understand the standard organization:

```bash
# List the files in the repository
ls -la

# Examine the configuration files
cat sfdx-project.json
cat config/project-scratch-def.json
```

### 2. Create a Scratch Org from the Sample
Test the sample by creating a scratch org:

```bash
# Create a scratch org
sf org create scratch -f config/project-scratch-def.json -a SampleOrg

# Push the source to the scratch org
sf project deploy start
```

### 3. Import Sample Data (if provided)
Some repositories include sample data:

```bash
# Import data using data plan
sf data import tree -p data/data-plan.json
```

## Using Samples as Templates

### Create a New Project Based on a Sample
You can use a sample as a starting point for your own project:

```bash
# Clone the sample repository
git clone https://github.com/forcedotcom/sfdx-simple.git my-new-project
cd my-new-project

# Remove the original Git history
rm -rf .git

# Initialize a new Git repository
git init
git add .
git commit -m "Initial commit based on sfdx-simple template"
```

### Customize the Project Configuration
Modify the project configuration for your needs:

1. Edit `sfdx-project.json` to update the name and package directories
2. Modify `config/project-scratch-def.json` to match your requirements
3. Update any sample code or metadata to match your project needs

## Learning from Sample Implementation

### Code Organization
Study how the samples organize their code:
- Directory structure
- Naming conventions
- Metadata organization

### Deploy and Development Workflow
Examine the deployment scripts and workflows:
- CI/CD configuration (in `.github` or similar directories)
- Scratch org creation scripts
- Data import/export utilities

### Testing Approach
Review testing patterns:
- Test class organization
- Test data setup
- Mocking and test utilities

## Best Practices from Samples

1. Follow the organized directory structure for your metadata
2. Adopt the naming conventions demonstrated in the samples
3. Implement similar CI/CD approaches for your own projects
4. Use the scratch org definition files as templates
5. Leverage the data imown data

## Further Reading
For more information about Salesforce DX samples and repositories, see the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_sample_app.htm)