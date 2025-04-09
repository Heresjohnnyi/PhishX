package api

import (
	"encoding/json"
	"net/http"
	"github.com/Heresjohnnyi/PhishX/backend/phishing"  // Update this path
)

// SetupRoutes initializes the API endpoints
func SetupRoutes() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/detect", detectPhishing)
	return mux
}

func detectPhishing(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
		return
	}

	var request struct {
		URL string `json:"url"`
	}

	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	isPhishing := phishing.Detect(request.URL)

	response := map[string]interface{}{
		"url":        request.URL,
		"isPhishing": isPhishing,
	}
	json.NewEncoder(w).Encode(response)
}
