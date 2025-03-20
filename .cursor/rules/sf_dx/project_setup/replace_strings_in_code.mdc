---
description: How to replace strings in code before deploying or packaging in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to replace strings in code before deploying or packaging in Salesforce DX
globs: 
alwaysApply: false
---
# Replace Strings in Code Before Deploying or Packaging

## Overview
Salesforce DX allows you to define string replacements in your `sfdx-project.json` file. These replacements are applied when you deploy or create package versions, enabling you to use environment-specific values without hardcoding them in your source files. This rule explains how to configure and use string replacements in your Salesforce DX projects.

## String Replacement Concepts

### Use Cases for String Replacements
- Different API endpoints for development vs. production
- Environment-specific URLs
- Org-specific IDs or settings
- Feature toggles
- Version-specific values
- Adapting code to different customer installations

### How String Replacements Work
- Defined in the `sfdx-project.json` file
- Applied at deployment time or when creating package versions
- Original source files remain unchanged
- Replacements occur in-memory during deployment/packaging

## Configuring String Replacements

### Basic Configuration
Add a `replacements` section to your package directory in `sfdx-project.json`:

```json
{
  "packageDirectories": [
    {
      "path": "force-app",
      "default": true,
      "package": "MyPackage",
      "versionName": "Version 1.0",
      "versionNumber": "1.0.0.NEXT",
      "replacements": [
        {
          "filename": "classes/*.cls",
          "stringToReplace": "@API_VERSION@",
          "replaceWithString": "58.0"
        }
      ]
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "58.0"
}
```

### Multiple Replacements
You can define multiple replacements:

```json
"replacements": [
  {
    "filename": "classes/*.cls",
    "stringToReplace": "@API_URL@",
    "replaceWithString": "https://api.example.com/v1"
  },
  {
    "filename": "classes/Constants.cls",
    "stringToReplace": "@MAX_RECORDS@",
    "replaceWithString": "100"
  },
  {
    "filename": "lwc/**/*.js",
    "stringToReplace": "@ENVIRONMENT@",
    "replaceWithString": "PRODUCTION"
  }
]
```

### Using File Patterns
The `filename` property supports glob patterns:

- `classes/*.cls` - All Apex classes
- `lwc/**/*.js` - All JavaScript files in LWC components
- `**/Constants.*` - All files named Constants
- `**/*Settings*.*` - All files with "Settings" in the name

## Implementation Examples

### Example: API Endpoint Configuration
In your source code (`ApiService.cls`):

```java
public class ApiService {
    private static final String API_ENDPOINT = '@API_ENDPOINT@';
    
    public static HttpResponse makeRequest() {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(API_ENDPOINT + '/resource');
        // Rest of the code
    }
}
```

In your `sfdx-project.json`:

```json
"replacements": [
  {
    "filename": "classes/ApiService.cls",
    "stringToReplace": "@API_ENDPOINT@",
    "replaceWithString": "https://api.example.com/v1"
  }
]
```

### Example: Feature Flags
In your source code (`FeatureManager.cls`):

```java
public class FeatureManager {
    private static final Boolean ENABLE_NEW_FEATURE = @ENABLE_NEW_FEATURE@;
    
    public static Boolean isFeatureEnabled() {
        return ENABLE_NEW_FEATURE;
    }
}
```

In your `sfdx-project.json`:

```json
"replacements": [
  {
    "filename": "classes/FeatureManager.cls",
    "stringToReplace": "@ENABLE_NEW_FEATURE@",
    "replaceWithString": "true"
  }
]
```

### Example: LWC Configuration
In your source code (`config.js`):

```javascript
export const CONFIG = {
    apiVersion: '@API_VERSION@',
    maxRecords: @MAX_RECORDS@,
    environment: '@ENVIRONMENT@'
};
```

In your `sfdx-project.json`:

```json
"replacements": [
  {
    "filename": "lwc/**/config.js",
    "stringToReplace": "@API_VERSION@",
    "replaceWithString": "58.0"
  },
  {
    "filename": "lwc/**/config.js",
    "stringToReplace": "@MAX_RECORDS@",
    "replaceWithString": "50"
  },
  {
    "filename": "lwc/**/config.js",
    "stringToReplace": "@ENVIRONMENT@",
    "replaceWithString": "PRODUCTION"
  }
]
```

## Best Practices

### Naming Conventions
Use a consistent pattern for replacement tokens:

- `@TOKEN_NAME@` - Makes tokens easily identifiable
- `${TOKEN_NAME}` - Similar to environment variable syntax
- `%%TOKEN_NAME%%` - Clearly distinguishes from regular text

### Organize by Environment
Consider organizing replacements by environment:

```json
"replacements": [
  {
    "environment": "development",
    "replacements": [
      {
        "filename": "classes/Config.cls",
        "stringToReplace": "@ENV@",
        "replaceWithString": "DEV"
      }
    ]
  },
  {
    "environment": "production",
    "replacements": [
      {
        "filename": "classes/Config.cls",
        "stringToReplace": "@ENV@",
        "replaceWithString": "PROD"
      }
    ]
  }
]
```

### Documentation
Document your replacements and their purpose:

```json
"replacements": [
  {
    "description": "API endpoint for integration",
    "filename": "classes/ApiService.cls",
    "stringToReplace": "@API_ENDPOINT@",
    "replaceWithString": "https://api.example.com/v1"
  }
]
```

### Security Considerations
- Don't use replacements for secrets or credentials
- Be cautious with sensitive values like API keys
- Consider using named credentials instead for secure endpoints

## Deployment with Replacements

### Deploying to a Scratch Org
When deploying to a scratch org, replacements are automatically applied:

```bash
sf project deploy start --source-dir force-app
```

### Creating Package Versions
When creating package versions, replacements are applied:

```bash
sf package version create --package "MyPackage" --installation-key test1234 --wait 10
```

### Verifying Replacements
To test your replacements:

1. Deploy to a scratch org
2. View the deployed files in the Developer Console
3. Verify the replacements were made correctly

## Troubleshooting

### Common Issues
1. **Replacements Not Applied**:
   - Check file patterns match your files
   - Verify exact string match, including whitespace
   - Ensure your project structure matches the paths

2. **Incorrect Replacements**:
   - Check for token name collisions
   - Verify the replacement string doesn't contain unexpected characters

3. **Package Version Issues**:
   - Validate replacements before creating packages
   - Test package installation in a scratch org

### Debugging String Replacements
To debug string replacements:

```bash
# Enable trace logging
sf config set logLevel=trace --global

# Deploy to see detailed logs
sf project deploy start --source-dir force-app
```

## Further Reading
For more information about replacing strings in code, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_build_string_replace.htm)