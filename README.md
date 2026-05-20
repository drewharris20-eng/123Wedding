# 1234 Weddings Firebase Gallery System

Upload every file from this ZIP into the root of your GitHub repo.

What it adds:
- /admin/ private admin page
- Create client galleries
- Upload photos from the website
- Store photos in Firebase Storage
- Store gallery info in Firestore
- Client page: /gallery/?g=client-slug
- Select photos
- Download selected
- Download all, one by one
- Facebook share
- Copy link

Setup:
1. Create a Firebase project.
2. Add a Web App in Firebase Project Settings.
3. Paste the config values into firebase-config.js.
4. Enable Authentication, Email/Password.
5. Add yourself as a user.
6. Create Firestore Database.
7. Paste firestore.rules into Firestore Rules.
8. Create Firebase Storage.
9. Paste storage.rules into Storage Rules.
10. Upload this ZIP content to GitHub root.

Admin page:
https://1234weddings.com/admin/

Client link example:
https://1234weddings.com/gallery/?g=sarah-jake
