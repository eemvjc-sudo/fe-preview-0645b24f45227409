import{f as R,V as z,a1 as M,a2 as Lt,a3 as At,a4 as Gt,a5 as Zt,a6 as ct,C as $t,a7 as j,a8 as Wt,a9 as Ut,aa as Xt,ab as Ht,ac as jt,ad as Yt,ae as qt,af as Kt,ag as Qt,ah as Jt,ai as te,aj as ee,ak as se,al as ae,am as re,an as oe,ao as ne,ap as ie,aq as le,ar as fe,as as ce,at as he,au as ue,av as me,aw as de,ax as pe,ay as Se,az as U,j as _,M as dt,aA as yt,aB as xe,aC as N,aD as ut,aE as rt,aF as gt}from"./nativeXRFrame-B-jPtiAA.js";import{_ as ve,p as zt}from"./index-B36ZnRXk.js";import{_ as bt}from"./__vite-browser-external-kldTRzGf.js";class B{constructor(e=0,t=0){this.x=e,this.y=t,e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("x is not an integer, floor(x) used")),t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("y is not an integer, floor(y) used"))}clone(){return new B(this.x,this.y)}rotate60About(e){const t=this.x;return this.x=e.x+e.y-this.y,this.y=t+this.y-e.x,this}rotateNeg60About(e){const t=this.x;return this.x=t+this.y-e.y,this.y=e.x+e.y-t,this}rotate120(e,t){e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("m not an integer only floor(m) used")),t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("n not an integer only floor(n) used"));const s=this.x;return this.x=e-s-this.y,this.y=t+s,this}rotateNeg120(e,t){e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("m is not an integer, floor(m) used")),t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("n is not an integer,   floor(n) used"));const s=this.x;return this.x=this.y-t,this.y=e+t-s-this.y,this}toCartesianOrigin(e,t){const s=z.Zero();return s.x=e.x+2*this.x*t+this.y*t,s.y=e.y+Math.sqrt(3)*this.y*t,s}static Zero(){return new B(0,0)}}class Rt{constructor(){this.cartesian=[],this.vertices=[],this.max=[],this.min=[],this.closestTo=[],this.innerFacets=[],this.isoVecsABOB=[],this.isoVecsOBOA=[],this.isoVecsBAOA=[],this.vertexTypes=[],this.IDATA=new pt("icosahedron","Regular",[[0,M,-1],[-M,1,0],[-1,0,-M],[1,0,-M],[M,1,0],[0,M,1],[-1,0,M],[-M,-1,0],[0,-M,-1],[M,-1,0],[1,0,M],[0,-M,1]],[[0,2,1],[0,3,2],[0,4,3],[0,5,4],[0,1,5],[7,6,1],[8,7,2],[9,8,3],[10,9,4],[6,10,5],[2,7,1],[3,8,2],[4,9,3],[5,10,4],[1,6,5],[11,6,7],[11,7,8],[11,8,9],[11,9,10],[11,10,6]])}setIndices(){let e=12;const t={},s=this.m,a=this.n;let o=s,n=1,f=0;a!==0&&(o=At(s,a)),n=s/o,f=a/o;let i,l,m,d,h;const x=B.Zero(),S=new B(s,a),c=new B(-a,s+a),p=B.Zero(),v=B.Zero(),g=B.Zero();let b=[],y,u,A,O;const G=[],C=this.vertByDist,F=(D,w,V,K)=>{y=D+"|"+V,u=w+"|"+K,y in t||u in t?y in t&&!(u in t)?t[u]=t[y]:u in t&&!(y in t)&&(t[y]=t[u]):(t[y]=e,t[u]=e,e++),C[V][0]>2?G[t[y]]=[-C[V][0],C[V][1],t[y]]:G[t[y]]=[b[C[V][0]],C[V][1],t[y]]};this.IDATA.edgematch=[[1,"B"],[2,"B"],[3,"B"],[4,"B"],[0,"B"],[10,"O",14,"A"],[11,"O",10,"A"],[12,"O",11,"A"],[13,"O",12,"A"],[14,"O",13,"A"],[0,"O"],[1,"O"],[2,"O"],[3,"O"],[4,"O"],[19,"B",5,"A"],[15,"B",6,"A"],[16,"B",7,"A"],[17,"B",8,"A"],[18,"B",9,"A"]];for(let D=0;D<20;D++){if(b=this.IDATA.face[D],m=b[2],d=b[1],h=b[0],A=x.x+"|"+x.y,y=D+"|"+A,y in t||(t[y]=m,G[m]=[b[C[A][0]],C[A][1]]),A=S.x+"|"+S.y,y=D+"|"+A,y in t||(t[y]=d,G[d]=[b[C[A][0]],C[A][1]]),A=c.x+"|"+c.y,y=D+"|"+A,y in t||(t[y]=h,G[h]=[b[C[A][0]],C[A][1]]),i=this.IDATA.edgematch[D][0],l=this.IDATA.edgematch[D][1],l==="B")for(let w=1;w<o;w++)v.x=s-w*(n+f),v.y=a+w*n,g.x=-w*f,g.y=w*(n+f),A=v.x+"|"+v.y,O=g.x+"|"+g.y,F(D,i,A,O);if(l==="O")for(let w=1;w<o;w++)g.x=-w*f,g.y=w*(n+f),p.x=w*n,p.y=w*f,A=g.x+"|"+g.y,O=p.x+"|"+p.y,F(D,i,A,O);if(i=this.IDATA.edgematch[D][2],l=this.IDATA.edgematch[D][3],l&&l==="A")for(let w=1;w<o;w++)p.x=w*n,p.y=w*f,v.x=s-(o-w)*(n+f),v.y=a+(o-w)*n,A=p.x+"|"+p.y,O=v.x+"|"+v.y,F(D,i,A,O);for(let w=0;w<this.vertices.length;w++)A=this.vertices[w].x+"|"+this.vertices[w].y,y=D+"|"+A,y in t||(t[y]=e++,C[A][0]>2?G[t[y]]=[-C[A][0],C[A][1],t[y]]:G[t[y]]=[b[C[A][0]],C[A][1],t[y]])}this.closestTo=G,this.vecToidx=t}calcCoeffs(){const e=this.m,t=this.n,s=Math.sqrt(3)/3,a=e*e+t*t+e*t;this.coau=(e+t)/a,this.cobu=-t/a,this.coav=-s*(e-t)/a,this.cobv=s*(2*e+t)/a}createInnerFacets(){const e=this.m,t=this.n;for(let s=0;s<t+e+1;s++)for(let a=this.min[s];a<this.max[s]+1;a++)a<this.max[s]&&a<this.max[s+1]+1&&this.innerFacets.push(["|"+a+"|"+s,"|"+a+"|"+(s+1),"|"+(a+1)+"|"+s]),s>0&&a<this.max[s-1]&&a+1<this.max[s]+1&&this.innerFacets.push(["|"+a+"|"+s,"|"+(a+1)+"|"+s,"|"+(a+1)+"|"+(s-1)])}edgeVecsABOB(){const e=this.m,t=this.n,s=new B(-t,e+t);for(let a=1;a<e+t;a++){const o=new B(this.min[a],a),n=new B(this.min[a-1],a-1),f=new B(this.min[a+1],a+1),i=o.clone(),l=n.clone(),m=f.clone();i.rotate60About(s),l.rotate60About(s),m.rotate60About(s);const d=new B(this.max[i.y],i.y),h=new B(this.max[i.y-1],i.y-1),x=new B(this.max[i.y-1]-1,i.y-1);(i.x!==d.x||i.y!==d.y)&&(i.x!==h.x?(this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([o,h,x]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([o,x,d])):i.y===m.y?(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([o,n,h]),this.vertexTypes.push([1,0,1]),this.isoVecsABOB.push([o,h,f])):(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([o,n,h]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([o,h,d])))}}mapABOBtoOBOA(){const e=new B(0,0);for(let t=0;t<this.isoVecsABOB.length;t++){const s=[];for(let a=0;a<3;a++)e.x=this.isoVecsABOB[t][a].x,e.y=this.isoVecsABOB[t][a].y,this.vertexTypes[t][a]===0&&e.rotateNeg120(this.m,this.n),s.push(e.clone());this.isoVecsOBOA.push(s)}}mapABOBtoBAOA(){const e=new B(0,0);for(let t=0;t<this.isoVecsABOB.length;t++){const s=[];for(let a=0;a<3;a++)e.x=this.isoVecsABOB[t][a].x,e.y=this.isoVecsABOB[t][a].y,this.vertexTypes[t][a]===1&&e.rotate120(this.m,this.n),s.push(e.clone());this.isoVecsBAOA.push(s)}}MapToFace(e,t){const s=this.IDATA.face[e],a=s[2],o=s[1],n=s[0],f=z.FromArray(this.IDATA.vertex[a]),i=z.FromArray(this.IDATA.vertex[o]),l=z.FromArray(this.IDATA.vertex[n]),m=i.subtract(f),d=l.subtract(f),h=m.scale(this.coau).add(d.scale(this.cobu)),x=m.scale(this.coav).add(d.scale(this.cobv));let S,c=Lt.Vector3[0];for(let p=0;p<this.cartesian.length;p++)c=h.scale(this.cartesian[p].x).add(x.scale(this.cartesian[p].y)).add(f),c.x,c.y,c.z,S=e+"|"+this.vertices[p].x+"|"+this.vertices[p].y,t.vertex[this.vecToidx[S]]=[c.x,c.y,c.z]}build(e,t){const s=[],a=B.Zero(),o=new B(e,t),n=new B(-t,e+t);s.push(a,o,n);for(let u=t;u<e+1;u++)for(let A=0;A<e+1-u;A++)s.push(new B(A,u));if(t>0){const u=At(e,t),A=e/u,O=t/u;for(let C=1;C<u;C++)s.push(new B(C*A,C*O)),s.push(new B(-C*O,C*(A+O))),s.push(new B(e-C*(A+O),t+C*A));const G=e/t;for(let C=1;C<t;C++)for(let F=0;F<C*G;F++)s.push(new B(F,C)),s.push(new B(F,C).rotate120(e,t)),s.push(new B(F,C).rotateNeg120(e,t))}s.sort((u,A)=>u.x-A.x),s.sort((u,A)=>u.y-A.y);const f=new Array(e+t+1),i=new Array(e+t+1);for(let u=0;u<f.length;u++)f[u]=1/0,i[u]=-1/0;let l=0,m=0;const d=s.length;for(let u=0;u<d;u++)m=s[u].x,l=s[u].y,f[l]=Math.min(m,f[l]),i[l]=Math.max(m,i[l]);const h=(u,A)=>{const O=u.clone();return A==="A"&&O.rotateNeg120(e,t),A==="B"&&O.rotate120(e,t),O.x<0?O.y:O.x+O.y},x=[],S=[],c=[],p=[],v={},g=[];let b=-1,y=-1;for(let u=0;u<d;u++)x[u]=s[u].toCartesianOrigin(new B(0,0),.5),S[u]=h(s[u],"O"),c[u]=h(s[u],"A"),p[u]=h(s[u],"B"),S[u]===c[u]&&c[u]===p[u]?(b=3,y=S[u]):S[u]===c[u]?(b=4,y=S[u]):c[u]===p[u]?(b=5,y=c[u]):p[u]===S[u]&&(b=6,y=S[u]),S[u]<c[u]&&S[u]<p[u]&&(b=2,y=S[u]),c[u]<S[u]&&c[u]<p[u]&&(b=1,y=c[u]),p[u]<c[u]&&p[u]<S[u]&&(b=0,y=p[u]),g.push([b,y,s[u].x,s[u].y]);g.sort((u,A)=>u[2]-A[2]),g.sort((u,A)=>u[3]-A[3]),g.sort((u,A)=>u[1]-A[1]),g.sort((u,A)=>u[0]-A[0]);for(let u=0;u<g.length;u++)v[g[u][2]+"|"+g[u][3]]=[g[u][0],g[u][1],u];return this.m=e,this.n=t,this.vertices=s,this.vertByDist=v,this.cartesian=x,this.min=f,this.max=i,this}}class pt{constructor(e,t,s,a){this.name=e,this.category=t,this.vertex=s,this.face=a}}class ht extends pt{innerToData(e,t){for(let s=0;s<t.innerFacets.length;s++)this.face.push(t.innerFacets[s].map(a=>t.vecToidx[e+a]))}mapABOBtoDATA(e,t){const s=t.IDATA.edgematch[e][0];for(let a=0;a<t.isoVecsABOB.length;a++){const o=[];for(let n=0;n<3;n++)t.vertexTypes[a][n]===0?o.push(e+"|"+t.isoVecsABOB[a][n].x+"|"+t.isoVecsABOB[a][n].y):o.push(s+"|"+t.isoVecsABOB[a][n].x+"|"+t.isoVecsABOB[a][n].y);this.face.push([t.vecToidx[o[0]],t.vecToidx[o[1]],t.vecToidx[o[2]]])}}mapOBOAtoDATA(e,t){const s=t.IDATA.edgematch[e][0];for(let a=0;a<t.isoVecsOBOA.length;a++){const o=[];for(let n=0;n<3;n++)t.vertexTypes[a][n]===1?o.push(e+"|"+t.isoVecsOBOA[a][n].x+"|"+t.isoVecsOBOA[a][n].y):o.push(s+"|"+t.isoVecsOBOA[a][n].x+"|"+t.isoVecsOBOA[a][n].y);this.face.push([t.vecToidx[o[0]],t.vecToidx[o[1]],t.vecToidx[o[2]]])}}mapBAOAtoDATA(e,t){const s=t.IDATA.edgematch[e][2];for(let a=0;a<t.isoVecsBAOA.length;a++){const o=[];for(let n=0;n<3;n++)t.vertexTypes[a][n]===1?o.push(e+"|"+t.isoVecsBAOA[a][n].x+"|"+t.isoVecsBAOA[a][n].y):o.push(s+"|"+t.isoVecsBAOA[a][n].x+"|"+t.isoVecsBAOA[a][n].y);this.face.push([t.vecToidx[o[0]],t.vecToidx[o[1]],t.vecToidx[o[2]]])}}orderData(e){const t=[];for(let n=0;n<13;n++)t[n]=[];const s=e.closestTo;for(let n=0;n<s.length;n++)s[n][0]>-1?s[n][1]>0&&t[s[n][0]].push([n,s[n][1]]):t[12].push([n,s[n][0]]);const a=[];for(let n=0;n<12;n++)a[n]=n;let o=12;for(let n=0;n<12;n++){t[n].sort((f,i)=>f[1]-i[1]);for(let f=0;f<t[n].length;f++)a[t[n][f][0]]=o++}for(let n=0;n<t[12].length;n++)a[t[12][n][0]]=o++;for(let n=0;n<this.vertex.length;n++)this.vertex[n].push(a[n]);this.vertex.sort((n,f)=>n[3]-f[3]);for(let n=0;n<this.vertex.length;n++)this.vertex[n].pop();for(let n=0;n<this.face.length;n++)for(let f=0;f<this.face[n].length;f++)this.face[n][f]=a[this.face[n][f]];this.sharedNodes=t[12].length,this.poleNodes=this.vertex.length-this.sharedNodes}setOrder(e,t){const s=[],a=[];let o=t.pop();a.push(o);let n=this.face[o].indexOf(e);n=(n+2)%3;let f=this.face[o][n];s.push(f);let i=0;for(;t.length>0;)o=t[i],this.face[o].indexOf(f)>-1?(n=(this.face[o].indexOf(f)+1)%3,f=this.face[o][n],s.push(f),a.push(o),t.splice(i,1),i=0):i++;return this.adjacentFaces.push(s),a}toGoldbergPolyhedronData(){const e=new pt("GeoDual","Goldberg",[],[]);e.name="GD dual";const t=this.vertex.length,s=new Array(t);for(let l=0;l<t;l++)s[l]=[];for(let l=0;l<this.face.length;l++)for(let m=0;m<3;m++)s[this.face[l][m]].push(l);let a=0,o=0,n=0,f=[],i=[];this.adjacentFaces=[];for(let l=0;l<s.length;l++)e.face[l]=this.setOrder(l,s[l].concat([])),s[l].forEach(m=>{a=0,o=0,n=0,f=this.face[m];for(let d=0;d<3;d++)i=this.vertex[f[d]],a+=i[0],o+=i[1],n+=i[2];e.vertex[m]=[a/3,o/3,n/3]});return e}static BuildGeodesicData(e){const t=new ht("Geodesic-m-n","Geodesic",[[0,M,-1],[-M,1,0],[-1,0,-M],[1,0,-M],[M,1,0],[0,M,1],[-1,0,M],[-M,-1,0],[0,-M,-1],[M,-1,0],[1,0,M],[0,-M,1]],[]);e.setIndices(),e.calcCoeffs(),e.createInnerFacets(),e.edgeVecsABOB(),e.mapABOBtoOBOA(),e.mapABOBtoBAOA();for(let a=0;a<e.IDATA.face.length;a++)e.MapToFace(a,t),t.innerToData(a,e),e.IDATA.edgematch[a][1]==="B"&&t.mapABOBtoDATA(a,e),e.IDATA.edgematch[a][1]==="O"&&t.mapOBOAtoDATA(a,e),e.IDATA.edgematch[a][3]==="A"&&t.mapBAOAtoDATA(a,e);t.orderData(e);const s=1;return t.vertex=t.vertex.map(function(a){const o=a[0],n=a[1],f=a[2],i=Math.sqrt(o*o+n*n+f*f);return a[0]*=s/i,a[1]*=s/i,a[2]*=s/i,a}),t}}function Ae(r,e,t=null){let s=e.m||1;s!==Math.floor(s)&&(s=Math.floor(s),R.Warn("m not an integer only floor(m) used"));let a=e.n||0;if(a!==Math.floor(a)&&(a=Math.floor(a),R.Warn("n not an integer only floor(n) used")),a>s){const l=a;a=s,s=l,R.Warn("n > m therefore m and n swapped")}const o=new Rt;o.build(s,a);const f={custom:ht.BuildGeodesicData(o),size:e.size,sizeX:e.sizeX,sizeY:e.sizeY,sizeZ:e.sizeZ,faceUV:e.faceUV,faceColors:e.faceColors,flat:e.flat,updatable:e.updatable,sideOrientation:e.sideOrientation,frontUVs:e.frontUVs,backUVs:e.backUVs};return Gt(r,f,t)}function ye(r,e){const t=r.size,s=r.sizeX||t||1,a=r.sizeY||t||1,o=r.sizeZ||t||1,n=r.sideOrientation===0?0:r.sideOrientation||j.DEFAULTSIDE,f=[],i=[],l=[],m=[];let d=1/0,h=-1/0,x=1/0,S=-1/0;for(let v=0;v<e.vertex.length;v++)d=Math.min(d,e.vertex[v][0]*s),h=Math.max(h,e.vertex[v][0]*s),x=Math.min(x,e.vertex[v][1]*a),S=Math.max(S,e.vertex[v][1]*a);let c=0;for(let v=0;v<e.face.length;v++){const g=e.face[v],b=z.FromArray(e.vertex[g[0]]),y=z.FromArray(e.vertex[g[2]]),u=z.FromArray(e.vertex[g[1]]),A=y.subtract(b),O=u.subtract(b),G=z.Cross(O,A).normalize();for(let C=0;C<g.length;C++){l.push(G.x,G.y,G.z);const F=e.vertex[g[C]];f.push(F[0]*s,F[1]*a,F[2]*o);const D=(F[1]*a-x)/(S-x);m.push((F[0]*s-d)/(h-d),D)}for(let C=0;C<g.length-2;C++)i.push(c,c+C+2,c+C+1);c+=g.length}j._ComputeSides(n,f,i,l,m);const p=new j;return p.positions=f,p.indices=i,p.normals=l,p.uvs=m,p}function ge(r,e,t=null){const s=e.size,a=e.sizeX||s||1,o=e.sizeY||s||1,n=e.sizeZ||s||1;let f=e.m||1;f!==Math.floor(f)&&(f=Math.floor(f),R.Warn("m not an integer only floor(m) used"));let i=e.n||0;if(i!==Math.floor(i)&&(i=Math.floor(i),R.Warn("n not an integer only floor(n) used")),i>f){const S=i;i=f,f=S,R.Warn("n > m therefore m and n swapped")}const l=new Rt;l.build(f,i);const m=ht.BuildGeodesicData(l),d=m.toGoldbergPolyhedronData(),h=new Zt(r,t);e.sideOrientation=ct._GetDefaultSideOrientation(e.sideOrientation),h._originalBuilderSideOrientation=e.sideOrientation,ye(e,d).applyToMesh(h,e.updatable),h.goldbergData.nbSharedFaces=m.sharedNodes,h.goldbergData.nbUnsharedFaces=m.poleNodes,h.goldbergData.adjacentFaces=m.adjacentFaces,h.goldbergData.nbFaces=h.goldbergData.nbSharedFaces+h.goldbergData.nbUnsharedFaces,h.goldbergData.nbFacesAtPole=(h.goldbergData.nbUnsharedFaces-12)/12;for(let S=0;S<m.vertex.length;S++)h.goldbergData.faceCenters.push(z.FromArray(m.vertex[S])),h.goldbergData.faceCenters[S].x*=a,h.goldbergData.faceCenters[S].y*=o,h.goldbergData.faceCenters[S].z*=n,h.goldbergData.faceColors.push(new $t(1,1,1,1));for(let S=0;S<d.face.length;S++){const c=d.face[S],p=z.FromArray(d.vertex[c[0]]),v=z.FromArray(d.vertex[c[2]]),g=z.FromArray(d.vertex[c[1]]),b=v.subtract(p),y=g.subtract(p),u=z.Cross(y,b).normalize(),A=z.Cross(y,u).normalize();h.goldbergData.faceXaxis.push(y.normalize()),h.goldbergData.faceYaxis.push(u),h.goldbergData.faceZaxis.push(A)}return h}const P={CreateBox:pe,CreateTiledBox:de,CreateSphere:me,CreateDisc:ue,CreateIcoSphere:he,CreateRibbon:ce,CreateCylinder:fe,CreateTorus:le,CreateTorusKnot:ie,CreateLineSystem:ne,CreateLines:oe,CreateDashedLines:re,ExtrudeShape:ae,ExtrudeShapeCustom:se,CreateLathe:ee,CreateTiledPlane:te,CreatePlane:Jt,CreateGround:Wt,CreateTiledGround:Qt,CreateGroundFromHeightMap:Kt,CreatePolygon:qt,ExtrudePolygon:Yt,CreateTube:jt,CreatePolyhedron:Gt,CreateGeodesic:Ae,CreateGoldberg:ge,CreateDecal:Ht,CreateCapsule:Xt,CreateText:Ut};class be{get gpuFrameTimeCounter(){return this.engine.getGPUFrameTimeCounter()}get captureGPUFrameTime(){return this._captureGPUFrameTime}set captureGPUFrameTime(e){e!==this._captureGPUFrameTime&&(this._captureGPUFrameTime=e,this.engine.captureGPUFrameTime(e))}get shaderCompilationTimeCounter(){return this._shaderCompilationTime}get captureShaderCompilationTime(){return this._captureShaderCompilationTime}set captureShaderCompilationTime(e){e!==this._captureShaderCompilationTime&&(this._captureShaderCompilationTime=e,e?(this._onBeforeShaderCompilationObserver=this.engine.onBeforeShaderCompilationObservable.add(()=>{this._shaderCompilationTime.fetchNewFrame(),this._shaderCompilationTime.beginMonitoring()}),this._onAfterShaderCompilationObserver=this.engine.onAfterShaderCompilationObservable.add(()=>{this._shaderCompilationTime.endMonitoring()})):(this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null))}constructor(e){this.engine=e,this._captureGPUFrameTime=!1,this._captureShaderCompilationTime=!1,this._shaderCompilationTime=new Se,this._onBeginFrameObserver=null,this._onEndFrameObserver=null,this._onBeforeShaderCompilationObserver=null,this._onAfterShaderCompilationObserver=null}dispose(){this.engine.onBeginFrameObservable.remove(this._onBeginFrameObserver),this._onBeginFrameObserver=null,this.engine.onEndFrameObservable.remove(this._onEndFrameObserver),this._onEndFrameObserver=null,this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null,this.engine=null}}const Ct=[],Ce=typeof performance<"u"?performance.now():0;function xt(r,e){const t={name:r,ms:Math.round(e*10)/10,at:Math.round((performance.now()-Ce)*10)/10};Ct.push(t),globalThis.__boot=Ct}async function es(r,e){const t=performance.now();try{return await e()}finally{xt(r,performance.now()-t)}}function ss(r,e){const t=performance.now();try{return e()}finally{xt(r,performance.now()-t)}}function as(r,e){const t=new be(r);t.captureShaderCompilationTime=!0;const s=r.onEndFrameObservable.add(()=>{xt(e,t.shaderCompilationTimeCounter.total),r.onEndFrameObservable.remove(s),t.dispose()})}function Te(r,e){const t=(r??"").trim().toLowerCase(),s=(e?.name??"").trim().toLowerCase(),a=e?.id??0,o=e?.role??-1;return a===2||t==="wind"||s==="wind mast"?"mast":a===34||t==="sunbank"||s==="sun bank"?"bank":a===3||t==="solar"||s==="solar array"?"array":we(t,s,a,o)?"works":!t||t.includes(".")?null:"block"}function we(r,e,t,s){return!!(s===3||t===7||t===8||t===14||t===25||t===28||t===31||t===32||t===33||t===41||t===45||r.endsWith("factory")||r.includes("factory")||r.startsWith("hall.")||r.endsWith(".bots")||e.includes("works")||e==="airfield"||e==="dry dock"||e==="burrow crib"||e==="headframe"||e.includes("crane"))}function rs(r,e,t){return t?"structure":Tt()}function Tt(r,e,t){return"box"}const mt=0,X=1,k=2,Q=3,wt=[{body:[.77,.38,.18],accent:[.96,.77,.09]},{body:[.9,.84,.76],accent:[.12,.54,.54]},{body:[.95,.96,.97],accent:[.18,.36,1]},{body:[.36,.24,.54],accent:[.24,.86,.48]}];function Bt(r,e,t){return[r[0]+(e[0]-r[0])*t,r[1]+(e[1]-r[1])*t,r[2]+(e[2]-r[2])*t]}function Be(r,e){if(!r.tones.length||r.tones.length*3!==r.positions.length)return null;const t=wt[e]??wt[0],s=[t.body,Bt(t.body,[1,1,1],.18),Bt(t.body,[.05,.05,.06],.72),t.accent],a=[];for(const o of r.tones){const n=s[o]??t.body;a.push(n[0],n[1],n[2],1)}return a}function Me(r){const e=[],t=[],s=[],a=[],o=(n,f,i,l,m,d,h=-1)=>{const x=e.length/3;if(Oe(e,t,s,n,f,i,l,m,d),h<0)return;const S=e.length/3-x;for(let c=0;c<S;c++)a.push(h)};return r==="mast"?(o(.5,8.2,.5,0,0,0),o(1.5,.7,1.1,0,8.2,0),o(.22,3.6,.16,0,6.2,.7),o(3.8,.2,.16,0,8.35,.7)):r==="bank"?(o(6.4,.55,4.2,0,0,0),o(1.7,3.8,.22,-2.05,.55,.4),o(1.7,3.8,.22,0,.55,.4),o(1.7,3.8,.22,2.05,.55,.4)):r==="array"?(o(7.2,.35,5.2,0,0,0),o(.28,1.4,.28,-2.4,.35,0),o(.28,1.4,.28,2.4,.35,0),o(6.4,.18,3.4,0,1.75,0)):r==="works"?(o(14.2,4.2,9.4,0,0,0,mt),o(4.2,3.4,.55,0,0,4.9,mt),o(.28,3.6,.7,-2.2,0,5.05,k),o(.28,3.6,.7,2.2,0,5.05,k),o(4.6,.35,.7,0,3.4,5.05,k),o(.18,2.5,2.4,7.2,.7,-1.6,X),o(.18,2.5,2.4,7.2,.7,1.6,X),o(.18,2.5,2.4,-7.2,.7,-1.6,X),o(.18,2.5,2.4,-7.2,.7,1.6,X),o(2.4,2.4,.18,-3.4,.8,4.78,X),o(2.4,2.4,.18,3.4,.8,4.78,X),o(.45,4.6,.45,6.9,0,4.5,k),o(.45,4.6,.45,-6.9,0,4.5,k),o(.45,4.6,.45,6.9,0,-4.5,k),o(.45,4.6,.45,-6.9,0,-4.5,k),o(14.8,.4,.28,0,4.2,4.55,k),o(14.8,.4,.28,0,4.2,-4.55,k),o(1.4,8.4,1.4,5.2,4.2,-2.8,mt),o(1.8,.35,1.8,5.2,12.6,-2.8,k),o(.55,10.4,.55,-7.6,0,0,Q),o(.55,10.4,.55,7.6,0,0,Q),o(15.8,.55,.7,0,10.4,0,Q),o(1.8,.9,1.15,0,9.2,0,Q),o(.16,2.4,.16,0,6.8,0,Q)):(o(4.4,2.6,4.4,0,0,0),o(3.2,.9,3.2,0,2.6,0)),{positions:e,indices:t,normals:s,tones:a}}function Oe(r,e,t,s,a,o,n,f,i){const l=n-s/2,m=n+s/2,d=f,h=f+a,x=i-o/2,S=i+o/2,c=[{n:[0,0,-1],v:[[l,d,x],[m,d,x],[m,h,x],[l,h,x]]},{n:[0,0,1],v:[[m,d,S],[l,d,S],[l,h,S],[m,h,S]]},{n:[-1,0,0],v:[[l,d,S],[l,d,x],[l,h,x],[l,h,S]]},{n:[1,0,0],v:[[m,d,x],[m,d,S],[m,h,S],[m,h,x]]},{n:[0,1,0],v:[[l,h,x],[m,h,x],[m,h,S],[l,h,S]]},{n:[0,-1,0],v:[[l,d,S],[m,d,S],[m,d,x],[l,d,x]]}];for(const p of c){const v=r.length/3;for(const g of p.v)r.push(g[0],g[1],g[2]),t.push(p.n[0],p.n[1],p.n[2]);e.push(v,v+1,v+2,v,v+2,v+3)}}const De=new Map,q=[{body:new _(.77,.38,.18),accent:new _(.96,.77,.09)},{body:new _(.9,.84,.76),accent:new _(.12,.54,.54)},{body:new _(.95,.96,.97),accent:new _(.18,.36,1)},{body:new _(.36,.24,.54),accent:new _(.24,.86,.48)}];function St(r,e,t=!1){const s=`mat-${e}-${t?"a":"b"}`,a=r.getMaterialByName(s);if(a)return a;const o=new U(s,r),n=q[e]??q[0];return o.diffuseColor=t?n.accent:n.body,o.specularColor=_.Black(),o}function os(r,e,t,s){const a=De.get(e);if(a){const n=a(r);return n.material=St(r,t,s===0),n.isPickable=!1,n}let o;return s===9?o=P.CreateBox(e,{width:1.7,height:1.1,depth:1.7},r):s===3?o=P.CreateBox(e,{width:8,height:2.4,depth:8},r):s===8?o=P.CreateBox(e,{width:1.6,height:3.2,depth:1.6},r):s>=4&&s<=10?o=P.CreateBox(e,{width:2.4,height:1.3,depth:2.4},r):t===1?o=P.CreateCylinder(e,{diameterTop:.12,diameterBottom:1.15,height:.7,tessellation:3},r):t===2?o=P.CreateCylinder(e,{diameterTop:.35,diameterBottom:.85,height:1.7,tessellation:5},r):t===3?o=P.CreateBox(e,{width:1.7,height:.42,depth:1.05},r):o=P.CreateBox(e,{width:.95,height:.72,depth:1.15},r),o.material=St(r,t,s===0||s===8),o.isPickable=!1,o.alwaysSelectAsActiveMesh=!0,s>=3&&s<=10&&Ge(o),o}const lt=new Map;let Mt=0;function ns(r,e,t,s=Te(e)){if(!s)return null;const a=new ct(`struct-${e}-${t}-${Mt}`,r);Mt+=1;const o=Me(s),n=new j;n.positions=o.positions,n.indices=o.indices,n.normals=o.normals;const f=Be(o,t);return f&&(n.colors=f),n.applyToMesh(a,!0),f&&(a.useVertexColors=!0),a.material=f?_e(r,t):Fe(r,t),a.isPickable=!1,a.alwaysSelectAsActiveMesh=!0,a.doNotSyncBoundingInfo=!0,a.renderingGroupId=0,a}function _e(r,e){const t=`struct-paint-${e}`,s=lt.get(t);if(s&&s.getScene()===r)return s;const a=new U(t,r),o=q[e]??q[0];return a.diffuseColor=_.White(),a.emissiveColor=o.accent.scale(.12),a.specularColor=new _(.16,.16,.16),lt.set(t,a),a}function Fe(r,e){const t=`struct-mat-${e}`,s=lt.get(t);if(s&&s.getScene()===r)return s;const a=new U(t,r),o=q[e]??q[0];return a.diffuseColor=new _(.45,.48,.5),a.emissiveColor=o.accent.scale(.35),a.specularColor=new _(.08,.08,.08),lt.set(t,a),a}function Ge(r){r.refreshBoundingInfo(!0);const e=r.getBoundingInfo().boundingBox.extendSize.y*2;e>0&&(r.bakeTransformIntoVertices(dt.Translation(0,e/2,0)),r.refreshBoundingInfo(!0))}function is(r,e){const t=P.CreateBox(`shell-${e}`,{size:.35},r);return t.material=St(r,e,!0),t.isPickable=!1,t.alwaysSelectAsActiveMesh=!0,t}let Ot=null;function ls(){return Ot??=(async()=>{if(typeof window>"u"){const{readFileSync:r}=await ve(async()=>{const{readFileSync:t}=await import("./__vite-browser-external-kldTRzGf.js").then(s=>s.a);return{readFileSync:t}},[],import.meta.url);await bt({module_or_path:r(new URL(""+new URL("sim_bg-BSeSqykp.wasm",import.meta.url).href,import.meta.url))});return}await bt()})(),Ot}function Et(r,e,t,s,a,o){const n=e+1,f=H(a/s,0,e-.001),i=H(o/s,0,t-.001),l=Math.floor(f),m=Math.floor(i),d=f-l,h=i-m,x=r[m*n+l]/64,S=r[m*n+l+1]/64,c=r[(m+1)*n+l]/64,p=r[(m+1)*n+l+1]/64;return x*(1-d)*(1-h)+S*d*(1-h)+c*(1-d)*h+p*d*h}const Pt=1536,It=1024,Vt=Pt/2,ze=It/2,ot=Vt+1,J=65536;function Re(r,e,t){const s=H(Math.round(e*J),0,Pt*J),a=H(Math.round(t*J),0,It*J),o=Math.floor(s/2),n=Math.floor(a/2),f=H(o>>16,0,Vt-1),i=H(n>>16,0,ze-1),l=o&65535,m=n&65535,d=r[i*ot+f],h=r[i*ot+f+1],x=r[(i+1)*ot+f],S=r[(i+1)*ot+f+1],c=d+((h-d)*l>>16),p=x+((S-x)*l>>16);return(c+((p-c)*m>>16)<<10)/J}function fs(r,e,t,s,a,o,n){return Et(r,e,t,s,a,n)+(o-Re(r,a,n))}function H(r,e,t){return Math.max(e,Math.min(t,r))}function Ee(r){const e=Math.max(-1,Math.min(1,r));if(e<0){const s=e+1;return Dt([.32,.36,.4],[.55,.5,.42],s)}const t=Pe(Math.min(1,e/.55));return Dt([.64,.58,.48],[.13,.28,.58],t)}function Dt(r,e,t){return[r[0]+(e[0]-r[0])*t,r[1]+(e[1]-r[1])*t,r[2]+(e[2]-r[2])*t]}function Pe(r){return r*r*(3-2*r)}function cs(r){const e=P.CreateSphere("sky",{diameter:400,segments:32,sideOrientation:ct.BACKSIDE},r);e.infiniteDistance=!0,e.isPickable=!1,e.alwaysSelectAsActiveMesh=!0;const t=e.getVerticesData(yt.PositionKind);if(t){const a=new Float32Array(t.length/3*4);for(let o=0;o<t.length;o+=3){const n=t[o],f=t[o+1],i=t[o+2],l=Math.hypot(n,f,i)||1,[m,d,h]=Ee(f/l),x=o/3*4;a[x]=m,a[x+1]=d,a[x+2]=h,a[x+3]=1}e.setVerticesData(yt.ColorKind,a)}e.useVertexColors=!0;const s=new U("sky",r);return s.disableLighting=!0,s.emissiveColor=new _(1,1,1),s.specularColor=_.Black(),s.backFaceCulling=!1,s.disableDepthWrite=!0,e.material=s,e}const ft=.82,kt=.48,Nt=[[.78,.74,.68],[.58,.54,.5],[.4,.42,.44],[.64,.42,.32],[.3,.29,.28]];function hs(r,e){const t=r*Math.PI/180,s=e*Math.PI/180,a=Math.cos(s);return[-Math.sin(t)*a,-Math.sin(s),Math.cos(t)*a]}const Ie=1;function Ve(r,e,t,s,a=Ie){const o=Math.floor(e/a),n=Math.floor(t/a),f=e+1,i=o+1,l=new Float32Array(i*(n+1)*3);let m=1/0,d=-1/0,h=0;for(let c=0;c<=n;c++){const p=Math.min(t,c*a);for(let v=0;v<=o;v++){const g=Math.min(e,v*a),b=r[p*f+g]/64;l[h++]=g*s,l[h++]=b,l[h++]=p*s,b<m&&(m=b),b>d&&(d=b)}}const x=new Uint32Array(o*n*6);let S=0;for(let c=0;c<n;c++)for(let p=0;p<o;p++){const v=c*i+p;x[S++]=v,x[S++]=v+1,x[S++]=v+i,x[S++]=v+1,x[S++]=v+i+1,x[S++]=v+i}return{positions:l,indices:x,cols:o,rows:n,minY:m,maxY:d}}const T=128,W=2,I=T+W*2,at=4,L=I*at,E={grass:0,scrub:1,rock:2,scree:3,gravel:4,road:5,mud:6,sand:7,concrete:8};function $(r,e,t){let s=Math.imul(r,374761393)^Math.imul(e,668265263)^Math.imul(t,1442695041);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function ke(r,e,t,s){const a=Math.floor(r),o=Math.floor(e),n=r-a,f=e-o,i=n*n*(3-2*n),l=f*f*(3-2*f),m=(a%s+s)%s,d=(o%s+s)%s,h=(m+1)%s,x=(d+1)%s,S=$(m,d,t),c=$(h,d,t),p=$(m,x,t),v=$(h,x,t);return S*(1-i)*(1-l)+c*i*(1-l)+p*(1-i)*l+v*i*l}function Z(r,e,t,s,a){let o=0,n=.5,f=0,i=1,l=s;for(let m=0;m<a;m++)o+=n*ke(r*i,e*i,t+m*17,l),f+=n,n*=.5,i*=2,l*=2;return o/f}function _t(r,e,t,s){const a=Math.max(1,Math.round(T/s)),o=Math.floor(r/s),n=Math.floor(e/s);let f=1e9;for(let i=-1;i<=1;i++)for(let l=-1;l<=1;l++){const m=o+l,d=n+i,h=(m%a+a)%a,x=(d%a+a)%a,S=m*s+$(h,x,t)*s,c=d*s+$(h,x,t+9)*s,p=r-S,v=e-c,g=p*p+v*v;g<f&&(f=g)}return Math.sqrt(f)/s}function Y(r){return Math.max(0,Math.min(255,Math.round(r)))}function Ne(r){const e=T*T,t=new Uint8Array(e*3),s=new Float32Array(e),a={0:[196,174,122],1:[124,128,78],2:[168,158,146],3:[198,182,160],4:[170,156,132],5:[142,122,96],6:[124,102,78],7:[204,184,146],8:[176,174,166]},[o,n,f]=a[r]??[140,130,110];for(let i=0;i<T;i++)for(let l=0;l<T;l++){const m=i*T+l;let d=o,h=n,x=f,S=0;if(r===E.grass){const c=Z(l/18,i/18,11,T,3),p=Z(l/3.2,i/3.2,12,T,2);d+=(c-.5)*36+(p-.5)*18,h+=(c-.45)*28+(p-.5)*14,x+=(c-.5)*16,S=(p-.5)*.35+(c-.5)*.15}else if(r===E.scrub){const c=_t(l,i,21,16),p=Math.max(0,1-c*1.6);d-=p*28,h-=p*18,x-=p*16,S=p*.8}else if(r===E.rock){const c=1-Math.abs(Z(l/10,i/10,31,T,4)*2-1),p=c>.82?1:0;d-=p*40+c*12,h-=p*38+c*10,x-=p*34+c*8,S=c*.9-p*.7}else if(r===E.scree||r===E.gravel){const c=r===E.scree?18:9,p=_t(l,i,r===E.scree?41:42,c),v=Math.max(0,1-p*1.35),g=$(Math.floor(l/c),Math.floor(i/c),r+4);d+=(g-.5)*40+v*16,h+=(g-.5)*32+v*12,x+=(g-.5)*24+v*8,S=v*.85}else if(r===E.road){const c=Math.abs(l%32/32*2-1),p=Z(l/14,i/8,51,T,2);d-=c*18+(p-.5)*10,h-=c*16,x-=c*12,S=-c*.25+(p-.5)*.1}else if(r===E.mud){const c=Z(l/20,i/20,61,T,3);d-=c*30,h-=c*24,x-=c*16,S=(c-.5)*.12}else if(r===E.sand){const c=Math.sin((l*.45+Z(l/12,i/12,71,T,2)*6)*.7),p=Z(l/2.5,i/2.5,72,T,2);d+=c*8+(p-.5)*14,h+=c*6+(p-.5)*10,x+=(p-.5)*8,S=c*.18+(p-.5)*.2}else{const c=(Math.floor(i/16)+Math.floor(l/64))%2===0?6:-4,p=Z(l/6,i/6,81,T,2);d+=c-p*8,h+=c-p*8,x+=c-p*6,S=c*.01-p*.15}t[m*3]=Y(d),t[m*3+1]=Y(h),t[m*3+2]=Y(x),s[m]=S}return{rgb:t,height:s}}function Le(r,e,t){const s=e%at,a=Math.floor(e/at),o=s*I,n=a*I;for(let f=0;f<I;f++){const i=(f-W+T)%T;for(let l=0;l<I;l++){const m=(l-W+T)%T,d=((n+f)*L+(o+l))*4,h=(i*T+m)*3;r[d]=t.rgb[h],r[d+1]=t.rgb[h+1],r[d+2]=t.rgb[h+2],r[d+3]=255}}}function Ze(){const r=new Uint8Array(L*L*4),e=new Uint8Array(L*L*4);e.fill(128);for(let t=3;t<e.length;t+=4)e[t]=255;for(let t=0;t<=E.concrete;t++){const s=Ne(t);Le(r,t,s),$e(e,t,s)}return{albedo:r,normal:e,size:L}}function $e(r,e,t){const s=e%at,a=Math.floor(e/at),o=s*I,n=a*I,f=(i,l)=>{const m=(i+T)%T,d=(l+T)%T,h=t.height[d*T+(m-1+T)%T],x=t.height[d*T+(m+1)%T],S=t.height[(d-1+T)%T*T+m],c=t.height[(d+1)%T*T+m];let p=(h-x)*1.15,v=(S-c)*1.15,g=1;const b=Math.hypot(p,v,g)||1;return[p/b,v/b,g/b]};for(let i=0;i<I;i++){const l=i-W;for(let m=0;m<I;m++){const d=m-W,[h,x,S]=f(d,l),c=((n+i)*L+(o+m))*4;r[c]=Y(h*127+128),r[c+1]=Y(x*127+128),r[c+2]=Y(S*127+128),r[c+3]=255}}}function tt(r){const[e,t,s]=Nt[r];return`vec3(${e.toFixed(3)}, ${t.toFixed(3)}, ${s.toFixed(3)})`}function We(){return`
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
  float t = clamp((${ft.toFixed(2)} - ny) / ${(ft-kt).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
vec3 tfStrata(float tone) {
  vec3 c0 = ${tt(0)};
  vec3 c1 = ${tt(1)};
  vec3 c2 = ${tt(2)};
  vec3 c3 = ${tt(3)};
  vec3 c4 = ${tt(4)};
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
  vec2 local = fract(uv) * ${T}.0 + ${W}.0;
  vec2 px = vec2(col, row) * ${I}.0 + local;
  return texture2D(tex, px / ${L}.0).rgb;
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
`}function Ue(){return`
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
`}function Xe(){return`
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
  let t = clamp((${ft.toFixed(2)} - ny) / ${(ft-kt).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
fn tfStrata(tone: f32) -> vec3f {
  var s = ${et(0)};
  s = mix(s, ${et(1)}, step(0.5, tone));
  s = mix(s, ${et(2)}, step(1.5, tone));
  s = mix(s, ${et(3)}, step(2.5, tone));
  s = mix(s, ${et(4)}, step(3.5, tone));
  return s;
}
fn tfAtlas(tex: texture_2d<f32>, samp: sampler, slot: f32, uv: vec2f) -> vec3f {
  let col = slot - 4.0 * floor(slot / 4.0);
  let row = floor(slot / 4.0);
  let local = fract(uv) * ${T}.0 + ${W}.0;
  let px = vec2f(col, row) * ${I}.0 + local;
  return textureSample(tex, samp, px / ${L}.0).rgb;
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
`}function et(r){const[e,t,s]=Nt[r];return`vec3f(${e.toFixed(3)}, ${t.toFixed(3)}, ${s.toFixed(3)})`}function He(){return`
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
`}function nt(r,e,t,s){const a=zt(`maps/twin-ridges/${e}`),o=new N(a,r,!1,!1,N.TRILINEAR_SAMPLINGMODE,()=>t(),n=>{const f=typeof n=="string"?n:e;console.error(`Terrain texture failed: ${a}`,f),s(f)});return o.wrapU=N.CLAMP_ADDRESSMODE,o.wrapV=N.CLAMP_ADDRESSMODE,o.anisotropicFilteringLevel=8,o}class je extends xe{mapW=1536;mapH=1024;splat0;splat1;splat2;tracks;detail;detailNrm;constructor(e,t){super(e,"TerrainSplat",200,{TERRAIN_SPLAT:!1},!0,!1),this.registerForExtraEvents=!0,this._enable(!0);const s=Ze(),a=N.LINEAR_LINEAR;this.detail=ut.CreateRGBATexture(s.albedo,s.size,s.size,t,!1,!1,a),this.detailNrm=ut.CreateRGBATexture(s.normal,s.size,s.size,t,!1,!1,a),this.detail.wrapU=N.CLAMP_ADDRESSMODE,this.detail.wrapV=N.CLAMP_ADDRESSMODE,this.detailNrm.wrapU=N.CLAMP_ADDRESSMODE,this.detailNrm.wrapV=N.CLAMP_ADDRESSMODE;const o=new Uint8Array(4*4*4);o.fill(128);const n=()=>ut.CreateRGBATexture(o,4,4,t,!1,!1,N.NEAREST_SAMPLINGMODE);this.splat0=n(),this.splat1=n(),this.splat2=n(),this.tracks=n()}isCompatible(){return!0}getClassName(){return"TerrainSplatPlugin"}prepareDefines(e){e.TERRAIN_SPLAT||(e.TERRAIN_SPLAT=!0,e.markAsUnprocessed())}getSamplers(e){e.push("splat0Sampler","splat1Sampler","splat2Sampler","tracksSampler","detailSampler","detailNrmSampler")}getUniforms(e=rt.GLSL){return{ubo:[{name:"mapSize",size:2,type:"vec2"}],fragment:e===rt.WGSL?void 0:`#ifdef TERRAIN_SPLAT
uniform vec2 mapSize;
#endif
`}}bindForSubMesh(e){this.bindSplats(e)}hardBindForSubMesh(e){this.bindSplats(e)}bindSplats(e){e.updateFloat2("mapSize",this.mapW,this.mapH),e.setTexture("splat0Sampler",this.splat0),e.setTexture("splat1Sampler",this.splat1),e.setTexture("splat2Sampler",this.splat2),e.setTexture("tracksSampler",this.tracks),e.setTexture("detailSampler",this.detail),e.setTexture("detailNrmSampler",this.detailNrm)}getCustomCode(e,t=rt.GLSL){if(e!=="fragment")return null;const s=t===rt.WGSL;return{CUSTOM_FRAGMENT_DEFINITIONS:s?Xe():We(),CUSTOM_FRAGMENT_UPDATE_DIFFUSE:s?He():Ue()}}}function Ye(r,e,t){const s=new U("terrain",r);s.diffuseColor.set(1,1,1),s.specularColor.set(.04,.04,.035),s.specularPower=24;const a=new je(s,r);a.mapW=e,a.mapH=t,s.onError=(n,f)=>{console.error(f),document.documentElement.dataset.terrain="shader-error"};const o=new Promise(n=>{let f=4;const i=()=>{f-=1,f===0&&n()},l=m=>{console.error("terrain map texture",m),document.documentElement.dataset.terrain="texture-error",i()};a.splat0=nt(r,"splat_0_grass_scrub_rock_scree.png",i,l),a.splat1=nt(r,"splat_1_gravel_road_mud_sand.png",i,l),a.splat2=nt(r,"splat_2_water_concrete_wetness_strata.png",i,l),a.tracks=nt(r,"tracks_mask.png",i,l)});return{material:s,ready:o}}const it=6;function st(r,e,t){let s=Math.imul(r,374761393)^Math.imul(e,668265263)^Math.imul(t,1442695041);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function qe(r){return new Promise((e,t)=>{const s=new Image;s.onload=()=>e(s),s.onerror=()=>t(new Error(r)),s.src=r})}function Ft(r,e,t){const s=P.CreateIcoSphere(e,{radius:.55,subdivisions:1,flat:!1},r);s.position.y=.5,s.bakeCurrentTransformIntoVertices(),s.position.set(0,0,0);const a=new U(`${e}-mat`,r);return a.diffuseColor=t,a.specularColor=_.Black(),s.material=a,s.isPickable=!1,s.alwaysSelectAsActiveMesh=!0,s.receiveShadows=!1,s}async function Ke(r,e,t,s,a,o){const n=zt("maps/twin-ridges/vegetation_canopy_height_dm.png"),f=await qe(n).catch(b=>{throw console.error(`Terrain canopy missing: ${n}`,b),b}),i=document.createElement("canvas");i.width=f.width,i.height=f.height;const l=i.getContext("2d",{willReadFrequently:!0});if(!l)return;l.drawImage(f,0,0);const m=l.getImageData(0,0,f.width,f.height).data,d=Ft(r,"shrub",new _(.34,.4,.22)),h=Ft(r,"tree",new _(.22,.32,.16)),x=[],S=[],c=new z,p=new gt,v=new z,g=new dt;for(let b=0;b<f.height;b+=it)for(let y=0;y<f.width;y+=it){const u=m[(b*f.width+y)*4];if(u<6)continue;const A=(st(y,b,2)-.5)*it*.7,O=(st(y,b,4)-.5)*it*.7,G=Math.max(0,Math.min(t*a-.01,y+.5+A)),C=Math.max(0,Math.min(s*a-.01,b+.5+O)),F=Et(e,t,s,a,G,C);if(F<o+.4)continue;const D=u/10,w=D>=2.6,V=w?.7+D*.28:.45+D*.55;c.set(V*(.85+st(y,b,6)*.3),V*(w?1.15:.75),V*(.85+st(y,b,8)*.3)),gt.RotationAxisToRef(z.Up(),st(y,b,9)*Math.PI*2,p),v.set(G,F,C),dt.ComposeToRef(c,p,v,g);const K=w?S:x,vt=K.length;K.length=vt+16,g.copyToArray(K,vt)}x.length?d.thinInstanceSetBuffer("matrix",new Float32Array(x),16,!0):d.setEnabled(!1),S.length?h.thinInstanceSetBuffer("matrix",new Float32Array(S),16,!0):h.setEnabled(!1)}function us(r,e,t,s,a,o,n,f){const i=Ve(e,t,s,a),l=new ct("terrain",r),m=new j;m.positions=i.positions,m.indices=i.indices;const d=new Float32Array(i.positions.length);j.ComputeNormals(i.positions,i.indices,d),m.normals=d,m.applyToMesh(l),l.useVertexColors=!1,l.alwaysSelectAsActiveMesh=!0;const{material:h,ready:x}=Ye(r,o,n);l.material=h,document.documentElement.dataset.relief=`${i.minY.toFixed(1)}..${i.maxY.toFixed(1)}`,document.documentElement.dataset.terrain="loading";const S=x.then(()=>Ke(r,e,t,s,a,f)).then(()=>{const c=document.documentElement.dataset.terrain;c!=="shader-error"&&c!=="texture-error"&&(document.documentElement.dataset.terrain="ready")}).catch(c=>{console.error(c),document.documentElement.dataset.terrain="error"});return{mesh:l,ready:S}}function ms(r){const e=new U("water",r);return e.diffuseColor=new _(.4,.5,.42),e.specularColor=new _(.34,.38,.34),e.specularPower=48,e.alpha=.62,e}export{be as E,P as M,Nt as S,ss as a,xt as b,cs as c,us as d,hs as e,St as f,Et as g,es as h,is as i,rs as j,ns as k,ls as l,os as m,as as n,Te as o,fs as p,Ee as s,ms as w};
