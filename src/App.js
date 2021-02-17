import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

import './App.css';
import Home from './pages/Home/Home';
import NewDeck from './pages/NewDeck/NewDeck';
import DeckDetails from './pages/DeckDetails/DeckDetails';
import NotFound from './pages/NotFound/NotFound';
import DeckCard from './components/Decks/DeckCard';
import Header from './components/Header/Header';
import DeckEdit from './pages/DeckEdit/DeckEdit';

const App = () => (
  <BrowserRouter>
    <AppProvider>
      {/* <BrowserRouter> */}
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-deck" component={NewDeck} />
        <Route
          exact
          path="/deck-detail/:id"
          render={(deck) => <DeckDetails deck={deck} />}
        />
        <Route
          exact
          path="/deck-edit/:id"
          component={NewDeck}
          // render={(deck) => <NewDeck deck={deck} />}
        />
        <Route path="/" component={NotFound} />
      </Switch>
      {/* </BrowserRouter> */}
    </AppProvider>
  </BrowserRouter>
);

export default App;
