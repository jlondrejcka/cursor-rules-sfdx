---
description: Create a new Salesforce DX Project
globs: 
alwaysApply: false
---
Create a Salesforce DX Project

A Salesforce DX project has a specific structure and a configuration file that identifies the directory as a Salesforce DX project.

Change to the directory where you want the DX project located.
Create the DX project.

`sf project generate --name MyProject`

If you don’t specify an output directory with the --output-dir flag, the project directory is created in the current location. You can also use the --default-package-dir flag to specify the default package directory to target when syncing source to and from the org. If you don’t indicate a default package directory, this command creates a default package directory, force-app.

Use the --template flag to specify what your project initially looks like. Each template provides a complete directory structure that takes the guesswork out of where to put your source. If you choose --template empty, your project contains these sample configuration files to get you started.

.forceignore
config/project-scratch-def.json
sfdx-project.json
package.json

If you choose --template standard, your project also contains these files that are especially helpful when using Salesforce Extensions for VS Code. If you don’t specify the --template flag, the project generate command uses the standard template.

.gitignore: Makes it easier to start using Git for version control.
.prettierrc and .prettierignore: Make it easier to start using Prettier to format your Aura components.
.vscode/extensions.json: Causes Visual Studio Code, when launched, to prompt you to install the recommended extensions for your project.
.vscode/launch.json: Configures Replay Debugger, making it more discoverable and easier to use.
.vscode/settings.json: By default, this file has one setting for excluding certain files and folders in searches and quick open. You can change this value or add other settings.

If you choose --template analytics, you get all the helpful basic and VS Code files. But the default package directory contains fewer directories, such as for storing Analytics template bundles. /force-app/main/default/waveTemplates) and a few other metadata types, such as Apex classes and LWC components.

Source:
https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_create_new.htm