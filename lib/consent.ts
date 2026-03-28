/**
 * GDPR consent utility
 *
 * Pattern:
 *   1. On first visit, cookie-banner.tsx shows the consent prompt.
 *   2. The user's choice is written to localStorage under "cookie-consent".
 *   3. Before loading any analytics or tracking scripts, call `getConsent()`.
 *      Only proceed if the return value is "accepted".
 *
 * Usage:
 *   import { getConsent } from "@/lib/consent"
 *   if (getConsent() === "accepted") { loadAnalytics() }
 */

export type ConsentStatus = "accepted" | "declined" | null;

/**
 * Reads the user's cookie consent status from localStorage.
 * Returns null if no choice has been recorded yet (e.g. on first visit or SSR).
 */
export function getConsent(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem("cookie-consent");
  if (value === "accepted" || value === "declined") return value;
  return null;
}
