# Salesforce DX Project

This repository contains a Salesforce DX project cursor rules to assist Salesforce Developers in 'vibe-coding' with Salesforce. .

## Prerequisites

1. Install Cursor IDE
   ```
   Download and install Cursor IDE from https://cursor.sh
   ```

## Setup Instructions

1. Open Cursor IDE

2. Clone the repository
   ```
   git clone <repository-url>
   cd <repository-directory>
   ```

3. Authorize an org
   ```
   sf org login web -a DevOrg
   ```

4. Push source to the org
   ```
   sf project deploy start
   ```

## Project Structure

- `/force-app`: Contains the main source code
- `/scripts`: Helper scripts for development
- `/config`: Configuration files

## Development

This project follows the Salesforce DX development model. For more information about Salesforce DX, please visit the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm).
