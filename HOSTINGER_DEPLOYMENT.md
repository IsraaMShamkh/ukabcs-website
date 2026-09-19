# Hostinger deployment

1. Run `npm.cmd run build` locally.
2. Upload the **contents of `dist/`**, not the project source, to the domain's `public_html/` directory.
3. Confirm that `public_html/index.html` exists directly at the root.
4. Keep the generated `public_html/.htaccess` beside `index.html`.

The site is Astro static output, so Hostinger does not need Node.js to serve the published files. Node.js is only needed if the build is run on the server.

After upload, verify `/`, `/about-us/`, `/news/`, and one dynamic content route. A successful local build is not, by itself, proof that the Hostinger deployment is live.
