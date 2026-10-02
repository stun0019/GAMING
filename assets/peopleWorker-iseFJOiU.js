(function(){
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
let e=1e3,t=1001,n=1002,r=1003,i=1006,a=1008,o=1015,s=1023,c=2300,l=2301,u=2302,d=2303,f=2400,p=2401,m=2402,h=`srgb`,g=`srgb-linear`,_=`linear`,v=7680,y=2e3;function b(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function x(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function S(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}let C={};function w(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function T(...e){e=w(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function E(...e){e=w(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function D(...e){let t=e.join(` `);t in C||(C[t]=!0,T(...e))}var O=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}};let k=/* @__PURE__ */ `00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`);function A(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(k[e&255]+k[e>>8&255]+k[e>>16&255]+k[e>>24&255]+`-`+k[t&255]+k[t>>8&255]+`-`+k[t>>16&15|64]+k[t>>24&255]+`-`+k[n&63|128]+k[n>>8&255]+`-`+k[n>>16&255]+k[n>>24&255]+k[r&255]+k[r>>8&255]+k[r>>16&255]+k[r>>24&255]).toLowerCase()}function j(e,t,n){return Math.max(t,Math.min(n,e))}function ee(e,t){return(e%t+t)%t}function te(e,t,n){return(1-n)*e+n*t}function ne(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function re(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var M=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=j(this.x,e.x,t.x),this.y=j(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=j(this.x,e,t),this.y=j(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(j(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(j(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ie=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:T(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(j(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oe.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oe.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=j(this.x,e.x,t.x),this.y=j(this.y,e.y,t.y),this.z=j(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=j(this.x,e,t),this.y=j(this.y,e,t),this.z=j(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(j(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ae.copy(this).projectOnVector(e),this.sub(ae)}reflect(e){return this.sub(ae.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(j(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};let ae=/*@__PURE__*/ new N,oe=/*@__PURE__*/ new ie;var P=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return D(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(se.makeScale(e,t)),this}rotate(e){return D(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(se.makeRotation(-e)),this}translate(e,t){return D(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(se.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};let se=/*@__PURE__*/ new P,ce=/*@__PURE__*/ new P().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),le=/*@__PURE__*/ new P().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ue(){let e={enabled:!0,workingColorSpace:g,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=fe(e.r),e.g=fe(e.g),e.b=fe(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=pe(e.r),e.g=pe(e.g),e.b=pe(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?_:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return D(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return D(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[g]:{primaries:t,whitePoint:r,transfer:_,toXYZ:ce,fromXYZ:le,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:h},outputColorSpaceConfig:{drawingBufferColorSpace:h}},[h]:{primaries:t,whitePoint:r,transfer:`srgb`,toXYZ:ce,fromXYZ:le,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:h}}}),e}let de=/*@__PURE__*/ ue();function fe(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function pe(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}let me;var he=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{me===void 0&&(me=S(`canvas`)),me.width=e.width,me.height=e.height;let t=me.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=me}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=S(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=fe(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(fe(t[e]/255)*255):t[e]=fe(t[e]);return{data:t,width:e.width,height:e.height}}return T(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}};let ge=0;var _e=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ge++}),this.uuid=A(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(ve(r[t].image)):e.push(ve(r[t]))}else e=ve(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function ve(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?he.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(T(`Texture: Unable to serialize Texture.`),{})}let ye=0,be=/*@__PURE__*/ new N;var xe=class r extends O{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,o=t,c=t,l=i,u=a,d=s,f=1009,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ye++}),this.uuid=A(),this.name=``,this.source=new _e(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=o,this.wrapT=c,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new M(0,0),this.repeat=new M(1,1),this.center=new M(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new P,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(be).x}get height(){return this.source.getSize(be).y}get depth(){return this.source.getSize(be).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){T(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){T(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xe.DEFAULT_IMAGE=null,xe.DEFAULT_MAPPING=300,xe.DEFAULT_ANISOTROPY=1;var Se=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=j(this.x,e.x,t.x),this.y=j(this.y,e.y,t.y),this.z=j(this.z,e.z,t.z),this.w=j(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=j(this.x,e,t),this.y=j(this.y,e,t),this.z=j(this.z,e,t),this.w=j(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(j(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ce=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/we.setFromMatrixColumn(e,0).length(),i=1/we.setFromMatrixColumn(e,1).length(),a=1/we.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ee,e,De)}lookAt(e,t,n){let r=this.elements;return Ae.subVectors(e,t),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),Oe.crossVectors(n,Ae),Oe.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),Oe.crossVectors(n,Ae)),Oe.normalize(),ke.crossVectors(Ae,Oe),r[0]=Oe.x,r[4]=ke.x,r[8]=Ae.x,r[1]=Oe.y,r[5]=ke.y,r[9]=Ae.y,r[2]=Oe.z,r[6]=ke.z,r[10]=Ae.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],te=r[3],ne=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*ne,i[8]=a*C+o*D+s*j+c*re,i[12]=a*w+o*O+s*ee+c*M,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*ne,i[9]=l*C+u*D+d*j+f*re,i[13]=l*w+u*O+d*ee+f*M,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*ne,i[10]=p*C+m*D+h*j+g*re,i[14]=p*w+m*O+h*ee+g*M,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*ne,i[11]=_*C+v*D+y*j+b*re,i[15]=_*w+v*O+y*ee+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=we.set(r[0],r[1],r[2]).length(),o=we.set(r[4],r[5],r[6]).length(),s=we.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Te.copy(this);let c=1/a,l=1/o,u=1/s;return Te.elements[0]*=c,Te.elements[1]*=c,Te.elements[2]*=c,Te.elements[4]*=l,Te.elements[5]*=l,Te.elements[6]*=l,Te.elements[8]*=u,Te.elements[9]*=u,Te.elements[10]*=u,t.setFromRotationMatrix(Te),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=y,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=y,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};let we=/*@__PURE__*/ new N,Te=/*@__PURE__*/ new Ce,Ee=/*@__PURE__*/ new N(0,0,0),De=/*@__PURE__*/ new N(1,1,1),Oe=/*@__PURE__*/ new N,ke=/*@__PURE__*/ new N,Ae=/*@__PURE__*/ new N,je=/*@__PURE__*/ new Ce,Me=/*@__PURE__*/ new ie;var Ne=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(j(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-j(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(j(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-j(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(j(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-j(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:T(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return je.makeRotationFromQuaternion(e),this.setFromRotationMatrix(je,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Me.setFromEuler(this),this.setFromQuaternion(Me,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ne.DEFAULT_ORDER=`XYZ`;var Pe=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}};let Fe=0,Ie=/*@__PURE__*/ new N,Le=/*@__PURE__*/ new ie,Re=/*@__PURE__*/ new Ce,ze=/*@__PURE__*/ new N,Be=/*@__PURE__*/ new N,Ve=/*@__PURE__*/ new N,He=/*@__PURE__*/ new ie,Ue=/*@__PURE__*/ new N(1,0,0),We=/*@__PURE__*/ new N(0,1,0),Ge=/*@__PURE__*/ new N(0,0,1),Ke={type:`added`},qe={type:`removed`},Je={type:`childadded`,child:null},Ye={type:`childremoved`,child:null};var Xe=class e extends O{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fe++}),this.uuid=A(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new N,n=new Ne,r=new ie,i=new N(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new P}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pe,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Le.setFromAxisAngle(e,t),this.quaternion.multiply(Le),this}rotateOnWorldAxis(e,t){return Le.setFromAxisAngle(e,t),this.quaternion.premultiply(Le),this}rotateX(e){return this.rotateOnAxis(Ue,e)}rotateY(e){return this.rotateOnAxis(We,e)}rotateZ(e){return this.rotateOnAxis(Ge,e)}translateOnAxis(e,t){return Ie.copy(e).applyQuaternion(this.quaternion),this.position.add(Ie.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ue,e)}translateY(e){return this.translateOnAxis(We,e)}translateZ(e){return this.translateOnAxis(Ge,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Re.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ze.copy(e):ze.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Be.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Re.lookAt(Be,ze,this.up):Re.lookAt(ze,Be,this.up),this.quaternion.setFromRotationMatrix(Re),r&&(Re.extractRotation(r.matrixWorld),Le.setFromRotationMatrix(Re),this.quaternion.premultiply(Le.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(E(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ke),Je.child=e,this.dispatchEvent(Je),Je.child=null):E(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qe),Ye.child=e,this.dispatchEvent(Ye),Ye.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Re.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Re.multiply(e.parent.matrixWorld)),e.applyMatrix4(Re),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ke),Je.child=e,this.dispatchEvent(Je),Je.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Be,e,Ve),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Be,He,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Xe.DEFAULT_UP=/*@__PURE__*/ new N(0,1,0),Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0,Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends Xe{constructor(){super(),this.isGroup=!0,this.type=`Group`}};let Qe={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$e={h:0,s:0,l:0},et={h:0,s:0,l:0};function tt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var F=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=h){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,de.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=de.workingColorSpace){return this.r=e,this.g=t,this.b=n,de.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=de.workingColorSpace){if(e=ee(e,1),t=j(t,0,1),n=j(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=tt(i,r,e+1/3),this.g=tt(i,r,e),this.b=tt(i,r,e-1/3)}return de.colorSpaceToWorking(this,r),this}setStyle(e,t=h){function n(t){t!==void 0&&parseFloat(t)<1&&T(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:T(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);T(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=h){let n=Qe[e.toLowerCase()];return n===void 0?T(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fe(e.r),this.g=fe(e.g),this.b=fe(e.b),this}copyLinearToSRGB(e){return this.r=pe(e.r),this.g=pe(e.g),this.b=pe(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=h){return de.workingToColorSpace(nt.copy(this),e),Math.round(j(nt.r*255,0,255))*65536+Math.round(j(nt.g*255,0,255))*256+Math.round(j(nt.b*255,0,255))}getHexString(e=h){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=de.workingColorSpace){de.workingToColorSpace(nt.copy(this),t);let n=nt.r,r=nt.g,i=nt.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=de.workingColorSpace){return de.workingToColorSpace(nt.copy(this),t),e.r=nt.r,e.g=nt.g,e.b=nt.b,e}getStyle(e=h){de.workingToColorSpace(nt.copy(this),e);let t=nt.r,n=nt.g,r=nt.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL($e),this.setHSL($e.h+e,$e.s+t,$e.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($e),e.getHSL(et);let n=te($e.h,et.h,t),r=te($e.s,et.s,t),i=te($e.l,et.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};let nt=/*@__PURE__*/ new F;F.NAMES=Qe;let rt=/*@__PURE__*/ new N,it=/*@__PURE__*/ new N,at=/*@__PURE__*/ new N,ot=/*@__PURE__*/ new N,st=/*@__PURE__*/ new N,ct=/*@__PURE__*/ new N,lt=/*@__PURE__*/ new N,ut=/*@__PURE__*/ new N,dt=/*@__PURE__*/ new N,ft=/*@__PURE__*/ new N,pt=/*@__PURE__*/ new Se,mt=/*@__PURE__*/ new Se,ht=/*@__PURE__*/ new Se;var gt=class e{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),rt.subVectors(e,t),r.cross(rt);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){rt.subVectors(r,t),it.subVectors(n,t),at.subVectors(e,t);let a=rt.dot(rt),o=rt.dot(it),s=rt.dot(at),c=it.dot(it),l=it.dot(at),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ot)!==null&&ot.x>=0&&ot.y>=0&&ot.x+ot.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ot)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ot.x),s.addScaledVector(a,ot.y),s.addScaledVector(o,ot.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return pt.setScalar(0),mt.setScalar(0),ht.setScalar(0),pt.fromBufferAttribute(e,t),mt.fromBufferAttribute(e,n),ht.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pt,i.x),a.addScaledVector(mt,i.y),a.addScaledVector(ht,i.z),a}static isFrontFacing(e,t,n,r){return rt.subVectors(n,t),it.subVectors(e,t),rt.cross(it).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rt.subVectors(this.c,this.b),it.subVectors(this.a,this.b),rt.cross(it).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;st.subVectors(r,n),ct.subVectors(i,n),ut.subVectors(e,n);let s=st.dot(ut),c=ct.dot(ut);if(s<=0&&c<=0)return t.copy(n);dt.subVectors(e,r);let l=st.dot(dt),u=ct.dot(dt);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(st,a);ft.subVectors(e,i);let f=st.dot(ft),p=ct.dot(ft);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(ct,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return lt.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(lt,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(st,a).addScaledVector(ct,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_t=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,yt):yt.fromBufferAttribute(r,t),yt.applyMatrix4(e.matrixWorld),this.expandByPoint(yt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),bt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),bt.copy(e.boundingBox)),bt.applyMatrix4(e.matrixWorld),this.union(bt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yt),yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dt),Ot.subVectors(this.max,Dt),xt.subVectors(e.a,Dt),St.subVectors(e.b,Dt),Ct.subVectors(e.c,Dt),wt.subVectors(St,xt),Tt.subVectors(Ct,St),Et.subVectors(xt,Ct);let t=[0,-wt.z,wt.y,0,-Tt.z,Tt.y,0,-Et.z,Et.y,wt.z,0,-wt.x,Tt.z,0,-Tt.x,Et.z,0,-Et.x,-wt.y,wt.x,0,-Tt.y,Tt.x,0,-Et.y,Et.x,0];return!jt(t,xt,St,Ct,Ot)||(t=[1,0,0,0,1,0,0,0,1],!jt(t,xt,St,Ct,Ot))?!1:(kt.crossVectors(wt,Tt),t=[kt.x,kt.y,kt.z],jt(t,xt,St,Ct,Ot))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};let vt=[/*@__PURE__*/ new N,/*@__PURE__*/ new N,/*@__PURE__*/ new N,/*@__PURE__*/ new N,/*@__PURE__*/ new N,/*@__PURE__*/ new N,/*@__PURE__*/ new N,/*@__PURE__*/ new N],yt=/*@__PURE__*/ new N,bt=/*@__PURE__*/ new _t,xt=/*@__PURE__*/ new N,St=/*@__PURE__*/ new N,Ct=/*@__PURE__*/ new N,wt=/*@__PURE__*/ new N,Tt=/*@__PURE__*/ new N,Et=/*@__PURE__*/ new N,Dt=/*@__PURE__*/ new N,Ot=/*@__PURE__*/ new N,kt=/*@__PURE__*/ new N,At=/*@__PURE__*/ new N;function jt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){At.fromArray(e,a);let o=i.x*Math.abs(At.x)+i.y*Math.abs(At.y)+i.z*Math.abs(At.z),s=t.dot(At),c=n.dot(At),l=r.dot(At);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}let Mt=/*@__PURE__*/ new N,Nt=/*@__PURE__*/ new M,Pt=0;var Ft=class extends O{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pt++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=o,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXY(t,Nt.x,Nt.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ne(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=re(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ne(t,this.array)),t}setX(e,t){return this.normalized&&(t=re(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ne(t,this.array)),t}setY(e,t){return this.normalized&&(t=re(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ne(t,this.array)),t}setZ(e,t){return this.normalized&&(t=re(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ne(t,this.array)),t}setW(e,t){return this.normalized&&(t=re(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=re(t,this.array),n=re(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=re(t,this.array),n=re(n,this.array),r=re(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=re(t,this.array),n=re(n,this.array),r=re(r,this.array),i=re(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},It=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Lt=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Rt=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}};let zt=/*@__PURE__*/ new _t,Bt=/*@__PURE__*/ new N,Vt=/*@__PURE__*/ new N;var Ht=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?zt.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bt.subVectors(e,this.center);let t=Bt.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Bt,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vt.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bt.copy(e.center).add(Vt)),this.expandByPoint(Bt.copy(e.center).sub(Vt))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};let Ut=0,Wt=/*@__PURE__*/ new Ce,Gt=/*@__PURE__*/ new Xe,Kt=/*@__PURE__*/ new N,qt=/*@__PURE__*/ new _t,Jt=/*@__PURE__*/ new _t,Yt=/*@__PURE__*/ new N;var Xt=class e extends O{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ut++}),this.uuid=A(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(b(e)?Lt:It)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new P().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Gt.lookAt(e),Gt.updateMatrix(),this.applyMatrix4(Gt.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kt).negate(),this.translate(Kt.x,Kt.y,Kt.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Rt(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&T(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){E(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];qt.setFromBufferAttribute(n),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&E(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){E(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Jt.setFromBufferAttribute(n),this.morphTargetsRelative?(Yt.addVectors(qt.min,Jt.min),qt.expandByPoint(Yt),Yt.addVectors(qt.max,Jt.max),qt.expandByPoint(Yt)):(qt.expandByPoint(Jt.min),qt.expandByPoint(Jt.max))}qt.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Yt));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Yt.fromBufferAttribute(a,t),o&&(Kt.fromBufferAttribute(e,t),Yt.add(Kt)),r=Math.max(r,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&E(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){E(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new N,s[e]=new N;let c=new N,l=new N,u=new N,d=new M,f=new M,p=new M,m=new N,h=new N;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new N,y=new N,b=new N,x=new N;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new N,i=new N,a=new N,o=new N,s=new N,c=new N,l=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Ft(a,r,i)}if(this.index===null)return T(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}};let Zt=/*@__PURE__*/ new N,Qt=/*@__PURE__*/ new N,$t=/*@__PURE__*/ new P;var en=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Zt.subVectors(n,t).cross(Qt.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Zt),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$t.getNormalMatrix(e),r=this.coplanarPoint(Zt).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};let tn=0;var nn=class extends O{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tn++}),this.uuid=A(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new F(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=v,this.stencilZFail=v,this.stencilZPass=v,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){T(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){T(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new F().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new en().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new M().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new M().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}};let rn=/*@__PURE__*/ new N,an=/*@__PURE__*/ new N,on=/*@__PURE__*/ new N,sn=/*@__PURE__*/ new N;var cn=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){an.copy(e).add(t).multiplyScalar(.5),on.copy(t).sub(e).normalize(),sn.copy(this.origin).sub(an);let i=e.distanceTo(t)*.5,a=-this.direction.dot(on),o=sn.dot(this.direction),s=-sn.dot(on),c=sn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(an).addScaledVector(on,d),f}intersectSphere(e,t){if(e.radius<0)return null;rn.subVectors(e.center,this.origin);let n=rn.dot(this.direction),r=rn.dot(rn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let ne=S/w,re=C/w,M=1/w,ie=T-ne*D,N=E-re*D,ae=O-ne*A,oe=k-re*A,P=j-ne*te,se=ee-re*te,ce=P*oe-se*ae,le=ie*se-N*P,ue=ae*N-oe*ie;if(r){if(ce<0||le<0||ue<0)return null}else if((ce<0||le<0||ue<0)&&(ce>0||le>0||ue>0))return null;let de=ce+le+ue;if(de===0)return null;let fe=M*(ce*D+le*A+ue*te);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ln=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new F(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};let un=/*@__PURE__*/ new Ce,dn=/*@__PURE__*/ new cn,fn=/*@__PURE__*/ new Ht,pn=/*@__PURE__*/ new N,mn=/*@__PURE__*/ new N,hn=/*@__PURE__*/ new N,gn=/*@__PURE__*/ new N,_n=/*@__PURE__*/ new N,vn=/*@__PURE__*/ new N,yn=/*@__PURE__*/ new N,bn=/*@__PURE__*/ new N;var xn=class extends Xe{constructor(e=new Xt,t=new ln){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){vn.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(_n.fromBufferAttribute(s,e),a?vn.addScaledVector(_n,r):vn.addScaledVector(_n.sub(t),r))}t.add(vn)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fn.copy(n.boundingSphere),fn.applyMatrix4(i),dn.copy(e.ray).recast(e.near),!(fn.containsPoint(dn.origin)===!1&&(dn.intersectSphere(fn,pn)===null||dn.origin.distanceToSquared(pn)>(e.far-e.near)**2))&&(un.copy(i).invert(),dn.copy(e.ray).applyMatrix4(un),(n.boundingBox===null||dn.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,dn)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Cn(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Cn(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Cn(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Cn(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Sn(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;bn.copy(s),bn.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(bn);return l<n.near||l>n.far?null:{distance:l,point:bn.clone(),object:e}}function Cn(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,mn),e.getVertexPosition(c,hn),e.getVertexPosition(l,gn);let u=Sn(e,t,n,r,mn,hn,gn,yn);if(u){let e=new N;gt.getBarycoord(yn,mn,hn,gn,e),i&&(u.uv=gt.getInterpolatedAttribute(i,s,c,l,e,new M)),a&&(u.uv1=gt.getInterpolatedAttribute(a,s,c,l,e,new M)),o&&(u.normal=gt.getInterpolatedAttribute(o,s,c,l,e,new N),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new N,materialIndex:0};gt.getNormal(mn,hn,gn,t.normal),u.face=t,u.barycoord=e}return u}let wn=/*@__PURE__*/ new Se,Tn=/*@__PURE__*/ new Se,En=/*@__PURE__*/ new Se,Dn=/*@__PURE__*/ new Se,On=/*@__PURE__*/ new Ce,kn=/*@__PURE__*/ new N,An=/*@__PURE__*/ new Ht,jn=/*@__PURE__*/ new Ce,Mn=/*@__PURE__*/ new cn;var Nn=class extends xn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=`attached`,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _t),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,kn),this.boundingBox.expandByPoint(kn)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ht),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,kn),this.boundingSphere.expandByPoint(kn)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),An.copy(this.boundingSphere),An.applyMatrix4(r),e.ray.intersectsSphere(An)!==!1&&(jn.copy(r).invert(),Mn.copy(e.ray).applyMatrix4(jn),(this.boundingBox===null||Mn.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Mn)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Se,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():T(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Tn.fromBufferAttribute(r.attributes.skinIndex,e),En.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(wn.copy(t),t.set(0,0,0,0)):(wn.set(...t,1),t.set(0,0,0)),wn.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=En.getComponent(e);if(r!==0){let i=Tn.getComponent(e);On.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Dn.copy(wn).applyMatrix4(On),r)}}return t.isVector4&&(t.w=wn.w),t.applyMatrix4(this.bindMatrixInverse)}},Pn=class extends Xe{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Fn=class extends xe{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};let In=/*@__PURE__*/ new Ce,Ln=/*@__PURE__*/ new Ce;var Rn=class e{constructor(e=[],t=[]){this.uuid=A(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){T(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new Ce;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Ln;In.multiplyMatrices(i,t[r]),In.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Fn(t,e,e,s,o);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(T(`Skeleton: No bone found with UUID:`,r),i=new Pn),this.bones.push(i),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},zn=class extends xe{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bn=class e extends Xt{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Rt(c,3)),this.setAttribute(`normal`,new Rt(l,3)),this.setAttribute(`uv`,new Rt(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new N;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Vn=class e extends Xt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new N,l=new M;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Rt(a,3)),this.setAttribute(`normal`,new Rt(o,3)),this.setAttribute(`uv`,new Rt(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Hn=class e extends Xt{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Rt(u,3)),this.setAttribute(`normal`,new Rt(d,3)),this.setAttribute(`uv`,new Rt(f,2));function _(){let a=new N,_=new N,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new M,m=new N,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Un=class e extends Xt{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Rt(p,3)),this.setAttribute(`normal`,new Rt(m,3)),this.setAttribute(`uv`,new Rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Wn=class e extends Xt{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new N,d=new N,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Rt(p,3)),this.setAttribute(`normal`,new Rt(m,3)),this.setAttribute(`uv`,new Rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Gn=class e extends Xt{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new N,f=new N,p=new N;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Rt(c,3)),this.setAttribute(`normal`,new Rt(l,3)),this.setAttribute(`uv`,new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Kn(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Jn(i))i.isRenderTargetTexture?(T(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Jn(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function qn(e){let t={};for(let n=0;n<e.length;n++){let r=Kn(e[n]);for(let e in r)t[e]=r[e]}return t}function Jn(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}var Yn=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new F(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new M(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Xn(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Zn(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Qn=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},$n=class extends Qn{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:f,endingEnd:f}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case p:i=e,o=2*t-n;break;case m:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case p:a=e,s=2*n-t;break;case m:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},er=class extends Qn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},tr=class extends Qn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},nr=class extends Qn{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ar(n,t,g,y,r);i[p]=rr(x,o,_,b,m)}return i}};function rr(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ir(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ar(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=rr(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ir(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var or=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Xn(t,this.TimeBufferType),this.values=Xn(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xn(e.times,Array),values:Xn(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Zn(e.settings)&&(n.settings={inTangents:Xn(e.settings.inTangents,Array),outTangents:Xn(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new er(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $n(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case c:t=this.InterpolantFactoryMethodDiscrete;break;case l:t=this.InterpolantFactoryMethodLinear;break;case u:t=this.InterpolantFactoryMethodSmooth;break;case d:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return T(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return c;case this.InterpolantFactoryMethodLinear:return l;case this.InterpolantFactoryMethodSmooth:return u;case this.InterpolantFactoryMethodBezier:return d}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Zn(this.settings)&&(sr(this.settings.inTangents,e),sr(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(E(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(E(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){E(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){E(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&x(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){E(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===u,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Zn(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function sr(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}or.prototype.ValueTypeName=``,or.prototype.TimeBufferType=Float32Array,or.prototype.ValueBufferType=Float32Array,or.prototype.DefaultInterpolation=l;var cr=class extends or{constructor(e,t,n){super(e,t,n)}};cr.prototype.ValueTypeName=`bool`,cr.prototype.ValueBufferType=Array,cr.prototype.DefaultInterpolation=c,cr.prototype.InterpolantFactoryMethodLinear=void 0,cr.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends or{constructor(e,t,n,r){super(e,t,n,r)}};lr.prototype.ValueTypeName=`color`;var ur=class extends or{constructor(e,t,n,r){super(e,t,n,r)}};ur.prototype.ValueTypeName=`number`;var dr=class extends Qn{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ie.slerpFlat(i,0,a,c-o,a,c,s);return i}},fr=class extends or{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new dr(this.times,this.values,this.getValueSize(),e)}};fr.prototype.ValueTypeName=`quaternion`,fr.prototype.InterpolantFactoryMethodSmooth=void 0;var pr=class extends or{constructor(e,t,n){super(e,t,n)}};pr.prototype.ValueTypeName=`string`,pr.prototype.ValueBufferType=Array,pr.prototype.DefaultInterpolation=c,pr.prototype.InterpolantFactoryMethodLinear=void 0,pr.prototype.InterpolantFactoryMethodSmooth=void 0;var mr=class extends or{constructor(e,t,n,r){super(e,t,n,r)}};mr.prototype.ValueTypeName=`vector`;let hr=/* @__PURE__ */ RegExp(`[\\[\\]\\.:\\/]`,`g`),gr=/* @__PURE__ */ RegExp(`^((?:[^\\[\\]\\.:\\/]+[\\/:])*)([^\\[\\]:\\/]+)?(?:\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?)?\\.([^\\[\\]\\.:\\/]+)(?:\\[(.+)\\])?$`),_r=[`material`,`materials`,`bones`,`map`];var vr=class{constructor(e,t,n){let r=n||yr.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yr=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(hr,``)}static parseTrackName(e){let t=gr.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);_r.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){T(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){E(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){E(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){E(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){E(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){E(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){E(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){E(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;E(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){E(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){E(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yr.Composite=vr,yr.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},yr.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},yr.prototype.GetterByBindingType=[yr.prototype._getValue_direct,yr.prototype._getValue_array,yr.prototype._getValue_arrayElement,yr.prototype._getValue_toArray],yr.prototype.SetterByBindingTypeAndVersioning=[[yr.prototype._setValue_direct,yr.prototype._setValue_direct_setNeedsUpdate,yr.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yr.prototype._setValue_array,yr.prototype._setValue_array_setNeedsUpdate,yr.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yr.prototype._setValue_arrayElement,yr.prototype._setValue_arrayElement_setNeedsUpdate,yr.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yr.prototype._setValue_fromArray,yr.prototype._setValue_fromArray_setNeedsUpdate,yr.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?T(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);
/**
* @license
* Copyright 2010-2026 Three.js Authors
* SPDX-License-Identifier: MIT
*/
let I={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},L={common:{diffuse:{value:/*@__PURE__*/ new F(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:/*@__PURE__*/ new P},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/ new P},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:/*@__PURE__*/ new P}},envmap:{envMap:{value:null},envMapRotation:{value:/*@__PURE__*/ new P},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:/*@__PURE__*/ new P}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:/*@__PURE__*/ new P}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:/*@__PURE__*/ new P},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:/*@__PURE__*/ new P},normalScale:{value:/*@__PURE__*/ new M(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:/*@__PURE__*/ new P},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:/*@__PURE__*/ new P}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:/*@__PURE__*/ new P}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:/*@__PURE__*/ new P}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:/*@__PURE__*/ new F(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:/*@__PURE__*/ new N},probesMax:{value:/*@__PURE__*/ new N},probesResolution:{value:/*@__PURE__*/ new N}},points:{diffuse:{value:/*@__PURE__*/ new F(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/ new P},alphaTest:{value:0},uvTransform:{value:/*@__PURE__*/ new P}},sprite:{diffuse:{value:/*@__PURE__*/ new F(16777215)},opacity:{value:1},center:{value:/*@__PURE__*/ new M(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:/*@__PURE__*/ new P},alphaMap:{value:null},alphaMapTransform:{value:/*@__PURE__*/ new P},alphaTest:{value:0}}},br={basic:{uniforms:/*@__PURE__*/ qn([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.fog]),vertexShader:I.meshbasic_vert,fragmentShader:I.meshbasic_frag},lambert:{uniforms:/*@__PURE__*/ qn([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.fog,L.lights,{emissive:{value:/*@__PURE__*/ new F(0)},envMapIntensity:{value:1}}]),vertexShader:I.meshlambert_vert,fragmentShader:I.meshlambert_frag},phong:{uniforms:/*@__PURE__*/ qn([L.common,L.specularmap,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.fog,L.lights,{emissive:{value:/*@__PURE__*/ new F(0)},specular:{value:/*@__PURE__*/ new F(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:I.meshphong_vert,fragmentShader:I.meshphong_frag},standard:{uniforms:/*@__PURE__*/ qn([L.common,L.envmap,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.roughnessmap,L.metalnessmap,L.fog,L.lights,{emissive:{value:/*@__PURE__*/ new F(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:I.meshphysical_vert,fragmentShader:I.meshphysical_frag},toon:{uniforms:/*@__PURE__*/ qn([L.common,L.aomap,L.lightmap,L.emissivemap,L.bumpmap,L.normalmap,L.displacementmap,L.gradientmap,L.fog,L.lights,{emissive:{value:/*@__PURE__*/ new F(0)}}]),vertexShader:I.meshtoon_vert,fragmentShader:I.meshtoon_frag},matcap:{uniforms:/*@__PURE__*/ qn([L.common,L.bumpmap,L.normalmap,L.displacementmap,L.fog,{matcap:{value:null}}]),vertexShader:I.meshmatcap_vert,fragmentShader:I.meshmatcap_frag},points:{uniforms:/*@__PURE__*/ qn([L.points,L.fog]),vertexShader:I.points_vert,fragmentShader:I.points_frag},dashed:{uniforms:/*@__PURE__*/ qn([L.common,L.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:I.linedashed_vert,fragmentShader:I.linedashed_frag},depth:{uniforms:/*@__PURE__*/ qn([L.common,L.displacementmap]),vertexShader:I.depth_vert,fragmentShader:I.depth_frag},normal:{uniforms:/*@__PURE__*/ qn([L.common,L.bumpmap,L.normalmap,L.displacementmap,{opacity:{value:1}}]),vertexShader:I.meshnormal_vert,fragmentShader:I.meshnormal_frag},sprite:{uniforms:/*@__PURE__*/ qn([L.sprite,L.fog]),vertexShader:I.sprite_vert,fragmentShader:I.sprite_frag},background:{uniforms:{uvTransform:{value:/*@__PURE__*/ new P},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:I.background_vert,fragmentShader:I.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:/*@__PURE__*/ new P}},vertexShader:I.backgroundCube_vert,fragmentShader:I.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:I.cube_vert,fragmentShader:I.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:I.equirect_vert,fragmentShader:I.equirect_frag},distance:{uniforms:/*@__PURE__*/ qn([L.common,L.displacementmap,{referencePosition:{value:/*@__PURE__*/ new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:I.distance_vert,fragmentShader:I.distance_frag},shadow:{uniforms:/*@__PURE__*/ qn([L.lights,L.fog,{color:{value:/*@__PURE__*/ new F(0)},opacity:{value:1}}]),vertexShader:I.shadow_vert,fragmentShader:I.shadow_frag}};br.physical={uniforms:/*@__PURE__*/ qn([br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:/*@__PURE__*/ new P},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:/*@__PURE__*/ new P},clearcoatNormalScale:{value:/*@__PURE__*/ new M(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:/*@__PURE__*/ new P},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:/*@__PURE__*/ new P},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:/*@__PURE__*/ new P},sheen:{value:0},sheenColor:{value:/*@__PURE__*/ new F(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:/*@__PURE__*/ new P},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:/*@__PURE__*/ new P},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:/*@__PURE__*/ new P},transmissionSamplerSize:{value:/*@__PURE__*/ new M},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:/*@__PURE__*/ new P},attenuationDistance:{value:0},attenuationColor:{value:/*@__PURE__*/ new F(0)},specularColor:{value:/*@__PURE__*/ new F(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:/*@__PURE__*/ new P},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:/*@__PURE__*/ new P},anisotropyVector:{value:/*@__PURE__*/ new M},anisotropyMap:{value:null},anisotropyMapTransform:{value:/*@__PURE__*/ new P}}]),vertexShader:I.meshphysical_vert,fragmentShader:I.meshphysical_frag},(/* @__PURE__ */ new P()).set(-1,0,0,0,1,0,0,0,1),(/* @__PURE__ */ new P()).set(-1,0,0,0,1,0,0,0,1),new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let R={hips:0,spine:1,chest:2,neck:3,head:4,armL:5,foreL:6,handL:7,armR:8,foreR:9,handR:10,thighL:11,shinL:12,footL:13,thighR:14,shinR:15,footR:16,shoulderL:17,shoulderR:18,fingersL:19,fingersR:20,hair:21,lidL:22,lidR:23,jaw:24,eyeL:25,eyeR:26},xr=Object.keys(R).sort((e,t)=>R[e]-R[t]),Sr=[-1,R.hips,R.spine,R.chest,R.neck,R.shoulderL,R.armL,R.foreL,R.shoulderR,R.armR,R.foreR,R.hips,R.thighL,R.shinL,R.hips,R.thighR,R.shinR,R.chest,R.chest,R.handL,R.handR,R.head,R.head,R.head,R.head,R.head,R.head],z={pelvis:0,torso:1,head:2,lUpper:3,lFore:4,rUpper:5,rFore:6,lThigh:7,lShin:8,rThigh:9,rShin:10,rItem:11,lItem:12,static:13},Cr=[z.pelvis,z.torso,z.torso,z.head,z.head,z.lUpper,z.lFore,z.lFore,z.rUpper,z.rFore,z.rFore,z.lThigh,z.lShin,z.lShin,z.rThigh,z.rShin,z.rShin,z.torso,z.torso,z.lFore,z.rFore,z.head,z.head,z.head,z.head,z.head,z.head];function wr(e){let t=[];for(let e=0;e<27;e++){let n=new Pn;n.name=xr[e],t.push(n)}for(let n=0;n<27;n++){let r=Sr[n],i=e.p[n].clone();r>=0&&(i.sub(e.p[r]),t[r].add(t[n])),t[n].position.copy(i)}return t}let B={cloth:0,skin:1,hair:2,eye:3,gloss:4,metal:5,screen:6,reflect:7,lens:8,satin:9},Tr=new F,Er=new N,Dr=new N,Or=new P,kr=[0,0],Ar={i:[0,0,0,0],w:[1,0,0,0]},jr={x:0,y:0,w:0,h:0},Mr=/* @__PURE__ */ new Float64Array(3072),Nr=/* @__PURE__ */ new Float64Array(64),Pr=/* @__PURE__ */ new Float64Array(64),Fr=/* @__PURE__ */ new Int32Array(6144),Ir=/* @__PURE__ */ new Float64Array(3072),Lr=/* @__PURE__ */ new Int32Array(1024),Rr=/* @__PURE__ */ new Int32Array(3072),zr=/* @__PURE__ */ new Int32Array(2048);function Br(e,t){return e.length>=t?e:new Float64Array(Math.max(t,e.length*2))}function Vr(e,t){return e.length>=t?e:new Int32Array(Math.max(t,e.length*2))}let Hr=-1,Ur=0,Wr=0,Gr=0;function Kr(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0;for(let s=0;s<e.length;s+=3){let c=e[s],l=e[s+1],u=e[s+2];c<t&&(t=c),l<n&&(n=l),u<r&&(r=u),c>i&&(i=c),l>a&&(a=l),u>o&&(o=u)}let s=(t+i)/2,c=(n+a)/2,l=(r+o)/2,u=0;for(let t=0;t<e.length;t+=3){let n=e[t]-s,r=e[t+1]-c,i=e[t+2]-l,a=n*n+r*r+i*i;a>u&&(u=a)}return new Float32Array([s,c,l,Math.sqrt(u),t,n,r,i,a,o])}var qr=class{blank=jr;textured=!0;nv=0;n0=0;n1=0;cap;_pos;_nor;_col;_uv;_rect;_surf;_si;_sw;_part;_glow;_i0;_i1;views={};_idxV=null;constructor(e=2048){let t=this.cap=Math.max(64,e|0);this._pos=new Float32Array(t*3),this._nor=new Float32Array(t*3),this._col=new Float32Array(t*3),this._uv=new Float32Array(t*2),this._rect=new Float32Array(t*4),this._surf=new Float32Array(t*4),this._si=new Uint16Array(t*4),this._sw=new Float32Array(t*4),this._part=new Float32Array(t),this._glow=new Float32Array(t),this._i0=new Uint32Array(t*3),this._i1=/* @__PURE__ */ new Uint32Array(256)}reset(){this.nv=this.n0=this.n1=0,this._idxV=null}mark(){return[this.nv,this.n0,this.n1]}rollback(e){this.nv=e[0],this.n0=e[1],this.n1=e[2],this._idxV=null}get vertexCount(){return this.nv}get triangleCount(){return(this.n0+this.n1)/3}view(e,t,n){let r=this.views[e];if(r&&r.length===n&&r.buffer===t.buffer)return r;let i=t.subarray(0,n);return this.views[e]=i,i}get pos(){return this.view(`pos`,this._pos,this.nv*3)}get nor(){return this.view(`nor`,this._nor,this.nv*3)}get col(){return this.view(`col`,this._col,this.nv*3)}get uv(){return this.view(`uv`,this._uv,this.nv*2)}get rect(){return this.view(`rect`,this._rect,this.nv*4)}get surf(){return this.view(`surf`,this._surf,this.nv*4)}get si(){return this.view(`si`,this._si,this.nv*4)}get sw(){return this.view(`sw`,this._sw,this.nv*4)}get part(){return this.view(`part`,this._part,this.nv)}get glow(){return this.view(`glow`,this._glow,this.nv)}get idx(){let e=this._idxV;return e&&e[0].length===this.n0&&e[1].length===this.n1&&e[0].buffer===this._i0.buffer&&e[1].buffer===this._i1.buffer?e:this._idxV=[this._i0.subarray(0,this.n0),this._i1.subarray(0,this.n1)]}reserve(e){let t=this.nv+e;if(t<=this.cap)return;let n=this.cap;for(;n<t;)n*=2;let r=(e,t)=>{let r=new e.constructor(n*t);return r.set(e.subarray(0,this.nv*t)),r};this._pos=r(this._pos,3),this._nor=r(this._nor,3),this._col=r(this._col,3),this._uv=r(this._uv,2),this._rect=r(this._rect,4),this._surf=r(this._surf,4),this._si=r(this._si,4),this._sw=r(this._sw,4),this._part=r(this._part,1),this._glow=r(this._glow,1),this.cap=n}pushTris(e,t,n){let r=n?this._i1:this._i0,i=n?this.n1:this.n0;if(i+t>r.length){let e=r.length;for(;e<i+t;)e*=2;let a=new Uint32Array(e);a.set(r.subarray(0,i)),r=a,n?this._i1=a:this._i0=a}for(let n=0;n<t;n++)r[i+n]=e[n];n?this.n1+=t:this.n0+=t}pushVertex(e,t,n,r,i,a,o){let s=this.nv++,c=s*2,l=s*3,u=s*4,d=this._pos;d[l]=e,d[l+1]=t,d[l+2]=n;let f,p,m;typeof a.color==`number`?(a.color!==Hr&&(Tr.setHex(a.color),Hr=a.color,Ur=Tr.r,Wr=Tr.g,Gr=Tr.b),f=Ur,p=Wr,m=Gr):(a.color(e,t,n,r,i,Tr),f=Tr.r,p=Tr.g,m=Tr.b);let h=this._col;h[l]=f*o,h[l+1]=p*o,h[l+2]=m*o;let g=Ar;typeof a.skin==`number`?(g.i[0]=a.skin,g.i[1]=g.i[2]=g.i[3]=0,g.w[0]=1,g.w[1]=g.w[2]=g.w[3]=0):(g.i[0]=g.i[1]=g.i[2]=g.i[3]=0,g.w[0]=1,g.w[1]=g.w[2]=g.w[3]=0,a.skin(e,t,n,r,i,g));let _=g.w[0]+g.w[1]+g.w[2]+g.w[3];_>1e-6||(g.w[0]=1,g.w[1]=g.w[2]=g.w[3]=0,_=1);let v=0;for(let e=0;e<4;e++)(g.i[e]<0||g.i[e]>=27)&&(g.i[e]=0),g.w[e]>g.w[v]&&(v=e);let y=this._si,b=this._sw;y[u]=g.i[0],y[u+1]=g.i[1],y[u+2]=g.i[2],y[u+3]=g.i[3],b[u]=g.w[0]/_,b[u+1]=g.w[1]/_,b[u+2]=g.w[2]/_,b[u+3]=g.w[3]/_,this._part[s]=a.part??Cr[g.i[v]],this._glow[s]=a.glow??0;let x=a.rough===void 0?.8:typeof a.rough==`number`?a.rough:a.rough(e,t,n,r,i),S=a.emissive??(typeof a.bump==`function`?a.bump(e,t,n,r,i):a.bump)??0,C=this._uv,w=this._rect,T=this._surf,E=this.textured?a.tex:void 0,D=E?E.rect:this.blank;E?(E.uv(e,t,n,r,i,kr),C[c]=kr[0],C[c+1]=kr[1]):(C[c]=.5,C[c+1]=.5),w[u]=D.x,w[u+1]=D.y,w[u+2]=D.w,w[u+3]=D.h,T[u]=a.kind??0,T[u+1]=x,T[u+2]=E?E.mode:0,T[u+3]=S}grid(e,t){let{nu:n,nv:r,closed:i}=e,a=n+1,o=this.nv,s=(r+1)*a;this.reserve(s+2);let c=Mr=Br(Mr,s*3),l=Nr=Br(Nr,a),u=Pr=Br(Pr,r+1);for(let t=0;t<=r;t++){let n=t/r;u[t]=e.vWarp?e.vWarp(n):n}for(let t=0;t<a;t++){let r=t/n;l[t]=e.uWarp?e.uWarp(r):r}for(let t=0,o=0;t<=r;t++)for(let r=0;r<a;r++,o+=3)e.point(i&&r===n?l[0]:l[r],u[t],Er),c[o]=Er.x,c[o+1]=Er.y,c[o+2]=Er.z;let d=t.shade??0;for(let e=0;e<=r;e++)for(let r=0;r<a;r++){let o=(e*a+r)*3,s=i&&r===n?1:l[r];this.pushVertex(c[o],c[o+1],c[o+2],s,u[e],t,1-d*(1-u[e]))}let f=Fr=Vr(Fr,n*r*6+n*6),p=0,m=!!e.invert!=!!t.flip;for(let t=0;t<r;t++)for(let r=0;r<n;r++){if(e.skip&&e.skip(r,t))continue;let n=o+t*a+r,i=n+1,s=n+a,c=s+1;m?(f[p++]=n,f[p++]=s,f[p++]=i,f[p++]=i,f[p++]=s,f[p++]=c):(f[p++]=n,f[p++]=i,f[p++]=s,f[p++]=i,f[p++]=c,f[p++]=s)}let h=(e,r)=>{let i=0,s=0,l=0;for(let t=0;t<n;t++){let n=(e*a+t)*3;i+=c[n],s+=c[n+1],l+=c[n+2]}i/=n,s/=n,l/=n;let u=this.nv;this.pushVertex(i,s,l,.5,+!!r,t,1-d*+!r);for(let t=0;t<n;t++){let n=o+e*a+t,i=n+1;f[p++]=u,r===m?(f[p++]=n,f[p++]=i):(f[p++]=i,f[p++]=n)}};return e.cap0&&h(0,!1),e.cap1&&h(r,!0),this.computeNormals(o,this.nv,f,p),this.pushTris(f,p,+!!t.transparent),o}geo(e,t,n,r=!1){let i=e.attributes.position,a=e.attributes.normal,o=e.attributes.uv,s=this.nv,c=i.count;this.reserve(c);let l=1/0,u=-1/0,d=Mr=Br(Mr,c*3);for(let e=0;e<c;e++)Er.fromBufferAttribute(i,e),t&&Er.applyMatrix4(t),d[e*3]=Er.x,d[e*3+1]=Er.y,d[e*3+2]=Er.z,Er.y<l&&(l=Er.y),Er.y>u&&(u=Er.y);let f=n.shade??0;for(let e=0;e<c;e++){let t=d[e*3],r=d[e*3+1],i=d[e*3+2],a=u>l?(r-l)/(u-l):1,s=o?o.getX(e):0,c=o?o.getY(e):0;this.pushVertex(t,r,i,s,c,n,1-f*(1-a))}let p=e.index?e.index.array:null,m=p?p.length:c-c%3,h=Fr=Vr(Fr,m),g=0;for(let e=0;e<m;e+=3){let t=p?p[e]:e,r=p?p[e+1]:e+1,i=p?p[e+2]:e+2;h[g++]=s+t,h[g++]=s+(n.flip?i:r),h[g++]=s+(n.flip?r:i)}if(r&&a){t&&Or.getNormalMatrix(t);let e=this._nor;for(let r=0;r<a.count;r++){Dr.fromBufferAttribute(a,r),t&&Dr.applyMatrix3(Or),Dr.normalize(),n.flip&&Dr.negate();let i=(s+r)*3;e[i]=Dr.x,e[i+1]=Dr.y,e[i+2]=Dr.z}}else this.computeNormals(s,this.nv,h,g);this.pushTris(h,g,+!!n.transparent),e.dispose()}computeNormals(e,t,n,r){let i=t-e,a=this._pos,o=Rr=Vr(Rr,i*3),s=Lr=Vr(Lr,i),c=16;for(;c<i*2;)c<<=1;let l=zr=Vr(zr,c);l.fill(-1,0,c);let u=c-1;for(let t=0;t<i;t++){let n=(e+t)*3,r=Math.round(a[n]*2e4),i=Math.round(a[n+1]*2e4),c=Math.round(a[n+2]*2e4);o[t*3]=r,o[t*3+1]=i,o[t*3+2]=c;let d=(Math.imul(r,73856093)^Math.imul(i,19349663)^Math.imul(c,83492791))&u,f=-1;for(;;){let e=l[d];if(e<0){l[d]=t,f=t;break}if(o[e*3]===r&&o[e*3+1]===i&&o[e*3+2]===c){f=e;break}d=d+1&u}s[t]=f}let d=Ir=Br(Ir,i*3);d.fill(0,0,i*3);for(let t=0;t<r;t+=3){let r=n[t],i=n[t+1],o=n[t+2],c=a[r*3],l=a[r*3+1],u=a[r*3+2],f=a[i*3]-c,p=a[i*3+1]-l,m=a[i*3+2]-u,h=a[o*3]-c,g=a[o*3+1]-l,_=a[o*3+2]-u,v=p*_-m*g,y=m*h-f*_,b=f*g-p*h,x=s[r-e]*3;d[x]+=v,d[x+1]+=y,d[x+2]+=b,x=s[i-e]*3,d[x]+=v,d[x+1]+=y,d[x+2]+=b,x=s[o-e]*3,d[x]+=v,d[x+1]+=y,d[x+2]+=b}let f=this._nor;for(let t=0;t<i;t++){let n=s[t]*3,r=d[n],i=d[n+1],a=d[n+2],o=Math.sqrt(r*r+i*i+a*a)||1,c=(e+t)*3;f[c]=r/o,f[c+1]=i/o,f[c+2]=a/o}}tint(e,t,n){let r=this._pos;for(let i=e;i<t;i++)n(r[i*3],r[i*3+1],r[i*3+2],this._col,i*3)}heroArrays(){let e=this.nv,t=this.n0+this.n1,n=e>65535?new Uint32Array(t):new Uint16Array(t);return n.set(this._i0.subarray(0,this.n0)),n.set(this._i1.subarray(0,this.n1),this.n0),{pos:this._pos.slice(0,e*3),nor:this._nor.slice(0,e*3),col:this._col.slice(0,e*3),uv:this._uv.slice(0,e*2),rect:this._rect.slice(0,e*4),surf:this._surf.slice(0,e*4),si:this._si.slice(0,e*4),sw:this._sw.slice(0,e*4),idx:n,n0:this.n0}}buildHero(){return Jr(this.heroArrays())}buildCrowd(){let e=new Xt,t=this.nv;e.setAttribute(`position`,new Ft(this._pos.slice(0,t*3),3)),e.setAttribute(`normal`,new Ft(this._nor.slice(0,t*3),3)),e.setAttribute(`color`,new Ft(this._col.slice(0,t*3),3));let n=this._part.slice(0,t),r=new Float32Array(t*4);for(let e=0;e<t;e++)r[e*4]=n[e],r[e*4+1]=7,r[e*4+2]=0,r[e*4+3]=this._glow[e];e.setAttribute(`part`,new Ft(n,1)),e.setAttribute(`aInfo`,new Ft(r,4));let i=this.n0+this.n1,a=t>65535?new Uint32Array(i):new Uint16Array(i);return a.set(this._i0.subarray(0,this.n0)),a.set(this._i1.subarray(0,this.n1),this.n0),e.setIndex(new Ft(a,1)),e.computeBoundingSphere(),e.computeBoundingBox(),e}};function Jr(e){let t=new Xt;t.setAttribute(`position`,new Ft(e.pos,3)),t.setAttribute(`normal`,new Ft(e.nor,3)),t.setAttribute(`color`,new Ft(e.col,3)),t.setAttribute(`uv`,new Ft(e.uv,2)),t.setAttribute(`uvRect`,new Ft(e.rect,4)),t.setAttribute(`surf`,new Ft(e.surf,4)),t.setAttribute(`skinIndex`,new Ft(e.si,4)),t.setAttribute(`skinWeight`,new Ft(e.sw,4)),t.setIndex(new Ft(e.idx,1)),t.addGroup(0,e.n0,0),e.idx.length>e.n0&&t.addGroup(e.n0,e.idx.length-e.n0,1);let n=e.bounds;return n&&n.length>=10?(t.boundingSphere=new Ht(new N(n[0],n[1],n[2]),n[3]),t.boundingBox=new _t(new N(n[4],n[5],n[6]),new N(n[7],n[8],n[9]))):(t.computeBoundingSphere(),t.computeBoundingBox()),t}function Yr(e,t,n,r){e.i[0]=t,e.i[1]=n,e.w[0]=1-r,e.w[1]=r,e.i[2]=e.i[3]=0,e.w[2]=e.w[3]=0}function V(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function Xr(e,t,n,r,i){let a=0;for(;a<n.length&&i<n[a];)a++;let o=-1,s=1/0;if(a-1>=0){let e=Math.abs(i-n[a-1]);e<s&&(s=e,o=a-1)}if(a<n.length){let e=Math.abs(i-n[a]);e<s&&(s=e,o=a)}if(o<0||s>r){Yr(e,t[a],t[a],0);return}let c=(n[o]+r-i)/(2*r),l=c<0?0:c>1?1:c*c*(3-2*c);Yr(e,t[o],t[o+1],l)}function Zr(e,t,n){if(n<=0)return;for(let t=0;t<4;t++)e.w[t]*=1-n;for(let r=0;r<4;r++)if(e.i[r]===t&&e.w[r]>0){e.w[r]+=n;return}let r=0;for(let t=1;t<4;t++)e.w[t]<e.w[r]&&(r=t);e.i[r]=t,e.w[r]=n}let Qr=Math.PI*2;function $r(e,t,n){let r=e.length;if(n<=e[0][0])return e[0][t];if(n>=e[r-1][0])return e[r-1][t];let i=0;for(;i<r-2&&n>e[i+1][0];)i++;let a=e[Math.max(0,i-1)],o=e[i],s=e[i+1],c=e[Math.min(r-1,i+2)],l=(n-o[0])/(s[0]-o[0]),u=s[0]-o[0],d=(s[t]-a[t])/Math.max(1e-6,s[0]-a[0])*u,f=(c[t]-o[t])/Math.max(1e-6,c[0]-o[0])*u,p=l*l,m=p*l;return(2*m-3*p+1)*o[t]+(m-2*p+l)*d+(-2*m+3*p)*s[t]+(m-p)*f}function ei(e,t,n,r,i,a=2){let o=Math.sin(e),s=Math.cos(e),c=o>=0?t:n,l=s>=0?r:i,u=Math.abs(o)/c,d=Math.abs(s)/l;return a===2?1/Math.sqrt(u*u+d*d):1/(u**+a+d**+a)**(1/a)}let ti=(e,t)=>Math.exp(-(e*e)/(t*t)),ni=(e,t)=>{let n=(e-t)%Qr;return n>Math.PI&&(n-=Qr),n<-Math.PI&&(n+=Qr),n};new N,new N,new N;let ri=new N,ii=new N,ai=new N,oi=new N,si=new N(0,0,-1);function ci(e,t,n,r,i,a){ri.subVectors(e.b,e.a),ii.subVectors(e.c,e.b),t<=1?n.copy(e.a).addScaledVector(ri,t):n.copy(e.b).addScaledVector(ii,t-1);let o=ai.copy(ri).normalize(),s=oi.copy(ii).normalize(),c=V(.8,1.2,t);r.copy(o).multiplyScalar(1-c).addScaledVector(s,c).normalize(),i.copy(si).addScaledVector(r,-si.dot(r)).normalize(),a.crossVectors(r,i).normalize()}function li(e,t,n,r=0){return ei(t,$r(e.keys,1,n)+r,$r(e.keys,2,n)+r,$r(e.keys,3,n)+r,$r(e.keys,4,n)+r)}function ui(e){let t=e.sex===`f`,n=e.height,r=n/1.72,i=e.build===`slim`?0:e.build===`avg`?1:2,a=e.age===`elder`,o=e.age===`student`,s=e.stoop??(a?.45:0),c=Math.max(0,i-1),l=Math.max(0,1-i),u=1+.16*c-.07*l-(o?.04:0),d=(t?.88:1)*(1+.05*c-.03*l)*(o?.95:1)*(a?.96:1),f=(t?1.07:1)*(1+.1*c-.04*l),p=(t?.86:1)*(1+.3*c-.06*l)*(a?1.1:1),m=(.045*c+(a&&!t?.03:0)+(a&&t?.02:0))*r,h=t?(o?.022:a?.026:.032)*r*(1+.3*c):0,g=t?0:(.01+.004*c)*r,_=(t?.03:.02)*r*(1+.3*c),v=[];for(let e=0;e<27;e++)v.push(new N);let y=n/(o?7:a?7.15:t?7.25:7.4),b=.185*r*d,x=(t?.093:.09)*r*(1+.08*c),S=-.05*s*r;v[R.hips].set(0,.555*n,0),v[R.spine].set(0,.625*n,0),v[R.chest].set(0,.73*n,S*.3),v[R.neck].set(0,.848*n,.012*r+S),v[R.head].set(0,n-y*.93,-.004*r+S*1.4),v[R.shoulderL].set(-.03*r,.83*n,-.02*r+S*.6),v[R.shoulderR].set(.03*r,.83*n,-.02*r+S*.6);let C=.792*n,w=.643*n,T=.5*n;for(let e of[-1,1]){let i=e<0?R.armL:R.armR,a=e<0?R.foreL:R.foreR,o=e<0?R.handL:R.handR;v[i].set(e*b,C,S*.6),v[a].set(e*(b+.024*r+.01*c*r),w,.012*r+S*.4),v[o].set(e*(b+.04*r+.018*c*r),T,-.012*r),v[e<0?R.fingersL:R.fingersR].copy(v[o]).add(new N(e*.004*r,-.098*r*(t?.93:1),-.004*r));let s=e<0?R.thighL:R.thighR,l=e<0?R.shinL:R.shinR,u=e<0?R.footL:R.footR;v[s].set(e*x,.53*n,0),v[l].set(e*x*.97,.287*n,-.006*r),v[u].set(e*x*.95,.05*n,.012*r)}let E=new N(0,n-y*.455,-.008*r+S*1.5),D=y*(t?.315:.325)*(1+.03*c),O=new N(D,y*.455,y*.39);v[R.hair].set(0,E.y+O.y*.2,E.z+O.z*.9),v[R.jaw].set(0,E.y-O.y*.25,E.z+O.z*.1),v[R.lidL].set(-D*.4,E.y-y*.05,E.z-O.z*.9),v[R.lidR].set(D*.4,E.y-y*.05,E.z-O.z*.9),v[R.eyeL].set(-D*.4,E.y-y*.06,E.z-O.z*.75),v[R.eyeR].set(D*.4,E.y-y*.06,E.z-O.z*.75);let k=e=>e*n,A=e=>e*r,j=[[k(.468),A(.022)*f,A(.018)*u,A(.028)*u,A(.01)],[k(.492),A(.082)*f,A(.042)*u,A(.078)*u,A(.008)],[k(.515),A(.152)*f,A(.062)*u,A(.1)*u,A(.005)],[k(.54),A(.166)*f,A(.072)*u,A(.103)*u,A(.002)],[k(.56),A(.163)*f,A(.09)*u,A(.093)*u,0],[k(.6),A(.15)*(f*.5+p*.5),A(.092)*u,A(.083)*u,A(-.003)],[k(.625),A(.143)*p,A(.094)*u,A(.08)*u,A(-.004)],[k(.665),A(.148)*(p*.4+d*.6),A(.1)*u,A(.085)*u,A(-.004)],[k(.72),A(.16)*d*u,A(.108)*u,A(.093)*u,A(-.008)+S*.4],[k(.77),A(.168)*d*u,A(.102)*u,A(.1)*u,A(-.01)+S*.6],[k(.8),A(.17)*d*u,A(.09)*u,A(.1)*u,A(-.006)+S*.8],[k(.818),A(.162)*d,A(.076)*u,A(.09)*u,A(0)+S*.9],[k(.836),A(.132)*d,A(.061),A(.075),A(.006)+S],[k(.848),A(.095),A(.052),A(.06),A(.011)+S],[k(.855),A(.064),A(.047),A(.052),A(.014)+S]];if(t)for(let e of j)e[0]>k(.64)&&e[0]<k(.82)&&(e[2]*=.95);let ee=(1+.14*c-.08*l)*(t?.86:1)*(o?.92:1)*(a?.94:1),te=e=>e*r*ee,ne=[];for(let e of[-1,1]){let t=e<0?R.armL:R.armR,n=e<0?R.foreL:R.foreR,r=e<0?R.handL:R.handR,i=(t,n)=>e>0?[t,n]:[n,t],a=(e,t,n,r,a)=>[e,...i(te(t),te(n)),te(r),te(a)];ne.push({side:e,a:v[t].clone(),b:v[n].clone(),c:v[r].clone(),tMin:-.2,keys:[a(-.2,.03,.03,.035,.035),a(-.1,.04,.032,.044,.045),a(.02,.046,.037,.048,.05),a(.25,.048,.04,.046,.05),a(.55,.04,.039,.046,.043),a(.85,.036,.035,.036,.038),a(1,.035,.034,.034,.038),a(1.18,.039,.037,.038,.036),a(1.5,.032,.031,.031,.029),a(1.85,.021,.021,.028,.027),a(2,.019,.019,.027,.026)],bones:[e<0?R.shoulderL:R.shoulderR,t,n,r]})}let re=(1+.15*c-.08*l)*(t?.97:1)*(o?.93:1)*(a?.92:1),M=e=>e*r*re,ie=[];for(let e of[-1,1]){let n=e<0?R.thighL:R.thighR,r=e<0?R.shinL:R.shinR,i=e<0?R.footL:R.footR,a=(t,n)=>e>0?[t,n]:[n,t],o=(e,t,n,r,i)=>[e,...a(M(t),M(n)),M(r),M(i)],s=t?1.06:1;ie.push({side:e,a:v[n].clone(),b:v[r].clone(),c:v[i].clone(),tMin:-.16,keys:[o(-.16,.078*s,.05,.082,.088),o(0,.086*s,.058,.084,.088*s),o(.15,.083*s,.064*s,.08,.082),o(.45,.07,.064,.07,.068),o(.78,.054,.053,.058,.052),o(.98,.048,.047,.056,.046),o(1.12,.047,.045,.048,.05),o(1.3,.05,.047,.044,.064),o(1.55,.042,.039,.036,.048),o(1.8,.031,.03,.03,.033),o(2,.03,.028,.03,.032)],bones:[R.hips,n,r,i]})}let ae=(t?.047:.056)*r*(1+.1*c),oe=new N(0,.815*n,.012*r+S*.9),P=new N(0,E.y-O.y*.35,E.z+O.z*.28);return{H:n,s:r,female:t,mass:i,elder:a,student:o,stoop:s,joints:{p:v,height:n,headC:E,headR:O},torsoKeys:j,torsoBottom:j[0][0],torsoTop:j[j.length-1][0],bust:h,belly:m,glutes:_,pecs:g,arms:[ne[0],ne[1]],legs:[ie[0],ie[1]],neckBase:oe,neckTop:P,neckR:ae,headC:E,headR:O,headH:y,handLen:.19*r*(t?.92:1),handW:.085*r*(t?.9:1)*(1+.05*c),footLen:.255*r*(t?.92:1),footW:.095*r*(t?.92:1)}}function H(e,t){return $r(e.torsoKeys,4,t)}function di(e,t,n,r=!1){let i=e.torsoKeys,a=$r(i,1,n),o=ei(t,a,a,$r(i,2,n),$r(i,3,n),2+.45*V(e.H*.5,e.H*.6,n)*(1-V(e.H*.8,e.H*.84,n))),s=e.H,c=Math.cos(t);if(e.bust>0||e.pecs>0){let i=n-s*(e.female?.735:.76),a=i>0?ti(i,s*.045):ti(i,s*(e.female?.022:.03)),c=e.female?.44:.5,l=ti(ni(t,c),.34)+ti(ni(t,-c),.34);r&&Math.abs(ni(t,0))<c&&(l=Math.max(l,ti(0,1)*.98)),o+=(e.bust+e.pecs)*a*l}if(e.belly>0){let t=ti(n-s*.6,s*.06);o+=e.belly*t*Math.max(0,c)**1.5}{let r=n-s*.49,i=r>0?ti(r,s*.035):ti(r,s*.02),a=ti(ni(t,Math.PI-.5),.45)+ti(ni(t,Math.PI+.5),.45);o+=e.glutes*i*a}r||(o-=.005*e.s*ti(ni(t,Math.PI),.12)*ti(n-s*.68,s*.1));{let r=ti(n-s*.775,s*.04),i=ti(ni(t,Math.PI-.55),.3)+ti(ni(t,Math.PI+.55),.3);o+=.008*e.s*r*i}if(r&&n<s*.61){let r=fi(e,t,n)+.006*e.s;o+=Math.max(0,r-o)*V(s*.61,s*.545,n)}return o}function fi(e,t,n){let r=Math.sin(t),i=-Math.cos(t),a=H(e,n),o=0;for(let t of e.legs){let e=t.a.y-t.b.y,s=(t.a.y-n)/e;if(s<-.2||s>1.1)continue;let c=$r(t.keys,t.side>0?1:2,s),l=$r(t.keys,3,s),u=$r(t.keys,4,s),d=Math.abs(r)*c+Math.max(0,-i)*l*0+(i<0?l:u)*Math.abs(i),f=Math.max(.01,d/Math.max(.7,Math.abs(r)+Math.abs(i))),p=t.a.x+(t.b.x-t.a.x)*Math.max(0,s),m=t.a.z+(t.b.z-t.a.z)*Math.max(0,s)-a,h=p*r+m*i,g=p-h*r,_=m-h*i,v=f*f-(g*g+_*_);v<=0||(o=Math.max(o,h+Math.sqrt(v)))}return o}function pi(e,t,n,r){let i=e.joints.p,a=(i[R.hips].y+i[R.spine].y)*.5+.02*e.s,o=(i[R.spine].y+i[R.chest].y)*.5,s=e.neckBase.y+.02*e.s;Xr(r,[R.neck,R.chest,R.spine,R.hips],[s,o,a],.06*e.s,n);let c=Math.sin(t),l=V(.3,.95,Math.abs(c))*V(e.H*.72,e.H*.81,n);l>0&&Zr(r,c>0?R.shoulderR:R.shoulderL,l*.55);let u=V(e.H*.54,e.H*.47,n)*(.25+.2*Math.abs(Math.cos(t)));u>0&&Zr(r,c>0?R.thighR:R.thighL,u*V(.05,.4,Math.abs(c)+.2))}function mi(e,t,n){let[r,i,a,o]=e.bones;t<.4?Yr(n,r,i,V(-.2,.12,t)):t<1.6?Yr(n,i,a,V(.88,1.12,t)):Yr(n,a,o,V(1.9,2.05,t))}let hi=Math.PI*2,U=(e,t)=>Math.exp(-(e*e)/(t*t)),gi=(e,t,n)=>e+(t-e)*n,_i=(e,t,n)=>e<t?t:e>n?n:e;function vi(e,t){let n=Math.max(0,1-t*t);return e.eyeD-e.eyeH*n**.62*(1-.14*t)-e.tilt*t}function yi(e,t){let n=Math.max(0,1-t*t);return e.eyeD+e.eyeH*.62*n**.9*(1+.12*t)-e.tilt*t}function bi(e,t){return e.mouthD-e.smile*.011*t*t+.0015*U(t,.35)}function xi(e,t){let n=Math.min(1,Math.abs(t));return e.full*(.02*(1-n*n)**.55+.0042*U(n-.3,.16)-.0034*U(t,.09))*(1-V(.92,1,n)*0)}function Si(e,t){let n=Math.min(1,Math.abs(t));return e.full*.029*(1-n*n)**.62}function Ci(e,t){let n=e.face,r=t.female,i=t.headH*(.975+.05*n.length),a=n.jaw,o=+!!t.student,s=i/.23,c=!r,l=(r?.86:.93)+.16*a,u=.37+.012*a,d=[[0,0,0,0,0],[.02,.13,.12,.15,.006],[.06,.225,.212,.27,.006],[.13,.292,.296,.36,.005],[.22,.322,.345,.41,.003],[.31,.333,.377,.43,.001],[.4,.33,.399,.425,0],[.47,.327,.406,.4,0],[.53,.33,.399,.372,0],[.6,.326+.012*(n.cheek-.5),.396,.325,0],[.67,.312-.008*(1-a),.4,.255,0],[.75,.286*gi(1,l,.5),.404,.17,.002],[.83,.25*l,.396,.1,.006],[.9,.206*l,u+.008,.055,.013],[.95,.156*gi(.92,1.12,a),u-.012,.035,.019],[.985,.092*gi(.92,1.15,a),u-.058,.025,.025],[1,.035,u-.12,.018,.03]],f=+!!r+.5*o,p=d.map(e=>{let n=V(.55,.95,e[0]),r=1-f*(.045*n+.06*V(.82,.97,e[0]));return[e[0],e[1]*i*(1+.02*(t.mass-1))*r,e[2]*i,e[3]*i,e[4]*i]});if(t.mass>1)for(let e of p)e[0]>.6&&(e[1]*=1+.06*(t.mass-1)*V(.6,.9,e[0]));let m=n.eyeSize,h=.7+.6*n.lips,g={eyeT:.355*n.eyeGap,eyeD:.52+.01*(n.length-.5),eyeW:.158*m*(r?1.04:1),eyeH:.0235*m*(.82+.34*n.lid)*(t.elder?.85:1)*(r?1.06:1),tilt:n.eyeTilt*.05,irisR:.0058*s*(.95+.1*m),irisDrop:.004,browD:.448-.012*n.browArch,browIn:.1,browOut:.56,noseTipD:.665+.03*n.noseL,noseBaseD:.695+.025*n.noseL,noseW:.135*(.85+.35*n.noseW),mouthD:.782+.012*n.noseL,mouthW:.232*n.mouthW*(r?.96:1),chinD:.975,Theta:1.15,d0:.1,d1:1.06,mPerRad:.4*i,mPerD:i,full:h,smile:n.smile},_=1-_i((n.lid-.2)/.5,0,1),v={crownY:t.H,cz:t.headC.z,hh:i,s,keys:p,nF:2.25,lay:g,face:n,female:r,male:c,elder:t.elder,sock:.0034*s,browRidge:(r?.0012:.0026)*s*(t.elder?1.25:1)*(o?.7:1),frontal:(8e-4+8e-4*o+(r?6e-4:0))*s,temple:.0026*s*(t.mass>1.5?.4:1),cheekBone:(.0028+.0036*n.cheek)*s,cheekFat:(.0015+.003*o+(r?.0012:0)+.0022*Math.max(0,t.mass-1))*s,buccal:(t.mass>1.4||o?3e-4:.0014+(t.elder?.001:0)+(t.mass<.5?6e-4:0))*s,muzzle:.0036*s,naso:(35e-5+.0012*n.wrinkles+(t.elder?6e-4:0)+4e-4*Math.max(0,n.smile))*s,lipUp:(.0014+.0016*n.lips)*s,lipLo:(.0019+.0022*n.lips)*s,crease:9e-4*s,chin:(r?.0024:.0034)*s,chinSq:c?8e-4*s*(.5+a):0,jawAngle:(c?.0022*(.5+a):6e-4)*s,lidTm:.00105*s,lidUpMax:(.0024+.0014*_+(t.elder?8e-4:0))*s,lidLoMax:.0017*s,lidCrease:(1-_)*55e-5*s,lidCreaseD:.009+.008*n.lid,aegyo:r&&!t.elder?6e-4*s:2e-4*s,eyes:[{c:new N,r:.0122*s*(.94+.06*m),side:-1},{c:new N,r:.0122*s*(.94+.06*m),side:1}]};for(let e of v.eyes){let t=e.side*g.eyeT,n=g.eyeD+.003,r=Ei(v,t,n)-.0011*s,a=v.crownY-n*i;e.c.set(Math.sin(t)*r,a,ki(v,n)-Math.cos(t)*r+e.r)}return v}function wi(e,t,n){let r=e.length;if(n<=e[0][0])return e[0][t];if(n>=e[r-1][0])return e[r-1][t];let i=0;for(;i<r-2&&n>e[i+1][0];)i++;let a=e[Math.max(0,i-1)],o=e[i],s=e[i+1],c=e[Math.min(r-1,i+2)],l=(n-o[0])/(s[0]-o[0]),u=s[0]-o[0],d=(s[t]-a[t])/Math.max(1e-6,s[0]-a[0])*u,f=(c[t]-o[t])/Math.max(1e-6,c[0]-o[0])*u,p=l*l,m=p*l;return(2*m-3*p+1)*o[t]+(m-2*p+l)*d+(-2*m+3*p)*s[t]+(m-p)*f}let Ti=(e,t)=>{let n=(e-t)%hi;return n>Math.PI&&(n-=hi),n<-Math.PI&&(n+=hi),n};function Ei(e,t,n){let r=e.keys,i=wi(r,1,n),a=wi(r,2,n),o=wi(r,3,n),s=Math.sin(t),c=Math.cos(t),l=c>=0?a:o;if(i<1e-5||l<1e-5)return 0;let u=c>=0?e.nF-.2*V(.35,.62,n)-.33*V(.62,.9,n):2,d=Math.abs(s)/i,f=Math.abs(c)/l;return 1/(d**+u+f**+u)**(1/u)}function Di(e,t,n){let r=e.lay,i=t/r.mouthW,a=Math.abs(i);if(a>1.8)return 0;let o=bi(r,Math.min(1.2,a)),s=n-o,c=1-V(.8,1.22,a),l=0;if(s<0){let t=Math.max(.004,xi(r,i)),n=-s/t,a;a=n<=1?.32+.68*Math.sin(Math.min(1,n/.78)*Math.PI*.5)**.8*(n>.78?1-.1*(n-.78)/.22:1):.9*(1-V(1,2.3,n))-.18*U(n-1.9,.5),l+=e.lipUp*a*c}else{let t=s/Math.max(.005,Si(r,i)),n;n=t<=1?.3+.7*Math.sin(Math.min(1,t/.5)*Math.PI*.5)*(t>.5?1-.42*V(.5,1,t):1):.58*(1-V(1,1.75,t))-.55*U(t-2,.55),l+=e.lipLo*n*c}l-=e.crease*U(s,.0022)*(1-V(.75,1.1,a)),l-=.0011*e.s*U(a-1.02,.14)*U(s,.012);let u=r.noseBaseD+.006,d=o-xi(r,i);if(n>u-.01&&n<d+.004){let r=V(u-.01,u+.012,n)*(1-V(d-.002,d+.004,n));l+=r*e.s*(-55e-5*U(t,.024)+35e-5*U(Math.abs(t)-.052,.02))}return l}function Oi(e,t,n){let r=Ei(e,t,n);if(Math.cos(t)<=0)return r;let i=e.lay,a=e.s,o=Ti(t,0),s=Math.abs(o),c=i.mPerRad;{let t=(s-i.eyeT)*c/(i.eyeW*c*1.45),o=(n-(i.eyeD-.004))*e.hh/(n<i.eyeD?.017*a:.013*a);r-=e.sock*Math.exp(-(t*t+o*o))}if(r+=e.browRidge*U(s-(i.eyeT-.03),.27)*U(n-(i.browD+.012),.032),r+=e.browRidge*.6*U(o,.1)*U(n-.462,.03),r+=e.frontal*U(s-.34,.24)*U(n-.27,.08),r-=e.temple*U(s-1.18,.22)*U(n-.38,.09),r+=e.cheekBone*U(s-.74,.22)*U(n-.6,.05),r+=e.cheekBone*.35*U(s-1.15,.2)*U(n-.58,.035),r-=e.buccal*U(s-.9,.22)*U(n-.765,.07),r+=e.cheekFat*U(s-.55,.28)*U(n-.72,.075),r+=e.muzzle*U(o,.42)*U(n-.785,.075),s<.6&&n>.62&&n<.9){let t=i.noseW*1.18*c,o=(i.noseBaseD-.012)*e.hh,l=i.mouthW*1.32*c,u=(i.mouthD+.04)*e.hh,d=s*c,f=n*e.hh,p=l-t,m=u-o,h=_i(((d-t)*p+(f-o)*m)/(p*p+m*m),0,1),g=t+p*h,_=o+m*h,v=(d-g)*m-(f-_)*p>0?1:-1,y=Math.hypot(d-g,f-_),b=V(-.05,.1,h)*(1-V(.85,1.15,h));r-=e.naso*U(y,.0022*a)*b,v>0&&(r+=e.naso*.9*U(y-.0042*a,.0038*a)*b)}return r+=Di(e,o,n),r+=e.chin*U(o,.27)*U(n-.935,.042),e.chinSq&&(r+=e.chinSq*U(s-.13,.085)*U(n-.95,.03)),r+=e.jawAngle*U(s-1.22,.2)*U(n-.885,.05),r}function ki(e,t){return e.cz+wi(e.keys,4,t)}function Ai(e,t){let n=e.lay,r=Ti(t,0);return{e:r<0?e.eyes[0]:e.eyes[1],q:(Math.abs(r)-n.eyeT)/n.eyeW}}function ji(e,t,n){let r=e.lay,i=_i(t,-1,1),a=vi(r,i),o=yi(r,i);if(n<=a){let r=a-n,o=e.lidTm+(e.lidUpMax-e.lidTm)*V(0,.03,r);return o-=e.lidCrease*U(r-e.lidCreaseD*(1-.25*i*i),.0045)*(1-V(.7,1.05,Math.abs(t))),o}if(n>=o){let r=n-o;return e.lidTm*.9+(e.lidLoMax-e.lidTm*.9)*V(0,.03,r)+e.aegyo*U(r-.009,.007)*(1-V(.6,1.05,Math.abs(t)))}return 0}function Mi(e,t,n){let r=n-(e.lay.eyeD-.002),i=r<0?.046:.036;return 1-V(.78,1.18,Math.hypot(t/(t<0?1.28:1.35),r/i))}let Ni=new N,Pi=new N;function Fi(e,t,n,r,i){let a=Ei(e,n,r);return Pi.set(Math.sin(n)*a,e.crownY-r*e.hh,ki(e,r)-Math.cos(n)*a),i.subVectors(Pi,t.c).normalize()}function Ii(e,t,n,r,i,a){return Fi(e,t,n,r,Ni),a.copy(t.c).addScaledVector(Ni,t.r+i)}let Li=new N,Ri=new N;function zi(e,t,n,r){let i=Oi(e,t,n),a=e.crownY-n*e.hh;if(Li.set(Math.sin(t)*i,a,ki(e,n)-Math.cos(t)*i),Math.cos(t)>.3){let{e:a,q:o}=Ai(e,t),s=Mi(e,o,n);if(s>0){Ii(e,a,t,n,ji(e,o,n),Ri);let c=ki(e,n),l=Math.hypot(Ri.x,Ri.z-c)>=i?s:s*V(.55,1,s);r.lerpVectors(Li,Ri,l);let u=a.r+e.lidTm*.85,d=r.x-a.c.x,f=r.y-a.c.y,p=r.z-a.c.z,m=Math.hypot(d,f,p);return m<u&&p<0&&r.set(a.c.x+d/m*u,a.c.y+f/m*u,a.c.z+p/m*u),r}}return r.copy(Li)}function Bi(e,t,n,r=!0){return r?(zi(e,t,n,Vi),Math.hypot(Vi.x,Vi.z-ki(e,n))):Ei(e,t,n)}let Vi=new N;function W(e,t,n,r,i,a=!0){let o=e.crownY-n*e.hh;if(!a){let a=Ei(e,t,n)+r;return i.set(Math.sin(t)*a,o+(r>0&&n<.05?r*(1-n/.05):0),ki(e,n)-Math.cos(t)*a)}return zi(e,t,n,i),r!==0&&(i.x+=Math.sin(t)*r,i.z-=Math.cos(t)*r),i}function Hi(e,t,n,r){r[0]=.5+Ti(t,0)/(2*e.Theta),r[1]=1-(n-e.d0)/(e.d1-e.d0)}let Ui=new N,Wi=new N,Gi=new N,Ki=new N;function qi(e,t,n,r,i=0){let a=.004,o=.0035;W(e,t-a,n,0,Ui),W(e,t+a,n,0,Wi),Wi.sub(Ui);let s=i>0?n:Math.max(0,n-o),c=i<0?n:Math.min(1,n+o);W(e,t,s,0,Ki),W(e,t,c,0,Gi),Gi.sub(Ki),r.crossVectors(Gi,Wi).normalize(),W(e,t,n,0,Ui);let l=Ui.x,u=Ui.z-ki(e,n);return r.x*l+r.z*u<0&&l*l+u*u>1e-8&&r.negate(),r}function Ji(e){let t=[];if(e===0){for(let e=0;e<3;e++)t.push(-Math.PI+e/3*(Math.PI-1.2));for(let e=-1.2;e<1.199999;e+=.1715)t.push(e);for(let e=0;e<=3;e++)t.push(1.2+e/3*(Math.PI-1.2))}else{for(let e=0;e<2;e++)t.push(-Math.PI+e/2*(Math.PI-1));for(let e=-1;e<1-1e-6;e+=.4)t.push(e);for(let e=0;e<=2;e++)t.push(1+e/2*(Math.PI-1))}return t}function Yi(e){return e===0?[0,.06,.17,.3,.41,.48,.525,.57,.62,.67,.72,.765,.8,.845,.9,.955,1]:[0,.12,.3,.46,.6,.72,.84,.94,1]}let Xi=[0,.08,.17,.26,.34,.4,.445,.475,.495,.505,.51,.515,.525,.555,.6,.645,.705,.74,.76,.78,.78,.795,.815,.85,.9,.945,.978,1],Zi=[0,1,2,3,4,5,6,13,14,15,16,17,22,23,24,25,26,27],Qi=[0,2,4,6,13,15,17,23,25,27],$i=1.95;function ea(e,t){let n=e.lay,r=Math.abs(t),i=Xi.slice();i[16]=n.noseBaseD+.006;let a=(r-n.eyeT)/n.eyeW,o=Math.abs(a),s=o<=1?1:1-V(1,a>0?2.7:2.25,o);if(s>0){let t=_i(a,-1,1),r=vi(n,t),o=yi(n,t),c=[Math.max(r-(.029+.008*e.face.lid),i[6]+.006),r-.012,r-.0035,r,o,o+.0035,o+.026];for(let e=0;e<7;e++)i[7+e]=gi(i[7+e],c[e],s)}let c=t/n.mouthW,l=Math.abs(c),u=l<=1?1:1-V(1,1.75,l);if(u>0){let e=_i(c,-1,1),t=bi(n,e),r=xi(n,e),a=Si(n,e),o=[0,t-r,t,t,t+a*.5,t+a,t+a+.032];o[0]=gi(i[16],o[1],.5);for(let e=0;e<7;e++)i[17+e]=gi(i[17+e],o[e],u);i[17]=Math.max(i[17],i[16]+.008)}for(let e=1;e<i.length;e++)i[e]<i[e-1]&&(i[e]=i[e-1]);return i}function ta(e){let t=e.lay,n=t.eyeT-t.eyeW,r=t.eyeT+t.eyeW,i=[n*.36,n*.7];for(let e of[-1,-.5,.05,.55,1])i.push(t.eyeT+e*t.eyeW);for(let e=1;e<=6;e++)i.push(r+($i-r)*(e/6)**.92);let a=[...i.map(e=>-e).reverse(),0,...i];return{th:a,eyeCol:a.map(e=>{let n=(Math.abs(e)-t.eyeT)/t.eyeW;return n>=-1.0001&&n<=1.0001})}}let na=new N,G=new N,ra=new F;function ia(e,t,n,r,i=!1,a=!1){let o=e.lay,s=Math.max(0,Math.cos(t)),c=Math.abs(t)/o.mouthW,l=bi(o,Math.min(1,c)),u=V(l-.004,l+.05,n)*V(.1,.5,s)*(1-V(.985,1,n)*.3);i&&(u=Math.max(u,1-V(.9,1.4,c))),a&&(u=0),Yr(r,R.head,R.jaw,u)}function aa(e,t,n,r,i){i.setHex(t);let a=Math.abs(Ti(n,0)),o=U(a-.6,.3)*U(r-.66,.08)*.1+U(a,.12)*U(r-.66,.05)*.08+U(a,.25)*U(r-.93,.04)*.04;i.r+=o*.32,i.g-=o*.1,i.b-=o*.08;let s=V(.93,1,r)*(1-Math.cos(n)*.3)*.16;if(e){let t=e.lay;s+=.16*U(a-(t.eyeT-t.eyeW*.95),.06)*U(r-t.eyeD,.03),s+=.08*U(a-t.eyeT,.2)*U(r-(vi(t,0)-.03),.014),s+=.1*U(a,.09)*U(r-(t.noseBaseD+.01),.012);let n=a/t.mouthW;if(s+=.14*U(n-1.03,.14)*U(r-bi(t,1),.012),s+=.08*U(a,.25)*U(r-(t.mouthD+.065),.014),s+=.06*U(a-1.55,.18)*U(r-.58,.1),e.male&&!e.elder){let e=V(.7,.8,r)*U(a,1)*(1-U(n,.9)*U(r-t.mouthD,.03));i.r-=.03*e,i.g-=.015*e}}return i.multiplyScalar(1-Math.min(.45,s)),i}function oa(e,t,n){let r=e.lay,i=Math.abs(t),a=.54;a-=.1*U(i,.45)*U(n-.33,.12),a-=.12*U(i,.12)*U(n-.62,.08),a-=.05*U(i,.3)*U(n-.94,.04);let o=i/r.mouthW,s=bi(r,Math.min(1,o));return(1-V(.85,1.1,o))*(n>s-xi(r,o)-.003&&n<s+Si(r,o)+.003)&&(a=e.face.lipColor?.24:.36),a}function*sa(e){e.lod===0?yield*ca(e):ha(e)}function*ca(e){let{m:t,h:n,faceRect:r,cover:i}=e,a=n.lay,{th:o,eyeCol:s}=ta(n),c=o.length-1,l=o.map(e=>ea(n,e)),u=Xi.length-1,d=e=>e<0?n.eyes[0]:n.eyes[1],f=[];for(let e=0;e<=c;e++){let t=o[e],r=[];for(let i=0;i<=u;i++){let a=l[e][i],o=new N;if(s[e]&&i>=9&&i<=12){let e=i===10||i===11?35e-5*n.s:i===9?n.lidTm:n.lidTm*.9;Ii(n,d(t),t,a,e,o)}else zi(n,t,a,o);r.push(o)}f.push(r)}let p=o.findIndex(e=>e>a.eyeT+a.eyeW+.1),m=c-p,h=Xi.map((e,t)=>t),g=e=>e<.52||e>a.noseBaseD-.012?-1:.09,_=(c,u,d,p)=>{let m=[];for(let e=c;e<=u;e++)m.push(e);let h=m.map(e=>d.map(t=>f[e][t].clone()));for(let[e,t]of p){let n=m.indexOf(e);if(!(n<0))for(let r=0;r<d.length;r++){if(t.includes(d[r]))continue;let i=r,a=r;for(;i>0&&!t.includes(d[i]);)i--;for(;a<d.length-1&&!t.includes(d[a]);)a++;let o=l[e][d[i]],s=l[e][d[a]],c=(l[e][d[r]]-o)/Math.max(1e-6,s-o);h[n][r].lerpVectors(h[n][i],h[n][a],c)}}let _=m.length-1,v=d.length-1,y=(e,t)=>!!i&&i(o[m[e]],l[m[e]][d[t]]),b=(e,t)=>{let n=l[m[e]][d[t]],r=g(n);return r>0&&Math.abs(o[m[e]])<r-.012},x=(e,t)=>!!(s[m[e]]&&s[m[e+1]]&&d[t]===10&&d[t+1]===11||y(e,t)&&y(e+1,t)&&y(e,t+1)&&y(e+1,t+1)||b(e,t)&&b(e+1,t)&&b(e,t+1)&&b(e+1,t+1)),S=[0,0],C=(e,t)=>[Math.round(e*_),Math.round(t*v)],w=t.grid({nu:_,nv:v,closed:!1,point:(e,t,n)=>{let[r,i]=C(e,t);return n.copy(h[r][i])},skip:x},{color:(t,r,i,c,u,f)=>{let[p,h]=C(c,u),g=m[p],_=d[h],v=o[g],y=l[g][_];if(aa(n,e.skin,v,y,f),_===19||_===20){let e=Math.abs(v)/a.mouthW;e<1&&f.lerp(ra.setHex(5905954),.55*(1-e*e))}if(s[g]&&(_===10||_===11)){let e=(Math.abs(v)-a.eyeT)/a.eyeW;f.multiplyScalar(_===10?.55:.85),_===11&&f.lerp(ra.setHex(14191238),.35),e<-.9&&f.lerp(ra.setHex(13662840),.6)}return s[g]&&_===9&&f.multiplyScalar(.8),f},skin:(e,t,r,i,a,s)=>{let[c,u]=C(i,a),f=d[u];ia(n,o[m[c]],l[m[c]][f],s,f>=20&&f<=22,f>=18&&f<=19)},kind:B.skin,rough:(e,t,r,i,a)=>{let[c,u]=C(i,a),f=m[c],p=d[u];return s[f]&&(p===11||p===12)?.16:oa(n,o[f],l[f][p])},bump:1,tex:r?{rect:r,mode:0,uv:(e,t,n,r,i,s)=>{let[c,u]=C(r,i);Hi(a,o[m[c]],l[m[c]][d[u]],S),s[0]=S[0],s[1]=S[1]}}:void 0}),T=t.nor;for(let e=0;e<=v;e++)for(let t=0;t<=_;t++){let r=m[t],i=d[e];if(s[r]&&i>=9&&i<=12)continue;let a=(w+e*(_+1)+t)*3,c=l[r][i];c<.02?G.set(0,1,0):(qi(n,o[r],Math.min(.995,c),G,i===19?-1:+(i===20)),c>.97&&G.lerp(na.set(0,-1,.3).normalize(),V(.97,1,c)).normalize()),T[a]=G.x,T[a+1]=G.y,T[a+2]=G.z}};yield,_(m,p,h,[[m,Zi],[p,Zi]]),yield,_(0,m,Zi,[[0,Qi]]),_(p,c,Zi,[[c,Qi]]),la(e,l[0]),yield,ua(e),pa(e),yield,ma(e),_a(e)}function la(e,t){let{m:n,h:r,cover:i}=e,a=e=>$i+e*(hi-2*$i),o=Qi.map(e=>t[e]),s=o.length-1,c=(e,t)=>!!i&&i(a(e),o[Math.round(t*s)]),l=n.grid({nu:6,nv:s,closed:!1,point:(e,t,n)=>zi(r,a(e),o[Math.round(t*s)],n),skip:(e,t)=>c(e/6,t/s)&&c((e+1)/6,t/s)&&c(e/6,(t+1)/s)&&c((e+1)/6,(t+1)/s)},{color:(t,n,i,c,l,u)=>aa(r,e.skin,a(c),o[Math.round(l*s)],u),skin:R.head,kind:B.skin,rough:.55,bump:.6}),u=n.nor;for(let e=0;e<=s;e++)for(let t=0;t<=6;t++){let n=(l+e*7+t)*3,i=o[e];i<.02?G.set(0,1,0):(qi(r,a(t/6),Math.min(.995,i),G),i>.97&&G.lerp(na.set(0,-1,.3).normalize(),V(.97,1,i)).normalize()),u[n]=G.x,u[n+1]=G.y,u[n+2]=G.z}}function ua(e){let{m:t,h:n,b:r}=e,i=n.lay,a=n.s,o=ra.setHex(e.skin).multiplyScalar(.9).getHex(),s=e.lashColor??1182472,c=e.lashLen??.3;for(let l of n.eyes){let u=l.side,d=u<0?R.eyeL:R.eyeR,f=u<0?R.lidL:R.lidR;r.joints.p[d].copy(l.c);let p=Math.PI/180*75,m=Math.PI/180*44,h=Math.cos(.62),g=(e,t,n)=>{let r=(e*2-1)*p,i=(t*2-1)*m;return n.set(Math.sin(r)*Math.cos(i),Math.sin(i),-Math.cos(r)*Math.cos(i))},_=t.grid({nu:6,nv:3,closed:!1,point:(e,t,n)=>{g(e,t,G);let r=-G.z,i=r>h?((r-h)/(1-h))**1.4*7e-4*a:0;return n.copy(l.c).addScaledVector(G,l.r+i)},invert:!0},{color:(e,t,n,r,i,a)=>{g(r,i,G);let o=1-Math.max(0,-G.z)**.8;return a.setRGB(1,1,1).multiplyScalar(1-.5*o-.22*V(.1,.55,G.y)),a},skin:d,kind:B.eye,rough:.05,tex:e.eyeRect?{rect:e.eyeRect,mode:2,uv:(e,t,n,r,i,a)=>{let o=(r*2-1)*p,s=(i*2-1)*m;a[0]=.5+o/Math.PI,a[1]=.5+s/(Math.PI/2)}}:void 0});for(let e=0;e<=3;e++)for(let n=0;n<=6;n++){g(n/6,e/3,G);let r=(_+e*7+n)*3;t.nor[r]=G.x,t.nor[r+1]=G.y,t.nor[r+2]=G.z}let v=[-1,-.5,.05,.55,1],y=e=>u*(i.eyeT+e*i.eyeW);if(Ii(n,l,y(0),vi(i,0)-.001,.0012*a,r.joints.p[f]),t.grid({nu:v.length-1,nv:2,closed:!1,point:(e,t,r)=>{let o=v[Math.round(e*(v.length-1))],s=gi(vi(i,o)-.002,yi(i,o)+.001,t);return Ii(n,l,y(o),s,8e-4*a+4e-4*a*Math.sin(t*Math.PI),r)},invert:u<0},{color:(e,t,n,r,i,a)=>a.setHex(i>.9?da(o,s,.6):o),skin:f,kind:B.skin,rough:.5}),e.lashRect){let r=[-.8,-.35,.1,.55,1.02],o=(.0042+.0048*c)*a,d=new N,f=new N,p=new N;t.grid({nu:r.length-1,nv:2,closed:!1,point:(e,t,s)=>{let c=r[Math.round(e*(r.length-1))],m=_i(c,-1,1),h=vi(i,m)-.0028;Ii(n,l,y(m),h,n.lidTm+2e-4*a,d),f.subVectors(d,l.c).normalize(),p.set(0,1,0).addScaledVector(f,-f.y).normalize();let g=t,_=o*(.55+.45*Math.sin((m+1)/2*Math.PI*.9))*(c>1?.85:1);return s.copy(d).addScaledVector(f,_*(.55*g-.1*g*g)).addScaledVector(p,_*(.3*g+.55*g*g)),s.x+=u*_*.35*g*Math.max(0,m),s},invert:u>0},{color:s,skin:R.head,kind:B.hair,rough:.6,tex:{rect:e.lashRect,mode:2,uv:(e,t,n,r,i,a)=>(a[0]=r,a[1]=i)}})}}}function da(e,t,n){return ra.setHex(e).lerp(fa.setHex(t),n).getHex()}let fa=new F;function pa(e){let{m:t,h:n,lod:r,faceRect:i}=e,a=n.lay,o=n.face,s=n.s,c=o.bridge,l=.85+.35*o.noseW,u=.9+.2*o.noseL,d=(.0125+.004*c)*s*u,f=[[.46,.085,3e-4*s,0,0],[.515,.11,(.0016+.0018*c)*s,0,0],[.567,.13,(.0034+.0032*c)*s,0,0],[.617,.15,(.0058+.004*c)*s*u,0,0],[a.noseTipD-.022,.172*l,d*.84,1,0],[a.noseTipD,.185*l,d,1,-.004],[a.noseTipD+.013,.19*l,d*.9,1,-.008],[a.noseBaseD-.009,.188*l,d*.55,2,-.014],[a.noseBaseD+.004,.182*l,0,3,-.024]],p=r===0?f:[f[0],f[2],f[4],f[5],f[8]],m=r===0?[-1,-.76,-.5,-.24,0,.24,.5,.76,1]:[-1,-.4,0,.4,1],h=m.length-1,g=p.length-1,_=[0,0],v=(e,t,n)=>{let r=Math.max(0,Math.min(1,.5+.5*(e-t)/n));return t+(e-t)*r+n*r*(1-r)},y=(e,t)=>{let n=Math.abs(e);if(n>=1)return 0;let r=(1-n*n)*(1-n*n),i=t[2];if(t[3]===0)return i*(.55*U(e,.3)+.45*r);if(t[3]===1){let t=i*Math.max(0,1-e/.5*(e/.5))**.6,a=i*.95*U(n-.55,.2);return v(t,a,i*.18)*r}if(t[3]===2){let t=i*U(e,.14),a=i*1.05*U(n-.55,.18),o=i*.35*U(n-.3,.11);return Math.max(0,(Math.max(t,a)-o)*r)}return 0},b=(e,t)=>e[0]+e[4]*t*t,x=e=>{let t=Math.abs(e);return 45e-5*s*(1-V(.62,.95,t))-5e-4*s*V(.8,1,t)},S=(e,t,r)=>{let i=Math.round(t*g),a=Math.round(e*h),o=p[i],c=m[a];return W(n,c*o[1],b(o,c),y(c,o)+(i===0?-4e-4*s:x(c)),r)},C=t.vertexCount;t.grid({nu:h,nv:g,closed:!1,point:S},{color:(t,r,i,a,o,s)=>{let c=Math.round(o*g),l=Math.round(a*h),u=m[l],d=Math.abs(u);aa(n,e.skin,u*p[c][1],b(p[c],u),s);let f=p[c][3];return f>=2&&s.multiplyScalar(1-(f===3?.55:.4)*U(d-.3,.12)),f>=1&&c>=g-3&&s.multiplyScalar(1-.1*U(d-.78,.1)),f===1&&d<.5&&(s.r=Math.min(1,s.r*1.04),s.g*=.985),s},skin:R.head,kind:B.skin,rough:(e,t,n,r,i)=>p[Math.round(i*g)][3]>=2?.55:.38+.12*Math.abs(m[Math.round(r*h)]),bump:.8,tex:i?{rect:i,mode:0,uv:(e,t,r,i,a,o)=>{let s=Math.round(a*g),c=Math.round(i*h);Hi(n.lay,m[c]*p[s][1],b(p[s],m[c]),_),o[0]=_[0],o[1]=_[1]}}:void 0});let w=t.nor;for(let e=0;e<=g;e++)for(let t=0;t<=h;t++){let r=V(.95,.45,Math.abs(m[t]))*(e===0?0:e===1?.6:1);if(r>=.999)continue;let i=(C+e*(h+1)+t)*3;qi(n,m[t]*p[e][1],b(p[e],m[t]),G),na.set(w[i],w[i+1],w[i+2]),G.lerp(na,r).normalize(),w[i]=G.x,w[i+1]=G.y,w[i+2]=G.z}}function ma(e){let{m:t,h:n,lod:r}=e;if(e.earsHidden)return;let i=n.s,a=.058*i,o=.032*i,s=ra.setHex(e.skin).multiply(new F(1.03,.92,.88)).getHex(),c=ra.setHex(e.skin).multiply(new F(.78,.66,.64)).getHex(),l=ra.setHex(e.skin).multiply(new F(1.04,.9,.86)).getHex();for(let e of[-1,1]){let u=W(n,e*1.6,.585,-.001,new N,!1),d=new N(e,0,.12).normalize(),f=new N(0,1,0),p=new N;f.applyAxisAngle(d,e*.2),p.crossVectors(d,f).multiplyScalar(-e),p.z>0&&p.negate();let m=r===0?8:5,h=r===0?[[1,.45],[1.03,1],[.84,.9],[.62,.72],[.3,.15]]:[[1,.5],[.9,.9],[.2,.1]],g=h.length-1,_=(e,t)=>{let n=e*hi,r=Math.max(0,Math.cos(n));t[0]=Math.sin(n)*o*(.5+.12*r)+o*.18,t[1]=Math.cos(n)*a*.5*(n>Math.PI*.8&&n<Math.PI*1.2?.95:1)},v=[0,0];t.grid({nu:m,nv:g,closed:!0,point:(e,t,n)=>{let r=Math.round(t*g),[a,s]=h[r];_(e,v);let c=v[0]<0?.7:1,l=v[0]*a*(r>=3?c:1),m=v[1]*a,y=(.004+.012*Math.max(0,v[0]/o))*i*s;return n.copy(u).addScaledVector(p,-l).addScaledVector(f,m).addScaledVector(d,y),n},invert:e<0,cap1:!0},{color:(e,t,n,r,i,a)=>{let o=Math.round(i*g);return a.setHex(o>=g-1?c:o===1?l:s)},skin:R.head,kind:B.skin,rough:.55,bump:.5}),t.grid({nu:m,nv:1,closed:!0,point:(e,t,n)=>{_(e,v);let r=(.004+.012*Math.max(0,v[0]/o))*i*.45,a=t<.5?1:.7;return n.copy(u).addScaledVector(p,-v[0]*a).addScaledVector(f,v[1]*a).addScaledVector(d,t<.5?r:-.004*i),n},invert:e>0},{color:ra.setHex(s).multiplyScalar(.85).getHex(),skin:R.head,kind:B.skin,rough:.6})}}function ha(e){let{m:t,h:n,lod:r}=e,i=Ji(r),a=Yi(r),o=i.length-1,s=a.length-1,c=i.slice();c[o]=i[0]+hi;let l=e=>c[Math.round(e*o)],u=e=>a[Math.round(e*s)],d={color:(t,r,i,a,o,s)=>aa(n,e.skin,l(a),u(o),s),skin:(e,t,r,i,a,o)=>ia(n,l(i),u(a),o),kind:B.skin,rough:.58},f=t.grid({nu:o,nv:s,closed:!1,point:(e,t,r)=>W(n,l(e),u(t),0,r)},d),p=t.nor;for(let e=0;e<=s;e++)for(let t=0;t<=o;t++){let r=(f+e*(o+1)+t)*3,i=a[e];i<.03?G.set(0,1,0):(qi(n,c[t],Math.min(.995,i),G),i>.97&&G.lerp(na.set(0,-1,.3).normalize(),V(.97,1,i)).normalize()),p[r]=G.x,p[r+1]=G.y,p[r+2]=G.z}pa(e),ga(e),_a(e)}function ga(e){let{m:t,h:n}=e,r=n.lay,i=n.face,a=(e,r,i,a,o,s,c)=>t.grid({nu:2,nv:1,closed:!1,point:(t,s,c)=>W(n,gi(e,r,t),gi(i,a,s)+(t===.5?s<.5?-.006:.004:0),o,c)},{color:s,skin:c,kind:B.skin,rough:.6}),o=e.b.elder?10130572:2760215;for(let e of[-1,1]){let t=e*r.eyeT,n=t-e*r.eyeW*.85,s=t+e*r.eyeW*.9;a(Math.min(n,s),Math.max(n,s),r.eyeD-r.eyeH*.9,r.eyeD+r.eyeH*.5,.0022,2102799,R.head);let c=e*.12,l=e*.52;a(Math.min(c,l),Math.max(c,l),r.browD-.012*(.6+i.brow),r.browD+.008,.0024,o,R.head)}let s=i.lipColor||ra.setHex(e.skin).multiply(new F(.92,.62,.6)).getHex();a(-r.mouthW,r.mouthW,r.mouthD-.012,r.mouthD+.016,.0025,s,R.jaw)}function _a(e){let{m:t,h:n,b:r,lod:i}=e,a=i===0?10:6,o=r.H*.808,s=n.crownY-.8*n.hh,c=ki(n,.8)+.035*n.hh,l=r.neckBase.z,u=r.neckR,d=i===0?[0,.22,.48,.74,1]:[0,.5,1],f=d.length-1,p=!r.female,m=new N,h=e=>gi(.8,.7,V(0,.8,-Math.cos(e)));t.grid({nu:a,nv:f,closed:!0,point:(e,t,i)=>{let a=d[Math.round(t*f)],s=e*hi,g=n.crownY-h(s)*n.hh,_=gi(o,g,a),v=gi(l,c,a*a),y=Math.sin(s),b=Math.cos(s),x=u*(1-.1*a)*(1+.16*(1-a)*(1-a)),S=u*(.9+.08*(1-a)),C=u*(1.02+.08*(1-a)),w=b>0?S:C,T=1/Math.sqrt((y/x)**2+(b/w)**2),E=gi(.95,.55,a);T+=(p?.0035:.002)*r.s*(U(Ti(s,E),.3)+U(Ti(s,-E),.3))*Math.sin(a*Math.PI),T-=.002*r.s*U(Ti(s,0),.22)*(1-a)*.6;let D=p&&!r.student?.0042*r.s*U(y,.25)*Math.max(0,b)*U(a-.58,.18):0;T+=D,i.set(y*T,_,v-b*T);let O=V(0,.6,-b)*V(.45,1,a);return O>0&&i.lerp(W(n,s,h(s),-.0015*n.s,m,!1),O),i},invert:!0},{color:(t,n,r,i,a,o)=>{o.setHex(e.skin);let c=i*hi;return o.multiplyScalar(1-.12*V(s-.06,s,n)*Math.max(0,Math.cos(c))),o},skin:(e,t,n,r,i,a)=>Yr(a,R.neck,R.head,V(gi(o,s,.45),gi(o,s,.95),t)),kind:B.skin,rough:.56,bump:.6})}let va={uTime:{value:0},uNight:{value:0},uWet:{value:0},uSunDir:{value:new N(.4,.8,.3).normalize()},uCharFill:{value:new Se(0,0,0,0)}},ya={};typeof window<`u`&&(window.__materialLint=()=>ya);var ba=class{reqs=[];byKey=/* @__PURE__ */ new Map;tile(e,t,n,r,i,a=8){let o=this.byKey.get(e);if(o)return o;let s=this.reqs.length;this.reqs.push({key:e,w:t,h:n,repeat:r,gutter:a,paint:i});let c={x:-(s+1),y:0,w:1,h:1};return this.byKey.set(e,c),c}reset(){this.reqs.length=0,this.byKey.clear()}rollback(e){for(let t=e;t<this.reqs.length;t++)this.byKey.delete(this.reqs[t].key);this.reqs.length=Math.min(e,this.reqs.length)}get area(){let e=0;for(let t of this.reqs)e+=(t.w+t.gutter*2)*(t.h+t.gutter*2);return e}};function xa(e,t){for(let n=0;n<e.length;n+=4){let r=e[n];if(r>=0)continue;let i=t[-r-1];if(!i){e[n]=e[n+1]=e[n+2]=e[n+3]=0;continue}e[n]=i.x,e[n+1]=i.y,e[n+2]=i.w,e[n+3]=i.h}}let Sa=typeof document<`u`;function Ca(e,t){if(Sa){let n=document.createElement(`canvas`);return n.width=e,n.height=t,[n,n.getContext(`2d`)]}let n=new OffscreenCanvas(e,t);return[n,n.getContext(`2d`)]}let wa=null;function Ta(e,t){wa??=Ca(e,t);let[n,r]=wa;return(n.width!==e||n.height!==t)&&(n.width=e,n.height=t),r.setTransform(1,0,0,1,0,0),wa}let Ea=/* @__PURE__ */ new Map,Da=0;function Oa(e){let t=e.w*e.h<=65536;if(t){let t=Ea.get(e.key);if(t&&t.width===e.w&&t.height===e.h)return Ea.delete(e.key),Ea.set(e.key,t),t}if(!e.paint)throw Error(`[characters] tile ${e.key} has no painter`);let[n,r]=t?Ca(e.w,e.h):Ta(e.w,e.h);if(r.clearRect(0,0,e.w,e.h),e.paint(r,0,0,e.w,e.h),t)for(Ea.set(e.key,n),Da+=e.w*e.h*4;Da>6291456&&Ea.size>1;){let[e,t]=Ea.entries().next().value;Ea.delete(e),Da-=t.width*t.height*4,t.width=t.height=1}return n}function ka(){for(let e of Ea.values())e.width=e.height=1;Ea.clear(),Da=0,wa&&(wa[0].width=wa[0].height=1),wa=null}function Aa(e,t,n,r){let i=Oa(r),{w:a,h:o,gutter:s}=r,c=a+s*2,l=o+s*2,u=t+s,d=n+s;if(e.save(),e.clearRect(t,n,c,l),r.repeat){e.beginPath(),e.rect(t,n,c,l),e.clip();for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++)e.drawImage(i,u+n*a,d+t*o)}else e.drawImage(i,u,d);e.restore()}let ja=0;new M;var Ma=class{size;scale;height;pages=[];constructor(e=2048,t=1,n=e){this.size=e,this.scale=t,this.height=n}newPage(){let e=document.createElement(`canvas`);e.width=this.size,e.height=this.height;let t=e.getContext(`2d`),n=new zn(e);n.colorSpace=h,n.premultiplyAlpha=!0,n.generateMipmaps=!0,n.minFilter=a,n.magFilter=i,n.anisotropy=4,n.name=`char-atlas-${ja}`;let r={id:ja++,size:this.size,height:this.height,canvas:e,g:t,tex:n,shelves:[],nextY:0,cache:/* @__PURE__ */ new Map,used:0,dirty:!0,overflow:!1,scale:this.scale,sealed:!1,busy:0,uploadedVersion:-1,dead:!1};return n.onUpdate=()=>{r.uploadedVersion=n.version},n.addEventListener(`dispose`,()=>{r.sealed&&(r.dead=!0)}),this.pages.push(r),r}pageFor(e){let t=this.pages[this.pages.length-1];return t&&!t.dead&&t.size*t.height*.86-t.used>e*this.scale*this.scale?t:this.newPage()}alloc(e,t,n){for(let r of e.shelves)if(n<=r.h&&r.h-n<48&&r.x+t<=e.size){let e={x:r.x,y:r.y};return r.x+=t,e}if(e.nextY+n>e.height)return null;let r={y:e.nextY,h:n,x:t};return e.shelves.push(r),e.nextY+=n,{x:0,y:r.y}}blockW(e){return Math.ceil((e.w+e.gutter*2)*this.scale)}blockH(e){return Math.ceil((e.h+e.gutter*2)*this.scale)}rectAt(e,t,n,r,i,a){let o=e.size,s=e.height,c=e.scale,l=t+r.gutter*c,u=n+r.gutter*c,d={x:l/o,y:1-(u+r.h*c)/s,w:r.w*c/o,h:r.h*c/s};return e.cache.set(r.key,d),e.used+=i*a,e.sealed||(e.dirty=!0),d}place(e,t,n,r,i,a,o,s,c=0){e.sealed||Na(e.g,t,n,r,i,a,e.scale,s,c)}tile(e,t,n,r,i,a,o=8){let s=e.cache.get(t);if(s)return s;let c={key:t,w:n,h:r,repeat:i,gutter:o,paint:a},l=this.blockW(c),u=this.blockH(c),d=this.alloc(e,l,u);return d||=(e.overflow=!0,{x:0,y:0}),this.place(e,d.x,d.y,l,u,c,!0),this.rectAt(e,d.x,d.y,c,l,u)}*resolveSteps(e,t){let n=this.pages[this.pages.length-1],r=0;for(let t of e)n?.cache.has(t.key)||(r+=(t.w+t.gutter*2)*(t.h+t.gutter*2));let i=this.pageFor(r);i.busy++;try{for(let n=0;;n++){let r=[],a=!1,o=-1;if(i.sealed)for(let t=0;t<e.length;t++)i.cache.has(e[t].key)||(o=t);let s=null;for(let c=0;c<e.length;c++){let l=e[c],u=i.cache.get(l.key);if(u){r.push(u);continue}let d=this.blockW(l),f=this.blockH(l),p=this.alloc(i,d,f);if(!p){if(n===0){a=!0;break}r.push({x:0,y:0,w:0,h:0});continue}let m=c===o;this.place(i,p.x,p.y,d,f,l,m,t,c),i.sealed&&(s=m?null:{i:c,x:p.x,y:p.y,W:d,H:f}),r.push(this.rectAt(i,p.x,p.y,l,d,f)),t||(yield)}if(s&&this.place(i,s.x,s.y,s.W,s.H,e[s.i],!0,t,s.i),!a)return{page:i,rects:r};Pa(i),i=this.newPage(),i.busy++}}finally{Pa(i)}}resolve(e,t){let n=this.resolveSteps(e,t);for(;;){let e=n.next();if(e.done)return e.value}}flush(){for(let e of this.pages)e.dirty&&!e.sealed&&(e.tex.needsUpdate=!0,e.dirty=!1)}};function Na(e,t,n,r,i,a,o,s,c=0){if(s){let l=a.w+a.gutter*2,u=a.h+a.gutter*2;e.clearRect(t,n,r,i),e.drawImage(s.src,s.xy[c*2],s.xy[c*2+1],l,u,t,n,l*o,u*o)}else o===1?Aa(e,t,n,a):(e.clearRect(t,n,r,i),e.save(),e.translate(t,n),e.scale(o,o),Aa(e,0,0,a),e.restore())}function Pa(e){e.busy=Math.max(0,e.busy-1)}let Fa=null;function Ia(){return Fa??=new Ma(2048)}let La=/* @__PURE__ */ new Map,K=(e,t=1)=>{let n=t>=1?1e3:t<=0?0:Math.round(t*1e3),r=(e&16777215)*1001+n,i=La.get(r);if(i===void 0){let n=e>>16&255,a=e>>8&255,o=e&255;i=t>=1?`rgb(${n},${a},${o})`:`rgba(${n},${a},${o},${t.toFixed(3)})`,La.size>=4096&&La.clear(),La.set(r,i)}return i};function Ra(){La.clear()}function q(e,t,n){let r=e>>16&255,i=e>>8&255,a=e&255,o=t>>16&255,s=t>>8&255,c=t&255;return Math.round(r+(o-r)*n)<<16|Math.round(i+(s-i)*n)<<8|Math.round(a+(c-a)*n)}function J(e,t){return t>=1?q(e,16777215,Math.min(1,t-1)):q(0,e,Math.max(0,t))}function za(e){let t=e>>>0||1;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ba(e,t,n){for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++)n(i*e,r*t)}let Va=(e,t,n,r,i)=>{let a=za(77);e.fillStyle=`rgb(236,236,236)`,e.fillRect(t,n,r,i);for(let o=0;o<r;o+=2)e.fillStyle=`rgba(255,255,255,${(.1+a()*.16).toFixed(3)})`,e.fillRect(t+o,n,1,i);for(let o=0;o<i;o+=2)e.fillStyle=`rgba(0,0,0,${(.02+a()*.05).toFixed(3)})`,e.fillRect(t,n+o,r,1);for(let o=0;o<90;o++)e.fillStyle=a()<.5?`rgba(255,255,255,0.18)`:`rgba(0,0,0,0.06)`,e.fillRect(t+a()*r,n+a()*i,2+a()*5,1)},Ha=(e,t,n,r,i)=>{let a=za(4242),o=new Float32Array(r*i).fill(.34),s=new Float32Array(r*i),c=(e,t,n,i,a,c)=>{let l=Math.floor(e-n-1),u=Math.ceil(e+n+1);for(let d=l;d<=u;d++){let l=Math.max(0,1-Math.abs(d+.5-e)/n);if(l<=0)continue;let u=t*r+(d%r+r)%r;s[u]=Math.max(s[u],l*a),o[u]+=(i-o[u])*l*c}};for(let e=0;e<8;e++){let t=(e+.2+a()*.6)/8*r,n=r/8*(.75+.5*a()),o=1+Math.floor(a()*2),s=a()*Math.PI*2,l=(.6+a()*1.6)*(r/128);for(let e=0;e<22;e++){let e=(a()-.5)*n*(.35+.65*a()),r=1-.75*(Math.abs(e)/(n*.5))**1.6,u=a()<.2?.95:a()<.5?.25+.2*a():.55+.3*a(),d=1+Math.floor(a()*3),f=a()*Math.PI*2,p=a()*.8,m=.7+a()*.9;for(let n=0;n<i;n++){let h=n/i*Math.PI*2;c(t+e+l*Math.sin(h*o+s)+p*Math.sin(h*d+f),n,m,u,Math.max(.15,r)*(.8+.2*a()),.55)}}}for(let e=0;e<26;e++){let e=a()*r,t=1+Math.floor(a()*2),n=a()*Math.PI*2,o=(1+a()*4)*(r/128),s=.4+.5*a();for(let r=0;r<i;r++)c(e+o*Math.sin(r/i*Math.PI*2*t+n),r,.6,s,.3+.25*a(),.5)}let l=e.createImageData(r,i);for(let e=0;e<r*i;e++){let t=Math.min(1,Math.max(0,o[e]));l.data[e*4]=Math.round(t*255),l.data[e*4+1]=Math.round(Math.min(1,s[e])**(1/2.2)*255),l.data[e*4+2]=Math.round(t*230),l.data[e*4+3]=255}e.putImageData(l,t,n)};function Ua(e,t,n,r){return(i,a,o,s,c)=>{let l=za(r);switch(i.fillStyle=K(t),i.fillRect(a,o,s,c),e){case`stripes`:i.fillStyle=K(n);for(let e=0;e<4;e++)i.fillRect(a,o+e*c/4,s,c/4/2.6);break;case`plaid`:{let e=q(n,16777215,.55);i.globalAlpha=.55,i.fillStyle=K(n),i.fillRect(a,o+c*.1,s,c*.34),i.fillRect(a+s*.1,o,s*.34,c),i.globalAlpha=.35,i.fillRect(a,o+c*.62,s,c*.12),i.fillRect(a+s*.62,o,s*.12,c),i.globalAlpha=.9,i.fillStyle=K(e),i.fillRect(a,o+c*.54,s,c*.025),i.fillRect(a+s*.54,o,s*.025,c),i.fillStyle=K(q(t,0,.5)),i.fillRect(a,o+c*.26,s,c*.02),i.fillRect(a+s*.26,o,s*.02,c),i.globalAlpha=1,Wa(i,a,o,s,c,.07);break}case`check`:{let e=s/4;i.globalAlpha=.5,i.fillStyle=K(n);for(let t=0;t<4;t++)i.fillRect(a+t*e,o,e/2,c),i.fillRect(a,o+t*e,s,e/2);i.globalAlpha=1;break}case`dots`:{i.fillStyle=K(n);let e=s/3;for(let t=0;t<3;t++)for(let n=0;n<3;n++){let r=a+(n+.5+t%2*.5)*e,l=o+(t+.5)*e;Ba(s,c,(t,n)=>{i.beginPath(),i.arc(r+t,l+n,e*.16,0,Math.PI*2),i.fill()})}break}case`floral`:{let e=[n,q(n,16777215,.45),q(n,16724821,.4),16773832],r=q(3111482,t,.25);for(let e=0;e<16;e++){let e=a+l()*s,t=o+l()*c,n=l()*Math.PI,u=s*(.05+l()*.05);i.fillStyle=K(r),Ba(s,c,(r,a)=>{i.beginPath(),i.ellipse(e+r,t+a,u,u*.38,n,0,Math.PI*2),i.fill()})}for(let t=0;t<9;t++){let t=a+l()*s,n=o+l()*c,r=s*(.06+l()*.06),u=l()*6,d=e[Math.floor(l()*e.length)];Ba(s,c,(e,a)=>{i.fillStyle=K(d);for(let o=0;o<5;o++){let s=u+o*Math.PI*2/5;i.beginPath(),i.ellipse(t+e+Math.cos(s)*r*.55,n+a+Math.sin(s)*r*.55,r*.52,r*.36,s,0,Math.PI*2),i.fill()}i.fillStyle=K(q(d,0,.35),.8),i.beginPath(),i.arc(t+e,n+a,r*.22,0,Math.PI*2),i.fill(),i.fillStyle=`rgba(255,236,150,0.95)`,i.beginPath(),i.arc(t+e,n+a,r*.11,0,Math.PI*2),i.fill()})}for(let t=0;t<22;t++){let n=a+l()*s,r=o+l()*c;i.fillStyle=K(e[t%3],.9),Ba(s,c,(e,t)=>{i.beginPath(),i.arc(n+e,r+t,s*.012+l()*s*.01,0,Math.PI*2),i.fill()})}break}case`camo`:{let e=[n,q(t,0,.35),q(n,14207136,.5)];for(let t=0;t<26;t++){let n=a+l()*s,r=o+l()*c,u=s*(.06+l()*.08);i.fillStyle=K(e[t%3]),Ba(s,c,(e,t)=>{i.beginPath();for(let a=0;a<7;a++){let o=a/7*Math.PI*2,s=u*(.6+l()*.6),c=n+e+Math.cos(o)*s*1.4,d=r+t+Math.sin(o)*s;a===0?i.moveTo(c,d):i.lineTo(c,d)}i.closePath(),i.fill()})}break}case`denim`:Wa(i,a,o,s,c,.22);for(let e=0;e<70;e++)i.fillStyle=`rgba(255,255,255,${(.05+l()*.1).toFixed(3)})`,i.fillRect(a+l()*s,o+l()*c,1,4+l()*12);break;case`knit`:{let e=s/8;for(let t=0;t<8;t++){i.fillStyle=`rgba(0,0,0,0.16)`,i.fillRect(a+t*e,o,1.5,c);for(let n=0;n<8;n++){let r=o+n*c/8;i.strokeStyle=`rgba(255,255,255,0.18)`,i.lineWidth=1.4,i.beginPath(),i.moveTo(a+t*e+2,r+1),i.lineTo(a+t*e+e/2,r+c/8-2),i.lineTo(a+t*e+e-2,r+1),i.stroke()}}break}default:Wa(i,a,o,s,c,.05)}}}function Wa(e,t,n,r,i,a){e.save(),e.strokeStyle=`rgba(0,0,0,${a})`,e.lineWidth=1;for(let a=-i;a<r+i;a+=3)e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+a+i,n+i),e.stroke();e.strokeStyle=`rgba(255,255,255,${a*.6})`;for(let a=-i+1;a<r+i;a+=6)e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+a+i,n+i),e.stroke();e.restore()}function Ga(e,t,n){return(r,i,a,o,s)=>{r.clearRect(i,a,o,s),r.fillStyle=K(e),r.fillRect(i+o*.3,a,o*.4,s),r.fillStyle=K(J(e,.78)),r.fillRect(i+o*.3,a,1.5,s),r.fillRect(i+o*.7-1.5,a,1.5,s);for(let e=0;e<n;e++){let c=a+(e+.5)/n*s;r.fillStyle=K(J(t,.7)),r.beginPath(),r.arc(i+o/2,c+.8,o*.17,0,Math.PI*2),r.fill(),r.fillStyle=K(t),r.beginPath(),r.arc(i+o/2,c,o*.16,0,Math.PI*2),r.fill(),r.fillStyle=`rgba(0,0,0,0.35)`;for(let[e,t]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.fillRect(i+o/2+e*o*.05-.6,c+t*o*.05-.6,1.3,1.3)}}}function Ka(e,t){return(n,r,i,a,o)=>{n.clearRect(r,i,a,o),n.fillStyle=K(e),n.fillRect(r+a*.25,i,a*.5,o),n.fillStyle=K(t);for(let e=0;e<o;e+=3)n.fillRect(r+a*.4+e/3%2*a*.08,i+e,a*.14,2);n.fillStyle=K(J(t,.85)),n.fillRect(r+a*.38,i+o*.04,a*.24,o*.05)}}function qa(e,t,n){return(r,i,a,o,s)=>{r.clearRect(i,a,o,s),r.save(),r.beginPath(),n===`jeans`?(r.moveTo(i+o*.08,a+s*.06),r.lineTo(i+o*.92,a+s*.06),r.lineTo(i+o*.88,a+s*.72),r.lineTo(i+o*.5,a+s*.94),r.lineTo(i+o*.12,a+s*.72)):n===`chest`?r.rect(i+o*.08,a+s*.08,o*.84,s*.84):(r.moveTo(i+o*.22,a+s*.05),r.lineTo(i+o*.78,a+s*.05),r.lineTo(i+o*.95,a+s*.6),r.lineTo(i+o*.95,a+s*.95),r.lineTo(i+o*.05,a+s*.95),r.lineTo(i+o*.05,a+s*.6)),r.closePath(),r.fillStyle=K(J(e,.96)),r.fill(),r.lineWidth=Math.max(2,o*.03),r.strokeStyle=K(J(e,.72)),r.stroke(),r.setLineDash([o*.035,o*.025]),r.lineWidth=Math.max(1,o*.014),r.strokeStyle=K(t),r.stroke(),n===`pouch`&&(r.setLineDash([]),r.strokeStyle=K(J(e,.55)),r.lineWidth=o*.03,r.beginPath(),r.moveTo(i+o*.22,a+s*.05),r.lineTo(i+o*.06,a+s*.58),r.moveTo(i+o*.78,a+s*.05),r.lineTo(i+o*.94,a+s*.58),r.stroke()),r.restore()}}function Ja(e,t,n){return(r,i,a,o,s)=>{r.fillStyle=K(e),r.fillRect(i,a,o,s);for(let e=0;e<16;e++)r.fillStyle=`rgba(0,0,0,0.14)`,r.fillRect(i+e*o/16,a,o/16/3,s);n&&(r.fillStyle=K(t),r.fillRect(i,a+s*.3,o,s*.12),r.fillRect(i,a+s*.55,o,s*.12))}}function Ya(e,t,n){return(r,i,a,o,s)=>{r.clearRect(i,a,o,s);let c=i+o/2,l=a+s/2,u=(e,t=!0)=>`${t?`900`:`600`} ${Math.round(e)}px "PingFang TC","Noto Sans TC","Microsoft JhengHei","Heiti TC","Noto Sans CJK TC",system-ui,sans-serif`;switch(r.textAlign=`center`,r.textBaseline=`middle`,e){case`jie`:{let e=`#e8b54a`,t=`#f3e6c4`;r.fillStyle=K(n),r.beginPath(),r.arc(c,l-s*.04,o*.4,0,Math.PI*2),r.fill(),r.strokeStyle=e,r.lineWidth=o*.022,r.stroke(),r.fillStyle=`#c8202c`,r.beginPath(),r.arc(c,l-s*.02,o*.25,Math.PI,0),r.fill(),r.strokeStyle=`#f07a1e`,r.lineWidth=o*.012;for(let e=0;e<=8;e++){let t=Math.PI+e/8*Math.PI;r.beginPath(),r.moveTo(c+Math.cos(t)*o*.27,l-s*.02+Math.sin(t)*o*.27),r.lineTo(c+Math.cos(t)*o*.36,l-s*.02+Math.sin(t)*o*.36),r.stroke()}r.fillStyle=t;let i=l+s*.1,a=s*.045;for(let e=0;e<8;e++){let t=i-(e+1)*a;r.beginPath(),r.moveTo(c-o*.035,t+a),r.lineTo(c-o*.05,t+a*.1),r.lineTo(c+o*.05,t+a*.1),r.lineTo(c+o*.035,t+a),r.fill()}r.fillRect(c-o*.04,i,o*.08,s*.05),r.fillRect(c-o*.006,i-8*a-s*.08,o*.012,s*.08),r.fillStyle=`#ffffff`;for(let[e,t]of[[-.2,1],[.19,.9],[-.05,.7]])for(let n=0;n<3;n++)r.beginPath(),r.arc(c+(e+(n-1)*.05*t)*o,i+s*.03-(n===1?s*.02:0),o*.045*t,0,Math.PI*2),r.fill();r.font=u(s*.2),r.fillStyle=e,r.strokeStyle=`#3a2410`,r.lineWidth=o*.014,r.strokeText(`台北`,c,l+s*.27),r.fillText(`台北`,c,l+s*.27),r.font=u(s*.07),r.fillStyle=t,Xa(r,`TAIPEI  RUSH`,c,l-s*.04,o*.44,-Math.PI/2,s*.07);break}case`wen`:{r.fillStyle=K(t),r.beginPath(),r.moveTo(c-o*.42,l-s*.05),r.quadraticCurveTo(c-o*.2,l-s*.32,c,l-s*.12),r.quadraticCurveTo(c+o*.2,l-s*.32,c+o*.42,l-s*.05),r.quadraticCurveTo(c+o*.2,l-s*.1,c,l+s*.02),r.quadraticCurveTo(c-o*.2,l-s*.1,c-o*.42,l-s*.05),r.fill();let e=o*.035;for(let t=0;t<3;t++)for(let i=-6;i<6;i++)(i+t)%2||(r.fillStyle=K(n),r.fillRect(c+i*e,l-s*.2+t*e,e,e));r.fillStyle=`#ff6f61`,r.beginPath(),r.ellipse(c,l+s*.1,o*.07,s*.09,0,0,Math.PI*2),r.fill(),r.fillStyle=`#ffd98a`,r.fillRect(c-o*.05,l+s*.005,o*.1,s*.02),r.fillRect(c-o*.05,l+s*.18,o*.1,s*.02),r.font=u(s*.12),r.fillStyle=K(t),r.fillText(`夜市車神`,c,l+s*.33);break}case`taipei`:r.fillStyle=K(t),r.font=u(s*.24),r.fillText(`TAIPEI`,c,l-s*.06),r.font=u(s*.12,!1),r.fillText(`臺 北 · 101`,c,l+s*.16),r.fillRect(i+o*.15,l+s*.06,o*.7,s*.015);break;case`logo`:r.fillStyle=K(t),r.beginPath(),r.moveTo(c-o*.2,l+s*.16),r.lineTo(c,l-s*.24),r.lineTo(c+o*.2,l+s*.16),r.closePath(),r.fill(),r.fillStyle=K(n),r.beginPath(),r.moveTo(c-o*.08,l+s*.16),r.lineTo(c+o*.02,l-s*.04),r.lineTo(c+o*.12,l+s*.16),r.closePath(),r.fill(),r.fillStyle=K(t),r.font=u(s*.13),r.fillText(`SUMMIT`,c,l+s*.33);break;case`band`:r.fillStyle=K(t),r.font=u(s*.16),r.fillText(`臺北雜音`,c,l-s*.28),r.beginPath(),r.moveTo(c+o*.06,l-s*.16),r.lineTo(c-o*.12,l+s*.06),r.lineTo(c,l+s*.06),r.lineTo(c-o*.08,l+s*.26),r.lineTo(c+o*.14,l-s*.02),r.lineTo(c+o*.02,l-s*.02),r.closePath(),r.fill(),r.font=u(s*.1),r.fillText(`TAIPEI NOISE`,c,l+s*.38);break;case`rider-pink`:case`rider-green`:{let t=e===`rider-pink`;if(r.fillStyle=t?`#ffffff`:`#111111`,r.beginPath(),r.arc(c,l-s*.12,o*.19,0,Math.PI*2),r.fill(),r.fillStyle=t?K(n):`#3ce07a`,t){r.beginPath(),r.arc(c,l-s*.1,o*.11,0,Math.PI*2),r.fill();for(let e of[-1,1])r.beginPath(),r.arc(c+e*o*.09,l-s*.2,o*.045,0,Math.PI*2),r.fill();r.fillStyle=`#ffffff`;for(let e of[-1,1])r.beginPath(),r.arc(c+e*o*.04,l-s*.12,o*.017,0,Math.PI*2),r.fill();r.beginPath(),r.ellipse(c,l-s*.06,o*.035,s*.022,0,0,Math.PI*2),r.fill()}else r.font=u(s*.2),r.fillText(`食`,c,l-s*.11);r.fillStyle=t?`#ffffff`:`#111111`,r.font=u(s*.14),r.fillText(t?`餓熊外送`:`快食GO`,c,l+s*.16),r.font=u(s*.08),r.fillText(t?`FOODBEAR`:`EATZ GO`,c,l+s*.3);break}case`police`:r.fillStyle=K(t),r.font=u(s*.2),r.fillText(`警 察`,c,l-s*.12),r.font=u(s*.16),r.fillText(`POLICE`,c,l+s*.12);break;case`school`:r.fillStyle=K(t),r.font=u(s*.2,!1),r.fillText(`北城高中`,c,l-s*.14),r.font=u(s*.17,!1),r.fillText(`110521`,c,l+s*.14)}}}function Xa(e,t,n,r,i,a,o){let s=t.length,c=s*o*.62/i;for(let o=0;o<s;o++){let l=a-c/2+(o+.5)*(c/s);e.save(),e.translate(n+Math.cos(l)*i,r+Math.sin(l)*i),e.rotate(l+Math.PI/2),e.fillText(t[o],0,0),e.restore()}}function Za(e,t,n,r,i){return(a,o,s,c,l)=>{let u=za(e.length*31+(t&255)),d=e=>s+e*l,f=e=>o+e*c,p=e===`sneaker`||e===`boot`,m=e===`dress`||e===`loafer`||e===`heel`||e===`flat`;a.clearRect(o,s,c,l),a.fillStyle=K(t),a.fillRect(o,s,c,l);for(let e=0;e<40;e++)a.fillStyle=m?`rgba(255,255,255,${(.03+u()*.05).toFixed(3)})`:`rgba(0,0,0,${(.02+u()*.03).toFixed(3)})`,a.fillRect(f(u()),d(u()),c*(.05+u()*.2),1);let h=p?.2:e===`rainboot`?.13:.11;if(a.fillStyle=K(r),a.fillRect(o,d(0),c,h*l),a.fillRect(o,d(1-h),c,h*l),a.fillStyle=K(J(r,.72)),a.fillRect(o,d(h)-1.5,c,2),a.fillRect(o,d(1-h)-.5,c,2),p){a.fillStyle=K(J(r,.85));for(let e=0;e<18;e++)a.fillRect(f(e/18),d(0),1,h*l*.5),a.fillRect(f(e/18),d(1-h*.5),1,h*l*.5);a.fillStyle=K(J(r,.9)),a.fillRect(o,d(h*.6),c,1.5),a.fillRect(o,d(1-h*.6),c,1.5)}if(p){a.fillStyle=K(J(t,.94)),a.fillRect(f(.84),d(h),c*.16,l*(1-2*h)),a.strokeStyle=K(J(t,.75)),a.setLineDash([3,2]),a.lineWidth=1,a.beginPath(),a.moveTo(f(.84),d(h)),a.lineTo(f(.84),d(1-h)),a.stroke(),a.setLineDash([]),a.fillStyle=K(n),a.fillRect(o,d(.36),c*.1,l*.28);for(let e of[.27,.73])a.fillStyle=K(n),a.beginPath(),a.moveTo(f(.18),d(e+.1*(e<.5?-1:1)*0)),a.bezierCurveTo(f(.35),d(e+.07),f(.55),d(e+.02),f(.72),d(e-.1)),a.lineTo(f(.7),d(e-.04)),a.bezierCurveTo(f(.52),d(e+.07),f(.34),d(e+.12),f(.18),d(e+.08)),a.closePath(),a.fill();a.fillStyle=K(J(t,.9)),a.fillRect(f(.34),d(.42),c*.34,l*.16),a.strokeStyle=K(e===`boot`?3811866:16185074),a.lineWidth=2.2;for(let e=0;e<6;e++){let t=.36+e*.05;a.beginPath(),a.moveTo(f(t),d(.43)),a.lineTo(f(t+.035),d(.57)),a.moveTo(f(t),d(.57)),a.lineTo(f(t+.035),d(.43)),a.stroke()}a.fillStyle=K(J(t,.6));for(let e=0;e<7;e++)a.fillRect(f(.355+e*.05),d(.425),2,2),a.fillRect(f(.355+e*.05),d(.565),2,2);a.fillStyle=`rgba(20,18,16,0.95)`,a.fillRect(o,d(.46),c*.28,l*.08)}else if(m){if(a.strokeStyle=K(J(t,.6)),a.lineWidth=1.2,a.beginPath(),a.ellipse(f(.83),d(.5),c*.1,l*.22,0,Math.PI*.5,Math.PI*1.5),a.stroke(),e===`loafer`&&(a.fillStyle=K(J(t,.82)),a.fillRect(f(.52),d(.4),c*.06,l*.2)),e===`dress`){a.strokeStyle=K(J(t,.45)),a.lineWidth=1.5;for(let e=0;e<4;e++)a.beginPath(),a.moveTo(f(.46+e*.045),d(.46)),a.lineTo(f(.46+e*.045),d(.54)),a.stroke()}a.fillStyle=`rgba(16,14,12,0.95)`,a.fillRect(o,d(.47),c*.26,l*.06),i&&a.clearRect(f(.18),d(.36),c*.55,l*.28)}else e===`rainboot`&&(a.fillStyle=`rgba(255,255,255,0.12)`,a.fillRect(o,d(.3),c,l*.05),a.fillStyle=`rgba(16,14,12,0.9)`,a.fillRect(o,d(.46),c*.2,l*.08))}}function Qa(e,t){return(n,r,i,a,o)=>{let s=[e,16052974,t,16052974,e,16052974],c=a/s.length;s.forEach((e,t)=>{n.fillStyle=K(e),n.fillRect(r+t*c,i,c+1,o)});for(let e=0;e<o;e+=4)for(let t=0;t<a;t+=4)n.fillStyle=(t+e)/4%2?`rgba(0,0,0,0.12)`:`rgba(255,255,255,0.1)`,n.fillRect(r+t,i+e,4,2)}}function $a(e){return!!e.tiles||!!(e.atlas&&e.page)}function eo(e,t,n,r,i,a){return e.tiles?e.tiles.tile(t,n,r,i,a):e.atlas&&e.page?e.atlas.tile(e.page,t,n,r,i,a):null}function to(e,t,n,r=16777215){let i=t??`solid`;return $a(e)?i===`solid`||i===`knit`?{vcol:n,rect:i===`knit`?eo(e,`knit:ffffff`,128,128,!0,Ua(`knit`,15921906,16777215,5)):eo(e,`weave`,128,128,!0,Va),tileM:i===`knit`?.06:.045}:i===`denim`?{vcol:n,rect:eo(e,`denim`,128,128,!0,Ua(`denim`,15790320,16777215,9)),tileM:.05}:{vcol:16777215,rect:eo(e,`pat:${i}:${n.toString(16)}:${r.toString(16)}`,128,128,!0,Ua(i,n,r,(n^r<<3)&65535)),tileM:i===`stripes`?.09:.11}:{vcol:q(n,r,{stripes:.3,floral:.4,plaid:.35,check:.3,dots:.12,camo:.4,knit:0,denim:0,solid:0}[i]??0),rect:null,tileM:1}}function no(e){return eo(e,`hair3`,128,128,!0,Ha)}function ro(e,t,n,r){return eo(e,`rib:${t}:${n}:${r}`,128,64,!0,Ja(t,n,r))}function io(e,t,n,r){return t===`none`?null:eo(e,`print:${t}:${n}:${r}`,256,256,!1,Ya(t,n,r))}function ao(e,t,n){return eo(e,`placket:${t}:${n}`,32,256,!1,Ga(t,n,6))}function oo(e,t,n){return eo(e,`zip:${t}:${n}`,16,256,!1,Ka(t,n))}function so(e,t,n,r){return eo(e,`pocket:${r}:${t}:${n}`,96,96,!1,qa(t,n,r))}function co(e,t){return Math.max(1,Math.round(Math.PI*2*e/t))}let lo=new F;function Y(e,t){return lo.setHex(e).multiplyScalar(t).getHex()}let X=Math.PI*2,uo=(e,t,n)=>e+(t-e)*n,fo=(e,t)=>Math.exp(-(e*e)/(t*t)),po=(e,t)=>{let n=(e-t)%X;return n>Math.PI&&(n-=X),n<-Math.PI&&(n+=X),n},mo={none:-1,short:.4,elbow:.95,long:1.93},ho={tee:{hem:.502,sleeve:`short`,off:.004,loose:.45,collar:`crew`,neckF:.834,neckB:.846},polo:{hem:.506,sleeve:`short`,off:.005,loose:.4,collar:`polo`,neckF:.838,neckB:.85},shirt:{hem:.49,sleeve:`long`,off:.0045,loose:.32,collar:`shirt`,neckF:.838,neckB:.852},uniform:{hem:.5,sleeve:`short`,off:.0045,loose:.38,collar:`shirt`,neckF:.838,neckB:.852},blouse:{hem:.53,sleeve:`short`,off:.004,loose:.62,collar:`crew`,neckF:.818,neckB:.842},tank:{hem:.505,sleeve:`none`,off:.003,loose:.25,collar:`crew`,neckF:.795,neckB:.828,armhole:!0},hoodie:{hem:.49,sleeve:`long`,off:.011,loose:.8,collar:`hood`,neckF:.836,neckB:.85,rib:!0},sweater:{hem:.5,sleeve:`long`,off:.009,loose:.6,collar:`crew`,neckF:.836,neckB:.848,rib:!0},police:{hem:.5,sleeve:`long`,off:.005,loose:.38,collar:`shirt`,neckF:.838,neckB:.852},rider:{hem:.49,sleeve:`long`,off:.012,loose:.72,collar:`high`,neckF:.842,neckB:.855,rib:!0}},go={bomber:{hem:.52,sleeve:`long`,off:.02,loose:.85,gap:.2,collar:`rib`,ribHem:!0,neck:.848},cropped:{hem:.632,sleeve:`long`,off:.013,loose:.6,gap:.26,collar:`rib`,ribHem:!0,neck:.846},blazer:{hem:.455,sleeve:`long`,off:.012,loose:.3,gap:.24,collar:`lapel`,ribHem:!1,neck:.85},cardigan:{hem:.47,sleeve:`long`,off:.009,loose:.5,gap:.26,collar:`v`,ribHem:!0,neck:.845},vest:{hem:.5,sleeve:`none`,off:.012,loose:.25,gap:0,collar:`v`,ribHem:!1,neck:.84},windbreaker:{hem:.49,sleeve:`long`,off:.016,loose:.8,gap:0,collar:`high`,ribHem:!1,neck:.855},poncho:{hem:.44,sleeve:`none`,off:.03,loose:1,gap:0,collar:`none`,ribHem:!1,neck:.85}},_o={jeans:{waist:.572,legT:1.93,off:.006,loose:.22,pattern:`denim`},slacks:{waist:.585,legT:1.96,off:.005,loose:.45},shorts:{waist:.575,legT:.55,off:.006,loose:.55},skirt:{waist:.605,legT:-1,off:.004,loose:0,skirt:{hem:.33,flare:.13,pleats:12}},pencil:{waist:.6,legT:-1,off:.004,loose:0,skirt:{hem:.3,flare:-.01,pleats:0}},longskirt:{waist:.6,legT:-1,off:.004,loose:0,skirt:{hem:.075,flare:.22,pleats:0}},wide:{waist:.62,legT:1.985,off:.005,loose:1,flare:.012},track:{waist:.58,legT:1.9,off:.007,loose:.5},leggings:{waist:.6,legT:1.92,off:.0018,loose:0}};function vo(e,t){let n=t.H,r=_o[e.bottom.style],i={style:e.bottom.style,waistY:r.waist*n,legT:r.legT,off:r.off,loose:r.loose,flare:r.flare??0,color:e.bottom.color,color2:e.bottom.color2??e.bottom.color,pattern:e.bottom.pattern??r.pattern??`solid`,patternColor:e.bottom.patternColor??16777215,belt:e.bottom.belt??0,skirt:r.skirt?{hemY:r.skirt.hem*n,flare:r.skirt.flare,pleats:r.skirt.pleats}:null},a=null;if(e.top.style!==`none`){let t=ho[e.top.style],r=e.top.sleeve??t.sleeve,o=mo[r];r===`short`&&(e.top.style===`polo`||e.top.style===`uniform`)&&(o=.36);let s=e.top.tucked??e.top.style===`police`;a={style:e.top.style,hemY:s?i.waistY-.035:(t.hem-(e.top.length??0)/n)*n,neckF:t.neckF*n,neckB:t.neckB*n,sleeveT:o,off:t.off,loose:s?t.loose*.6:e.top.fit??t.loose,tucked:s,armhole:!!t.armhole,collar:t.collar,rib:!!t.rib,color:e.top.color,color2:e.top.color2??e.top.color,pattern:e.top.pattern??(e.top.style===`sweater`||e.top.style===`tank`?`knit`:`solid`),patternColor:e.top.patternColor??16777215,print:e.top.print??`none`},e.top.style===`police`&&(a.hemY=i.waistY-.035)}let o=null;if(e.outer){let t=go[e.outer.style];a&&(e.outer.style===`vest`||e.outer.style===`poncho`)&&(a.hemY=Math.max(a.hemY,.74*n));let r=e.outer.sleeve??t.sleeve;o={style:e.outer.style,hemY:t.hem*n,neckY:t.neck*n,sleeveT:mo[r],off:t.off+(a&&(a.style===`hoodie`||a.style===`sweater`)?.006:0),loose:t.loose,gap:e.outer.closed?0:t.gap,collar:t.collar,ribHem:t.ribHem,color:e.outer.color,color2:e.outer.color2??e.outer.color,pattern:e.outer.pattern??(e.outer.style===`cardigan`?`knit`:`solid`),patternColor:e.outer.patternColor??16777215,print:e.outer.print??`none`}}let s=e.shoes.style,c=s===`boot`||s===`rainboot`?1.58:s===`slipper`||s===`sandal`?2.2:1.97,l=null;e.socks&&s!==`slipper`&&s!==`sandal`&&(l={color:e.socks,topT:e.age===`student`&&i.skirt?1.52:1.74});let u=t.torsoTop;return!a&&!o?u=(i.skirt,i.waistY-.03):(u=Math.min(a?a.neckF:1/0,o&&!a?o.neckY:1/0)-.025,a?.armhole&&(u=Math.min(u,.785*n))),{top:a,outer:o,bottom:i,socks:l,shoeT:c,skinY0:u}}function yo(e,t,n,r,i,a=!0){let o=di(e,t,n,a);if(i>0){let r=uo(1.1,.08,Math.min(1,i)),a=e.H*.77;for(let i=1;i<=6;i++){let s=n+i*.035;if(s>a)break;o=Math.max(o,di(e,t,s,!0)-r*(s-n))}}let s=Math.abs(po(t,0))-Math.PI/2,c=V(e.H*.72,e.H*.77,n)*(1-V(e.H*.785,e.H*.812,n))*Math.exp(-(s*s)/.3);return o+(r+i*.006)*(1-.75*c)}function bo(e){let{top:t,outer:n,bottom:r}=e;return t&&!t.tucked&&t.hemY<r.waistY?{hemY:t.hemY,off:t.off,loose:t.loose}:n&&n.gap===0&&n.hemY<r.waistY?{hemY:n.hemY,off:n.off,loose:n.loose}:null}function xo(e,t,n,r,i){if(!t||r<t.hemY-.005)return i;let a=V(t.hemY-.005,t.hemY+.012,r),o=yo(e,n,r,t.off,t.loose)-.006;return i>o?uo(i,o,a):i}function So(e,t,n,r,i,a,o,s){let c=li(e,t,n),l=.45+.55*V(-.05,.4,n);return c+(r+i*.008)*l+s*V(a,o,n)}function Co(e,t,n,r,i,a){let o=li(e,t,n);if(i>0){let r=li(e,t,.2)*.96;o=Math.max(o,uo(o,r,i*V(-.1,.25,n)))}return o+r+a*V(1,2,n)}let wo=[.468,.492,.515,.54,.568,.598,.63,.665,.7,.735,.768,.795,.818,.836,.853],To=[.468,.5,.56,.625,.69,.76,.81,.853],Eo=[-.2,-.06,.12,.38,.65,.86,.97,1.08,1.25,1.5,1.75,1.93,2],Do=[-.2,.1,.6,.95,1.1,1.6,2],Oo=[-.16,-.02,.18,.42,.66,.86,.97,1.08,1.25,1.5,1.75,1.93,2],ko=[-.16,.2,.7,.95,1.1,1.6,2];function Ao(e,t,n,r){let i=[t];for(let a of e)a>t+r&&a<n-r&&i.push(a);return i.push(n),i}function jo(e,t,n,r=0,i=0){let a=[];return t&&a.push({p:e[0],k:0}),e.forEach((t,n)=>a.push({p:t,k:1,tight:n===0&&r||r&&t<e[0]+.03?r:i&&t>e[e.length-1]-.03?i:0})),n&&a.push({p:e[e.length-1],k:0}),a}function Mo(e,t){let n=e.b,r=t.thetas.length-1,i=t.rows.length-1,a=t.rows[0].p,o=t.rows[i].p,s=e=>t.thetas[Math.round(e*r)],c=(e,n)=>{let r=t.rows[Math.round(n*i)];if(!t.yLo||!t.yHi)return r.p;let c=s(e),l=o>a?(r.p-a)/(o-a):0;return uo(t.yLo(c),t.yHi(c),l)};return e.m.grid({nu:r,nv:i,closed:!1,point:(e,a,o)=>{let s=Math.round(e*r),l=Math.round(a*i),u=t.thetas[s],d=c(e,a),f=t.rows[l],p=f.k*(t.colK?t.colK[s]:1),m=t.R(u,d)+(t.bump?t.bump(u,d):0)-(f.tight??0),h=p>=1?m:uo(t.Ru(u,d),m,p);return o.set(Math.sin(u)*h,d,H(n,d)-Math.cos(u)*h)},invert:!0},t.attrs),{th:s,yy:c,nu:r,nv:i}}let No=new N,Po=new N,Fo=new N,Io=new N;function Lo(e,t,n){let r=t.rows.length-1;e.m.grid({nu:n,nv:r,closed:!0,cap0:t.rows[0].p<=t.limb.tMin+1e-6&&t.limb.bones[0]!==R.hips,point:(e,n,i)=>{let a=t.rows[Math.round(n*r)],o=e*X,s=t.R(o,a.p)-(a.tight??0),c=a.k>=1?s:uo(t.Ru(o,a.p),s,a.k);return ci(t.limb,a.p,No,Po,Fo,Io),i.copy(No).addScaledVector(Io,Math.sin(o)*c).addScaledVector(Fo,Math.cos(o)*c)}},t.attrs)}function Ro(e,t){if(e.rect)return{rect:e.rect,mode:1,uv:(e,n,r,i,a,o)=>t(i,a,o)}}function zo(e){let{b:t,fit:n,lod:r}=e,i=t.H,a=r===0?wo:To,o=e.nT,s=[];for(let e=0;e<=o;e++)s.push(-Math.PI+e/o*X);let{top:c,outer:l,bottom:u}=n,d=e.desc.skin,f=r===0?.006:.02,p=t.torsoTop;n.skinY0<p-.005&&Mo(e,{thetas:s,closed:!0,rows:Ao(a.map(e=>e*i),n.skinY0,p,f).map(e=>({p:e,k:1})),R:(e,n)=>di(t,e,n),Ru:(e,n)=>di(t,e,n),attrs:{color:(e,t,n,r,a,c)=>{c.setHex(d);let l=s[Math.round(r*o)];c.multiplyScalar(1-.08*fo(Math.abs(l)-Math.PI/2,.35)*fo(t-.76*i,.03*i))},skin:(e,n,r,i,a,c)=>pi(t,s[Math.round(i*o)],n,c),kind:B.skin,rough:.62}});{let r=c&&!c.tucked?Math.min(u.waistY,c.hemY+.025):l&&l.hemY<u.waistY&&l.gap===0?l.hemY+.025:u.waistY,d=u.skirt?Math.max(t.torsoBottom,u.skirt.hemY):t.torsoBottom;if(!u.skirt||(u.skirt.hemY,t.torsoBottom),!u.skirt){let p=Ao(a.map(e=>e*i),d,r,f),m=to(e,u.pattern,u.color,u.patternColor),h=m.rect?co(.15,m.tileM):1,g=jo(p,!1,!(c&&!c.tucked&&r<u.waistY)),_=bo(n);Mo(e,{thetas:s,closed:!0,rows:g,R:(e,n)=>xo(t,_,e,n,yo(t,e,n,u.off,0,n>t.H*.54)+(n>u.waistY-.04?.002:0)),Ru:(e,n)=>di(t,e,n,!0),attrs:{color:(e,n,r,a,c,l)=>{let f=s[Math.round(a*o)];l.setHex(m.vcol);let p=V(d+.07,d,n)*.28+.16*fo(po(f,0),.45)*V(t.H*.56,t.H*.49,n);l.multiplyScalar(1-p-(Math.round(c*(g.length-1))===g.length-1?.2:0)),u.pattern===`denim`&&l.multiplyScalar(1+.12*Math.max(0,Math.cos(f))*fo(n-.5*i,.05*i))},skin:(e,n,r,i,a,c)=>pi(t,s[Math.round(i*o)],n,c),kind:B.cloth,rough:u.pattern===`denim`?.9:.85,tex:Ro(m,(e,t,n)=>{n[0]=(e-.5)*h,n[1]=g[Math.round(t*(g.length-1))].p/m.tileM})}});let v=!!l&&l.gap===0&&l.hemY<u.waistY-.02;if(u.belt&&(!c||c.tucked)&&!v&&Uo(e,u.waistY-.012,u.belt,u.off+.003),e.lod===0&&u.pattern===`denim`&&(!c||c.tucked||c.hemY>.53*i)){let n=so(e,u.color,13933114,`jeans`);for(let r of[-1,1])n&&Vo(e,(e,n)=>yo(t,e,n,u.off,0),Math.PI+r*.62,.36,.495*i,.555*i,n,B.cloth,.9,2)}}}if(c){let n=l&&l.gap===0&&l.sleeveT>0?`all`:l&&l.gap>0?`front`:`none`;if(n!==`all`||l?.style===`vest`){let r=to(e,c.pattern,c.color,c.patternColor),d=r.rect?co(.16,r.tileM):1,p=s,m=!0;if(n===`front`&&l){let e=Math.min(Math.PI*.9,l.gap+.55),t=Math.max(4,Math.round(e*2/(X/o)));p=[];for(let n=0;n<=t;n++)p.push(-e+n/t*e*2);m=!1}let h=e=>{let t=Math.max(0,Math.cos(e)),n=uo(c.neckB,c.neckF,t**1.5);return c.armhole&&(n-=.018*i*fo(Math.abs(po(e,0)),.5)+.01*i*fo(Math.abs(po(e,Math.PI)),.6)),n},g=e=>c.hemY+(c.style===`shirt`&&!c.tucked?.012*fo(Math.abs(e)-Math.PI/2,.5):0),_=Ao(a.map(e=>e*i),c.hemY,c.neckB,f),v=c.rib?.004:0,y=jo(_,!c.tucked,!0,v,0),b=y.length-1,x=y[0].p,S=y[b].p,C=Y(r.vcol,.9);Mo(e,{thetas:p,closed:m,rows:y,yLo:g,yHi:h,R:(e,n)=>yo(t,e,n,c.off,c.loose),Ru:(e,n)=>n>.7*i?di(t,e,n)-.001:yo(t,e,n,u.off,0)-.002,attrs:{color:(e,t,n,a,o,s)=>{let l=p[Math.round(a*(p.length-1))],u=Math.round(o*b);s.setHex(u===b||u===0?C:r.vcol),c.rib&&t<c.hemY+.035&&s.setHex(Y(r.vcol,.93));let d=fo(Math.abs(l)-Math.PI/2,.4);s.multiplyScalar(1-.12*d*fo(t-.73*i,.05*i)-.05*V(.62*i,.52*i,t)),c.tucked&&s.multiplyScalar(1-.12*V(c.hemY+.08,c.hemY+.035,t))},skin:(e,n,r,i,a,o)=>pi(t,p[Math.round(i*(p.length-1))],n,o),kind:c.style===`police`||c.style===`rider`?B.cloth:c.style===`blouse`?B.satin:B.cloth,rough:c.style===`blouse`?.55:c.style===`rider`?.6:.88,tex:Ro(r,(e,t,n)=>{let i=p[Math.round(e*(p.length-1))];n[0]=(i+Math.PI)/X*d;let a=S>x?(y[Math.round(t*b)].p-x)/(S-x):0;n[1]=uo(g(i),h(i),a)/r.tileM})}});let w=(e,n)=>yo(t,e,n,c.off,c.loose);if(c.print!==`none`&&e.lod===0&&n!==`all`){let t=io(e,c.print,c.color2===c.color?Bo(c.color)>.5?1842210:16052714:c.color2,c.color);t&&(c.print===`school`?Vo(e,w,.42,.14,.742*i,.772*i,t,B.cloth,.8,2):Vo(e,w,0,.52,.64*i,.77*i,t,B.cloth,.85,2))}if(e.lod===0&&(c.collar===`shirt`||c.collar===`polo`)&&n!==`all`){let t=ao(e,c.color,c.style===`police`?13214785:15855592),n=c.collar===`polo`?.745*i:c.hemY+.01;if(t&&Vo(e,w,0,.07,n,c.neckF-.004,t,B.cloth,.85,2),c.style===`uniform`||c.style===`police`||c.style===`shirt`){let t=so(e,c.color,Y(c.color,.8),`chest`);t&&Vo(e,w,-.48,.3,.7*i,.745*i,t,B.cloth,.85,2)}}if(e.lod===0&&c.style===`hoodie`&&n!==`all`){let t=so(e,c.color,Y(c.color,.75),`pouch`);t&&Vo(e,w,0,.95,c.hemY+.04,.6*i,t,B.cloth,.9,2)}let T=r.rect&&c.pattern&&c.pattern!==`solid`&&c.pattern!==`knit`&&c.pattern!==`denim`?c.color:r.vcol;(n!==`all`||c.collar===`hood`)&&Wo(e,c.collar,c,w,h,T,c.color2)}}if(l&&l.style!==`poncho`){let r=to(e,l.pattern,l.color,l.patternColor),c=r.rect?co(.17,r.tileM):1,d=l.gap,p=s,m;if(d>0){let e=o;p=[d,d],m=[0,1];for(let t=1;t<e;t++)p.push(d+t/e*(X-2*d)),m.push(1);p.push(X-d,X-d),m.push(1,0)}let h=e=>d+(l.collar===`lapel`||l.collar===`v`?.35*V(.66*i,.83*i,e):.05*V(.78*i,.84*i,e)),g=jo(Ao(a.map(e=>e*i),l.hemY,l.neckY,f),!0,!0,l.ribHem?.008:0,0),_=g.length-1,v=(e,r)=>{let i=r<u.waistY+.01&&!u.skirt?yo(t,e,r,u.off+.004,0):di(t,e,r,!0);return n.top&&r>=n.top.hemY-.005?Math.max(i,yo(t,e,r,n.top.off,n.top.loose)):i},y=(e,n)=>yo(t,e,n,l.off,l.loose),b=(e,t)=>{if(d<=0)return p[e];let n=h(t);return n+(p[e]-d)/(X-2*d)*(X-2*n)},x=p.length-1,S=e=>l.hemY+(l.style===`blazer`?.03*i*fo(po(e,0),.5)*0:0);if(e.m.grid({nu:x,nv:_,closed:!1,point:(e,n,r)=>{let i=Math.round(e*x),a=Math.round(n*_),o=g[a],s=o.p===g[0].p?S(p[i]):o.p,c=b(i,s),l=o.k*(m?m[i]:1),u=y(c,s)-(o.tight??0),d=l>=1?u:uo(v(c,s)-.001,u,l);return r.set(Math.sin(c)*d,s,H(t,s)-Math.cos(c)*d)},invert:!0},{color:(e,t,n,a,o,s)=>{let c=Math.round(a*x),u=Math.round(o*_),d=b(c,t),f=l.ribHem&&t<l.hemY+.05;s.setHex(f?l.color2:r.vcol),m&&m[c]===0&&s.setHex(Y(r.vcol,.8)),(u===0||u===_)&&s.setHex(Y(r.vcol,.82));let p=fo(Math.abs(po(d,0))-Math.PI/2,.4);s.multiplyScalar(1-.14*p*fo(t-.72*i,.06*i)),(l.style===`bomber`||l.style===`windbreaker`)&&s.multiplyScalar(1-.05*Math.abs(Math.sin(t/(.07*i)*Math.PI))**6)},skin:(e,n,r,i,a,o)=>pi(t,b(Math.round(i*x),n),n,o),kind:l.style===`bomber`||l.style===`windbreaker`?B.satin:B.cloth,rough:l.style===`bomber`?.5:l.style===`windbreaker`?.45:.85,tex:Ro(r,(e,t,n)=>{let i=Math.round(e*x),a=g[Math.round(t*_)].p;n[0]=b(i,a)/X*c,n[1]=a/r.tileM})}),e.lod===0&&d===0&&l.style!==`vest`){let t=oo(e,Y(l.color,.8),12172482);t&&Vo(e,y,0,.05,l.hemY+.005,l.neckY-.006,t,B.cloth,.6,2)}if(l.print!==`none`&&e.lod===0){let t=io(e,l.print,l.color2,l.color);t&&Vo(e,y,Math.PI,1.05,.6*i,.8*i,t,B.cloth,.7,2)}if(l.style===`vest`){for(let t of[.63*i,.705*i])Ho(e,y,t,.022,14673642);if(e.lod===0){let t=io(e,`police`,15922679,l.color);t&&e.desc.top.style===`police`&&Vo(e,y,Math.PI,.9,.735*i,.8*i,t,B.reflect,.5,2)}}l.collar!==`none`&&Ko(e,l,y)}else l&&l.style===`poncho`&&qo(e,l)}function Bo(e){return(.299*(e>>16&255)+.587*(e>>8&255)+.114*(e&255))/255}function Vo(e,t,n,r,i,a,o,s,c,l){let u=e.b,d=Math.max(2,Math.ceil(r/.2)),f=Math.max(2,Math.ceil((a-i)/.09));e.m.grid({nu:d,nv:f,closed:!1,point:(e,o,s)=>{let c=n+(e-.5)*r,l=uo(i,a,o),d=t(c,l)+.0016;return s.set(Math.sin(c)*d,l,H(u,l)-Math.cos(c)*d)},invert:!0},{color:16777215,skin:(e,t,i,a,o,s)=>pi(u,n+(a-.5)*r,t,s),kind:s,rough:c,tex:{rect:o,mode:l,uv:(e,t,n,r,i,a)=>(a[0]=1-r,a[1]=i)}})}function Ho(e,t,n,r,i){let a=e.b,o=e.nT;e.m.grid({nu:o,nv:1,closed:!0,point:(e,i,o)=>{let s=e*X,c=n+(i-.5)*r,l=t(s,c)+.0015;return o.set(Math.sin(s)*l,c,H(a,c)-Math.cos(s)*l)},invert:!0},{color:i,skin:(e,t,n,r,i,o)=>pi(a,r*X,t,o),kind:B.reflect,rough:.4,emissive:1})}function Uo(e,t,n,r){let i=e.b,a=.032*i.s;e.m.grid({nu:e.nT,nv:3,closed:!0,point:(e,n,o)=>{let s=e*X,c=Math.round(n*3),l=t+(c<2?-.5:.5)*a,u=di(i,s,l,!0)+r+(c===0||c===3?0:.004);return o.set(Math.sin(s)*u,l,H(i,l)-Math.cos(s)*u)},invert:!0},{color:n,skin:(e,t,n,r,a,o)=>pi(i,r*X,t,o),kind:B.gloss,rough:.45});let o=di(i,0,t,!0)+r+.006,s=new Bn(.045*i.s,a*1.15,.006);e.m.geo(s,new Ce().makeTranslation(0,t,H(i,t)-o),{color:13157044,skin:R.hips,kind:B.metal,rough:.3})}function Wo(e,t,n,r,i,a,o){let s=e.b,c=s.H,l=e.lod===0?16:8;if(t===`crew`||t===`rib`||t===`high`){let r=t===`high`?.05*s.s:.012*s.s,c=ro(e,n.rib||t!==`crew`?o:a,a,!1);e.m.grid({nu:l,nv:2,closed:!0,point:(e,n,a)=>{let o=e*X-Math.PI,c=i(o),l=Math.round(n*2),u=c+(l===0?-.004:l===1?r*.6:r),d=(t===`high`?Math.max(s.neckR*1.18,di(s,o,c)*.9):di(s,o,c))+(t===`high`?.008:.004)+(l===2?-.001:.002);return a.set(Math.sin(o)*d,u,H(s,c)-Math.cos(o)*d)},invert:!0},{color:n.rib||t!==`crew`?o:Y(a,.94),skin:(e,t,n,r,i,a)=>pi(s,r*X-Math.PI,t,a),kind:B.cloth,rough:.9,tex:c?{rect:c,mode:1,uv:(e,t,n,r,i,a)=>(a[0]=r*6,a[1]=i)}:void 0});return}if(t===`shirt`||t===`polo`){let o=(t===`polo`?.022:.028)*s.s,u=(t===`polo`?.034:.04)*s.s,d=.16,f=l,p=t===`polo`&&n.color2!==n.color?n.color2:a;e.m.grid({nu:f,nv:3,closed:!1,point:(e,t,n)=>{let a=d+e*(X-2*d)-0,l=po(a,0),f=Math.max(0,Math.cos(l)),p=i(l)+.002,m=Math.max(s.neckR+.006,di(s,l,p)*.92),h=Math.round(t*3),g=m,_=p;if(h===1)_=p+o,g=m+.002;else if(h===2)_=p+o+.004,g=m+.009;else if(h===3){let e=fo(Math.abs(l)-d,.25);_=p+o-u*(1+.8*e)+.004,g=r(l,Math.max(_,.78*c))+.004+.012*f}return n.set(Math.sin(l)*g,_,H(s,p)-Math.cos(l)*g)},invert:!1},{color:(e,t,n,r,i,a)=>a.setHex(Math.round(i*3)===0?Y(p,.8):p),skin:(e,t,n,r,i,a)=>{pi(s,po(d+r*(X-2*d),0),t,a),Zr(a,R.neck,.3)},kind:B.cloth,rough:.85});return}t===`hood`&&Go(e,n,r,i,a)}function Go(e,t,n,r,i){let a=e.b,o=e.lod===0?14:7,s=e.lod===0?8:4,c=Y(i,.7);if(e.m.grid({nu:o,nv:s,closed:!0,point:(e,t,n)=>{let i=t*2-1,o=Math.PI+i*2.3*.5,s=Math.cos(i*Math.PI*.5),c=r(o)+.004,l=(.018+.038*s)*a.s,u=e*X,d=Math.max(a.neckR+.02,di(a,o,c)*.95)+l*.9+Math.cos(u)*l,f=c+Math.sin(u)*l*.55-s*.03*a.s;return n.set(Math.sin(o)*d,f,H(a,c)-Math.cos(o)*d)}},{color:(e,t,n,r,a,o)=>o.setHex(r<.25?c:i),skin:(e,t,n,r,i,a)=>{Yr(a,R.chest,R.neck,.25)},kind:B.cloth,rough:.92}),e.lod===0)for(let t of[-1,1]){let i=t*.28,o=r(i)-.005,s=n(i,o)+.004,c=.16*a.s,l=new Hn(.0022,.0022,c,4,1,!1),u=new Ce().makeTranslation(Math.sin(i)*s,o-c/2,H(a,o)-Math.cos(i)*s-.004);e.m.geo(l,u,{color:15855592,skin:R.chest,kind:B.cloth,rough:.8})}}function Ko(e,t,n){let r=e.b,i=e.lod===0?16:8;if(t.collar===`rib`||t.collar===`high`){let n=(t.collar===`high`?.055:.028)*r.s,a=t.gap>0?t.gap+.08:0;e.m.grid({nu:i,nv:2,closed:a===0,point:(e,i,o)=>{let s=a+e*(X-2*a),c=Math.round(i*2),l=t.neckY-.01,u=l+(c===0?0:c===1?n*.6:n),d=Math.max(r.neckR+.012,di(r,s,l)*.95)+(c===0?.012:.009)+t.off*.4;return o.set(Math.sin(s)*d,u,H(r,l)-Math.cos(s)*d)},invert:!0},{color:t.color2,skin:(e,t,n,r,i,a)=>(Yr(a,R.chest,R.neck,.35),void 0),kind:B.cloth,rough:.85});return}if(t.collar===`lapel`||t.collar===`v`){let i=r.H;for(let a of[-1,1])e.m.grid({nu:1,nv:4,closed:!1,point:(e,o,s)=>{let c=uo(.66*i,t.neckY+.005,o),l=t.gap+.35*V(.66*i,.83*i,c),u=t.collar===`lapel`?(.06+.4*Math.sin(o*Math.PI*.85))*.5:.08,d=a*(l+e*u),f=n(d,c)+.004+.003*(1-e);return s.set(Math.sin(d)*f,c,H(r,c)-Math.cos(d)*f)},invert:a>0},{color:Y(t.color,.92),skin:(e,t,n,i,o,s)=>pi(r,a*.4,t,s),kind:B.cloth,rough:.8})}}function qo(e,t){let n=e.b,r=n.H,i=e.lod===0?16:8,a=e.lod===0?[.86,.835,.8,.74,.64,.54,.46,.44]:[.86,.81,.7,.55,.44],o=a.length-1,s=(e,t)=>{let i=t*r,a=V(.86*r,.79*r,i),o=uo(n.neckR+.02,.3*n.s*(.8+.2*Math.abs(Math.sin(e))),a)+(.79*r-i>0?(.79*r-i)*.25:0);return Math.max(o,di(n,e,Math.max(i,n.torsoBottom),!0)+.04)};e.m.grid({nu:i,nv:o,closed:!0,point:(e,t,i)=>{let c=e*X,l=a[Math.round(t*o)],u=l*r,d=s(c,l)*(1+.03*Math.sin(c*7)*V(.7,.44,l));return i.set(Math.sin(c)*d,u,H(n,Math.max(u,n.torsoBottom))-Math.cos(c)*d)}},{color:(e,n,i,a,o,s)=>s.setHex(Y(t.color,.92+.08*V(.5*r,.8*r,n))),skin:(e,t,n,i,a,o)=>{Yr(o,R.chest,R.spine,V(.75*r,.55*r,t));let s=Math.sin(i*X);Math.abs(s)>.6&&t<.78*r&&Zr(o,s>0?R.armR:R.armL,.35*V(.78*r,.6*r,t))},kind:B.gloss,rough:.3,transparent:!1}),e.m.grid({nu:i,nv:o,closed:!0,point:(e,t,i)=>{let c=e*X,l=a[Math.round(t*o)],u=l*r,d=s(c,l)*(1+.03*Math.sin(c*7)*V(.7,.44,l))-.004;return i.set(Math.sin(c)*d,u,H(n,Math.max(u,n.torsoBottom))-Math.cos(c)*d)},invert:!0},{color:Y(t.color,.6),skin:R.chest,kind:B.gloss,rough:.4})}function Jo(e){let{b:t,fit:n,lod:r}=e,i=r===0?Eo:Do,a=e.nL,o=e.desc.skin,s=r===0?.03:.1,{top:c,outer:l}=n,u=l&&l.sleeveT>0&&l.style!==`poncho`?l:null,d=c&&c.sleeveT>0?c:null,f=e.desc.acc.find(e=>e.kind===`armSleeves`);for(let n of t.arms){let t=n.side,c=n.tMin;if(u){let r=to(e,u.pattern,u.color,u.patternColor),o=u.sleeveT,l=Ao(i,n.tMin,o,s),f=u.style===`bomber`||u.style===`cropped`?.006:0,p=jo(l,!1,!0,0,f),m=d&&d.sleeveT>=o-.05?(e,t)=>So(n,e,t,d.off,d.loose,0,1,0):(e,t)=>li(n,e,t)-.001,h=r.rect?co(.06,r.tileM):1;Lo(e,{limb:n,rows:p,R:(e,t)=>So(n,e,t,u.off*.8,u.loose,1.4,1.9,.004),Ru:m,attrs:{color:(e,n,i,a,s,c)=>{let l=p[Math.round(s*(p.length-1))].p;c.setHex(f&&l>o-.12?u.color2:r.vcol),Xo(c,a,t,l),u.style===`bomber`&&c.multiplyScalar(1-.05*Math.abs(Math.sin(l*7))**6)},skin:(e,t,r,i,a,o)=>mi(n,p[Math.round(a*(p.length-1))].p,o),kind:u.style===`bomber`||u.style===`windbreaker`?B.satin:B.cloth,rough:u.style===`bomber`?.5:.85,tex:Ro(r,(e,t,n)=>(n[0]=e*h,n[1]=p[Math.round(t*(p.length-1))].p*.3/r.tileM))}},a),c=o-.06,d&&d.sleeveT>o+.05&&(Zo(e,n,d,o-.05,d.sleeveT),c=d.sleeveT-.06)}else d&&(Zo(e,n,d,n.tMin,d.sleeveT),c=d.sleeveT-.06);let l=f&&r===0?Math.max(c+.02,.55):9,p=l<9?l+.08:1.99;if(c<p-.05){let l=Ao(i,c,p,s).map(e=>({p:e,k:1}));if(Lo(e,{limb:n,rows:l,R:(e,t)=>li(n,e,t),Ru:(e,t)=>li(n,e,t),attrs:{color:(e,n,i,a,s,c)=>{let u=l[Math.round(s*(l.length-1))].p;c.setHex(f&&r===1&&u>.6?f.color??15921906:o),Math.abs(u-1)<.1&&c.multiply(Yo),Xo(c,a,t,u,-.04)},skin:(e,t,r,i,a,o)=>mi(n,l[Math.round(a*(l.length-1))].p,o),kind:B.skin,rough:.6}},a),f&&r===0){let r=Math.max(c+.02,.55),i=jo(Ao(Do,r,1.96,s),!0,!0,0,0);Lo(e,{limb:n,rows:i,R:(e,t)=>li(n,e,t)+.004+.004*fo(t-1.95,.08),Ru:(e,t)=>li(n,e,t)-.001,attrs:{color:(e,n,r,a,o,s)=>{s.setHex(f.color??15921906),Xo(s,a,t,i[Math.round(o*(i.length-1))].p)},skin:(e,t,r,a,o,s)=>mi(n,i[Math.round(o*(i.length-1))].p,s),kind:B.satin,rough:.55}},a)}}}}let Yo=new F(1.03,.97,.95);function Xo(e,t,n,r,i=.1){let a=Math.sin(t*X)*n;e.multiplyScalar(1-i*Math.max(0,-a)*(r<1.1?1:.5))}function Zo(e,t,n,r,i){let a=e.lod===0?Eo:Do,o=e.lod===0?.03:.1,s=to(e,n.pattern,n.color,n.patternColor),c=Ao(a,r,i,o),l=i>1.8,u=l&&n.rib?.006:0,d=jo(c,!1,!0,0,u),f=l?.002:n.style===`blouse`?.014:.009,p=s.rect?co(.06,s.tileM):1,m=d.length-1;Lo(e,{limb:t,rows:d,R:(e,a)=>So(t,e,a,n.off,n.loose*.8,l?1.4:r+.2,i,f),Ru:(e,n)=>li(t,e,n)-.001,attrs:{color:(e,r,a,o,c,f)=>{let p=Math.round(c*m);if(f.setHex(p===m?Y(s.vcol,.8):u&&d[p].p>i-.1?Y(n.color2,.95):s.vcol),l){let e=o*X,n=Math.max(0,Math.cos(e))*.6+Math.max(0,-Math.sin(e)*t.side)*.4;f.multiplyScalar(1-.18*n*fo(d[p].p-1,.08)-.07*fo(d[p].p-1.78,.1))}Xo(f,o,t.side,d[p].p)},skin:(e,n,r,i,a,o)=>mi(t,d[Math.round(a*m)].p,o),kind:n.style===`blouse`?B.satin:B.cloth,rough:n.style===`blouse`?.55:.88,tex:Ro(s,(e,t,n)=>(n[0]=e*p,n[1]=d[Math.round(t*m)].p*.3/s.tileM))}},e.nL)}function Qo(e){let{b:t,fit:n,lod:r}=e,i=r===0?Oo:ko,a=e.nL,o=e.desc.skin,s=r===0?.03:.1,{bottom:c}=n,l=Math.min(2,n.shoeT);for(let r of t.legs){let t=r.side,u=r.tMin;if(c.legT>0){let n=to(e,c.pattern,c.color,c.patternColor),o=Math.min(c.legT,l+.02),d=Ao(i,r.tMin,o,s),f=c.style===`track`?.008:0,p=jo(d,!1,o<1.99,0,f),m=p.length-1,h=n.rect?co(.08,n.tileM):1;Lo(e,{limb:r,rows:p,R:(e,t)=>Co(r,e,t,c.off,c.loose,c.flare),Ru:(e,t)=>li(r,e,t)-.001,attrs:{color:(e,r,i,a,s,l)=>{let u=Math.round(s*m),d=p[u].p,f=a*X;l.setHex(n.vcol);let h=Math.sin(f)*t;if(l.multiplyScalar(1-.18*Math.max(0,-h)*V(.5,0,d)-(u===m&&o<1.99?.25:0)),c.pattern===`denim`){let e=Math.max(0,Math.cos(f));l.multiplyScalar(1+.22*e*fo(d-.4,.3)+.15*e*fo(d-1,.12)-.08*Math.max(0,-h))}c.style===`slacks`&&Math.abs(po(f,0))<.2&&l.multiplyScalar(1.06);let g=Math.max(0,-Math.cos(f));l.multiplyScalar(1-.16*g*fo(d-1.02,.07)-.06*Math.max(0,Math.cos(f))*fo(d-.12,.08)),o>1.8&&d>1.62&&l.multiplyScalar(1-.1*Math.abs(Math.sin((d-1.62)*26+f*2))*V(1.62,1.8,d)),c.style===`track`&&Math.abs(po(f,t>0?Math.PI/2:-Math.PI/2))<.3&&l.setHex(c.color2)},skin:(e,t,n,i,a,o)=>mi(r,p[Math.round(a*m)].p,o),kind:B.cloth,rough:.88,tex:Ro(n,(e,t,r)=>(r[0]=e*h,r[1]=p[Math.round(t*m)].p*.42/n.tileM))}},a),u=o-.06}if(u<l-.04){let d=n.socks?Math.max(u+.02,n.socks.topT):9,f=[];d<l?(d>u+.05&&f.push([u,d+.01,o,B.skin]),f.push([Math.max(u,d-.01),l,n.socks.color,B.cloth])):f.push([u,l,o,B.skin]);for(let[n,o,l,u]of f){let d=Ao(i,n,o,s).map(e=>({p:e,k:1})),f=u===B.cloth,p=d.length-1;Lo(e,{limb:r,rows:d,R:(e,t)=>li(r,e,t)+(f?.002+(t<n+.05?.001:0):0)+(c.style,0),Ru:(e,t)=>li(r,e,t),attrs:{color:(e,r,i,a,o,s)=>{let c=d[Math.round(o*p)].p;s.setHex(l),!f&&Math.abs(c-1)<.12&&s.multiply(Yo),f&&d[Math.round(o*p)].p<n+.04&&s.multiplyScalar(.92),Xo(s,a,t,c,.06)},skin:(e,t,n,i,a,o)=>mi(r,d[Math.round(a*p)].p,o),kind:u,rough:f?.9:.6}},a)}}}c.skirt&&$o(e)}function $o(e){let{b:t,fit:n,lod:r}=e;t.H;let i=n.bottom.skirt,a=n.bottom,o=n.top,s=o&&!o.tucked?Math.min(a.waistY,o.hemY+.03):a.waistY,c=i.hemY,l=i.pleats,u=l?r===0?l*2:l:e.nT,d=r===0?Math.max(4,Math.ceil((s-c)/.065)):Math.max(2,Math.ceil((s-c)/.15)),f=to(e,a.pattern,a.color,a.patternColor),p=t.legs[1].a.x,m=t.torsoBottom,h=(e,n)=>{let r=Math.max(0,(t.legs[1].a.y-n)/(t.legs[1].a.y-t.legs[1].b.y)),i=li(t.legs[1],Math.PI/2,Math.min(1.2,r))+.012,a=p+i,o=i*1.12,s=Math.sin(e),c=Math.cos(e);return 1/Math.sqrt((s/a)**2+(c/o)**2)},g=(e,n)=>{let r=n>m?yo(t,e,n,a.off+.004,.3):0,o=Math.max(r,h(e,n),n<m+.06?yo(t,e,m+.06,a.off+.004,.3)*.98:0),u=Math.max(0,t.H*.56-n),d=o+i.flare*u;if(l){let r=(e/X*l%1+1)%1;d+=(Math.abs(r-.5)*2-.5)*.012*V(s,c,n)*t.s}return xo(t,_,e,n,d)},_=bo(n),v=[];v.push({y:s,k:1});for(let e=1;e<d;e++)v.push({y:uo(s,c,e/d),k:1});v.push({y:c,k:1}),v.push({y:c+.004,k:.9});let y=v.length-1,b=f.rect?co(.18,f.tileM):1;e.m.grid({nu:u,nv:y,closed:!0,point:(e,n,r)=>{let i=v[Math.round(n*y)],a=e*X,o=g(a,i.y)*i.k+(i.k,0);return r.set(Math.sin(a)*o,i.y,H(t,Math.max(i.y,m))-Math.cos(a)*o)}},{color:(e,t,n,r,i,a)=>{let o=Math.round(i*y);if(a.setHex(o>=y-1?Y(f.vcol,.55):f.vcol),l){let e=(r*l%1+1)%1;a.multiplyScalar(e<.5?1:.86)}a.multiplyScalar(1-.08*V(s-.05,s,t))},skin:(e,t,n,r,i,a)=>{let o=r*X,s=V(m+.05,c,t);Yr(a,R.hips,R.hips,0);let l=.5+.5*Math.max(-1,Math.min(1,Math.sin(o)*2.5));Zr(a,R.thighR,.55*s*l),Zr(a,R.thighL,.55*s*(1-l))},kind:B.cloth,rough:.85,tex:Ro(f,(e,t,n)=>(n[0]=e*b,n[1]=v[Math.round(t*y)].y/f.tileM))}),e.m.grid({nu:Math.max(8,u>>1),nv:2,closed:!0,point:(e,n,r)=>{let i=uo(c+.004,uo(c,s,.5),n),a=e*X,o=g(a,i)-.005;return r.set(Math.sin(a)*o,i,H(t,Math.max(i,m))-Math.cos(a)*o)}},{color:Y(f.vcol,.45),skin:(e,t,n,r,i,a)=>{let o=r*X,s=V(m+.05,c,t);Yr(a,R.hips,R.hips,0);let l=.5+.5*Math.max(-1,Math.min(1,Math.sin(o)*2.5));Zr(a,R.thighR,.55*s*l),Zr(a,R.thighL,.55*s*(1-l))},kind:B.cloth,rough:.9});let x=!!n.outer&&n.outer.gap===0&&n.outer.hemY<a.waistY-.02;n.bottom.belt&&(!o||o.tucked)&&!x&&Uo(e,a.waistY-.012,n.bottom.belt,a.off+.006)}let es=Math.PI*2,ts=(e,t,n)=>e+(t-e)*n;function ns(e,t,n,r,i){let a=Math.sin(e),o=Math.cos(e);i[0]=t*Math.sign(a)*Math.abs(a)**(2/r),i[1]=n*Math.sign(o)*Math.abs(o)**(2/r)}function rs(e){let{b:t,m:n,lod:r}=e,i=e.desc.skin,a=t.joints.p,o=t.s*(t.female?.93:1)*(t.student?.95:1),s=q(i,16771296,.45),c=Y(i,.94),l=q(i,15245456,.12),u=[0,0];for(let e of[-1,1]){let t=e<0?R.handL:R.handR,d=e<0?R.fingersL:R.fingersR,f=a[t],p=a[d],m=new N().subVectors(p,f).normalize(),h=new N(e,0,0),g=new N().crossVectors(m,h).normalize();g.z>0&&g.negate(),h.crossVectors(g,m).normalize().multiplyScalar(-1),h.x*e<0&&h.negate();let _=f.distanceTo(p),v=r===0?[[-.25,.025,.0148],[.1,.034,.0138],[.6,.042,.0122],[1,.04,.0106]]:[[-.2,.027,.021],[.5,.042,.017],[1,.04,.015]],y=v.length-1,b={color:(e,t,n,r,a,o)=>{let s=Math.round(a*y);o.setHex(s===y?c:i),Math.sin(r*es)<-.3&&o.lerp(is.setHex(l),.6)},skin:(n,r,i,a,o,s)=>{let c=Math.round(o*y);c===0?Yr(s,e<0?R.foreL:R.foreR,t,.5):Yr(s,t,d,c===y?.2:0)},kind:B.skin,rough:.62};n.grid({nu:6,nv:y,closed:!0,point:(e,t,n)=>{let r=v[Math.round(t*y)];ns(e*es,r[2]*o,r[1]*o,2.6,u);let i=u[0]<0?u[0]*(1.12+.12*Math.max(0,u[1]/(r[1]*o))):u[0];return n.copy(f).addScaledVector(m,r[0]*_).addScaledVector(h,i).addScaledVector(g,u[1])},invert:e<0},b);let x=r===0?4:1,S=r===0?[[.74,.074,.0088,.3],[.25,.082,.0092,.36],[-.24,.077,.0088,.42],[-.72,.061,.0078,.5]]:[[0,.078,.034,.25]],C=r===0?[0,.52,1]:[0,.6,1],w=C.length-1,T=r===0?5:6,E=new N,D=new N,O=new N;for(let a=0;a<x;a++){let[c,l,f,_]=S[a],v=l*o,y=f*o,b=(r===0?.0068:.012)*o,x=.041*o-y,k=c*.06,A=(e,t)=>{let n=_*.55,r=_*1.05,i=Math.min(e,.52),a=Math.max(0,e-.52);return t.copy(p).addScaledVector(g,c*x).addScaledVector(m,-.012*o*(1-e)),D.copy(m).multiplyScalar(Math.cos(n)).addScaledVector(h,-Math.sin(n)).addScaledVector(g,k).normalize(),t.addScaledVector(D,i*v),a>0&&(D.copy(m).multiplyScalar(Math.cos(n+r)).addScaledVector(h,-Math.sin(n+r)).addScaledVector(g,k).normalize(),t.addScaledVector(D,a*v)),t};n.grid({nu:T,nv:w,closed:!0,cap1:!0,point:(e,t,n)=>{let r=Math.round(t*w),i=C[r];A(i,E),A(Math.min(1,i+.05),O).sub(E).normalize(),i>=1&&A(.95,O).sub(E).negate().normalize();let a=as.copy(h).addScaledVector(O,-h.dot(O)).normalize(),o=os.crossVectors(O,a).normalize();o.dot(g)<0&&o.negate();let s=e*es,c=i>=1?.62:1-.18*i;return ns(s,b*c,y*c,2.8,u),n.copy(E).addScaledVector(a,u[0]).addScaledVector(o,u[1])},invert:e<0},{color:(e,t,n,a,o,c)=>{let l=Math.round(o*w);c.setHex(i);let u=Math.sin(a*es);l>=w&&u>.3&&r===0?c.setHex(s):l===0&&c.multiplyScalar(.96)},skin:(e,n,r,i,a,o)=>Yr(o,t,d,V(0,.2,C[Math.round(a*w)])),kind:B.skin,rough:.6})}if(r===0){let e=f.clone().addScaledVector(m,.36*_).addScaledVector(g,.022*o).addScaledVector(h,-.007*o),r=m.clone().multiplyScalar(.84).addScaledVector(g,.4).addScaledVector(h,-.36).normalize(),a=new N().crossVectors(r,h).normalize(),c=new N().crossVectors(a,r).normalize(),l=.056*o,u=[[-.25,.0125],[.45,.0094],[1,.0078]];n.grid({nu:5,nv:u.length-1,closed:!0,cap1:!0,point:(t,n,i)=>{let s=u[Math.round(n*(u.length-1))],d=t*es,f=-.01*o*s[0]*s[0];return i.copy(e).addScaledVector(r,s[0]*l).addScaledVector(a,Math.cos(d)*s[1]*o).addScaledVector(c,Math.sin(d)*s[1]*.9*o+f)},invert:!0},{color:(e,t,n,r,a,o)=>o.setHex(Math.round(a*2)===2&&Math.sin(r*es)>.3?s:i),skin:t,kind:B.skin,rough:.6})}}}let is=new F,as=new N,os=new N,ss={sneaker:{hc:.098,hi:.075,ht:.05,sole:.028,w:1.02,toe:1,gloss:!1,open:!1},dress:{hc:.08,hi:.066,ht:.036,sole:.014,w:.94,toe:.7,gloss:!0,open:!1},loafer:{hc:.074,hi:.064,ht:.036,sole:.016,w:.96,toe:.8,gloss:!0,open:!1},flat:{hc:.05,hi:.035,ht:.028,sole:.008,w:.95,toe:.8,gloss:!1,open:!0},heel:{hc:.055,hi:.035,ht:.026,sole:.008,w:.9,toe:.6,gloss:!0,open:!0},boot:{hc:.1,hi:.07,ht:.04,sole:.02,w:1.1,toe:.9,gloss:!1,open:!1},rainboot:{hc:.1,hi:.075,ht:.045,sole:.018,w:1.12,toe:1,gloss:!0,open:!1}};function cs(e){let t=e.desc.shoes.style;if(t===`slipper`||t===`sandal`){for(let n of[-1,1])fs(e,n),ps(e,n,t===`sandal`);return}let n=ss[t]??ss.sneaker;for(let r of[-1,1])us(e,r,n),(t===`boot`||t===`rainboot`)&&ds(e,r,t===`rainboot`)}function ls(e,t){let n=e.b,r=n.joints.p[t<0?R.footL:R.footR],i=t*.09;return{A:r,fwd:new N(Math.sin(i),0,-Math.cos(i)),right:new N(Math.cos(i),0,Math.sin(i)),heelZ:.058*n.s,len:n.footLen}}function us(e,t,n){let{b:r,m:i,lod:a,desc:o}=e,s=r.s*(r.female?.95:1),{A:c,fwd:l,right:u,heelZ:d,len:f}=ls(e,t),p=o.shoes.color,m=o.shoes.color2??p,h=o.shoes.sole??(n.gloss?o.shoes.style===`rainboot`?Y(o.shoes.color,.8):4863014:15855593),g=a===0?[0,.07,.25,.45,.65,.82,.94,1]:[0,.2,.55,.85,1],_=g.length-1,v=a===0?12:6,y=[0,0],b=.047*s*n.w,x=e=>{let t=.62+.38*Math.sin(Math.min(1,e/.3)*Math.PI*.5),r=e>.75?Math.max(0,1-(e-.75)/.25)**(.5*n.toe+.2):1,i=1+.08*Math.exp(-((e-.68)**2)/.02);return b*t*Math.max(.12,r)*i},S=e=>{let t=e<.3?n.hc:e<.62?ts(n.hc,n.hi,(e-.3)/.32):ts(n.hi,n.ht,(e-.62)/.38),r=e<.04?.75+6*e:e>.95?Math.max(.25,1-(e-.95)*14):1;return t*s*r},C=e=>-t*.006*s*Math.sin(e*Math.PI),w=(e,t,r)=>{let i=g[Math.round(t*_)],a=e*es,o=x(i),p=S(i);ns(a,o,1,3.4,y);let m=.5-.5*y[1],h=m*p;y[0]*=1-.3*(Math.max(0,m-.25)/.75)**1.6;let v=-d+i*f,b=i>.85?(i-.85)*.05*s:0;return r.set(c.x,0,c.z).addScaledVector(u,C(i)+y[0]).addScaledVector(l,v).setY(h+b+(n.gloss&&n.hc<.06&&i<.25&&y[1],0))},T=o.shoes.style,E=eo(e,`shoe:${T}:${p}:${m}:${h}`,256,128,!1,Za(T,p,m,h,n.open));if(i.grid({nu:v,nv:_,closed:!0,cap0:!0,cap1:!0,point:w,invert:!0},{tex:E?{rect:E,mode:0,uv:(e,t,n,r,i,a)=>{a[0]=g[Math.round(i*_)],a[1]=1-r}}:void 0,color:(e,t,r,i,c,l)=>{let u=g[Math.round(c*_)];ns(i*es,1,1,2.8,y);let d=.5-.5*y[1],f=S(u);t<n.sole*s*.95||d<.2&&f>0?l.setHex(h):l.setHex(p),!n.gloss&&!n.open&&t>n.sole*s&&Math.abs(y[0])>.7&&u>.3&&u<.62&&d>.3&&d<.62&&l.setHex(m),!n.gloss&&u<.12&&d>.45&&l.setHex(m),n.open&&d>.8&&u>.2&&u<.72&&l.setHex(o.skin),!n.gloss&&!n.open&&d>.9&&u>.36&&u<.62&&a===0&&l.setHex(Y(m===p?16053488:m,1)),u<=.3&&d>.92&&l.multiplyScalar(.35)},skin:(e,n,r,i,a,o)=>{let c=g[Math.round(a*_)];Yr(o,t<0?R.footL:R.footR,t<0?R.shinL:R.shinR,c<.35&&n>.06*s?.35:0)},kind:n.gloss?B.gloss:B.cloth,rough:n.gloss?.28:.75}),o.shoes.style===`heel`){let e=new Bn(.022*s,.03,.026*s),n=new N(c.x,.015,c.z).addScaledVector(l,-d+.02*s);i.geo(e,new Ce().makeTranslation(n.x,n.y,n.z),{color:1380882,skin:t<0?R.footL:R.footR,kind:B.gloss,rough:.3})}}function ds(e,t,n){let{b:r,m:i,desc:a}=e,o=r.legs[t<0?0:1],s=n?1.45:1.55,c=[s,s+.02,1.7,1.85,2],l=new N,u=new N,d=new N,f=new N,p=e.nL;i.grid({nu:p,nv:c.length-1,closed:!0,point:(e,t,r)=>{let i=Math.round(t*(c.length-1)),a=c[i],s=e*es,p=li(o,s,a)+(i===0?.002:n?.016:.01);return ci(o,a,l,u,d,f),r.copy(l).addScaledVector(f,Math.sin(s)*p).addScaledVector(d,Math.cos(s)*p)}},{color:(e,t,n,r,i,o)=>o.setHex(Math.round(i*(c.length-1))<=1?Y(a.shoes.color,.8):a.shoes.color),skin:(e,t,n,r,i,a)=>mi(o,c[Math.round(i*(c.length-1))],a),kind:n?B.gloss:B.cloth,rough:n?.25:.7})}function fs(e,t){let{b:n,m:r,lod:i,desc:a}=e,o=n.s*(n.female?.93:1),{A:s,fwd:c,right:l,heelZ:u,len:d}=ls(e,t),f=.012*o,p=i===0?[0,.12,.35,.6,.8,.9,1]:[0,.4,1],m=p.length-1,h=i===0?10:5,g=[0,0],_=q(a.skin,16771296,.4),v=e=>{let n=(e*-t+1)/2;return 1-.14*n*n-.02*n};r.grid({nu:h,nv:m,closed:!0,cap0:!0,cap1:!0,point:(e,t,n)=>{let r=Math.round(t*m),a=p[r],h=.044*o*(.6+.4*Math.sin(Math.min(1,a/.35)*Math.PI*.5))*(a>.8?Math.max(.55,1-(a-.8)*1.6):1),_=(a<.35?ts(.085,.062,a/.35):a<.75?ts(.062,.028,(a-.35)/.4):ts(.028,.016,(a-.75)/.25))*o;ns(e*es,h,1,2.6,g);let y=.5-.5*g[1],b=g[0]/h,x=-u+a*d*.98;a>.8&&i===0&&(x=-u+d*(.8+(a-.8)*v(b))*.98);let S=a>.82&&y>.5&&i===0?.0025*o*Math.abs(Math.cos(b*Math.PI*2.5))**6:0;return n.set(s.x,0,s.z).addScaledVector(l,g[0]).addScaledVector(c,x).setY(f+y*_-S)},invert:!0},{color:(e,t,n,r,o,s)=>{let c=p[Math.round(o*m)];s.setHex(a.skin),ns(r*es,1,1,2.6,g),c>=.93&&g[1]<-.3&&i===0&&s.setHex(_),.5-.5*g[1]<.15&&s.multiplyScalar(.85)},skin:t<0?R.footL:R.footR,kind:B.skin,rough:.6})}function ps(e,t,n){let{b:r,m:i,desc:a}=e,o=r.s*(r.female?.95:1),{A:s,fwd:c,right:l,heelZ:u,len:d}=ls(e,t),f=t<0?R.footL:R.footR,p=a.shoes.color2??16053492,m=a.shoes.color,h=a.shoes.sole??m,g=e.lod===0?[0,.12,.45,.8,1]:[0,.5,1],_=g.length-1,v=e.lod===0?8:5,y=[0,0],b=.014*o;i.grid({nu:v,nv:_,closed:!0,cap0:!0,cap1:!0,point:(e,t,n)=>{let r=g[Math.round(t*_)],i=.05*o*(.75+.25*Math.sin(Math.min(1,r/.4)*Math.PI*.5))*(r>.85?Math.max(.35,1-(r-.85)*4):1)*(r<.05?.8:1);ns(e*es,i,1,4,y);let a=.5-.5*y[1];return n.set(s.x,0,s.z).addScaledVector(l,y[0]).addScaledVector(c,-u-.012*o+r*(d+.03*o)).setY(a*b)},invert:!0},{color:(e,t,n,r,i,a)=>a.setHex(t>b*.8?p:h),skin:f,kind:B.gloss,rough:.55});let x=n?[.45,.72]:[.62];for(let t of x){let r=-u+t*d,a=.052*o,p=(n?.03:.036)*o,h=(n?.012:.05)*o,g=e.lod===0?6:3;i.grid({nu:g,nv:1,closed:!1,point:(e,t,n)=>{let i=Math.PI*e,o=-Math.cos(i)*a,u=b+Math.sin(i)*p+.002,d=r+(t-.5)*h;return n.set(s.x,0,s.z).addScaledVector(l,o).addScaledVector(c,d).setY(u)},invert:!1},{color:m,skin:f,kind:B.gloss,rough:.5}),i.grid({nu:g,nv:1,closed:!1,point:(e,t,n)=>{let i=Math.PI*e,o=-Math.cos(i)*(a-.003),u=b+Math.sin(i)*(p-.003)+.002,d=r+(t-.5)*h;return n.set(s.x,0,s.z).addScaledVector(l,o).addScaledVector(c,d).setY(u)},invert:!0},{color:Y(m,.6),skin:f,kind:B.gloss,rough:.5})}}let ms=Math.PI*2,hs=(e,t,n)=>e+(t-e)*n,gs=(e,t)=>Math.exp(-(e*e)/(t*t)),_s=[[0,.2],[.5,.215],[.95,.3],[1.28,.52],[1.45,.5],[1.62,.42],[1.9,.5],[2.4,.64],[Math.PI,.72]],vs=[[0,.19],[.55,.205],[.95,.27],[1.28,.5],[1.45,.5],[1.62,.44],[1.9,.52],[2.4,.66],[Math.PI,.74]],ys=[[0,.19],[.55,.205],[.84,.27],[1.04,.47],[1.6,.52],[2.2,.55],[Math.PI,.58]];function bs(e,t){let n=e.length;if(t<=e[0][0])return e[0][1];for(let r=0;r<n-1;r++)if(t<=e[r+1][0]){let n=(t-e[r][0])/(e[r+1][0]-e[r][0]),i=n*n*(3-2*n);return hs(e[r][1],e[r+1][1],i)}return e[n-1][1]}let xs=e=>{let t=(e%ms+ms)%ms;return t>Math.PI&&(t=ms-t),t};function Ss(e,t){let n=(e,t,n=.32,r=.1)=>(i,a)=>hs(e,t,V(n-r,n+r,a+.08*(xs(i)/Math.PI)));switch(e){case`bald`:return null;case`buzz`:return{hl:_s,th:()=>.0028,shave:.35};case`fade`:return{hl:_s,th:(e,t)=>n(.014,.0026,.3,.14)(e,t)+.006*gs(xs(e),.5)*gs(t-.12,.1),shave:.45,tufts:`back`};case`sidepart`:return{hl:_s,th:(e,t)=>n(.014,.006,.36,.14)(e,t)+.006*V(-.6,.6,Math.sin(e))*V(.35,.1,t)+.004*gs(xs(e),.5)*gs(t-.15,.1),tufts:`side`};case`twoblock`:return{hl:_s,th:(e,t)=>hs(.015,.0035,V(.28,.42,t)*V(.8,1.1,xs(e)))*(t>.3&&xs(e)<.95?.6:1),bangs:{d:.36,span:.95,jag:.03,th:.007,sweep:.03},shave:.35,tufts:`front`};case`bowl`:return{hl:[[0,.4],[.9,.42],[1.35,.5],[1.62,.46],[2.2,.56],[Math.PI,.62]],th:()=>.017,bangs:{d:.4,span:1.15,jag:.004,th:.013}};case`spiky`:return{hl:_s,th:n(.012,.004,.32),spikes:16,shave:.25};case`undercut`:return{hl:_s,th:(e,t)=>xs(e)<1.05&&t<.33+.1*(1-xs(e)/1.05)?.022+.012*gs(xs(e),.45)*gs(t-.12,.1):.0022,shave:.6,tufts:`back`};case`elder`:return{hl:[[0,.24],[.5,.26],[.95,.33],[1.28,.52],[1.62,.44],[2.4,.64],[Math.PI,.7]],th:n(.009,.005,.35)};case`balding`:return{hl:[[0,.3],[.95,.36],[1.28,.52],[1.62,.44],[2.4,.64],[Math.PI,.7]],th:()=>.006,crown:.3,shave:.2};case`perm`:return{hl:[[0,.19],[.95,.27],[1.3,.48],[1.62,.44],[2.4,.6],[Math.PI,.66]],th:(e,t)=>.02+.006*V(.1,.4,t),curls:1};case`bob`:return{hl:ys,th:(e,t)=>.014+.005*V(.2,.45,t),curtain:{span0:.92,endY:-.95,th:.014,curl:1,part:-.35},bangs:{d:.3,span:.7,jag:0,th:.01,sweep:.12}};case`long`:return{hl:ys,th:(e,t)=>.011+.004*V(.2,.45,t),curtain:{span0:.86,endY:.7,th:.013,part:0}};case`wavy`:return{hl:ys,th:(e,t)=>.013+.006*V(.2,.45,t),curtain:{span0:.88,endY:.76,th:.016,wave:1,part:-.4}};case`bangs`:return{hl:ys,th:()=>.012,bangs:{d:.405,span:1.02,jag:.006,th:.009},curtain:{span0:1.02,endY:.795,th:.014,curl:.4}};case`ponytail`:return{hl:vs,th:()=>.0065,tail:`pony`,bangs:{d:.3,span:.72,jag:.022,th:.0055,sweep:.1},locks:!0};case`bun`:return{hl:vs,th:()=>.007,tail:`bun`,locks:!0}}return null}function Cs(e,t,n,r,i){if(W(e,t,n,0,i,!1),r===0)return i;let a=1-V(0,.35,n),o=V(.75,1,n),s=Math.sin(t)*(1-a),c=-Math.cos(t)*(1-a),l=a-.3*o,u=Math.hypot(s,l,c)||1;return i.set(i.x+s/u*r,i.y+l/u*r,i.z+c/u*r)}let ws=e=>Math.sin(e*23.1)*.6+Math.sin(e*41.7+1.3)*.4;function Ts(e){let t=e.bangs;return n=>{let r=xs(n),i=bs(e.hl,r)+.006*ws(n)*V(.3,.9,r);if(t&&r<t.span){let e=V(t.span,t.span-.2,r),a=t.jag*ws(n*1.7),o=(t.sweep??0)*Math.sin(n*1.3);i=hs(i,t.d+a+o,e)}return i}}function Es(e,t){let n=Ss(e,t);return!n||n.crown?null:Ts(n)}function Ds(e,t){let n=Ss(e,t);if(!n)return null;let r=Ts(n),i=.035,a=n.crown;return a===void 0?(e,t)=>t<r(e)-i:(e,t)=>xs(e)>1.12&&t>a+i&&t<r(e)-i}function Os(e,t){let n=Ss(e,t);return!!n?.curtain&&n.curtain.span0<1.4}function ks(e,t){let{desc:n,h:r,b:i,m:a,lod:o}=e,s=Ss(n.hair.style,i.female);if(!s)return;let c=r.hh/.23,l=n.hair.color,u=n.hair.color2??l,d=Y(l,.62),f=n.skin,p=no(e),m=B.hair,h=.55,g=s.bangs,_=Ts(s),v=e=>t.d>0&&e<t.d,y=s.bangs||n.hair.style===`bowl`||n.hair.style===`bob`,b=[`twoblock`,`sidepart`,`fade`,`undercut`,`spiky`,`bowl`,`elder`].includes(n.hair.style),x=!!s.curtain||s.tail!==void 0,S=e=>(s.th(0,e)+s.th(Math.PI/2,e)+s.th(Math.PI,e)+s.th(-Math.PI/2,e))*.25,C=(e,n)=>{let r=(n<.16?hs(S(n),s.th(e,n),V(0,.16,n)):s.th(e,n))*c;return b&&(r*=1+.32*Math.sin(e*12+2.2*Math.sin(n*9))*V(.04,.2,n)*V(.004*c,.012*c,r)),(!y||xs(e)>(s.bangs?.span??0)+.1)&&(r*=.22+.78*V(_(e),_(e)-.16,n)),b&&(r*=1-.45*V(.22,.42,n)*V(.7,1.3,xs(e))),g&&xs(e)<g.span&&n>.24&&(r=hs(r,g.th*c,V(.24,.3,n))),s.curls&&(r+=s.curls*.005*c*(.5+.5*Math.sin(e*9+n*21)*Math.sin(n*27-e*6.5))),v(n)&&(r*=t.squash),r},w=s.crown??0,T=[];if(s.crown){let e=o===0?20:10;for(let t=0;t<=e;t++)T.push(1+t/e*(ms-2))}else if(o===0){for(let e=0;e<5;e++)T.push(-Math.PI+e/5*(Math.PI-1.25));for(let e=-1.25;e<1.249999;e+=1.25/7)T.push(e);for(let e=0;e<=5;e++)T.push(1.25+e/5*(Math.PI-1.25))}else for(let e=0,t=10;e<=10;e++)T.push(-Math.PI+e/10*ms);let E=T.length-1,D=(o===0?s.curls?[0,.14,.3,.46,.62,.8,1]:[0,.22,.48,.74,1]:[0,.45,1]).map(e=>({f:e,band:-1,k:1,cut:0}));s.crown&&o===0&&(D[0].cut=.6),o===0&&D.push({f:1,band:.02,k:1,cut:.3}),D.push({f:1,band:0,k:1,cut:o===0?.62:0}),D.push({f:1,band:0,k:0,cut:o===0?.85:0});let O=D.length-1,k=(e,t)=>{let n=_(e);return t.band>=0?n-t.band:hs(w,n-(o===0?.045:0),t.f)},A=x?9:12,j=(e,t,n,r,i,a)=>{let o=T[Math.round(r*E)];a[0]=(o+Math.PI)/ms*A,a[1]=k(o,D[Math.round(i*O)])*2.4},ee=(e,t,n,r,i)=>{i.setHex(l);let a=1.08-.28*V(.3,.75,t);i.multiplyScalar(a),r&&i.setHex(d);let o=(s.shave?Math.min(1,s.shave*1.6)*V(.007*c,.0025*c,n):0)+(b?.25*V(.35,.55,t)*V(.9,1.4,xs(e)):0);return o>0&&i.lerp(Ms.setHex(f),o*.62),i};a.grid({nu:E,nv:O,closed:!1,point:(e,t,n)=>{let i=T[Math.round(e*E)],a=D[Math.round(t*O)],o=k(i,a);return Cs(r,i,o,a.k>0?C(i,o):6e-4,n)}},{color:(e,t,n,r,i,a)=>{let o=T[Math.round(r*E)],s=D[Math.round(i*O)],c=k(o,s);return ee(o,c,C(o,c),s.k===0,a)},skin:R.head,kind:m,rough:h,bump:(e,t,n,r,i)=>p?D[Math.round(i*O)].cut:0,tex:p?{rect:p,mode:3,uv:j}:void 0});let te=e.trim??0;if(o===0&&te<2&&p&&!s.crown&&!v(.2)&&S(.2)*c>.0045*c){let e=T.filter((e,t)=>t%2==0||t===E),t=e.length-1,n=[0,.3,.62,.9],i=n.length-1,o=(.0022+.0014*!!x)*c,s=(e,t)=>hs(0,_(e)-(x?.02:.055),t);a.grid({nu:t,nv:i,closed:!1,point:(a,c,l)=>{let u=e[Math.round(a*t)],d=s(u,n[Math.round(c*i)]);return Cs(r,u,d,C(u,d)+o*(1-.5*n[Math.round(c*i)]),l)}},{color:(r,a,o,c,l,d)=>{let f=e[Math.round(c*t)],p=s(f,n[Math.round(l*i)]);return ee(f,p,C(f,p),!1,d).multiplyScalar(1.06).lerp(Ms.setHex(u),.25)},skin:R.head,kind:m,rough:h,bump:(e,t,n,r,a)=>Math.round(a*i)===i?.8:Math.round(a*i)===0?.55:.46,tex:{rect:p,mode:3,uv:(r,a,o,c,l,u)=>{let d=e[Math.round(c*t)];u[0]=(d+Math.PI)/ms*A*1.15+.37,u[1]=s(d,n[Math.round(l*i)])*2.4+.21}}})}s.curtain&&Ps(e,s,_,C,l,u,d,p,t),o===0&&!v(.1)&&(s.tufts&&Fs(e,s.tufts,_,C,l,u,p),s.bangs&&s.bangs.jag>.01&&Fs(e,`fringe`,_,C,l,u,p,s.bangs.span),s.locks&&Is(e,_,C,l,u,p),p&&(As(e,s,_,C,l,u,p),te<2&&js(e,s,_,C,l,u,p))),s.tail===`pony`&&Ls(e,l,u,d,p),s.tail===`bun`&&Rs(e,l,d,p),s.spikes&&o===0&&zs(e,s.spikes,C,l)}function As(e,t,n,r,i,a,o){let{h:s,m:c}=e,l=s.hh/.23,u=e.desc.seed*13+5>>>0,d=()=>(u=u*1664525+1013904223>>>0)/4294967296,f=t.bangs&&t.bangs.jag<=.01?t.bangs.span:(t.bangs,0),p=t.curtain?t.curtain.span0:99,m=[],h=(e.trim??0)>=3?.28:.19;for(let e=-Math.PI+.08;e<Math.PI;e+=h*(xs(e)>2.2?1.6:1)){let n=xs(e);n<f||n>p-.05||t.crown!==void 0&&n<1.05||m.push(e+(d()-.5)*.05)}let g=new N,_=new F,v=new F;for(let t of m){let u=xs(t),f=n(t),p=(u<.9?.06:u<1.7?.07:.065)*(.8+.4*d()),m=f-p*.8,h=f+p*.22,y=(u<1?.06:.02)*Math.sign(t)*(.5+d()),b=.1+.05*d();_.setHex(i).multiplyScalar(.92),v.setHex(i).lerp(Ms.setHex(a),.3).lerp(Ms.setHex(e.desc.skin),.12);let x=[0,.55,1];c.grid({nu:1,nv:2,closed:!1,point:(e,n,i)=>{let a=x[Math.round(n*2)],o=hs(m,h,a),c=t+(e-.5)*b*(1-.35*a)+y*a*a,u=r(c,Math.min(o,f))*(o<f?.95:.15),d=Math.max(u,8e-4*l)+4e-4*l*Math.sin(a*Math.PI);return Cs(s,c,Math.min(o,.99),d,g),i.copy(g)},invert:!1},{color:(e,t,n,r,i,a)=>a.copy(_).lerp(v,i),skin:R.head,kind:B.hair,rough:.55,bump:(e,t,n,r,i)=>.12+.72*i*i,tex:{rect:o,mode:3,uv:(e,n,r,i,a,o)=>(o[0]=i*.9+t*3.1,o[1]=a*.5+t)}})}}function js(e,t,n,r,i,a,o){let{h:s,m:c}=e,l=s.hh/.23,u=e.desc.seed*29+11>>>0,d=()=>(u=u*1664525+1013904223>>>0)/4294967296,f=t.curtain||t.tail?6:4,p=new N,m=new N,h=new N,g=Ns.setHex(i).lerp(Ms.setHex(a),.4).getHex();for(let e=0;e<f;e++){let i=(d()*2-1)*Math.PI,a=.05+d()*Math.max(.05,Math.min(.5,n(i)-.12));if(t.crown!==void 0&&a<t.crown+.05)continue;let u=r(i,a)*.85;Cs(s,i,a,u,p),Cs(s,i,a,u+.01,m),m.sub(p).normalize();let f=(.03+.03*d())*l,_=new N(Math.cos(i),0,Math.sin(i)),v=new N(0,-1,0).addScaledVector(m,.9).normalize();c.grid({nu:1,nv:2,closed:!1,point:(e,t,n)=>{let r=t;return h.copy(p).addScaledVector(m,f*(.35*r+.25*r*r)).addScaledVector(v,f*.8*r*r).addScaledVector(_,(e-.5)*.009*l*(1-.5*r)),n.copy(h)}},{color:(e,t,n,r,i,a)=>a.setHex(g).multiplyScalar(.85+.2*i),skin:R.head,kind:B.hair,rough:.55,bump:(e,t,n,r,i)=>.55+.3*i,tex:{rect:o,mode:3,uv:(t,n,r,i,a,o)=>(o[0]=i*.3+e*.29,o[1]=a*.4+e*.13)}})}}let Ms=new F,Ns=new F;function Ps(e,t,n,r,i,a,o,s,c){let{h:l,b:u,m:d,lod:f}=e,p=t.curtain,m=l.hh/.23,h=p.span0,g=f===0?12:6,_=p.endY>0?p.endY*u.H:l.crownY+p.endY*l.hh,v=e=>l.crownY-n(e)*l.hh,y=f===0?6:3,b=p.th*m,x=[];for(let e=0;e<=g;e++)x.push(h+e/g*(ms-2*h));let S=(t,n)=>{let i=(l.crownY-n)/l.hh,a=0;return i<=1&&(a=Math.max(a,Math.max(Bi(l,t,Math.max(0,i),!1),i>.3?Bi(l,t,Math.min(.99,i),!0)+.002*m:0)+r(t,Math.min(i,.9))*.9)),n<u.torsoTop&&(a=Math.max(a,di(u,t,n,!0)+.01+(e.fit.top?e.fit.top.off+.004:0)+(e.fit.outer?e.fit.outer.off+.006:0))),a=Math.max(a,u.neckR+.016*m),a},C=e=>{let t=(l.crownY-e)/l.hh;return t<.85?ki(l,Math.max(0,t)):e<u.torsoTop?H(u,e):hs(ki(l,.85),H(u,u.torsoTop),V(.85,1.25,t))},w=x.map(e=>{let t=v(e)+.05*l.hh,n=[],r=0,i=t;for(let a=0;a<=y;a++){let o=a/y,s=hs(t,_,o**.9),c=S(e,s);a>0&&(c=Math.max(c,r-.28*(i-s))),p.wave&&(c+=p.wave*.006*m*Math.sin((t-s)*38+e*2)*V(0,.2,o)),p.curl&&a===y&&(c-=p.curl*.012*m),r=c,i=s;let l=a===y?(.012+.018*Math.abs(Math.sin(e*7.3+1.1)))*m*(p.curl?.3:1):0;n.push([s-l,c])}return n}),T=(y+1)*2-1,E=e=>e===0||e===g?.15:e===1||e===g-1?.7:1;d.grid({nu:g,nv:T,closed:!1,point:(e,t,n)=>{let r=Math.round(e*g),i=Math.round(t*T),a=x[r],o=i<=y,s=o?i:T-i,[c,l]=w[r][s],u=o?l:l-b*E(r)*(s===0?.3:1),d=s===y&&p.curl?c+.01*p.curl*m:c,f=C(d);return n.set(Math.sin(a)*u,d,f-Math.cos(a)*u)}},{color:(e,t,n,r,s,c)=>{let l=Math.round(s*T),u=l<=y,d=(u?l:T-l)/y;return c.setHex(i).lerp(Ms.setHex(a),V(.4,1,d)),u?c.multiplyScalar(1-.12*d*(1-Math.cos(x[Math.round(r*g)]))*.5):c.setHex(o).lerp(Ms.setHex(i),.3*d),c},skin:(e,t,n,r,i,a)=>{let o=(l.crownY-t)/l.hh;Yr(a,R.head,R.chest,V(.95,1.6,o)),o>1.2&&Zr(a,R.spine,.1*V(1.2,2.5,o))},kind:B.hair,rough:.55,bump:(e,t,n,r,i)=>{Math.round(r*g);let a=Math.round(i*T),o=a<=y?a:T-a;return o===y?.56:o===y-1?.12:0},tex:s?{rect:s,mode:3,uv:(e,t,n,r,i,a)=>{a[0]=r*9,a[1]=-t*2.6}}:void 0})}function Fs(e,t,n,r,i,a,o,s=1){let{h:c,m:l}=e,u=c.hh/.23,d=e.desc.seed*7+3>>>0,f=()=>(d=d*1664525+1013904223>>>0)/4294967296,p=Math.round((t===`fringe`?s<.8?6:9:11)*((e.trim??0)>=2?.6:1)),m=new N,h=new F;for(let e=0;e<p;e++){let d,g,_,v,y;if(t===`fringe`){let t=-s*.9+e/(p-1)*s*1.8+(f()-.5)*.06,r=n(t);d=t-.02,g=r-.13,_=t+(f()-.5)*.08+.03*Math.sin(t),v=r+.012+.02*f(),y=.1+.05*f()}else{let e=(f()*2-1)*1.05,r=.04+f()*.24,i=.12+.08*f();t===`front`?(d=e*.7,g=r,_=e,v=Math.min(n(e)-.02,r+i)):t===`back`?(d=e,g=r+.03,_=e*1.1,v=Math.max(0,r-i*.9)):(d=-.5+(e+1.05)*.4,g=.05+r*.5,_=d+i*2.2,v=g+i*.35),y=.16+.08*f()}let b=[0,.5,1],x=(t===`fringe`?.0025:.0055)*u;h.setHex(i).lerp(Ms.setHex(a),.2+.3*f());let S=h.getHex();l.grid({nu:2,nv:2,closed:!1,point:(e,t,n)=>{let i=b[Math.round(t*2)],a=hs(d,_,i),o=hs(g,v,i),s=(_-d)*.4,l=v-g,u=Math.hypot(s,l)||1,f=-l/u/.4,p=s/u,h=(y*.5*(1-i)**.8+.004)*(e-.5)*2,S=a+f*h*.4,C=Math.max(0,o+p*h*.4),w=+(e===.5);return Cs(c,S,C,r(S,Math.min(C,.99))*.92+x*(.4+w)*(1-.6*i),m),n.copy(m)},invert:!1},{color:(e,t,n,r,i,a)=>a.setHex(S).multiplyScalar(r===.5?1.1:.8+.1*i),skin:R.head,kind:B.hair,rough:.55,bump:(e,t,n,r,i)=>(r===.5?.05:.5)+.4*i*i,tex:o?{rect:o,mode:3,uv:(t,n,r,i,a,o)=>(o[0]=i*.6+e*.37,o[1]=a*.8)}:void 0})}}function Is(e,t,n,r,i,a){let{h:o,m:s}=e,c=o.hh/.23,l=new N,u=[0,.3,.6,.85,1],d=u.length-1;for(let e of[-1,1])for(let f=0;f<1;f++){let p=e*(.98+.12*f),m=e*(1.12+.1*f),h=t(p)-.08,g=.78+.1*f,_=.12-.015*f;for(let t of[!1,!0])s.grid({nu:2,nv:d,closed:!1,point:(r,i,a)=>{let s=u[Math.round(i*d)],f=hs(p,m,s)+e*.04*Math.sin(s*Math.PI)+(r-.5)*_*(1-.75*s),v=hs(h,g,s**.9),y=s<.25?n(f,Math.min(v,.9))*.9+.001:.006*c+.004*c*Math.sin(s*Math.PI);return Cs(o,f,Math.min(v,.97),y+(r===.5?.0015*c:0)+(t?-8e-4:0),l),a.copy(l)},invert:e>0?!t:t},{color:(e,n,a,o,s,c)=>c.setHex(r).lerp(Ms.setHex(i),.3*u[Math.round(s*d)]).multiplyScalar(t?.6:1),skin:R.head,kind:B.hair,rough:.55,bump:(e,t,n,r,i)=>(r===.5?.1:.45)+.45*i*i,tex:a?{rect:a,mode:3,uv:(e,t,n,r,i,a)=>(a[0]=r*.5+f*.3,a[1]=i)}:void 0})}}function Ls(e,t,n,r,i){let{h:a,b:o,m:s,lod:c}=e,l=a.hh/.23,u=Cs(a,Math.PI,.3,.004*l,new N);o.joints.p[R.hair].copy(u);let d=.3*l,f=c===0?[0,.03,.08,.25,.5,.75,1]:[0,.1,.5,1],p=f.length-1,m=c===0?7:5,h=(e,t)=>t.set(.008*l*Math.sin(e*3),u.y+.012*l*Math.sin(e*3)-d*e**1.1,u.z+.018*l+.03*l*Math.sin(Math.min(1,e*1.6)*Math.PI*.5)-.018*l*e*e),g=new N,_=new N,v=new N,y=new N(1,0,0),b=new N,x=e=>(e<.03?.02:e<.08?.016:.022*(1-e)+.006+.012*Math.sin(Math.min(1,e*1.4)*Math.PI))*l;s.grid({nu:m,nv:p,closed:!0,cap0:!0,cap1:!0,point:(e,t,n)=>{let r=f[Math.round(t*p)];h(r,g),h(Math.min(1,r+.02),_),v.subVectors(_,g).normalize(),b.crossVectors(v,y).normalize();let i=e*ms,a=x(r);return n.copy(g).addScaledVector(y,Math.cos(i)*a).addScaledVector(b,Math.sin(i)*a*.95)}},{color:(r,i,a,o,s,c)=>{let l=f[Math.round(s*p)];return l>.02&&l<.07?c.setHex(e.desc.hair.color2===void 0?2763312:12597320):c.setHex(t).lerp(Ms.setHex(n),V(.3,1,l)).multiplyScalar(l<.1?.8:1)},skin:(e,t,n,r,i,a)=>Yr(a,R.head,R.hair,V(.05,.3,f[Math.round(i*p)])),kind:B.hair,rough:.55,bump:(e,t,n,r,i)=>f[Math.round(i*p)]>=1?.8:f[Math.round(i*p)]>=.8?.3:0,tex:i?{rect:i,mode:3,uv:(e,t,n,r,i,a)=>(a[0]=r*3,a[1]=i*3)}:void 0})}function Rs(e,t,n,r){let{h:i,m:a,lod:o}=e,s=i.hh/.23,c=Cs(i,Math.PI,.2,.03*s,new N),l=new Wn(.042*s,o===0?10:6,o===0?7:4);l.scale(1,.85,.8),a.geo(l,new Ce().makeTranslation(c.x,c.y,c.z),{color:(e,n,r,i,a,o)=>o.setHex(t).multiplyScalar(.85+.2*V(c.y-.03,c.y+.03,n)),skin:R.head,kind:B.hair,rough:.55,tex:r?{rect:r,mode:3,uv:(e,t,n,r,i,a)=>(a[0]=r*4,a[1]=i*2)}:void 0})}function zs(e,t,n,r){let{h:i,m:a}=e,o=i.hh/.23,s=t=>{let n=Math.sin(t*91.7+e.desc.seed)*43758.5453;return n-Math.floor(n)},c=new N,l=new N,u=new N,d=new N,f=new N;for(let e=0;e<t;e++){let t=(s(e)*2-1)*Math.PI*.9,p=.04+s(e+50)*.26;Cs(i,t,p,n(t,p)*.7,c),Cs(i,t,p,n(t,p)*.7+.03*o,l),u.subVectors(l,c).normalize(),l.copy(c).addScaledVector(u,(.022+.018*s(e+9))*o).add(new N(0,.006*o,.012*o)),d.set(0,1,0).cross(u).normalize(),d.lengthSq()<.1&&d.set(1,0,0),f.crossVectors(u,d).normalize();let m=.011*o,h=[0,1,2,3].map(e=>c.clone().addScaledVector(d,Math.cos(e*Math.PI/2)*m).addScaledVector(f,Math.sin(e*Math.PI/2)*m)),g=[];for(let e=0;e<4;e++){let t=h[e],n=h[(e+1)%4];g.push(t.x,t.y,t.z,n.x,n.y,n.z,l.x,l.y,l.z)}let _=new Xt;_.setAttribute(`position`,new Rt(g,3)),a.geo(_,null,{color:(e,t,n,i,a,o)=>o.setHex(r).multiplyScalar(t>c.y+.01?1.1:.8),skin:R.head,kind:B.hair,rough:.5})}}let Bs=Math.PI*2,Vs=(e,t,n)=>e+(t-e)*n,Hs=(e,t)=>Math.exp(-(e*e)/(t*t)),Us=new Ce,Ws=new ie,Gs=new Ne,Ks=new N,qs=new N(1,1,1);function Js(e,t,n,r=0,i=0,a=0,o=1,s=1,c=1){return Us.compose(Ks.set(e,t,n),Ws.setFromEuler(Gs.set(r,i,a)),qs.set(o,s,c)).clone()}function Ys(e){for(let t of e){if(t.kind===`helmet`)return{d:.5,squash:.25};if(t.kind===`cap`||t.kind===`policeCap`)return{d:.3,squash:.35};if(t.kind===`bucket`)return{d:.34,squash:.35}}return{d:0,squash:1}}function Xs(e){let t=e.desc.hair.style,n=e.h.hh/.23;return({bald:0,buzz:.003,balding:.006,elder:.008,perm:.012,bowl:.008,undercut:.01,spiky:.008}[t]??.007)*n+.006*n}let Zs=/* @__PURE__ */ new Set([`lanyard`,`watch`,`earbuds`,`necklace`]);function Qs(e){for(let t of e.desc.acc)if(!(e.lod===1&&Zs.has(t.kind)))switch(t.kind){case`mask`:$s(e,t);break;case`glasses`:case`sunglasses`:tc(e,t,t.kind===`sunglasses`);break;case`cap`:case`bucket`:case`policeCap`:case`visor`:nc(e,t);break;case`helmet`:ac(e,t);break;case`backpack`:case`schoolbag`:dc(e,t,t.kind===`schoolbag`);break;case`deliveryBox`:fc(e,t);break;case`tote`:case`shoulderBag`:pc(e,t);break;case`marketBag`:hc(e,t);break;case`cup`:_c(e,t);break;case`phone`:vc(e,t);break;case`umbrella`:yc(e,t);break;case`lanyard`:Sc(e,t);break;case`watch`:xc(e,t);break;case`earbuds`:sc(e);break;case`headband`:oc(e,t);break;case`apron`:wc(e,t);break;case`necklace`:Cc(e,t);break;case`fan`:bc(e,t)}}function $s(e,t){let{h:n,m:r,lod:i}=e,a=n.hh/.23,o=n.lay,s=t.color??12573166,c=i===0?10:6,l=i===0?5:3,u=(o.eyeD+o.noseBaseD)*.5+.035;if(r.grid({nu:c,nv:l,closed:!1,point:(e,t,r)=>{let i=Vs(-1.28,1.28,e),s=Vs(u,1,t),c=(.004+.014*Hs(i,.35)*Hs(s-o.noseTipD,.14)+.006*Hs(i,.7))*a,l=Math.abs(e*2-1)**6;return W(n,i,Math.min(1,s),c*(1-l)+.0015,r),s>.97&&(r.y-=(s-.97)*n.hh*.6),r}},{color:(e,t,n,r,i,a)=>{a.setHex(s);let o=Math.abs(Math.sin(i*Math.PI*3.2));return a.multiplyScalar(.93+.07*o),a},skin:(e,t,n,r,i,a)=>Yr(a,R.head,R.jaw,V(.55,.9,i)*.6),kind:B.cloth,rough:.9}),i===0){let t=((s>>16&255)*.3+(s>>8&255)*.59+(s&255)*.11)/255<.45?Y(s,.8):14079183,r=[new N,new N,new N];for(let i of[-1,1])for(let[o,s,c]of[[.15,1.62,.5],[.85,1.7,.7]]){let l=Vs(u,1,o);for(let e=0;e<=2;e++){let t=e/2;W(n,i*Vs(1.28,s,t),Vs(l,c,t),(.004-.001*t+.0015*Math.sin(t*Math.PI))*a,r[e])}ec(e,r[0],r[1],.0022,t,R.head),ec(e,r[1],r[2],.0022,t,R.head)}}}function ec(e,t,n,r,i,a){let o=new N().subVectors(n,t),s=new Bn(r,o.length(),r*.6),c=t.clone().add(n).multiplyScalar(.5),l=new ie().setFromUnitVectors(new N(0,1,0),o.normalize());e.m.geo(s,new Ce().compose(c,l,new N(1,1,1)),{color:i,skin:a,kind:B.cloth,rough:.8})}function tc(e,t,n){let{h:r,m:i,lod:a}=e,o=r.hh/.23,s=r.lay,c=t.color??(n?1381655:2761760),l=s.eyeW*1.32,u=(n?.07:.058)*(r.hh/r.hh),d=.012*o,f=a===0?12:6;for(let t of[-1,1]){let p=t*s.eyeT,m=s.eyeD+.004,h=(e,t,i)=>{let a=e/f*Bs,o=Math.sign(Math.cos(a))*Math.abs(Math.cos(a))**.7,s=Math.sign(Math.sin(a))*Math.abs(Math.sin(a))**.7,c=p+o*(l+i),h=m+s*(u*.5+i*.3)+(n&&s>0?.01:0),g=Bi(r,p,m)+d,_=r.crownY-h*r.hh;return t.set(Math.sin(c)*g,_,ki(r,h)-Math.cos(c)*g*(1-.02*Math.abs(o)))};if(i.grid({nu:f,nv:1,closed:!0,point:(e,t,n)=>h(Math.round(e*f),n,t<.5?.012:0),invert:!1},{color:c,skin:R.head,kind:B.gloss,rough:.25}),h(0,new N,0),i.grid({nu:f,nv:1,closed:!0,point:(e,t,n)=>t<.5?h(Math.round(e*f),n,.001):n.set(Math.sin(p)*(Bi(r,p,m)+d),r.crownY-m*r.hh,ki(r,m)-Math.cos(p)*(Bi(r,p,m)+d)),invert:!0},n?{color:1184790,skin:R.head,kind:B.lens,rough:.05,emissive:.9,transparent:!0}:{color:14674158,skin:R.head,kind:B.lens,rough:.05,emissive:.18,transparent:!0}),a===0){let n=h(0,new N,.012);t<0&&h(f/2,n,.012);let i=W(r,t*1.55,.47,.004*o,new N);ec(e,h(t>0?0:f/2,new N,.01),i,.004,c,R.head)}}ec(e,W(r,-s.eyeT+s.eyeW*1.3,s.eyeD-.02,.013*o,new N),W(r,s.eyeT-s.eyeW*1.3,s.eyeD-.02,.013*o,new N),.004,c,R.head)}function nc(e,t){let{h:n,m:r,lod:i}=e,a=n.hh/.23,o=t.kind,s=t.color??(o===`policeCap`?1778742:o===`visor`?15755914:2237998),c=t.color2??(o===`policeCap`?921362:Y(s,.85)),l=Xs(e),u=i===0?18:8;if(o!==`visor`){let e=e=>o===`bucket`?.34:o===`policeCap`?.3:Vs(.42,.28,(Math.cos(e)+1)/2),t=i===0?[0,.18,.4,.62,.82,1]:[0,.5,1],c=t.length-1,d=o===`policeCap`;if(r.grid({nu:u,nv:c,closed:!1,point:(r,i,o)=>{let s=-Math.PI+r*Bs,u=t[Math.round(i*c)],f=e(s)*u;return W(n,s,f,l+(d?.02*a*(1-u)+.01*a:0),o,!1),d&&(o.y=Math.min(o.y,n.crownY+l+.028*a),o.z-=.012*a*(1-u)),f<.02&&(o.y+=l),o}},{color:(e,n,r,a,o,l)=>{if(l.setHex(s),!d&&i===0){let e=Math.abs(Math.sin(a*Math.PI*6));l.multiplyScalar(.92+.08*Math.min(1,e*4))}return d&&t[Math.round(o*c)]>.75&&l.setHex(921362),l},skin:R.head,kind:B.cloth,rough:.8}),d){let e=new Vn(.012*a,8),t=W(n,0,.18,l+.024*a,new N,!1);r.geo(e,Js(t.x,t.y,t.z-.004,.1,Math.PI,0),{color:14201418,skin:R.head,kind:B.metal,rough:.3})}}else r.grid({nu:u,nv:1,closed:!0,point:(e,t,r)=>W(n,-Math.PI+e*Bs,.3+(t-.5)*.09,l*.6+.002,r,!1)},{color:c,skin:R.head,kind:B.cloth,rough:.8});let d=o===`bucket`?`round`:o===`policeCap`?`peak`:`bill`,f=o===`bucket`?.34:o===`visor`?.3:.28,p=(o===`visor`?.095:o===`policeCap`?.05:o===`bucket`?.045:.075)*a,m=d===`round`?Math.PI:o===`visor`?1.25:1,h=i===0?12:6,g=(e,t,r,i)=>{let a=d===`round`?-Math.PI+e*Bs:-m+e*m*2,s=d===`round`?1:Math.cos(a/m*Math.PI*.5)**.6;W(n,a,f,l+.002,r,!1);let c=Math.sin(a),u=-Math.cos(a),h=p*s*t,g=d===`round`?.35:o===`policeCap`?.55:o===`visor`?.12:.22;return r.x+=c*h,r.z+=u*h,r.y-=h*g+(i?0:.003),r};for(let e of[!0,!1])r.grid({nu:d===`round`?u:h,nv:1,closed:!1,point:(t,n,r)=>g(t,n,r,e),invert:!e},{color:e?o===`policeCap`?c:o===`visor`?s:Y(s,.95):o===`visor`?Y(s,.7):Y(c,.6),skin:R.head,kind:o===`policeCap`||o===`visor`?B.gloss:B.cloth,rough:o===`policeCap`?.2:.75})}let rc=new N,ic=new N;function ac(e,t){let{h:n,m:r,lod:i}=e,a=n.hh/.23,o=t.color??15921904,s=t.color2??2237480,c=.028*a,l=i===0?16:12,u=i===0?[0,.15,.36,.58,.78,.92,1]:[0,.22,.48,.74,.92,1],d=u.length-1,f=e=>{let t=Math.abs(Math.atan2(Math.sin(e),Math.cos(e)));return t<.9?.27:t<1.9?Vs(.27,.62,(t-.9)/1):Vs(.62,.66,(t-1.9)/1.24)},p=rc.set(0,n.crownY-.45*n.hh,ki(n,.45)),m=(e,t,r,i)=>{W(n,e,t,0,i,!1),ic.subVectors(i,p);let a=ic.length()||1;return i.addScaledVector(ic,r/a)};r.grid({nu:l,nv:d,closed:!1,point:(e,t,n)=>{let r=-Math.PI+e*Bs,i=u[Math.round(t*d)];return m(r,f(r)*i,c*(1-.15*i*i),n)}},{color:(e,n,r,a,c,l)=>{let f=u[Math.round(c*d)];return l.setHex(f>.93?s:o),i===0&&Math.abs(a-.5)<.03&&f<.9&&l.setHex(Y(t.color2??14169132,1)),l},skin:R.head,kind:B.gloss,rough:.22}),r.grid({nu:l,nv:1,closed:!1,point:(e,t,r)=>{let i=-Math.PI+e*Bs;return t<.5?m(i,f(i),c*.85,r):W(n,i,f(i),.004,r,!1)},invert:!0},{color:1710620,skin:R.head,kind:B.cloth,rough:.9});let h=.8;for(let e of[!0,!1])r.grid({nu:8,nv:1,closed:!1,point:(t,r,i)=>{let o=-.8+t*h*2;W(n,o,.27,c+.002,i,!1);let s=Math.cos(o/h*Math.PI*.5);return i.x+=Math.sin(o)*.035*a*s*r,i.z+=-Math.cos(o)*.035*a*s*r,i.y+=.004*a*r-(e?0:.003),i},invert:!e},{color:e?o:s,skin:R.head,kind:B.gloss,rough:.3});if(i===0)for(let t of[-1,1])ec(e,W(n,t*1.45,.55,c*.7,new N,!1),W(n,t*.9,1,.004*a,new N),.006,1579034,R.head)}function oc(e,t){let{h:n,m:r}=e,i=Xs(e);r.grid({nu:e.lod===0?18:8,nv:1,closed:!0,point:(e,t,r)=>W(n,-Math.PI+e*Bs,.2+(t-.5)*.06+.08*Math.max(0,-Math.cos(e*Bs)),i+.002,r,!1)},{color:t.color??14826074,skin:R.head,kind:B.satin,rough:.5})}function sc(e){let{h:t,m:n}=e,r=t.hh/.23;for(let e of[-1,1]){let i=W(t,e*1.57,.585,.005*r,new N,!1),a=new Wn(.0055*r,5,3);n.geo(a,Js(i.x,i.y,i.z),{color:16185078,skin:R.head,kind:B.gloss,rough:.2});let o=new Hn(.0022*r,.0022*r,.02*r,5,1,!0);n.geo(o,Js(i.x,i.y-.012*r,i.z+.002),{color:16185078,skin:R.head,kind:B.gloss,rough:.2})}}function cc(e,t,n){let r=e.fit,i=r.outer?r.outer.off:r.top?r.top.off:0,a=r.outer?r.outer.loose:r.top?r.top.loose:0;return yo(e.b,t,n,i,a)}function lc(e,t,n){let{b:r,m:i}=e,a=r.H;for(let o of[-1,1]){let s=o*.3,c=[{t:o*(Math.PI-.45),y:.79*a},{t:o*(Math.PI/2+.25),y:.835*a},{t:o*.9,y:.83*a},{t:o*.55,y:.78*a},{t:o*.45,y:.7*a},{t:o*.55,y:n}],l=c.length-1;i.grid({nu:1,nv:l,closed:!1,point:(t,n,i)=>{let o=c[Math.round(n*l)],s=o.t+(t-.5)*.34*(o.y>.82*a?.45:1),u=o.y,d=cc(e,s,Math.min(u,r.torsoTop-.01))+.006+(u>.82*a?.008:0);return i.set(Math.sin(s)*d,u+(o.y>.82*a?.012:0),H(r,Math.min(u,r.torsoTop))-Math.cos(s)*d)},invert:o<0},{color:t,skin:(e,t,n,i,a,o)=>pi(r,s,t,o),kind:B.cloth,rough:.8})}}function uc(e,t,n,r,i=2){let a=new Bn(e,t,n,i,i,i),o=a.attributes.position,s=e/2-r,c=t/2-r,l=n/2-r,u=new N,d=new N;for(let e=0;e<o.count;e++)u.fromBufferAttribute(o,e),d.set(Math.max(-s,Math.min(s,u.x)),Math.max(-c,Math.min(c,u.y)),Math.max(-l,Math.min(l,u.z))),u.sub(d),u.lengthSq()>1e-10&&u.setLength(r),u.add(d),o.setXYZ(e,u.x,u.y,u.z);return a.deleteAttribute(`normal`),a}function dc(e,t,n){let{b:r,m:i}=e,a=r.H,o=r.s,s=t.color??(n?2306639:2961203),c=t.color2??Y(s,.75),l=(n?.28:.3)*o,u=(n?.34:.4)*o,d=(n?.1:.13)*o,f=.68*a,p=H(r,f)+cc(e,Math.PI,f)+d/2+.01,m=uc(l,u,d,.035*o,e.lod===0?3:1);if(i.geo(m,Js(0,f,p,.06,0,0),{color:(e,t,n,r,i,a)=>(a.setHex(s),n>p+d*.3&&t<f&&a.setHex(c),t<f-u*.46&&a.multiplyScalar(.8),a),skin:(e,t,n,r,i,a)=>Yr(a,R.chest,R.spine,V(f,f-u*.5,t)*.4),kind:B.cloth,rough:.75}),e.lod===0){let e=uc(l*.75,u*.38,d*.35,.02*o,2);i.geo(e,Js(0,f-u*.2,p+d*.55,.06,0,0),{color:c,skin:R.chest,kind:B.cloth,rough:.75})}lc(e,Y(s,.7),f-u*.35)}function fc(e,t){let{b:n,m:r}=e,i=n.H,a=n.s,o=t.color??15217276,s=.4*a,c=.42*a,l=.3*a,u=.7*i,d=H(n,u)+cc(e,Math.PI,u)+l/2+.012,f=uc(s,c,l,.025*a,e.lod===0?2:1);r.geo(f,Js(0,u,d),{color:(e,t,n,r,i,a)=>a.setHex(t>u+c*.46?Y(o,.8):o),skin:R.chest,kind:B.gloss,rough:.45});let p=io(e,(o>>8&255)>(o>>16&255)?`rider-green`:`rider-pink`,16777215,o);if(p){let e=new Un(s*.8,c*.8);r.geo(e,Js(0,u,d+l/2+.002),{color:16777215,skin:R.chest,kind:B.cloth,rough:.6,tex:{rect:p,mode:2,uv:(e,t,n,r,i,a)=>(a[0]=r,a[1]=i)}},!0)}lc(e,2763310,u-c*.3)}function pc(e,t){let{b:n,m:r}=e,i=n.H,a=n.s,o=t.kind===`tote`,s=t.color??(o?15327695:3812388),c=(o?.3:.2)*a,l=(o?.32:.16)*a,u=.06*a,d=(o?.5:.53)*i,f=1.35,p=cc(e,f,Math.max(d,n.torsoBottom+.02))+u/2+.01,m=Math.sin(f)*p+.03*a,h=H(n,d)-Math.cos(f)*p,g=uc(u,l,c,(o?.012:.02)*a,e.lod===0?2:1);r.geo(g,Js(m,d,h,0,0,.04),{color:(e,t,n,r,i,a)=>a.setHex(s).multiplyScalar(t>d+l*.3&&!o?.85:1),skin:(e,t,n,r,i,a)=>{Yr(a,R.hips,R.chest,.5)},kind:o?B.cloth:B.gloss,rough:o?.9:.4}),mc(e,o?[[1.12,.585],[1,.68],[1.05,.78],[1.4,.842],[1.85,.8],[2.02,.69],[1.92,.585]]:[[1.3,.575],[.75,.64],[.1,.71],[-.55,.775],[-1.15,.83],[-1.57,.848],[-2.05,.82],[-2.6,.76],[Math.PI,.7],[2.55,.635],[1.85,.585]],(o?.03:.026)*a,o?Y(s,.85):2760730)}function mc(e,t,n,r){let{b:i,m:a}=e,o=i.H,s=t.length-1;for(let c of[!1,!0])a.grid({nu:1,nv:s,closed:!1,point:(r,a,c)=>{let[l,u]=t[Math.round(a*s)],d=Math.min(i.torsoTop-.004,u*o+(r-.5)*n),f=V(.8*o,.845*o,d),p=cc(e,l,d)+.005+.006*f;return c.set(Math.sin(l)*p,d+.006*f,H(i,d)-Math.cos(l)*p)},invert:c},{color:c?Y(r,.7):r,skin:(e,n,r,a,o,c)=>pi(i,t[Math.round(o*s)][0],n,c),kind:B.cloth,rough:.7})}function hc(e,t){let{b:n,m:r}=e,i=n.s,a=n.joints.p[R.handL],o=.3*i,s=.26*i,c=.12*i,l=new N(a.x-.02*i,a.y-.09*i-s/2,a.z),u=uc(c,s,o,.02*i,e.lod===0?3:1),d=[t.color??14168620,15921902,t.color2??2772904,15921902],f=eo(e,`marketbag:${d[0]}:${d[2]}`,128,128,!0,Qa(d[0],d[2]));r.geo(u,Js(l.x,l.y,l.z),{color:f?16777215:d[0],skin:R.handL,kind:B.gloss,rough:.5,part:z.lItem,tex:f?{rect:f,mode:1,uv:(e,t,n,r,i,a)=>(a[0]=r*2,a[1]=i*2)}:void 0}),ec(e,new N(l.x,l.y+s/2,l.z-o*.3),new N(a.x,a.y-.06*i,a.z),.018*i,d[0],R.handL),ec(e,new N(l.x,l.y+s/2,l.z+o*.3),new N(a.x,a.y-.06*i,a.z),.018*i,d[0],R.handL)}function gc(e,t){let n=e.b.joints.p,r=n[t<0?R.handL:R.handR],i=n[t<0?R.fingersL:R.fingersR];return r.clone().lerp(i,.85).add(new N(-t*.012*e.b.s,0,-.008*e.b.s))}function _c(e,t){let{m:n,b:r,lod:i}=e,a=r.s,o=gc(e,1),s=.15*a,c=.037*a,l=.043*a,u=t.color??13081194,d=new Hn(l,c,s,i===0?12:6,1,!1),f=o.y+.02*a;n.geo(d,Js(o.x+.012*a,f,o.z),{color:(e,t,n,r,i,a)=>{let o=(t-(f-s/2))/s;return a.setHex(u),o<.22&&a.setHex(2759186),o>.86&&a.setHex(15921128),o>.4&&o<.62&&a.setHex(16052972),a},skin:R.handR,kind:B.gloss,rough:.2});let p=new Hn(.0055*a,.0055*a,.1*a,5);n.geo(p,Js(o.x+.02*a,f+s/2+.035*a,o.z+.004,.12,0,-.1),{color:t.color2??3116906,skin:R.handR,kind:B.gloss,rough:.3})}function vc(e,t){let{m:n,b:r}=e,i=r.s,a=gc(e,-1),o=uc(.009*i,.15*i,.072*i,.004*i,1);n.geo(o,Js(a.x+.015*i,a.y,a.z-.01*i,0,0,0),{color:t.color??1842466,skin:R.handL,kind:B.gloss,rough:.25});let s=new Un(.066*i,.138*i);n.geo(s,Js(a.x+.015*i+.0048*i,a.y,a.z-.01*i,0,Math.PI/2,0),{color:9423103,skin:R.handL,kind:B.screen,rough:.1,emissive:1},!0)}function yc(e,t){let{m:n,b:r,lod:i}=e,a=r.s,o=gc(e,1),s=.78*a,c=t.color??2842526,l=t.color2??Y(c,.8),u=new Hn(.006*a,.006*a,s,5);n.geo(u,Js(o.x,o.y-s/2+.05*a,o.z),{color:2763310,skin:R.handR,kind:B.metal,rough:.3});let d=.52*a,f=new N(o.x,o.y-s+.05*a,o.z),p=i===0?16:8;for(let e of[!0,!1])n.grid({nu:p,nv:2,closed:!0,point:(t,n,r)=>{let i=t*Bs,o=Math.round(n*2)/2,s=1-.04*Math.abs(Math.cos(i*4)),c=d*o*s,l=.2*a*o*o;return r.set(f.x+Math.cos(i)*c,f.y+l+(e?0:.004),f.z+Math.sin(i)*c)},invert:e},{color:(t,n,r,i,a,o)=>o.setHex(Math.floor(i*8)%2?c:l).multiplyScalar(e?1:.7),skin:R.handR,kind:B.gloss,rough:.35})}function bc(e,t){let{m:n,b:r}=e,i=r.s,a=gc(e,1),o=new Vn(.1*i,10);n.geo(o,Js(a.x+.02*i,a.y-.14*i,a.z-.02,0,Math.PI/2,0),{color:t.color??15852228,skin:R.handR,kind:B.cloth,rough:.8},!0);let s=new Vn(.1*i,10);n.geo(s,Js(a.x+.018*i,a.y-.14*i,a.z-.02,0,-Math.PI/2,0),{color:t.color2??12730415,skin:R.handR,kind:B.cloth,rough:.8},!0);let c=new Hn(.004*i,.004*i,.1*i,4);n.geo(c,Js(a.x+.02*i,a.y-.03*i,a.z-.02),{color:6965802,skin:R.handR,kind:B.gloss,rough:.5})}function xc(e,t){let{m:n,b:r}=e,i=r.arms[0],a=r.s,o=i.c.clone().lerp(i.b,.06),s=new Gn(.029*a,.006*a,3,10);n.geo(s,Js(o.x,o.y,o.z,Math.PI/2,0,.05),{color:t.color??1579034,skin:R.foreL,kind:B.gloss,rough:.3});let c=new Hn(.014*a,.014*a,.006*a,6);n.geo(c,Js(o.x-.031*a,o.y,o.z,0,0,Math.PI/2),{color:t.color2??14343384,skin:R.foreL,kind:B.metal,rough:.25})}function Sc(e,t){let{m:n,b:r}=e,i=r.H,a=r.s,o=.72*i,s=cc(e,0,o)+.008,c=new N(0,o,H(r,o)-s),l=t.color??2777784;for(let t of[-1,1])ec(e,new N(t*.06*a,.845*i,H(r,.845*i)-.03*a),c.clone().add(new N(t*.01,.045*a,0)),.012*a,l,R.chest);let u=uc(.055*a,.085*a,.003,.004*a,1);n.geo(u,Js(c.x,c.y,c.z,-.05,0,0),{color:(e,t,n,r,i,o)=>o.setHex(t>c.y+.02*a?l:16053490),skin:R.chest,kind:B.gloss,rough:.3})}function Cc(e,t){let{m:n,b:r}=e,i=.838*r.H,a=new Gn(r.neckR*1.3,.0018,3,12);n.geo(a,Js(0,i,H(r,i)-.012,Math.PI/2-.35,0,0),{color:t.color??14729328,skin:R.chest,kind:B.metal,rough:.2})}function wc(e,t){let{b:n,m:r}=e,i=n.H,a=t.color??2767450,o=.6*i,s=.33*i,c=e.lod===0?8:4,l=e.lod===0?6:3,u=(e,t)=>{let r=n.legs[1].a.x,i=.095*n.s,a=r+i,o=i*1.15;return 1/Math.sqrt((Math.sin(e)/a)**2+(Math.cos(e)/o)**2)+.02+0*t};r.grid({nu:c,nv:l,closed:!1,point:(t,r,i)=>{let a=-1.05+t*1.05*2,c=Vs(s,o,r),l=Math.max(c>n.torsoBottom?cc(e,a,c)+.01:0,u(a,c))+.004+(1-r)*.02;return i.set(Math.sin(a)*l,c,H(n,Math.max(c,n.torsoBottom))-Math.cos(a)*l)},invert:!0},{color:(e,t,n,r,i,s)=>s.setHex(a).multiplyScalar(t>o-.03?.85:1),skin:(e,t,r,i,a,o)=>{Yr(o,R.hips,R.hips,0);let c=V(n.torsoBottom,s,t);Zr(o,i<.5?R.thighL:R.thighR,.4*c)},kind:B.cloth,rough:.85})}function Tc(e){let t=e.face;return`face3:${e.id}:${e.skin}:${e.hair.color}:${e.hair.style}:${Object.values(t).join(`,`)}:${e.age}:${e.sex}`}function Ec(e,t,n=null){return(r,i,a,o)=>{let s=e.face,c=e.sex===`f`,l=e.age===`elder`,u=e.age===`student`,d=za(e.seed*7+13),f=e=>i+(.5+e/(2*t.Theta))*o,p=e=>a+(e-t.d0)/(t.d1-t.d0)*o,m=o/512,h=e.skin;r.clearRect(i,a,o,o),r.lineCap=`round`,r.lineJoin=`round`;let g=(e,t,n,i,a,o)=>{if(o<=0)return;r.save(),r.translate(e,t),r.scale(1,i/n);let s=r.createRadialGradient(0,0,0,0,0,n);s.addColorStop(0,K(a,o)),s.addColorStop(1,K(a,0)),r.fillStyle=s,r.fillRect(-n,-n,n*2,n*2),r.restore()},_=q(J(h,.62),6961728,.25),v=q(h,14700650,.55),y=q(h,13131850,.5);for(let e=0;e<70;e++){let e=(d()*2-1)*1.1,t=.2+d()*.8,n=(.02+d()*.05)*o;g(f(e),p(t),n,n*(.6+d()*.6),d()<.5?y:J(h,1.08),.02+d()*.025)}for(let e of[-1,1])g(f(e*.64),p(.655),.13*o,.065*o,v,.04+.24*s.blush),g(f(e*1.3),p(.6),.05*o,.08*o,y,.1);if(g(f(0),p(t.noseTipD-.01),.055*o,.04*o,q(h,13652048,.4),.14),g(f(0),p(.93),.1*o,.035*o,y,.08),g(f(0),p(.3),.2*o,.1*o,16777215,.035),u||c&&s.blush>.2){let e=u?26:12;for(let t=0;t<e;t++)g(f((d()<.5?-1:1)*(.2+d()*.45)),p(.6+d()*.1),(1+d()*1.4)*m,(1+d()*1.4)*m,J(h,.72),.2)}for(let e of[-1,1])g(f(e*.8),p(.73),.07*o,.06*o,_,.08),g(f(e*.1),p(.6),.022*o,.075*o,_,.12),g(f(e*(t.eyeT-t.eyeW*1.05)),p(t.eyeD-.004),.018*o,.022*o,_,.2),g(f(e*(t.noseW*1.02)),p(t.noseBaseD-.008),.016*o,.013*o,_,.18);if(g(f(0),p(t.noseBaseD+.012),.03*o,.01*o,_,.12),g(f(0),p(.6),.025*o,.09*o,16777215,.07),n){let i=e.hair.color;for(let e=-1.45;e<=1.45;e+=.01){let a=n(e);if(a>t.d1-.02)continue;let o=f(e),s=r.createLinearGradient(0,p(a-.014),0,p(a+.028));s.addColorStop(0,K(i,.72)),s.addColorStop(.4,K(i,.24)),s.addColorStop(1,K(i,0)),r.fillStyle=s,r.fillRect(o-.6*m,p(a-.014),3*m,p(a+.028)-p(a-.014))}r.lineWidth=.7*m;for(let e=0;e<320;e++){let e=(d()*2-1)*1.42,t=n(e),a=f(e),o=p(t-.006+d()*.006);r.strokeStyle=K(i,.3+.35*d()),r.beginPath(),r.moveTo(a,o),r.quadraticCurveTo(a+(d()-.5)*3*m,o+4*m,a+(d()-.5)*5*m,o+(4+8*d())*m),r.stroke()}}let b=e.hair.color,x=l?9078143:q(b,3356740,.3);if(s.facial!==`none`){let e=t.mouthW,n=(n,r)=>{let i=Math.abs(n),a=i/e;return a<1.05&&r>bi(t,Math.min(1,a))-xi(t,a)-.003&&r<bi(t,Math.min(1,a))+Si(t,a)+.003?!1:s.facial===`mustache`?r>t.noseBaseD+.008&&r<bi(t,Math.min(1,a))-xi(t,a)&&i<e*1.15:s.facial===`goatee`?r>t.mouthD+.03&&i<.3||r>t.noseBaseD+.01&&r<bi(t,Math.min(1,a))-xi(t,a)&&i<e*1.1:r>.68+.1*Math.min(1,i/1)&&i<1.3&&!(r<t.noseBaseD+.012&&i<t.noseW*1.2)},i=s.facial===`stubble`;(i||s.facial===`beard`)&&g(f(0),p(.9),.36*o,.13*o,3818064,i?.1:.18);let a=Math.round(o*o*(i?.07:.1));for(let e=0;e<a;e++){let e=(d()*2-1)*1.3,t=.62+d()*.4;if(!n(e,t))continue;r.fillStyle=K(x,(i?.16:.5)*(.4+d()*.6));let a=(i?.7:1.2)*m*(.6+d());r.fillRect(f(e),p(t),a,a*(i?1.2:2.4))}}let S=s.wrinkles;if(S>.02){r.strokeStyle=K(J(h,.6),.12+.18*S),r.lineWidth=1.4*m;for(let e=0;e<3;e++){let t=.25+e*.045;r.beginPath();for(let n=-.55;n<=.55;n+=.05){let i=p(t+.006*Math.sin(n*7+e));n===-.55?r.moveTo(f(n),i):r.lineTo(f(n),i)}r.stroke()}for(let e of[-1,1]){let n=e*(t.eyeT+t.eyeW*1.12),i=t.eyeD-t.tilt;for(let t=-1;t<=1;t++)r.beginPath(),r.moveTo(f(n),p(i+t*.012)),r.lineTo(f(n+e*.1),p(i+t*.03)),r.stroke();r.beginPath();for(let n=-.6;n<=.9;n+=.1){let i=f(e*(t.eyeT+n*t.eyeW)),a=p(yi(t,n)+.03);n===-.6?r.moveTo(i,a):r.lineTo(i,a)}r.stroke()}}{let e=.02+.16*S+(s.smile>0?.04*s.smile:0);r.strokeStyle=K(J(h,.55),e),r.lineWidth=(2.4+2*S)*m;for(let e of[-1,1])r.beginPath(),r.moveTo(f(e*(t.noseW*1.18)),p(t.noseBaseD-.012)),r.quadraticCurveTo(f(e*(t.mouthW*1.3)),p(t.mouthD-.03),f(e*(t.mouthW*1.3)),p(t.mouthD+.04)),r.stroke()}if(l)for(let e=0;e<7;e++)g(f((d()*2-1)*.9),p(.25+d()*.5),(2+d()*3)*m,(2+d()*3)*m,8016438,.3);let C=l?q(b,10130572,.6):q(b,1708557,.35);for(let e of[-1,1]){let n=[];for(let r=0;r<=16;r++){let i=r/16,a=e*(t.browIn+(t.browOut-t.browIn)*i),o=Math.sin(Math.min(1,i/.68)*Math.PI*.5)*(i<.68?1:1-(i-.68)/.32*.9),l=t.browD+.012-(.012+.022*s.browArch)*o-t.tilt*.3*i,u=(.016+.014*s.brow)*(1-.72*i*i)*(c?.85:1.05)*(i<.16?.45+.55*Math.sin(i/.16*Math.PI*.5):1);n.push([a,l,u])}let i=f(n[0][0]),a=f(n[5][0]),o=r.createLinearGradient(i,0,a,0);o.addColorStop(0,K(C,0)),o.addColorStop(1,K(C,c?.3:.36)),r.fillStyle=o,r.beginPath(),n.forEach(([e,t,n],i)=>i?r.lineTo(f(e),p(t-n*.45)):r.moveTo(f(e),p(t-n*.45)));for(let e=n.length-1;e>=0;e--)r.lineTo(f(n[e][0]),p(n[e][1]+n[e][2]*.45));r.closePath(),r.fill();let l=Math.round(110+90*s.brow);for(let t=0;t<l;t++){let t=d()**.9,[i,a,o]=n[Math.min(15,Math.floor(t*16))],s=a+(d()-.5)*o*.95,c=(t<.22?-1.3:t<.55?-.6:-.18)+(d()-.5)*.35,l=(5+6*d())*m*(t<.22?.75:1.15),u=f(i),h=p(s);r.strokeStyle=K(q(C,0,d()*.35),.5+.4*d()),r.lineWidth=(.75+.55*d())*m,r.beginPath(),r.moveTo(u,h),r.quadraticCurveTo(u+e*Math.cos(c)*l*.5,h+Math.sin(c)*l*.55,u+e*Math.cos(c)*l,h+Math.sin(c)*l+1.2*m),r.stroke()}}let w=1051143;for(let e of[-1,1]){let n=n=>f(e*(t.eyeT+n*t.eyeW)),i=(e,i,a)=>{r.beginPath();for(let o=0;o<=24;o++){let s=e+(i-e)*o/24,c=Math.max(-1,Math.min(1,s)),l=n(s),u=p(vi(t,c)-a(c));o===0?r.moveTo(l,u):r.lineTo(l,u)}},a=.024+.01*s.lid,_=c&&!l?q(q(h,9064520,.3),6965850,.25*s.liner):q(h,9067096,.2);r.fillStyle=K(_,c?.34+.2*s.liner:.28),i(-1.05,1.1,e=>a*Math.max(0,1-e*e)**.5+.002);for(let e=24;e>=0;e--){let i=-1.05+2.15*e/24;r.lineTo(n(i),p(vi(t,Math.max(-1,Math.min(1,i)))+.001))}if(r.closePath(),r.fill(),s.lid>.25){let e=.009+.008*s.lid;r.strokeStyle=K(J(h,.45),.18+.3*s.lid),r.lineWidth=1.5*m,i(-.72,1.02,t=>e*(1-.25*t*t)),r.stroke()}let v=.05+.4*s.liner;r.fillStyle=K(w,.95),i(-1,1,()=>-.0012),r.lineTo(n(1+v),p(vi(t,1)-.01-v*.045));for(let e=24;e>=0;e--){let i=-1+e/24*2,a=(.0042+(.003+.006*s.liner)*((i+1)/2)**1.3)*(c?1.1:.9);r.lineTo(n(i),p(vi(t,i)-a))}r.closePath(),r.fill();let y=c?30:18;r.strokeStyle=K(w,.75);for(let i=0;i<y;i++){let a=-.85+i/(y-1)*1.9,o=Math.min(1,a),s=n(a),l=p(vi(t,o)-.004),u=(c?5:3)*m*(.6+.8*((a+1)/2)),d=-Math.PI/2+e*(.25+.8*Math.max(0,a));r.lineWidth=.9*m,r.beginPath(),r.moveTo(s,l),r.lineTo(s+Math.cos(d)*u,l+Math.sin(d)*u),r.stroke()}r.strokeStyle=K(3810848,.45),r.lineWidth=1.3*m,r.beginPath();for(let e=0;e<=14;e++){let i=-.6+e/14*1.6,a=n(i),o=p(yi(t,Math.min(1,i))+.0045);e===0?r.moveTo(a,o):r.lineTo(a,o)}r.stroke(),r.strokeStyle=K(w,.4),r.lineWidth=.7*m;for(let i=0;i<(c?14:8);i++){let i=-.4+d()*1.35,a=n(i),o=p(yi(t,Math.min(1,i))+.004);r.beginPath(),r.moveTo(a,o),r.lineTo(a+e*(1+2*Math.max(0,i))*m,o+(2.2+1.5*d())*m),r.stroke()}g(n(-1.02),p(t.eyeD),3.4*m,3*m,14256774,.6),g(f(e*(t.eyeT-.04)),p(yi(t,0)+.03),t.eyeW*o*.32,.016*o,6965848,l?.24:u?.05:.1),c&&!l&&g(f(e*t.eyeT),p(yi(t,0)+.012),t.eyeW*o*.28,.01*o,16777215,.12)}{let e=t.mouthW,n=q(q(h,12736604,.4),9060424,l?.25:0),i=s.lipColor?q(n,s.lipColor,.85):n,a=J(i,.84),c=e=>-1+2*e/28,u=(n,i,a,o)=>{r.beginPath();for(let i=0;i<=28;i++){let a=c(i),s=bi(t,a),l=n?s-xi(t,a)-o:s+Si(t,a)+o;i===0?r.moveTo(f(a*e*(1+o*4)),p(l)):r.lineTo(f(a*e*(1+o*4)),p(l))}for(let i=28;i>=0;i--){let a=c(i);r.lineTo(f(a*e*(1+o*4)),p(bi(t,a)+(n?.0015:-.0015)))}r.closePath(),r.fillStyle=K(i,a),r.fill()};u(!0,i,.22,.002),u(!1,i,.22,.002),u(!0,a,.92,0),u(!1,i,.92,0),r.strokeStyle=K(J(i,.7),.25),r.lineWidth=.8*m;for(let n=0;n<26;n++){let i=-.85+n/25*1.7+(d()-.5)*.03,a=bi(t,i),o=n%2==0,s=o?a-xi(t,i)*.85:a+Si(t,i)*.1,c=o?a-xi(t,i)*.15:a+Si(t,i)*.85;r.beginPath(),r.moveTo(f(i*e),p(s)),r.lineTo(f(i*e*(1+.02*(d()-.5))),p(c)),r.stroke()}g(f(e*.08),p(bi(t,0)+Si(t,0)*.45),e*o*.2,.007*o,16777215,s.lipColor?.3:.18),r.strokeStyle=K(J(i,.35),.9),r.lineWidth=1.5*m,r.beginPath();for(let n=0;n<=28;n++){let i=c(n)*1.02;n===0?r.moveTo(f(i*e),p(bi(t,Math.max(-1,Math.min(1,i))))):r.lineTo(f(i*e),p(bi(t,Math.max(-1,Math.min(1,i)))))}r.stroke();for(let n of[-1,1])g(f(n*e*1.02),p(bi(t,1)),3.2*m,2.6*m,J(h,.42),.4);r.strokeStyle=K(J(h,.78),.1),r.lineWidth=2*m;for(let n of[-1,1])r.beginPath(),r.moveTo(f(n*.045),p(t.noseBaseD+.01)),r.lineTo(f(n*e*.28),p(bi(t,.28)-xi(t,.28))),r.stroke()}s.mole===1?g(f(.5),p(.72),2.4*m,2.4*m,3810328,.85):s.mole===2&&g(f(-.2),p(t.mouthD+.06),2.2*m,2.2*m,3810328,.85)}}function Dc(e){return`eye:${e.face.iris}:${+(e.age===`elder`)}`}function Oc(e,t){return(n,r,i,a,o)=>{let s=za(e.face.iris*3+7),c=e.age===`elder`,l=a/180,u=r+a/2,d=i+o/2,f=t*l;n.fillStyle=K(c?15327180:16052200),n.fillRect(r,i,a,o);let p=n.createLinearGradient(r,0,r+a,0);p.addColorStop(0,`rgba(200,120,115,0.35)`),p.addColorStop(.28,`rgba(210,170,165,0.06)`),p.addColorStop(.72,`rgba(210,170,165,0.06)`),p.addColorStop(1,`rgba(200,120,115,0.35)`),n.fillStyle=p,n.fillRect(r,i,a,o),n.lineCap=`round`;for(let e=0;e<18;e++){let t=e%2?1:-1,r=u+t*(a*(.3+s()*.18)),i=d+(s()-.5)*o*.7;n.strokeStyle=`rgba(190,60,60,${(.1+s()*.16).toFixed(3)})`,n.lineWidth=.5+s()*.7,n.beginPath(),n.moveTo(r,i);for(let e=0;e<4;e++)r-=t*(6+s()*10),i+=(s()-.5)*8,n.lineTo(r,i);n.stroke()}let m=e.face.iris,h=n.createRadialGradient(u,d,f*.2,u,d,f);h.addColorStop(0,K(J(m,.7))),h.addColorStop(.35,K(J(m,1.3))),h.addColorStop(.62,K(m)),h.addColorStop(.88,K(J(m,.7))),h.addColorStop(1,K(1182214)),n.fillStyle=h,n.beginPath(),n.arc(u,d,f,0,Math.PI*2),n.fill();for(let e=0;e<120;e++){let e=s()*Math.PI*2,t=f*(.34+s()*.1),r=f*(.62+s()*.32);n.strokeStyle=s()<.55?K(J(m,1.55),.18+s()*.2):K(J(m,.5),.2+s()*.2),n.lineWidth=.6+s()*.9,n.beginPath(),n.moveTo(u+Math.cos(e)*t,d+Math.sin(e)*t),n.lineTo(u+Math.cos(e+(s()-.5)*.08)*r,d+Math.sin(e+(s()-.5)*.08)*r),n.stroke()}n.strokeStyle=K(J(m,1.45),.35),n.lineWidth=1.4,n.beginPath();for(let e=0;e<=48;e++){let t=e/48*Math.PI*2,r=f*(.46+.04*Math.sin(t*7+s()));e===0?n.moveTo(u+Math.cos(t)*r,d+Math.sin(t)*r):n.lineTo(u+Math.cos(t)*r,d+Math.sin(t)*r)}n.stroke();let g=n.createRadialGradient(u,d,f*.86,u,d,f*1.12);g.addColorStop(0,`rgba(14,8,6,0)`),g.addColorStop(.45,`rgba(14,8,6,0.75)`),g.addColorStop(1,`rgba(14,8,6,0)`),n.fillStyle=g,n.beginPath(),n.arc(u,d,f*1.12,0,Math.PI*2),n.fill();let _=n.createRadialGradient(u,d,0,u,d,f*.38);_.addColorStop(0,`#020101`),_.addColorStop(.85,`#050303`),_.addColorStop(1,K(J(m,.4),0)),n.fillStyle=_,n.beginPath(),n.arc(u,d,f*.38,0,Math.PI*2),n.fill(),n.fillStyle=`rgba(255,255,255,0.35)`,n.beginPath(),n.ellipse(u+f*.28,d-f*.32,f*.12,f*.1,0,0,Math.PI*2),n.fill()}}function kc(e){return(t,n,r,i,a)=>{let o=za(e?911:577);t.clearRect(n,r,i,a),t.lineCap=`round`;let s=e?90:60;for(let c=0;c<s;c++){let l=(c+o()*.8)/s,u=n+l*i,d=a*(e?.62+.38*o():.45+.35*o())*(.6+.4*Math.sin(l*Math.PI*.95+.1)),f=(l-.3)*10+(o()-.5)*3;t.strokeStyle=`rgba(235,235,235,${(.85+o()*.15).toFixed(3)})`,t.lineWidth=e?1.6:1.3,t.beginPath(),t.moveTo(u,r+a),t.quadraticCurveTo(u+f*.3,r+a-d*.6,u+f,r+a-d),t.stroke()}}}let Ac=new N;function jc(e){let t=e.joints.p;for(let n of[-1,1]){let r=n<0?0:1,i=n<0?R.thighL:R.thighR,a=n<0?R.shinL:R.shinR,o=n<0?R.footL:R.footR;t[i].set(n*.095,.92,0),t[a].set(n*.095,.5,-.006),t[o].set(n*.095,.086,.012);let s=n<0?R.armL:R.armR,c=n<0?R.foreL:R.foreR,l=n<0?R.handL:R.handR,u=n<0?R.fingersL:R.fingersR;t[s].set(n*.205,1.4,0),t[c].set(n*.215,1.115,.012),t[l].set(n*.222,.865,-.01),t[u].copy(t[l]).add(Ac.set(n*.004,-.098*(e.female?.93:1),-.004));let d=e.arms[r],f=e.legs[r];d.a.copy(t[s]),d.b.copy(t[c]),d.c.copy(t[l]),f.a.copy(t[i]),f.b.copy(t[a]),f.c.copy(t[o])}}function*Mc(e,t){let{lod:n,conform:r,skip:i}=t,a=r?{...e,height:1.72}:e,o=new qr(n===0?6144:2048);o.blank=jr;let s=t.textured&&n===0?new ba:null;o.textured=!!s;let c=a.id===`jie`||a.id===`wen`,l=t.faceRes??(c?512:384),u=n===0?5e3:1500,d=a.sex===`f`,f=ui(a);r&&jc(f);let p=Ci(a,f),m=vo(a,f);yield;let h=Es(a.hair.style,f.female),g=s?s.tile(Tc(a)+`:`+l,l,l,!1,(e,t,n,r)=>Ec(a,p.lay,h)(e,t,n,r)):null,_=Math.asin(Math.min(.9,p.lay.irisR/p.eyes[0].r))*180/Math.PI,v=s?s.tile(Dc(a),256,128,!1,Oc(a,_)):null,y=s?s.tile(`lash:${+!!d}`,128,32,!1,kc(d)):null,b=Ds(a.hair.style,f.female),x={},S=0,C=(e,t)=>{i?.includes(e)||t(),x[e]=o.triangleCount-S,S=o.triangleCount};i?.includes(`head`)||(yield*sa({m:o,h:p,b:f,lod:n,skin:a.skin,faceRect:g,eyeRect:v,lashRect:y,cover:b,earsHidden:Os(a.hair.style,f.female)&&!i?.includes(`hair`),lashColor:985608,lashLen:d?.55+.45*a.face.liner:a.age===`student`?.3:.15})),x.head=S=o.triangleCount;let w=o.mark(),T=s?s.reqs.length:0,E=S;yield;for(let e=0;;e++){e>0&&(o.rollback(w),s?.rollback(T),S=E);let t=a.seed>>>0||1,r={desc:a,b:f,h:p,m:o,lod:n,atlas:null,page:null,tiles:s,rnd:()=>(t=t*1664525+1013904223>>>0,t/4294967296),nT:n===0?[14,12,12,10][e]:[8,7,7,6][e],nL:n===0?[9,8,8,7][e]:[6,6,5,5][e],fit:m,trim:e};if(C(`hair`,()=>ks(r,Ys(a.acc))),yield,C(`torso`,()=>zo(r)),yield,C(`arms`,()=>Jo(r)),C(`hands`,()=>rs(r)),yield,C(`legs`,()=>Qo(r)),C(`feet`,()=>cs(r)),yield,C(`acc`,()=>Qs(r)),o.triangleCount<=u||e>=3)return{m:o,b:f,h:p,tiles:s,breakdown:x,trim:e};yield}}function Nc(e){for(;;){let t=e.next();if(t.done)return t.value}}let Pc=null;function Fc(){if(!Pc){let e=va.uCharFill;Pc=e&&e.value?.isVector4?e:{value:new Se(0,0,0,0)}}return Pc}function Ic(e,t){e.onBeforeCompile=e=>{e.uniforms.uAtlas={value:t},e.uniforms.uHasAtlas={value:+!!t},e.uniforms.uNight=va.uNight,e.uniforms.uWet=va.uWet,e.uniforms.uSunDir=va.uSunDir,e.uniforms.uCharFill=Fc(),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>

attribute vec4 uvRect;
attribute vec4 surf;
varying vec2 vUvT;
varying vec4 vRect;
varying vec4 vSurf;
varying vec3 vObjP;
`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
  vUvT = uv; vRect = uvRect; vSurf = surf; vObjP = position;`);let n=I.lights_physical_pars_fragment.replace(`void RE_Direct_Physical(`,`void RE_Direct_Physical_Base(`);e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>

uniform sampler2D uAtlas;
uniform float uHasAtlas;
uniform float uNight;
uniform float uWet;
uniform vec3 uSunDir;
uniform vec4 uCharFill;
varying vec2 vUvT;
varying vec4 vRect;
varying vec4 vSurf;
varying vec3 vObjP;
// per-fragment values shared with the RE_Direct wrapper
int gChK;
vec3 gHairT;
float gTexL;
vec3 gAlbedo;
float chHash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.71, 0.113, 0.419));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float chNoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(chHash(i), chHash(i + vec3(1.0, 0.0, 0.0)), f.x), mix(chHash(i + vec3(0.0, 1.0, 0.0)), chHash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(chHash(i + vec3(0.0, 0.0, 1.0)), chHash(i + vec3(1.0, 0.0, 1.0)), f.x), mix(chHash(i + vec3(0.0, 1.0, 1.0)), chHash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
// derivative bump with unnormalized screen-space sigmas → the height is in meters (true slopes at any distance)
vec3 chPerturb(vec3 p, vec3 n, vec2 dH) {
  vec3 sx = dFdx(p), sy = dFdy(p);
  vec3 r1 = cross(sy, n), r2 = cross(n, sx);
  float det = dot(sx, r1);
  vec3 grad = sign(det) * (dH.x * r1 + dH.y * r2);
  return normalize(abs(det) * n - grad);
}
`).replace(`#include <lights_physical_pars_fragment>`,n+`

void charDirect(const in IncidentLight directLight, const in vec3 N, const in vec3 V, inout ReflectedLight reflectedLight) {
  vec3 L = directLight.direction;
  float ndl = dot(N, L);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  if (gChK == 1) {
    // subsurface look: wrapped diffuse beyond the Lambert terminator, red-shifted (blood & melanin scatter)
    float wrapR = clamp((ndl + 0.5) / 1.5, 0.0, 1.0);
    float wrapG = clamp((ndl + 0.22) / 1.22, 0.0, 1.0);
    float lam = clamp(ndl, 0.0, 1.0);
    vec3 scatter = vec3(wrapR * wrapR, wrapG * wrapG, wrapG * wrapG * 0.92) - vec3(lam);
    reflectedLight.directDiffuse += directLight.color * gAlbedo * max(scatter, vec3(0.0)) * vec3(0.85, 0.42, 0.34) * RECIPROCAL_PI;
    // back-light transmission at thin silhouettes (ears, nose wings, fingers)
    float back = pow(clamp(dot(V, -L), 0.0, 1.0), 4.0) * pow(1.0 - ndv, 2.0);
    reflectedLight.directDiffuse += directLight.color * gAlbedo * vec3(1.0, 0.3, 0.2) * back * 0.25;
  } else if (gChK == 2) {
    // Kajiya-Kay: primary (shifted toward the root, white) + secondary (toward the tip, hair-tinted, noisy)
    vec3 T = gHairT;
    vec3 H = normalize(L + V);
    vec3 T1 = normalize(T + N * 0.12), T2 = normalize(T - N * 0.1);
    float th1 = dot(T1, H), th2 = dot(T2, H);
    float s1 = pow(sqrt(max(0.0, 1.0 - th1 * th1)), 110.0);
    float s2 = pow(sqrt(max(0.0, 1.0 - th2 * th2)), 22.0);
    float strand = 0.35 + 1.2 * gTexL * gTexL;
    float vis = smoothstep(-0.15, 0.35, ndl);
    // the white primary lobe scales with the hair's lightness: near-black hair keeps a thin sheen instead of turning
    // silver-grey under a high sun (seen from behind / above); blond / dyed hair keeps the full highlight
    float prim = 0.045 + 0.075 * clamp(dot(gAlbedo, vec3(0.3333)) * 7.0, 0.0, 1.0);
    reflectedLight.directSpecular += directLight.color * vis * (vec3(prim) * s1 * strand + gAlbedo * 0.9 * s2 * strand);
    // Kajiya diffuse: strands light from any side (softer terminator than Lambert)
    float tl = dot(T, L);
    float kd = sqrt(max(0.0, 1.0 - tl * tl));
    reflectedLight.directDiffuse += directLight.color * gAlbedo * RECIPROCAL_PI * max(0.0, 0.35 * kd * smoothstep(-0.4, 0.3, ndl) - 0.25 * max(ndl, 0.0));
  } else if (gChK == 0 || gChK == 9) {
    // cloth fuzz / satin sheen: grazing retro-scatter, lit from the light side
    float wrap = clamp((ndl + 0.3) / 1.3, 0.0, 1.0);
    float sheen = gChK == 9 ? pow(1.0 - ndv, 2.0) * 0.45 : pow(1.0 - ndv, 4.0) * 0.55;
    reflectedLight.directSpecular += directLight.color * gAlbedo * sheen * wrap * RECIPROCAL_PI;
  }
}
void RE_Direct_Physical(const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
  RE_Direct_Physical_Base(directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight);
  charDirect(directLight, geometryNormal, geometryViewDir, reflectedLight);
}
`).replace(`#include <color_fragment>`,`#include <color_fragment>

  int chK = int(vSurf.x + 0.5);
  gChK = chK;
  float chMode = vSurf.z;
  float chTexL = 0.75;
  float chH = 0.0;
  bool chKill = false;
  // strand direction (hair tiles run along v) from the UV derivatives — computed in uniform control flow
  vec3 chP = -vViewPosition;
  vec3 chDp1 = dFdx(chP), chDp2 = dFdy(chP);
  vec2 chDuv1 = dFdx(vUvT), chDuv2 = dFdy(vUvT);
  float chPix = length(fwidth(vObjP)); // meters per pixel (bind-pose space)
  if (uHasAtlas > 0.5 && vRect.z > 0.0) {
    vec2 st = vUvT;
    bool rep = (chMode > 0.5 && chMode < 1.5) || chMode > 2.5;
    vec2 f = rep ? fract(st) : clamp(st, 0.0, 1.0);
    vec2 gx = chDuv1 * vRect.zw, gy = chDuv2 * vRect.zw;
    // clamp the mip level so tiles never bleed into their atlas neighbours (8 px gutters → level ≤ 3)
    vec2 tsz = vec2(textureSize(uAtlas, 0));
    float lod = log2(max(max(length(gx * tsz), length(gy * tsz)), 1e-6));
    float over = max(lod - 3.0, 0.0);
    float kk = exp2(-over);
    vec4 tx = textureGrad(uAtlas, vRect.xy + f * vRect.zw, gx * kk, gy * kk);
    if (chMode > 2.5) {
      // hair strands: R luminance, G coverage (cut where below the per-vertex threshold, dithered)
      chTexL = tx.r;
      float cut = vSurf.w;
      if (cut > 0.0 && tx.g < cut + (chHash(vec3(gl_FragCoord.xy, 0.0)) - 0.5) * 0.12) chKill = true;
      float far = smoothstep(0.0, 1.5, over);
      diffuseColor.rgb *= mix(0.55 + 0.6 * tx.r, 0.86, far);
      chH = tx.r * 0.00045 * (1.0 - far);
    } else if (rep) {
      chTexL = dot(tx.rgb, vec3(0.3333));
      if (over > 0.0) {
        // far away: fade to the tile's average (4 blurred quadrant samples)
        vec4 avg = 0.25 * (textureLod(uAtlas, vRect.xy + vec2(0.25, 0.25) * vRect.zw, 4.0) + textureLod(uAtlas, vRect.xy + vec2(0.75, 0.25) * vRect.zw, 4.0)
          + textureLod(uAtlas, vRect.xy + vec2(0.25, 0.75) * vRect.zw, 4.0) + textureLod(uAtlas, vRect.xy + vec2(0.75, 0.75) * vRect.zw, 4.0));
        tx = mix(tx, avg, smoothstep(0.0, 1.2, over));
      }
      diffuseColor.rgb *= tx.rgb;
      // woven relief from the tile luminance (cloth), fades with the mip clamp
      if (chK == 0 || chK == 9) chH = chTexL * 0.00035 * (1.0 - smoothstep(0.0, 1.0, over));
    } else {
      float inside = step(0.0, st.x) * step(st.x, 1.0) * step(0.0, st.y) * step(st.y, 1.0);
      tx *= inside;
      if (chMode > 1.5) {
        if (tx.a < 0.5) chKill = true;
        diffuseColor.rgb *= tx.rgb / max(tx.a, 1e-3);
      } else {
        diffuseColor.rgb = diffuseColor.rgb * (1.0 - tx.a) + tx.rgb;
      }
    }
  }
  gTexL = chTexL;
  if (chK == 1) {
    // skin micro relief: pores (~1 mm) + fine undulation (~4 mm) + a few larger soft bumps; fades before aliasing
    float amp = max(vSurf.w, 0.55);
    float pF = 1.0 - smoothstep(0.00025, 0.0007, chPix);
    float uF = 1.0 - smoothstep(0.0012, 0.003, chPix);
    float pores = chNoise(vObjP * 1150.0);
    float fine = chNoise(vObjP * 270.0 + 3.1);
    chH = amp * ((1.0 - pores * pores) * 0.00004 * pF + fine * 0.00011 * uF + chNoise(vObjP * 60.0) * 0.00018);
    gTexL = pores;
  } else if (chK == 0 || chK == 9) {
    // soft fabric wrinkles (≈ 3–6 cm) so no garment reads as a smooth CG shell
    chH += (chNoise(vObjP * 24.0) + 0.5 * chNoise(vObjP * 55.0 + 7.0)) * 0.0011;
    // compression folds: broken, warped bands across the limbs / torso (bind pose: limbs hang vertically),
    // strongest at the elbows, knees, ankles and the waist (heights for a ~1.55–1.8 m body)
    float fy = vObjP.y;
    float warp = chNoise(vObjP * 9.0) * 2.6 + chNoise(vObjP * 21.0) * 0.9;
    float band = 0.5 + 0.5 * sin(fy * 250.0 + warp * 3.2 + vObjP.x * 35.0 + vObjP.z * 20.0);
    float jt = exp(-pow((fy - 1.08) / 0.08, 2.0)) + exp(-pow((fy - 0.49) / 0.08, 2.0)) + 0.8 * exp(-pow((fy - 0.14) / 0.09, 2.0)) + 0.45 * exp(-pow((fy - 0.97) / 0.06, 2.0));
    float broken = smoothstep(0.3, 0.72, chNoise(vObjP * 6.5 + 1.7));
    chH += band * band * (0.18 + jt) * broken * 0.0016 * (1.0 - smoothstep(0.004, 0.012, chPix));
  }
  vec2 chDH = vec2(dFdx(chH), dFdy(chH));
  // hair strand tangent (direction of increasing tile v) from the cotangent frame; fallback: projected up
  {
    vec3 nG = normalize(cross(chDp1, chDp2));
    vec3 dp2perp = cross(chDp2, nG), dp1perp = cross(nG, chDp1);
    vec3 tv = dp2perp * chDuv1.y + dp1perp * chDuv2.y;
    vec3 upV = (viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz;
    gHairT = dot(tv, tv) > 1e-14 ? normalize(tv) : upV;
  }
  if (chKill) discard;
  if (chK == 0 || chK == 2 || chK == 9) diffuseColor.rgb *= 1.0 - 0.18 * uWet;
  if (chK == 8) diffuseColor.a = vSurf.w;
  gAlbedo = diffuseColor.rgb;
`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>

  roughnessFactor = vSurf.y;
  if (chK == 1) roughnessFactor *= 0.86 + 0.3 * gTexL; // pore breakup of the skin sheen
  if (chK == 0 || chK == 2 || chK == 9 || chK == 1) roughnessFactor = mix(roughnessFactor, 0.3, uWet * 0.55);
`).replace(`#include <metalnessmap_fragment>`,`#include <metalnessmap_fragment>

  metalnessFactor = chK == 5 ? 0.85 : 0.0;
`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>

  if (chK <= 2 || chK == 9) normal = chPerturb(-vViewPosition, normal, chDH);
  if (chK == 2) gHairT = normalize(gHairT - normal * dot(gHairT, normal) + 1e-5);
`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>

  {
    vec3 Vv = normalize(vViewPosition);
    float ndv = clamp(dot(normal, Vv), 0.0, 1.0);
    float rim = pow(1.0 - ndv, 3.0);
    vec3 upV = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);
    float up = dot(normal, upV) * 0.5 + 0.5;
    float day = 1.0 - uNight;
    // night readability: soft overhead fill + cool rim (city lights)
    totalEmissiveRadiance += diffuseColor.rgb * uNight * (0.05 + 0.12 * up);
    // character fill of lit venues (walk-in interiors, stations): albedo × rgb × intensity
    totalEmissiveRadiance += diffuseColor.rgb * uCharFill.rgb * uCharFill.w;
    totalEmissiveRadiance += vec3(0.62, 0.72, 1.0) * rim * (0.02 + 0.2 * uNight) * (0.4 + 0.6 * dot(diffuseColor.rgb, vec3(0.33)));
    if (chK == 1) {
      // skin: warm ambient bounce (light scattered inside the skin never looks grey in shade)
      totalEmissiveRadiance += diffuseColor.rgb * vec3(1.0, 0.5, 0.4) * (0.01 + 0.018 * day) * (0.6 + 0.4 * up);
    } else if (chK == 2) {
      // hair: faint sky sheen along the strands so dark hair keeps a shape in shade
      vec3 Hs = normalize(upV + Vv);
      float ts = dot(gHairT, Hs);
      float sh = pow(sqrt(max(0.0, 1.0 - ts * ts)), 30.0);
      totalEmissiveRadiance += vec3(0.5, 0.56, 0.66) * sh * (0.012 + 0.03 * gTexL) * (day + 0.4 * uNight);
    } else if (chK == 3) {
      totalEmissiveRadiance += diffuseColor.rgb * 0.035;
    } else if (chK == 6) {
      totalEmissiveRadiance += diffuseColor.rgb * vSurf.w * (0.7 + 1.6 * uNight);
    } else if (chK == 7) {
      // retro-reflective tape: bright toward the viewer at night (headlights / street lights)
      totalEmissiveRadiance += diffuseColor.rgb * vSurf.w * (0.08 + 1.3 * uNight * pow(ndv, 1.5));
    } else if (chK == 8) {
      totalEmissiveRadiance += vec3(0.9, 0.95, 1.0) * pow(1.0 - ndv, 3.0) * 0.25;
    }
  }
`)},e.customProgramCacheKey=()=>`charlib-hero-v4`}let Lc=/* @__PURE__ */ new Map;function Rc(e){let t=Lc.get(e);if(t)return t;let n=new Yn({vertexColors:!0,roughness:.8,metalness:0});Ic(n,e),n.name=`char-hero`;let r=new Yn({vertexColors:!0,roughness:.05,metalness:0,transparent:!0,depthWrite:!1});return Ic(r,e),r.name=`char-hero-lens`,t=[n,r],Lc.set(e,t),t}new N;let zc=15e3;function Bc(e,t,n){let r=Jr(n.arrays),i=wr({p:n.joints}),a=i.map(e=>e.position.clone()),[o,s]=Rc(n.page?n.page.tex:null),c=new Nn(r,[o,s]);c.name=`char-${e.id}`,c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!0,c.boundingSphere=r.boundingSphere.clone(),c.boundingSphere.radius*=1.35;let l=new Ze;l.name=`character-${e.id}`,l.add(i[R.hips]),l.add(c),l.updateMatrixWorld(!0);let u=new Rn(i);c.bind(u),i[R.lidL].scale.set(1,.001,1),i[R.lidR].scale.set(1,.001,1);let d=n.joints;return{desc:e,lod:t,root:l,mesh:c,bones:i,skeleton:u,rest:a,joints:d.map(e=>e.clone()),triangles:n.triangles,breakdown:n.breakdown,trim:n.trim,height:n.height,thighLen:d[R.thighL].distanceTo(d[R.shinL]),shinLen:d[R.shinL].distanceTo(d[R.footL]),dispose(){r.dispose(),u.dispose()}}}function Vc(e,t,n){let r=e.m.heroArrays();return n&&xa(r.rect,n),{arrays:r,page:t,joints:e.b.joints.p,height:e.b.H,triangles:e.m.triangleCount,breakdown:e.breakdown,trim:e.trim}}function Hc(e){return e.atlas===void 0?Ia():e.atlas}let Uc=/* @__PURE__ */ new WeakMap,Wc=1,Gc=/* @__PURE__ */ new Map,Kc=null;function qc(){Kc!==null&&clearTimeout(Kc),Kc=null,Gc.clear(),ka(),Ra()}function Jc(){Kc!==null&&clearTimeout(Kc),Kc=setTimeout(()=>{Kc=null,rl.size||nl.length?Jc():qc()},3e4)}function Yc(e,t,n,r){let i=0;return n&&(i=Uc.get(n)??0,i||Uc.set(n,i=Wc++)),`${i}|${t}|${r.faceRes??``}|${r.skip?.join(`,`)??``}|${JSON.stringify(e)}`}function Xc(e){let t=e.arrays;return{...e,arrays:{pos:t.pos.slice(),nor:t.nor.slice(),col:t.col.slice(),uv:t.uv.slice(),rect:t.rect.slice(),surf:t.surf.slice(),si:t.si.slice(),sw:t.sw.slice(),idx:t.idx.slice(),n0:t.n0,bounds:t.bounds??Kr(t.pos)},joints:e.joints.map(e=>e.clone())}}function Zc(e){let t=Gc.get(e);return t?(Gc.delete(e),Gc.set(e,t),Jc(),Xc(t)):null}function Qc(e,t){for(Gc.set(e,Xc(t));Gc.size>8;)Gc.delete(Gc.keys().next().value);Jc()}function $c(e,t={}){return Nc(el(e,t))}function*el(e,t={}){return Bc(e,t.lod??0,yield*tl(e,t))}function*tl(e,t){let n=t.lod??0,r=Hc(t),i=Yc(e,n,r,t),a=Zc(i);if(a)return a;let o=yield*Mc(e,{lod:n,textured:n===0&&!!r,conform:!1,faceRes:t.faceRes,skip:t.skip}),s=null,c=null;if(o.tiles&&r){yield;let e=yield*r.resolveSteps(o.tiles.reqs);s=e.page,c=e.rects,r.flush()}let l=Vc(o,s,c);return Qc(i,l),l}new class{w=null;seq=1;pending=/* @__PURE__ */ new Map;broken=!1;noPaint=!1;built=0;workerMs=0;applyMs=0;applyMax=0;noteApply(e){this.applyMs+=e,this.applyMax=Math.max(this.applyMax,e)}start(){if(this.w||this.broken)return this.w;if(typeof Worker>`u`)return this.broken=!0,null;try{let e=new Worker(new URL(
/* @vite-ignore */
`/GTA_Taipei/assets/charWorker-CMbjchSu.js`,``+self.location.href),{type:`module`});e.onmessage=e=>{this.lastReply=performance.now();let t=e.data,n=this.pending.get(t.id);n&&(this.pending.delete(t.id),t.error?n.reject(Error(t.error)):(this.built++,this.workerMs+=t.ms??0,n.resolve(t)))},e.onerror=e=>{e.preventDefault?.(),console.warn(`[characters] build worker unavailable — building on the main thread (sliced)`),this.fail()},this.w=e}catch{this.broken=!0}return this.w}lastReply=0;watchT=0;watch(){if(this.watchT||this.broken)return;let e=this.lastReply+zc-performance.now();this.watchT=setTimeout(()=>{if(this.watchT=0,this.pending.size&&!this.broken){if(performance.now()-this.lastReply<15e3)return this.watch();console.warn(`[characters] build worker silent for ${zc/1e3} s — building on the main thread (sliced)`),this.fail()}},Math.max(250,e))}fail(){this.broken=!0,this.w?.terminate(),this.w=null;let e=[...this.pending.values()];this.pending.clear();for(let t of e)t.reject(/* @__PURE__ */ Error(`worker failed`))}run(e){let t=this.start();if(!t)return null;let n=this.seq++,r={...e,id:n};return new Promise((e,i)=>{this.pending.size||(this.lastReply=performance.now()),this.pending.set(n,{resolve:e,reject:i,job:r}),this.watch();try{t.postMessage(r)}catch(e){this.pending.delete(n),i(e)}})}get inFlight(){return this.pending.size}};let nl=[],rl=/* @__PURE__ */ new Map,Z={porcelain:15980224,fair:15518125,light:14990748,medium:14199428,tan:13211248,deep:11566682},il={black:1709073,softBlack:2431766,darkBrown:3022873,brown:4862498,ash:6970450,auburn:5909022,grey:9407108,white:13223359};function Q(e={}){return{jaw:.5,length:.5,cheek:.5,eyeSize:1,eyeTilt:.1,eyeGap:1,lid:.5,noseW:.5,noseL:.5,bridge:.4,lips:.5,mouthW:1,brow:.5,browArch:.4,iris:3810328,lipColor:0,blush:.1,liner:0,facial:`none`,wrinkles:0,mole:0,smile:.1,...e}}let $=(...e)=>e.map(e=>typeof e==`string`?{kind:e}:e);Q({jaw:.58,length:.45,cheek:.55,eyeSize:1.02,eyeTilt:.14,lid:.42,noseW:.5,bridge:.55,lips:.42,mouthW:1.02,brow:.8,browArch:.3,smile:.3,facial:`stubble`,iris:3021842}),$({kind:`watch`,color:1118483,color2:13685976},{kind:`necklace`,color:14278112}),Q({jaw:.3,length:.5,cheek:.55,eyeSize:1.08,eyeTilt:.2,eyeGap:1,lid:.62,noseW:.35,noseL:.45,bridge:.55,lips:.62,mouthW:.95,brow:.45,browArch:.6,lipColor:12863311,blush:.25,liner:.75,mole:1,smile:.05,iris:3350543}),$({kind:`necklace`,color:15257738},{kind:`watch`,color:15328474,color2:13215850},{kind:`earbuds`});function al(e,t,n,r){return{id:e,name:{zh:t,en:n},seed:r.seed??ol(e),...r}}function ol(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return t>>>0}let sl=[al(`office-m`,`上班族`,`Office worker`,{sex:`m`,age:`adult`,build:`avg`,height:1.74,skin:Z.light,face:Q({jaw:.55,eyeSize:.95,lid:.3,brow:.6,smile:0}),hair:{style:`sidepart`,color:il.black},top:{style:`shirt`,color:13623538,tucked:!0},bottom:{style:`slacks`,color:3026998,belt:1774865},shoes:{style:`dress`,color:1380879},acc:$(`glasses`,{kind:`lanyard`,color:2777784},{kind:`backpack`,color:2961203},`watch`)}),al(`office-f`,`粉領族`,`Office lady`,{sex:`f`,age:`adult`,build:`slim`,height:1.6,skin:Z.fair,face:Q({jaw:.3,eyeSize:1.04,lid:.7,lipColor:12079194,blush:.2,liner:.3,browArch:.5}),hair:{style:`bob`,color:il.darkBrown,color2:il.brown},top:{style:`blouse`,color:15986146,sleeve:`short`},outer:{style:`cardigan`,color:14272422,color2:13482388},bottom:{style:`pencil`,color:2765382},shoes:{style:`heel`,color:1709590},acc:$({kind:`tote`,color:13216138},{kind:`lanyard`,color:13120556},{kind:`mask`,color:15263978})}),al(`student-m`,`高中生（男）`,`High-school boy`,{sex:`m`,age:`student`,build:`slim`,height:1.7,skin:Z.light,face:Q({jaw:.4,eyeSize:1.02,lid:.35,cheek:.4,brow:.55,smile:.15}),hair:{style:`bowl`,color:il.black},top:{style:`uniform`,color:16185074,print:`school`,color2:2768780},bottom:{style:`slacks`,color:12168070},shoes:{style:`sneaker`,color:1776415,color2:15921906,sole:15921906},socks:15921906,acc:$({kind:`schoolbag`,color:2306639},`glasses`,`earbuds`)}),al(`student-f`,`高中生（女）`,`High-school girl`,{sex:`f`,age:`student`,build:`slim`,height:1.58,skin:Z.porcelain,face:Q({jaw:.25,eyeSize:1.1,lid:.55,cheek:.45,lips:.55,blush:.3,browArch:.35,smile:.25}),hair:{style:`bangs`,color:il.black},top:{style:`uniform`,color:16316660,print:`school`,color2:11544634,tucked:!0},bottom:{style:`skirt`,color:2042436},shoes:{style:`loafer`,color:1709330},socks:15921906,acc:$({kind:`schoolbag`,color:2042436},{kind:`cup`,color:13081194,color2:3116906})}),al(`auntie`,`阿姨`,`Auntie`,{sex:`f`,age:`adult`,build:`heavy`,height:1.55,skin:Z.medium,face:Q({jaw:.6,cheek:.7,eyeSize:.92,lid:.6,wrinkles:.35,lipColor:11549258,blush:.15,smile:.35,browArch:.7,brow:.3}),hair:{style:`perm`,color:3809304,color2:5910560},top:{style:`blouse`,color:11543882,pattern:`floral`,patternColor:16106818,sleeve:`short`},bottom:{style:`wide`,color:1842210},shoes:{style:`flat`,color:3811876},acc:$({kind:`visor`,color:14834572},{kind:`armSleeves`,color:15920872},{kind:`marketBag`})}),al(`uncle`,`歐吉桑`,`Uncle`,{sex:`m`,age:`elder`,build:`heavy`,height:1.66,skin:Z.tan,face:Q({jaw:.7,cheek:.6,eyeSize:.9,lid:.3,wrinkles:.6,facial:`stubble`,smile:.2,brow:.6}),hair:{style:`balding`,color:6972767},top:{style:`tank`,color:15921386},bottom:{style:`shorts`,color:3815988},shoes:{style:`slipper`,color:2382016,color2:16053492},acc:$({kind:`fan`,color:15852228,color2:12730415}),stoop:.2}),al(`ama`,`阿嬤`,`Grandma`,{sex:`f`,age:`elder`,build:`slim`,height:1.5,skin:Z.medium,face:Q({jaw:.5,eyeSize:.88,lid:.7,wrinkles:.85,smile:.4,browArch:.3,brow:.3}),hair:{style:`elder`,color:12104362},top:{style:`blouse`,color:7101066,pattern:`floral`,patternColor:15259376,sleeve:`elbow`},bottom:{style:`wide`,color:2894384},shoes:{style:`flat`,color:2236964},acc:$({kind:`fan`},{kind:`marketBag`,color:2772904,color2:14168620}),stoop:.45}),al(`agong`,`阿公`,`Grandpa`,{sex:`m`,age:`elder`,build:`slim`,height:1.62,skin:Z.tan,face:Q({jaw:.5,eyeSize:.88,lid:.4,wrinkles:.9,smile:.25,brow:.45}),hair:{style:`elder`,color:il.white},top:{style:`polo`,color:14208950,tucked:!0},bottom:{style:`slacks`,color:4867384,belt:2759957},shoes:{style:`loafer`,color:4862498},acc:$({kind:`cap`,color:5922136},`glasses`),stoop:.4}),al(`rider-pink`,`外送員（餓熊）`,`FOODBEAR rider`,{sex:`m`,age:`adult`,build:`avg`,height:1.72,skin:Z.tan,face:Q({jaw:.6,eyeSize:.95,lid:.35,brow:.7,smile:0}),hair:{style:`fade`,color:il.black},top:{style:`rider`,color:15217276,color2:2763312,print:`rider-pink`},bottom:{style:`jeans`,color:3029586},shoes:{style:`sneaker`,color:2763310,color2:15217276,sole:15790314},acc:$({kind:`helmet`,color:15217276,color2:1842208},{kind:`deliveryBox`,color:15217276},{kind:`mask`,color:1842208})}),al(`rider-green`,`外送員（快食GO）`,`EATZ GO rider`,{sex:`f`,age:`adult`,build:`avg`,height:1.63,skin:Z.light,face:Q({jaw:.4,eyeSize:1,lid:.5,brow:.5,lipColor:11554896}),hair:{style:`ponytail`,color:il.darkBrown},top:{style:`rider`,color:3129201,color2:1381653,print:`rider-green`},bottom:{style:`track`,color:1842208,color2:3129201},shoes:{style:`sneaker`,color:15921902,color2:3129201},acc:$({kind:`helmet`,color:15921904,color2:3129201},{kind:`deliveryBox`,color:4113517},{kind:`armSleeves`,color:1842208})}),al(`police`,`警察`,`Police officer`,{sex:`m`,age:`adult`,build:`avg`,height:1.78,skin:Z.light,face:Q({jaw:.7,eyeSize:.95,lid:.35,brow:.7,smile:-.1}),hair:{style:`fade`,color:il.black},top:{style:`police`,color:2240847,color2:14267207},outer:{style:`vest`,color:12118076,color2:14673642,closed:!0},bottom:{style:`slacks`,color:1581624,belt:1052947},shoes:{style:`dress`,color:986897},acc:$({kind:`policeCap`},`watch`)}),al(`tourist`,`觀光客`,`Tourist`,{sex:`f`,age:`adult`,build:`avg`,height:1.66,skin:Z.fair,face:Q({jaw:.35,eyeSize:1.05,lid:.8,lipColor:13658730,blush:.2,smile:.5}),hair:{style:`long`,color:5913124,color2:9068608},top:{style:`tee`,color:16184558,print:`taipei`,color2:13115436},bottom:{style:`shorts`,color:6981294,pattern:`denim`},shoes:{style:`sneaker`,color:16052974,color2:9085120},acc:$({kind:`bucket`,color:14207144},`sunglasses`,{kind:`shoulderBag`,color:8014378},`phone`)}),al(`hipster`,`文青`,`Hipster`,{sex:`m`,age:`adult`,build:`slim`,height:1.75,skin:Z.fair,face:Q({jaw:.35,eyeSize:.98,lid:.3,brow:.45,facial:`goatee`,smile:.05}),hair:{style:`wavy`,color:il.darkBrown},top:{style:`tee`,color:2763310,print:`band`,color2:15262420},bottom:{style:`wide`,color:12166270},shoes:{style:`sneaker`,color:1776415,color2:15921906,sole:15921902},acc:$({kind:`tote`,color:15327695},{kind:`glasses`,color:6965802},`earbuds`)}),al(`ximen-girl`,`西門町潮妹`,`Ximen trendsetter`,{sex:`f`,age:`adult`,build:`slim`,height:1.62,skin:Z.porcelain,face:Q({jaw:.2,eyeSize:1.12,lid:.85,eyeTilt:.15,lipColor:13650016,blush:.35,liner:.5,browArch:.45,smile:.2}),hair:{style:`wavy`,color:6969936,color2:11047040},top:{style:`tee`,color:16316146,fit:.9,print:`logo`,color2:1842210},bottom:{style:`skirt`,color:3813456,pattern:`plaid`,patternColor:14207152},shoes:{style:`sneaker`,color:16185074,color2:16185074,sole:16448250},socks:16053490,acc:$({kind:`shoulderBag`,color:1579035},`phone`,{kind:`cup`,color:15251656,color2:14695018})}),al(`vendor`,`夜市攤販`,`Night-market vendor`,{sex:`m`,age:`adult`,build:`heavy`,height:1.7,skin:Z.tan,face:Q({jaw:.75,cheek:.7,eyeSize:.92,lid:.3,brow:.7,wrinkles:.25,smile:.45,facial:`mustache`}),hair:{style:`buzz`,color:il.black},top:{style:`tee`,color:15262420},bottom:{style:`shorts`,color:2763310},shoes:{style:`rainboot`,color:15921902},acc:$({kind:`apron`,color:2767450},{kind:`headband`,color:15921906})}),al(`jogger`,`河濱跑者`,`Riverside jogger`,{sex:`f`,age:`adult`,build:`slim`,height:1.65,skin:Z.medium,face:Q({jaw:.35,eyeSize:1,lid:.45,blush:.35,smile:.2}),hair:{style:`ponytail`,color:il.black},top:{style:`tank`,color:16740193},bottom:{style:`leggings`,color:1710622},shoes:{style:`sneaker`,color:2763312,color2:13168698,sole:15790314},acc:$({kind:`cap`,color:16053490},`earbuds`,{kind:`watch`,color:13168698})}),al(`rain-commuter`,`雨衣騎士`,`Rain-poncho commuter`,{sex:`m`,age:`adult`,build:`avg`,height:1.72,skin:Z.light,face:Q({jaw:.5,eyeSize:.95,lid:.4,smile:-.1}),hair:{style:`fade`,color:il.black},top:{style:`shirt`,color:15263978,sleeve:`short`},outer:{style:`poncho`,color:3832008},bottom:{style:`slacks`,color:2764342},shoes:{style:`sandal`,color:1842206,color2:2763308},acc:$({kind:`helmet`,color:2763824,color2:1381655},{kind:`mask`,color:12573166})}),al(`salaryman`,`業務`,`Sales rep`,{sex:`m`,age:`adult`,build:`avg`,height:1.76,skin:Z.light,face:Q({jaw:.6,eyeSize:.96,lid:.45,brow:.55,smile:.35}),hair:{style:`undercut`,color:il.black},top:{style:`shirt`,color:16185076,tucked:!0},outer:{style:`blazer`,color:2371656,color2:1844792},bottom:{style:`slacks`,color:2371656,belt:1380879},shoes:{style:`dress`,color:1708556},acc:$({kind:`shoulderBag`,color:1380879},`watch`)}),al(`mom`,`媽媽`,`Mom`,{sex:`f`,age:`adult`,build:`avg`,height:1.6,skin:Z.light,face:Q({jaw:.45,cheek:.6,eyeSize:.98,lid:.6,wrinkles:.15,lipColor:12083312,smile:.3}),hair:{style:`bob`,color:il.brown},top:{style:`polo`,color:8042696},bottom:{style:`slacks`,color:15129800},shoes:{style:`flat`,color:13154464},acc:$({kind:`shoulderBag`,color:9067066},{kind:`mask`,color:15921908},`phone`)}),al(`ntu-student`,`大學生`,`College student`,{sex:`m`,age:`adult`,build:`avg`,height:1.73,skin:Z.light,face:Q({jaw:.45,eyeSize:1,lid:.4,brow:.6,smile:.1}),hair:{style:`twoblock`,color:il.softBlack},top:{style:`hoodie`,color:10133156,color2:9080468},bottom:{style:`track`,color:1579036,color2:15921906},shoes:{style:`slipper`,color:2382016,color2:16053492},acc:$({kind:`backpack`,color:3820090},{kind:`cup`,color:3810328,color2:1842204})}),al(`clerk`,`超商店員`,`Store clerk`,{sex:`f`,age:`adult`,build:`avg`,height:1.6,skin:Z.fair,face:Q({jaw:.35,eyeSize:1.02,lid:.55,lipColor:13131888,blush:.2,smile:.4}),hair:{style:`bun`,color:il.darkBrown},top:{style:`polo`,color:16053488,color2:2067020},bottom:{style:`slacks`,color:1842210},shoes:{style:`sneaker`,color:1842210,color2:1842210,sole:2763310},acc:$({kind:`apron`,color:2067020},{kind:`lanyard`,color:15235102})}),al(`worker`,`工人`,`Construction worker`,{sex:`m`,age:`adult`,build:`heavy`,height:1.71,skin:Z.deep,face:Q({jaw:.75,eyeSize:.92,lid:.3,brow:.8,facial:`beard`,wrinkles:.3,smile:.1}),hair:{style:`buzz`,color:il.black},top:{style:`tee`,color:5921362},outer:{style:`vest`,color:15759906,color2:14673642,closed:!0},bottom:{style:`jeans`,color:3820130},shoes:{style:`boot`,color:6965802},acc:$({kind:`helmet`,color:15909402,color2:1842204},{kind:`armSleeves`,color:2763310})}),al(`taxi-uncle`,`小黃司機`,`Taxi driver`,{sex:`m`,age:`adult`,build:`heavy`,height:1.68,skin:Z.tan,face:Q({jaw:.65,cheek:.6,eyeSize:.92,lid:.35,facial:`stubble`,wrinkles:.4,smile:.3,mole:2}),hair:{style:`sidepart`,color:2762276},top:{style:`polo`,color:15779880,color2:1842204},bottom:{style:`slacks`,color:3026482,belt:1380879},shoes:{style:`loafer`,color:1840144},acc:$({kind:`sunglasses`},`watch`)}),al(`temple-lady`,`廟口阿姨`,`Temple volunteer`,{sex:`f`,age:`elder`,build:`avg`,height:1.54,skin:Z.medium,face:Q({jaw:.5,eyeSize:.9,lid:.6,wrinkles:.6,smile:.5}),hair:{style:`bun`,color:9077886},top:{style:`shirt`,color:9054778,sleeve:`long`},bottom:{style:`wide`,color:2763310},shoes:{style:`flat`,color:1842204},acc:$({kind:`visor`,color:16115400},{kind:`umbrella`,color:9058906,color2:6957636}),stoop:.3})],cl=[al(`mp`,`憲兵`,`Military police`,{sex:`m`,age:`adult`,build:`avg`,height:1.79,skin:Z.light,face:Q({jaw:.68,eyeSize:.94,lid:.3,brow:.72,smile:-.15}),hair:{style:`buzz`,color:il.black},top:{style:`shirt`,color:6121544,color2:4871225,pattern:`camo`,patternColor:3358763,tucked:!0,sleeve:`long`},bottom:{style:`slacks`,color:5923909,pattern:`camo`,patternColor:3358763,belt:15921902},shoes:{style:`boot`,color:855310},acc:$({kind:`helmet`,color:16119282,color2:15132386},{kind:`watch`,color:1381655})})];[...sl,...cl];let ll={[R.armL]:[.04,0,-.07],[R.armR]:[.02,0,.07],[R.foreL]:[.22,0,0],[R.foreR]:[.26,0,0],[R.fingersL]:[0,0,.3],[R.fingersR]:[0,0,-.3]},ul=e=>t=>Math.max(e+.1,.3),dl={[R.thighL]:[1.5,0,-.06],[R.thighR]:[1.5,0,.06],[R.shinL]:[-1.45,0,0],[R.shinR]:[-1.45,0,0],[R.footL]:[-.05,0,0],[R.footR]:[-.05,0,0]},fl={[R.thighL]:[.12,0,-.03],[R.thighR]:[.12,0,.03],[R.shinL]:[-1.62,0,0],[R.shinR]:[-1.62,0,0],[R.footL]:[.55,0,0],[R.footR]:[.55,0,0]},pl={[R.armL]:[.55,0,.32],[R.armR]:[.55,0,-.32],[R.foreL]:[1.75,0,0],[R.foreR]:[1.75,0,0],[R.handL]:[0,.6,0],[R.handR]:[0,-.6,0],[R.fingersL]:[0,0,.05],[R.fingersR]:[0,0,-.05]},ml={stand:{bones:{...ll}},attention:{bones:{[R.armL]:[0,0,-.03],[R.armR]:[0,0,.03],[R.foreL]:[.05,0,0],[R.foreR]:[.05,0,0],[R.fingersL]:[0,0,.9],[R.fingersR]:[0,0,-.9],[R.chest]:[.03,0,0]}},browse:{bones:{...ll,[R.armR]:[1.05,0,.12],[R.foreR]:[.55,0,0],[R.head]:[-.12,.1,0],[R.neck]:[-.05,.05,0]}},look:{bones:{...ll,[R.head]:[.18,.35,0],[R.neck]:[.1,.2,0],[R.spine]:[.03,.1,0]}},phone:{bones:{...ll,[R.armL]:[.3,0,-.3],[R.foreL]:[1.5,0,0],[R.handL]:[-.2,.9,0],[R.head]:[-.3,0,0],[R.neck]:[-.2,0,0]}},hold:{bones:{...ll,[R.armR]:[.15,0,-.05],[R.foreR]:[1.35,0,0],[R.fingersR]:[0,0,-.9]}},point:{bones:{...ll,[R.armR]:[1.35,0,.35],[R.foreR]:[.1,0,0],[R.head]:[0,-.2,0]}},counter:{bones:{[R.armL]:[.5,0,.12],[R.armR]:[.5,0,-.12],[R.foreL]:[.95,0,0],[R.foreR]:[.95,0,0],[R.chest]:[-.08,0,0],[R.fingersL]:[0,0,.2],[R.fingersR]:[0,0,-.2]}},cook:{bones:{[R.armL]:[.45,0,.2],[R.armR]:[.7,0,-.1],[R.foreL]:[1.1,0,0],[R.foreR]:[1.2,0,0],[R.chest]:[-.14,0,0],[R.head]:[-.3,0,0],[R.fingersR]:[0,0,-.9]}},handsup:{bones:{[R.armL]:[2.55,0,-.45],[R.armR]:[2.55,0,.45],[R.foreL]:[.55,0,0],[R.foreR]:[.55,0,0],[R.handL]:[.3,0,0],[R.handR]:[.3,0,0],[R.fingersL]:[0,0,-.1],[R.fingersR]:[0,0,.1],[R.chest]:[.08,0,0],[R.head]:[.05,0,0]}},cower:{bones:{[R.thighL]:[1.95,0,-.18],[R.thighR]:[1.95,0,.18],[R.shinL]:[-2.35,0,0],[R.shinR]:[-2.35,0,0],[R.footL]:[.35,0,0],[R.footR]:[.35,0,0],[R.spine]:[-.35,0,0],[R.chest]:[-.3,0,0],[R.head]:[-.4,0,0],[R.armL]:[2.3,0,.2],[R.armR]:[2.3,0,-.2],[R.foreL]:[2.1,0,0],[R.foreR]:[2.1,0,0]},hipsY:e=>e.shinLen*.62+.12},sit:{bones:{...dl,[R.armL]:[.55,0,-.05],[R.armR]:[.55,0,.05],[R.foreL]:[.75,0,0],[R.foreR]:[.75,0,0],[R.spine]:[.04,0,0]},hipsY:ul(.43)},stool:{bones:{...dl,[R.shinL]:[-1.8,0,0],[R.shinR]:[-1.8,0,0],[R.armL]:[.6,0,-.05],[R.armR]:[.6,0,.05],[R.foreL]:[.9,0,0],[R.foreR]:[.9,0,0]},hipsY:ul(.7)},eat:{bones:{...dl,[R.armL]:[.6,0,-.05],[R.foreL]:[.85,0,0],[R.armR]:[.75,0,-.2],[R.foreR]:[2.05,0,0],[R.head]:[-.12,0,0],[R.chest]:[-.12,0,0]},hipsY:ul(.43)},kneel:{bones:{...fl,...ll},hipsY:e=>e.thighLen+.09},pray:{bones:{...fl,...pl,[R.head]:[-.25,0,0],[R.chest]:[-.12,0,0]},hipsY:e=>e.thighLen+.09},incense:{bones:{...pl,[R.armL]:[.85,0,.3],[R.armR]:[.85,0,-.3],[R.foreL]:[1.45,0,0],[R.foreR]:[1.45,0,0],[R.head]:[-.1,0,0]}}};function hl(e,t){let n=e.bones;for(let t=0;t<25&&t<n.length;t++)n[t].rotation.set(0,0,0),n[t].position.copy(e.rest[t]);n[R.lidL].scale.set(1,.001,1),n[R.lidR].scale.set(1,.001,1);let r=ml[t];for(let e in r.bones){let t=r.bones[e];n[+e].rotation.set(t[0],t[1],t[2])}r.hipsY&&(n[R.hips].position.y=r.hipsY(e)),r.hipsZ&&(n[R.hips].position.z=e.rest[R.hips].z-r.hipsZ)}let gl=/* @__PURE__ */ new Map,_l=new N,vl=new Se;new F,new F;function yl(e){let t=gl.get(e.id);if(t)return gl.delete(e.id),gl.set(e.id,t),t;for(t=$c(e,{lod:1,atlas:null}),gl.set(e.id,t);gl.size>28;){let e=gl.keys().next().value;gl.get(e)?.dispose(),gl.delete(e)}return t}function bl(e,t){let n=yl(e);hl(n,t),n.root.updateMatrixWorld(!0);let r=n.mesh,i=r.geometry,a=i.attributes.position,o=i.attributes.normal,s=i.attributes.color,c=a.count,l=new Float32Array(c*3),u=new Float32Array(c*3);for(let e=0;e<c;e++)r.getVertexPosition(e,_l),vl.set(o.getX(e),o.getY(e),o.getZ(e),0),r.applyBoneTransform(e,vl),l[e*3]=_l.x,l[e*3+1]=_l.y,l[e*3+2]=_l.z,u[e*3]=vl.x,u[e*3+1]=vl.y,u[e*3+2]=vl.z;let d=null;if(s){d=new Float32Array(c*3);for(let e=0;e<c;e++)d[e*3]=s.getX(e),d[e*3+1]=s.getY(e),d[e*3+2]=s.getZ(e)}let f=i.index,p=null;if(f){p=c>65535?new Uint32Array(f.count):new Uint16Array(f.count);for(let e=0;e<f.count;e++)p[e]=f.getX(e)}return hl(n,`stand`),{pos:l,nor:u,col:d,idx:p}}let xl=self,Sl=typeof OffscreenCanvas<`u`;!xl.document&&Sl&&(xl.document={createElement:()=>new OffscreenCanvas(1,1)});let Cl=(e,t=[])=>self.postMessage(e,t),wl=null,Tl=/* @__PURE__ */ new Map;async function El(e){if(!Sl)throw Error(`no OffscreenCanvas`);let t=wl??=new Ma(e.atlasSize),n=performance.now(),r=$c(e.desc,{atlas:t,faceRes:e.faceRes}),i=t.pages[t.pages.length-1],a=r.mesh.geometry,o=[],s=/* @__PURE__ */ new Set,c=e=>{let t=e;return s.has(e.buffer)&&(t=e.slice()),s.add(t.buffer),o.push(t.buffer),t},l=[];for(let e in a.attributes){let t=a.attributes[e];l.push({name:e,array:c(t.array),itemSize:t.itemSize,normalized:t.normalized})}let u=a.index?c(a.index.array):null,d=a.groups.map(e=>[e.start,e.count,e.materialIndex??0]),f=r.mesh.boundingSphere??a.boundingSphere,p=new Float32Array(r.joints.length*3);r.joints.forEach((e,t)=>p.set([e.x,e.y,e.z],t*3)),o.push(p.buffer);let m=null;if(Tl.get(i.id)!==i.used){m=await createImageBitmap(i.canvas,{imageOrientation:`flipY`,premultiplyAlpha:`premultiply`,colorSpaceConversion:`none`}),Tl.set(i.id,i.used),o.push(m);for(let e of t.pages)e!==i&&e.canvas.width>1&&(e.canvas.width=e.canvas.height=1)}r.dispose(),Cl({id:e.id,hero:{attrs:l,index:u,groups:d,bs:[f.center.x,f.center.y,f.center.z,f.radius],joints:p,triangles:r.triangles,trim:r.trim,breakdown:r.breakdown,height:r.height,thighLen:r.thighLen,shinLen:r.shinLen,page:i.id,pageSize:i.size,bitmap:m},ms:performance.now()-n},o)}self.onmessage=e=>{let t=e.data;try{if(t.t===`bake`){let e=performance.now(),n=bl(t.desc,t.pose),r=[n.pos.buffer,n.nor.buffer];n.col&&r.push(n.col.buffer),n.idx&&r.push(n.idx.buffer),Cl({id:t.id,bake:n,ms:performance.now()-e},r)}else if(t.t===`hero`)El(t).catch(e=>Cl({id:t.id,error:String(e?.stack??e)}));else if(t.t===`reset`){if(wl)for(let e of wl.pages)e.canvas.width=e.canvas.height=1;wl=null,Tl.clear()}}catch(e){Cl({id:t.id,error:String(e?.stack??e)})}}})();