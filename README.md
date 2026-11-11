# Marcus Field Bespoke

Website for **Marcus Field Bespoke**: carpentry, joinery and home improvements across Hertfordshire.

- Phone: 07808 134173
- Email: info@marcusfieldbespoke.co.uk
- Facebook: https://www.facebook.com/profile.php?id=61575347442779

Live site (GitHub Pages): https://pierreburrows.github.io/Marcus-/

## What's in here

| Path | What it is |
|---|---|
| `src/components/data.ts` | All the words, services, projects, reviews and contact details. Edit this to change content. |
| `src/components/*.tsx` | Page sections (hero film, services, before and after projects, gallery, reviews, process, contact). |
| `src/styles.css` | The look: colours from the logo (paper `#FBF7F2`, ink `#151515`) plus sage `#9CAF94` from the hero film. |
| `public/assets/hero/` | Hero film: 720p (phones), 1080p (laptops), 4K (large screens), plus poster and finished frames. |
| `public/assets/work/` | Marcus's project photos (full size) and `thumb/` versions for the grid. |
| `public/assets/og.jpg` | Image shown when the link is shared on WhatsApp, Facebook and so on. |

The hero film (empty room, wardrobe assembles itself, sage paint splashes on and settles into a finished coat) was made with Higgsfield and upscaled to 4K.

## Editing and publishing

Every push to `main` rebuilds and republishes the site automatically (see `.github/workflows/pages.yml`).

To work on it locally:

```bash
npm install
npm run dev
```

## Using marcusfieldbespoke.co.uk

1. In the repo: Settings, Pages, Custom domain: enter `marcusfieldbespoke.co.uk`.
2. At the domain registrar, add the DNS records GitHub shows (four `A` records for the bare domain, a `CNAME` for `www` pointing to `pierreburrows.github.io`).
3. In `.github/workflows/pages.yml` change `SITE_BASE` to `/` and `SITE_ORIGIN` to `https://marcusfieldbespoke.co.uk`, then push.
