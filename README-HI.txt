GHANSHYAM PRASAD CHOUKARYA VIDYA MANDIR – ADVANCED WEBSITE
========================================================

इस ZIP में आपकी पुरानी वेबसाइट के assets और pages को रखते हुए नया responsive
design, Firebase आधारित Admin Dashboard, Popup Manager, Notices, Events,
Gallery Upload और Admission Enquiry शामिल हैं।

महत्वपूर्ण: ZIP extract करके सीधे index.html खोलने पर Firebase modules काम नहीं
करेंगे। GitHub Pages पर publish करने के बाद ही वेबसाइट चलाएँ।

A. GITHUB पर UPLOAD
-------------------
1. ZIP extract करें।
2. GitHub पर अपनी repository खोलें: gpcvidyamandir/sarkhadi
3. पुरानी files का backup अपने पास रखें।
4. इस ZIP के अंदर की सभी files/folders repository के root में upload करें।
   ध्यान दें: sarkhadi-main नाम का outer folder upload न करें; उसके अंदर की
   files repository root में जाएँ।
5. Commit changes करें।
6. वेबसाइट: https://gpcvidyamandir.github.io/sarkhadi/

B. FIREBASE SETUP – केवल एक बार
-------------------------------
Project: gpc-vidhya-mandir

1. Firebase Console खोलें:
   https://console.firebase.google.com/project/gpc-vidhya-mandir
2. Authentication > Sign-in method > Email/Password enable करें।
3. Authentication > Users > Add user से अपना Admin email/password बनाएँ।
   वेबसाइट पर कोई public Sign Up सुविधा नहीं है।
4. Admin user बनने के बाद उसके UID को copy करें।
5. Firestore Database create करें (Production mode).
6. Firestore > Rules में इस ZIP की firestore.rules file का content paste करें।
   "PASTE_ADMIN_USER_UID_HERE" को अपने Admin UID से बदलें और Publish करें।
7. Storage enable करें। Storage > Rules में storage.rules का content paste करें।
   वहाँ भी वही Admin UID डालें और Publish करें।
8. Firebase Project Settings > General में Web App configuration पहले से
   firebase-config.js में भरी है। यदि Firebase Console में अलग Web App/Config
   दिखे, तो केवल इसी file में config update करें।

C. ADMIN LOGIN
---------------
1. Website खोलें:
   https://gpcvidyamandir.github.io/sarkhadi/admin.html
2. Firebase में बनाया हुआ Admin email/password डालें।
3. Dashboard से:
   - School Profile: Homepage heading और descriptions edit
   - Popup Notice: Popup enable/disable, title, message, button link
   - Notices: Add/Edit/Delete/Publish
   - Events: Add/Edit/Delete/Publish
   - Gallery: Image upload, title, description, publish, delete
   - Admission Enquiries: website से आए enquiry records देखें

D. IMPORTANT SECURITY
--------------------
- Admin password किसी के साथ साझा न करें।
- Firebase Authentication में public user sign-up enable न करें।
- Firestore और Storage Rules में UID placeholder बदलना जरूरी है।
- Firebase API key web config में public identifier होता है; असली सुरक्षा Rules
  और Authentication से आती है।
- Rules configure किए बिना Admin save/upload तथा public admission enquiry
  काम नहीं करेंगे।
- Admission enquiries में बच्चों/अभिभावकों की जानकारी आती है; Admin access
  सुरक्षित रखें और अनावश्यक data साझा न करें।

E. NOTES
--------
- Existing Google Search Console verification meta tag और verification HTML file
  preserve किए गए हैं।
- Existing school logo, founder photos और uploaded local images ZIP में हैं।
- Public pages में Firebase data उपलब्ध न होने पर fallback/static content है।
- Admin dashboard में Events, Notices और Gallery Firestore से manage होते हैं।
- Popup हर browser session में पहली बार दिखता है; user बंद कर दे तो उसी session
  में दोबारा नहीं दिखता।
- Image upload limit 8 MB per image है।
- Firebase Storage/Firestore usage free quotas से ऊपर जाने पर billing लग सकती है।
- यह ZIP एक complete website code package है; Firebase Console की ऊपर दी गई
  one-time security setup को छोड़ा नहीं जा सकता।

F. TROUBLESHOOTING
------------------
- Login fails: Firebase Authentication में Email/Password enable करें और user
  email/password सही रखें।
- Permission denied: UID को दोनों Rules files में डालकर Publish करें।
- Gallery upload fails: Firebase Storage enable करें और Storage Rules publish करें।
- Website updates नहीं दिखें: GitHub commit complete होने के बाद कुछ मिनट प्रतीक्षा
  करें और browser cache refresh करें।
