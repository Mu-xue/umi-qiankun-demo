// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/yongxuexie/Downloads/umi-qiankun-demo/app1/src/app.ts';
import * as Plugin_1 from '../plugin-initial-state/runtime';
import * as Plugin_2 from '../plugin-model/runtime';
import * as Plugin_3 from '@@/plugin-qiankun/slaveRuntimePlugin';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/yongxuexie/Downloads/umi-qiankun-demo/app1/src/app.ts',
  });
  plugin.register({
    apply: Plugin_1,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_2,
    path: '../plugin-model/runtime',
  });
  plugin.register({
    apply: Plugin_3,
    path: '@@/plugin-qiankun/slaveRuntimePlugin',
  });
