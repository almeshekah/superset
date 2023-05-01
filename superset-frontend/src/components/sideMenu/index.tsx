/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, {  } from 'react';

import { Layout, Menu } from 'antd';

import { UserOutlined, DashboardOutlined, SettingOutlined, InboxOutlined,  } from '@ant-design/icons';

import { useHistory } from 'react-router-dom';

export interface Imenu {
  key: number ;
  titel: string;
  icon : any;
  path:string;
}

export const SideMenu = (props: any) => {

  const menu :Imenu[] = [
    {key:1,titel:"Home", icon:<DashboardOutlined />, path:"/superset/welcome/" },
    {key:2,titel:"Dashboard", icon:<DashboardOutlined />, path:"/dashboard/list/" },
    {key:3,titel:"Users", icon:<UserOutlined />, path:"/Users"},
    {key:4,titel:"Setting", icon:<SettingOutlined />, path:"/Setting"},
    {key:5,titel:"Inbox", icon:<InboxOutlined />, path:"/Setting"},
  ]
  const history = useHistory();

  return (

    <Layout>
      <Layout.Sider>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {menu.map((item) =>
          {
            return(

              <Menu.Item key={item.key} icon={item.icon} onClick={() => history.push(item.path) }>
                {item.titel}
              </Menu.Item>
            )
          })}
        </Menu>
      </Layout.Sider>
      {props.children}
    <Layout>

    </Layout>
  </Layout>
  );
};
