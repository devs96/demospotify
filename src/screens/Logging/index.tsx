import { Grid } from "@mui/material";
import { useEffect } from "react";
import { ApiUrls } from "../../utls/apiUrls";

const Logging = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      getToken(code);
    }
  }, []);

  const getToken = async (code: string) => {
    fetch(ApiUrls.getToken, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:5173/logging",
        client_id: "0763bc1225f8455aad6daa870552b623",
        client_secret: "5cd07090cf04411e8d6e692f265cdc17",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("spotify_access_token", data.access_token);
        window.location.href = "/dashboard";
      })
      .catch((error) => console.error("Error getting token:", error));
  };

  return (
    <Grid
      xs={12}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"row"}
      height={"100vh"}
    >
      Logging
    </Grid>
  );
};

export default Logging;
