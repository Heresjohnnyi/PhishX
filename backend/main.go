package main

import (
	"fmt"
	"log"
	"net/http"
	"phishx/api"
	"phishx/db"
)

func main() {
	// Connect to the database
	err := db.Connect()
	if err != nil {
		log.Fatalf("Database connection failed: %v", err)
	}
	defer db.Close()

	// Setup API routes
	router := api.SetupRoutes()

	// Start the server
	fmt.Println("🚀 Server is running on port 8080...")
	log.Fatal(http.ListenAndServe(":8080", router))
}
