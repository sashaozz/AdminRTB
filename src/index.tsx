import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as RB from 'react-bootstrap';
import * as OZ from './components/index';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const { Provider } = require('react-redux');
const { Router, browserHistory } = require('react-router');
const { syncHistoryWithStore } = require('react-router-redux');


declare const __TEST__: boolean;

var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  }];
// It's a data format example.
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

if (!__TEST__) {
  ReactDOM.render(
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

    <div className ="content-wrapper">
      <section className ="content-header">
        <h1>
          Page Header
          <small>Optional description</small>
        </h1>
        <ol className ="breadcrumb">
          <li><a href="#"><i className ="fa fa-dashboard"></i> Level</a></li>
          <li className ="active">Here</li>
        </ol>
      </section>
      <section className ="content">
        <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Bordered Table</h3>
            </div>
            <div className="box-body">
              <BootstrapTable data={products} striped={true} hover={true}>
                  <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
                  <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
                  <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
              </BootstrapTable>
              
            </div>
            <div className="box-footer clearfix">
              <ul className="pagination pagination-sm no-margin pull-right">
                <li><a href="#">&laquo;</a></li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">&raquo;</a></li>
              </ul>
            </div>
        </div>
      </section>
    </div>

    <footer className ="main-footer">
      <div className ="pull-right hidden-xs">
        Anything you want
      </div>
      <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
    </footer>
    <OZ.ControlSideBar></OZ.ControlSideBar>    
    <div className ="control-sidebar-bg"></div>
  </div>
  ,    
    document.getElementById('root')
  );
}
