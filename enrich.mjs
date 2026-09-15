import fs from 'node:fs';
const base='C:/Users/oosak/projects/genba-shikaku-lab/qualifications';
function add(file, marker, html){
  const p=`${base}/${file}`;
  let s=fs.readFileSync(p,'utf8');
  if(s.includes('data-official-2026')) return console.log(`skip ${file}`);
  if(!s.includes(marker)) throw new Error(`marker missing ${file}`);
  s=s.replace(marker,html+marker);
  fs.writeFileSync(p,s,'utf8');
  console.log(`updated ${file}`);
}
add('hazardous-otsu4.html','      <div class="notice-box">',`      <section data-official-2026><h2>2026年時点の公式確認ポイント</h2><p>乙種第4類は、ガソリン・灯油などの引火性液体を対象とする危険物取扱者資格です。試験は一般財団法人消防試験研究センターが実施し、全国の試験会場から受験地を選べます。インターネット申込みにも対応しています。</p><p class="source-link"><a href="https://www.shoubo-shiken.or.jp/kikenbutsu/" target="_blank" rel="noopener">公式：消防試験研究センターで最新情報を確認</a></p></section>`);
add('forklift.html','<div class="notice"><strong>重要</strong>',`<section data-official-2026><h2>フォークリフト運転技能講習とは</h2><p>労働安全衛生法に基づく技能講習です。最大荷重1トン以上のフォークリフトの運転業務では、所定の技能講習修了が必要です。講習時間は保有免許や実務経験などで異なる場合があります。</p><div class="compare"><div><b>制度</b><span>登録教習機関で受講する技能講習</span></div><div><b>活用先</b><span>物流倉庫、製造、建設資材、港湾関連など</span></div><div><b>確認点</b><span>受講条件・時間・料金は教習機関ごとに確認</span></div></div><p class="source-link"><a href="https://www.mhlw.go.jp/kouseiroudoushou/shikaku_shiken/" target="_blank" rel="noopener">公式：厚生労働省の資格・試験情報を確認</a></p></section>`);
add('tamakake.html','<div class="notice"><strong>重要</strong>',`<section data-official-2026><h2>玉掛け技能講習とは</h2><p>クレーンのフックにワイヤーロープなどで荷を掛けたり外したりする作業に関する技能講習です。標準的な講習は学科12時間・実技7時間で構成されます。</p><div class="compare"><div><b>学科</b><span>クレーン知識、力学、玉掛け方法、関係法令</span></div><div><b>実技</b><span>玉掛け作業と運転のための合図</span></div><div><b>相性</b><span>小型移動式クレーン運転技能講習</span></div></div><p class="source-link"><a href="https://kensetsu-welcome.mhlw.go.jp/license/detail013/" target="_blank" rel="noopener">公式：厚生労働省 建設業ウェルカムで確認</a></p></section>`);
