import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import NavBar from './components/NavBar'
import MovieList from 'pages/MovieList'
import MovieDetails from 'pages/MovieDetails'
import NotFound from 'pages/NotFound'
//How does exact work? When react enters switch it goes through the paths 
//and it will know that this path only should render when the path is exacly that. 
export const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/movie/:id" exact>
            <MovieDetails />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect
            to="/404"
          />
        </Switch>
      </BrowserRouter>
    </>
  )
}
