---
description: How to set up your development environment to work with any Salesforce org
globs: 
alwaysApply: false
---
 ---
description: How to set up your development environment to work with any Salesforce org
globs: 
alwaysApply: false
---
# Develop Against Any Org

## Overview
This rule covers how to set up your development environment to work with any Salesforce org, not just scratch orgs, using Salesforce DX tools.

## Key Concepts
- Development against production, sandbox, or other non-scratch orgs
- Source tracking with non-scratch orgs
- Development workflows outside of the scratch org model

## Detailed Sections
### Setting Up Environment
- Authenticate to your target org using `sf org login`
- Set up source tracking for your target org
- Configure your project for non-scratch org development

### Working with Non-Scratch Orgs
- Differences between scratch org and non-scratch org development
- Managing source conflicts
- Best practices for team development

## Code Examples
```bash
# Authenticate to a production or sandbox org
sf org login web -a MyOrgAlias

# Pull source from the org to your local project
sf project retrieve start

# Push local changes to the org
sf project deploy start
```

## Best Practices
1. Use source tracking to keep local project in sync with org
2. Establish team workflows to avoid conflicts when multiple developers work against the same org
3. Use Git or another version control system alongside SFDX for tracking changes
4. Consider partial deployments for large orgs to improve performance

## Further Reading
- [Salesforce DX Developer Guide: Develop Against Any Org](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_any_org.htm)
- [Source-Driven Development](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_develop_any_org.htm)