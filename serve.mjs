import {createServer} from 'node:http';
import {readFile, stat} from 'node:fs/promises';
import {extname, resolve, sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const port = Number(process.env.PORT || 4317);
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const path = resolve(root, pathname === '/' ? 'index.html' : pathname.slice(1));
    if (path !== root && !path.startsWith(root + sep)) { res.writeHead(403); res.end(); return; }
    if (!(await stat(path)).isFile()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, {'Content-Type':mime[extname(path)] || 'application/octet-stream'});
    res.end(await readFile(path));
  } catch { res.writeHead(404); res.end(); }
}).listen(port,'127.0.0.1',()=>console.log(`http://127.0.0.1:${port}/`));
