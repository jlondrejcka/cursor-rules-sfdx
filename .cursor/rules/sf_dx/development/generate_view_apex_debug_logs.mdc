---
description: How to generate, retrieve, and analyze Apex debug logs using Salesforce CLI
globs: 
alwaysApply: false
---
 ---
description: How to generate, retrieve, and analyze Apex debug logs using Salesforce CLI
globs: 
alwaysApply: false
---
# Generate and View Apex Debug Logs

## Overview
This rule covers how to set up, generate, retrieve, and analyze Apex debug logs using Salesforce CLI and other debugging tools.

## Key Concepts
- Debug log generation
- Log levels and categories
- Log retrieval and analysis

## Detailed Sections
### Setting Up Debug Logs
- Debug levels configuration
- Trace flags and expiration
- User-based logging

### Retrieving Debug Logs
- Fetching logs via CLI
- Filtering and searching logs
- Managing log retention

### Analyzing Log Content
- Understanding log structure
- Common log entries
- Performance analysis

## Code Examples
```bash
# Create a trace flag for a user (enables logging)
sf apex get log --user-id 005... --debug-level FINEST --start-date "2023-01-01T00:00:00.000+0000" --expiration "2023-01-02T00:00:00.000+0000" --target-org myOrg

# List available debug logs
sf apex get log list --target-org myOrg

# Get a specific log by ID
sf apex get log --log-id 07L... --target-org myOrg

# Get the most recent log
sf apex get log --target-org myOrg

# Save log to a file
sf apex get log --log-id 07L... --output-dir ./logs --target-org myOrg
```

Example debug log level configuration:
```apex
// Setting up a custom Debug Level in Anonymous Apex
LoggingLevel apexLogLevel = LoggingLevel.FINEST;
LoggingLevel visualforceLogLevel = LoggingLevel.INFO;
LoggingLevel systemLogLevel = LoggingLevel.DEBUG;

// Creating a trace flag for current user
Id userId = UserInfo.getUserId();
DebugLevel debugLevel = [SELECT Id FROM DebugLevel WHERE DeveloperName = 'MyCustomDebugLevel' LIMIT 1];

TraceFlag traceFlag = new TraceFlag(
    DebugLevelId = debugLevel.Id,
    LogType = 'USER_DEBUG',
    TracedEntityId = userId,
    StartDate = Datetime.now(),
    ExpirationDate = Datetime.now().addHours(1)
);
insert traceFlag;
```

## Best Practices
1. Set appropriate log levels to avoid excessive log size
2. Create time-limited trace flags to avoid filling log storage
3. Use specific log categories to focus on relevant information
4. Parse logs programmatically for complex analysis
5. Set up logging before executing the code you want to debug
6. Use log viewers with filtering and search capabilities
7. Delete old logs regularly to manage storage

## Further Reading
- [Debug Logs](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log.htm)
- [Debug Log Categories](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_debugging_debug_log_categories.htm)
- [Salesforce CLI Command Reference: Debug Logs](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_force_apex_log.htm)
- [Monitoring Debug Logs](https://help.salesforce.com/articleView?id=sf.code_debug_log.htm)