Redirect / clean-URL guide

What I added:
- .htaccess — Apache rewrite rules to redirect .html requests to clean URLs and internally rewrite clean paths to existing .html files.
- _redirects — Netlify rules to redirect .html to clean paths and serve directory index pages.
- nginx-rewrites.conf — Nginx try_files snippet to serve $uri.html when clean paths are requested.

How to use:
- Apache: copy `.htaccess` to your site root (ensure AllowOverride is enabled on the server).
- Netlify: add the `_redirects` file to your publish directory and redeploy.
- Nginx: include `nginx-rewrites.conf` into your server block or add the `try_files` line directly in nginx.conf and reload nginx.

Notes:
- I left both `.html` files and `.../index.html` copies in the repo as backups; choose one approach for your hosting environment (cleanup optional).
- After deploying, test URLs like `https://your-site/online-services-thane` and `https://your-site/online-services-thane.html` — the latter should redirect to the clean one.
