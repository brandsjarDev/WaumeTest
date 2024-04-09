// utils/appwrite.js
import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT); // Replace with your project ID

export const account = new Account(client);
export { ID } from "appwrite";
