import fs from 'fs';
import path from 'path';
const root=process.cwd();
for(const file of fs.readdirSync(root,{recursive:true}).filter(x=>x.endsWith('.html'))){
  const full=path.join(root,file);
  const deep=file.replaceAll('\\','/').startsWith('qualifications/');
  const prefix=deep?'../':'./';
  let s=fs.readFileSync(full,'utf8');
  s=s.replaceAll('href="/"',`href="${prefix}"`);
  s=s.replace(/href="\/(?!\/)([^"#]+)"/g,`href="${prefix}$1"`);
  s=s.replace(/src="\/(?!\/)([^"#]+)"/g,`src="${prefix}$1"`);
  fs.writeFileSync(full,s);
}
let js=fs.readFileSync(path.join(root,'app.js'),'utf8');
js=js.replace("url:'/qualifications/second-electrician.html'","url:'qualifications/second-electrician.html'")
     .replace("url:'/qualifications/hazardous-otsu4.html'","url:'qualifications/hazardous-otsu4.html'")
     .replace("url:'/qualifications/forklift.html'","url:'qualifications/forklift.html'")
     .replace("url:'/qualifications/tamakake.html'","url:'qualifications/tamakake.html'")
     .replace("url:'/qualifications/health-supervisor.html'","url:'qualifications/health-supervisor.html'")
     .replace("url:'/qualifications/boiler.html'","url:'qualifications/boiler.html'")
     .replace("url:'/qualifications/fire-equipment.html'","url:'qualifications/fire-equipment.html'");
fs.writeFileSync(path.join(root,'app.js'),js);
console.log('Relative-link postprocess complete');
