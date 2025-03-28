package phishing

import (
	"strings"
)

// Simple rule-based phishing detection
func Detect(url string) bool {
	phishingKeywords := []string{"login", "verify", "bank", "secure", "account"}

	for _, keyword := range phishingKeywords {
		if strings.Contains(strings.ToLower(url), keyword) {
			return true
		}
	}
	return false
}
