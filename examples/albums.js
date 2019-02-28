import { searchAlbums } from '../src/index';

global.fetch = require('node-fetch');

const albums = searchAlbums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)))
  .catch(err => console.log(err));
