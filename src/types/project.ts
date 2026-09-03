/**
 * Strict TypeScript Interface for Project Entity
 * Matches Firebase Firestore Database Schema
 */
export interface Project {
  id?: string;
  title: string;
  desc: string;
  category: string;
  image: string; // Base64 compressed string or URL
  live: string;  // Live deployment URL
  code: string;  // GitHub or repository URL
  date: string;  // ISO string or YYYY-MM-DD
  tech: string[]; // Array of technology badge names
}
