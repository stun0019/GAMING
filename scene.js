import * as THREE from 'three';

const stage = document.querySelector('#stage');
const labelLayer = document.querySelector('#labels');
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f6e3a0');
scene.fog = new THREE.FogExp2('#f6e3a0', 0.006);

const camera = new THREE.OrthographicCamera(-18, 18, 10, -10, 0.1, 150);
camera.position.set(0, 27, 49.1);
camera.lookAt(0, 0, 6.8);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.16;
stage.appendChild(renderer.domElement);

const ambient = new THREE.HemisphereLight('#fff4d8', '#a29661', 1.8);
scene.add(ambient);
const sun = new THREE.DirectionalLight('#ffe1aa', 3.5);
sun.position.set(-18, 35, -12);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -32;
sun.shadow.camera.right = 32;
sun.shadow.camera.top = 32;
sun.shadow.camera.bottom = -32;
sun.shadow.normalBias = 0.035;
scene.add(sun);
const cool = new THREE.DirectionalLight('#a8c8c0', 1.2);
cool.position.set(13, 12, -16);
scene.add(cool);

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.92, metalness: 0.04, ...extra });
const M = {
  grass: mat('#eaca63'), grass2: mat('#e7ca69'), grass3: mat('#797b37'),
  earth: mat('#d4c194'), road: mat('#eee0b0'), stone: mat('#b9b293'),
  stoneDark: mat('#746e60'), stoneLight: mat('#b7af94'), wood: mat('#5c4937'),
  woodLight: mat('#816347'), roof: mat('#4f5e57'), roofEdge: mat('#303f3c'),
  bronze: mat('#a98b55', { metalness: 0.25 }), gold: mat('#e4c17a', { metalness: 0.2 }),
  skin: mat('#d8b894'), darkHair: mat('#242b2a'), red: mat('#a64f42'),
  redDark: mat('#71362f'), teal: mat('#496e68'), tealLight: mat('#86aea0'),
  cream: mat('#d8c9ad'), blue: mat('#667e8a'), black: mat('#28332f'),
  flame: new THREE.MeshBasicMaterial({ color: '#f9b455' })
};

function mesh(geometry, material, parent, x = 0, y = 0, z = 0, shadow = true) {
  const o = new THREE.Mesh(geometry, material);
  o.position.set(x, y, z);
  o.castShadow = shadow;
  o.receiveShadow = true;
  parent.add(o);
  return o;
}
function box(parent, material, w, h, d, x, y, z) {
  return mesh(new THREE.BoxGeometry(w, h, d), material, parent, x, y, z);
}
function cyl(parent, material, rTop, rBottom, h, x, y, z, sides = 9) {
  return mesh(new THREE.CylinderGeometry(rTop, rBottom, h, sides), material, parent, x, y, z);
}
function ball(parent, material, r, x, y, z, w = 12, h = 8) {
  return mesh(new THREE.SphereGeometry(r, w, h), material, parent, x, y, z);
}
function cone(parent, material, r, h, x, y, z, sides = 6) {
  return mesh(new THREE.ConeGeometry(r, h, sides), material, parent, x, y, z);
}
function line(parent, points, material, radius = 0.035) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)));
  return mesh(new THREE.TubeGeometry(curve, 16, radius, 5, false), material, parent);
}

// Staggered paving and a lower camera reproduce the reference's human-scale town square.
const pavingCanvas=document.createElement('canvas');pavingCanvas.width=1024;pavingCanvas.height=1024;
const pavingContext=pavingCanvas.getContext('2d');
pavingContext.fillStyle='#cfbd88';pavingContext.fillRect(0,0,1024,1024);
let pavingSeed=9182;
const pavingRandom=()=>((pavingSeed=(pavingSeed*1664525+1013904223)>>>0)/4294967296);
for(let row=0;row<16;row++)for(let col=-1;col<17;col++){
  const shade=Math.floor(pavingRandom()*12);
  pavingContext.fillStyle=`rgb(${242-shade},${231-shade},${188-shade})`;
  pavingContext.fillRect(col*64+(row%2)*32+1,row*64+1,62,62);
  pavingContext.strokeStyle='#fff7d535';pavingContext.strokeRect(col*64+(row%2)*32+2,row*64+2,59,59);
}
const pavingTexture=new THREE.CanvasTexture(pavingCanvas);pavingTexture.colorSpace=THREE.SRGBColorSpace;
pavingTexture.wrapS=pavingTexture.wrapT=THREE.RepeatWrapping;pavingTexture.anisotropy=8;
function paving(w,d,x,z,circle=false){
  const tex=pavingTexture.clone();tex.repeat.set(w/8,d/8);tex.needsUpdate=true;
  const p=mesh(circle?new THREE.CircleGeometry(w/2,96):new THREE.PlaneGeometry(w,d),mat('#ffffff',{map:tex}),scene,x,.14,z,false);
  p.rotation.x=-Math.PI/2;return p;
}
box(scene, M.grass, 72, 0.7, 72, 0, -0.42, -2);
const fieldPatch = mesh(new THREE.CircleGeometry(31, 64), M.grass2, scene, 0, -0.055, -2, false);
fieldPatch.rotation.x = -Math.PI / 2;
const court = box(scene, M.earth, 31, 0.06, 16, 0, 0.01, -15.5);
paving(5.5,56,0,7);
paving(50,4.2,0,2.8);
const diagonalRoad=paving(46,4.0,0,3);diagonalRoad.rotation.z=-.48;
const plazaPaving=paving(24.4,24.4,0,3,true);plazaPaving.position.y=.15;

// Stone city: open front gate, stepped wall, towers, houses, and banners.
function wallSegment(x, z, width, rotation = 0) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotation; scene.add(g);
  box(g, M.stone, width, 3.5, 1.15, 0, 1.75, 0);
  box(g, M.stoneDark, width + 0.22, 0.18, 1.48, 0, 3.52, 0);
  for (let i = -width / 2 + 0.45; i < width / 2; i += 1.25) box(g, M.stoneLight, 0.7, 0.53, 1.2, i, 3.82, 0);
  for (let i = -width / 2 + 0.8; i < width / 2; i += 2.8) box(g, M.stoneDark, 0.22, 0.11, 1.19, i, 1.9, 0.01);
}
const cityStart=scene.children.length;
wallSegment(-9.25, -9.4, 12.5);
wallSegment(9.25, -9.4, 12.5);
wallSegment(-15.5, -17.5, 16, Math.PI / 2);
wallSegment(15.5, -17.5, 16, Math.PI / 2);
wallSegment(0, -25.5, 31);

function tower(x, z, roofHeight = 5.25) {
  const t = new THREE.Group(); t.position.set(x, 0, z); scene.add(t);
  cyl(t, M.stoneDark, 2.15, 2.35, 4.2, 0, 2.1, 0, 8);
  cyl(t, M.stoneLight, 2.3, 2.3, 0.25, 0, 4.28, 0, 8);
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4;
    box(t, M.stoneLight, 0.82, 0.55, 0.68, Math.sin(a) * 2.0, 4.61, Math.cos(a) * 2.0).rotation.y = a;
  }
  cone(t, M.roof, 2.4, 1.55, 0, roofHeight, 0, 8);
  ball(t, M.gold, 0.17, 0, roofHeight + 0.86, 0);
}
tower(-15, -9.5); tower(15, -9.5); tower(-15, -25); tower(15, -25);

const gate = new THREE.Group(); gate.position.set(0, 0, -9.5); scene.add(gate);
box(gate, M.stoneDark, 7.2, 0.55, 1.6, 0, 4.4, 0);
box(gate, M.stoneLight, 6.4, 0.55, 1.8, 0, 4.85, 0);
for (let i = -3; i <= 3; i++) box(gate, M.stoneLight, 0.63, 0.5, 1.6, i, 5.33, 0);
box(gate, M.wood, 2.85, 3.4, 0.18, -1.49, 1.7, -0.16);
box(gate, M.wood, 2.85, 3.4, 0.18, 1.49, 1.7, -0.16);
for (let y of [0.55, 1.7, 2.85]) box(gate, M.bronze, 5.8, 0.09, 0.22, 0, y, 0);
for (let x of [-2.7, -1.25, 1.25, 2.7]) for (let y of [0.62, 1.77, 2.92]) ball(gate, M.gold, 0.07, x, y, 0.14);
box(gate, M.woodLight, 2.4, 0.55, 0.13, 0, 4.42, 1.01);

function banner(x, z, color = M.red, sign = true) {
  const g = new THREE.Group(); g.position.set(x, 0, z); scene.add(g);
  cyl(g, M.wood, 0.06, 0.08, 5.4, 0, 2.7, 0, 7);
  box(g, M.bronze, 1.7, 0.08, 0.08, 0.65, 5.1, 0);
  const cloth = box(g, color, 1.32, 1.75, 0.06, 0.77, 4.17, 0);
  cloth.rotation.z = -0.04;
  if (sign) box(g, M.gold, 0.15, 1.04, 0.07, 0.72, 4.12, 0.06);
  return g;
}
banner(-10.6, -8.6, M.teal); banner(10.6, -8.6, M.teal);
banner(12.8, 2.7, M.red); banner(17.5, 7.7, M.red);
for(const item of scene.children.slice(cityStart))item.position.z-=16;

function house(x,z,s=1){
  const h=new THREE.Group();h.position.set(x,0,z);h.scale.setScalar(s);scene.add(h);
  const burgundy=mat('#664853'),timber=mat('#695647'),plaster=mat('#e6cea0');
  box(h,M.stoneDark,5.1,.22,4.6,0,.11,.35);
  box(h,plaster,4.4,2.7,3.4,0,1.5,0);
  for(const px of [-2.12,0,2.12])box(h,timber,.15,2.7,.18,px,1.5,1.74);
  for(const py of [.32,1.3,2.75])box(h,timber,4.4,.12,.18,0,py,1.75);
  box(h,timber,1.0,1.95,.12,-.45,1.25,1.83);
  for(const px of [-1.45,1.22]){
    box(h,M.black,.72,.84,.08,px,1.86,1.83);
    for(let k=0;k<4;k++)box(h,plaster,.055,.86,.11,px-.3+k*.2,1.86,1.9);
    box(h,plaster,.76,.055,.12,px,1.86,1.9);
  }
  const slope=Math.atan2(1.35,2.75),roofWidth=Math.hypot(2.75,1.35);
  box(h,burgundy,roofWidth,.16,4.7,-1.375,3.38,0).rotation.z=slope;
  box(h,burgundy,roofWidth,.16,4.7,1.375,3.38,0).rotation.z=-slope;
  box(h,timber,.14,.15,4.85,0,4.1,0);
  for(let zz=-2.2;zz<2.3;zz+=.28){
    line(h,[[-2.76,2.75,zz],[0,4.1,zz],[2.76,2.75,zz]],mat('#9c737e'),.017);
  }
  box(h,burgundy,5.5,.12,1.45,0,2.3,2.35).rotation.x=.15;
  for(const px of [-2.35,2.35])box(h,timber,.13,2.1,.13,px,1.18,2.85);
  box(h,timber,4.85,.12,.13,0,2.2,2.85);
  for(let i=0;i<3;i++)box(h,M.stoneLight,1.5,.12,1.0-i*.2,-.45,.10+i*.12,3.3-i*.25);
  return h;
}
const nearHouse=house(8.4,-3.1,1.06);nearHouse.rotation.y=-.25;nearHouse.scale.y*=.64;
house(-14,-25,1.0);house(15,-24,.85);

// Tiered turquoise fountain and floating crystal establish the reference's visual anchor.
const dais=new THREE.Group();dais.position.set(0,0,3);scene.add(dais);
cyl(dais,M.stoneDark,3.15,3.25,.22,0,.22,0,48);
cyl(dais,M.stoneLight,3.08,3.15,.22,0,.44,0,48);
const water=mat('#28bdb6',{metalness:.18,roughness:.25,emissive:'#0a706c',emissiveIntensity:.16});
const waterCanvas=document.createElement('canvas');waterCanvas.width=256;waterCanvas.height=256;
const waterContext=waterCanvas.getContext('2d');
const waterColors=['#1ca9ac','#42c9bf','#83e1ce','#32b9b5','#209eaa'];
for(let yy=0;yy<16;yy++)for(let xx=0;xx<16;xx++){
  waterContext.fillStyle=waterColors[(xx*7+yy*11+Math.floor(Math.sin(xx+yy)*3)+5)%5];
  waterContext.fillRect(xx*16,yy*16,16,16);
}
waterContext.strokeStyle='#d0fff1';waterContext.lineWidth=3;
for(let j=0;j<9;j++){waterContext.beginPath();waterContext.arc(128+Math.sin(j*3)*65,128+Math.cos(j*2)*65,12+j*3,j,j+1.4);waterContext.stroke();}
const waterTexture=new THREE.CanvasTexture(waterCanvas);waterTexture.colorSpace=THREE.SRGBColorSpace;
water.map=waterTexture;water.color.set('#ffffff');
cyl(dais,water,2.85,2.85,.1,0,.65,0,64);
const lip=mesh(new THREE.TorusGeometry(2.94,.14,8,64),M.cream,dais,0,.69,0);lip.rotation.x=Math.PI/2;
for(let i=0;i<20;i++){
  const a=i*Math.PI/10;box(dais,M.stoneDark,.035,.21,.24,Math.cos(a)*3.07,.44,Math.sin(a)*3.07).rotation.y=-a;
}
cyl(dais,M.stoneLight,.65,.87,.45,0,.9,0,12);
cyl(dais,M.stone,.35,.55,1.05,0,1.55,0,10);
cyl(dais,M.cream,.78,.50,.2,0,2.10,0,16);
cyl(dais,water,.64,.64,.045,0,2.22,0,24);
cyl(dais,M.stoneLight,.18,.29,1.1,0,2.75,0,8);
cyl(dais,M.cream,.46,.28,.2,0,3.32,0,12);
const crystal=mesh(new THREE.OctahedronGeometry(.81),new THREE.MeshStandardMaterial({color:'#71efed',emissive:'#27bcc8',emissiveIntensity:.32,roughness:.22,metalness:.1,flatShading:true}),dais,0,4.65,0);
crystal.scale.y=1.35;
const spray=mat('#b4f6e8',{transparent:true,opacity:.74});
for(let i=0;i<8;i++){
  const a=i*Math.PI/4,c=Math.cos(a),s=Math.sin(a);
  line(dais,[[c*.65,2.17,s*.65],[c*1.3,2.35,s*1.3],[c*1.9,1.55,s*1.9],[c*2.2,.68,s*2.2]],spray,.026);
}
const ripples=[];
for(let i=0;i<3;i++){
  const r=mesh(new THREE.RingGeometry(1.35+i*.44,1.39+i*.44,64),new THREE.MeshBasicMaterial({color:'#c9fff2',transparent:true,opacity:.48,side:THREE.DoubleSide}),dais,0,.711+i*.002,0,false);r.rotation.x=-Math.PI/2;ripples.push(r);
}
for(let i=0;i<8;i++) {
  const a=i*Math.PI/4-.42;
  const bench=new THREE.Group();bench.position.set(Math.sin(a)*8.1,0,3+Math.cos(a)*8.1);bench.rotation.y=a;scene.add(bench);
  box(bench,M.woodLight,2.2,.16,.64,0,.6,0);
  for(let j=0;j<3;j++)box(bench,M.teal,2.2,.14,.10,0,.8+j*.16,.3);
  for(const bx of [-.86,.86]){box(bench,M.teal,.12,.65,.5,bx,.37,0);box(bench,M.teal,.12,.1,.78,bx,.94,0);}
}
for(const [x,z] of [[-4.5,-8.5],[4.3,-10.5],[-18,8],[-2,23],[9.7,20],[18,-3]]) {
  cyl(scene,M.stone,.13,.22,2.7,x,1.35,z,8);
  box(scene,M.bronze,.58,.12,.58,x,2.68,z);
  box(scene,M.cream,.38,.48,.38,x,2.98,z);
  cone(scene,M.roof,.45,.3,x,3.35,z,4);
}

function tree(x, z, s = 1) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(s); scene.add(g);
  cyl(g, M.wood, 0.14, 0.25, 2.5, 0, 1.25, 0, 7);
  const foliage=[mat('#dca856'),mat('#ecb25c'),mat('#eab66f'),mat('#d8a14e')];
  for(let i=0;i<13;i++){
    const a=i*2.399,r=.35+(i%4)*.32;
    ball(g,foliage[i%4],.72+(i%3)*.12,Math.cos(a)*r,2.4+(i%4)*.24,Math.sin(a)*r,8,6).scale.y=.72;
  }
}
for (const [x,z,s] of [[-20,-7,1],[-22,16,.9],[22,11,.9],[-11,-7.5,1.1],[-15,-10,1.0],[8,-16,1.1]]) tree(x,z,s);
for(let x=-18;x<=18;x+=2){
  if(Math.abs(x)<3)continue;
  box(scene,M.stone,.22,1.8,.22,x,.9,-16);
  cone(scene,M.stoneLight,.25,.3,x,1.96,-16,4);
  if(Math.abs(x+1)>3){box(scene,M.wood,1.9,.11,.11,x+1,1.45,-16);box(scene,M.wood,1.9,.1,.1,x+1,.6,-16);}
}

// Scattered terrain details establish scale without obscuring characters.
const rng = (() => { let seed = 12911; return () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296); })();
for(const [px,pz] of [[-13,-6],[17,12],[-16,18],[15,-11],[-20,2],[19,19]])for(let j=0;j<42;j++){
  const a=rng()*Math.PI*2,r=Math.sqrt(rng())*2.8;
  const gx=px+Math.cos(a)*r,gz=pz+Math.sin(a)*r;
  for(let k=0;k<3;k++){
    const leaf=cone(scene,M.grass3,.075,.22+rng()*.19,gx+(rng()-.5)*.35,.2,gz+(rng()-.5)*.35,3);
    leaf.rotation.z=(rng()-.5)*.9;
  }
}
for (let i = 0; i < 240; i++) {
  const x = (rng() - 0.5) * 58, z = (rng() - 0.5) * 57 - 1;
  if (Math.hypot(x,z-3)<12 || (Math.abs(x) < 17 && z < -9) || Math.abs(x)<3 || Math.abs(z-3)<2.5) continue;
  const tuft = cone(scene, i % 3 ? M.grass3 : M.grass2, 0.10 + rng() * 0.13, 0.25 + rng() * 0.34, x, 0.15, z, 4);
  tuft.rotation.z = (rng() - 0.5) * 0.25;
}
for (let i = 0; i < 45; i++) {
  const x = (rng() - 0.5) * 55, z = (rng() - 0.5) * 55;
  if (Math.hypot(x,z-3)<12 || Math.abs(x)<3) continue;
  ball(scene, i % 2 ? M.stone : M.stoneDark, 0.12 + rng() * 0.18, x, 0.045, z, 6, 5).scale.y = 0.4;
}

function personBase(x, z, type, scale = 1) {
  const root = new THREE.Group(); root.position.set(x, 0, z); root.scale.setScalar(scale); scene.add(root);
  const body = new THREE.Group(); root.add(body);
  const palette = type === 'hero' ? {coat:M.teal,trim:M.gold,legs:M.black,head:M.skin} :
    type === 'ai1' ? {coat:M.redDark,trim:M.gold,legs:M.black,head:M.skin} :
    type === 'ai2' ? {coat:M.blue,trim:M.stoneLight,legs:M.black,head:M.skin} :
    type === 'civilian' ? {coat:M.cream,trim:M.woodLight,legs:M.wood,head:M.skin} :
    type === 'general' ? {coat:M.redDark,trim:M.gold,legs:M.black,head:M.skin} :
    {coat:M.red,trim:M.stoneDark,legs:M.black,head:M.skin};
  cyl(body, palette.legs, 0.18, 0.2, 0.76, -0.22, 0.41, 0, 7);
  cyl(body, palette.legs, 0.18, 0.2, 0.76, 0.22, 0.41, 0, 7);
  cyl(body, palette.coat, 0.38, 0.48, 1.1, 0, 1.26, 0, 9);
  box(body, palette.trim, 0.68, 0.16, 0.7, 0, 1.07, 0);
  ball(body, palette.head, 0.31, 0, 2.07, 0, 12, 9);
  const leftArm = cyl(body, palette.coat, 0.15, 0.17, 0.74, -0.47, 1.44, 0, 7); leftArm.rotation.z = -0.18;
  const rightArm = cyl(body, palette.coat, 0.15, 0.17, 0.74, 0.47, 1.44, 0, 7); rightArm.rotation.z = 0.18;
  ball(body, palette.head, 0.13, -0.53, 1.08, 0);
  ball(body, palette.head, 0.13, 0.53, 1.08, 0);
  if (type === 'civilian') {
    ball(body, M.darkHair, 0.32, 0, 2.22, -0.09);
    ball(body, M.darkHair, 0.17, 0, 2.29, -0.32);
    box(body, M.woodLight, 0.26, 0.3, 0.31, 0, 1.82, 0.3);
  } else {
    cyl(body, type === 'hero' ? M.teal : type === 'ai2' ? M.blue : M.stoneDark, 0.34, 0.34, 0.22, 0, 2.35, 0, 9);
    cone(body, type === 'general' ? M.gold : M.stoneDark, 0.31, 0.58, 0, 2.72, 0, 8);
    if (type !== 'soldier') {
      const plumeColor = type === 'hero' ? M.tealLight : type === 'ai2' ? M.blue : M.red;
      line(body, [[0,2.8,0],[0.04,3.17,-0.07],[0.16,3.5,-0.14]],plumeColor,0.075);
      ball(body, plumeColor, 0.13, 0.16, 3.5, -0.14);
      for (let s of [-1,1]) box(body, M.bronze, 0.35, 0.25, 0.52, s*0.46, 1.8, 0);
      box(body, M.bronze, 0.55, 0.55, 0.12, 0, 1.5, 0.42);
    }
    const spear = cyl(body, M.wood, 0.035, 0.035, type === 'soldier' ? 3.2 : 3.5, 0.64, 1.62, -0.21, 6);
    spear.rotation.z = -0.08;
    cone(body, M.stoneLight, 0.12, 0.38, 0.5, 3.37, -0.21, 5);
  }
  return {root,body};
}

// PvPvE prototype: three competing commanders share a battlefield and a city to defend.
const fighters = [];
const enemies = [];
const civilians = [];
const effects = [];
const keys = new Set();
const ui = {
  time: document.querySelector('#time'), cityValue: document.querySelector('#city-value'), cityFill: document.querySelector('#city-fill'),
  health: document.querySelector('#player-health'), healthText: document.querySelector('#player-health-text'),
  feed: document.querySelector('#feed'), end: document.querySelector('#end-screen'),
  endTitle: document.querySelector('#end-title'), endMessage: document.querySelector('#end-message')
};
const game = {started:false, ended:false, elapsed:0, duration:120, city:100, nextSoldier:5, nextGeneral:24, nextCivilian:12, feedUntil:4};
let nextId = 0;

function makeLabel(actor) {
  const label = document.createElement('div');
  const compact = actor.kind === 'soldier' ? 'minor' : '';
  label.className = `unit-label ${actor.kind} ${compact}`;
  label.innerHTML = `<span class="name">${actor.name}</span>${actor.value ? `<span class="rate">${actor.value}</span>` : ''}<div class="stem"></div>`;
  labelLayer.appendChild(label);
  actor.label = label;
}

function makeActor({kind,name,type,x,z,scale,hp,speed,value='',id}) {
  scale*=.65;
  const {root,body} = personBase(x,z,type,scale);
  const actor = {id:id || `entity-${++nextId}`,kind,name,type,root,body,scale,maxHp:hp,hp,speed,value,
    score:0,alive:true,facing:new THREE.Vector2(0,-1),cooldown:0,invulnerable:0,respawnAt:0,
    base:new THREE.Vector2(x,z),aiPhase:Math.random()*8};
  root.rotation.y = Math.PI;
  if (kind === 'player' || kind === 'ai1' || kind === 'ai2') {
    const color = kind === 'player' ? '#eccc83' : kind === 'ai1' ? '#d47165' : '#a9a2d5';
    const ring = mesh(new THREE.RingGeometry(0.66,0.75,32),new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide,transparent:true,opacity:0.95}),root,0,0.05,0,false);
    ring.rotation.x = -Math.PI/2;
    actor.ring = ring;
  }
  makeLabel(actor);
  return actor;
}

const player = makeActor({kind:'player',name:'昭烈 · 你',type:'hero',x:0,z:9.6,scale:1.12,hp:5,speed:4.15,id:'player'});
const aiRed = makeActor({kind:'ai1',name:'赤羽 · AI',type:'ai1',x:11.5,z:4,scale:1.08,hp:5,speed:2.65,value:'擊敗 ×20',id:'ai1'});
const aiBlue = makeActor({kind:'ai2',name:'玄策 · AI',type:'ai2',x:-11,z:7.5,scale:1.08,hp:5,speed:2.55,value:'擊敗 ×20',id:'ai2'});
fighters.push(player,aiRed,aiBlue);

function spawnSoldier(x,z) {
  const a = makeActor({kind:'soldier',name:'敵軍士兵',type:'soldier',x,z,scale:.82,hp:2,speed:1.25,value:'×5'});
  enemies.push(a);
  return a;
}
function spawnGeneral(x,z) {
  const a = makeActor({kind:'general',name:'敵國武將',type:'general',x,z,scale:1.13,hp:8,speed:.85,value:'×30'});
  enemies.push(a);
  return a;
}
function spawnCivilian(x,z) {
  const a = makeActor({kind:'civilian',name:'城中百姓',type:'civilian',x,z,scale:.75,hp:1,speed:0,value:'救援 ×2'});
  civilians.push(a);
  return a;
}
spawnSoldier(-10,-4); spawnSoldier(9,-6); spawnSoldier(12,11);
spawnGeneral(-11.5,12.0);
spawnCivilian(-4,-5.5); spawnCivilian(6.0,-6.0);

function announce(message,seconds=2.4) {
  ui.feed.textContent=message;
  ui.feed.classList.remove('quiet');
  game.feedUntil=game.elapsed+seconds;
}
function begin() {
  if (game.started || game.ended) return;
  game.started=true;
  announce('戰局開始！守住城門，爭取最高戰功。',3);
}
function move(actor,dx,dz,dt) {
  const magnitude=Math.hypot(dx,dz);
  if (magnitude<.001) return;
  dx/=magnitude; dz/=magnitude;
  actor.facing.set(dx,dz);
  actor.root.rotation.y=Math.atan2(dx,dz);
  actor.root.position.x=THREE.MathUtils.clamp(actor.root.position.x+dx*actor.speed*dt,-12.7,12.7);
  actor.root.position.z=THREE.MathUtils.clamp(actor.root.position.z+dz*actor.speed*dt,-6.7,14.4);
  const rx=actor.root.position.x,rz=actor.root.position.z-3,rd=Math.hypot(rx,rz);
  if(rd<3.55) {
    const nx=rd>.001?rx/rd:1,nz=rd>.001?rz/rd:0;
    actor.root.position.x=nx*3.55;
    actor.root.position.z=3+nz*3.55;
    if(actor!==player){actor.root.position.x-=nz*actor.speed*dt;actor.root.position.z+=nx*actor.speed*dt;}
  }
}
function distance(a,b) {return Math.hypot(a.root.position.x-b.root.position.x,a.root.position.z-b.root.position.z);}
function removeEntity(actor,list) {
  actor.root.removeFromParent();
  actor.label.remove();
  const i=list.indexOf(actor); if(i>=0) list.splice(i,1);
}
function addScore(actor,amount) {
  if (!actor || !fighters.includes(actor)) return;
  actor.score+=amount;
}
function flashAttack(actor) {
  const color=actor.kind==='player'?'#f5d997':actor.kind==='ai2'?'#b9b1ed':actor.kind==='ai1'?'#ef9a7d':'#ef6d59';
  const material=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.82,side:THREE.DoubleSide,depthWrite:false});
  const arc=mesh(new THREE.RingGeometry(.5,2.0,28,1,-.7,2.8),material,scene,actor.root.position.x,.14,actor.root.position.z,false);
  arc.rotation.x=-Math.PI/2;
  arc.rotation.z=-Math.atan2(actor.facing.x,actor.facing.y)-Math.PI/2;
  effects.push({mesh:arc,life:.22,total:.22});
}
function defeated(target,attacker) {
  target.alive=false;
  if (fighters.includes(target)) {
    target.root.visible=false;
    target.label.classList.add('dead');
    target.respawnAt=game.elapsed+3.3;
    if (attacker && fighters.includes(attacker) && attacker!==target) {
      addScore(attacker,20);
      announce(`${attacker.name.replace(' · AI','').replace(' · 你','')} 擊敗 ${target.name.replace(' · AI','').replace(' · 你','')}，獲得 20 戰功`);
    } else if (target===player) announce('昭烈倒下，3 秒後重返戰場');
  } else {
    if (attacker && fighters.includes(attacker)) {
      const reward=target.kind==='general'?30:5;
      addScore(attacker,reward);
      if(target.kind==='general') announce(`${attacker.name.replace(' · AI','').replace(' · 你','')} 擊退敵國武將，獲得 30 戰功`);
    }
    removeEntity(target,enemies);
  }
}
function damage(target,amount,attacker) {
  if (!target.alive || target.invulnerable>0) return;
  target.hp-=amount;
  target.invulnerable=.42;
  if (target.hp<=0) defeated(target,attacker);
}
function attack(actor) {
  if (!actor.alive || actor.cooldown>0 || game.ended) return;
  actor.cooldown=actor.kind==='general'?.95:actor.kind==='soldier'?1.15:.48;
  flashAttack(actor);
  const targets=fighters.includes(actor)
    ? [...enemies,...fighters.filter(other=>other!==actor)]
    : fighters;
  const reach=actor.kind==='general'?2.5:actor.kind==='soldier'?1.65:2.15;
  let hit=false;
  for (const target of targets) {
    if (!target.alive) continue;
    const dx=target.root.position.x-actor.root.position.x;
    const dz=target.root.position.z-actor.root.position.z;
    const d=Math.hypot(dx,dz);
    if (d>reach || d<.01) continue;
    const dot=(dx*actor.facing.x+dz*actor.facing.y)/d;
    if (dot>.03 || d<.82) {damage(target,actor.kind==='general'?2:1,actor);hit=true;}
  }
  if(actor===player && !hit) announce('揮空了。靠近目標並朝向它再出手。',.8);
}
function closest(from,others,maxDistance=Infinity) {
  let found=null,best=maxDistance;
  for(const other of others) {
    if(!other.alive || other===from) continue;
    const d=distance(from,other);
    if(d<best){found=other;best=d;}
  }
  return found;
}
function updateAI(actor,dt) {
  if(!actor.alive) return;
  const foe=closest(actor,fighters.filter(f=>f!==actor),4.7);
  const enemy=closest(actor,enemies,14);
  let target;
  if (foe && (!enemy || distance(actor,foe)<distance(actor,enemy)*.88 || Math.sin(game.elapsed*.45+actor.aiPhase)>.7)) target=foe;
  else target=enemy || closest(actor,fighters.filter(f=>f!==actor));
  if (!target) return;
  const dx=target.root.position.x-actor.root.position.x;
  const dz=target.root.position.z-actor.root.position.z;
  const d=Math.hypot(dx,dz);
  if (d>1.55) move(actor,dx,dz,dt);
  else { actor.facing.set(dx/d,dz/d); actor.root.rotation.y=Math.atan2(dx,dz); attack(actor); }
}
function updateEnemy(actor,dt) {
  if(!actor.alive) return;
  const fighter=closest(actor,fighters,4.0);
  if(fighter) {
    const dx=fighter.root.position.x-actor.root.position.x;
    const dz=fighter.root.position.z-actor.root.position.z;
    const d=Math.hypot(dx,dz);
    if(d>1.4) move(actor,dx,dz,dt);
    else {actor.facing.set(dx/d,dz/d);actor.root.rotation.y=Math.atan2(dx,dz);attack(actor);}
  } else move(actor,-actor.root.position.x*.12,-1,dt);
  for(const person of [...civilians]) {
    if(person.alive && distance(actor,person)<.9) {
      removeEntity(person,civilians);
      game.city=Math.max(0,game.city-6);
      announce('敵軍傷及百姓，城池耐久 -6');
    }
  }
  if(actor.root.position.z<=-6.65){
    game.city=Math.max(0,game.city-(actor.kind==='general'?18:8));
    announce(actor.kind==='general'?'敵將衝入城門！耐久 -18':'敵兵突破城門！耐久 -8');
    removeEntity(actor,enemies);
  }
}
function rescue() {
  for(const person of [...civilians]) {
    const rescuer=closest(person,fighters,1.25);
    if(rescuer){addScore(rescuer,2);removeEntity(person,civilians);announce(`${rescuer.name.replace(' · AI','').replace(' · 你','')} 救援百姓，獲得 2 戰功`,1.6);}
  }
}
function respawnFighters() {
  for(const actor of fighters) {
    if(actor.alive || game.elapsed<actor.respawnAt) continue;
    actor.alive=true;actor.hp=actor.maxHp;actor.invulnerable=1.3;actor.cooldown=0;
    actor.root.position.set(actor.base.x,0,actor.base.y);
    actor.root.visible=true;actor.label.classList.remove('dead');
    if(actor===player) announce('昭烈已重返戰場',1.5);
  }
}
function finish() {
  if(game.ended) return;
  game.ended=true;
  const ranking=[...fighters].sort((a,b)=>b.score-a.score);
  const winner=ranking[0];
  ui.endTitle.textContent=game.city<=0?'雁門城失守':winner===player?'你贏得戰局':'戰局結束';
  ui.endMessage.textContent=`${game.city<=0?'敵軍突破城門。':'戰功最高：'+winner.name+'。'} 昭烈 ${player.score} 分、赤羽 ${aiRed.score} 分、玄策 ${aiBlue.score} 分。`;
  ui.end.classList.remove('hidden');
}
function updateUI() {
  const remaining=Math.max(0,Math.ceil(game.duration-game.elapsed));
  ui.time.textContent=`${String(Math.floor(remaining/60)).padStart(2,'0')}:${String(remaining%60).padStart(2,'0')}`;
  ui.cityValue.textContent=`${game.city} / 100`;
  ui.cityFill.style.width=`${game.city}%`;
  ui.health.style.width=`${Math.max(0,player.hp)/player.maxHp*100}%`;
  ui.healthText.textContent=player.alive?`${player.hp} / ${player.maxHp}`:'復活中';
  for(const actor of fighters) document.querySelector(`#score-${actor.id}`).textContent=actor.score;
  for(const actor of fighters) {
    const dot=document.querySelector(`#map-${actor.id}`);
    dot.setAttribute('cx',70+actor.root.position.x*3.7);
    dot.setAttribute('cy',53+(actor.root.position.z-3)*3);
    dot.style.opacity=actor.alive?'1':'.25';
  }
  ui.feed.classList.toggle('quiet',game.elapsed>game.feedUntil);
}

window.addEventListener('keydown',event=>{
  const key=event.key.toLowerCase();
  if(['w','a','s','d','j',' '].includes(key)) {
    event.preventDefault();
    begin();
    keys.add(key);
    if((key==='j'||key===' ')&&!event.repeat) attack(player);
  }
});
window.addEventListener('keyup',event=>keys.delete(event.key.toLowerCase()));
window.addEventListener('blur',()=>keys.clear());
document.querySelector('#restart').addEventListener('click',()=>location.reload());
document.querySelector('#play-again').addEventListener('click',()=>location.reload());
document.querySelector('#attack-button').addEventListener('click',()=>{begin();attack(player);});

function resize() {
  const width=1280,height=720,aspect=width/height;
  const fit=Math.min(window.innerWidth/width,window.innerHeight/height);
  const app=document.querySelector('#app');
  app.style.transform=`scale(${fit})`;
  app.style.left=`${(window.innerWidth-width*fit)/2}px`;
  app.style.top=`${(window.innerHeight-height*fit)/2}px`;
  const worldHeight=22.5;
  camera.left=-worldHeight*aspect/2; camera.right=worldHeight*aspect/2;
  camera.top=worldHeight/2; camera.bottom=-worldHeight/2;
  camera.updateProjectionMatrix();
  renderer.setSize(width,height);
}
window.addEventListener('resize',resize);
resize();

const clock=new THREE.Clock();
const projected=new THREE.Vector3();
function animate() {
  requestAnimationFrame(animate);
  const dt=Math.min(clock.getDelta(),.05);
  const t=clock.elapsedTime;
  crystal.rotation.y=t*.3;
  crystal.position.y=4.65+Math.sin(t*1.3)*.1;
  for(let i=0;i<ripples.length;i++){const phase=(t*.24+i*.34)%1;ripples[i].scale.setScalar(.88+phase*.23);ripples[i].material.opacity=(1-phase)*.58;}
  if(game.started&&!game.ended) {
    game.elapsed+=dt;
    for(const actor of [...fighters,...enemies]) {
      actor.cooldown=Math.max(0,actor.cooldown-dt);
      actor.invulnerable=Math.max(0,actor.invulnerable-dt);
    }
    let dx=0,dz=0;
    if(keys.has('a')) dx--; if(keys.has('d')) dx++;
    if(keys.has('w')) dz--; if(keys.has('s')) dz++;
    if(player.alive) move(player,dx,dz,dt);
    if(player.alive && (keys.has('j')||keys.has(' ')) && player.cooldown<=0) attack(player);
    updateAI(aiRed,dt); updateAI(aiBlue,dt);
    for(const enemy of [...enemies]) updateEnemy(enemy,dt);
    rescue(); respawnFighters();
    if(game.elapsed>=game.nextSoldier && enemies.filter(e=>e.kind==='soldier').length<8) {
      spawnSoldier((Math.random()-.5)*20,12+Math.random()*2);
      game.nextSoldier=game.elapsed+3.9;
    }
    if(game.elapsed>=game.nextGeneral && !enemies.some(e=>e.kind==='general')) {
      spawnGeneral((Math.random()-.5)*15,13);
      game.nextGeneral=game.elapsed+24;
    }
    if(game.elapsed>=game.nextCivilian && civilians.length<3) {
      spawnCivilian((Math.random()-.5)*10,-4+Math.random()*3);
      game.nextCivilian=game.elapsed+10;
    }
    if(game.city<=0||game.elapsed>=game.duration) finish();
  }
  for(const actor of [...fighters,...enemies,...civilians]) {
    actor.body.position.y=Math.sin(t*2.7+actor.root.position.x)*.025;
    actor.body.rotation.z=Math.sin(t*1.8+actor.root.position.z)*.012;
    if(actor.ring) actor.ring.material.opacity=actor.invulnerable>0?.45:.92;
    projected.set(actor.root.position.x,actor.kind==='player'?0:actor.scale*3.55,actor.root.position.z).project(camera);
    const x=(projected.x*.5+.5)*stage.clientWidth,y=(-projected.y*.5+.5)*stage.clientHeight;
    actor.label.style.left=`${x}px`; actor.label.style.top=`${y}px`;
    actor.label.classList.toggle('hidden',!actor.alive||projected.z>1||x<-60||x>stage.clientWidth+60||y<-60||y>stage.clientHeight+60);
  }
  for(let i=effects.length-1;i>=0;i--) {
    const effect=effects[i]; effect.life-=dt;
    effect.mesh.material.opacity=Math.max(0,effect.life/effect.total)*.8;
    if(effect.life<=0){effect.mesh.geometry.dispose();effect.mesh.material.dispose();effect.mesh.removeFromParent();effects.splice(i,1);}
  }
  updateUI();
  renderer.render(scene,camera);
}
animate();

