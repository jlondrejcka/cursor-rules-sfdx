---
description: How to work with individual records in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to work with individual records in Salesforce DX
globs: 
alwaysApply: false
---
# Work With Individual Records

## Overview
This rule covers commands and techniques for creating, retrieving, updating, and deleting individual records in Salesforce using Salesforce DX, providing a streamlined approach for working with single records during development.

## Key Concepts
- Single record CRUD operations
- Data:record commands
- Record creation and manipulation
- Field value formatting and validation

## Detailed Sections
### Using data:record Commands
The `data:record` commands allow you to work with individual records directly:

- `sf data:record:create` - Create a new record
- `sf data:record:get` - Retrieve a record by ID
- `sf data:record:update` - Update an existing record
- `sf data:record:delete` - Delete a record by ID

### Creating Records
To create a new record:

```bash
sf data:record:create -s Account -v "Name='Acme Corp' Industry=Technology"
```

### Retrieving Records
To get a record by ID:

```bash
sf data:record:get -s Account -i 001xx000003GYcZAAW
```

### Updating Records
To update an existing record:

```bash
sf data:record:update -s Account -i 001xx000003GYcZAAW -v "Name='Acme Corporation' Website=www.acme.com"
```

### Deleting Records
To delete a record:

```bash
sf data:record:delete -s Account -i 001xx000003GYcZAAW
```

### Working with Complex Field Values
For complex field values, use proper formatting:

```bash
# Date field
sf data:record:create -s Contact -v "FirstName=John LastName=Doe Birthdate=1990-01-15"

# Boolean field
sf data:record:create -s Lead -v "Company=Acme LastName=Smith DoNotCall=true"

# Reference field (lookup)
sf data:record:create -s Contact -v "LastName=Smith AccountId=001xx000003GYcZAAW"
```

## Best Practices
1. Use data:record commands for quick operations during development
2. Verify record IDs before updating or deleting
3. Use the --json flag to get machine-readable output
4. Quote field values that contain spaces or special characters
5. Use --target-org (-o) to specify which org to use when working with multiple orgs
6. Escape special characters in field values as needed

## Further Reading
For more detailed information, refer to the official Salesforce DX documentation on record operations.