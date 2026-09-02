/**
 * Lightweight dataLayer push helper for Google Tag Manager.
 *
 * Pushes are no-ops until NEXT_PUBLIC_GTM_ID is configured (the GTM snippet in
 * _document.tsx is what actually starts sending data). Calling `track()` before
 * GTM is live simply queues events on window.dataLayer, which is harmless.
 *
 * Event names follow GA4 recommended-event style (snake_case):
 *   resume_download, contact_click, generate_lead, external_link_click,
 *   project_view, cta_click, social_click
 */
type EventParams = Record<string, string | number | boolean | undefined>;

interface DataLayerWindow extends Window {
  dataLayer?: Array<Record<string, unknown>>;
}

export function track(event: string, params: EventParams = {}): void {
  if (typeof window === 'undefined') return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
