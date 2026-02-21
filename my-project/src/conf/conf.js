const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;    

// production grade practice to get all var in strings
// .env must be in root directory

/*
Environment variables are:
--> Configuration values stored outside your code.
They allow your app to behave differently depending on environment.

1) Keep Sensitive Data Out of Code
2) Different Config for Different Environments
3) Makes Your App Deployable
*/