import React, { useState } from 'react';
import { Button, Menu, Dropdown } from 'antd';
import { IRouteComponentProps, history } from 'umi'
import { useModel } from '@@/plugin-model/useModel';

export default (props: IRouteComponentProps) => {
  const [current, setCurrent] = useState('master')
  const { globalState } = useModel('@@qiankunStateForSlave');

  const handleClick = e => {
    console.log('click ', e);
    setCurrent( e.key );
  };

  const menu = (
    <Menu onClick={handleClick} selectedKeys={[current]}>
      <Menu.Item key="master" onClick={() => {history.push('/')}}>
        Master
      </Menu.Item>
      <Menu.Item key="app1" onClick={() => {history.push('/app1')}}>
        App1
      </Menu.Item>
      <Menu.Item key="disabled" disabled >
        {JSON.stringify(globalState)}
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      {props.children}
      <div style={{  position: 'absolute', top: '50vh', right: '50px', zIndex: 999}}>
        <Dropdown overlay={menu}>
          <Button type="primary" shape="circle"  size='large'>{current[0].toUpperCase()}</Button>
        </Dropdown>
      </div>
    </div>
  );
}
