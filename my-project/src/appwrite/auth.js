/* eslint-disable no-useless-catch */
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    // called only when object is created to avoid wastage of resources
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    // destructuring
    try {
      const userAccount = await this.account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
      if (userAccount) {
        // call another method
        return this.logIn({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async logIn({ email, password }) {
    return await this.account.createEmailSession(email, password);
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite service ::getCurrentUser :: error", error);
    }

    return null;
  }

  async logOut() {
    try {
      return await this.account.deleteSessions('current');
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService(); // export in the form of object to get an access to all methods defined in the object

export default authService;

// all the future changes are incorporated in this file (future proof code), no matter which BAAS app you would use
// Instead of using Appwrite directly inside React components, you wrapped it.
// React components ❌ don’t depend on Appwrite directly
// They depend on your authService
// That’s excellent architecture.
/*
If tomorrow you replace:
Appwrite
with:
Firebase
You only change this file.
our UI stays untouched.
That’s called loose coupling.
*/
