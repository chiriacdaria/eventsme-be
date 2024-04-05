#!/bin/bash

# In case you wish to run this on machines other than linux, you'll need to
#  - Translate this script to your platform
#  - Use the raw migration generate command and pass the full path to the migration
#     ie: pnpm migration:generate-raw src/core/database/migrations/NewMigrationName
#         npm run migration:generate-raw -- src/core/database/migrations/NewMigrationName
echo $1
pnpm run build && pnpm run typeorm migration:generate -- src/core/database/migrations/"$1"
