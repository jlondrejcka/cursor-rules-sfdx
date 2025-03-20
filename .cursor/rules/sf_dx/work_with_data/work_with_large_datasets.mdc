---
description: How to work with large datasets in Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to work with large datasets in Salesforce DX
globs: 
alwaysApply: false
---
# Work With Large Datasets

## Overview
This rule covers techniques and commands for efficiently working with large volumes of data in Salesforce DX, including bulk data operations, ETL processes, and performance optimization strategies.

## Key Concepts
- Bulk data operations in Salesforce DX
- Data:bulk commands for large dataset manipulation
- CSV file processing
- Performance considerations for large data volumes

## Detailed Sections
### Using data:bulk Commands
The `data:bulk` commands are specifically designed for working with large datasets:

- `sf data:bulk:delete` - Delete records in bulk
- `sf data:bulk:upsert` - Insert or update records in bulk
- `sf data:bulk:status` - Check the status of bulk data jobs

### Preparing CSV Files
For bulk operations, data should be prepared in CSV format:

```csv
Id,Name,Industry,AnnualRevenue
,Acme Corporation,Manufacturing,10000000
,Universal Containers,Technology,5000000
,Robotics Inc,Technology,7500000
```

### Bulk Upsert Operations
To upsert records from a CSV file:

```bash
sf data:bulk:upsert -i Id -f ./data/accounts.csv -s Account -w 5
```

### Bulk Delete Operations
To delete records based on a CSV file containing IDs:

```bash
sf data:bulk:delete -f ./data/account_ids.csv -s Account -w 5
```

### Monitoring Bulk Jobs
To check the status of a bulk job:

```bash
sf data:bulk:status -i 750xx000000005sAAA
```

## Best Practices
1. Use data:bulk commands for datasets with more than 200 records
2. Split very large datasets into multiple files of 5,000-10,000 records each
3. Include an external ID field for efficient upsert operations
4. Monitor system performance during bulk operations
5. Schedule bulk operations during off-peak hours
6. Validate data quality before performing bulk operations
7. Use the wait (-w) parameter to monitor job completion

## Further Reading
For more detailed information, refer to the official Salesforce DX documentation on bulk data operations.