package main

import (
    "fmt"
    "net/http"

    "github.com/Heresjohnnyi/PhishX/backend/api"
    "github.com/Heresjohnnyi/PhishX/backend/db"
)

func main() {
    fmt.Println("Starting server on port 8080...")
    http.ListenAndServe(":8080", api.SetupRoutes())
}
