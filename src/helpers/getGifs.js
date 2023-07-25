export const getGifs = async (category) => {
    const apiKey = "FAa5OLN2Tq8wRVxDNEOTjA8vw2bC2XZ6";

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=25&offset=0&lang=es`;

    const resp = await fetch(url)
        .then((response) => response.json())
        .then(({ data }) => data);

    const gifs = resp.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }));

    console.log(gifs);
    return gifs;
};
