# Astro i18n domain routing bug — minimal repro

Dynamic routes on the non-default locale domain return HTTP 500 when using `i18n.domains` in SSR.

Astro issue: https://github.com/withastro/astro/issues/16854

- https://fi.vicecityboats.nurmio.fi — fi (default locale) ✅
- https://en.vicecityboats.nurmio.fi — en (mapped domain) ❌
