/**
 * Google Tag Manager container ID.
 *
 * Set NEXT_PUBLIC_GTM_ID in the environment (Vercel project settings or a local
 * .env.local file) to enable GTM. While it is empty the GTM snippet is not
 * rendered and no tracking runs, so this file is safe to ship as-is.
 *
 * Example: NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
 */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? '';
