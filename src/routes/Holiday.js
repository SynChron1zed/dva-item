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


var Holiday = React.createClass({

  getInitialState: function () {
    return {
      newdata: [],
      newdata5: [],
      newdate:[]

    }
  },

  componentDidMount() {
    
    $.ajax({
      url: './src/lib/json/2015tsconfig.json',
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function (res) {
        this.setState({newdata5: res.data});

      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    $.ajax({
      url: './src/lib/json/tsconfig.json',
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
          <div className={styles.headtext}>历史节日</div>
        </header>
        <div className={styles.holidayone}>
          <Tabs  defaultActiveKey="1" onChange={this.callback}   >
            <TabPane tab="2016年" key="1"  >
              <div className={styles.holidaytree}>
                <span>
                  2016年历史节日销售额排行 (截止至2016.09.13)
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
            <TabPane tab="2015年" key="2">
              <div className={styles.holidaytree}>
                <span>
                  2015年历史节日销售额排行
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
                    this.state.newdata5.map(function (newdata) {
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


export default Holiday;
