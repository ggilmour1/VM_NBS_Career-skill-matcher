# Career Skills Matcher

A small offline-capable web app: people pick up to 5 of 20 skills and see their best and second-best matching job families, each shown with its careers slide (including the QR code).

Built from "Careers within Virgin Money" (FY25), role slides 2–8.

## Put it on GitHub Pages

1. On github.com, click **New repository**, call it e.g. `skills-matcher`, set it to **Public**, and create it.
2. On the new repo page click **uploading an existing file**, drag in *everything in this folder* (keep the `slides` and `icons` folders), and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute your link appears at the top of that page: `https://<your-username>.github.io/skills-matcher/`

## Use it offline on an iPad

1. Open the link in **Safari** while online and let the page load fully (this saves everything for offline use).
2. Tap **Share → Add to Home Screen**.
3. Launch it from the home-screen icon — it now works with no Wi-Fi.

## Changing things

- Skills, weights and job details live in `data.js`. Each skill gives 1–3 points to the job families it fits; the two highest totals are shown.
- After changing any file, change `VERSION` in `sw.js` (e.g. `v1` → `v2`) so iPads pick up the update next time they're online.
