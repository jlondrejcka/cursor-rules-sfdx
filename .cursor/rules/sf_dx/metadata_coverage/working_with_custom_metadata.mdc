---
description: How to work with custom metadata types in Salesforce DX development
globs: 
alwaysApply: false
---
 ---
description: How to work with custom metadata types in Salesforce DX development
globs: 
alwaysApply: false
---
# Working with Custom Metadata

## Overview
Custom Metadata Types (CMT) provide a powerful way to create application configuration that can be easily deployed between environments. Unlike custom settings, custom metadata can be included in packages and deployed through the Metadata API. This rule explains how to work with custom metadata types in Salesforce DX projects.

## Custom Metadata Concepts

### What is Custom Metadata?
- App configuration data that can be packaged and deployed
- Similar to custom objects but designed for metadata (not records)
- Deployable through all standard deployment tools
- Accessible in Apex, formulas, and validation rules

### Benefits of Custom Metadata
- Deployable through Metadata API (unlike custom settings)
- Packageable (both records and type definitions)
- Environment-specific configurations
- No SOQL limits when querying
- Protected in managed packages

## Working with Custom Metadata in Salesforce DX

### Structure in Source Format
Custom metadata is represented in two parts:
1. **Type definition** (similar to custom object definition)
2. **Records** (the actual configuration values)

```
force-app/main/default/
  ├── objects/
  │   └── MySettings__mdt/                      # Custom metadata type
  │       ├── MySettings__mdt.object-meta.xml   # Type definition
  │       └── fields/                           # Fields
  │           ├── Value__c.field-meta.xml
  │           └── Description__c.field-meta.xml
  └── customMetadata/                          # Records
      ├── MySettings__mdt.Setting1.md-meta.xml
      └── MySettings__mdt.Setting2.md-meta.xml
```

### Creating Custom Metadata Types

1. **Via UI**: Create in Setup, then retrieve
```bash
# Retrieve custom metadata type
sf project retrieve start --metadata "CustomObject:MySettings__mdt"
```

2. **Via Source**: Create metadata files directly
```xml
<!-- MySettings__mdt.object-meta.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>My Settings</label>
    <pluralLabel>My Settings</pluralLabel>
    <visibility>Public</visibility>
</CustomObject>

<!-- Value__c.field-meta.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<CustomField xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>Value__c</fullName>
    <externalId>false</externalId>
    <fieldManageability>DeveloperControlled</fieldManageability>
    <label>Value</label>
    <length>255</length>
    <required>false</required>
    <type>Text</type>
    <unique>false</unique>
</CustomField>
```

### Creating Custom Metadata Records

1. **Via UI**: Create records in Setup, then retrieve
```bash
# Retrieve custom metadata records
sf project retrieve start --metadata "CustomMetadata:MySettings__mdt.Setting1"
```

2. **Via Source**: Create record files directly
```xml
<!-- MySettings__mdt.Setting1.md-meta.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
    <label>Setting 1</label>
    <protected>false</protected>
    <values>
        <field>Value__c</field>
        <value xsi:type="xsd:string">Some configuration value</value>
    </values>
    <values>
        <field>Description__c</field>
        <value xsi:type="xsd:string">Description for Setting 1</value>
    </values>
</CustomMetadata>
```

### Deploying Custom Metadata

Deploy both the type and records:

```bash
# Deploy custom metadata type and records
sf project deploy start --source-dir force-app

# Deploy specific records only
sf project deploy start --metadata "CustomMetadata:MySettings__mdt.Setting1"
```

## Environment-Specific Configuration

### Using Custom Metadata for Multi-Environment Setup

1. Create environment-specific record files:

```
force-app/main/default/customMetadata/
  ├── MySettings__mdt.Dev.md-meta.xml
  ├── MySettings__mdt.QA.md-meta.xml
  ├── MySettings__mdt.UAT.md-meta.xml
  └── MySettings__mdt.Prod.md-meta.xml
```

2. Add environment detection logic in Apex:

```java
public class ConfigService {
    public static String getEnvironmentSpecificValue(String settingName) {
        String environment = getCurrentEnvironment();
        MySettings__mdt setting = [
            SELECT Value__c FROM MySettings__mdt 
            WHERE DeveloperName = :environment
            LIMIT 1
        ];
        return setting.Value__c;
    }
    
    private static String getCurrentEnvironment() {
        // Logic to determine current environment
        // Could be based on domain, custom setting, etc.
        return 'Dev';
    }
}
```

## Best Practices for Custom Metadata

### Naming Conventions
- Use descriptive names for types and records
- Add `__mdt` suffix to easily identify custom metadata types
- Use consistent naming for related records

### Field Manageability
Choose appropriate field manageability:
- **DeveloperControlled**: Only developers can change values (in metadata)
- **SubscriberControlled**: Subscribers can change values (in their org)
- **Locked**: Values cannot be changed after release

```xml
<CustomField xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>Value__c</fullName>
    <fieldManageability>DeveloperControlled</fieldManageability>
    <!-- other properties -->
</CustomField>
```

### Organizing Related Metadata
Group related settings by type:

```
MyApp_Settings__mdt       # General settings
MyApp_UISettings__mdt     # UI configuration
MyApp_IntegSettings__mdt  # Integration settings
```

### Protected Custom Metadata
For sensitive settings, use the protected flag:

```xml
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>API Key Setting</label>
    <protected>true</protected>
    <!-- values -->
</CustomMetadata>
```

## Troubleshooting

### Common Issues
1. **Deployment Failures**: Ensure referenced fields exist
2. **Access Issues**: Check field manageability settings
3. **Integration Issues**: Verify data types match expected values

### Resolution Strategies
1. Deploy custom metadata type before records
2. Validate XML format for custom metadata records
3. Check for field type mismatches in record values

## Further Reading
For more information about working with custom metadata types, see the [Custom Metadata Types Implementation Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/custommetadata_overview.htm) and [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop.htm)