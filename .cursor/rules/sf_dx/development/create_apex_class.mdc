---
description: How to create and manage Apex classes using Salesforce CLI
globs: 
alwaysApply: false
---
 ---
description: How to create and manage Apex classes using Salesforce CLI
globs: 
alwaysApply: false
---
# Create an Apex Class

## Overview
This rule covers how to create, deploy, and manage Apex classes using Salesforce CLI commands.

## Key Concepts
- Apex class development
- Different Apex class templates
- Apex testing framework

## Detailed Sections
### Creating Apex Classes
- Using CLI to generate different types of Apex classes
- Available templates (default, controller, test, interface, etc.)
- Structure and naming conventions

### Deploying and Testing Apex
- Deploying Apex classes to orgs
- Running tests for Apex classes
- Code coverage requirements

## Code Examples
```bash
# Create a basic Apex class
sf apex generate class --class-name MyApexClass --output-dir force-app/main/default/classes

# Create an Apex controller
sf apex generate class --class-name MyController --template DefaultController --output-dir force-app/main/default/classes

# Create an Apex test class
sf apex generate class --class-name MyClassTest --template ApexUnitTest --output-dir force-app/main/default/classes

# Deploy Apex class to org
sf project deploy start --source-dir force-app/main/default/classes

# Run Apex tests
sf apex run test --tests MyClassTest --code-coverage
```

## Best Practices
1. Follow naming conventions (e.g., service classes end with "Service")
2. Write test classes with at least 75% code coverage
3. Use bulkification patterns for efficient data processing
4. Implement error handling and proper exception classes
5. Comment your code for better maintainability
6. Follow SOLID principles in Apex development

## Further Reading
- [Apex Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/)
- [Apex Testing Best Practices](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_best_practices.htm)
- [Salesforce CLI Command Reference: Apex](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex.htm)