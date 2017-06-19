import * as React from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import * as RB from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as OZ from './components/index';
import * as Pages from './pages/index';

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
            <Router>
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
                                Page Header <small>Optional description</small>
                            </h1>
                            <ol className="breadcrumb">
                                <li><a href="#"><i className="fa fa-dashboard"></i> Level</a></li>
                                <li className="active">Here</li>
                            </ol>
                        </section>

                        <Route exact path="/index.html" component={Pages.FeatureFlags} />
                        <Route path="/data" component={Pages.DataPage} />
                        <Route path="/feature-flags" component={Pages.FeatureFlags} />
                        <Route path="/monitoring" component={Pages.Monitoring} />
                    </div>



                    <footer className="main-footer">
                        <div className="pull-right hidden-xs">
                            Anything you want
                        </div>
                        <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
                    </footer>
                    <OZ.ControlSideBar></OZ.ControlSideBar>
                    <div className="control-sidebar-bg"></div>
                </div>
            </Router>
        )
    }
})


// It's a data format example.
function priceFormatter(cell, row) {
    return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

if (!__TEST__) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
