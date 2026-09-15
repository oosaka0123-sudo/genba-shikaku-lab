import fs from 'node:fs';
const base='C:/Users/oosak/projects/genba-shikaku-lab/qualifications';
function inject(file, html){
  const p=`${base}/${file}`; let s=fs.readFileSync(p,'utf8');
  const marker='<div class="notice"><strong>重要</strong>';
  if(!s.includes(marker)) throw new Error(`marker missing ${file}`);
  if(!s.includes('data-official-2026')) s=s.replace(marker, html+marker);
  fs.writeFileSync(p,s,'utf8');
}
inject('second-electrician.html',`<section data-official-2026><h2>2026年度の試験情報</h2><div class="compare"><div><b>受験手数料</b><span>インターネット申込み 11,100円（非課税）</span></div><div><b>下期 学科CBT</b><span>2026年9月24日から実施</span></div><div><b>下期 筆記方式</b><span>2026年10月25日</span></div><div><b>下期 技能試験</b><span>2026年12月12日または13日</span></div></div><p>第二種電気工事士は学科試験と技能試験があり、学科はCBT方式または筆記方式から選択できます。技能試験では実際の配線作業を行うため、筆記対策だけでなく工具を使った反復練習が必要です。</p><p class="source-link"><a href="https://www.shiken.or.jp/construction/second/" target="_blank" rel="noopener">公式：電気技術者試験センターで最新日程を確認</a></p></section>`);
inject('hazardous-otsu4.html',`<section data-official-2026><h2>危険物乙4の基本</h2><p>危険物取扱者の乙種は第1類から第6類まで分かれ、乙種第4類はガソリン・灯油など引火性液体を扱う現場で代表的な資格です。試験は消防試験研究センターが全国で実施しており、居住地に関係なく受験地を選べます。</p><div class="compare"><div><b>試験方式</b><span>都道府県ごとの日程で実施</span></div><div><b>申込み</b><span>インターネット申請に対応</span></div><div><b>活用先</b><span>ガソリンスタンド、工場、設備管理など</span></div><div><b>注意点</b><span>試験日程・会場は支部ごとに異なる</span></div></div><p class="source-link"><a href="https://www.shoubo-shiken.or.jp/kikenbutsu/" target="_blank" rel="noopener">公式：消防試験研究センターで最新情報を確認</a></p></section>`);
inject('forklift.html',`<section data-official-2026><h2>フォークリフト運転技能講習とは</h2><p>フォークリフト運転技能講習は労働安全衛生法に基づく技能講習です。最大荷重1トン以上のフォークリフトを運転する業務では、所定の技能講習修了が必要です。講習時間は保有免許や実務経験などによって短縮される場合があります。</p><div class="compare"><div><b>資格の種類</b><span>国家試験ではなく登録教習機関で受ける技能講習</span></div><div><b>主な活用先</b><span>物流倉庫、製造業、建設資材、港湾関連など</span></div><div><b>確認ポイント</b><span>講習時間・料金は受講条件と教習機関で異なる</span></div><div><b>修了後</b><span>修了証を携帯し、対象業務で使用</span></div></div><p class="source-link"><a href="https://www.mhlw.go.jp/kouseiroudoushou/shikaku_shiken/" target="_blank" rel="noopener">公式：厚生労働省の資格・試験情報を確認</a></p></section>`);
inject('tamakake.html',`<section data-official-2026><h2>玉掛け技能講習とは</h2><p>玉掛けは、クレーンのフックにワイヤーロープなどで荷を掛けたり外したりする作業です。つり上げ荷重1トン以上のクレーン等の玉掛け業務では技能講習の修了が必要です。</p><div class="compare"><div><b>標準講習</b><span>学科12時間＋実技7時間が基本</span></div><div><b>主な内容</b><span>クレーン知識、力学、玉掛け方法、関係法令、実技</span></div><div><b>相性の良い資格</b><span>小型移動式クレーン運転技能講習</span></div><div><b>活用先</b><span>建設、設備、製造、荷役など</span></div></div><p class="source-link"><a href="https://kensetsu-welcome.mhlw.go.jp/license/detail013/" target="_blank" rel="noopener">公式：厚生労働省 建設業ウェルカムで内容を確認</a></p></section>`);
console.log('Enriched 4 priority qualification pages');
