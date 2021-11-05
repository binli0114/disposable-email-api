# disposable-email

## Setup

```bash
npm install
export ENVIRONMENT=dev
export SERVICE_VERSION=1
serverless dynamodb install --region us-east-1
```

## Start Offline

```bash
export DYNAMODB_ENDPOINT_OVERRIDE=http://localhost:8000
export ENVIRONMENT=dev
export SERVICE_VERSION=1
npm run offline
```
