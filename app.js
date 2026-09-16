(()=>{
const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');
if(b&&n){b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',String(o));b.setAttribute('aria-label',o?'メニューを閉じる':'メニューを開く');b.textContent=o?'×':'☰'})}
const f=document.querySelector('#diagnosisForm');if(!f)return;
const data={
electrician:{name:'第二種電気工事士',url:'qualifications/second-electrician.html',base:7,why:'設備・電気分野へ仕事の幅を広げやすく、独立志向とも相性があります。',next:'公式の受験案内を確認し、筆記・技能の学習方法を比較する'},
hazard:{name:'危険物取扱者 乙4',url:'qualifications/hazardous-otsu4.html',base:6,why:'製造・物流・設備管理など、危険物を扱う幅広い現場で候補になります。',next:'公式の試験案内を確認し、独学か講座利用かを決める'},
forklift:{name:'フォークリフト運転技能講習',url:'qualifications/forklift.html',base:5,why:'物流・倉庫で仕事に直結しやすく、短期間で取りたい人の候補になりやすいです。',next:'登録教習機関の受講条件・日程・費用を比較する'},
tamakake:{name:'玉掛け技能講習',url:'qualifications/tamakake.html',base:4,why:'建設・製造現場でクレーン作業と組み合わせて使われる機会が多い資格です。',next:'登録教習機関の受講条件を確認し、クレーン系資格との組み合わせも検討する'},
crane:{name:'クレーン関連資格',url:'qualifications/crane.html',base:4,why:'建設・製造で重量物を扱う仕事の幅を広げたい人の候補です。',next:'扱うクレーンの種類と業務範囲を確認し、必要な講習・免許を絞り込む'},
health:{name:'衛生管理者',url:'qualifications/health-supervisor.html',base:5,why:'現場作業だけでなく、安全衛生や管理側へ役割を広げたい人に向いています。',next:'公式の受験資格を確認し、該当する実務経験を整理する'},
boiler:{name:'二級ボイラー技士',url:'qualifications/boiler.html',base:5,why:'設備管理・ビルメンテナンス分野を目指す人と相性があります。',next:'公式の試験案内と免許交付要件を確認し、学習計画を立てる'},
fire:{name:'消防設備士',url:'qualifications/fire-equipment.html',base:5,why:'設備・点検分野で専門性を積み上げたい人の候補です。',next:'目指す類と受験資格を公式情報で確認し、学習範囲を決める'}
};f.addEventListener('submit',e=>{
e.preventDefault();
const v=Object.fromEntries(new FormData(f));
const s=Object.fromEntries(Object.entries(data).map(([k,x])=>[k,x.base]));
if(v.job==='logistics'){s.forklift+=6;s.hazard+=3}
if(v.job==='construction'){s.electrician+=5;s.tamakake+=5;s.crane+=4;s.fire+=3}
if(v.job==='facility'){s.boiler+=5;s.electrician+=4;s.fire+=4;s.health+=2}
if(v.job==='manufacturing'){s.hazard+=4;s.forklift+=3;s.tamakake+=3;s.crane+=3;s.health+=2}
if(v.goal==='independent'){s.electrician+=5;s.fire+=3}
if(v.goal==='raise'){s.health+=3;s.electrician+=2}
if(v.time==='short'){s.forklift+=5;s.tamakake+=4;s.hazard+=2}
if(v.time==='long'){s.electrician+=3;s.health+=2;s.boiler+=2;s.fire+=2}
if(v.budget==='low'){s.hazard+=3;s.health+=2}
if(v.budget==='high'){s.electrician+=3;s.fire+=2;s.crane+=1}
if(v.age==='50'){s.forklift+=1;s.health+=2;s.boiler+=2}
const top=Object.entries(s).sort((a,b)=>b[1]-a[1]).slice(0,3);
const labels=[...f.querySelectorAll('select')].map(el=>el.options[el.selectedIndex].text);
const result=document.querySelector('#diagnosisResult');result.innerHTML='<h2>あなたの候補3資格</h2>'+
'<p class="notice"><strong>今回の条件</strong><br>'+labels.join(' / ')+'</p>'+
top.map(([k],i)=>{const x=data[k];return '<article class="result-card"><span class="eyebrow">候補 '+(i+1)+'</span><b>'+x.name+'</b><p><strong>なぜ候補？</strong><br>'+x.why+'</p><p><strong>次にやること</strong><br>'+x.next+'</p><a class="btn ghost" href="'+x.url+'">資格の詳細を見る</a></article>'}).join('')+
'<p class="notice"><strong>診断は目安です。</strong> 受験資格・講習条件・業務範囲・最新日程は、リンク先に掲載している公式情報を必ず確認してください。</p>';
result.scrollIntoView({behavior:'smooth',block:'start'});
});
})();