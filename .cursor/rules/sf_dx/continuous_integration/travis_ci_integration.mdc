---
description: How to implement continuous integration using Travis CI with Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to implement continuous integration using Travis CI with Salesforce DX
globs: 
alwaysApply: false
---
# Continuous Integration with Travis CI

## Overview
This guide provides instructions on how to set up and use Travis CI for continuous integration with your Salesforce DX projects.

## Key Concepts
- Travis CI is a widely-used continuous integration service that integrates with GitHub
- Travis CI can automate building, testing, and deploying Salesforce DX projects
- Travis CI uses a YAML configuration file (.travis.yml) to define your build process

## Detailed Implementation

### Configure Your Environment for Travis CI
1. Sign up for Travis CI and connect it to your GitHub repository
2. Create a `.travis.yml` configuration file in your repository root
3. Configure environment variables for Salesforce authentication
4. Install the Salesforce CLI in your Travis build

### Travis CI Configuration for Salesforce DX
1. Define the build environment and dependencies
2. Set up authentication to your DevHub org
3. Configure scratch org creation and management
4. Implement testing and deployment steps
5. Set up notifications and artifacts

## Code Examples

```yaml
# Example .travis.yml for Salesforce DX
language: node_js
node_js:
  - "12"

before_install:
  # Install Salesforce CLI
  - wget https://developer.salesforce.com/media/salesforce-cli/sfdx/channels/stable/sfdx-linux-x64.tar.xz
  - mkdir sfdx
  - tar xJf sfdx-linux-x64.tar.xz -C sfdx --strip-components 1
  - export PATH=./sfdx/bin:$PATH
  - sfdx --version
  - sfdx plugins --core

before_script:
  # Authenticate to DevHub
  - openssl enc -nosalt -aes-256-cbc -d -in assets/server.key.enc -out assets/server.key -base64 -K $ENCRYPTION_KEY -iv $ENCRYPTION_IV
  - sfdx force:auth:jwt:grant --clientid $CONSUMER_KEY --jwtkeyfile assets/server.key --username $SF_USERNAME --setdefaultdevhubusername

script:
  # Create a scratch org
  - sfdx force:org:create -f config/project-scratch-def.json -a scratch-org -s
  # Push source to scratch org
  - sfdx force:source:push -u scratch-org
  # Run Apex tests
  - sfdx force:apex:test:run -u scratch-org -c -r v
  # Delete the scratch org
  - sfdx force:org:delete -u scratch-org -p
```

## Sample CI Repos for Development Models

### Sample CI Repos for Org Development Model
For org-based development, CI repositories typically include:
1. Configuration for deploying to a sandbox or production org
2. Metadata-based deployment workflows
3. Data migration scripts if needed
4. Environment-specific configuration

### Sample CI Repos for Package Development Model
For package development, CI repositories typically include:
1. Package creation and versioning steps
2. Package installation testing
3. Cross-package dependency management
4. Package promotion workflows

## Best Practices
1. Encrypt sensitive credentials using Travis encryption tools
2. Cache dependencies to speed up builds
3. Use build stages to create a comprehensive pipeline
4. Implement code quality checks in addition to Apex tests
5. Configure build notifications for your team
6. Set up branch-specific build configurations

## Further Reading
For more information, see the [Travis CI documentation](https://docs.travis-ci.com/) and [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/).