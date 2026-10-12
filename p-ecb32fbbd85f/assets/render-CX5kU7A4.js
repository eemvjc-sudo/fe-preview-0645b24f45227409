import{f as R,V as z,a1 as M,a2 as zt,a3 as mt,a4 as Ct,a5 as Gt,a6 as lt,C as Rt,a7 as K,a8 as Et,a9 as Pt,aa as It,ab as Vt,ac as kt,ad as Nt,ae as Lt,af as Zt,ag as Ut,ah as $t,ai as Xt,aj as Wt,ak as Ht,al as jt,am as Yt,an as qt,ao as Kt,ap as Qt,aq as Jt,ar as te,as as ee,at as se,au as ae,av as re,aw as oe,ax as ne,ay as ie,az as J,j as G,aA as dt,aB as fe,aC as k,aD as nt,aE as tt,M as ut,aF as pt}from"./nativeXRFrame-Bozz1OZE.js";import{_ as le,p as Bt}from"./index-CRxs6Kls.js";import{_ as St}from"./__vite-browser-external-BltD9Dnm.js";class w{constructor(t=0,e=0){this.x=t,this.y=e,t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("x is not an integer, floor(x) used")),e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("y is not an integer, floor(y) used"))}clone(){return new w(this.x,this.y)}rotate60About(t){const e=this.x;return this.x=t.x+t.y-this.y,this.y=e+this.y-t.x,this}rotateNeg60About(t){const e=this.x;return this.x=e+this.y-t.y,this.y=t.x+t.y-e,this}rotate120(t,e){t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("m not an integer only floor(m) used")),e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("n not an integer only floor(n) used"));const s=this.x;return this.x=t-s-this.y,this.y=e+s,this}rotateNeg120(t,e){t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("m is not an integer, floor(m) used")),e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("n is not an integer,   floor(n) used"));const s=this.x;return this.x=this.y-e,this.y=t+e-s-this.y,this}toCartesianOrigin(t,e){const s=z.Zero();return s.x=t.x+2*this.x*e+this.y*e,s.y=t.y+Math.sqrt(3)*this.y*e,s}static Zero(){return new w(0,0)}}class Tt{constructor(){this.cartesian=[],this.vertices=[],this.max=[],this.min=[],this.closestTo=[],this.innerFacets=[],this.isoVecsABOB=[],this.isoVecsOBOA=[],this.isoVecsBAOA=[],this.vertexTypes=[],this.IDATA=new it("icosahedron","Regular",[[0,M,-1],[-M,1,0],[-1,0,-M],[1,0,-M],[M,1,0],[0,M,1],[-1,0,M],[-M,-1,0],[0,-M,-1],[M,-1,0],[1,0,M],[0,-M,1]],[[0,2,1],[0,3,2],[0,4,3],[0,5,4],[0,1,5],[7,6,1],[8,7,2],[9,8,3],[10,9,4],[6,10,5],[2,7,1],[3,8,2],[4,9,3],[5,10,4],[1,6,5],[11,6,7],[11,7,8],[11,8,9],[11,9,10],[11,10,6]])}setIndices(){let t=12;const e={},s=this.m,a=this.n;let n=s,r=1,f=0;a!==0&&(n=mt(s,a)),r=s/n,f=a/n;let i,l,d,p,u;const x=w.Zero(),S=new w(s,a),c=new w(-a,s+a),m=w.Zero(),A=w.Zero(),b=w.Zero();let g=[],y,h,v,O;const F=[],C=this.vertByDist,_=(D,T,V,W)=>{y=D+"|"+V,h=T+"|"+W,y in e||h in e?y in e&&!(h in e)?e[h]=e[y]:h in e&&!(y in e)&&(e[y]=e[h]):(e[y]=t,e[h]=t,t++),C[V][0]>2?F[e[y]]=[-C[V][0],C[V][1],e[y]]:F[e[y]]=[g[C[V][0]],C[V][1],e[y]]};this.IDATA.edgematch=[[1,"B"],[2,"B"],[3,"B"],[4,"B"],[0,"B"],[10,"O",14,"A"],[11,"O",10,"A"],[12,"O",11,"A"],[13,"O",12,"A"],[14,"O",13,"A"],[0,"O"],[1,"O"],[2,"O"],[3,"O"],[4,"O"],[19,"B",5,"A"],[15,"B",6,"A"],[16,"B",7,"A"],[17,"B",8,"A"],[18,"B",9,"A"]];for(let D=0;D<20;D++){if(g=this.IDATA.face[D],d=g[2],p=g[1],u=g[0],v=x.x+"|"+x.y,y=D+"|"+v,y in e||(e[y]=d,F[d]=[g[C[v][0]],C[v][1]]),v=S.x+"|"+S.y,y=D+"|"+v,y in e||(e[y]=p,F[p]=[g[C[v][0]],C[v][1]]),v=c.x+"|"+c.y,y=D+"|"+v,y in e||(e[y]=u,F[u]=[g[C[v][0]],C[v][1]]),i=this.IDATA.edgematch[D][0],l=this.IDATA.edgematch[D][1],l==="B")for(let T=1;T<n;T++)A.x=s-T*(r+f),A.y=a+T*r,b.x=-T*f,b.y=T*(r+f),v=A.x+"|"+A.y,O=b.x+"|"+b.y,_(D,i,v,O);if(l==="O")for(let T=1;T<n;T++)b.x=-T*f,b.y=T*(r+f),m.x=T*r,m.y=T*f,v=b.x+"|"+b.y,O=m.x+"|"+m.y,_(D,i,v,O);if(i=this.IDATA.edgematch[D][2],l=this.IDATA.edgematch[D][3],l&&l==="A")for(let T=1;T<n;T++)m.x=T*r,m.y=T*f,A.x=s-(n-T)*(r+f),A.y=a+(n-T)*r,v=m.x+"|"+m.y,O=A.x+"|"+A.y,_(D,i,v,O);for(let T=0;T<this.vertices.length;T++)v=this.vertices[T].x+"|"+this.vertices[T].y,y=D+"|"+v,y in e||(e[y]=t++,C[v][0]>2?F[e[y]]=[-C[v][0],C[v][1],e[y]]:F[e[y]]=[g[C[v][0]],C[v][1],e[y]])}this.closestTo=F,this.vecToidx=e}calcCoeffs(){const t=this.m,e=this.n,s=Math.sqrt(3)/3,a=t*t+e*e+t*e;this.coau=(t+e)/a,this.cobu=-e/a,this.coav=-s*(t-e)/a,this.cobv=s*(2*t+e)/a}createInnerFacets(){const t=this.m,e=this.n;for(let s=0;s<e+t+1;s++)for(let a=this.min[s];a<this.max[s]+1;a++)a<this.max[s]&&a<this.max[s+1]+1&&this.innerFacets.push(["|"+a+"|"+s,"|"+a+"|"+(s+1),"|"+(a+1)+"|"+s]),s>0&&a<this.max[s-1]&&a+1<this.max[s]+1&&this.innerFacets.push(["|"+a+"|"+s,"|"+(a+1)+"|"+s,"|"+(a+1)+"|"+(s-1)])}edgeVecsABOB(){const t=this.m,e=this.n,s=new w(-e,t+e);for(let a=1;a<t+e;a++){const n=new w(this.min[a],a),r=new w(this.min[a-1],a-1),f=new w(this.min[a+1],a+1),i=n.clone(),l=r.clone(),d=f.clone();i.rotate60About(s),l.rotate60About(s),d.rotate60About(s);const p=new w(this.max[i.y],i.y),u=new w(this.max[i.y-1],i.y-1),x=new w(this.max[i.y-1]-1,i.y-1);(i.x!==p.x||i.y!==p.y)&&(i.x!==u.x?(this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([n,u,x]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([n,x,p])):i.y===d.y?(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([n,r,u]),this.vertexTypes.push([1,0,1]),this.isoVecsABOB.push([n,u,f])):(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([n,r,u]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([n,u,p])))}}mapABOBtoOBOA(){const t=new w(0,0);for(let e=0;e<this.isoVecsABOB.length;e++){const s=[];for(let a=0;a<3;a++)t.x=this.isoVecsABOB[e][a].x,t.y=this.isoVecsABOB[e][a].y,this.vertexTypes[e][a]===0&&t.rotateNeg120(this.m,this.n),s.push(t.clone());this.isoVecsOBOA.push(s)}}mapABOBtoBAOA(){const t=new w(0,0);for(let e=0;e<this.isoVecsABOB.length;e++){const s=[];for(let a=0;a<3;a++)t.x=this.isoVecsABOB[e][a].x,t.y=this.isoVecsABOB[e][a].y,this.vertexTypes[e][a]===1&&t.rotate120(this.m,this.n),s.push(t.clone());this.isoVecsBAOA.push(s)}}MapToFace(t,e){const s=this.IDATA.face[t],a=s[2],n=s[1],r=s[0],f=z.FromArray(this.IDATA.vertex[a]),i=z.FromArray(this.IDATA.vertex[n]),l=z.FromArray(this.IDATA.vertex[r]),d=i.subtract(f),p=l.subtract(f),u=d.scale(this.coau).add(p.scale(this.cobu)),x=d.scale(this.coav).add(p.scale(this.cobv));let S,c=zt.Vector3[0];for(let m=0;m<this.cartesian.length;m++)c=u.scale(this.cartesian[m].x).add(x.scale(this.cartesian[m].y)).add(f),c.x,c.y,c.z,S=t+"|"+this.vertices[m].x+"|"+this.vertices[m].y,e.vertex[this.vecToidx[S]]=[c.x,c.y,c.z]}build(t,e){const s=[],a=w.Zero(),n=new w(t,e),r=new w(-e,t+e);s.push(a,n,r);for(let h=e;h<t+1;h++)for(let v=0;v<t+1-h;v++)s.push(new w(v,h));if(e>0){const h=mt(t,e),v=t/h,O=e/h;for(let C=1;C<h;C++)s.push(new w(C*v,C*O)),s.push(new w(-C*O,C*(v+O))),s.push(new w(t-C*(v+O),e+C*v));const F=t/e;for(let C=1;C<e;C++)for(let _=0;_<C*F;_++)s.push(new w(_,C)),s.push(new w(_,C).rotate120(t,e)),s.push(new w(_,C).rotateNeg120(t,e))}s.sort((h,v)=>h.x-v.x),s.sort((h,v)=>h.y-v.y);const f=new Array(t+e+1),i=new Array(t+e+1);for(let h=0;h<f.length;h++)f[h]=1/0,i[h]=-1/0;let l=0,d=0;const p=s.length;for(let h=0;h<p;h++)d=s[h].x,l=s[h].y,f[l]=Math.min(d,f[l]),i[l]=Math.max(d,i[l]);const u=(h,v)=>{const O=h.clone();return v==="A"&&O.rotateNeg120(t,e),v==="B"&&O.rotate120(t,e),O.x<0?O.y:O.x+O.y},x=[],S=[],c=[],m=[],A={},b=[];let g=-1,y=-1;for(let h=0;h<p;h++)x[h]=s[h].toCartesianOrigin(new w(0,0),.5),S[h]=u(s[h],"O"),c[h]=u(s[h],"A"),m[h]=u(s[h],"B"),S[h]===c[h]&&c[h]===m[h]?(g=3,y=S[h]):S[h]===c[h]?(g=4,y=S[h]):c[h]===m[h]?(g=5,y=c[h]):m[h]===S[h]&&(g=6,y=S[h]),S[h]<c[h]&&S[h]<m[h]&&(g=2,y=S[h]),c[h]<S[h]&&c[h]<m[h]&&(g=1,y=c[h]),m[h]<c[h]&&m[h]<S[h]&&(g=0,y=m[h]),b.push([g,y,s[h].x,s[h].y]);b.sort((h,v)=>h[2]-v[2]),b.sort((h,v)=>h[3]-v[3]),b.sort((h,v)=>h[1]-v[1]),b.sort((h,v)=>h[0]-v[0]);for(let h=0;h<b.length;h++)A[b[h][2]+"|"+b[h][3]]=[b[h][0],b[h][1],h];return this.m=t,this.n=e,this.vertices=s,this.vertByDist=A,this.cartesian=x,this.min=f,this.max=i,this}}class it{constructor(t,e,s,a){this.name=t,this.category=e,this.vertex=s,this.face=a}}class ot extends it{innerToData(t,e){for(let s=0;s<e.innerFacets.length;s++)this.face.push(e.innerFacets[s].map(a=>e.vecToidx[t+a]))}mapABOBtoDATA(t,e){const s=e.IDATA.edgematch[t][0];for(let a=0;a<e.isoVecsABOB.length;a++){const n=[];for(let r=0;r<3;r++)e.vertexTypes[a][r]===0?n.push(t+"|"+e.isoVecsABOB[a][r].x+"|"+e.isoVecsABOB[a][r].y):n.push(s+"|"+e.isoVecsABOB[a][r].x+"|"+e.isoVecsABOB[a][r].y);this.face.push([e.vecToidx[n[0]],e.vecToidx[n[1]],e.vecToidx[n[2]]])}}mapOBOAtoDATA(t,e){const s=e.IDATA.edgematch[t][0];for(let a=0;a<e.isoVecsOBOA.length;a++){const n=[];for(let r=0;r<3;r++)e.vertexTypes[a][r]===1?n.push(t+"|"+e.isoVecsOBOA[a][r].x+"|"+e.isoVecsOBOA[a][r].y):n.push(s+"|"+e.isoVecsOBOA[a][r].x+"|"+e.isoVecsOBOA[a][r].y);this.face.push([e.vecToidx[n[0]],e.vecToidx[n[1]],e.vecToidx[n[2]]])}}mapBAOAtoDATA(t,e){const s=e.IDATA.edgematch[t][2];for(let a=0;a<e.isoVecsBAOA.length;a++){const n=[];for(let r=0;r<3;r++)e.vertexTypes[a][r]===1?n.push(t+"|"+e.isoVecsBAOA[a][r].x+"|"+e.isoVecsBAOA[a][r].y):n.push(s+"|"+e.isoVecsBAOA[a][r].x+"|"+e.isoVecsBAOA[a][r].y);this.face.push([e.vecToidx[n[0]],e.vecToidx[n[1]],e.vecToidx[n[2]]])}}orderData(t){const e=[];for(let r=0;r<13;r++)e[r]=[];const s=t.closestTo;for(let r=0;r<s.length;r++)s[r][0]>-1?s[r][1]>0&&e[s[r][0]].push([r,s[r][1]]):e[12].push([r,s[r][0]]);const a=[];for(let r=0;r<12;r++)a[r]=r;let n=12;for(let r=0;r<12;r++){e[r].sort((f,i)=>f[1]-i[1]);for(let f=0;f<e[r].length;f++)a[e[r][f][0]]=n++}for(let r=0;r<e[12].length;r++)a[e[12][r][0]]=n++;for(let r=0;r<this.vertex.length;r++)this.vertex[r].push(a[r]);this.vertex.sort((r,f)=>r[3]-f[3]);for(let r=0;r<this.vertex.length;r++)this.vertex[r].pop();for(let r=0;r<this.face.length;r++)for(let f=0;f<this.face[r].length;f++)this.face[r][f]=a[this.face[r][f]];this.sharedNodes=e[12].length,this.poleNodes=this.vertex.length-this.sharedNodes}setOrder(t,e){const s=[],a=[];let n=e.pop();a.push(n);let r=this.face[n].indexOf(t);r=(r+2)%3;let f=this.face[n][r];s.push(f);let i=0;for(;e.length>0;)n=e[i],this.face[n].indexOf(f)>-1?(r=(this.face[n].indexOf(f)+1)%3,f=this.face[n][r],s.push(f),a.push(n),e.splice(i,1),i=0):i++;return this.adjacentFaces.push(s),a}toGoldbergPolyhedronData(){const t=new it("GeoDual","Goldberg",[],[]);t.name="GD dual";const e=this.vertex.length,s=new Array(e);for(let l=0;l<e;l++)s[l]=[];for(let l=0;l<this.face.length;l++)for(let d=0;d<3;d++)s[this.face[l][d]].push(l);let a=0,n=0,r=0,f=[],i=[];this.adjacentFaces=[];for(let l=0;l<s.length;l++)t.face[l]=this.setOrder(l,s[l].concat([])),s[l].forEach(d=>{a=0,n=0,r=0,f=this.face[d];for(let p=0;p<3;p++)i=this.vertex[f[p]],a+=i[0],n+=i[1],r+=i[2];t.vertex[d]=[a/3,n/3,r/3]});return t}static BuildGeodesicData(t){const e=new ot("Geodesic-m-n","Geodesic",[[0,M,-1],[-M,1,0],[-1,0,-M],[1,0,-M],[M,1,0],[0,M,1],[-1,0,M],[-M,-1,0],[0,-M,-1],[M,-1,0],[1,0,M],[0,-M,1]],[]);t.setIndices(),t.calcCoeffs(),t.createInnerFacets(),t.edgeVecsABOB(),t.mapABOBtoOBOA(),t.mapABOBtoBAOA();for(let a=0;a<t.IDATA.face.length;a++)t.MapToFace(a,e),e.innerToData(a,t),t.IDATA.edgematch[a][1]==="B"&&e.mapABOBtoDATA(a,t),t.IDATA.edgematch[a][1]==="O"&&e.mapOBOAtoDATA(a,t),t.IDATA.edgematch[a][3]==="A"&&e.mapBAOAtoDATA(a,t);e.orderData(t);const s=1;return e.vertex=e.vertex.map(function(a){const n=a[0],r=a[1],f=a[2],i=Math.sqrt(n*n+r*r+f*f);return a[0]*=s/i,a[1]*=s/i,a[2]*=s/i,a}),e}}function ce(o,t,e=null){let s=t.m||1;s!==Math.floor(s)&&(s=Math.floor(s),R.Warn("m not an integer only floor(m) used"));let a=t.n||0;if(a!==Math.floor(a)&&(a=Math.floor(a),R.Warn("n not an integer only floor(n) used")),a>s){const l=a;a=s,s=l,R.Warn("n > m therefore m and n swapped")}const n=new Tt;n.build(s,a);const f={custom:ot.BuildGeodesicData(n),size:t.size,sizeX:t.sizeX,sizeY:t.sizeY,sizeZ:t.sizeZ,faceUV:t.faceUV,faceColors:t.faceColors,flat:t.flat,updatable:t.updatable,sideOrientation:t.sideOrientation,frontUVs:t.frontUVs,backUVs:t.backUVs};return Ct(o,f,e)}function he(o,t){const e=o.size,s=o.sizeX||e||1,a=o.sizeY||e||1,n=o.sizeZ||e||1,r=o.sideOrientation===0?0:o.sideOrientation||K.DEFAULTSIDE,f=[],i=[],l=[],d=[];let p=1/0,u=-1/0,x=1/0,S=-1/0;for(let A=0;A<t.vertex.length;A++)p=Math.min(p,t.vertex[A][0]*s),u=Math.max(u,t.vertex[A][0]*s),x=Math.min(x,t.vertex[A][1]*a),S=Math.max(S,t.vertex[A][1]*a);let c=0;for(let A=0;A<t.face.length;A++){const b=t.face[A],g=z.FromArray(t.vertex[b[0]]),y=z.FromArray(t.vertex[b[2]]),h=z.FromArray(t.vertex[b[1]]),v=y.subtract(g),O=h.subtract(g),F=z.Cross(O,v).normalize();for(let C=0;C<b.length;C++){l.push(F.x,F.y,F.z);const _=t.vertex[b[C]];f.push(_[0]*s,_[1]*a,_[2]*n);const D=(_[1]*a-x)/(S-x);d.push((_[0]*s-p)/(u-p),D)}for(let C=0;C<b.length-2;C++)i.push(c,c+C+2,c+C+1);c+=b.length}K._ComputeSides(r,f,i,l,d);const m=new K;return m.positions=f,m.indices=i,m.normals=l,m.uvs=d,m}function me(o,t,e=null){const s=t.size,a=t.sizeX||s||1,n=t.sizeY||s||1,r=t.sizeZ||s||1;let f=t.m||1;f!==Math.floor(f)&&(f=Math.floor(f),R.Warn("m not an integer only floor(m) used"));let i=t.n||0;if(i!==Math.floor(i)&&(i=Math.floor(i),R.Warn("n not an integer only floor(n) used")),i>f){const S=i;i=f,f=S,R.Warn("n > m therefore m and n swapped")}const l=new Tt;l.build(f,i);const d=ot.BuildGeodesicData(l),p=d.toGoldbergPolyhedronData(),u=new Gt(o,e);t.sideOrientation=lt._GetDefaultSideOrientation(t.sideOrientation),u._originalBuilderSideOrientation=t.sideOrientation,he(t,p).applyToMesh(u,t.updatable),u.goldbergData.nbSharedFaces=d.sharedNodes,u.goldbergData.nbUnsharedFaces=d.poleNodes,u.goldbergData.adjacentFaces=d.adjacentFaces,u.goldbergData.nbFaces=u.goldbergData.nbSharedFaces+u.goldbergData.nbUnsharedFaces,u.goldbergData.nbFacesAtPole=(u.goldbergData.nbUnsharedFaces-12)/12;for(let S=0;S<d.vertex.length;S++)u.goldbergData.faceCenters.push(z.FromArray(d.vertex[S])),u.goldbergData.faceCenters[S].x*=a,u.goldbergData.faceCenters[S].y*=n,u.goldbergData.faceCenters[S].z*=r,u.goldbergData.faceColors.push(new Rt(1,1,1,1));for(let S=0;S<p.face.length;S++){const c=p.face[S],m=z.FromArray(p.vertex[c[0]]),A=z.FromArray(p.vertex[c[2]]),b=z.FromArray(p.vertex[c[1]]),g=A.subtract(m),y=b.subtract(m),h=z.Cross(y,g).normalize(),v=z.Cross(y,h).normalize();u.goldbergData.faceXaxis.push(y.normalize()),u.goldbergData.faceYaxis.push(h),u.goldbergData.faceZaxis.push(v)}return u}const P={CreateBox:ne,CreateTiledBox:oe,CreateSphere:re,CreateDisc:ae,CreateIcoSphere:se,CreateRibbon:ee,CreateCylinder:te,CreateTorus:Jt,CreateTorusKnot:Qt,CreateLineSystem:Kt,CreateLines:qt,CreateDashedLines:Yt,ExtrudeShape:jt,ExtrudeShapeCustom:Ht,CreateLathe:Wt,CreateTiledPlane:Xt,CreatePlane:$t,CreateGround:Et,CreateTiledGround:Ut,CreateGroundFromHeightMap:Zt,CreatePolygon:Lt,ExtrudePolygon:Nt,CreateTube:kt,CreatePolyhedron:Ct,CreateGeodesic:ce,CreateGoldberg:me,CreateDecal:Vt,CreateCapsule:It,CreateText:Pt};class de{get gpuFrameTimeCounter(){return this.engine.getGPUFrameTimeCounter()}get captureGPUFrameTime(){return this._captureGPUFrameTime}set captureGPUFrameTime(t){t!==this._captureGPUFrameTime&&(this._captureGPUFrameTime=t,this.engine.captureGPUFrameTime(t))}get shaderCompilationTimeCounter(){return this._shaderCompilationTime}get captureShaderCompilationTime(){return this._captureShaderCompilationTime}set captureShaderCompilationTime(t){t!==this._captureShaderCompilationTime&&(this._captureShaderCompilationTime=t,t?(this._onBeforeShaderCompilationObserver=this.engine.onBeforeShaderCompilationObservable.add(()=>{this._shaderCompilationTime.fetchNewFrame(),this._shaderCompilationTime.beginMonitoring()}),this._onAfterShaderCompilationObserver=this.engine.onAfterShaderCompilationObservable.add(()=>{this._shaderCompilationTime.endMonitoring()})):(this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null))}constructor(t){this.engine=t,this._captureGPUFrameTime=!1,this._captureShaderCompilationTime=!1,this._shaderCompilationTime=new ie,this._onBeginFrameObserver=null,this._onEndFrameObserver=null,this._onBeforeShaderCompilationObserver=null,this._onAfterShaderCompilationObserver=null}dispose(){this.engine.onBeginFrameObservable.remove(this._onBeginFrameObserver),this._onBeginFrameObserver=null,this.engine.onEndFrameObservable.remove(this._onEndFrameObserver),this._onEndFrameObserver=null,this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null,this.engine=null}}const xt=[],ue=typeof performance<"u"?performance.now():0;function ct(o,t){const e={name:o,ms:Math.round(t*10)/10,at:Math.round((performance.now()-ue)*10)/10};xt.push(e),globalThis.__boot=xt}async function Ve(o,t){const e=performance.now();try{return await t()}finally{ct(o,performance.now()-e)}}function ke(o,t){const e=performance.now();try{return t()}finally{ct(o,performance.now()-e)}}function Ne(o,t){const e=new de(o);e.captureShaderCompilationTime=!0;const s=o.onEndFrameObservable.add(()=>{ct(t,e.shaderCompilationTimeCounter.total),o.onEndFrameObservable.remove(s),e.dispose()})}const pe=new Map,vt=[{body:new G(.77,.38,.18),accent:new G(.96,.77,.09)},{body:new G(.9,.84,.76),accent:new G(.12,.54,.54)},{body:new G(.95,.96,.97),accent:new G(.18,.36,1)},{body:new G(.36,.24,.54),accent:new G(.24,.86,.48)}];function ft(o,t,e=!1){const s=`mat-${t}-${e?"a":"b"}`,a=o.getMaterialByName(s);if(a)return a;const n=new J(s,o),r=vt[t]??vt[0];return n.diffuseColor=e?r.accent:r.body,n.specularColor=G.Black(),n}function Le(o,t,e,s){const a=pe.get(t);if(a){const r=a(o);return r.material=ft(o,e,s===0),r.isPickable=!1,r}let n;return s===9?n=P.CreateBox(t,{width:1.7,height:1.1,depth:1.7},o):s===3?n=P.CreateBox(t,{width:8,height:2.4,depth:8},o):s===8?n=P.CreateBox(t,{width:1.6,height:3.2,depth:1.6},o):s>=4&&s<=10?n=P.CreateBox(t,{width:2.4,height:1.3,depth:2.4},o):e===1?n=P.CreateCylinder(t,{diameterTop:.12,diameterBottom:1.15,height:.7,tessellation:3},o):e===2?n=P.CreateCylinder(t,{diameterTop:.35,diameterBottom:.85,height:1.7,tessellation:5},o):e===3?n=P.CreateBox(t,{width:1.7,height:.42,depth:1.05},o):n=P.CreateBox(t,{width:.95,height:.72,depth:1.15},o),n.material=ft(o,e,s===0||s===8),n.isPickable=!1,n.alwaysSelectAsActiveMesh=!0,n}function Ze(o,t){const e=P.CreateBox(`shell-${t}`,{size:.35},o);return e.material=ft(o,t,!0),e.isPickable=!1,e.alwaysSelectAsActiveMesh=!0,e}let At=null;function Ue(){return At??=(async()=>{if(typeof window>"u"){const{readFileSync:o}=await le(async()=>{const{readFileSync:e}=await import("./__vite-browser-external-BltD9Dnm.js").then(s=>s.a);return{readFileSync:e}},[],import.meta.url);await St({module_or_path:o(new URL(""+new URL("sim_bg-DZ67u_1g.wasm",import.meta.url).href,import.meta.url))});return}await St()})(),At}function wt(o,t,e,s,a,n){const r=t+1,f=$(a/s,0,t-.001),i=$(n/s,0,e-.001),l=Math.floor(f),d=Math.floor(i),p=f-l,u=i-d,x=o[d*r+l]/64,S=o[d*r+l+1]/64,c=o[(d+1)*r+l]/64,m=o[(d+1)*r+l+1]/64;return x*(1-p)*(1-u)+S*p*(1-u)+c*(1-p)*u+m*p*u}const Mt=1536,Ot=1024,Dt=Mt/2,Se=Ot/2,et=Dt+1,H=65536;function xe(o,t,e){const s=$(Math.round(t*H),0,Mt*H),a=$(Math.round(e*H),0,Ot*H),n=Math.floor(s/2),r=Math.floor(a/2),f=$(n>>16,0,Dt-1),i=$(r>>16,0,Se-1),l=n&65535,d=r&65535,p=o[i*et+f],u=o[i*et+f+1],x=o[(i+1)*et+f],S=o[(i+1)*et+f+1],c=p+((u-p)*l>>16),m=x+((S-x)*l>>16);return(c+((m-c)*d>>16)<<10)/H}function $e(o,t,e,s,a,n,r){return wt(o,t,e,s,a,r)+(n-xe(o,a,r))}function $(o,t,e){return Math.max(t,Math.min(e,o))}function ve(o){const t=Math.max(-1,Math.min(1,o));if(t<0){const s=t+1;return yt([.32,.36,.4],[.55,.5,.42],s)}const e=Ae(Math.min(1,t/.55));return yt([.64,.58,.48],[.13,.28,.58],e)}function yt(o,t,e){return[o[0]+(t[0]-o[0])*e,o[1]+(t[1]-o[1])*e,o[2]+(t[2]-o[2])*e]}function Ae(o){return o*o*(3-2*o)}function Xe(o){const t=P.CreateSphere("sky",{diameter:400,segments:32,sideOrientation:lt.BACKSIDE},o);t.infiniteDistance=!0,t.isPickable=!1,t.alwaysSelectAsActiveMesh=!0;const e=t.getVerticesData(dt.PositionKind);if(e){const a=new Float32Array(e.length/3*4);for(let n=0;n<e.length;n+=3){const r=e[n],f=e[n+1],i=e[n+2],l=Math.hypot(r,f,i)||1,[d,p,u]=ve(f/l),x=n/3*4;a[x]=d,a[x+1]=p,a[x+2]=u,a[x+3]=1}t.setVerticesData(dt.ColorKind,a)}t.useVertexColors=!0;const s=new J("sky",o);return s.disableLighting=!0,s.emissiveColor=new G(1,1,1),s.specularColor=G.Black(),s.backFaceCulling=!1,s.disableDepthWrite=!0,t.material=s,t}const rt=.82,_t=.48,Ft=[[.78,.74,.68],[.58,.54,.5],[.4,.42,.44],[.64,.42,.32],[.3,.29,.28]];function We(o,t){const e=o*Math.PI/180,s=t*Math.PI/180,a=Math.cos(s);return[-Math.sin(e)*a,-Math.sin(s),Math.cos(e)*a]}const ye=1;function ge(o,t,e,s,a=ye){const n=Math.floor(t/a),r=Math.floor(e/a),f=t+1,i=n+1,l=new Float32Array(i*(r+1)*3);let d=1/0,p=-1/0,u=0;for(let c=0;c<=r;c++){const m=Math.min(e,c*a);for(let A=0;A<=n;A++){const b=Math.min(t,A*a),g=o[m*f+b]/64;l[u++]=b*s,l[u++]=g,l[u++]=m*s,g<d&&(d=g),g>p&&(p=g)}}const x=new Uint32Array(n*r*6);let S=0;for(let c=0;c<r;c++)for(let m=0;m<n;m++){const A=c*i+m;x[S++]=A,x[S++]=A+1,x[S++]=A+i,x[S++]=A+1,x[S++]=A+i+1,x[S++]=A+i}return{positions:l,indices:x,cols:n,rows:r,minY:d,maxY:p}}const B=128,U=2,I=B+U*2,Q=4,N=I*Q,E={grass:0,scrub:1,rock:2,scree:3,gravel:4,road:5,mud:6,sand:7,concrete:8};function Z(o,t,e){let s=Math.imul(o,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function be(o,t,e,s){const a=Math.floor(o),n=Math.floor(t),r=o-a,f=t-n,i=r*r*(3-2*r),l=f*f*(3-2*f),d=(a%s+s)%s,p=(n%s+s)%s,u=(d+1)%s,x=(p+1)%s,S=Z(d,p,e),c=Z(u,p,e),m=Z(d,x,e),A=Z(u,x,e);return S*(1-i)*(1-l)+c*i*(1-l)+m*(1-i)*l+A*i*l}function L(o,t,e,s,a){let n=0,r=.5,f=0,i=1,l=s;for(let d=0;d<a;d++)n+=r*be(o*i,t*i,e+d*17,l),f+=r,r*=.5,i*=2,l*=2;return n/f}function gt(o,t,e,s){const a=Math.max(1,Math.round(B/s)),n=Math.floor(o/s),r=Math.floor(t/s);let f=1e9;for(let i=-1;i<=1;i++)for(let l=-1;l<=1;l++){const d=n+l,p=r+i,u=(d%a+a)%a,x=(p%a+a)%a,S=d*s+Z(u,x,e)*s,c=p*s+Z(u,x,e+9)*s,m=o-S,A=t-c,b=m*m+A*A;b<f&&(f=b)}return Math.sqrt(f)/s}function X(o){return Math.max(0,Math.min(255,Math.round(o)))}function Ce(o){const t=B*B,e=new Uint8Array(t*3),s=new Float32Array(t),a={0:[196,174,122],1:[124,128,78],2:[168,158,146],3:[198,182,160],4:[170,156,132],5:[142,122,96],6:[124,102,78],7:[204,184,146],8:[176,174,166]},[n,r,f]=a[o]??[140,130,110];for(let i=0;i<B;i++)for(let l=0;l<B;l++){const d=i*B+l;let p=n,u=r,x=f,S=0;if(o===E.grass){const c=L(l/18,i/18,11,B,3),m=L(l/3.2,i/3.2,12,B,2);p+=(c-.5)*36+(m-.5)*18,u+=(c-.45)*28+(m-.5)*14,x+=(c-.5)*16,S=(m-.5)*.35+(c-.5)*.15}else if(o===E.scrub){const c=gt(l,i,21,16),m=Math.max(0,1-c*1.6);p-=m*28,u-=m*18,x-=m*16,S=m*.8}else if(o===E.rock){const c=1-Math.abs(L(l/10,i/10,31,B,4)*2-1),m=c>.82?1:0;p-=m*40+c*12,u-=m*38+c*10,x-=m*34+c*8,S=c*.9-m*.7}else if(o===E.scree||o===E.gravel){const c=o===E.scree?18:9,m=gt(l,i,o===E.scree?41:42,c),A=Math.max(0,1-m*1.35),b=Z(Math.floor(l/c),Math.floor(i/c),o+4);p+=(b-.5)*40+A*16,u+=(b-.5)*32+A*12,x+=(b-.5)*24+A*8,S=A*.85}else if(o===E.road){const c=Math.abs(l%32/32*2-1),m=L(l/14,i/8,51,B,2);p-=c*18+(m-.5)*10,u-=c*16,x-=c*12,S=-c*.25+(m-.5)*.1}else if(o===E.mud){const c=L(l/20,i/20,61,B,3);p-=c*30,u-=c*24,x-=c*16,S=(c-.5)*.12}else if(o===E.sand){const c=Math.sin((l*.45+L(l/12,i/12,71,B,2)*6)*.7),m=L(l/2.5,i/2.5,72,B,2);p+=c*8+(m-.5)*14,u+=c*6+(m-.5)*10,x+=(m-.5)*8,S=c*.18+(m-.5)*.2}else{const c=(Math.floor(i/16)+Math.floor(l/64))%2===0?6:-4,m=L(l/6,i/6,81,B,2);p+=c-m*8,u+=c-m*8,x+=c-m*6,S=c*.01-m*.15}e[d*3]=X(p),e[d*3+1]=X(u),e[d*3+2]=X(x),s[d]=S}return{rgb:e,height:s}}function Be(o,t,e){const s=t%Q,a=Math.floor(t/Q),n=s*I,r=a*I;for(let f=0;f<I;f++){const i=(f-U+B)%B;for(let l=0;l<I;l++){const d=(l-U+B)%B,p=((r+f)*N+(n+l))*4,u=(i*B+d)*3;o[p]=e.rgb[u],o[p+1]=e.rgb[u+1],o[p+2]=e.rgb[u+2],o[p+3]=255}}}function Te(){const o=new Uint8Array(N*N*4),t=new Uint8Array(N*N*4);t.fill(128);for(let e=3;e<t.length;e+=4)t[e]=255;for(let e=0;e<=E.concrete;e++){const s=Ce(e);Be(o,e,s),we(t,e,s)}return{albedo:o,normal:t,size:N}}function we(o,t,e){const s=t%Q,a=Math.floor(t/Q),n=s*I,r=a*I,f=(i,l)=>{const d=(i+B)%B,p=(l+B)%B,u=e.height[p*B+(d-1+B)%B],x=e.height[p*B+(d+1)%B],S=e.height[(p-1+B)%B*B+d],c=e.height[(p+1)%B*B+d];let m=(u-x)*1.15,A=(S-c)*1.15,b=1;const g=Math.hypot(m,A,b)||1;return[m/g,A/g,b/g]};for(let i=0;i<I;i++){const l=i-U;for(let d=0;d<I;d++){const p=d-U,[u,x,S]=f(p,l),c=((r+i)*N+(n+d))*4;o[c]=X(u*127+128),o[c+1]=X(x*127+128),o[c+2]=X(S*127+128),o[c+3]=255}}}function j(o){const[t,e,s]=Ft[o];return`vec3(${t.toFixed(3)}, ${e.toFixed(3)}, ${s.toFixed(3)})`}function Me(){return`
uniform sampler2D splat0Sampler;
uniform sampler2D splat1Sampler;
uniform sampler2D splat2Sampler;
uniform sampler2D tracksSampler;
uniform sampler2D detailSampler;
uniform sampler2D detailNrmSampler;

float tfHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float tfNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = tfHash(i);
  float b = tfHash(i + vec2(1.0, 0.0));
  float c = tfHash(i + vec2(0.0, 1.0));
  float d = tfHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float tfCliff(float ny) {
  float t = clamp((${rt.toFixed(2)} - ny) / ${(rt-_t).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
vec3 tfStrata(float tone) {
  vec3 c0 = ${j(0)};
  vec3 c1 = ${j(1)};
  vec3 c2 = ${j(2)};
  vec3 c3 = ${j(3)};
  vec3 c4 = ${j(4)};
  vec3 s = c0;
  s = mix(s, c1, step(0.5, tone));
  s = mix(s, c2, step(1.5, tone));
  s = mix(s, c3, step(2.5, tone));
  s = mix(s, c4, step(3.5, tone));
  return s;
}
vec3 tfAtlas(sampler2D tex, float slot, vec2 uv) {
  float col = slot - 4.0 * floor(slot / 4.0);
  float row = floor(slot / 4.0);
  vec2 local = fract(uv) * ${B}.0 + ${U}.0;
  vec2 px = vec2(col, row) * ${I}.0 + local;
  return texture2D(tex, px / ${N}.0).rgb;
}
vec3 tfTri(sampler2D tex, float slot, vec3 p, vec3 n, float tile) {
  vec3 w = abs(n);
  w = pow(max(w, vec3(0.001)), vec3(4.0));
  w /= (w.x + w.y + w.z);
  vec3 sx = tfAtlas(tex, slot, p.zy * tile);
  vec3 sy = tfAtlas(tex, slot, p.xz * tile);
  vec3 sz = tfAtlas(tex, slot, p.xy * tile);
  return sx * w.x + sy * w.y + sz * w.z;
}
`}function Oe(){return`
vec3 tfP = vPositionW;
vec2 tfXZ = tfP.xz;
vec2 tfSuv = vec2(tfXZ.x / mapSize.x, tfXZ.y / mapSize.y);
vec4 tfS0 = texture2D(splat0Sampler, tfSuv);
vec4 tfS1 = texture2D(splat1Sampler, tfSuv);
vec4 tfS2 = texture2D(splat2Sampler, tfSuv);
float tfTracks = texture2D(tracksSampler, tfSuv).r;
float tfGrass = tfS0.r;
float tfScrub = tfS0.g;
float tfRock = tfS0.b;
float tfScree = tfS0.a;
float tfGravel = tfS1.r;
float tfRoad = tfS1.g;
float tfMud = tfS1.b;
float tfSand = tfS1.a;
float tfConcrete = tfS2.g;
float tfWet = tfS2.b;
float tfSum = tfGrass + tfScrub + tfRock + tfScree + tfGravel + tfRoad + tfMud + tfSand + tfConcrete + 0.0001;
tfGrass /= tfSum; tfScrub /= tfSum; tfRock /= tfSum; tfScree /= tfSum;
tfGravel /= tfSum; tfRoad /= tfSum; tfMud /= tfSum; tfSand /= tfSum; tfConcrete /= tfSum;
float tfTone = floor(tfS2.a * 4.0 + 0.5);
vec3 tfStrataCol = tfStrata(tfTone);
float tfBand = 0.62 + 0.38 * (0.5 + 0.5 * sin(tfP.y * 0.785398));
vec3 tfG = tfAtlas(detailSampler, 0.0, tfXZ * 0.17);
vec3 tfSc = tfAtlas(detailSampler, 1.0, tfXZ * 0.19);
vec3 tfR = tfAtlas(detailSampler, 2.0, tfXZ * 0.11) * mix(vec3(1.0), tfStrataCol, 0.62) * tfBand;
vec3 tfE = tfAtlas(detailSampler, 3.0, tfXZ * 0.30);
vec3 tfV = tfAtlas(detailSampler, 4.0, tfXZ * 0.24);
vec3 tfO = tfAtlas(detailSampler, 5.0, tfXZ * 0.09);
vec3 tfM = tfAtlas(detailSampler, 6.0, tfXZ * 0.13);
vec3 tfN = tfAtlas(detailSampler, 7.0, tfXZ * 0.21);
vec3 tfC = tfAtlas(detailSampler, 8.0, tfXZ * 0.11);
vec3 tfAlbedo = tfG * tfGrass + tfSc * tfScrub + tfR * tfRock + tfE * tfScree + tfV * tfGravel + tfO * tfRoad + tfM * tfMud + tfN * tfSand + tfC * tfConcrete;
vec3 tfGeom = normalize(normalW);
float tfSteep = tfCliff(tfGeom.y);
vec3 tfTriR = tfTri(detailSampler, 2.0, tfP, tfGeom, 0.11) * mix(vec3(1.0), tfStrataCol, 0.55) * tfBand;
vec3 tfTriE = tfTri(detailSampler, 3.0, tfP, tfGeom, 0.30);
vec3 tfCliffCol = (tfTriR * tfRock + tfTriE * tfScree) / max(tfRock + tfScree, 0.0001);
float tfCliffW = clamp((tfRock + tfScree) * 1.35, 0.0, 1.0);
tfAlbedo = mix(tfAlbedo, tfCliffCol, tfSteep * tfCliffW);
tfAlbedo *= 0.92 + 0.08 * tfNoise(tfXZ * 0.012);
tfAlbedo *= 1.0 - 0.24 * tfWet;
tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3(0.70, 0.76, 0.78), tfWet * 0.4);
tfAlbedo *= 1.0 - 0.15 * tfTracks;
float tfSlot = 0.0;
float tfBest = tfGrass;
if (tfScrub > tfBest) { tfBest = tfScrub; tfSlot = 1.0; }
if (tfRock > tfBest) { tfBest = tfRock; tfSlot = 2.0; }
if (tfScree > tfBest) { tfBest = tfScree; tfSlot = 3.0; }
if (tfGravel > tfBest) { tfBest = tfGravel; tfSlot = 4.0; }
if (tfRoad > tfBest) { tfBest = tfRoad; tfSlot = 5.0; }
if (tfMud > tfBest) { tfBest = tfMud; tfSlot = 6.0; }
if (tfSand > tfBest) { tfBest = tfSand; tfSlot = 7.0; }
if (tfConcrete > tfBest) { tfSlot = 8.0; }
vec3 tfTs = tfAtlas(detailNrmSampler, tfSlot, tfXZ * 0.17) * 2.0 - 1.0;
vec3 tfTsTri = tfTri(detailNrmSampler, tfSlot, tfP, tfGeom, 0.17) * 2.0 - 1.0;
tfTs = normalize(mix(vec3(tfTs.x * 0.9, tfTs.y * 0.9, tfTs.z), vec3(tfTsTri.x * 0.9, tfTsTri.y * 0.9, tfTsTri.z), tfSteep));
vec3 tfUp = abs(tfGeom.y) > 0.96 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
vec3 tfT = normalize(cross(tfUp, tfGeom));
vec3 tfB = cross(tfGeom, tfT);
normalW = normalize(tfT * tfTs.x + tfB * tfTs.y + tfGeom * tfTs.z);
baseColor.rgb = clamp(tfAlbedo, 0.0, 1.0);
`}function De(){return`
var splat0Sampler: texture_2d<f32>;
var splat0SamplerSampler: sampler;
var splat1Sampler: texture_2d<f32>;
var splat1SamplerSampler: sampler;
var splat2Sampler: texture_2d<f32>;
var splat2SamplerSampler: sampler;
var tracksSampler: texture_2d<f32>;
var tracksSamplerSampler: sampler;
var detailSampler: texture_2d<f32>;
var detailSamplerSampler: sampler;
var detailNrmSampler: texture_2d<f32>;
var detailNrmSamplerSampler: sampler;

fn tfHash(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}
fn tfNoise(p: vec2f) -> f32 {
  let i = floor(p);
  let f0 = fract(p);
  let f = f0 * f0 * (3.0 - 2.0 * f0);
  let a = tfHash(i);
  let b = tfHash(i + vec2f(1.0, 0.0));
  let c = tfHash(i + vec2f(0.0, 1.0));
  let d = tfHash(i + vec2f(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
fn tfCliff(ny: f32) -> f32 {
  let t = clamp((${rt.toFixed(2)} - ny) / ${(rt-_t).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
fn tfStrata(tone: f32) -> vec3f {
  var s = ${Y(0)};
  s = mix(s, ${Y(1)}, step(0.5, tone));
  s = mix(s, ${Y(2)}, step(1.5, tone));
  s = mix(s, ${Y(3)}, step(2.5, tone));
  s = mix(s, ${Y(4)}, step(3.5, tone));
  return s;
}
fn tfAtlas(tex: texture_2d<f32>, samp: sampler, slot: f32, uv: vec2f) -> vec3f {
  let col = slot - 4.0 * floor(slot / 4.0);
  let row = floor(slot / 4.0);
  let local = fract(uv) * ${B}.0 + ${U}.0;
  let px = vec2f(col, row) * ${I}.0 + local;
  return textureSample(tex, samp, px / ${N}.0).rgb;
}
fn tfTri(tex: texture_2d<f32>, samp: sampler, slot: f32, p: vec3f, n: vec3f, tile: f32) -> vec3f {
  var w = abs(n);
  w = pow(max(w, vec3f(0.001)), vec3f(4.0));
  w = w / (w.x + w.y + w.z);
  let sx = tfAtlas(tex, samp, slot, p.zy * tile);
  let sy = tfAtlas(tex, samp, slot, p.xz * tile);
  let sz = tfAtlas(tex, samp, slot, p.xy * tile);
  return sx * w.x + sy * w.y + sz * w.z;
}
`}function Y(o){const[t,e,s]=Ft[o];return`vec3f(${t.toFixed(3)}, ${e.toFixed(3)}, ${s.toFixed(3)})`}function _e(){return`
let tfP = fragmentInputs.vPositionW;
let tfXZ = tfP.xz;
let tfSuv = vec2f(tfXZ.x / uniforms.mapSize.x, tfXZ.y / uniforms.mapSize.y);
let tfS0 = textureSample(splat0Sampler, splat0SamplerSampler, tfSuv);
let tfS1 = textureSample(splat1Sampler, splat1SamplerSampler, tfSuv);
let tfS2 = textureSample(splat2Sampler, splat2SamplerSampler, tfSuv);
let tfTracks = textureSample(tracksSampler, tracksSamplerSampler, tfSuv).r;
var tfGrass = tfS0.r;
var tfScrub = tfS0.g;
var tfRock = tfS0.b;
var tfScree = tfS0.a;
var tfGravel = tfS1.r;
var tfRoad = tfS1.g;
var tfMud = tfS1.b;
var tfSand = tfS1.a;
var tfConcrete = tfS2.g;
let tfWet = tfS2.b;
let tfSum = tfGrass + tfScrub + tfRock + tfScree + tfGravel + tfRoad + tfMud + tfSand + tfConcrete + 0.0001;
tfGrass = tfGrass / tfSum; tfScrub = tfScrub / tfSum; tfRock = tfRock / tfSum; tfScree = tfScree / tfSum;
tfGravel = tfGravel / tfSum; tfRoad = tfRoad / tfSum; tfMud = tfMud / tfSum; tfSand = tfSand / tfSum; tfConcrete = tfConcrete / tfSum;
let tfTone = floor(tfS2.a * 4.0 + 0.5);
let tfStrataCol = tfStrata(tfTone);
let tfBand = 0.62 + 0.38 * (0.5 + 0.5 * sin(tfP.y * 0.785398));
let tfG = tfAtlas(detailSampler, detailSamplerSampler, 0.0, tfXZ * 0.17);
let tfSc = tfAtlas(detailSampler, detailSamplerSampler, 1.0, tfXZ * 0.19);
let tfR = tfAtlas(detailSampler, detailSamplerSampler, 2.0, tfXZ * 0.11) * mix(vec3f(1.0), tfStrataCol, 0.62) * tfBand;
let tfE = tfAtlas(detailSampler, detailSamplerSampler, 3.0, tfXZ * 0.30);
let tfV = tfAtlas(detailSampler, detailSamplerSampler, 4.0, tfXZ * 0.24);
let tfO = tfAtlas(detailSampler, detailSamplerSampler, 5.0, tfXZ * 0.09);
let tfM = tfAtlas(detailSampler, detailSamplerSampler, 6.0, tfXZ * 0.13);
let tfN = tfAtlas(detailSampler, detailSamplerSampler, 7.0, tfXZ * 0.21);
let tfC = tfAtlas(detailSampler, detailSamplerSampler, 8.0, tfXZ * 0.11);
var tfAlbedo = tfG * tfGrass + tfSc * tfScrub + tfR * tfRock + tfE * tfScree + tfV * tfGravel + tfO * tfRoad + tfM * tfMud + tfN * tfSand + tfC * tfConcrete;
let tfGeom = normalize(normalW);
let tfSteep = tfCliff(tfGeom.y);
let tfTriR = tfTri(detailSampler, detailSamplerSampler, 2.0, tfP, tfGeom, 0.11) * mix(vec3f(1.0), tfStrataCol, 0.55) * tfBand;
let tfTriE = tfTri(detailSampler, detailSamplerSampler, 3.0, tfP, tfGeom, 0.30);
let tfCliffCol = (tfTriR * tfRock + tfTriE * tfScree) / max(tfRock + tfScree, 0.0001);
let tfCliffW = clamp((tfRock + tfScree) * 1.35, 0.0, 1.0);
tfAlbedo = mix(tfAlbedo, tfCliffCol, tfSteep * tfCliffW);
tfAlbedo = tfAlbedo * (0.92 + 0.08 * tfNoise(tfXZ * 0.012));
tfAlbedo = tfAlbedo * (1.0 - 0.24 * tfWet);
tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3f(0.70, 0.76, 0.78), tfWet * 0.4);
tfAlbedo = tfAlbedo * (1.0 - 0.15 * tfTracks);
var tfSlot = 0.0;
var tfBest = tfGrass;
if (tfScrub > tfBest) { tfBest = tfScrub; tfSlot = 1.0; }
if (tfRock > tfBest) { tfBest = tfRock; tfSlot = 2.0; }
if (tfScree > tfBest) { tfBest = tfScree; tfSlot = 3.0; }
if (tfGravel > tfBest) { tfBest = tfGravel; tfSlot = 4.0; }
if (tfRoad > tfBest) { tfBest = tfRoad; tfSlot = 5.0; }
if (tfMud > tfBest) { tfBest = tfMud; tfSlot = 6.0; }
if (tfSand > tfBest) { tfBest = tfSand; tfSlot = 7.0; }
if (tfConcrete > tfBest) { tfSlot = 8.0; }
let tfTs0 = tfAtlas(detailNrmSampler, detailNrmSamplerSampler, tfSlot, tfXZ * 0.17) * 2.0 - 1.0;
let tfTsTri = tfTri(detailNrmSampler, detailNrmSamplerSampler, tfSlot, tfP, tfGeom, 0.17) * 2.0 - 1.0;
let tfTs = normalize(mix(vec3f(tfTs0.x * 0.9, tfTs0.y * 0.9, tfTs0.z), vec3f(tfTsTri.x * 0.9, tfTsTri.y * 0.9, tfTsTri.z), tfSteep));
let tfUp = select(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), abs(tfGeom.y) > 0.96);
let tfT = normalize(cross(tfUp, tfGeom));
let tfB = cross(tfGeom, tfT);
normalW = normalize(tfT * tfTs.x + tfB * tfTs.y + tfGeom * tfTs.z);
baseColor = vec4f(clamp(tfAlbedo, vec3f(0.0), vec3f(1.0)), baseColor.a);
`}function st(o,t,e,s){const a=Bt(`maps/twin-ridges/${t}`),n=new k(a,o,!1,!1,k.TRILINEAR_SAMPLINGMODE,()=>e(),r=>{const f=typeof r=="string"?r:t;console.error(`Terrain texture failed: ${a}`,f),s(f)});return n.wrapU=k.CLAMP_ADDRESSMODE,n.wrapV=k.CLAMP_ADDRESSMODE,n.anisotropicFilteringLevel=8,n}class Fe extends fe{mapW=1536;mapH=1024;splat0;splat1;splat2;tracks;detail;detailNrm;constructor(t,e){super(t,"TerrainSplat",200,{TERRAIN_SPLAT:!1},!0,!1),this.registerForExtraEvents=!0,this._enable(!0);const s=Te(),a=k.LINEAR_LINEAR;this.detail=nt.CreateRGBATexture(s.albedo,s.size,s.size,e,!1,!1,a),this.detailNrm=nt.CreateRGBATexture(s.normal,s.size,s.size,e,!1,!1,a),this.detail.wrapU=k.CLAMP_ADDRESSMODE,this.detail.wrapV=k.CLAMP_ADDRESSMODE,this.detailNrm.wrapU=k.CLAMP_ADDRESSMODE,this.detailNrm.wrapV=k.CLAMP_ADDRESSMODE;const n=new Uint8Array(4*4*4);n.fill(128);const r=()=>nt.CreateRGBATexture(n,4,4,e,!1,!1,k.NEAREST_SAMPLINGMODE);this.splat0=r(),this.splat1=r(),this.splat2=r(),this.tracks=r()}isCompatible(){return!0}getClassName(){return"TerrainSplatPlugin"}prepareDefines(t){t.TERRAIN_SPLAT||(t.TERRAIN_SPLAT=!0,t.markAsUnprocessed())}getSamplers(t){t.push("splat0Sampler","splat1Sampler","splat2Sampler","tracksSampler","detailSampler","detailNrmSampler")}getUniforms(t=tt.GLSL){return{ubo:[{name:"mapSize",size:2,type:"vec2"}],fragment:t===tt.WGSL?void 0:`#ifdef TERRAIN_SPLAT
uniform vec2 mapSize;
#endif
`}}bindForSubMesh(t){this.bindSplats(t)}hardBindForSubMesh(t){this.bindSplats(t)}bindSplats(t){t.updateFloat2("mapSize",this.mapW,this.mapH),t.setTexture("splat0Sampler",this.splat0),t.setTexture("splat1Sampler",this.splat1),t.setTexture("splat2Sampler",this.splat2),t.setTexture("tracksSampler",this.tracks),t.setTexture("detailSampler",this.detail),t.setTexture("detailNrmSampler",this.detailNrm)}getCustomCode(t,e=tt.GLSL){if(t!=="fragment")return null;const s=e===tt.WGSL;return{CUSTOM_FRAGMENT_DEFINITIONS:s?De():Me(),CUSTOM_FRAGMENT_UPDATE_DIFFUSE:s?_e():Oe()}}}function ze(o,t,e){const s=new J("terrain",o);s.diffuseColor.set(1,1,1),s.specularColor.set(.04,.04,.035),s.specularPower=24;const a=new Fe(s,o);a.mapW=t,a.mapH=e,s.onError=(r,f)=>{console.error(f),document.documentElement.dataset.terrain="shader-error"};const n=new Promise(r=>{let f=4;const i=()=>{f-=1,f===0&&r()},l=d=>{console.error("terrain map texture",d),document.documentElement.dataset.terrain="texture-error",i()};a.splat0=st(o,"splat_0_grass_scrub_rock_scree.png",i,l),a.splat1=st(o,"splat_1_gravel_road_mud_sand.png",i,l),a.splat2=st(o,"splat_2_water_concrete_wetness_strata.png",i,l),a.tracks=st(o,"tracks_mask.png",i,l)});return{material:s,ready:n}}const at=6;function q(o,t,e){let s=Math.imul(o,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function Ge(o){return new Promise((t,e)=>{const s=new Image;s.onload=()=>t(s),s.onerror=()=>e(new Error(o)),s.src=o})}function bt(o,t,e){const s=P.CreateIcoSphere(t,{radius:.55,subdivisions:1,flat:!1},o);s.position.y=.5,s.bakeCurrentTransformIntoVertices(),s.position.set(0,0,0);const a=new J(`${t}-mat`,o);return a.diffuseColor=e,a.specularColor=G.Black(),s.material=a,s.isPickable=!1,s.alwaysSelectAsActiveMesh=!0,s.receiveShadows=!1,s}async function Re(o,t,e,s,a,n){const r=Bt("maps/twin-ridges/vegetation_canopy_height_dm.png"),f=await Ge(r).catch(g=>{throw console.error(`Terrain canopy missing: ${r}`,g),g}),i=document.createElement("canvas");i.width=f.width,i.height=f.height;const l=i.getContext("2d",{willReadFrequently:!0});if(!l)return;l.drawImage(f,0,0);const d=l.getImageData(0,0,f.width,f.height).data,p=bt(o,"shrub",new G(.34,.4,.22)),u=bt(o,"tree",new G(.22,.32,.16)),x=[],S=[],c=new z,m=new pt,A=new z,b=new ut;for(let g=0;g<f.height;g+=at)for(let y=0;y<f.width;y+=at){const h=d[(g*f.width+y)*4];if(h<6)continue;const v=(q(y,g,2)-.5)*at*.7,O=(q(y,g,4)-.5)*at*.7,F=Math.max(0,Math.min(e*a-.01,y+.5+v)),C=Math.max(0,Math.min(s*a-.01,g+.5+O)),_=wt(t,e,s,a,F,C);if(_<n+.4)continue;const D=h/10,T=D>=2.6,V=T?.7+D*.28:.45+D*.55;c.set(V*(.85+q(y,g,6)*.3),V*(T?1.15:.75),V*(.85+q(y,g,8)*.3)),pt.RotationAxisToRef(z.Up(),q(y,g,9)*Math.PI*2,m),A.set(F,_,C),ut.ComposeToRef(c,m,A,b);const W=T?S:x,ht=W.length;W.length=ht+16,b.copyToArray(W,ht)}x.length?p.thinInstanceSetBuffer("matrix",new Float32Array(x),16,!0):p.setEnabled(!1),S.length?u.thinInstanceSetBuffer("matrix",new Float32Array(S),16,!0):u.setEnabled(!1)}function He(o,t,e,s,a,n,r,f){const i=ge(t,e,s,a),l=new lt("terrain",o),d=new K;d.positions=i.positions,d.indices=i.indices;const p=new Float32Array(i.positions.length);K.ComputeNormals(i.positions,i.indices,p),d.normals=p,d.applyToMesh(l),l.useVertexColors=!1,l.alwaysSelectAsActiveMesh=!0;const{material:u,ready:x}=ze(o,n,r);l.material=u,document.documentElement.dataset.relief=`${i.minY.toFixed(1)}..${i.maxY.toFixed(1)}`,document.documentElement.dataset.terrain="loading";const S=x.then(()=>Re(o,t,e,s,a,f)).then(()=>{const c=document.documentElement.dataset.terrain;c!=="shader-error"&&c!=="texture-error"&&(document.documentElement.dataset.terrain="ready")}).catch(c=>{console.error(c),document.documentElement.dataset.terrain="error"});return{mesh:l,ready:S}}function je(o){const t=new J("water",o);return t.diffuseColor=new G(.4,.5,.42),t.specularColor=new G(.34,.38,.34),t.specularPower=48,t.alpha=.62,t}export{P as M,Ft as S,ke as a,ct as b,Xe as c,He as d,We as e,ft as f,wt as g,Ve as h,Ze as i,xe as j,Le as k,Ue as l,Ne as n,$e as p,ve as s,je as w};
