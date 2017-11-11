import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Home from './routes/Home';
import Holiday from './routes/Holiday';
import Sell from './routes/Sell';
import Goods from './routes/Goods';


export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/products" component={Products} />
      <Route path="/home" component={Home} />
      <Route path="/holiday" component={Holiday} />
      <Route path="/sell" component={Sell} />
      <Route path="/goods" component={Goods} />

    </Router>
  );
};
