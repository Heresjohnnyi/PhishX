package db

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/snowflakedb/gosnowflake"
)

var DB *sql.DB

func Connect() error {
	dsn := os.Getenv("SNOWFLAKE_DSN")
	db, err := sql.Open("snowflake", dsn)
	if err != nil {
		return err
	}
	DB = db
	fmt.Println("✅ Connected to Snowflake!")
	return nil
}

func Close() {
	if DB != nil {
		DB.Close()
		fmt.Println("🔌 Disconnected from Snowflake")
	}
}
