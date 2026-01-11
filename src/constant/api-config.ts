/**
 * ⚙️ CENTRAL API CONFIGURATION
 * 
 * Thay đổi domain API tại đây - CHỈ 1 CHỖ DUY NHẤT!
 * Change API domain here - ONLY ONE PLACE!
 */
export const API_BASE_URL = "https://apisporttest.vbonews.com";

/**
 * Extract hostname from URL for Next.js config
 */
export const API_HOSTNAME = new URL(API_BASE_URL).hostname;
