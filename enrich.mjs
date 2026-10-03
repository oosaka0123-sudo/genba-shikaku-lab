import fs from 'node:fs';
import path from 'node:path';
const base=path.join(process.cwd(),'qualifications');
function add(file, marker, html){
  const p=path.join(base,file);
  let s=fs.readFileSync(p,'utf8');
  if(s.includes('data-official-2026')) return console.log(`skip ${file}`);
  if(!s.includes(marker)) throw new Error(`marker missing ${file}`);
  s=s.replace(marker,html+marker);
  fs.writeFileSync(p,s,'utf8');
  console.log(`updated ${file}`);
}
add('hazardous-otsu4.html','<div class="notice"><strong>重要</strong>',`<section data-official-2026><h2>2026年時点の公式確認ポイント</h2><p>乙種第4類は、ガソリン・灯油などの引火性液体を対象とする危険物取扱者資格です。試験は一般財団法人消防試験研究センターが実施します。</p><p class="source-link"><a href="https://www.shoubo-shiken.or.jp/kikenbutsu/" target="_blank" rel="noopener">公式：消防試験研究センターで最新情報を確認</a></p></section>`);
add('forklift.html','<div class="notice"><strong>重要</strong>',`<section data-official-2026><h2>フォークリフト運転技能講習とは</h2><p>労働安全衛生法に基づく技能講習です。最大荷重1トン以上のフォークリフトの運転業務では、所定の技能講習修了が必要です。</p><p class="source-link"><a href="https://www.mhlw.go.jp/kouseiroudoushou/shikaku_shiken/" target="_blank" rel="noopener">公式：厚生労働省の資格・試験情報を確認</a></p></section>`);
add('tamakake.html','<div class="notice"><strong>重要</strong>',`<section data-official-2026><h2>玉掛け技能講習とは</h2><p>クレーンのフックにワイヤーロープなどで荷を掛けたり外したりする作業に関する技能講習です。</p><p class="source-link"><a href="https://kensetsu-welcome.mhlw.go.jp/license/detail013/" target="_blank" rel="noopener">公式：厚生労働省 建設業ウェルカムで確認</a></p></section>`);
