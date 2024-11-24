# Assignment 1 - ReactJS app.

Name: dominika kmiecik 

## Overview.

This repository contains React app showcasing movies app usong TMDB
The app is very simple showing upconing and trending movies, while letting you
add movies to favourites and watchlist. Watchlist has a slight error and it does 
not display the movies however using the console logs we can see that movies are added
into an array as the Watchlist icon is clicked

### Features.

+ upcoming movies
+ DarkMode
+ Trending
+ WatchList
+ Actor/Cast

## API endpoints.

+ Discover list of movies - discover/movie
+ Movie details - movie/:id
+ Movie genres = /genre/movie/list
+ Trending = /trending/movie/week
+ Credits =/movie/:id/credits
+ movie Reviews =/movie/:id/reviews
+ upcoming = /movie/upcoming

## Routing.

+ /movies/upcoming - displays upcoming movies
+ /movies/trending - Trending movies this week
+ /movies/:id - displays deatils for a specific movie
+ /movies/favorites - displays favorite movies added by user
+ /movies/watchlist -displays movies user wants to watch
+ /movies/:id/cast - displays the cast for selected movie

## Independent learning (If relevant).

used webites like this https://betterprogramming.pub/a-complete-guide-to-implementing-dark-mode-in-react-47af893b22eb to create me DarkMode component.
Used TMBI API documenations to understand endpoint for components such as credits.
Tried using chatGBT to help me figure out why Watchlist was not working correctly, However i was unable to fix this issue 