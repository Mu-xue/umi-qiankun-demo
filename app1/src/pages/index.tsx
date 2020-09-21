import React, { useEffect } from 'react';
import { useModel } from 'umi'
import { Button } from 'antd'
import { setModelState } from '@@/plugin-qiankun/qiankunModel';

export default () => {
  const masterProps = useModel('@@qiankunStateFromMaster');

  // useEffect(() => {
  //   masterProps.setState('bbb')
  // }, [])

  return (
    <>
      <div style={{ textAlign: 'center', fontSize: '60px'}}>
        This is an Umi3 App
        <br/>
      </div>
      <p style={{ textAlign: 'center', color: 'blue' }}>GlobalState: {masterProps.globalState?.str}</p>
      <Button
        style={{ left: '50%', transform: 'translateX(-50%)',position: 'relative' }}
        onClick={() => {
          masterProps.setGlobalState({ str: 'bbb' })
        }}
      >Click me to change str to 'bbb'</Button>
    </>
  );
}
