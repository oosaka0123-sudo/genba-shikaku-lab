import fs from 'fs';
import path from 'path';
const root=process.cwd();
for(const file of fs.readdirSync(root,{recursive:true}).filter(x=>x.endsWith('.html'))){
  const full=path.join(root,file);
  const deep=file.replaceAll('\\','/').startsWith('qualifications/');
  const prefix=deep?'../':'./';
  let s=fs.readFileSync(full,'utf8');
  s=s.replaceAll('href="/"',`href="${prefix}"`);
  s=s.replace(/href="\/(?!\/)([^"]+)"/g,`href="${prefix}$1"`);
  s=s.replace(/src="\/(?!\/)([^"]+)"/g,`src="${prefix}$1"`);
  fs.writeFileSync(full,s);
}
let js=fs.readFileSync(path.join(root,'app.js'),'utf8');
for(const slug of ['second-electrician','hazardous-otsu4','forklift','tamakake','health-supervisor','boiler','fire-equipment']){
  js=js.replace(`url:'/qualifications/${slug}.html'`,`url:'qualifications/${slug}.html'`);
}
fs.writeFileSync(path.join(root,'app.js'),js);
console.log('Relative-link postprocess complete');
