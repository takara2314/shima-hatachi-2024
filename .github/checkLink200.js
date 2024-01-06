import { chromium } from 'playwright';
import url from 'url';

// リンク先のURLを絶対パスに変換する
async function resolveRelativePath(baseUrl, relativePath) {
  return url.resolve(baseUrl, relativePath);
}

// リンク先のURLにアクセスしたとき、 200 OK が返ってくるかをチェックする
async function checkLink200(baseUrl, link) {
  // href または src 属性の値を取得 (URLを取得)
  const href = await link.getAttribute('href') || await link.getAttribute('src');

  // href が空、または tel: または mailto: で始まる場合、または https://x.com で始まる場合はチェックしない
  if (!href || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https://x.com')) {
    return null;
  }

  // 相対リンクの場合は絶対パスに変換する
  const absoluteUrl = await resolveRelativePath(baseUrl, href);

  // リンク先のURLにアクセスして、 200 OK が返ってくるかをチェックする
  try {
    const response = await fetch(absoluteUrl);
    if (response.status !== 200) {
      return `Error: ${absoluteUrl} returned status code ${response.status}`;
    }
  } catch (err) {
    return `Error: ${absoluteUrl} returned error ${err}`;
  }

  return null;
}

(async () => {
  const baseUrl = 'https://web.city.shima.mie.jp/twenty/';

  console.info("🔧 Initializing Chromium browser...")
  const browser = await chromium.launch();
  console.info("Done.\n")

  console.info(`📰 Opening ${baseUrl} ...`)
  const page = await browser.newPage();
  await page.goto(baseUrl);
  console.info("Done.\n")

  console.info("🛂 Checking links (has attribute href, src)...")

  // hrefとsrcが設定されている要素を全て取得
  const links = await page.$$('[href], [src]');
  const promises = links.map(link => checkLink200(baseUrl, link));

  // 全てのチェック操作が終了するまで待機
  const results = await Promise.all(promises);

  // ブラウザを閉じる
  await browser.close();

  console.log('Done.\n');

  // チェック結果を表示
  const errors = results.filter(result => result !== null);
  if (errors.length > 0) {
    console.error('❌ The following errors were found:');
    errors.forEach(error => console.error(error));
    process.exit(1);
  } else {
    console.info('✅ No errors were found.');
  }

  process.exit(0);
})();
