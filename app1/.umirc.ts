import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index'
    },
  ],
  antd: {
  },
  qiankun: {
    slave: {}
  },
});
