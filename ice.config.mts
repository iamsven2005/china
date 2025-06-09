import { defineConfig } from '@ice/app';
import auth from '@ice/plugin-auth';
import antd from '@ice/plugin-antd';

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;
export default defineConfig(() => ({
  // Set your configs here.
  minify,
  server: {
    onDemand: true,
    format: 'esm',
  },
  plugins: [
   auth(),
   antd({
      importStyle: true,
      theme: {
        // primary-color 为 antd 的 theme token
        'primary-color': '#1DA57A',
      },
    }),
  ],
}));
