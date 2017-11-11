/**
 * Created by Administrator on 2016/10/10.
 */
import React from 'react';
import { Table, Popconfirm, Button,Icon,Row, Col } from 'antd';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import styles from './Home.less';

var Home = React.createClass({

  
  render: function() {
    return (
      <div className={styles.headone}>
        <header className={styles.head}>
          <div className={styles.headtext}>i 运营</div>
        </header>
          <div className={styles.shopone}>
            <div className={styles.shoptwo}><span>门店品牌</span></div>
            <div className={styles.shoptree}><span>2016.10.11</span></div>
          </div>
        <div className={styles.shop}>
          <div className={styles.semantic}>
            <div className={styles.shoping}>
              <span>昨日总销售额 (元)</span>
            </div>
            <div className={styles.shopingnumber}>
              <span>35,000</span>
            </div>
            <div className={styles.shopingadd}>
              <span>较上周同期 ：<span>+15%</span></span>
            </div>
            <div className={styles.shopingtotal}>
              <span>本月总销售额 (元) ：<span>685000</span> 较上月同期：<span>+10%</span></span>
            </div>
            <div className={styles.semanticone}>
              <Icon type="right" className={styles.semantictwo}/>
            </div>
          </div>
        </div>

          <div className={styles.monitorOne}>
            <div><img src="../src/lib/image/1_03.png" className={styles.monitorImage}/></div>
            <div className={styles.shopstore}>
              <span>
                店家，i运营动态监测提示：
              </span>
              <br/>
              <span>
                您的本周营收：6家低于、3家高于上周同期
              </span>
            </div>
            <Icon type="right" className={styles.monitor}/>
          </div>

        <div className={styles.homeList}>
          <div className={styles.homeListone}>
            <Row className={styles.iday}>
              <Col span={8} className={styles.histday}>
                <div>
                  <Link to="/holiday">
                  <img src="../src/lib/image/day_04.png" className={styles.histdayImg}/>
                  <p>历史节日</p>
                    </Link>

                </div>
              </Col>
              <Col span={8} className={styles.histday}>
                <div>
                  <Link to="/monitor">
                <img src="../src/lib/image/dongtai_10.png" className={styles.histdayImg}/>
                <p>动态监测</p>
                  </Link>
              </div>
              </Col>
              <Col span={8} className={styles.histday}>
                <div>
                  <Link to="/sell">
                  <img src="../src/lib/image/xiaoshou.png" className={styles.histdayImg}/>
                  <p>最佳销售</p>
                    </Link>
                </div>
              </Col>
            </Row>
          </div>

          <div className={styles.homeListone}>
            <Row className={styles.iday}>
              <Col span={8} className={styles.histday}>
                <div>
                  <img src="../src/lib/image/keliu.png" className={styles.histdayimg}/>
                  <p>客流分布</p>
                </div>
              </Col>
              <Col span={8} className={styles.histday}>
                <div>
                  <img src="../src/lib/image/pk.png" className={styles.histdayimg}/>
                  <p>天天PK</p>
                </div>
              </Col>
              <Col span={8} className={styles.histday}>
                <div>
                  <Link to="/goods">
                  <img src="../src/lib/image/fenxi.png" className={styles.histdayimg}/>
                  <p>产品分析</p>
                    </Link>
                </div>
              </Col>
            </Row>
          </div>


        </div>

        </div>

    );
  }

});

export default Home;
