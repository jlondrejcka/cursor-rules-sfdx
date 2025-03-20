---
description: How to create and manage Apex triggers using Salesforce CLI
globs: 
alwaysApply: false
---
 ---
description: How to create and manage Apex triggers using Salesforce CLI
globs: 
alwaysApply: false
---
# Create an Apex Trigger

## Overview
This rule covers how to create, deploy, and manage Apex triggers using Salesforce CLI commands, along with best practices for trigger implementation.

## Key Concepts
- Apex trigger architecture
- Trigger context variables
- Trigger handler pattern

## Detailed Sections
### Creating Apex Triggers
- Using CLI to generate Apex triggers
- Structure of an Apex trigger
- Available trigger events (before/after insert/update/delete/undelete)

### Trigger Best Practices
- One trigger per object approach
- Trigger handler pattern implementation
- Bulkification for handling multiple records

## Code Examples
```bash
# Create an Apex trigger
sf apex generate trigger --trigger-name AccountTrigger --sobject Account --output-dir force-app/main/default/triggers

# Deploy trigger to org
sf project deploy start --source-dir force-app/main/default/triggers

# Example trigger handler pattern
```apex
trigger AccountTrigger on Account (before insert, before update, after insert, after update) {
    AccountTriggerHandler handler = new AccountTriggerHandler();
    
    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            handler.onBeforeInsert(Trigger.new);
        } else if (Trigger.isUpdate) {
            handler.onBeforeUpdate(Trigger.new, Trigger.oldMap);
        }
    } else if (Trigger.isAfter) {
        if (Trigger.isInsert) {
            handler.onAfterInsert(Trigger.new);
        } else if (Trigger.isUpdate) {
            handler.onAfterUpdate(Trigger.new, Trigger.oldMap);
        }
    }
}
```

## Best Practices
1. Create one trigger per object
2. Use a trigger handler class to separate trigger logic from the trigger itself
3. Make triggers bulkified to handle multiple records efficiently
4. Avoid SOQL queries and DML operations inside loops
5. Use custom metadata or custom settings for trigger control/bypass logic
6. Write comprehensive test coverage for all trigger paths

## Further Reading
- [Apex Trigger Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm)
- [Trigger Design Patterns](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_best_practices.htm)
- [Salesforce CLI Command Reference: Apex](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_apex.htm)