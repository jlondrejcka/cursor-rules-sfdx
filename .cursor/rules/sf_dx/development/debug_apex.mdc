---
description: How to debug Apex code in Salesforce using various debugging tools and techniques
globs: 
alwaysApply: false
---
 ---
description: How to debug Apex code in Salesforce using various debugging tools and techniques
globs: 
alwaysApply: false
---
# Debug Apex

## Overview
This rule covers techniques and tools for debugging Apex code in Salesforce, including log analysis, IDE debugging, and troubleshooting common issues.

## Key Concepts
- Debug logs and log levels
- Checkpoints and breakpoints
- IDE debugging tools

## Detailed Sections
### Setting Up Debug Logs
- Configuring trace flags
- Setting log levels
- Monitoring logs

### IDE Debugging
- Using Replay Debugger in VS Code
- Setting breakpoints
- Inspecting variables

### Common Debugging Techniques
- Using System.debug statements
- Exception handling and error logging
- Performance analysis

## Code Examples
```bash
# Get a list of debug logs
sf apex get log list --target-org myOrg

# Get the most recent debug log
sf apex get log --target-org myOrg

# Save a log to a file
sf apex get log --log-id 07L... --target-org myOrg --output-dir ./logs

# Set a trace flag on a user
sf apex get log --user-id 005... --debug-level FINEST --target-org myOrg
```

Example debug statements in Apex:
```apex
// Basic debug statement
System.debug('Processing account: ' + account.Name);

// Debug with different log levels
System.debug(LoggingLevel.ERROR, 'Critical error occurred: ' + e.getMessage());
System.debug(LoggingLevel.INFO, 'Process completed successfully');

// Debug complex objects
System.debug(LoggingLevel.FINE, 'Query results: ' + JSON.serializePretty(results));

// Time-based debugging
Long startTime = System.now().getTime();
// ... code to measure ...
Long endTime = System.now().getTime();
System.debug('Process took ' + (endTime - startTime) + ' ms');
```

## Best Practices
1. Use appropriate log levels to filter noise
2. Add meaningful context to debug statements
3. Remove or disable debug statements in production code
4. Use try-catch blocks to capture and log exceptions
5. Check governor limits during debugging
6. Set up user trace flags instead of modifying code for debugging
7. Use the Developer Console and IDE tools for complex debugging

## Further Reading
- [Debugging Apex](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_debugging.htm)
- [Debug Logs](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log.htm)
- [Replay Debugger](https://developer.salesforce.com/tools/vscode/en/apex/replay-debugger)
- [Apex Flex Query](https://developer.salesforce.com/blogs/2018/05/summer-18-apex-flex-query)