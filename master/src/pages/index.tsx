import React from 'react';
import { useModel } from '@@/plugin-model/useModel';

export default () => {
  const { globalState } = useModel('@@qiankunStateForSlave');

  return (
    <>
      <div style={{  fontSize: 60, textAlign: 'center' }}>
        Hello World!
        <br/>
        This is Master App. (Umi3)
      </div>
      <p style={{ textAlign: 'center', color: 'blue' }}>GlobalState: {globalState.str}</p>
    </>
  );
}
