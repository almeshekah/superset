/**
 
 */
import React from 'react';

import withToasts from 'src/components/MessageToasts/withToasts';

import { Layout, Card, Row, Col, Avatar, Progress } from 'antd';
import { UserOutlined, AppstoreOutlined, ShoppingOutlined } from '@ant-design/icons';

function MainPage() {
 


  return (
    <>
     <Layout style={{ minHeight: '100vh' ,width:"100%"}}>
      <Layout.Header className="header" style={{textAlign:"center"}}>
        <h2 style={{ color: 'white' }}>Home</h2>
      </Layout.Header>
      <Layout.Content style={{ padding: '50px' }}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card>
              <Avatar icon={<UserOutlined />} size={64} />
              <div style={{ marginTop: '10px' }}>
                <h3>User Name</h3>
                <p>Role: Admin</p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <AppstoreOutlined style={{ fontSize: '64px' }} />
              <div style={{ marginTop: '10px' }}>
                <h3>Applications</h3>
                <p>Total: 15</p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <ShoppingOutlined style={{ fontSize: '64px' }} />
              <div style={{ marginTop: '10px' }}>
                <h3>Orders</h3>
                <p>Total: 152</p>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3>Storage</h3>
                  <p>Total: 1 GB</p>
                </div>
                <Progress type="circle" percent={50} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={16}>
            <Card>
              <h3>Sales</h3>
              <p>Here's a chart showing sales data over time.</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <h3>Top Products</h3>
              <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
                <li>Product 4</li>
                <li>Product 5</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
    </>
  );
}

export default withToasts(MainPage);
