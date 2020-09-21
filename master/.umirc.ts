import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/index' },
        {
          path: '/app1',
          microApp: 'app1',
        },
        { component: '@/pages/404' }
      ],
    },
  ],
  antd: {
  },
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8001', // html entry
        },
      ]
    },
  },
});
