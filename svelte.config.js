import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import 'dotenv/config';

// https://example.com/hoge/ の /hoge の部分
const basePath = process.env.NODE_ENV === 'production'
  ? process.env.BASE_PATH ?? ''
  : '';
// アセットの絶対パス (https:// 始まり)
const assetsUrl = process.env.NODE_ENV === 'production'
  ? process.env.ASSETS_URL ?? ''
  : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    paths: {
      base: basePath,
      assets: assetsUrl
    }
  }
};

export default config;
