#!/bin/bash
if [ -z "$1" ]
then
    echo "Specify the customer name. Usage: ./init.sh <customer_name>"
    exit 1
fi
CUSTOMER_NAME=$1
CUSTOMER_ID=$(prism customers:list --columns Id --no-header --filter name="$CUSTOMER_NAME" | xargs)

export REGISTRATION_JWT=$(prism on-prem-resources:registration-jwt -c "$CUSTOMER_ID")
echo 'Registration JWT: ' $REGISTRATION_JWT
rm -f .env
envsubst < .env.template > .env
# prism on-prem-resources:list --columns Id --output json | jq '.[0].id' | xargs prism on-prem-resources:delete

# docker-compose up --detach