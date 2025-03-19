export const fetchApi = (url: string) => {
  const result = fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("spotify_access_token")}`,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });

  return result;
};
