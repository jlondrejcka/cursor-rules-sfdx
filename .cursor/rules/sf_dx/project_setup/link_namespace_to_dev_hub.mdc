---
description: How to link a namespace to a Dev Hub org in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to link a namespace to a Dev Hub org in Salesforce DX
globs: 
alwaysApply: false
---
# Link a Namespace to a Dev Hub Org

## Overview
In Salesforce DX, you can develop packages using namespaces to create unique identifiers across packages. This rule explains how to link an existing namespace to your Dev Hub org, which allows you to create and manage namespaced scratch orgs and second-generation packages.

## Prerequisites
- A Salesforce Dev Hub org
- An existing namespace registered in a packaging org
- Salesforce CLI installed
- Admin access to both the Dev Hub org and the namespace org

## Namespace Concepts

### What is a Namespace?
- A namespace is a unique identifier that differentiates your package and its components from other developers' packages
- It appears as a prefix in component names, e.g., `namespace__CustomObject__c`
- Required for managed packages but optional for unlocked packages
- Can only be registered once and cannot be changed after registration

### Types of Namespace Orgs
1. **Packaging Org**: Contains your registered namespace
2. **Dev Hub Org**: Used to create scratch orgs and packages
3. **Linked Namespace Org**: When your namespace org is linked to your Dev Hub org

## Linking a Namespace

### Link Namespace Process
Linking a namespace to your Dev Hub involves these steps:

1. Authorize your Dev Hub org:
```bash
sf org login web --set-default-dev-hub --alias DevHub
```

2. Authorize your namespace org:
```bash
sf org login web --alias NamespaceOrg
```

3. Link the namespace to Dev Hub:
```bash
sf org link namespace --target-dev-hub DevHub --namespace YOUR_NAMESPACE --org NamespaceOrg
```

4. Verify the link:
```bash
sf org list namespace --target-dev-hub DevHub
```

### Understanding the Connection
- The link is a one-to-one relationship
- Each namespace can only be linked to one Dev Hub
- A single Dev Hub can have multiple namespaces linked to it

## Using a Linked Namespace

### Create a Namespaced Scratch Org
Once linked, you can create scratch orgs with your namespace:

```bash
sf org create scratch --definition-file config/project-scratch-def.json --namespace YOUR_NAMESPACE --alias NamespacedScratch
```

### Create a Namespaced Package
You can create a second-generation package with your namespace:

```bash
# Define a package with namespace in sfdx-project.json
{
  "packageDirectories": [
    {
      "path": "force-app",
      "package": "MyPackage",
      "versionName": "Version 1.0",
      "versionNumber": "1.0.0.NEXT",
      "default": true
    }
  ],
  "namespace": "YOUR_NAMESPACE",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "58.0"
}
```

```bash
# Create the package
sf package create --name "My Namespaced Package" --description "Package with namespace" --package-type Managed --path force-app
```

### Working with Namespaced Components
Components in a namespaced org will automatically get the namespace prefix:

```xml
<!-- Creating a custom field in a namespaced scratch org -->
<!-- Will be available as YOUR_NAMESPACE__CustomField__c -->
<CustomField xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>CustomField__c</fullName>
    <label>Custom Field</label>
    <type>Text</type>
</CustomField>
```

## Managing Namespace Links

### List Linked Namespaces
View namespaces linked to your Dev Hub:

```bash
sf org list namespace --target-dev-hub DevHub
```

### Remove a Namespace Link
If needed, remove the namespace link:

```bash
sf org unlink namespace --target-dev-hub DevHub --namespace YOUR_NAMESPACE
```

## Troubleshooting

### Common Issues

1. **"This namespace is already linked to another Dev Hub org"**:
   - A namespace can only be linked to one Dev Hub at a time
   - Unlink from the existing Dev Hub first

2. **"You don't have permission to link this namespace"**:
   - Ensure you have admin rights in both orgs
   - Check that you're using the correct namespace org

3. **Permission Issues**:
   - "Namespace registry" permission must be enabled in the Dev Hub
   - "Packaging" permission must be enabled in the namespace org

### Resolution Steps
1. Verify permissions in both orgs
2. Check that you're authenticated to both orgs
3. Ensure the namespace exists in the org you're linking from

## Best Practices

1. **Use One Dev Hub**: Consolidate package development under a single Dev Hub org
2. **Document Namespace Links**: Track which namespaces are linked to which Dev Hub
3. **Named Credentials**: Use named credentials for service integrations to maintain namespace separation
4. **Unique Package Names**: Use unique package names even across different namespaces
5. **Naming Conventions**: Establish naming conventions that work well with namespace prefixes

## Further Reading
For more information about linking namespaces to Dev Hub orgs, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_dev2gp_namespace_registry.htm)