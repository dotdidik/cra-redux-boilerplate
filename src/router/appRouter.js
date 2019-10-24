import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../App'
import MainAbout from '../components/container/mainAbout'
const AppRouter = () => (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/about" component={MainAbout}/>
    </Router>
)

export default AppRouter;