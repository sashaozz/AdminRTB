import 'babel-polyfill';
import * as React from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import * as OZ from './components/index';
import * as Pages from './pages/index';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const { Provider } = require('react-redux');
const { Router, Route, IndexRoute, Link, browserHistory, hashHistory } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');


declare const __TEST__: boolean;
var products = [{
    id: 1,
    name: "Item name 1",
    price: 100
}, {
    id: 2,
    name: "Item name 2",
    price: 100
}];

const App = React.createClass({
    render() {
        return (
            <div>
                <OZ.HeaderBar>
                    <OZ.HeaderRightBar>
                        <OZ.HeaderMessages></OZ.HeaderMessages>
                        <OZ.HeaderTasks></OZ.HeaderTasks>
                        <OZ.HeaderNotifications></OZ.HeaderNotifications>
                        <OZ.HeaderUser></OZ.HeaderUser>
                        <OZ.HeaderSidebarControl></OZ.HeaderSidebarControl>
                    </OZ.HeaderRightBar>
                </OZ.HeaderBar>

                <OZ.MainSideBar></OZ.MainSideBar>

                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Page Header
          <small>Optional description</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
                            <li className="active">Here</li>
                        </ol>
                    </section>
                    {this.props.children}
                </div>

                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        Anything you want
          </div>
                    <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
        </footer>
                <OZ.ControlSideBar></OZ.ControlSideBar>
                <div className="control-sidebar-bg"></div>
                <OZ.PopupManager />
            </div>
        )
    }
})


// It's a data format example.
function priceFormatter(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

if (!__TEST__) {
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Pages.FeatureFlags} />
                <Route path="feature-flags" component={Pages.FeatureFlags} />
                <Route path="data" component={Pages.DataPage} />
                <Route path="monitoring" component={Pages.Monitoring} />
            </Route>
        </Router>
        , document.getElementById('root')
    );
}
