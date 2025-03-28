#!/bin/bash
echo "Backing up PhishX database..."

mkdir -p ../data/backups
docker exec phishx_db pg_dump -U username -d phishx_db > ../data/backups/backup_$(date +%Y%m%d).sql

echo "Backup completed!"
