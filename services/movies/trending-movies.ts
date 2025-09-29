export interface Movie {
    id: number;
    title: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  export interface TrendingMovie {
    searchTerm: string;
    movie_id: number;
    title: string;
    count: number;
    poster_url: string;
  }
  
  const MOVIES: Movie[] = [
    {
      id: 872585,
      title: "Oppenheimer",
      adult: false,
      backdrop_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      genre_ids: [18, 36],
      original_language: "en",
      original_title: "Oppenheimer",
      overview: "A dramatization of the story of J. Robert Oppenheimer.",
      popularity: 500,
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: "2023-07-21",
      video: false,
      vote_average: 8.3,
      vote_count: 10000,
    },
    {
      id: 346698,
      title: "Barbie",
      adult: false,
      backdrop_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      genre_ids: [35, 14],
      original_language: "en",
      original_title: "Barbie",
      overview: "Barbie suffers a crisis that leads her to question her world.",
      popularity: 480,
      poster_path: "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      release_date: "2023-07-21",
      video: false,
      vote_average: 7.3,
      vote_count: 8000,
    },
    {
      id: 693134,
      title: "Dune: Part Two",
      adult: false,
      backdrop_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      genre_ids: [12, 878],
      original_language: "en",
      original_title: "Dune: Part Two",
      overview: "Paul Atreides unites with the Fremen to seek revenge.",
      popularity: 600,
      poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
      release_date: "2024-03-01",
      video: false,
      vote_average: 8.5,
      vote_count: 9000,
    },
    {
      id: 603692,
      title: "John Wick: Chapter 4",
      adult: false,
      backdrop_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      genre_ids: [28, 53],
      original_language: "en",
      original_title: "John Wick: Chapter 4",
      overview: "John Wick uncovers a path to defeating The High Table.",
      popularity: 520,
      poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      release_date: "2023-03-24",
      video: false,
      vote_average: 8.0,
      vote_count: 7000,
    },
    {
      id: 569094,
      title: "Spider-Man: Across the Spider-Verse",
      adult: false,
      backdrop_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      genre_ids: [16, 28, 12],
      original_language: "en",
      original_title: "Spider-Man: Across the Spider-Verse",
      overview: "Miles Morales returns for an epic adventure across universes.",
      popularity: 700,
      poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      release_date: "2023-06-02",
      video: false,
      vote_average: 8.7,
      vote_count: 9500,
    },
  ];
  
  // --- In-memory trending storage ---
  let trendingStore: TrendingMovie[] = [];
  
  const randInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  
  // --- Update search count (offline, local memory) ---
  export const updateSearchCount = async (
    query: string,
    movie: Movie
  ): Promise<void> => {
    const searchTerm = query.toLowerCase();
  
    const existing = trendingStore.find((m) => m.searchTerm === searchTerm);
  
    if (existing) {
      existing.count += 1;
    } else {
      trendingStore.push({
        searchTerm,
        movie_id: movie.id,
        title: movie.title,
        count: 1,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  };
  
  // --- Get trending movies (randomized order + random boost to counts) ---
  export const getTrendingMovies = async (): Promise<TrendingMovie[]> => {
    if (trendingStore.length === 0) {
      trendingStore = MOVIES.slice(0, 5).map((m) => ({
        searchTerm: m.title.toLowerCase(),
        movie_id: m.id,
        title: m.title,
        count: randInt(10, 100),
        poster_url: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
      }));
    }
  
    const shuffled = [...trendingStore].sort(() => 0.5 - Math.random());
  
    shuffled.forEach((m) => {
      m.count += randInt(0, 3);
    });
  
    return shuffled.slice(0, 5);
  };
  