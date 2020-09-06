# Simple Habit Tracker

![Simple Habit Tracker](docs/images/simple-habit-tracker.png?raw=true)

A basic single page progressive webapp that tracks habits.

Uses a service worker for to enable install on mobile and browser

## Setup

setup a firebase project, and get your firebase config. Save the config variables to your `.env.local` file. The env file should look similar to the following:

```
// replace api_key, url, etc, with their respective values from your firebase project config
REACT_APP_FIREBASE_API_KEY=api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=url
REACT_APP_FIREBASE_DB_URL=url
REACT_APP_FIREBASE_PROJECT_ID=id
REACT_APP_FIREBASE_STORAGE_BUCKET=storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=id
REACT_APP_FIREBASE_APP_ID=id
```

Afterwards, setup firestore collections named `habits` and `users`. Then add the following security rules to firestore:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  	match /users/{userId} {
    	allow read, update, write: if request.auth != null && request.auth.uid == userId;
      allow create: if request.auth != null;
    }
    match /habits/{habitId} {
    	allow read, update, write: if request.auth != null && resource.data.userId == request.auth.uid;
      allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
    }
  }
}
```

Afterwards, run `npm run start` for to run your dev server

## Build

run `PUBLIC_URL=url_where_app_is_hosted npm run build`

This will create your output files in the `build` directory

### Dependencies:

- firebase auth + firestore
- react (create-react-app)
- redux

## License

This project is licensed under the terms of the MIT license
