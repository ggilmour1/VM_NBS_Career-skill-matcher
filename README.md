# Career Skills Matcher

A small offline-capable web app: people pick up to 5 of 20 skills and see their best and second-best matching job families, each shown with its careers slide (including the QR code).

This is designed purely to be a conversation starter, and to allow young people to see the range of careers available at Virgin Money and Nationwide

Built from "Careers within Virgin Money" (FY25), role slides 2–8.

## Put it on GitHub Pages

1. You can access this directly using the link https://ggilmour1.github.io/VM_NBS_Career-skill-matcher/ 

## Use it offline on an iPad

1. Open the link in **Safari** while online and let the page load fully (this saves everything for offline use).
2. Tap **Share → Add to Home Screen**.
3. Launch it from the home-screen icon — it now works with no Wi-Fi.

## Changing things

- Skills, weights and job details live in `data.js`. Each skill gives 1–3 points to the job families it fits; the two highest totals are shown.
- After changing any file, change `VERSION` in `sw.js` (e.g. `v1` → `v2`) so iPads pick up the update next time they're online.
