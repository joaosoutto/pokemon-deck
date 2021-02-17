import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

import './App.css';
import Home from './pages/Home/Home';
import NewDeck from './pages/NewDeck/NewDeck';
import DeckDetails from './pages/DeckDetails/DeckDetails';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import EditDeck from './pages/EditDeck/EditDeck';

const App = () => (
  <BrowserRouter>
    <AppProvider>
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
          render={(deck) => <EditDeck deck={deck} />}
        />
        <Route path="/" component={NotFound} />
      </Switch>
    </AppProvider>
  </BrowserRouter>
);

export default App;
