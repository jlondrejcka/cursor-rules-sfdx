---
description: How to retrieve changes to profiles with source tracking
globs: 
alwaysApply: false
---
 ---
description: How to retrieve changes to profiles with source tracking
globs: 
alwaysApply: false
---
# Retrieve Changes to Profiles with Source Tracking

## Overview
Profiles are complex metadata types in Salesforce that require special handling when using source tracking. This rule explains how to effectively retrieve profile changes using source tracking.

## Key Concepts
- Profiles contain permissions for various metadata types
- Profile changes can be triggered by changes to other metadata
- Profiles can be retrieved as a whole or in parts
- Special considerations exist for profile retrieval with source tracking

## Detailed Sections
### Understanding Profile Structure
Learn about how profiles are structured in the Salesforce DX format.

### Profile Change Detection
Understand how source tracking identifies changes to profiles.

### Retrieving Complete Profiles
How to retrieve entire profiles when changes are detected.

### Retrieving Partial Profile Changes
Techniques for retrieving only specific parts of profiles that have changed.

## Code Examples
```bash
# Retrieve only profile changes
sf project retrieve start -o your-org-alias -m Profile

# Retrieve specific profiles
sf project retrieve start -o your-org-alias -m "Profile:Admin,Profile:Standard"

# Retrieve profiles with verbose output
sf project retrieve start -o your-org-alias -m Profile --verbose
```

## Best Practices
1. Consider retrieving complete profiles rather than partial changes
2. Be careful when merging profile changes to avoid permission regressions
3. Always review profile changes before committing them to version control
4. Use permission sets where possible to minimize profile changes
5. Test profile changes thoroughly before deploying to production

## Further Reading
Refer to the official Salesforce DX documentation for more details about working with profiles and source tracking.