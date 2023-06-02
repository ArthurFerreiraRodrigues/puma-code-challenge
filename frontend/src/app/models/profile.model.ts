export interface Profile {
  username: String;
  name: String | null; // Acording to GitHub API, this field can be null
  avatar: String;
  url: String;
  isStarred: Boolean;
}
