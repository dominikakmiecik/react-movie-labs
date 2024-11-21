import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMoviesPage from './pages/upcomingMoviesPage'
import { Action } from "react-router-dom";
import WatchListPage from './pages/watchListPage'
import TrendingPage from './pages/trendingPage'
import './style/index.css';
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
               
                <MoviesContextProvider>
                    <SiteHeader />
                    <Routes>
                        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
                        <Route path="/reviews/:id" element={<MovieReviewPage />} />
                        <Route path="/movies/:id" element={<MoviePage />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
                        <Route path="/movies/watchlist" element={< WatchListPage />} />
                        <Route path="/movies/trending" element={< TrendingPage />} />
                        
                
                    </Routes>
                </MoviesContextProvider>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);