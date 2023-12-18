import axios from 'axios';

async function getImages(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const res = await axios(BASE_URL, {
    params: {
      key: '40322216-0d90a52029518ef49ac0ad8b9',
      orientation: 'horizontal',
      per_page: 12,
      image_type: 'photo',
      q: query,
      page: page,
    },
  });
  return res.data;
}

export default getImages;
