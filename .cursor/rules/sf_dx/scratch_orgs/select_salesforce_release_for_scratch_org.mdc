---
description: How to specify which Salesforce release version to use for a Scratch Org
globs: 
alwaysApply: false
---
 ---
description: How to specify which Salesforce release version to use for a Scratch Org
globs: 
alwaysApply: false
---
# Select the Salesforce Release for a Scratch Org

## Overview
Salesforce releases major updates three times a year. When creating Scratch Orgs, you can specify which release version to use, allowing you to test your application against current, previous, or preview releases.

## Key Concepts
- Scratch Orgs can be created on different Salesforce release versions
- The `release` parameter in the definition file controls the release version
- Available options include Current, Previous, and Preview releases
- Testing against multiple release versions helps ensure compatibility

## Specifying a Release Version

### Syntax in Definition File
To specify a release version, add the `release` parameter to your Scratch Org definition file:

```json
{
  "orgName": "My Company",
  "edition": "Developer",
  "release": "Current",
  "features": [],
  "settings": {}
}
```

### Available Release Options
- `Current`: The current production release (default if not specified)
- `Previous`: The previous production release
- `Preview`: The preview/beta version of the upcoming release

## Example Definition Files

### Current Release Definition
```json
{
  "orgName": "Current Release Org",
  "edition": "Developer",
  "release": "Current",
  "features": ["API"]
}
```

### Previous Release Definition
```json
{
  "orgName": "Previous Release Org",
  "edition": "Developer",
  "release": "Previous",
  "features": ["API"]
}
```

### Preview Release Definition
```json
{
  "orgName": "Preview Release Org",
  "edition": "Developer",
  "release": "Preview",
  "features": ["API"]
}
```

## Creating a Scratch Org with a Specific Release

```bash
sf org create scratch -f config/previous-release-def.json -a PreviousReleaseOrg
```

## Release Availability and Timing

### Release Cycle
Salesforce has three major releases per year, typically in:
- Spring (February - April)
- Summer (June - August)
- Winter (October - December)

### Preview Availability
The Preview release becomes available during the sandbox preview phase of the Salesforce release cycle, typically 4-6 weeks before the production release.

### Previous Release Retention
The Previous release option is typically available until shortly after the next release goes into production.

## Use Cases for Different Releases

### Current Release
- Standard development work
- Production-ready testing
- Final QA before deployment

### Previous Release
- Testing backward compatibility
- Supporting orgs that haven't upgraded
- Reproducing issues in existing production environments

### Preview Release
- Testing upcoming features
- Preparing for new release impact
- Early detection of compatibility issues

## Best Practices
1. Test your application against all relevant release versions
2. Create separate Scratch Orgs for each release version you're testing
3. Use clear naming conventions to indicate which release a Scratch Org is using
4. Document any release-specific issues or behavior differences
5. Create automation scripts to test against multiple releases
6. Update your test strategy during Salesforce's release transition periods

## Limitations
- Not all features may be available in Previous or Preview releases
- Preview releases may have incomplete features or known issues
- Release availability depends on Salesforce's release schedule
- Some features may behave differently across releases

## Further Reading
[Salesforce DX Developer Guide: Select the Salesforce Release for a Scratch Org](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_select_release.htm)
[Salesforce Release Schedule](mdc:https:/developer.salesforce.com/docs/atlas.en-us.236.0.api_meta.meta/api_meta/meta_release_notes.htm)