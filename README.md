# 1234 Weddings Google Drive Manual Gallery

This version uses Google Drive for storage and your website for the branded gallery.

No Firebase.
No billing card.
No API key.

## How it works

1. Upload photos to Google Drive.
2. Set the folder or photos to "Anyone with the link, Viewer."
3. Paste the photo links into `galleries/sarah-jake/config.js`.
4. Clients open `https://1234weddings.com/galleries/sarah-jake/`.

## Create a new gallery

Copy:

`galleries/sarah-jake`

Rename it:

`galleries/client-name`

Then update:

`galleries/client-name/config.js`

## Download All

Paste your shared Google Drive folder link into:

`downloadAllUrl`

## Direct Google Drive image format

If a Drive image does not display, use:

`https://drive.google.com/uc?export=view&id=FILE_ID`

For downloads:

`https://drive.google.com/uc?export=download&id=FILE_ID`
