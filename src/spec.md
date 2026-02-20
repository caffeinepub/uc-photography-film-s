# Specification

## Summary
**Goal:** Replace the Google Maps iframe with a direct link to the exact location coordinates.

**Planned changes:**
- Remove the existing Google Maps iframe from the Contact component
- Add a clickable link that opens Google Maps at coordinates 25.039202,73.912804 using the URL https://maps.google.com/?q=25.039202,73.912804
- Style the link to match the dark luxury theme (black/gold/white palette)
- Ensure the link opens in a new tab

**User-visible outcome:** Users can click a styled link in the Contact section to open Google Maps at the photographer's exact location instead of viewing an embedded map.
