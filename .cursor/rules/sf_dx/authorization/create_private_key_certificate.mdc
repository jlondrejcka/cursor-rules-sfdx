---
description: How to create a private key and self-signed digital certificate for JWT-based authentication
globs: 
alwaysApply: false
---
# Create a Private Key and Self-Signed Digital Certificate

## Overview
JWT-based authentication with Salesforce requires a private key and digital certificate. This rule guides you through the process of creating these security artifacts using OpenSSL.

## Prerequisites
- OpenSSL installed on your system
- Appropriate permissions to create files in your working directory

## Generate Private Key and Certificate

### Basic Command Sequence
```bash
# Step 1: Generate the private key
openssl genrsa -out server.key 2048

# Step 2: Generate a certificate signing request (CSR)
openssl req -new -key server.key -out server.csr

# Step 3: Generate a self-signed certificate
openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
```

### Detailed Steps

#### 1. Generate the Private Key
```bash
openssl genrsa -out server.key 2048
```
This creates a 2048-bit RSA private key and saves it to `server.key`.

#### 2. Generate a Certificate Signing Request
```bash
openssl req -new -key server.key -out server.csr
```
During this step, you'll be prompted for information:
- Country Name (2 letter code)
- State or Province Name
- Locality Name (city)
- Organization Name
- Organizational Unit Name
- Common Name (your name or server FQDN)
- Email Address

You can press Enter to use defaults for non-critical fields.

#### 3. Generate the Self-Signed Certificate
```bash
openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
```
This creates a self-signed certificate valid for 365 days.

## One-Line Command (Non-Interactive)
For automated scenarios, use this non-interactive command:

```bash
openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 \
  -subj "/C=US/ST=State/L=City/O=Organization/CN=example.com" \
  -keyout server.key -out server.crt
```

## Certificate Format Requirements
Salesforce requires:
- RSA keys with 2048 bits or more
- The private key in PEM format (begins with `-----BEGIN RSA PRIVATE KEY-----`)
- The certificate in PEM format (begins with `-----BEGIN CERTIFICATE-----`)

## Using the Certificate

### In Connected App Setup
1. In your Salesforce org, go to Setup > App Manager > New Connected App
2. Check "Enable OAuth Settings"
3. Check "Use digital signatures"
4. Click "Choose File" and upload your `server.crt` file

### For JWT Authentication
The private key file (`server.key`) is used with the JWT authentication command:
```bash
sf org login jwt --username user@example.com --jwt-key-file server.key --client-id your_connected_app_consumer_key
```

## Security Best Practices

1. **Protect Your Private Key**
   - Never share your private key
   - Don't commit it to version control
   - Store it securely in a secrets manager or encrypted storage

2. **Certificate Management**
   - Set a calendar reminder to renew certificates before expiration
   - Keep track of where certificates are used
   - Implement a rotation strategy for keys and certificates

3. **For Production Use**
   - Consider using a properly signed certificate from a Certificate Authority for production
   - Use hardware security modules (HSMs) for critical environments

## Troubleshooting

### Common Issues
1. **Permission Denied**: Ensure you have write permissions in the directory
2. **OpenSSL Not Found**: Install OpenSSL or ensure it's in your PATH
3. **Invalid Key Format**: Ensure the key is in PEM format with proper headers/footers

### Verifying Your Certificate
```bash
# Verify the private key
openssl rsa -check -in server.key

# View certificate information
openssl x509 -text -noout -in server.crt
```

## Further Reading
For more information about certificates and JWT-based authentication, see the [Salesforce DX Developer Guide](mdc:https:/developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm) 