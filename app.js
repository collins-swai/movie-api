const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/movies', async (req, res) => {
  try {
    const TMDB_API_KEY = '3a3f278fc0959ee8270178d8422df018'; // Replace with your TMDb API key

    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: TMDB_API_KEY,
      },
    });

    const movies = response.data.results;
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
