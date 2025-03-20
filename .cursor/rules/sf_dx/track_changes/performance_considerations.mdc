---
description: Understanding performance considerations for source tracking in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: Understanding performance considerations for source tracking in Salesforce DX
globs: 
alwaysApply: false
---
# Performance Considerations of Source Tracking

## Overview
Source tracking is a powerful tool in Salesforce DX, but it can impact performance, especially in large projects. This rule provides guidance on optimizing source tracking performance.

## Key Concepts
- Source tracking performance impacts development speed
- Large projects face unique source tracking challenges
- Optimizing source tracking requires understanding its resource usage
- Different performance optimization strategies apply to different scenarios

## Detailed Sections
### Resource Requirements
Understand the system resources used by source tracking.

### Scaling with Project Size
Learn how source tracking performance scales with project size and complexity.

### Optimizing Source Tracking Operations
Techniques to make source tracking operations faster and more efficient.

### Balancing Coverage vs. Performance
Strategies for finding the right balance between tracking everything and maintaining performance.

## Code Examples
```bash
# Retrieve only specific components to improve performance
sf project retrieve start -o your-org-alias -m ApexClass,CustomObject

# Disable source tracking for larger orgs when not needed
sf org disable source-tracking -o your-large-org-alias

# Use manifest files for better performance with large deployments
sf project deploy start -o your-org-alias -x path/to/package.xml
```

## Best Practices
1. Limit the scope of source tracking to essential components
2. Consider disabling source tracking for very large orgs
3. Use selective retrieval and deployment to improve performance
4. Schedule large operations during off-hours
5. Optimize your local system's resources for better performance
6. Clear source tracking data regularly to prevent bloat
7. Monitor source tracking performance to identify bottlenecks
8. Consider using package.xml manifests for extremely large operations

## Further Reading
See the official Salesforce DX documentation for detailed information on performance optimization for source tracking.