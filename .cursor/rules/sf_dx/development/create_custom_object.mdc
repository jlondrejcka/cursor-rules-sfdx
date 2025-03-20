---
description: How to create and manage custom objects in Salesforce using Salesforce CLI
globs: 
alwaysApply: false
---
 ---
description: How to create and manage custom objects in Salesforce using Salesforce CLI
globs: 
alwaysApply: false
---
# Create a Custom Object

## Overview
This rule covers how to create and manage custom objects in Salesforce using Salesforce CLI and source-driven development.

## Key Concepts
- Custom object structure and metadata
- Field types and properties
- Object relationships

## Detailed Sections
### Creating Custom Objects
- Manual XML creation
- UI-based creation and retrieval
- Required components and fields
- Object metadata structure

### Custom Object Fields
- Different field types
- Field properties (required, unique, external ID)
- Formulas and rollup summaries

### Object Relationships
- Lookup relationships
- Master-detail relationships
- Many-to-many relationships

## Code Examples
```bash
# Create a new custom object definition file
mkdir -p force-app/main/default/objects/CustomObject__c/fields

# Retrieve an existing custom object definition
sf project retrieve start -m CustomObject__c

# Deploy a custom object to an org
sf project deploy start -m CustomObject__c
```

Example CustomObject__c metadata structure:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>Custom Object</label>
    <pluralLabel>Custom Objects</pluralLabel>
    <nameField>
        <label>Custom Object Name</label>
        <type>Text</type>
    </nameField>
    <deploymentStatus>Deployed</deploymentStatus>
    <sharingModel>ReadWrite</sharingModel>
    <enableActivities>true</enableActivities>
    <enableReports>true</enableReports>
</CustomObject>
```

## Best Practices
1. Use descriptive labels and API names
2. Plan object relationships before implementation
3. Create fields with proper data types and validation
4. Consider record access and sharing model
5. Use custom metadata types for configuration data instead of custom objects
6. Document object purpose and relationships

## Further Reading
- [Custom Objects in Salesforce](https://help.salesforce.com/articleView?id=dev_objects.htm)
- [Object Relationship Overview](https://help.salesforce.com/articleView?id=overview_of_custom_object_relationships.htm)
- [Metadata API Developer Guide: Custom Object](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_customobject.htm)