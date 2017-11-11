/**
 * Created by Administrator on 2016/10/12.
 */
import React ,{map}from 'react';
import 'fetch';
import $ from 'jquery';
import { Table, Popconfirm, Button,Icon,Row, Col,Tabs } from 'antd';
import { Router, Route, IndexRoute, Link,browserHistory } from 'dva/router';
import styles from './Holiday.less';
const TabPane = Tabs.TabPane;

var Sell = React.createClass({

  getInitialState: function () {
    return {
      newdata: [],
      newdaydata: [],
      newdate:[]

    }
  },

  componentDidMount() {
    $.ajax({
      url: './src/lib/json/sellday.json',
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function (res) {
        this.setState({newdaydata: res.data});

      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    $.ajax({
      url: './src/lib/json/sellmonth.json',
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function (res) {
        this.setState({newdata: res.data});

      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },


  goback: function () {
    browserHistory.goBack();
  },

  callback:function(key){
    console.log(key);
  },


  render: function(newdata) {

    return (
      <div className={styles.headone}>
        <header className={styles.head}>
          <Icon type="left" className={styles.leftGo} onClick={this.goback}/>
          <div className={styles.headtext}>最佳销售</div>
        </header>
        <div className={styles.holidayone}>
          <Tabs  defaultActiveKey="1" onChange={this.callback}   >
            <TabPane tab="月新高" key="1"  >
              <div className={styles.holidaytree}>
                <span>
                 所以门店最高销售额记录2015年10月：<span className={styles.selltop}>16000000</span>
                </span>
              </div>
              <form>
                <Row className={styles.holidaytop}>
                  <Col span={6}>排名</Col>
                  <Col span={6}>节日类型</Col>
                  <Col span={6}>日期</Col>
                  <Col span={6}>销售额(元)</Col>
                </Row>

                <div >
                  {
                    this.state.newdata.map(function (newdata) {
                      return(
                        <ul  className={styles.holidaytop2} key={newdata.number}>
                          <Row>
                            <Col span={6}>{newdata.top}</Col>
                            <Col span={6}>{newdata.name}</Col>
                            <Col span={6}>{newdata.date}</Col>
                            <Col span={6}>{newdata.number}</Col>
                          </Row>
                        </ul>
                      )
                    })
                  }
                </div>
              </form>
            </TabPane>
            <TabPane tab="日新高" key="2">
              <div className={styles.holidaytree}>
                <span>
                    所以门店最高销售额记录2015年10月1日：<span className={styles.selltop}>151500</span>
                </span>
              </div>
              <form>
                <Row className={styles.holidaytop}>
                  <Col span={6}>排名</Col>
                  <Col span={6}>节日类型</Col>
                  <Col span={6}>日期</Col>
                  <Col span={6}>销售额(元)</Col>
                </Row>
                <div >
                  {
                    this.state.newdaydata.map(function (newdata) {
                      return(
                        <ul  className={styles.holidaytop2} key={newdata.number}>
                          <Row>
                            <Col span={6}>{newdata.top}</Col>
                            <Col span={6}>{newdata.name}</Col>
                            <Col span={6}>{newdata.date}</Col>
                            <Col span={6}>{newdata.number}</Col>
                          </Row>
                        </ul>
                      )
                    })
                  }
                </div>
              </form>
            </TabPane>
          </Tabs>
        </div>

      </div>
    )
  },



});


export default Sell;
