package phishing

import (
	"strings"
)

// Detect checks if the URL appears to be phishing based on keywords
func Detect(url string) bool {
	// List of common phishing indicators in URLs
	phishingIndicators := []string{
		"login", "verify", "update", "secure", "account", "banking",
		"paypal", "signin", "password", "auth", "webscr", "security",
		"confirmation", "validate", "unlock",
	}

	url = strings.ToLower(url)

	// Basic logic: if any suspicious word exists in the URL, return true
	for _, indicator := range phishingIndicators {
		if strings.Contains(url, indicator) {
			return true
		}
	}
	return false
}
