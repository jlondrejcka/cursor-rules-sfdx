---
description: How to test string replacements in Salesforce DX code before deploying
globs: 
alwaysApply: false
---
# Test String Replacements

## Overview
After configuring string replacements in your Salesforce DX project, it's essential to test them before deploying to production environments. This rule outlines strategies and best practices for testing string replacements to ensure they're applied correctly and don't cause unexpected issues.

## Why Test String Replacements?

### Common String Replacement Issues
- Incorrect replacements due to pattern matching errors
- Syntax errors after replacement
- Environment-specific bugs
- Missing replacements
- Performance issues with complex replacements
- Compatibility issues across different org types

### Benefits of Testing Replacements
- Verify replacements work as expected
- Catch issues before they reach production
- Ensure compatibility across environments
- Validate package behavior with replacements
- Confirm correct file patterns are used

## Local Testing Strategies

### Using Scratch Orgs
The simplest way to test replacements is to deploy to a scratch org:

```bash
# Create a scratch org
sf org create scratch --definition-file config/project-scratch-def.json --alias TestReplacements

# Deploy source with replacements
sf project deploy start --source-dir force-app --target-org TestReplacements
```

After deployment, check the deployed files:
1. Use Developer Console to view deployed files
2. Run tests in the scratch org
3. Verify functionality that uses replaced values

### Manual Verification
Manually validate deployed code:

```bash
# Deploy to scratch org
sf project deploy start --source-dir force-app --target-org TestReplacements

# Retrieve deployed code back to a different directory
sf project retrieve start --source-dir deployed --target-org TestReplacements

# Compare source and deployed files
# Use diff tools like:
diff -r force-app deployed
```

### Verifying Apex Class Replacements
For Apex class replacements, create a simple test:

```java
@isTest
private class StringReplacementsTest {
    @isTest
    static void testApiEndpoint() {
        // Assuming you have a class with API_ENDPOINT that was replaced
        // The value after deployment should match the replacement
        System.assertEquals('https://api.example.com/v1', ApiService.getEndpoint());
    }
    
    @isTest
    static void testFeatureFlag() {
        // Assuming you have a feature flag that was replaced
        Boolean isEnabled = FeatureManager.isFeatureEnabled();
        // The value should match your replacement (true in this example)
        System.assertEquals(true, isEnabled);
    }
}
```

### Testing LWC Component Replacements
For Lightning Web Components:

```javascript
// In a test component
import { LightningElement } from 'lwc';
import { CONFIG } from 'c/config';

export default class TestConfigReplacements extends LightningElement {
    connectedCallback() {
        // Log replaced values to browser console for verification
        console.log('API Version:', CONFIG.apiVersion);
        console.log('Max Records:', CONFIG.maxRecords);
        console.log('Environment:', CONFIG.environment);
        
        // You can also add asserts for Jest tests
    }
}
```

## Automated Testing

### Create a Testing Script
Create a bash script to automate replacement testing:

```bash
#!/bin/bash
# test-replacements.sh

# Set up test org
sf org create scratch --definition-file config/project-scratch-def.json --alias TestReplace

# Deploy with replacements
sf project deploy start --source-dir force-app --target-org TestReplace

# Run tests
sf apex run test --target-org TestReplace --tests StringReplacementsTest --code-coverage

# Retrieve specific files to verify
sf project retrieve start --source-dir deployed --target-org TestReplace -m "ApexClass:ApiService,ApexClass:FeatureManager"

# Optional: Look for replacement tokens in deployed code
grep -r "@" deployed/
```

### CI/CD Pipeline Integration
Integrate replacement testing in your CI/CD pipeline:

```yaml
# Example GitHub Actions workflow
name: Test String Replacements

on: [push, pull_request]

jobs:
  test-replacements:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Salesforce CLI
        run: |
          npm install @salesforce/cli --global
      - name: Authenticate Dev Hub
        run: |
          echo "${{ secrets.SFDX_AUTH_URL }}" > ./authfile
          sf org login sfdx-url --sfdx-url-file ./authfile --alias devhub
      - name: Create Scratch Org
        run: |
          sf org create scratch --definition-file config/project-scratch-def.json --alias test-org --duration-days 1
      - name: Deploy with Replacements
        run: |
          sf project deploy start --source-dir force-app --target-org test-org
      - name: Run Tests
        run: |
          sf apex run test --target-org test-org --code-coverage --result-format human
```

## Testing Different Replacement Scenarios

### Testing Environment-Specific Replacements
Test replacements across different environments:

1. Create different scratch org definition files:
```bash
# Development environment
sf org create scratch --definition-file config/dev-scratch-def.json --alias DevOrg

# Production-like environment
sf org create scratch --definition-file config/prod-scratch-def.json --alias ProdOrg
```

2. Use different replacement configurations:
```bash
# Create different project config files
cp sfdx-project.json sfdx-project.dev.json
cp sfdx-project.json sfdx-project.prod.json

# Edit each with environment-specific replacements

# Deploy with specific config
SF_PROJECT_JSON=sfdx-project.dev.json sf project deploy start --source-dir force-app --target-org DevOrg
SF_PROJECT_JSON=sfdx-project.prod.json sf project deploy start --source-dir force-app --target-org ProdOrg
```

### Testing Package Versions
Test replacements in package versions:

```bash
# Create a package version with replacements
sf package version create --package MyPackage --installation-key test1234 --wait 10

# Install the package in a test org
sf org create scratch --definition-file config/project-scratch-def.json --alias PackageTest
sf package install --package MyPackage@latest --target-org PackageTest --installation-key test1234

# Test the installed package
sf apex run test --target-org PackageTest --code-coverage
```

## Best Practices for Testing Replacements

### Specific Testing Guidelines
1. **Test Each Replacement**: Create specific tests for each replacement token
2. **Test Edge Cases**: Test with extreme values and special characters
3. **Cross-Environment Testing**: Test in different org types (scratch, sandbox, production)
4. **Test File Pattern Coverage**: Verify all files matching patterns are updated
5. **Validate Syntax**: Ensure replacements don't introduce syntax errors

### Useful Testing Tools
- Diff tools to compare source and deployed files
- Linting tools to validate syntax after replacement
- Automated test runners
- CI/CD platforms for continuous testing

### Logging and Debugging
Enable detailed logging for troubleshooting:

```bash
# Enable trace logging
sf config set logLevel=trace --global

# Check logs after deployment
sf apex log get --target-org TestOrg
```

## Troubleshooting Common Issues

### Replacements Not Applied
If replacements aren't being applied:

1. Check package directory paths in `sfdx-project.json`
2. Verify file patterns match your source files
3. Ensure token syntax matches exactly
4. Check for case sensitivity issues

### Syntax Errors After Replacement
If replacements cause syntax errors:

1. Check that replacement values are properly formatted for each file type
2. Verify string replacements in code literals are properly escaped
3. Test with smaller replacements first

### Package Version Issues
For package version problems:

1. Check package dependencies
2. Verify replacements against package validation rules
3. Test package installation in a clean org

## Further Reading
For more information about testing string replacements, see the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_string_replace.htm) 