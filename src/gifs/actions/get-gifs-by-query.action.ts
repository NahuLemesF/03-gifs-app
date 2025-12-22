import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';
import { giphyApi } from '../api/giphy.api';

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  // !Peticion con AXIOS
  const response = await giphyApi<GiphyResponse>('/search', {
    params: {
      q: query,
      limit: 10,
    },
  });

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));

  //  !Peticion con FETCH
  //   fetch(
  //     `https://api.giphy.com/v1/gifs/search?api_key=h2H31S991SBj5GsCYyLDhINreXwysq28&q=${query}&limit=25&lang=es`
  //   );
};
