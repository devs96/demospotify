const baseUrl = "https://api.spotify.com/v1/browse";

export const ApiUrls = {
  authorize: "https://accounts.spotify.com/authorize",
  getToken: "https://accounts.spotify.com/api/token",
  newReleases: `${baseUrl}/new-releases`,
  categories: `${baseUrl}/categories`,
  playlist: `${baseUrl}/featured-playlists`,
};
