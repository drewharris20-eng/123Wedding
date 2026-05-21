# 1234 Weddings Website

This is a static site ready for GitHub and Netlify.

## Files

- `index.html`, homepage with SEO, pricing, FAQ, contact form, gallery link, and floating contact popup.
- `thank-you.html`, confirmation page for the Netlify contact form.
- `weddings/sample-couple/index.html`, reusable wedding delivery page template.

## How to create a new wedding delivery page

1. Duplicate the folder:
   `weddings/sample-couple/`

2. Rename the folder, for example:
   `weddings/sarah-jake/`

3. Open that folder's `index.html` and replace:
   - Couple names
   - Wedding date
   - Location
   - Story text
   - Banner image URL
   - Three preview image URLs
   - Google Drive download link

4. Send the client their private URL, for example:
   `https://1234weddings.com/weddings/sarah-jake/`

## Contact info currently used

- Phone: 417-569-9708
- Email: info@dhpixels.com

## Netlify Forms

The homepage form uses Netlify Forms:

```html
<form name="wedding-inquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you.html">
```

Make sure Form Detection is enabled in Netlify.
