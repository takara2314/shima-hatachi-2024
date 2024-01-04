console.log('A');
import minimist from 'minimist';
import fs from 'fs';
console.log('B');

// 環境変数をコマンドラインから取得
const vars = minimist(process.argv.slice(2));
// @ts-ignore
delete vars._;
console.log('C');

// 環境変数ファイルに書き込む内容を作成
let content: string = '';
Object.keys(vars).forEach((key) => {
  content += `${key}=${vars[key]}\n`;
});
console.log('D');

console.log('E');
// 環境変数ファイルを作成
fs.writeFile('./.env', content, (err) => {
  if (err) {
    console.log('F');
    console.log(err);
  } else {
    console.log('G');
    console.log('The file is created successfully.');
  }
});
