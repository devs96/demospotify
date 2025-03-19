import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchApi } from "../../common/apiCall";
import { ApiUrls } from "../../utls/apiUrls";
import EmptyList from "./components/EmptyList";
import MusicRow from "./components/MusicRow";
import RenderMusicDetails from "./components/RenderMusicDetails";
import {
  AlbumItem,
  AlbumResponse,
  CategoriesResponse,
  CategoryItem,
  PlaylistItem,
  PlaylistResponse,
} from "./types";
import { Colors } from "../../utls/colors";

const Dashboard = () => {
  const [albums, setAlbums] = useState<AlbumItem[]>([]);
  const [genres, setGenres] = useState<CategoryItem[]>([]);
  const [playlist, setPlaylist] = useState<PlaylistItem[]>([]);

  useEffect(() => {
    fetchApi(`${ApiUrls.newReleases}?offset=0&limit=20`).then(
      (data: AlbumResponse) => {
        setAlbums(data.albums.items);
      }
    );
  }, []);

  useEffect(() => {
    fetchApi(`${ApiUrls.categories}?offset=0&limit=20`).then(
      (data: CategoriesResponse) => {
        setGenres(data.categories.items);
      }
    );
  }, []);

  useEffect(() => {
    fetchApi(`${ApiUrls.playlist}?offset=0&limit=20&locale=en`).then(
      (data: PlaylistResponse) => {
        setPlaylist(data.playlists.items);
      }
    );
  }, []);

  const RenderAlbums = () => {
    return albums.length ? (
      albums.map((item) => (
        <RenderMusicDetails
          image={item.images[0].url ?? ""}
          title={item.name}
        />
      ))
    ) : (
      <EmptyList />
    );
  };

  const RenderCategories = () => {
    return genres.length ? (
      genres.map((item) => (
        <RenderMusicDetails image={item.icons[0].url} title={item.name} />
      ))
    ) : (
      <EmptyList />
    );
  };

  const RenderPlaylist = () => {
    return playlist.length ? (
      playlist.map((item) => (
        <RenderMusicDetails image={item.images[0].url} title={item.name} />
      ))
    ) : (
      <EmptyList />
    );
  };

  return (
    <Box bgcolor={Colors.darkGrey} py={2}>
      <MusicRow title="New releases">
        <RenderAlbums />
      </MusicRow>

      <MusicRow title="Browse genres">
        <RenderCategories />
      </MusicRow>

      <MusicRow title="Featured playlist">
        <RenderPlaylist />
      </MusicRow>
    </Box>
  );
};

export default Dashboard;
