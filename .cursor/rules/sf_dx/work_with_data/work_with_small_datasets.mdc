---
description: How to work with small datasets in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to work with small datasets in Salesforce DX
globs: 
alwaysApply: false
---
# Work With Small Datasets

## Overview
This rule covers the techniques and commands for working with small datasets in Salesforce DX, including how to create, retrieve, update, and delete records efficiently when dealing with limited data volumes.

## Key Concepts
- Small dataset operations in Salesforce DX
- Data:tree commands for working with sample data
- Importing and exporting small datasets
- Managing records through the Salesforce CLI

## Detailed Sections
### Using data:tree Commands
The `data:tree` commands help you work with small to medium sized datasets using JSON files:

- `sf data:tree:export` - Export data from your org to JSON files
- `sf data:tree:import` - Import data from JSON files into your org

### Sample Data Format
Data is stored in a specific JSON format that preserves record relationships:

```json
{
    "records": [
        {
            "attributes": {
                "type": "Account",
                "referenceId": "AccountRef1"
            },
            "Name": "Sample Account",
            "Industry": "Technology",
            "Contacts": {
                "records": [
                    {
                        "attributes": {
                            "type": "Contact",
                            "referenceId": "ContactRef1"
                        },
                        "FirstName": "John",
                        "LastName": "Doe",
                        "Email": "john.doe@example.com"
                    }
                ]
            }
        }
    ]
}
```

### Exporting Data
To export data from your org to a JSON file:

```bash
sf data:tree:export -q "SELECT Name, Industry, (SELECT FirstName, LastName, Email FROM Contacts) FROM Account LIMIT 10" -d ./data
```

### Importing Data
To import data from a JSON file into your org:

```bash
sf data:tree:import -f ./data/Account.json -u your-org-alias
```

## Best Practices
1. Use data:tree commands for datasets with less than 200 records
2. Maintain data files in a dedicated directory in your project
3. Include sample data files in your version control system for consistent development environments
4. Use meaningful reference IDs to make relationships clear
5. Export representative subsets of data for testing purposes

## Further Reading
For more detailed information, refer to the official Salesforce DX documentation on working with data.