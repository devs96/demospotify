import { Button, Grid } from "@mui/material";
import { Colors } from "../../utls/colors";
import { ApiUrls } from "../../utls/apiUrls";

const Login = () => {
  const clientId = "0763bc1225f8455aad6daa870552b623";
  const redirectUrl = "http://localhost:5173/logging";
  const scope = "user-read-private user-read-email";

  const handleLogin = () => {
    const state = Math.random().toString(36).substring(2, 15); // Generate a random state

    const authUrl =
      `${ApiUrls.authorize}?` +
      new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUrl,
        state: state,
      }).toString();

    window.location.href = authUrl; // Redirect the user
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
      <Button
        variant="contained"
        sx={{ backgroundColor: Colors.green }}
        onClick={handleLogin}
      >
        Login with spotify
      </Button>
    </Grid>
  );
};

export default Login;
