---
description: How to resolve issues when unable to work after a failed org authorization
globs: 
alwaysApply: false
---
 ---
description: How to resolve issues when unable to work after a failed org authorization
globs: 
alwaysApply: false
---
# Unable to Work After Failed Org Authorization

## Overview
This rule provides troubleshooting steps for resolving issues that occur after a failed org authorization attempt in Salesforce DX.

## Key Concepts
- Authorization troubleshooting
- Auth file management
- Salesforce CLI configuration
- Session recovery

## Common Scenarios

### Authentication File Corruption
Failed authorization attempts can sometimes leave behind corrupt authentication files that prevent future login attempts.

### Network Issues During Authorization
If network connectivity was interrupted during the authorization flow, it may lead to incomplete authentication.

### Session Token Issues
Authorization problems can result in invalid session tokens being stored in your local environment.

## Resolution Steps

### 1. Clear Existing Authorization Files
Remove the problematic authorization files:

```bash
sf org logout -o username@example.com
```

If that doesn't work, you can manually delete the auth files:

```bash
# Find the location of auth files
sf config get rootdir
```

Navigate to that directory and delete the relevant org's auth file in the `.sfdx/orgs/` folder.

### 2. Check for Running Processes
Ensure there are no Salesforce CLI processes running that might be locking auth files:

```bash
# For macOS/Linux
ps -ef | grep sfdx

# For Windows
tasklist | findstr sf.exe
```

Terminate any running processes if needed.

### 3. Reset Salesforce CLI Config
If you're still having issues, you might need to reset the CLI configuration:

```bash
sf config reset
```

This will reset your config to default values. Note that this will remove all your configuration settings, including default orgs.

### 4. Clean Browser Cookies and Cache
For web-based authentication issues:
1. Clear your browser cookies and cache
2. Try using incognito/private browsing mode
3. Try a different browser

### 5. Re-Authorize the Org
After cleaning up, try to authorize again:

```bash
sf org login web -a OrgAlias
```

### 6. Check Network Configuration
Ensure your network allows connections to Salesforce domains:
- login.salesforce.com
- test.salesforce.com
- *.my.salesforce.com

### 7. Verify System Time
Incorrect system time can cause authentication issues. Ensure your computer's time is synchronized correctly.

## Best Practices
1. Always use unique aliases for your orgs
2. Keep track of authorized orgs with `sf org list`
3. For persistent issues, try the JWT-based authentication method instead of web-based
4. Regularly clean up unused org authorizations

## Further Reading
- [Salesforce CLI Auth Commands](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference_auth.htm)
- [Salesforce DX Authentication Troubleshooting](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_troubleshooting.htm)