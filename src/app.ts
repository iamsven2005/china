import { defineAppConfig } from 'ice';
import { defineAuthConfig } from '@ice/plugin-auth/types';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({}));

export const authConfig = defineAuthConfig(async () => {
  // 模拟请求权限数据
  // const data = (await fetch('/api/auth')).json();
  return {
    initialAuth: {
      admin: true,
      guest: false,
    },
  };
});