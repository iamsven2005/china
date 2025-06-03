import { defineConfig } from '@ice/app';
import miniapp from '@ice/plugin-miniapp';

// The project config, see https://v3.ice.work/docs/guide/basic/config
export default defineConfig(() => ({
  plugins: [
    miniapp(),
  ],
  mock: {
    // 忽略 mock 目录中 custom 目录下的文件以及 api.ts 文件
    exclude: ["custom/**", "api.ts"]
  },
}));
