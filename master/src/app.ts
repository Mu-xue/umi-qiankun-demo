import { useState } from 'react';

interface State {
  str: string
}

export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState<State>({ str: 'aaa'})

  return {
    globalState,
    setGlobalState,
  };
}
