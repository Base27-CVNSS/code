import {readFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const p=JSON.parse(readFileSync('data/products.json','utf8'));assert(p.length>0);const ids=new Set();for(const x of p){assert(!ids.has(x.id),'duplicate id');ids.add(x.id);assert(typeof x.title==='string'&&x.title);assert(typeof x.price==='number'&&x.price>=0);assert(existsSync(`assets/${x.id}.svg`));if(x.price===0)assert(x.download&&existsSync(x.download));if(x.price>0)assert(x.status==='catalog-demo','real commerce not configured');}
for(const f of ['assets/app.js','assets/style.css','assets/favicon.svg','docs/SETUP.md','docs/SELLER.md','docs/COMMERCE.md'])assert(existsSync(f),f);
console.log(`PASS: ${p.length} products, unique IDs, assets, starter downloads and documentation`);
