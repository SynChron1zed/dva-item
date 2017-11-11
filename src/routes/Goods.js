/**
 * Created by Administrator on 2016/10/12.
 */
import React ,{map}from 'react';
import 'fetch';
import $ from 'jquery';
import { Table, Popconfirm, Button,Icon,Row, Col,Tabs } from 'antd';
import { Router, Route, IndexRoute, Link,browserHistory } from 'dva/router';
import styles from './Goods.less';
const TabPane = Tabs.TabPane;
var Goods = React.createClass({

  getInitialState: function () {
    return {
      newdata: [],
      newlatedata: [],
      newlatedatabad:[],
      newdatabad: [],
      operations:[<div key="1" className={styles.heardtabs}>2016.09.01-2016.09.13</div>]

    }
  },

  componentDidMount() {


    $.ajax({
      url: './src/lib/json/goodslatemonth.json',
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function (res) {
        this.setState({newlatedata: res.data});

      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    $.ajax({
      url: './src/lib/json/goodslatemonthbad.json',
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function (res) {
        this.setState({newlatedatabad: res.data});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });

    $.ajax({
      url: './src/lib/json/goodsmonth.json',
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

    $.ajax({
      url: './src/lib/json/goodsmonthbad.json',
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: function (res) {
        this.setState({newdatabad: res.data});

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
    if(key==1){
      this.setState({operations: <div key="1" className={styles.heardtabs}>2016.09.01-2016.09.13</div>});
    }else{
      this.setState({operations: <div key="2" className={styles.heardtabs}>2016.08.01-2016.08.31</div>});
    }

  },

  render: function(newdata) {

    return (
      <div className={styles.headone}>
        <header className={styles.head}>
          <Icon type="left" className={styles.leftGo} onClick={this.goback}/>
          <div className={styles.headtext}>产品分析</div>
        </header>
        <div className={styles.holidayone}>
          <Tabs defaultActiveKey="1"  onChange={this.callback} tabBarExtraContent={this.state.operations} >
            <TabPane tab="本月" key="1"  >
              <div className={styles.holidaytree}>
                <div>
                  <img src="./src/lib/image/goods01.png" className={styles.goodshot}/>
                   <span className={styles.goodshot1}>
                  人气热销榜
                   </span>
                </div>

              </div>
              <form>
                <Row className={styles.holidaytop}>
                  <Col span={4}>排名</Col>
                  <Col span={5}>我的产品</Col>
                  <Col span={5}>销售额(元)</Col>
                  <Col span={5} className={styles.goodsbuyone}><span className={styles.goodsbuy}>贡献率</span><span>销售额</span></Col>
                  <Col span={5}>较上月同期</Col>
                </Row>
                <div >
                  {
                    this.state.newdata.map(function (newdata) {
                      return(
                        <ol className={styles.goodsholidaytop} key={newdata.top}>
                          <Row>
                            <Col span={4}>{newdata.top}</Col>
                            <Col span={5}>{newdata.name}</Col>
                            <Col span={5}>{newdata.date}</Col>
                            <Col span={5}>{newdata.number}</Col>
                            <Col span={5}>{newdata.add}</Col>
                          </Row>
                        </ol>
                      )
                    })
                  }
                </div>
              </form>
              <div className={styles.goodstree}>
                <div>
                  <img src="./src/lib/image/bad01.png" className={styles.goodshot2}/>
                   <span className={styles.goodshot1}>
                  打酱油榜
                   </span>
                </div>

              </div>
              <form>
                <Row className={styles.holidaytop}>
                  <Col span={4}>排名</Col>
                  <Col span={5}>我的产品</Col>
                  <Col span={5}>销售额(元)</Col>
                  <Col span={5} className={styles.goodsbuyone}><span className={styles.goodsbuy}>贡献率</span><span>销售额</span></Col>
                  <Col span={5}>较上月同期</Col>
                </Row>
                <div >
                  {
                    this.state.newdatabad.map(function (newdata) {
                      return(
                        <ol  className={styles.goodsholidaytop} key={newdata.top}>
                          <Row>
                            <Col span={4}>{newdata.top}</Col>
                            <Col span={5}>{newdata.name}</Col>
                            <Col span={5}>{newdata.date}</Col>
                            <Col span={5}>{newdata.number}</Col>
                            <Col span={5}>{newdata.add}</Col>
                          </Row>
                        </ol>
                      )
                    })
                  }
                </div>
              </form>

            </TabPane>
            <TabPane tab="上月" key="2">
              <div className={styles.holidaytree}>
                <div>
                  <img src="./src/lib/image/goods01.png" className={styles.goodshot}/>
                   <span className={styles.goodshot1}>
                  人气热销榜
                   </span>
                </div>

              </div>
              <form>
                <Row className={styles.holidaytop}>
                  <Col span={4}>排名</Col>
                  <Col span={5}>我的产品</Col>
                  <Col span={5}>销售额(元)</Col>
                  <Col span={5} className={styles.goodsbuyone}><span className={styles.goodsbuy}>贡献率</span><span>销售额</span></Col>
                  <Col span={5}>较上月同期</Col>
                </Row>
                <div >
                  {
                    this.state.newlatedata.map(function (newdata) {
                      return(
                        <ol  className={styles.goodsholidaytop} key={newdata.top}>
                          <Row>
                            <Col span={4}>{newdata.top}</Col>
                            <Col span={5}>{newdata.name}</Col>
                            <Col span={5}>{newdata.date}</Col>
                            <Col span={5}>{newdata.number}</Col>
                            <Col span={5}>{newdata.add}</Col>
                          </Row>
                        </ol>
                      )
                    })
                  }
                </div>
              </form>
              <div className={styles.goodstree}>
                <div>
                  <img src="./src/lib/image/bad01.png" className={styles.goodshot2}/>
                   <span className={styles.goodshot1}>
                  打酱油榜
                   </span>
                </div>

              </div>
              <form>
                <Row className={styles.holidaytop}>
                  <Col span={4}>排名</Col>
                  <Col span={5}>我的产品</Col>
                  <Col span={5}>销售额(元)</Col>
                  <Col span={5} className={styles.goodsbuyone}><span className={styles.goodsbuy}>贡献率</span><span>销售额</span></Col>
                  <Col span={5}>较上月同期</Col>
                </Row>
                <div >
                  {
                    this.state.newlatedatabad.map(function (newdata) {
                      return(
                        <ol  className={styles.goodsholidaytop} key={newdata.top}>
                          <Row>
                            <Col span={4}>{newdata.top}</Col>
                            <Col span={5}>{newdata.name}</Col>
                            <Col span={5}>{newdata.date}</Col>
                            <Col span={5}>{newdata.number}</Col>
                            <Col span={5}>{newdata.add}</Col>
                          </Row>
                        </ol>
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


export default Goods;
