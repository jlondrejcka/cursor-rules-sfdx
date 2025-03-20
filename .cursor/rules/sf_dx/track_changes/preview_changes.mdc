---
description: How to preview changes identified by source tracking in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to preview changes identified by source tracking in Salesforce DX
globs: 
alwaysApply: false
---
# Preview Changes Identified by Source Tracking

## Overview
Source tracking in Salesforce DX identifies changes between your local project and your org. This rule explains how to preview these changes before deploying or retrieving them.

## Key Concepts
- Source tracking identifies changes in both directions (local to org and org to local)
- Changes can be previewed without committing to deployment or retrieval
- Previewing helps validate what will be deployed or retrieved
- Source tracking compares local metadata to the org's metadata

## Detailed Sections
### Preview Local Changes
Learn how to see which local changes would be deployed to your org.

### Preview Remote Changes
Discover how to see which changes in your org would be retrieved to your local project.

### Understanding the Preview Output
Interpret the source tracking preview results to make informed decisions.

## Code Examples
```bash
# Preview local changes that would be deployed to the org
sf project deploy preview -o your-org-alias

# Preview changes in the org that would be retrieved locally
sf project retrieve preview -o your-org-alias

# Preview changes with detailed output
sf project deploy preview -o your-org-alias --verbose
```

## Best Practices
1. Always preview changes before deploying or retrieving
2. Review the preview output carefully to avoid unintended changes
3. Use preview in combination with source diff tools for detailed comparison
4. Preview changes after each significant development phase

## Further Reading
Refer to the official Salesforce DX documentation for more information on previewing source tracked changes.