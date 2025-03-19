export interface AlbumResponse {
  albums: Albums;
}

export interface Albums {
  href: string;
  items: AlbumItem[];
  limit: number;
  next: string;
  offset: number;
  previous: unknown;
  total: number;
}

export interface AlbumItem {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls2;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface ExternalUrls2 {
  spotify: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface CategoriesResponse {
  categories: Categories;
}

export interface Categories {
  href: string;
  items: CategoryItem[];
  limit: number;
  next: string;
  offset: number;
  previous: unknown;
  total: number;
}

export interface CategoryItem {
  href: string;
  id: string;
  icons: Icon[];
  name: string;
}

export interface Icon {
  height: number;
  url: string;
  width: number;
}

export interface PlaylistResponse {
  message: string;
  playlists: Playlists;
}

export interface Playlists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: PlaylistItem[];
}

export interface PlaylistItem {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Owner {
  external_urls: ExternalUrls2;
  followers: Followers;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

export interface ExternalUrls2 {
  spotify: string;
}

export interface Followers {
  href: string;
  total: number;
}

export interface Tracks {
  href: string;
  total: number;
}
