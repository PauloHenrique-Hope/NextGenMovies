import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface SeriesContextType {
  popularSeries: SeriesData[];
}

interface SeriesData {
  id: number;
  origin_country: ["KR"];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
}

const KEY = import.meta.env.VITE_API_KEY;
const POPULAR_SERIES_URL = `${import.meta.env.VITE_POPULAR}${KEY}`;

const SeriesContext = createContext<SeriesContextType | undefined>(undefined);

interface SeriesProviderProps {
  children: ReactNode;
}

function SeriesProvider({ children }: SeriesProviderProps) {
  const [popularSeriesUrl, setPopularSeriesUrl] = useState(POPULAR_SERIES_URL);
  const [popularSeries, setPopularSeries] = useState<SeriesData[]>([]);

  useEffect(() => {
    async function fetchPopularSeries() {
      const res = await fetch(popularSeriesUrl);
      const data = await res.json();
      setPopularSeries(data.results);
    }
    fetchPopularSeries();
  }, [popularSeriesUrl]);
  return (
    <SeriesContext.Provider value={{ popularSeries }}>
      {children}
    </SeriesContext.Provider>
  );
}

function useSeries() {
  const context = useContext(SeriesContext);
  if (!context)
    throw new Error("MoviesContext was used outside the MoviesProvider");
  return context;
}

export { SeriesProvider, useSeries };
