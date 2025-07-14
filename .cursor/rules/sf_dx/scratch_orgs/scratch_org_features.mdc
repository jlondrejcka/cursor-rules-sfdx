---
description: Available features that can be enabled in Scratch Org definition files
globs: 
alwaysApply: false
---
 ---
description: Available features that can be enabled in Scratch Org definition files
globs: 
alwaysApply: false
---
# Scratch Org Features

## Overview
Scratch Org features are specific capabilities that you can enable when creating a Scratch Org. These features correspond to Salesforce product offerings and functionality that might require licenses in production environments.

## Key Concepts
- Features are specified in the `features` array in the Scratch Org definition file
- Features allow you to test functionality that might require licenses in production
- Some features have dependencies on other features
- Features are case-sensitive

## Common Features
Here are some commonly used Scratch Org features:

### Sales Cloud Features
- `API` - API Access
- `AuthorApex` - Apex Development
- `DebugApex` - Apex Debugging
- `ForceComPlatform` - Force.com Platform
- `LightningSalesConsole` - Lightning Sales Console
- `MarketingUser` - Marketing User
- `SalesUser` - Sales User

### Service Cloud Features
- `ServiceCloud` - Service Cloud
- `LightningServiceConsole` - Lightning Service Console
- `LiveAgent` - Live Agent
- `ServiceUser` - Service User
- `Knowledge` - Knowledge Management

### Community Features
- `Communities` - Community Cloud
- `CustomerCommunity` - Customer Community
- `CustomerCommunityPlus` - Customer Community Plus
- `PartnerCommunity` - Partner Community

### Development Features
- `Workflow` - Workflow Rules
- `ProcessBuilder` - Process Builder
- `MultiCurrency` - Multiple Currencies
- `StateAndCountryPicklist` - State and Country Picklists
- `DevelopmentWave` - Analytics Development
- `AnalyticsAdminPerms` - Analytics Admin Permissions

### Other Features
- `PersonAccounts` - Person Accounts
- `ContactsToMultipleAccounts` - Contacts to Multiple Accounts
- `LightningExperience` - Lightning Experience
- `EinsteinAnalyticsPlus` - Einstein Analytics Plus
- `EinsteinBuilderFree` - Einstein Builder Free

## Example Usage
```json
{
  "orgName": "My Company",
  "edition": "Developer",
  "features": [
    "API",
    "AuthorApex",
    "Communities",
    "ServiceCloud",
    "MultiCurrency"
  ],
  "settings": {}
}
```

## Checking Available Features
To check which features are available for a specific Scratch Org edition:

```bash
sf org create scratch --edition=Enterprise --json
```

This will list all available features for the Enterprise edition.

## Feature Dependencies
Some features have dependencies on other features. For example:
- `CustomerCommunity` requires `Communities`
- `ServiceUser` may require `SalesUser`

## Best Practices
1. Only enable features that you need for your development
2. Be aware of feature dependencies
3. Test with features that match your production environment
4. Document which features are required for your application
5. Create different definition files for different feature sets

## Further Reading
[Salesforce DX Developer Guide: Scratch Org Features](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm)