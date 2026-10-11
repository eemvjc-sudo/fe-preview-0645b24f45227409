import{f as R,V as z,a1 as M,a2 as zt,a3 as ht,a4 as Ct,a5 as Gt,a6 as lt,C as Rt,a7 as K,a8 as Et,a9 as Pt,aa as It,ab as Vt,ac as kt,ad as Nt,ae as Lt,af as Zt,ag as Ut,ah as $t,ai as Xt,aj as Wt,ak as jt,al as Ht,am as Yt,an as qt,ao as Kt,ap as Qt,aq as Jt,ar as te,as as ee,at as se,au as ae,av as re,aw as oe,ax as ne,ay as ie,az as J,j as G,aA as mt,aB as le,aC as k,aD as ot,aE as dt,M as ut,aF as pt}from"./nativeXRFrame-DRjCS-KP.js";import{_ as fe,p as Bt}from"./index-B1Kjna6q.js";import{_ as St}from"./__vite-browser-external-Co-y09TH.js";class w{constructor(e=0,t=0){this.x=e,this.y=t,e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("x is not an integer, floor(x) used")),t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("y is not an integer, floor(y) used"))}clone(){return new w(this.x,this.y)}rotate60About(e){const t=this.x;return this.x=e.x+e.y-this.y,this.y=t+this.y-e.x,this}rotateNeg60About(e){const t=this.x;return this.x=t+this.y-e.y,this.y=e.x+e.y-t,this}rotate120(e,t){e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("m not an integer only floor(m) used")),t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("n not an integer only floor(n) used"));const s=this.x;return this.x=e-s-this.y,this.y=t+s,this}rotateNeg120(e,t){e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("m is not an integer, floor(m) used")),t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("n is not an integer,   floor(n) used"));const s=this.x;return this.x=this.y-t,this.y=e+t-s-this.y,this}toCartesianOrigin(e,t){const s=z.Zero();return s.x=e.x+2*this.x*t+this.y*t,s.y=e.y+Math.sqrt(3)*this.y*t,s}static Zero(){return new w(0,0)}}class Tt{constructor(){this.cartesian=[],this.vertices=[],this.max=[],this.min=[],this.closestTo=[],this.innerFacets=[],this.isoVecsABOB=[],this.isoVecsOBOA=[],this.isoVecsBAOA=[],this.vertexTypes=[],this.IDATA=new nt("icosahedron","Regular",[[0,M,-1],[-M,1,0],[-1,0,-M],[1,0,-M],[M,1,0],[0,M,1],[-1,0,M],[-M,-1,0],[0,-M,-1],[M,-1,0],[1,0,M],[0,-M,1]],[[0,2,1],[0,3,2],[0,4,3],[0,5,4],[0,1,5],[7,6,1],[8,7,2],[9,8,3],[10,9,4],[6,10,5],[2,7,1],[3,8,2],[4,9,3],[5,10,4],[1,6,5],[11,6,7],[11,7,8],[11,8,9],[11,9,10],[11,10,6]])}setIndices(){let e=12;const t={},s=this.m,a=this.n;let n=s,r=1,l=0;a!==0&&(n=ht(s,a)),r=s/n,l=a/n;let i,f,d,p,u;const x=w.Zero(),S=new w(s,a),c=new w(-a,s+a),m=w.Zero(),A=w.Zero(),b=w.Zero();let g=[],y,h,v,O;const F=[],C=this.vertByDist,_=(D,T,V,W)=>{y=D+"|"+V,h=T+"|"+W,y in t||h in t?y in t&&!(h in t)?t[h]=t[y]:h in t&&!(y in t)&&(t[y]=t[h]):(t[y]=e,t[h]=e,e++),C[V][0]>2?F[t[y]]=[-C[V][0],C[V][1],t[y]]:F[t[y]]=[g[C[V][0]],C[V][1],t[y]]};this.IDATA.edgematch=[[1,"B"],[2,"B"],[3,"B"],[4,"B"],[0,"B"],[10,"O",14,"A"],[11,"O",10,"A"],[12,"O",11,"A"],[13,"O",12,"A"],[14,"O",13,"A"],[0,"O"],[1,"O"],[2,"O"],[3,"O"],[4,"O"],[19,"B",5,"A"],[15,"B",6,"A"],[16,"B",7,"A"],[17,"B",8,"A"],[18,"B",9,"A"]];for(let D=0;D<20;D++){if(g=this.IDATA.face[D],d=g[2],p=g[1],u=g[0],v=x.x+"|"+x.y,y=D+"|"+v,y in t||(t[y]=d,F[d]=[g[C[v][0]],C[v][1]]),v=S.x+"|"+S.y,y=D+"|"+v,y in t||(t[y]=p,F[p]=[g[C[v][0]],C[v][1]]),v=c.x+"|"+c.y,y=D+"|"+v,y in t||(t[y]=u,F[u]=[g[C[v][0]],C[v][1]]),i=this.IDATA.edgematch[D][0],f=this.IDATA.edgematch[D][1],f==="B")for(let T=1;T<n;T++)A.x=s-T*(r+l),A.y=a+T*r,b.x=-T*l,b.y=T*(r+l),v=A.x+"|"+A.y,O=b.x+"|"+b.y,_(D,i,v,O);if(f==="O")for(let T=1;T<n;T++)b.x=-T*l,b.y=T*(r+l),m.x=T*r,m.y=T*l,v=b.x+"|"+b.y,O=m.x+"|"+m.y,_(D,i,v,O);if(i=this.IDATA.edgematch[D][2],f=this.IDATA.edgematch[D][3],f&&f==="A")for(let T=1;T<n;T++)m.x=T*r,m.y=T*l,A.x=s-(n-T)*(r+l),A.y=a+(n-T)*r,v=m.x+"|"+m.y,O=A.x+"|"+A.y,_(D,i,v,O);for(let T=0;T<this.vertices.length;T++)v=this.vertices[T].x+"|"+this.vertices[T].y,y=D+"|"+v,y in t||(t[y]=e++,C[v][0]>2?F[t[y]]=[-C[v][0],C[v][1],t[y]]:F[t[y]]=[g[C[v][0]],C[v][1],t[y]])}this.closestTo=F,this.vecToidx=t}calcCoeffs(){const e=this.m,t=this.n,s=Math.sqrt(3)/3,a=e*e+t*t+e*t;this.coau=(e+t)/a,this.cobu=-t/a,this.coav=-s*(e-t)/a,this.cobv=s*(2*e+t)/a}createInnerFacets(){const e=this.m,t=this.n;for(let s=0;s<t+e+1;s++)for(let a=this.min[s];a<this.max[s]+1;a++)a<this.max[s]&&a<this.max[s+1]+1&&this.innerFacets.push(["|"+a+"|"+s,"|"+a+"|"+(s+1),"|"+(a+1)+"|"+s]),s>0&&a<this.max[s-1]&&a+1<this.max[s]+1&&this.innerFacets.push(["|"+a+"|"+s,"|"+(a+1)+"|"+s,"|"+(a+1)+"|"+(s-1)])}edgeVecsABOB(){const e=this.m,t=this.n,s=new w(-t,e+t);for(let a=1;a<e+t;a++){const n=new w(this.min[a],a),r=new w(this.min[a-1],a-1),l=new w(this.min[a+1],a+1),i=n.clone(),f=r.clone(),d=l.clone();i.rotate60About(s),f.rotate60About(s),d.rotate60About(s);const p=new w(this.max[i.y],i.y),u=new w(this.max[i.y-1],i.y-1),x=new w(this.max[i.y-1]-1,i.y-1);(i.x!==p.x||i.y!==p.y)&&(i.x!==u.x?(this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([n,u,x]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([n,x,p])):i.y===d.y?(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([n,r,u]),this.vertexTypes.push([1,0,1]),this.isoVecsABOB.push([n,u,l])):(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([n,r,u]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([n,u,p])))}}mapABOBtoOBOA(){const e=new w(0,0);for(let t=0;t<this.isoVecsABOB.length;t++){const s=[];for(let a=0;a<3;a++)e.x=this.isoVecsABOB[t][a].x,e.y=this.isoVecsABOB[t][a].y,this.vertexTypes[t][a]===0&&e.rotateNeg120(this.m,this.n),s.push(e.clone());this.isoVecsOBOA.push(s)}}mapABOBtoBAOA(){const e=new w(0,0);for(let t=0;t<this.isoVecsABOB.length;t++){const s=[];for(let a=0;a<3;a++)e.x=this.isoVecsABOB[t][a].x,e.y=this.isoVecsABOB[t][a].y,this.vertexTypes[t][a]===1&&e.rotate120(this.m,this.n),s.push(e.clone());this.isoVecsBAOA.push(s)}}MapToFace(e,t){const s=this.IDATA.face[e],a=s[2],n=s[1],r=s[0],l=z.FromArray(this.IDATA.vertex[a]),i=z.FromArray(this.IDATA.vertex[n]),f=z.FromArray(this.IDATA.vertex[r]),d=i.subtract(l),p=f.subtract(l),u=d.scale(this.coau).add(p.scale(this.cobu)),x=d.scale(this.coav).add(p.scale(this.cobv));let S,c=zt.Vector3[0];for(let m=0;m<this.cartesian.length;m++)c=u.scale(this.cartesian[m].x).add(x.scale(this.cartesian[m].y)).add(l),c.x,c.y,c.z,S=e+"|"+this.vertices[m].x+"|"+this.vertices[m].y,t.vertex[this.vecToidx[S]]=[c.x,c.y,c.z]}build(e,t){const s=[],a=w.Zero(),n=new w(e,t),r=new w(-t,e+t);s.push(a,n,r);for(let h=t;h<e+1;h++)for(let v=0;v<e+1-h;v++)s.push(new w(v,h));if(t>0){const h=ht(e,t),v=e/h,O=t/h;for(let C=1;C<h;C++)s.push(new w(C*v,C*O)),s.push(new w(-C*O,C*(v+O))),s.push(new w(e-C*(v+O),t+C*v));const F=e/t;for(let C=1;C<t;C++)for(let _=0;_<C*F;_++)s.push(new w(_,C)),s.push(new w(_,C).rotate120(e,t)),s.push(new w(_,C).rotateNeg120(e,t))}s.sort((h,v)=>h.x-v.x),s.sort((h,v)=>h.y-v.y);const l=new Array(e+t+1),i=new Array(e+t+1);for(let h=0;h<l.length;h++)l[h]=1/0,i[h]=-1/0;let f=0,d=0;const p=s.length;for(let h=0;h<p;h++)d=s[h].x,f=s[h].y,l[f]=Math.min(d,l[f]),i[f]=Math.max(d,i[f]);const u=(h,v)=>{const O=h.clone();return v==="A"&&O.rotateNeg120(e,t),v==="B"&&O.rotate120(e,t),O.x<0?O.y:O.x+O.y},x=[],S=[],c=[],m=[],A={},b=[];let g=-1,y=-1;for(let h=0;h<p;h++)x[h]=s[h].toCartesianOrigin(new w(0,0),.5),S[h]=u(s[h],"O"),c[h]=u(s[h],"A"),m[h]=u(s[h],"B"),S[h]===c[h]&&c[h]===m[h]?(g=3,y=S[h]):S[h]===c[h]?(g=4,y=S[h]):c[h]===m[h]?(g=5,y=c[h]):m[h]===S[h]&&(g=6,y=S[h]),S[h]<c[h]&&S[h]<m[h]&&(g=2,y=S[h]),c[h]<S[h]&&c[h]<m[h]&&(g=1,y=c[h]),m[h]<c[h]&&m[h]<S[h]&&(g=0,y=m[h]),b.push([g,y,s[h].x,s[h].y]);b.sort((h,v)=>h[2]-v[2]),b.sort((h,v)=>h[3]-v[3]),b.sort((h,v)=>h[1]-v[1]),b.sort((h,v)=>h[0]-v[0]);for(let h=0;h<b.length;h++)A[b[h][2]+"|"+b[h][3]]=[b[h][0],b[h][1],h];return this.m=e,this.n=t,this.vertices=s,this.vertByDist=A,this.cartesian=x,this.min=l,this.max=i,this}}class nt{constructor(e,t,s,a){this.name=e,this.category=t,this.vertex=s,this.face=a}}class rt extends nt{innerToData(e,t){for(let s=0;s<t.innerFacets.length;s++)this.face.push(t.innerFacets[s].map(a=>t.vecToidx[e+a]))}mapABOBtoDATA(e,t){const s=t.IDATA.edgematch[e][0];for(let a=0;a<t.isoVecsABOB.length;a++){const n=[];for(let r=0;r<3;r++)t.vertexTypes[a][r]===0?n.push(e+"|"+t.isoVecsABOB[a][r].x+"|"+t.isoVecsABOB[a][r].y):n.push(s+"|"+t.isoVecsABOB[a][r].x+"|"+t.isoVecsABOB[a][r].y);this.face.push([t.vecToidx[n[0]],t.vecToidx[n[1]],t.vecToidx[n[2]]])}}mapOBOAtoDATA(e,t){const s=t.IDATA.edgematch[e][0];for(let a=0;a<t.isoVecsOBOA.length;a++){const n=[];for(let r=0;r<3;r++)t.vertexTypes[a][r]===1?n.push(e+"|"+t.isoVecsOBOA[a][r].x+"|"+t.isoVecsOBOA[a][r].y):n.push(s+"|"+t.isoVecsOBOA[a][r].x+"|"+t.isoVecsOBOA[a][r].y);this.face.push([t.vecToidx[n[0]],t.vecToidx[n[1]],t.vecToidx[n[2]]])}}mapBAOAtoDATA(e,t){const s=t.IDATA.edgematch[e][2];for(let a=0;a<t.isoVecsBAOA.length;a++){const n=[];for(let r=0;r<3;r++)t.vertexTypes[a][r]===1?n.push(e+"|"+t.isoVecsBAOA[a][r].x+"|"+t.isoVecsBAOA[a][r].y):n.push(s+"|"+t.isoVecsBAOA[a][r].x+"|"+t.isoVecsBAOA[a][r].y);this.face.push([t.vecToidx[n[0]],t.vecToidx[n[1]],t.vecToidx[n[2]]])}}orderData(e){const t=[];for(let r=0;r<13;r++)t[r]=[];const s=e.closestTo;for(let r=0;r<s.length;r++)s[r][0]>-1?s[r][1]>0&&t[s[r][0]].push([r,s[r][1]]):t[12].push([r,s[r][0]]);const a=[];for(let r=0;r<12;r++)a[r]=r;let n=12;for(let r=0;r<12;r++){t[r].sort((l,i)=>l[1]-i[1]);for(let l=0;l<t[r].length;l++)a[t[r][l][0]]=n++}for(let r=0;r<t[12].length;r++)a[t[12][r][0]]=n++;for(let r=0;r<this.vertex.length;r++)this.vertex[r].push(a[r]);this.vertex.sort((r,l)=>r[3]-l[3]);for(let r=0;r<this.vertex.length;r++)this.vertex[r].pop();for(let r=0;r<this.face.length;r++)for(let l=0;l<this.face[r].length;l++)this.face[r][l]=a[this.face[r][l]];this.sharedNodes=t[12].length,this.poleNodes=this.vertex.length-this.sharedNodes}setOrder(e,t){const s=[],a=[];let n=t.pop();a.push(n);let r=this.face[n].indexOf(e);r=(r+2)%3;let l=this.face[n][r];s.push(l);let i=0;for(;t.length>0;)n=t[i],this.face[n].indexOf(l)>-1?(r=(this.face[n].indexOf(l)+1)%3,l=this.face[n][r],s.push(l),a.push(n),t.splice(i,1),i=0):i++;return this.adjacentFaces.push(s),a}toGoldbergPolyhedronData(){const e=new nt("GeoDual","Goldberg",[],[]);e.name="GD dual";const t=this.vertex.length,s=new Array(t);for(let f=0;f<t;f++)s[f]=[];for(let f=0;f<this.face.length;f++)for(let d=0;d<3;d++)s[this.face[f][d]].push(f);let a=0,n=0,r=0,l=[],i=[];this.adjacentFaces=[];for(let f=0;f<s.length;f++)e.face[f]=this.setOrder(f,s[f].concat([])),s[f].forEach(d=>{a=0,n=0,r=0,l=this.face[d];for(let p=0;p<3;p++)i=this.vertex[l[p]],a+=i[0],n+=i[1],r+=i[2];e.vertex[d]=[a/3,n/3,r/3]});return e}static BuildGeodesicData(e){const t=new rt("Geodesic-m-n","Geodesic",[[0,M,-1],[-M,1,0],[-1,0,-M],[1,0,-M],[M,1,0],[0,M,1],[-1,0,M],[-M,-1,0],[0,-M,-1],[M,-1,0],[1,0,M],[0,-M,1]],[]);e.setIndices(),e.calcCoeffs(),e.createInnerFacets(),e.edgeVecsABOB(),e.mapABOBtoOBOA(),e.mapABOBtoBAOA();for(let a=0;a<e.IDATA.face.length;a++)e.MapToFace(a,t),t.innerToData(a,e),e.IDATA.edgematch[a][1]==="B"&&t.mapABOBtoDATA(a,e),e.IDATA.edgematch[a][1]==="O"&&t.mapOBOAtoDATA(a,e),e.IDATA.edgematch[a][3]==="A"&&t.mapBAOAtoDATA(a,e);t.orderData(e);const s=1;return t.vertex=t.vertex.map(function(a){const n=a[0],r=a[1],l=a[2],i=Math.sqrt(n*n+r*r+l*l);return a[0]*=s/i,a[1]*=s/i,a[2]*=s/i,a}),t}}function ce(o,e,t=null){let s=e.m||1;s!==Math.floor(s)&&(s=Math.floor(s),R.Warn("m not an integer only floor(m) used"));let a=e.n||0;if(a!==Math.floor(a)&&(a=Math.floor(a),R.Warn("n not an integer only floor(n) used")),a>s){const f=a;a=s,s=f,R.Warn("n > m therefore m and n swapped")}const n=new Tt;n.build(s,a);const l={custom:rt.BuildGeodesicData(n),size:e.size,sizeX:e.sizeX,sizeY:e.sizeY,sizeZ:e.sizeZ,faceUV:e.faceUV,faceColors:e.faceColors,flat:e.flat,updatable:e.updatable,sideOrientation:e.sideOrientation,frontUVs:e.frontUVs,backUVs:e.backUVs};return Ct(o,l,t)}function he(o,e){const t=o.size,s=o.sizeX||t||1,a=o.sizeY||t||1,n=o.sizeZ||t||1,r=o.sideOrientation===0?0:o.sideOrientation||K.DEFAULTSIDE,l=[],i=[],f=[],d=[];let p=1/0,u=-1/0,x=1/0,S=-1/0;for(let A=0;A<e.vertex.length;A++)p=Math.min(p,e.vertex[A][0]*s),u=Math.max(u,e.vertex[A][0]*s),x=Math.min(x,e.vertex[A][1]*a),S=Math.max(S,e.vertex[A][1]*a);let c=0;for(let A=0;A<e.face.length;A++){const b=e.face[A],g=z.FromArray(e.vertex[b[0]]),y=z.FromArray(e.vertex[b[2]]),h=z.FromArray(e.vertex[b[1]]),v=y.subtract(g),O=h.subtract(g),F=z.Cross(O,v).normalize();for(let C=0;C<b.length;C++){f.push(F.x,F.y,F.z);const _=e.vertex[b[C]];l.push(_[0]*s,_[1]*a,_[2]*n);const D=(_[1]*a-x)/(S-x);d.push((_[0]*s-p)/(u-p),D)}for(let C=0;C<b.length-2;C++)i.push(c,c+C+2,c+C+1);c+=b.length}K._ComputeSides(r,l,i,f,d);const m=new K;return m.positions=l,m.indices=i,m.normals=f,m.uvs=d,m}function me(o,e,t=null){const s=e.size,a=e.sizeX||s||1,n=e.sizeY||s||1,r=e.sizeZ||s||1;let l=e.m||1;l!==Math.floor(l)&&(l=Math.floor(l),R.Warn("m not an integer only floor(m) used"));let i=e.n||0;if(i!==Math.floor(i)&&(i=Math.floor(i),R.Warn("n not an integer only floor(n) used")),i>l){const S=i;i=l,l=S,R.Warn("n > m therefore m and n swapped")}const f=new Tt;f.build(l,i);const d=rt.BuildGeodesicData(f),p=d.toGoldbergPolyhedronData(),u=new Gt(o,t);e.sideOrientation=lt._GetDefaultSideOrientation(e.sideOrientation),u._originalBuilderSideOrientation=e.sideOrientation,he(e,p).applyToMesh(u,e.updatable),u.goldbergData.nbSharedFaces=d.sharedNodes,u.goldbergData.nbUnsharedFaces=d.poleNodes,u.goldbergData.adjacentFaces=d.adjacentFaces,u.goldbergData.nbFaces=u.goldbergData.nbSharedFaces+u.goldbergData.nbUnsharedFaces,u.goldbergData.nbFacesAtPole=(u.goldbergData.nbUnsharedFaces-12)/12;for(let S=0;S<d.vertex.length;S++)u.goldbergData.faceCenters.push(z.FromArray(d.vertex[S])),u.goldbergData.faceCenters[S].x*=a,u.goldbergData.faceCenters[S].y*=n,u.goldbergData.faceCenters[S].z*=r,u.goldbergData.faceColors.push(new Rt(1,1,1,1));for(let S=0;S<p.face.length;S++){const c=p.face[S],m=z.FromArray(p.vertex[c[0]]),A=z.FromArray(p.vertex[c[2]]),b=z.FromArray(p.vertex[c[1]]),g=A.subtract(m),y=b.subtract(m),h=z.Cross(y,g).normalize(),v=z.Cross(y,h).normalize();u.goldbergData.faceXaxis.push(y.normalize()),u.goldbergData.faceYaxis.push(h),u.goldbergData.faceZaxis.push(v)}return u}const P={CreateBox:ne,CreateTiledBox:oe,CreateSphere:re,CreateDisc:ae,CreateIcoSphere:se,CreateRibbon:ee,CreateCylinder:te,CreateTorus:Jt,CreateTorusKnot:Qt,CreateLineSystem:Kt,CreateLines:qt,CreateDashedLines:Yt,ExtrudeShape:Ht,ExtrudeShapeCustom:jt,CreateLathe:Wt,CreateTiledPlane:Xt,CreatePlane:$t,CreateGround:Et,CreateTiledGround:Ut,CreateGroundFromHeightMap:Zt,CreatePolygon:Lt,ExtrudePolygon:Nt,CreateTube:kt,CreatePolyhedron:Ct,CreateGeodesic:ce,CreateGoldberg:me,CreateDecal:Vt,CreateCapsule:It,CreateText:Pt};class de{get gpuFrameTimeCounter(){return this.engine.getGPUFrameTimeCounter()}get captureGPUFrameTime(){return this._captureGPUFrameTime}set captureGPUFrameTime(e){e!==this._captureGPUFrameTime&&(this._captureGPUFrameTime=e,this.engine.captureGPUFrameTime(e))}get shaderCompilationTimeCounter(){return this._shaderCompilationTime}get captureShaderCompilationTime(){return this._captureShaderCompilationTime}set captureShaderCompilationTime(e){e!==this._captureShaderCompilationTime&&(this._captureShaderCompilationTime=e,e?(this._onBeforeShaderCompilationObserver=this.engine.onBeforeShaderCompilationObservable.add(()=>{this._shaderCompilationTime.fetchNewFrame(),this._shaderCompilationTime.beginMonitoring()}),this._onAfterShaderCompilationObserver=this.engine.onAfterShaderCompilationObservable.add(()=>{this._shaderCompilationTime.endMonitoring()})):(this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null))}constructor(e){this.engine=e,this._captureGPUFrameTime=!1,this._captureShaderCompilationTime=!1,this._shaderCompilationTime=new ie,this._onBeginFrameObserver=null,this._onEndFrameObserver=null,this._onBeforeShaderCompilationObserver=null,this._onAfterShaderCompilationObserver=null}dispose(){this.engine.onBeginFrameObservable.remove(this._onBeginFrameObserver),this._onBeginFrameObserver=null,this.engine.onEndFrameObservable.remove(this._onEndFrameObserver),this._onEndFrameObserver=null,this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null,this.engine=null}}const xt=[],ue=typeof performance<"u"?performance.now():0;function ft(o,e){const t={name:o,ms:Math.round(e*10)/10,at:Math.round((performance.now()-ue)*10)/10};xt.push(t),globalThis.__boot=xt}async function Ve(o,e){const t=performance.now();try{return await e()}finally{ft(o,performance.now()-t)}}function ke(o,e){const t=performance.now();try{return e()}finally{ft(o,performance.now()-t)}}function Ne(o,e){const t=new de(o);t.captureShaderCompilationTime=!0;const s=o.onEndFrameObservable.add(()=>{ft(e,t.shaderCompilationTimeCounter.total),o.onEndFrameObservable.remove(s),t.dispose()})}const pe=new Map,vt=[{body:new G(.77,.38,.18),accent:new G(.96,.77,.09)},{body:new G(.9,.84,.76),accent:new G(.12,.54,.54)},{body:new G(.95,.96,.97),accent:new G(.18,.36,1)},{body:new G(.36,.24,.54),accent:new G(.24,.86,.48)}];function it(o,e,t=!1){const s=`mat-${e}-${t?"a":"b"}`,a=o.getMaterialByName(s);if(a)return a;const n=new J(s,o),r=vt[e]??vt[0];return n.diffuseColor=t?r.accent:r.body,n.specularColor=G.Black(),n}function Le(o,e,t,s){const a=pe.get(e);if(a){const r=a(o);return r.material=it(o,t,s===0),r.isPickable=!1,r}let n;return s===9?n=P.CreateBox(e,{width:1.7,height:1.1,depth:1.7},o):s===3?n=P.CreateBox(e,{width:8,height:2.4,depth:8},o):s===8?n=P.CreateBox(e,{width:1.6,height:3.2,depth:1.6},o):s>=4&&s<=10?n=P.CreateBox(e,{width:2.4,height:1.3,depth:2.4},o):t===1?n=P.CreateCylinder(e,{diameterTop:.12,diameterBottom:1.15,height:.7,tessellation:3},o):t===2?n=P.CreateCylinder(e,{diameterTop:.35,diameterBottom:.85,height:1.7,tessellation:5},o):t===3?n=P.CreateBox(e,{width:1.7,height:.42,depth:1.05},o):n=P.CreateBox(e,{width:.95,height:.72,depth:1.15},o),n.material=it(o,t,s===0||s===8),n.isPickable=!1,n.alwaysSelectAsActiveMesh=!0,n}function Ze(o,e){const t=P.CreateBox(`shell-${e}`,{size:.35},o);return t.material=it(o,e,!0),t.isPickable=!1,t.alwaysSelectAsActiveMesh=!0,t}let At=null;function Ue(){return At??=(async()=>{if(typeof window>"u"){const{readFileSync:o}=await fe(async()=>{const{readFileSync:t}=await import("./__vite-browser-external-Co-y09TH.js").then(s=>s.a);return{readFileSync:t}},[],import.meta.url);await St({module_or_path:o(new URL(""+new URL("sim_bg-CjyWGt6D.wasm",import.meta.url).href,import.meta.url))});return}await St()})(),At}function wt(o,e,t,s,a,n){const r=e+1,l=$(a/s,0,e-.001),i=$(n/s,0,t-.001),f=Math.floor(l),d=Math.floor(i),p=l-f,u=i-d,x=o[d*r+f]/64,S=o[d*r+f+1]/64,c=o[(d+1)*r+f]/64,m=o[(d+1)*r+f+1]/64;return x*(1-p)*(1-u)+S*p*(1-u)+c*(1-p)*u+m*p*u}const Mt=1536,Ot=1024,Dt=Mt/2,Se=Ot/2,tt=Dt+1,j=65536;function xe(o,e,t){const s=$(Math.round(e*j),0,Mt*j),a=$(Math.round(t*j),0,Ot*j),n=Math.floor(s/2),r=Math.floor(a/2),l=$(n>>16,0,Dt-1),i=$(r>>16,0,Se-1),f=n&65535,d=r&65535,p=o[i*tt+l],u=o[i*tt+l+1],x=o[(i+1)*tt+l],S=o[(i+1)*tt+l+1],c=p+((u-p)*f>>16),m=x+((S-x)*f>>16);return(c+((m-c)*d>>16)<<10)/j}function $e(o,e,t,s,a,n,r){return wt(o,e,t,s,a,r)+(n-xe(o,a,r))}function $(o,e,t){return Math.max(e,Math.min(t,o))}function ve(o){const e=Math.max(-1,Math.min(1,o));if(e<0){const s=e+1;return yt([.32,.36,.4],[.55,.5,.42],s)}const t=Ae(Math.min(1,e/.55));return yt([.64,.58,.48],[.13,.28,.58],t)}function yt(o,e,t){return[o[0]+(e[0]-o[0])*t,o[1]+(e[1]-o[1])*t,o[2]+(e[2]-o[2])*t]}function Ae(o){return o*o*(3-2*o)}function Xe(o){const e=P.CreateSphere("sky",{diameter:400,segments:32,sideOrientation:lt.BACKSIDE},o);e.infiniteDistance=!0,e.isPickable=!1,e.alwaysSelectAsActiveMesh=!0;const t=e.getVerticesData(mt.PositionKind);if(t){const a=new Float32Array(t.length/3*4);for(let n=0;n<t.length;n+=3){const r=t[n],l=t[n+1],i=t[n+2],f=Math.hypot(r,l,i)||1,[d,p,u]=ve(l/f),x=n/3*4;a[x]=d,a[x+1]=p,a[x+2]=u,a[x+3]=1}e.setVerticesData(mt.ColorKind,a)}e.useVertexColors=!0;const s=new J("sky",o);return s.disableLighting=!0,s.emissiveColor=new G(1,1,1),s.specularColor=G.Black(),s.backFaceCulling=!1,s.disableDepthWrite=!0,e.material=s,e}const at=.82,_t=.48,Ft=[[.78,.74,.68],[.58,.54,.5],[.4,.42,.44],[.64,.42,.32],[.3,.29,.28]];function We(o,e){const t=o*Math.PI/180,s=e*Math.PI/180,a=Math.cos(s);return[-Math.sin(t)*a,-Math.sin(s),Math.cos(t)*a]}const ye=1;function ge(o,e,t,s,a=ye){const n=Math.floor(e/a),r=Math.floor(t/a),l=e+1,i=n+1,f=new Float32Array(i*(r+1)*3);let d=1/0,p=-1/0,u=0;for(let c=0;c<=r;c++){const m=Math.min(t,c*a);for(let A=0;A<=n;A++){const b=Math.min(e,A*a),g=o[m*l+b]/64;f[u++]=b*s,f[u++]=g,f[u++]=m*s,g<d&&(d=g),g>p&&(p=g)}}const x=new Uint32Array(n*r*6);let S=0;for(let c=0;c<r;c++)for(let m=0;m<n;m++){const A=c*i+m;x[S++]=A,x[S++]=A+1,x[S++]=A+i,x[S++]=A+1,x[S++]=A+i+1,x[S++]=A+i}return{positions:f,indices:x,cols:n,rows:r,minY:d,maxY:p}}const B=128,U=2,I=B+U*2,Q=4,N=I*Q,E={grass:0,scrub:1,rock:2,scree:3,gravel:4,road:5,mud:6,sand:7,concrete:8};function Z(o,e,t){let s=Math.imul(o,374761393)^Math.imul(e,668265263)^Math.imul(t,1442695041);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function be(o,e,t,s){const a=Math.floor(o),n=Math.floor(e),r=o-a,l=e-n,i=r*r*(3-2*r),f=l*l*(3-2*l),d=(a%s+s)%s,p=(n%s+s)%s,u=(d+1)%s,x=(p+1)%s,S=Z(d,p,t),c=Z(u,p,t),m=Z(d,x,t),A=Z(u,x,t);return S*(1-i)*(1-f)+c*i*(1-f)+m*(1-i)*f+A*i*f}function L(o,e,t,s,a){let n=0,r=.5,l=0,i=1,f=s;for(let d=0;d<a;d++)n+=r*be(o*i,e*i,t+d*17,f),l+=r,r*=.5,i*=2,f*=2;return n/l}function gt(o,e,t,s){const a=Math.max(1,Math.round(B/s)),n=Math.floor(o/s),r=Math.floor(e/s);let l=1e9;for(let i=-1;i<=1;i++)for(let f=-1;f<=1;f++){const d=n+f,p=r+i,u=(d%a+a)%a,x=(p%a+a)%a,S=d*s+Z(u,x,t)*s,c=p*s+Z(u,x,t+9)*s,m=o-S,A=e-c,b=m*m+A*A;b<l&&(l=b)}return Math.sqrt(l)/s}function X(o){return Math.max(0,Math.min(255,Math.round(o)))}function Ce(o){const e=B*B,t=new Uint8Array(e*3),s=new Float32Array(e),a={0:[196,174,122],1:[124,128,78],2:[168,158,146],3:[198,182,160],4:[170,156,132],5:[142,122,96],6:[124,102,78],7:[204,184,146],8:[176,174,166]},[n,r,l]=a[o]??[140,130,110];for(let i=0;i<B;i++)for(let f=0;f<B;f++){const d=i*B+f;let p=n,u=r,x=l,S=0;if(o===E.grass){const c=L(f/18,i/18,11,B,3),m=L(f/3.2,i/3.2,12,B,2);p+=(c-.5)*36+(m-.5)*18,u+=(c-.45)*28+(m-.5)*14,x+=(c-.5)*16,S=(m-.5)*.35+(c-.5)*.15}else if(o===E.scrub){const c=gt(f,i,21,16),m=Math.max(0,1-c*1.6);p-=m*28,u-=m*18,x-=m*16,S=m*.8}else if(o===E.rock){const c=1-Math.abs(L(f/10,i/10,31,B,4)*2-1),m=c>.82?1:0;p-=m*40+c*12,u-=m*38+c*10,x-=m*34+c*8,S=c*.9-m*.7}else if(o===E.scree||o===E.gravel){const c=o===E.scree?18:9,m=gt(f,i,o===E.scree?41:42,c),A=Math.max(0,1-m*1.35),b=Z(Math.floor(f/c),Math.floor(i/c),o+4);p+=(b-.5)*40+A*16,u+=(b-.5)*32+A*12,x+=(b-.5)*24+A*8,S=A*.85}else if(o===E.road){const c=Math.abs(f%32/32*2-1),m=L(f/14,i/8,51,B,2);p-=c*18+(m-.5)*10,u-=c*16,x-=c*12,S=-c*.25+(m-.5)*.1}else if(o===E.mud){const c=L(f/20,i/20,61,B,3);p-=c*30,u-=c*24,x-=c*16,S=(c-.5)*.12}else if(o===E.sand){const c=Math.sin((f*.45+L(f/12,i/12,71,B,2)*6)*.7),m=L(f/2.5,i/2.5,72,B,2);p+=c*8+(m-.5)*14,u+=c*6+(m-.5)*10,x+=(m-.5)*8,S=c*.18+(m-.5)*.2}else{const c=(Math.floor(i/16)+Math.floor(f/64))%2===0?6:-4,m=L(f/6,i/6,81,B,2);p+=c-m*8,u+=c-m*8,x+=c-m*6,S=c*.01-m*.15}t[d*3]=X(p),t[d*3+1]=X(u),t[d*3+2]=X(x),s[d]=S}return{rgb:t,height:s}}function Be(o,e,t){const s=e%Q,a=Math.floor(e/Q),n=s*I,r=a*I;for(let l=0;l<I;l++){const i=(l-U+B)%B;for(let f=0;f<I;f++){const d=(f-U+B)%B,p=((r+l)*N+(n+f))*4,u=(i*B+d)*3;o[p]=t.rgb[u],o[p+1]=t.rgb[u+1],o[p+2]=t.rgb[u+2],o[p+3]=255}}}function Te(){const o=new Uint8Array(N*N*4),e=new Uint8Array(N*N*4);e.fill(128);for(let t=3;t<e.length;t+=4)e[t]=255;for(let t=0;t<=E.concrete;t++){const s=Ce(t);Be(o,t,s),we(e,t,s)}return{albedo:o,normal:e,size:N}}function we(o,e,t){const s=e%Q,a=Math.floor(e/Q),n=s*I,r=a*I,l=(i,f)=>{const d=(i+B)%B,p=(f+B)%B,u=t.height[p*B+(d-1+B)%B],x=t.height[p*B+(d+1)%B],S=t.height[(p-1+B)%B*B+d],c=t.height[(p+1)%B*B+d];let m=(u-x)*1.15,A=(S-c)*1.15,b=1;const g=Math.hypot(m,A,b)||1;return[m/g,A/g,b/g]};for(let i=0;i<I;i++){const f=i-U;for(let d=0;d<I;d++){const p=d-U,[u,x,S]=l(p,f),c=((r+i)*N+(n+d))*4;o[c]=X(u*127+128),o[c+1]=X(x*127+128),o[c+2]=X(S*127+128),o[c+3]=255}}}function H(o){const[e,t,s]=Ft[o];return`vec3(${e.toFixed(3)}, ${t.toFixed(3)}, ${s.toFixed(3)})`}function Me(){return`
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
  float t = clamp((${at.toFixed(2)} - ny) / ${(at-_t).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
vec3 tfStrata(float tone) {
  vec3 c0 = ${H(0)};
  vec3 c1 = ${H(1)};
  vec3 c2 = ${H(2)};
  vec3 c3 = ${H(3)};
  vec3 c4 = ${H(4)};
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
  let t = clamp((${at.toFixed(2)} - ny) / ${(at-_t).toFixed(2)}, 0.0, 1.0);
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
`}function Y(o){const[e,t,s]=Ft[o];return`vec3f(${e.toFixed(3)}, ${t.toFixed(3)}, ${s.toFixed(3)})`}function _e(){return`
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
`}function et(o,e,t,s){const a=Bt(`maps/twin-ridges/${e}`),n=new k(a,o,!1,!1,k.TRILINEAR_SAMPLINGMODE,()=>t(),r=>{const l=typeof r=="string"?r:e;console.error(`Terrain texture failed: ${a}`,l),s(l)});return n.wrapU=k.CLAMP_ADDRESSMODE,n.wrapV=k.CLAMP_ADDRESSMODE,n.anisotropicFilteringLevel=8,n}class Fe extends le{mapW=1536;mapH=1024;splat0;splat1;splat2;tracks;detail;detailNrm;constructor(e,t){super(e,"TerrainSplat",200,{TERRAIN_SPLAT:!1},!0,!1),this.registerForExtraEvents=!0,this._enable(!0);const s=Te(),a=k.LINEAR_LINEAR;this.detail=ot.CreateRGBATexture(s.albedo,s.size,s.size,t,!1,!1,a),this.detailNrm=ot.CreateRGBATexture(s.normal,s.size,s.size,t,!1,!1,a),this.detail.wrapU=k.CLAMP_ADDRESSMODE,this.detail.wrapV=k.CLAMP_ADDRESSMODE,this.detailNrm.wrapU=k.CLAMP_ADDRESSMODE,this.detailNrm.wrapV=k.CLAMP_ADDRESSMODE;const n=new Uint8Array(4*4*4);n.fill(128);const r=()=>ot.CreateRGBATexture(n,4,4,t,!1,!1,k.NEAREST_SAMPLINGMODE);this.splat0=r(),this.splat1=r(),this.splat2=r(),this.tracks=r()}isCompatible(){return!0}getClassName(){return"TerrainSplatPlugin"}prepareDefines(e){e.TERRAIN_SPLAT||(e.TERRAIN_SPLAT=!0,e.markAsUnprocessed())}getSamplers(e){e.push("splat0Sampler","splat1Sampler","splat2Sampler","tracksSampler","detailSampler","detailNrmSampler")}getUniforms(){return{ubo:[{name:"mapSize",size:2,type:"vec2"}]}}bindForSubMesh(e){this.bindSplats(e)}hardBindForSubMesh(e){this.bindSplats(e)}bindSplats(e){e.updateFloat2("mapSize",this.mapW,this.mapH),e.setTexture("splat0Sampler",this.splat0),e.setTexture("splat1Sampler",this.splat1),e.setTexture("splat2Sampler",this.splat2),e.setTexture("tracksSampler",this.tracks),e.setTexture("detailSampler",this.detail),e.setTexture("detailNrmSampler",this.detailNrm)}getCustomCode(e,t=dt.GLSL){if(e!=="fragment")return null;const s=t===dt.WGSL;return{CUSTOM_FRAGMENT_DEFINITIONS:s?De():Me(),CUSTOM_FRAGMENT_UPDATE_DIFFUSE:s?_e():Oe()}}}function ze(o,e,t){const s=new J("terrain",o);s.diffuseColor.set(1,1,1),s.specularColor.set(.04,.04,.035),s.specularPower=24;const a=new Fe(s,o);a.mapW=e,a.mapH=t,s.onError=(r,l)=>{console.error(l),document.documentElement.dataset.terrain="shader-error"};const n=new Promise(r=>{let l=4;const i=()=>{l-=1,l===0&&r()},f=d=>{console.error("terrain map texture",d),document.documentElement.dataset.terrain="texture-error",i()};a.splat0=et(o,"splat_0_grass_scrub_rock_scree.png",i,f),a.splat1=et(o,"splat_1_gravel_road_mud_sand.png",i,f),a.splat2=et(o,"splat_2_water_concrete_wetness_strata.png",i,f),a.tracks=et(o,"tracks_mask.png",i,f)});return{material:s,ready:n}}const st=6;function q(o,e,t){let s=Math.imul(o,374761393)^Math.imul(e,668265263)^Math.imul(t,1442695041);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function Ge(o){return new Promise((e,t)=>{const s=new Image;s.onload=()=>e(s),s.onerror=()=>t(new Error(o)),s.src=o})}function bt(o,e,t){const s=P.CreateIcoSphere(e,{radius:.55,subdivisions:1,flat:!1},o);s.position.y=.5,s.bakeCurrentTransformIntoVertices(),s.position.set(0,0,0);const a=new J(`${e}-mat`,o);return a.diffuseColor=t,a.specularColor=G.Black(),s.material=a,s.isPickable=!1,s.alwaysSelectAsActiveMesh=!0,s.receiveShadows=!1,s}async function Re(o,e,t,s,a,n){const r=Bt("maps/twin-ridges/vegetation_canopy_height_dm.png"),l=await Ge(r).catch(g=>{throw console.error(`Terrain canopy missing: ${r}`,g),g}),i=document.createElement("canvas");i.width=l.width,i.height=l.height;const f=i.getContext("2d",{willReadFrequently:!0});if(!f)return;f.drawImage(l,0,0);const d=f.getImageData(0,0,l.width,l.height).data,p=bt(o,"shrub",new G(.34,.4,.22)),u=bt(o,"tree",new G(.22,.32,.16)),x=[],S=[],c=new z,m=new pt,A=new z,b=new ut;for(let g=0;g<l.height;g+=st)for(let y=0;y<l.width;y+=st){const h=d[(g*l.width+y)*4];if(h<6)continue;const v=(q(y,g,2)-.5)*st*.7,O=(q(y,g,4)-.5)*st*.7,F=Math.max(0,Math.min(t*a-.01,y+.5+v)),C=Math.max(0,Math.min(s*a-.01,g+.5+O)),_=wt(e,t,s,a,F,C);if(_<n+.4)continue;const D=h/10,T=D>=2.6,V=T?.7+D*.28:.45+D*.55;c.set(V*(.85+q(y,g,6)*.3),V*(T?1.15:.75),V*(.85+q(y,g,8)*.3)),pt.RotationAxisToRef(z.Up(),q(y,g,9)*Math.PI*2,m),A.set(F,_,C),ut.ComposeToRef(c,m,A,b);const W=T?S:x,ct=W.length;W.length=ct+16,b.copyToArray(W,ct)}x.length?p.thinInstanceSetBuffer("matrix",new Float32Array(x),16,!0):p.setEnabled(!1),S.length?u.thinInstanceSetBuffer("matrix",new Float32Array(S),16,!0):u.setEnabled(!1)}function je(o,e,t,s,a,n,r,l){const i=ge(e,t,s,a),f=new lt("terrain",o),d=new K;d.positions=i.positions,d.indices=i.indices;const p=new Float32Array(i.positions.length);K.ComputeNormals(i.positions,i.indices,p),d.normals=p,d.applyToMesh(f),f.useVertexColors=!1,f.alwaysSelectAsActiveMesh=!0;const{material:u,ready:x}=ze(o,n,r);f.material=u,document.documentElement.dataset.relief=`${i.minY.toFixed(1)}..${i.maxY.toFixed(1)}`,document.documentElement.dataset.terrain="loading";const S=x.then(()=>Re(o,e,t,s,a,l)).then(()=>{const c=document.documentElement.dataset.terrain;c!=="shader-error"&&c!=="texture-error"&&(document.documentElement.dataset.terrain="ready")}).catch(c=>{console.error(c),document.documentElement.dataset.terrain="error"});return{mesh:f,ready:S}}function He(o){const e=new J("water",o);return e.diffuseColor=new G(.4,.5,.42),e.specularColor=new G(.34,.38,.34),e.specularPower=48,e.alpha=.62,e}export{P as M,Ft as S,ke as a,ft as b,Xe as c,je as d,We as e,it as f,wt as g,Ve as h,Ze as i,xe as j,Le as k,Ue as l,Ne as n,$e as p,ve as s,He as w};
