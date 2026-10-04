import {mkdirSync,copyFileSync,cpSync,rmSync} from 'node:fs';
rmSync('dist',{recursive:true,force:true});mkdirSync('dist');for(const f of ['index.html','README.md','LICENSE','.nojekyll'])copyFileSync(f,`dist/${f}`);for(const f of ['assets','data','docs','starters'])cpSync(f,`dist/${f}`,{recursive:true});console.log('Static site built in dist/');
