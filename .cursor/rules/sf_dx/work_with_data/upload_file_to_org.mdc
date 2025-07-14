---
description: How to upload a file to your Salesforce org using Salesforce DX
globs: 
alwaysApply: false
---
 ---
description: How to upload a file to your Salesforce org using Salesforce DX
globs: 
alwaysApply: false
---
# Upload a File to Your Org

## Overview
This rule covers the techniques and commands for uploading files to your Salesforce org using Salesforce DX, including how to work with Salesforce Content, attachments, and document storage.

## Key Concepts
- File upload strategies in Salesforce DX
- Content management in Salesforce
- File attachment to records
- Document uploading and management

## Detailed Sections
### Using the data:files Commands
The Salesforce CLI provides commands for working with files in your org:

- `sf data:files:upload` - Upload a file to your org

### Basic File Upload
To upload a file to your Salesforce org:

```bash
sf data:files:upload -f ./path/to/file.pdf -n "Document Title" -d "Document description"
```

### Associating Files with Records
To upload a file and associate it with a specific record:

```bash
sf data:files:upload -f ./path/to/file.pdf -n "Customer Specification" -p 001xx000003GYcZAAW
```

### Setting File Visibility
Control the visibility of your uploaded file:

```bash
# Share with all users
sf data:files:upload -f ./path/to/file.pdf -n "Public Document" --sharingprivate AllUsers

# Keep private
sf data:files:upload -f ./path/to/file.pdf -n "Private Document" --sharingprivate Privately
```

### Bulk File Upload
To upload multiple files, you can use a script:

```bash
#!/bin/bash
for file in ./documents/*.pdf; do
  filename=$(basename "$file")
  sf data:files:upload -f "$file" -n "$filename"
done
```

## Best Practices
1. Use descriptive titles for uploaded files
2. Add detailed descriptions for better searchability
3. Organize files by associating them with relevant records
4. Consider file visibility settings based on security requirements
5. Use standard file formats (PDF, DOCX, XLSX) for maximum compatibility
6. Be aware of file size limits for your org
7. For large files, consider using chunked uploads or external storage options

## Further Reading
For more detailed information, refer to the official Salesforce DX documentation on file management and the Salesforce Content API.