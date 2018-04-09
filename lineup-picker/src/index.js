import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';

// import components
import App from './components/App';
import LineupName from './components/LineupName';
import NotFound from './components/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={LineupName} />
        <Match pattern="/lineup/:lineupId" component={App} />
        <Miss component={NotFound} />
      </div>
  </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('main'));