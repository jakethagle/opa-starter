#!/bin/bash
if [ -z "$1" ]
then
    echo "Specify the customer name. Usage: ./init.sh <customer_name>"
    exit 1
fi

CUSTOMER_NAME=$1
CUSTOMER_ID=$(prism customers:list --columns Id --no-header --filter name="$CUSTOMER_NAME" | xargs)

export REGISTRATION_JWT=$(prism on-prem-resources:registration-jwt -c "$CUSTOMER_ID")

rm -f .env
envsubst < .env.template > .env

docker-compose up --detach