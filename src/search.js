import { API_URL, HEADERS } from './config';
// import { toJSON } from './util';

/* eslint-disable no-undef */
export const search = (query, type) =>
  fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
    .then(data => data.json());

export const searchAlbums = query =>
  search(query, 'album');

export const searchArtists = query =>
  search(query, 'artist');

export const searchTracks = query =>
  search(query, 'tracks');

export const searchPlaylists = query =>
  search(query, 'playlists');
