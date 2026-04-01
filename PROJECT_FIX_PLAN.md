# Project Fix Plan - API and Domain References

The goal is to update all API endpoints and domain references to use `scamfreeind.in` instead of `scamfreeindia.com` and `http://127.0.0.1:8000`.

## 1. Domain and API URL Centralization
- Use `process.env.API_URL` and `process.env.NEXT_PUBLIC_API_URL` where possible.
- Update fallbacks where `process.env` is not available.

## 2. Update Domain References
Replace `scamfreeindia.com` with `scamfreeind.in` in the following files:
- `app/layout.tsx` (Metadata and JSON-LD)
- `app/sitemap.ts`
- `app/robots.ts`
- `app/components/Footer.tsx` (Email and copyright)
- `app/blog/[slug]/page.tsx` (Metadata and canonical links)
- `app/privacy-policy/page.tsx`
- `app/terms-and-conditions/page.tsx`
- `app/refund-policy/page.tsx`
- `app/contact/page.tsx`

## 3. Update API Endpoint Fallbacks
Replace `http://127.0.0.1:8000` with `https://scamfreeind.in` in:
- `app/api/report/route.ts`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/components/Awareness.tsx`
- `app/components/BlogCard.tsx`
- `app/sitemap.ts`

## 4. Specific Component Fixes
- **Awareness.tsx**: Remove hardcoded `backendUrl = "http://127.0.0.1:8000"` and use `process.env.NEXT_PUBLIC_API_URL`.
- **Main.tsx**: Ensure form submission is working with the proxy.
