##!/bin/sh

#echo "[sa-gatim] Running migration for ${PLANETSCALE_DATABASE}...";
#/usr/bin/pscale connect "${PLANETSCALE_DATABASE}" "${PLANETSCALE_BRANCH}" --port "${PLANETSCALE_DATABASE_PORT}" --org "${PLANETSCALE_ORG}"  --service-token "${PLANETSCALE_SERVICE_TOKEN_VALUE}"  --service-token-id "${PLANETSCALE_SERVICE_TOKEN_ID}" --execute 'npm run migration:up'

#echo "[sa-gatim] Connecting to ${PLANETSCALE_DATABASE}..."
#/usr/bin/pscale connect "${PLANETSCALE_DATABASE}" "${PLANETSCALE_BRANCH}" --port "${PLANETSCALE_DATABASE_PORT}" --org "${PLANETSCALE_ORG}"  --service-token "${PLANETSCALE_SERVICE_TOKEN_VALUE}"  --service-token-id "${PLANETSCALE_SERVICE_TOKEN_ID}" --execute 'node --max-old-space-size=4096 dist/src/main.js'

