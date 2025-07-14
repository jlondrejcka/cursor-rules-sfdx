---
description: How to run SOQL or SOSL queries in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to run SOQL or SOSL queries in Salesforce DX
globs: 
alwaysApply: false
---
# Run SOQL or SOSL Queries

## Overview
This rule covers the commands and techniques for executing SOQL (Salesforce Object Query Language) and SOSL (Salesforce Object Search Language) queries using Salesforce DX, allowing developers to efficiently retrieve and analyze data during development.

## Key Concepts
- SOQL for relational data queries
- SOSL for text-based searches
- Query formatting and syntax
- Output formatting options
- Query optimization

## Detailed Sections
### Using data:soql Commands
The `data:soql` command allows you to execute SOQL queries against your org:

```bash
sf data:soql:query -q "SELECT Id, Name, Industry FROM Account WHERE Industry = 'Technology' LIMIT 10"
```

### Using data:sosl Commands
The `data:sosl` command allows you to perform text-based searches:

```bash
sf data:sosl:query -q "FIND {Acme} IN ALL FIELDS RETURNING Account(Id, Name), Contact(Id, FirstName, LastName)"
```

### Query Formatting
For complex queries, you can use a file:

```bash
# query.soql file content:
SELECT Id, Name, 
  (SELECT FirstName, LastName FROM Contacts)
FROM Account
WHERE Industry = 'Technology'
LIMIT 10

# Command:
sf data:soql:query -f ./query.soql
```

### Output Formatting
Control the format of the query results:

```bash
# JSON format
sf data:soql:query -q "SELECT Id, Name FROM Account LIMIT 5" --json

# CSV format
sf data:soql:query -q "SELECT Id, Name FROM Account LIMIT 5" --result-format csv
```

### Query Optimization
Techniques for optimizing query performance:

```bash
# Use selective filters
sf data:soql:query -q "SELECT Id, Name FROM Account WHERE CreatedDate > LAST_MONTH"

# Limit the number of records
sf data:soql:query -q "SELECT Id, Name FROM Contact LIMIT 100"

# Use indexed fields
sf data:soql:query -q "SELECT Id, Name FROM Contact WHERE Email = 'test@example.com'"
```

## Best Practices
1. Use selective filters in WHERE clauses to improve performance
2. Limit the number of records returned with LIMIT
3. Use ORDER BY only when necessary
4. Store complex queries in .soql files for reuse
5. Use relationship queries to minimize API calls
6. Be aware of governor limits when querying large datasets
7. Use COUNT() for counting records instead of retrieving all records
8. Use SOSL when searching across multiple objects for text matches

## Further Reading
For more detailed information, refer to the official Salesforce DX documentation on SOQL and SOSL queries.