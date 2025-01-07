import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface MoviesContextType {
  topRatedMovies: MoviesData[];
}
interface MoviesProviderProps {
  children: ReactNode;
}

interface MoviesData {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined);

const KEY = import.meta.env.VITE_API_KEY;

const TOP_RATED_URL = `${import.meta.env.VITE_API}top_rated?${KEY}`;

function MoviesProvider({ children }: MoviesProviderProps) {
  const [topRatedUrl, setTopRatedUrl] = useState(TOP_RATED_URL);
  const [topRatedMovies, setTopRatedMovies] = useState<MoviesData[]>([]);

  useEffect(() => {
    async function fetchTopRatedMovies() {
      const res = await fetch(topRatedUrl);
      const data = await res.json();
      setTopRatedMovies(data.results);
    }
    fetchTopRatedMovies();
  }, [topRatedUrl]);

  return (
    <MoviesContext.Provider value={{ topRatedMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

function useMovies(): MoviesContextType {
  const context = useContext(MoviesContext);

  if (!context)
    throw new Error("MoviesContext was used outside the MoviesProvider");

  return context;
}

export { MoviesProvider, useMovies };
