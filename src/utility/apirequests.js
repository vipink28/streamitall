const API_KEY = '0d8ab7cff2692bd014bb25fca16d7158';

export const requests = {
    getNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US&page=1`,
    getCollection: (platform, endpoint) => `${platform}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getDetails: (requestValues) => `${requestValues.platform}/${requestValues.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
    getGenreList: (platform) => `genre/${platform}/list?api_key=${API_KEY}`,
    getByGenre: (platform, genreId) => `/discover/${platform}?api_key=${API_KEY}&with_genres=${genreId}&language=en-US&page=1`,
    getSearch: (platform, querystring) => `/search/${platform}?api_key=${API_KEY}&query=${querystring}&language=en-US&page=1`
}

export const platformType = {
    tv: "tv",
    movie: "movie"
}

export const endpoints = {
    popular: "popular",
    topRated: "top_rated",
    airingToday: "airing_today",
    onTheAir: "on_the_air",
    upcoming: "upcoming",
    nowPlaying: "now_playing"
}