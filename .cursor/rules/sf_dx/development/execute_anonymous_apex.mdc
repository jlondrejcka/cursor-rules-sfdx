---
description: How to execute anonymous Apex code against Salesforce orgs using Salesforce CLI
globs: 
alwaysApply: false
---
 ---
description: How to execute anonymous Apex code against Salesforce orgs using Salesforce CLI
globs: 
alwaysApply: false
---
# Execute Anonymous Apex

## Overview
This rule covers how to execute anonymous Apex code blocks against Salesforce orgs using Salesforce CLI, useful for testing code snippets, data manipulation, and debugging.

## Key Concepts
- Anonymous Apex execution
- Debugging and logging
- Real-time code execution

## Detailed Sections
### Executing Anonymous Apex
- Command syntax and options
- Executing code from a file
- Executing inline code

### Logging and Debugging
- Log levels and categories
- Viewing debug logs
- Troubleshooting execution errors

## Code Examples
```bash
# Execute inline anonymous Apex
sf apex run --target-org myOrg --code "System.debug('Hello World');"

# Execute Apex from a file
sf apex run --target-org myOrg --file path/to/apex/script.apex

# Execute with specific log level
sf apex run --target-org myOrg --file path/to/script.apex --log-level FINEST

# Execute Apex with seeAllData=true
sf apex run --target-org myOrg --file path/to/script.apex --see-all-data

# Retrieve and view most recent debug log
sf apex get log --target-org myOrg
```

Example Apex script file (script.apex):
```apex
// Query for accounts
List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 10];

// Display results
for(Account acc : accounts) {
    System.debug('Account: ' + acc.Name);
}

// Update a record
if (!accounts.isEmpty()) {
    accounts[0].Description = 'Updated via anonymous Apex';
    update accounts[0];
    System.debug('Updated account: ' + accounts[0].Id);
}
```

## Best Practices
1. Use System.debug statements strategically for useful information
2. Set appropriate log levels to avoid excessive logs
3. Consider governor limits when executing Apex anonymously
4. Use anonymous Apex for testing and debugging, not production changes
5. Include error handling in your anonymous Apex scripts
6. Save frequently used scripts in version control

## Further Reading
- [Execute Anonymous Apex](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_anonymous_block.htm)
- [Salesforce CLI Command Reference: Apex](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex.htm)
- [Debug Logs](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_debugging.htm)