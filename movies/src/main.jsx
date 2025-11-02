/**
 * @file main.jsx 
 * @description The entry point of the app
 */

//=====================
// 1. Import Statements
//=====================
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TrendingMoviesPage from './pages/trendingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import MoviesPlayingInTheatresPage from './pages/moviesPlayingInTheatresPage';
import MustWatchPage from './pages/mustWatchPage';
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import './index.css';
import ActorsPage from "./pages/actorsPage";
import BottomNavBar from './components/bottomNavBar';

//=======================
// 2. React Query Client
//=======================
/**
 * QueryClient to control caching of queries from TMDB API
 * default options to set default behaviour of each query
 * data remains fresh for 6 mins before being considered stale
 * data is refetched every 6 mins
 * data won't refresh when I leave and return to tab
 * 
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

//=======================
// 3. App Component 
//=======================
/**
 * Main app component that:
 * - Wraps the app in the custom material theme
 * - Provides React Query Client for data fetching and caching
 * - Displays the siteHeader(navigation bar)
 * - Provides MoviesContext to share movie data across components
 * - Defines all routes in the app
 */
const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/trending" element={<TrendingMoviesPage />} />
            <Route path="/movies/topRated" element={<TopRatedMoviesPage />} />
             <Route path="/movies/nowPlayingInTheatres" element={<MoviesPlayingInTheatresPage />} />
            <Route path="/movies/mustWatch" element={<MustWatchPage />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/movies/actors" element={<ActorsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </ThemeProvider>
  );
};
const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
