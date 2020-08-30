#!/usr/bin/env bash

echo 'Configuring env variables'
export ENVIRONMENT=development SERVICE_VERSION=v1 AWS_PROFILE=mylab DYNAMODB_ENDPOINT_OVERRIDE=http://localhost:8000

echo 'Starting serverless offline'

npm run offline

echo 'Done'
