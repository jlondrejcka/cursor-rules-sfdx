---
description: How to implement continuous integration for different Salesforce development models
globs: 
alwaysApply: false
---
 ---
description: How to implement continuous integration for different Salesforce development models
globs: 
alwaysApply: false
---
# CI Development Models for Salesforce DX

## Overview
This guide explains how to set up continuous integration for different Salesforce development models, with sample repository configurations.

## Key Concepts
- Continuous integration can be implemented for both org-based and package development models
- Different CI approaches are needed depending on your development model
- Sample repositories provide templates for common CI scenarios

## Detailed Implementation

### CI for Org Development Model
The org development model focuses on using a source control system with direct deployments to orgs:

1. Source code is stored in version control (Git)
2. CI system authenticates to target orgs
3. Changes are deployed directly to orgs using Metadata API
4. Tests are run in the target org
5. Deployments can be to sandboxes or production

### CI for Package Development Model
The package development model centers around developing, versioning, and distributing packages:

1. Source code is organized into package directories
2. CI system creates package versions
3. Package versions are tested in scratch orgs
4. Successful packages can be promoted and installed to target orgs
5. Dependencies between packages are managed in the CI process

## Code Examples

### Sample CI Config for Org Development Model

```yaml
# Example CI configuration for org-based development
steps:
  - step: "Authenticate to org"
    command: sfdx auth:jwt:grant --clientid $CONSUMER_KEY --jwtkeyfile assets/server.key --username $SF_USERNAME
  
  - step: "Convert source to metadata format"
    command: sfdx force:source:convert -d ./mdapi_output
  
  - step: "Deploy to target org"
    command: sfdx force:mdapi:deploy -d ./mdapi_output -u $SF_USERNAME -w 10 -l RunLocalTests
```

### Sample CI Config for Package Development Model

```yaml
# Example CI configuration for package development
steps:
  - step: "Authenticate to DevHub"
    command: sfdx auth:jwt:grant --clientid $CONSUMER_KEY --jwtkeyfile assets/server.key --username $DEVHUB_USERNAME --setdefaultdevhubusername
  
  - step: "Create scratch org"
    command: sfdx force:org:create -f config/project-scratch-def.json -a scratch-org -s
  
  - step: "Create package version"
    command: sfdx force:package:version:create -p MyPackage -d force-app -k $PACKAGE_KEY -w 10
  
  - step: "Install package in scratch org"
    command: sfdx force:package:install -p "MyPackage@1.0.0-1" -w 10 -u scratch-org
  
  - step: "Run tests"
    command: sfdx force:apex:test:run -u scratch-org -c -r json
```

## Best Practices

### For Org Development Model
1. Use sandbox orgs for testing before production deployment
2. Include data migration scripts if needed
3. Set up CI with branch-specific deployment targets
4. Implement validation-only deployments for pull requests
5. Use deployment parameters to control test execution

### For Package Development Model
1. Implement CI with package version creation
2. Test installation of packages on clean scratch orgs
3. Manage dependencies between packages
4. Set up automatic promotion of packages after successful testing
5. Consider release management strategies for multi-package projects

## Further Reading
For more information, see the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/) and [Trailhead modules on CI/CD](https://trailhead.salesforce.com/en/content/learn/modules/sfdx_travis_ci).