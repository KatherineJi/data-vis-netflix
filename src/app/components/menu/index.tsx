'use client';

import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Individual View', 'sub1', <SettingOutlined />, [
    getItem('Global Distribution', 'map'),
    getItem('Rating Distribution', 'distribution'),
    getItem('Trend Over Time - line', 'line'),
    getItem('Trend Over Time - stacked', 'stacked'),
    getItem('User Study', 'heatmap'),
  ]),

  { type: 'divider' },
];

const MenuComp = (props: { setCurrent: Function }) => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    props.setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256, position: 'fixed', top: '56px' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default MenuComp;