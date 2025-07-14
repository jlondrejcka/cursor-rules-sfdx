---
description: How to run Apex tests using Salesforce CLI and analyze test results
globs: 
alwaysApply: false
---
 ---
description: How to run Apex tests using Salesforce CLI and analyze test results
globs: 
alwaysApply: false
---
# Run Apex Tests

## Overview
This rule covers how to run Apex tests using Salesforce CLI, view test results, and analyze code coverage.

## Key Concepts
- Apex test execution
- Code coverage requirements
- Test result analysis

## Detailed Sections
### Running Apex Tests
- Running all tests in an org
- Running specific test classes
- Running tests with different options

### Test Results and Code Coverage
- Viewing test results
- Understanding code coverage reports
- Troubleshooting test failures

## Code Examples
```bash
# Run a specific test class
sf apex run test --tests MyTestClass --target-org myOrg

# Run multiple test classes
sf apex run test --tests MyTestClass,AnotherTestClass --target-org myOrg

# Run tests with code coverage
sf apex run test --tests MyTestClass --code-coverage --target-org myOrg

# Run all tests in the org
sf apex run test --test-level RunAllTestsInOrg --target-org myOrg

# Run all local tests 
sf apex run test --test-level RunLocalTests --target-org myOrg

# Output test results to JSON file
sf apex run test --tests MyTestClass --result-format json --output-dir ./test-results

# Run tests synchronously
sf apex run test --tests MyTestClass --synchronous --target-org myOrg
```

## Best Practices
1. Write tests for all Apex classes and triggers with at least 75% code coverage
2. Use `@isTest` annotation for all test classes
3. Create test data within test methods, not in the database
4. Use `Test.startTest()` and `Test.stopTest()` to reset governor limits
5. Test both positive and negative scenarios
6. Use `System.assert` methods to verify expected behavior
7. Run tests before every deployment
8. Set up CI/CD pipelines to run tests automatically

## Further Reading
- [Apex Testing Framework](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing.htm)
- [Salesforce CLI Command Reference: Apex Test](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex_commands_testing.htm)
- [Best Practices for Apex Testing](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_best_practices.htm)