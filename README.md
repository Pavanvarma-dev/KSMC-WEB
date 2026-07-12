# KSMCM Industries — Static React Website

A static React + Vite + Tailwind CSS site, ready to build and deploy to S3 + CloudFront.

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```
This outputs static files to the `dist/` folder — this is what you deploy to S3.

## Deploy to S3
```bash
aws s3 sync ./dist s3://your-unique-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Notes
- All photos from the original design (drone shot, family photo, delivery truck, phone screenshots, QR code) are placeholder gradient blocks — swap them for real images in the relevant components under `src/components/`.
- Icons use `lucide-react`.
- Colors and fonts are defined in `tailwind.config.js` and `src/index.css`.
- Update the CTA links, phone number, email, and social links in `Footer.jsx` and `DownloadSection.jsx` with your real details.
