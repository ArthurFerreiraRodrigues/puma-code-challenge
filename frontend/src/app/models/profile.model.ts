export interface Profile {
  username: string;
  name: string | null; // Acording to GitHub API, this field can be null
  avatar: string;
  url: string;
  isStarred: boolean;
}
