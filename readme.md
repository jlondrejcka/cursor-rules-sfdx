# Salesforce DX Project

This repository contains a Salesforce DX project cursor rules to assist Salesforce Developers in 'vibe-coding' with Salesforce.

Create POCs quickly and efficiently with AI Coding tools that understand the Salesforce CLI and Dev Stack. 

## Prerequisites

1. Install Cursor IDE
   ```
   Download and install Cursor IDE from https://cursor.sh
   ```

## Setup Instructions

1. Open Cursor IDE

2. Clone the repository
   ```
   git clone https://github.com/jlondrejcka/cursor-rules-sfdx.git <my-sf-poc-name>
   cd <my-sf-poc-name>
   ```

3. Authorize a Dev Hub Org
   - Option 1: Ask agent to authorize your Dev Hub Org
   - Option 2: Run CLI command
     ```
     sf org login web -a DevOrg
     ```

4. Create a new project
   - Option 1: Ask agent to create a new project for you
   - Option 2: Run CLI command
     ```
     sf project generate --name MyProject
     ```

5. Create a new scratch org
   - Option 1: Ask agent to create a scratch org for you
   - Option 2: Run CLI command
     ```
     sf org create scratch -f config/project-scratch-def.json -a MyScratchOrg
     ```

6. Explain to the agent the type of app you want to build, and have it assist you in prototyping

7. Push source to the scratch org
   - Option 1: Ask agent to deploy your project to the scratch org
   - Option 2: Run CLI command
     ```
     sf project deploy start
     ```

## Project Structure

- `/force-app`: Contains the main source code
- `/scripts`: Helper scripts for development
- `/config`: Configuration files

## Development

This project follows the Salesforce DX development model. For more information about Salesforce DX, please visit the [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm).
