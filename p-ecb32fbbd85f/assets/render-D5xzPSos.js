import{f as Ot,V as yt,am as bt,an as Es,ao as lf,ap as Lf,aq as Ls,y as ee,C as Bs,ah as ie,ar as Os,as as Is,at as $s,au as Hs,av as Vs,aw as Us,ax as Zs,ay as Xs,az as Ys,aA as js,aB as Ks,aC as qs,aD as Qs,aE as Js,aF as ta,aG as ea,aH as oa,aI as fa,aJ as sa,aK as aa,aL as na,aM as ra,aN as la,aO as ca,aP as ia,aQ as ma,ab as da,v as Et,j as Z,u as ua,M as Ke,t as re,i as cf,H as ha,aR as je,w as dt,aS as Zo,aT as It,ad as be,ac as mf,k as Bf,z as Xo,r as df,aU as xo,n as pa}from"./ExtrasAsMetadata-DTA26XKx.js";import{T as xa,aC as va,aD as Sa,aE as ba,aF as ga,ab as Ca,_ as Ma,o as Yo,d as Of,f as If,g as Qe,aG as Fe,p as Yt}from"./index-CdBvvpKF.js";import{_ as uf}from"./__vite-browser-external-D3J-_vhy.js";class pt{constructor(t=0,e=0){this.x=t,this.y=e,t!==Math.floor(t)&&(t=Math.floor(t),Ot.Warn("x is not an integer, floor(x) used")),e!==Math.floor(e)&&(e=Math.floor(e),Ot.Warn("y is not an integer, floor(y) used"))}clone(){return new pt(this.x,this.y)}rotate60About(t){const e=this.x;return this.x=t.x+t.y-this.y,this.y=e+this.y-t.x,this}rotateNeg60About(t){const e=this.x;return this.x=e+this.y-t.y,this.y=t.x+t.y-e,this}rotate120(t,e){t!==Math.floor(t)&&(t=Math.floor(t),Ot.Warn("m not an integer only floor(m) used")),e!==Math.floor(e)&&(e=Math.floor(e),Ot.Warn("n not an integer only floor(n) used"));const f=this.x;return this.x=t-f-this.y,this.y=e+f,this}rotateNeg120(t,e){t!==Math.floor(t)&&(t=Math.floor(t),Ot.Warn("m is not an integer, floor(m) used")),e!==Math.floor(e)&&(e=Math.floor(e),Ot.Warn("n is not an integer,   floor(n) used"));const f=this.x;return this.x=this.y-e,this.y=t+e-f-this.y,this}toCartesianOrigin(t,e){const f=yt.Zero();return f.x=t.x+2*this.x*e+this.y*e,f.y=t.y+Math.sqrt(3)*this.y*e,f}static Zero(){return new pt(0,0)}}class $f{constructor(){this.cartesian=[],this.vertices=[],this.max=[],this.min=[],this.closestTo=[],this.innerFacets=[],this.isoVecsABOB=[],this.isoVecsOBOA=[],this.isoVecsBAOA=[],this.vertexTypes=[],this.IDATA=new $o("icosahedron","Regular",[[0,bt,-1],[-bt,1,0],[-1,0,-bt],[1,0,-bt],[bt,1,0],[0,bt,1],[-1,0,bt],[-bt,-1,0],[0,-bt,-1],[bt,-1,0],[1,0,bt],[0,-bt,1]],[[0,2,1],[0,3,2],[0,4,3],[0,5,4],[0,1,5],[7,6,1],[8,7,2],[9,8,3],[10,9,4],[6,10,5],[2,7,1],[3,8,2],[4,9,3],[5,10,4],[1,6,5],[11,6,7],[11,7,8],[11,8,9],[11,9,10],[11,10,6]])}setIndices(){let t=12;const e={},f=this.m,s=this.n;let l=f,a=1,r=0;s!==0&&(l=lf(f,s)),a=f/l,r=s/l;let n,c,m,d,u;const v=pt.Zero(),p=new pt(f,s),h=new pt(-s,f+s),S=pt.Zero(),w=pt.Zero(),M=pt.Zero();let T=[],R,C,y,g;const A=[],_=this.vertByDist,L=(E,D,tt,st)=>{R=E+"|"+tt,C=D+"|"+st,R in e||C in e?R in e&&!(C in e)?e[C]=e[R]:C in e&&!(R in e)&&(e[R]=e[C]):(e[R]=t,e[C]=t,t++),_[tt][0]>2?A[e[R]]=[-_[tt][0],_[tt][1],e[R]]:A[e[R]]=[T[_[tt][0]],_[tt][1],e[R]]};this.IDATA.edgematch=[[1,"B"],[2,"B"],[3,"B"],[4,"B"],[0,"B"],[10,"O",14,"A"],[11,"O",10,"A"],[12,"O",11,"A"],[13,"O",12,"A"],[14,"O",13,"A"],[0,"O"],[1,"O"],[2,"O"],[3,"O"],[4,"O"],[19,"B",5,"A"],[15,"B",6,"A"],[16,"B",7,"A"],[17,"B",8,"A"],[18,"B",9,"A"]];for(let E=0;E<20;E++){if(T=this.IDATA.face[E],m=T[2],d=T[1],u=T[0],y=v.x+"|"+v.y,R=E+"|"+y,R in e||(e[R]=m,A[m]=[T[_[y][0]],_[y][1]]),y=p.x+"|"+p.y,R=E+"|"+y,R in e||(e[R]=d,A[d]=[T[_[y][0]],_[y][1]]),y=h.x+"|"+h.y,R=E+"|"+y,R in e||(e[R]=u,A[u]=[T[_[y][0]],_[y][1]]),n=this.IDATA.edgematch[E][0],c=this.IDATA.edgematch[E][1],c==="B")for(let D=1;D<l;D++)w.x=f-D*(a+r),w.y=s+D*a,M.x=-D*r,M.y=D*(a+r),y=w.x+"|"+w.y,g=M.x+"|"+M.y,L(E,n,y,g);if(c==="O")for(let D=1;D<l;D++)M.x=-D*r,M.y=D*(a+r),S.x=D*a,S.y=D*r,y=M.x+"|"+M.y,g=S.x+"|"+S.y,L(E,n,y,g);if(n=this.IDATA.edgematch[E][2],c=this.IDATA.edgematch[E][3],c&&c==="A")for(let D=1;D<l;D++)S.x=D*a,S.y=D*r,w.x=f-(l-D)*(a+r),w.y=s+(l-D)*a,y=S.x+"|"+S.y,g=w.x+"|"+w.y,L(E,n,y,g);for(let D=0;D<this.vertices.length;D++)y=this.vertices[D].x+"|"+this.vertices[D].y,R=E+"|"+y,R in e||(e[R]=t++,_[y][0]>2?A[e[R]]=[-_[y][0],_[y][1],e[R]]:A[e[R]]=[T[_[y][0]],_[y][1],e[R]])}this.closestTo=A,this.vecToidx=e}calcCoeffs(){const t=this.m,e=this.n,f=Math.sqrt(3)/3,s=t*t+e*e+t*e;this.coau=(t+e)/s,this.cobu=-e/s,this.coav=-f*(t-e)/s,this.cobv=f*(2*t+e)/s}createInnerFacets(){const t=this.m,e=this.n;for(let f=0;f<e+t+1;f++)for(let s=this.min[f];s<this.max[f]+1;s++)s<this.max[f]&&s<this.max[f+1]+1&&this.innerFacets.push(["|"+s+"|"+f,"|"+s+"|"+(f+1),"|"+(s+1)+"|"+f]),f>0&&s<this.max[f-1]&&s+1<this.max[f]+1&&this.innerFacets.push(["|"+s+"|"+f,"|"+(s+1)+"|"+f,"|"+(s+1)+"|"+(f-1)])}edgeVecsABOB(){const t=this.m,e=this.n,f=new pt(-e,t+e);for(let s=1;s<t+e;s++){const l=new pt(this.min[s],s),a=new pt(this.min[s-1],s-1),r=new pt(this.min[s+1],s+1),n=l.clone(),c=a.clone(),m=r.clone();n.rotate60About(f),c.rotate60About(f),m.rotate60About(f);const d=new pt(this.max[n.y],n.y),u=new pt(this.max[n.y-1],n.y-1),v=new pt(this.max[n.y-1]-1,n.y-1);(n.x!==d.x||n.y!==d.y)&&(n.x!==u.x?(this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([l,u,v]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([l,v,d])):n.y===m.y?(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([l,a,u]),this.vertexTypes.push([1,0,1]),this.isoVecsABOB.push([l,u,r])):(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([l,a,u]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([l,u,d])))}}mapABOBtoOBOA(){const t=new pt(0,0);for(let e=0;e<this.isoVecsABOB.length;e++){const f=[];for(let s=0;s<3;s++)t.x=this.isoVecsABOB[e][s].x,t.y=this.isoVecsABOB[e][s].y,this.vertexTypes[e][s]===0&&t.rotateNeg120(this.m,this.n),f.push(t.clone());this.isoVecsOBOA.push(f)}}mapABOBtoBAOA(){const t=new pt(0,0);for(let e=0;e<this.isoVecsABOB.length;e++){const f=[];for(let s=0;s<3;s++)t.x=this.isoVecsABOB[e][s].x,t.y=this.isoVecsABOB[e][s].y,this.vertexTypes[e][s]===1&&t.rotate120(this.m,this.n),f.push(t.clone());this.isoVecsBAOA.push(f)}}MapToFace(t,e){const f=this.IDATA.face[t],s=f[2],l=f[1],a=f[0],r=yt.FromArray(this.IDATA.vertex[s]),n=yt.FromArray(this.IDATA.vertex[l]),c=yt.FromArray(this.IDATA.vertex[a]),m=n.subtract(r),d=c.subtract(r),u=m.scale(this.coau).add(d.scale(this.cobu)),v=m.scale(this.coav).add(d.scale(this.cobv));let p,h=Es.Vector3[0];for(let S=0;S<this.cartesian.length;S++)h=u.scale(this.cartesian[S].x).add(v.scale(this.cartesian[S].y)).add(r),h.x,h.y,h.z,p=t+"|"+this.vertices[S].x+"|"+this.vertices[S].y,e.vertex[this.vecToidx[p]]=[h.x,h.y,h.z]}build(t,e){const f=[],s=pt.Zero(),l=new pt(t,e),a=new pt(-e,t+e);f.push(s,l,a);for(let C=e;C<t+1;C++)for(let y=0;y<t+1-C;y++)f.push(new pt(y,C));if(e>0){const C=lf(t,e),y=t/C,g=e/C;for(let _=1;_<C;_++)f.push(new pt(_*y,_*g)),f.push(new pt(-_*g,_*(y+g))),f.push(new pt(t-_*(y+g),e+_*y));const A=t/e;for(let _=1;_<e;_++)for(let L=0;L<_*A;L++)f.push(new pt(L,_)),f.push(new pt(L,_).rotate120(t,e)),f.push(new pt(L,_).rotateNeg120(t,e))}f.sort((C,y)=>C.x-y.x),f.sort((C,y)=>C.y-y.y);const r=new Array(t+e+1),n=new Array(t+e+1);for(let C=0;C<r.length;C++)r[C]=1/0,n[C]=-1/0;let c=0,m=0;const d=f.length;for(let C=0;C<d;C++)m=f[C].x,c=f[C].y,r[c]=Math.min(m,r[c]),n[c]=Math.max(m,n[c]);const u=(C,y)=>{const g=C.clone();return y==="A"&&g.rotateNeg120(t,e),y==="B"&&g.rotate120(t,e),g.x<0?g.y:g.x+g.y},v=[],p=[],h=[],S=[],w={},M=[];let T=-1,R=-1;for(let C=0;C<d;C++)v[C]=f[C].toCartesianOrigin(new pt(0,0),.5),p[C]=u(f[C],"O"),h[C]=u(f[C],"A"),S[C]=u(f[C],"B"),p[C]===h[C]&&h[C]===S[C]?(T=3,R=p[C]):p[C]===h[C]?(T=4,R=p[C]):h[C]===S[C]?(T=5,R=h[C]):S[C]===p[C]&&(T=6,R=p[C]),p[C]<h[C]&&p[C]<S[C]&&(T=2,R=p[C]),h[C]<p[C]&&h[C]<S[C]&&(T=1,R=h[C]),S[C]<h[C]&&S[C]<p[C]&&(T=0,R=S[C]),M.push([T,R,f[C].x,f[C].y]);M.sort((C,y)=>C[2]-y[2]),M.sort((C,y)=>C[3]-y[3]),M.sort((C,y)=>C[1]-y[1]),M.sort((C,y)=>C[0]-y[0]);for(let C=0;C<M.length;C++)w[M[C][2]+"|"+M[C][3]]=[M[C][0],M[C][1],C];return this.m=t,this.n=e,this.vertices=f,this.vertByDist=w,this.cartesian=v,this.min=r,this.max=n,this}}class $o{constructor(t,e,f,s){this.name=t,this.category=e,this.vertex=f,this.face=s}}class Co extends $o{innerToData(t,e){for(let f=0;f<e.innerFacets.length;f++)this.face.push(e.innerFacets[f].map(s=>e.vecToidx[t+s]))}mapABOBtoDATA(t,e){const f=e.IDATA.edgematch[t][0];for(let s=0;s<e.isoVecsABOB.length;s++){const l=[];for(let a=0;a<3;a++)e.vertexTypes[s][a]===0?l.push(t+"|"+e.isoVecsABOB[s][a].x+"|"+e.isoVecsABOB[s][a].y):l.push(f+"|"+e.isoVecsABOB[s][a].x+"|"+e.isoVecsABOB[s][a].y);this.face.push([e.vecToidx[l[0]],e.vecToidx[l[1]],e.vecToidx[l[2]]])}}mapOBOAtoDATA(t,e){const f=e.IDATA.edgematch[t][0];for(let s=0;s<e.isoVecsOBOA.length;s++){const l=[];for(let a=0;a<3;a++)e.vertexTypes[s][a]===1?l.push(t+"|"+e.isoVecsOBOA[s][a].x+"|"+e.isoVecsOBOA[s][a].y):l.push(f+"|"+e.isoVecsOBOA[s][a].x+"|"+e.isoVecsOBOA[s][a].y);this.face.push([e.vecToidx[l[0]],e.vecToidx[l[1]],e.vecToidx[l[2]]])}}mapBAOAtoDATA(t,e){const f=e.IDATA.edgematch[t][2];for(let s=0;s<e.isoVecsBAOA.length;s++){const l=[];for(let a=0;a<3;a++)e.vertexTypes[s][a]===1?l.push(t+"|"+e.isoVecsBAOA[s][a].x+"|"+e.isoVecsBAOA[s][a].y):l.push(f+"|"+e.isoVecsBAOA[s][a].x+"|"+e.isoVecsBAOA[s][a].y);this.face.push([e.vecToidx[l[0]],e.vecToidx[l[1]],e.vecToidx[l[2]]])}}orderData(t){const e=[];for(let a=0;a<13;a++)e[a]=[];const f=t.closestTo;for(let a=0;a<f.length;a++)f[a][0]>-1?f[a][1]>0&&e[f[a][0]].push([a,f[a][1]]):e[12].push([a,f[a][0]]);const s=[];for(let a=0;a<12;a++)s[a]=a;let l=12;for(let a=0;a<12;a++){e[a].sort((r,n)=>r[1]-n[1]);for(let r=0;r<e[a].length;r++)s[e[a][r][0]]=l++}for(let a=0;a<e[12].length;a++)s[e[12][a][0]]=l++;for(let a=0;a<this.vertex.length;a++)this.vertex[a].push(s[a]);this.vertex.sort((a,r)=>a[3]-r[3]);for(let a=0;a<this.vertex.length;a++)this.vertex[a].pop();for(let a=0;a<this.face.length;a++)for(let r=0;r<this.face[a].length;r++)this.face[a][r]=s[this.face[a][r]];this.sharedNodes=e[12].length,this.poleNodes=this.vertex.length-this.sharedNodes}setOrder(t,e){const f=[],s=[];let l=e.pop();s.push(l);let a=this.face[l].indexOf(t);a=(a+2)%3;let r=this.face[l][a];f.push(r);let n=0;for(;e.length>0;)l=e[n],this.face[l].indexOf(r)>-1?(a=(this.face[l].indexOf(r)+1)%3,r=this.face[l][a],f.push(r),s.push(l),e.splice(n,1),n=0):n++;return this.adjacentFaces.push(f),s}toGoldbergPolyhedronData(){const t=new $o("GeoDual","Goldberg",[],[]);t.name="GD dual";const e=this.vertex.length,f=new Array(e);for(let c=0;c<e;c++)f[c]=[];for(let c=0;c<this.face.length;c++)for(let m=0;m<3;m++)f[this.face[c][m]].push(c);let s=0,l=0,a=0,r=[],n=[];this.adjacentFaces=[];for(let c=0;c<f.length;c++)t.face[c]=this.setOrder(c,f[c].concat([])),f[c].forEach(m=>{s=0,l=0,a=0,r=this.face[m];for(let d=0;d<3;d++)n=this.vertex[r[d]],s+=n[0],l+=n[1],a+=n[2];t.vertex[m]=[s/3,l/3,a/3]});return t}static BuildGeodesicData(t){const e=new Co("Geodesic-m-n","Geodesic",[[0,bt,-1],[-bt,1,0],[-1,0,-bt],[1,0,-bt],[bt,1,0],[0,bt,1],[-1,0,bt],[-bt,-1,0],[0,-bt,-1],[bt,-1,0],[1,0,bt],[0,-bt,1]],[]);t.setIndices(),t.calcCoeffs(),t.createInnerFacets(),t.edgeVecsABOB(),t.mapABOBtoOBOA(),t.mapABOBtoBAOA();for(let s=0;s<t.IDATA.face.length;s++)t.MapToFace(s,e),e.innerToData(s,t),t.IDATA.edgematch[s][1]==="B"&&e.mapABOBtoDATA(s,t),t.IDATA.edgematch[s][1]==="O"&&e.mapOBOAtoDATA(s,t),t.IDATA.edgematch[s][3]==="A"&&e.mapBAOAtoDATA(s,t);e.orderData(t);const f=1;return e.vertex=e.vertex.map(function(s){const l=s[0],a=s[1],r=s[2],n=Math.sqrt(l*l+a*a+r*r);return s[0]*=f/n,s[1]*=f/n,s[2]*=f/n,s}),e}}function wa(o,t,e=null){let f=t.m||1;f!==Math.floor(f)&&(f=Math.floor(f),Ot.Warn("m not an integer only floor(m) used"));let s=t.n||0;if(s!==Math.floor(s)&&(s=Math.floor(s),Ot.Warn("n not an integer only floor(n) used")),s>f){const c=s;s=f,f=c,Ot.Warn("n > m therefore m and n swapped")}const l=new $f;l.build(f,s);const r={custom:Co.BuildGeodesicData(l),size:t.size,sizeX:t.sizeX,sizeY:t.sizeY,sizeZ:t.sizeZ,faceUV:t.faceUV,faceColors:t.faceColors,flat:t.flat,updatable:t.updatable,sideOrientation:t.sideOrientation,frontUVs:t.frontUVs,backUVs:t.backUVs};return Lf(o,r,e)}function Aa(o,t){const e=o.size,f=o.sizeX||e||1,s=o.sizeY||e||1,l=o.sizeZ||e||1,a=o.sideOrientation===0?0:o.sideOrientation||ie.DEFAULTSIDE,r=[],n=[],c=[],m=[];let d=1/0,u=-1/0,v=1/0,p=-1/0;for(let w=0;w<t.vertex.length;w++)d=Math.min(d,t.vertex[w][0]*f),u=Math.max(u,t.vertex[w][0]*f),v=Math.min(v,t.vertex[w][1]*s),p=Math.max(p,t.vertex[w][1]*s);let h=0;for(let w=0;w<t.face.length;w++){const M=t.face[w],T=yt.FromArray(t.vertex[M[0]]),R=yt.FromArray(t.vertex[M[2]]),C=yt.FromArray(t.vertex[M[1]]),y=R.subtract(T),g=C.subtract(T),A=yt.Cross(g,y).normalize();for(let _=0;_<M.length;_++){c.push(A.x,A.y,A.z);const L=t.vertex[M[_]];r.push(L[0]*f,L[1]*s,L[2]*l);const E=(L[1]*s-v)/(p-v);m.push((L[0]*f-d)/(u-d),E)}for(let _=0;_<M.length-2;_++)n.push(h,h+_+2,h+_+1);h+=M.length}ie._ComputeSides(a,r,n,c,m);const S=new ie;return S.positions=r,S.indices=n,S.normals=c,S.uvs=m,S}function ya(o,t,e=null){const f=t.size,s=t.sizeX||f||1,l=t.sizeY||f||1,a=t.sizeZ||f||1;let r=t.m||1;r!==Math.floor(r)&&(r=Math.floor(r),Ot.Warn("m not an integer only floor(m) used"));let n=t.n||0;if(n!==Math.floor(n)&&(n=Math.floor(n),Ot.Warn("n not an integer only floor(n) used")),n>r){const p=n;n=r,r=p,Ot.Warn("n > m therefore m and n swapped")}const c=new $f;c.build(r,n);const m=Co.BuildGeodesicData(c),d=m.toGoldbergPolyhedronData(),u=new Ls(o,e);t.sideOrientation=ee._GetDefaultSideOrientation(t.sideOrientation),u._originalBuilderSideOrientation=t.sideOrientation,Aa(t,d).applyToMesh(u,t.updatable),u.goldbergData.nbSharedFaces=m.sharedNodes,u.goldbergData.nbUnsharedFaces=m.poleNodes,u.goldbergData.adjacentFaces=m.adjacentFaces,u.goldbergData.nbFaces=u.goldbergData.nbSharedFaces+u.goldbergData.nbUnsharedFaces,u.goldbergData.nbFacesAtPole=(u.goldbergData.nbUnsharedFaces-12)/12;for(let p=0;p<m.vertex.length;p++)u.goldbergData.faceCenters.push(yt.FromArray(m.vertex[p])),u.goldbergData.faceCenters[p].x*=s,u.goldbergData.faceCenters[p].y*=l,u.goldbergData.faceCenters[p].z*=a,u.goldbergData.faceColors.push(new Bs(1,1,1,1));for(let p=0;p<d.face.length;p++){const h=d.face[p],S=yt.FromArray(d.vertex[h[0]]),w=yt.FromArray(d.vertex[h[2]]),M=yt.FromArray(d.vertex[h[1]]),T=w.subtract(S),R=M.subtract(S),C=yt.Cross(R,T).normalize(),y=yt.Cross(R,C).normalize();u.goldbergData.faceXaxis.push(R.normalize()),u.goldbergData.faceYaxis.push(C),u.goldbergData.faceZaxis.push(y)}return u}const Bt={CreateBox:ma,CreateTiledBox:ia,CreateSphere:ca,CreateDisc:la,CreateIcoSphere:ra,CreateRibbon:na,CreateCylinder:aa,CreateTorus:sa,CreateTorusKnot:fa,CreateLineSystem:oa,CreateLines:ea,CreateDashedLines:ta,ExtrudeShape:Js,ExtrudeShapeCustom:Qs,CreateLathe:qs,CreateTiledPlane:Ks,CreatePlane:js,CreateGround:Os,CreateTiledGround:Ys,CreateGroundFromHeightMap:Xs,CreatePolygon:Zs,ExtrudePolygon:Us,CreateTube:Vs,CreatePolyhedron:Lf,CreateGeodesic:wa,CreateGoldberg:ya,CreateDecal:Hs,CreateCapsule:$s,CreateText:Is};class Ta{get gpuFrameTimeCounter(){return this.engine.getGPUFrameTimeCounter()}get captureGPUFrameTime(){return this._captureGPUFrameTime}set captureGPUFrameTime(t){t!==this._captureGPUFrameTime&&(this._captureGPUFrameTime=t,this.engine.captureGPUFrameTime(t))}get shaderCompilationTimeCounter(){return this._shaderCompilationTime}get captureShaderCompilationTime(){return this._captureShaderCompilationTime}set captureShaderCompilationTime(t){t!==this._captureShaderCompilationTime&&(this._captureShaderCompilationTime=t,t?(this._onBeforeShaderCompilationObserver=this.engine.onBeforeShaderCompilationObservable.add(()=>{this._shaderCompilationTime.fetchNewFrame(),this._shaderCompilationTime.beginMonitoring()}),this._onAfterShaderCompilationObserver=this.engine.onAfterShaderCompilationObservable.add(()=>{this._shaderCompilationTime.endMonitoring()})):(this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null))}constructor(t){this.engine=t,this._captureGPUFrameTime=!1,this._captureShaderCompilationTime=!1,this._shaderCompilationTime=new da,this._onBeginFrameObserver=null,this._onEndFrameObserver=null,this._onBeforeShaderCompilationObserver=null,this._onAfterShaderCompilationObserver=null}dispose(){this.engine.onBeginFrameObservable.remove(this._onBeginFrameObserver),this._onBeginFrameObserver=null,this.engine.onEndFrameObservable.remove(this._onEndFrameObserver),this._onEndFrameObserver=null,this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null,this.engine=null}}const hf=[],Ra=typeof performance<"u"?performance.now():0;function jo(o,t){const e={name:o,ms:Math.round(t*10)/10,at:Math.round((performance.now()-Ra)*10)/10};hf.push(e),globalThis.__boot=hf}async function kn(o,t){const e=performance.now();try{return await t()}finally{jo(o,performance.now()-e)}}function Nn(o,t){const e=performance.now();try{return t()}finally{jo(o,performance.now()-e)}}function Fn(o,t){const e=new Ta(o);e.captureShaderCompilationTime=!0;const f=o.onEndFrameObservable.add(()=>{jo(t,e.shaderCompilationTimeCounter.total),o.onEndFrameObservable.remove(f),e.dispose()})}const _a=xa+.85;function ka(o,t=1.35){const e=t>0?t:1.35;return(o%e+e)%e<e*.22?1:.14}function Na(o,t,e){const f=Math.min(e.length,Math.floor(t.length/3),Math.floor(o.length/4));for(let s=0;s<f;s++){if(e[s]!==va)continue;const l=t[s*3+1],a=Math.max(0,Math.min(1,1-l/4.2))*.42,r=s*4;o[r]*=1-a,o[r+1]*=1-a*.92,o[r+2]*=1-a*.75}}class zn{mesh;mat;buf=new Float32Array(48*16);bound=!1;constructor(t){this.mesh=Bt.CreateBox("mast-beacon",{width:.28,height:.28,depth:.28},t),this.mat=new Et("mast-beacon",t),this.mat.diffuseColor=Z.Black(),this.mat.specularColor=Z.Black(),this.mat.emissiveColor=new Z(1,.72,.28),this.mesh.material=this.mat,this.mesh.isPickable=!1,this.mesh.alwaysSelectAsActiveMesh=!0,this.mesh.setEnabled(!1)}sync(t,e){const f=ka(e);if(this.mat.emissiveColor.set(f,f*.62,f*.18),!t.length){this.mesh.isEnabled()&&this.mesh.setEnabled(!1);return}const s=Math.min(t.length,48);for(let l=0;l<s;l++){const a=t[l],r=l*16;this.buf[r]=1,this.buf[r+5]=1,this.buf[r+10]=1,this.buf[r+12]=a.x,this.buf[r+13]=a.y+_a,this.buf[r+14]=a.z,this.buf[r+15]=1}this.mesh.isEnabled()||this.mesh.setEnabled(!0),this.bound?this.mesh.thinInstanceBufferUpdated("matrix"):(this.mesh.thinInstanceSetBuffer("matrix",this.buf,16,!1),this.bound=!0),this.mesh.thinInstanceCount=s}dispose(){this.mesh.dispose(),this.mat.dispose()}}function Fa(o){switch(o){case 2:return"wheels";case 3:return"treads";case 4:return"hover";case 5:return"air";case 6:return"burrow";case 7:return"ship";default:return"walker"}}function ct(o,t,e,f,s,l){return{x:o,y:t,z:e,w:f,h:s,d:l}}const za={walker:[ct(-.22,.32,0,.16,.64,.18),ct(.22,.32,0,.16,.64,.18),ct(0,.88,.02,.62,.58,.4),ct(0,1.32,.06,.28,.26,.28),ct(.36,.96,.42,.1,.1,.72)],wheels:[ct(0,.32,0,.7,.28,1.35),ct(-.42,.16,.38,.16,.32,.32),ct(.42,.16,.38,.16,.32,.32),ct(-.42,.16,-.38,.16,.32,.32),ct(.42,.16,-.38,.16,.32,.32),ct(0,.58,-.05,.4,.22,.55),ct(0,.62,.55,.08,.08,.7)],treads:[ct(-.58,.22,0,.22,.36,1.45),ct(.58,.22,0,.22,.36,1.45),ct(0,.36,0,.85,.32,1.35),ct(0,.64,-.08,.48,.24,.62),ct(0,.68,.62,.1,.1,.85)],hover:[ct(0,.28,0,1.35,.14,1.55),ct(0,.5,-.05,.85,.28,1.05),ct(0,.74,-.1,.4,.18,.5),ct(0,.78,.62,.08,.08,.7)],air:[ct(0,.32,0,.22,.18,1.7),ct(0,.32,.98,.12,.1,.28),ct(0,.34,.05,1.7,.05,.38),ct(0,.48,-.68,.06,.28,.22),ct(0,.4,-.72,.55,.04,.16)],burrow:[ct(0,.2,-.05,.7,.28,1.05),ct(0,.22,.62,.22,.22,.48),ct(0,.4,-.15,.28,.16,.4),ct(-.28,.1,.1,.12,.12,.4),ct(.28,.1,.1,.12,.12,.4)],ship:[ct(0,.2,0,.55,.28,1.65),ct(0,.46,-.15,.38,.28,.55),ct(0,.28,.95,.28,.18,.4),ct(0,.42,.55,.12,.12,.5),ct(0,.72,-.15,.06,.28,.06)]};function Hf(o){return za[o]}function Da(o){let t=1/0,e=1/0,f=1/0,s=-1/0,l=-1/0,a=-1/0;for(const r of o)t=Math.min(t,r.x-r.w/2),e=Math.min(e,r.y-r.h/2),f=Math.min(f,r.z-r.d/2),s=Math.max(s,r.x+r.w/2),l=Math.max(l,r.y+r.h/2),a=Math.max(a,r.z+r.d/2);return{minX:t,minY:e,minZ:f,maxX:s,maxY:l,maxZ:a}}function Pa(o){const t=Da(Hf(o));return Math.max(t.maxX-t.minX,t.maxY-t.minY,t.maxZ-t.minZ)}function Ga(o){const t=Hf(o),e=new Float32Array(t.length*24*3),f=new Float32Array(t.length*24*3),s=new Uint32Array(t.length*36),l=[[0,0,1],[0,0,-1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]],a=[[1,-1,1],[-1,-1,1],[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1],[-1,-1,-1],[1,-1,-1],[1,1,-1],[1,-1,-1],[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1],[-1,-1,-1],[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1],[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]];let r=0,n=0,c=0,m=0;for(const d of t){const u=d.w/2,v=d.h/2,p=d.d/2;for(let h=0;h<6;h++){const S=l[h];for(let M=0;M<4;M++){const T=a[h*4+M];e[r++]=d.x+T[0]*u,e[r++]=d.y+T[1]*v,e[r++]=d.z+T[2]*p,f[n++]=S[0],f[n++]=S[1],f[n++]=S[2]}const w=m;s[c++]=w,s[c++]=w+1,s[c++]=w+2,s[c++]=w,s[c++]=w+2,s[c++]=w+3,m+=4}}return{positions:e,normals:f,indices:s}}const Wa=new Map,Ee=[{body:new Z(.77,.38,.18),accent:new Z(.96,.77,.09)},{body:new Z(.9,.84,.76),accent:new Z(.12,.54,.54)},{body:new Z(.95,.96,.97),accent:new Z(.18,.36,1)},{body:new Z(.36,.24,.54),accent:new Z(.24,.86,.48)}];function vo(o,t,e=!1){const f=`mat-${t}-${e?"a":"b"}`,s=o.getMaterialByName(f);if(s)return s;const l=new Et(f,o),a=Ee[t]??Ee[0];return l.diffuseColor=e?a.accent:a.body,l.specularColor=Z.Black(),l}function Dn(o,t,e,f,s=0){const l=Wa.get(t);if(l){const r=l(o);return r.material=vo(o,e,f===0),r.isPickable=!1,r}if(f<=2)return Ea(o,t,e,s,f===0);let a;return f===9?a=Bt.CreateBox(t,{width:1.7,height:1.1,depth:1.7},o):f===3?a=Bt.CreateBox(t,{width:8,height:2.4,depth:8},o):f===8?a=Bt.CreateBox(t,{width:1.6,height:3.2,depth:1.6},o):f>=4&&f<=10?a=Bt.CreateBox(t,{width:2.4,height:1.3,depth:2.4},o):e===1?a=Bt.CreateCylinder(t,{diameterTop:.12,diameterBottom:1.15,height:.7,tessellation:3},o):e===2?a=Bt.CreateCylinder(t,{diameterTop:.35,diameterBottom:.85,height:1.7,tessellation:5},o):e===3?a=Bt.CreateBox(t,{width:1.7,height:.42,depth:1.05},o):a=Bt.CreateBox(t,{width:.95,height:.72,depth:1.15},o),a.material=vo(o,e,f===0||f===8),a.isPickable=!1,a.alwaysSelectAsActiveMesh=!0,f>=3&&f<=10&&Ia(a),a}function Ea(o,t,e,f,s){const l=Fa(f),a=new ee(t,o),r=Ga(l),n=new ie;return n.positions=r.positions,n.normals=r.normals,n.indices=r.indices,n.applyToMesh(a,!0),a.material=vo(o,e,s),a.isPickable=!1,a.alwaysSelectAsActiveMesh=!0,a.doNotSyncBoundingInfo=!0,a.metadata={modelFacing:!0,span:Pa(l)},a}const So=new Map,pf=new Map;let xf=0;function La(o){const t=pf.get("turbine");if(t&&t.getScene()===o)return t;const e=new ua("turbine-steel",o);return e.albedoColor=Z.White(),e.metallic=.32,e.roughness=.46,e.emissiveColor=new Z(.07,.075,.08),e.environmentIntensity=.9,e.backFaceCulling=!0,pf.set("turbine",e),e}function Pn(o,t,e,f=Ca(t)){if(!f)return null;const s=new ee(`struct-${t}-${e}-${xf}`,o);xf+=1;const l=Sa(f),a=new ie;a.positions=l.positions,a.indices=l.indices,a.normals=l.normals;const r=f==="mast"?ba(l.tones,e):ga(l,e);return r&&f==="mast"&&Na(r,l.positions,l.tones),r&&(a.colors=r),a.applyToMesh(s,!0),r&&(s.useVertexColors=!0),s.material=f==="mast"?La(o):r?Ba(o,e):Oa(o,e),s.receiveShadows=!0,s.isPickable=!1,s.alwaysSelectAsActiveMesh=!0,s.doNotSyncBoundingInfo=f!=="mast",s.renderingGroupId=0,s}function Ba(o,t){const e=`struct-paint-${t}`,f=So.get(e);if(f&&f.getScene()===o)return f;const s=new Et(e,o),l=Ee[t]??Ee[0];return s.diffuseColor=Z.White(),s.emissiveColor=l.accent.scale(.12),s.specularColor=new Z(.16,.16,.16),So.set(e,s),s}function Oa(o,t){const e=`struct-mat-${t}`,f=So.get(e);if(f&&f.getScene()===o)return f;const s=new Et(e,o),l=Ee[t]??Ee[0];return s.diffuseColor=new Z(.45,.48,.5),s.emissiveColor=l.accent.scale(.35),s.specularColor=new Z(.08,.08,.08),So.set(e,s),s}function Ia(o){o.refreshBoundingInfo(!0);const t=o.getBoundingInfo().boundingBox.extendSize.y*2;t>0&&(o.bakeTransformIntoVertices(Ke.Translation(0,t/2,0)),o.refreshBoundingInfo(!0))}function Gn(o,t){const e=Bt.CreateBox(`shell-${t}`,{size:.35},o);return e.material=vo(o,t,!0),e.isPickable=!1,e.alwaysSelectAsActiveMesh=!0,e}let vf=null;function Wn(){return vf??=(async()=>{if(typeof window>"u"){const{readFileSync:o}=await Ma(async()=>{const{readFileSync:e}=await import("./__vite-browser-external-D3J-_vhy.js").then(f=>f.a);return{readFileSync:e}},[],import.meta.url);await uf({module_or_path:o(new URL(""+new URL("sim_bg-BVlf3bbe.wasm",import.meta.url).href,import.meta.url))});return}await uf()})(),vf}function O(o,t,e,f,s,l){const a=t+1,r=ze(s/f,0,t-.001),n=ze(l/f,0,e-.001),c=Math.floor(r),m=Math.floor(n),d=r-c,u=n-m,v=o[m*a+c]/64,p=o[m*a+c+1]/64,h=o[(m+1)*a+c]/64,S=o[(m+1)*a+c+1]/64;return v*(1-d)*(1-u)+p*d*(1-u)+h*(1-d)*u+S*d*u}const Vf=1536,Uf=1024,Zf=Vf/2,$a=Uf/2,eo=Zf+1,He=65536;function Ha(o,t,e){const f=ze(Math.round(t*He),0,Vf*He),s=ze(Math.round(e*He),0,Uf*He),l=Math.floor(f/2),a=Math.floor(s/2),r=ze(l>>16,0,Zf-1),n=ze(a>>16,0,$a-1),c=l&65535,m=a&65535,d=o[n*eo+r],u=o[n*eo+r+1],v=o[(n+1)*eo+r],p=o[(n+1)*eo+r+1],h=d+((u-d)*c>>16),S=v+((p-v)*c>>16);return(h+((S-h)*m>>16)<<10)/He}function En(o,t,e,f,s,l,a){return O(o,t,e,f,s,a)+(l-Ha(o,s,a))}function ze(o,t,e){return Math.max(t,Math.min(e,o))}function Xf(o,t=0){const e=Math.max(-1,Math.min(1,o)),f=e<0?oo([.4,.44,.47],Sf,e+1):e<.08?oo(Sf,bf,gf(e/.08)):oo(bf,Va,gf(Math.min(1,(e-.08)/.55))),s=Math.max(0,Math.min(1,t));return oo(f,[1,.93,.8],s*s*.55)}const Sf=[.78,.83,.88],bf=[.55,.67,.85],Va=[.28,.46,.78];function oo(o,t,e){return[o[0]+(t[0]-o[0])*e,o[1]+(t[1]-o[1])*e,o[2]+(t[2]-o[2])*e]}function gf(o){return o*o*(3-2*o)}const Le=.78,Ko=.46,Yf=[[.78,.74,.68],[.58,.54,.5],[.4,.42,.44],[.64,.42,.32],[.3,.29,.28]],bo=48,jf=.073,Kf=.17,qf=.96,Qf=.3;function Jf(o,t){const e=o*Math.PI/180,f=t*Math.PI/180,s=Math.cos(f);return[-Math.sin(e)*s,-Math.sin(f),Math.cos(e)*s]}function Ln(o,t=315,e=20){const f=Bt.CreateSphere("sky",{diameter:400,segments:32,sideOrientation:ee.BACKSIDE},o);f.infiniteDistance=!0,f.isPickable=!1,f.alwaysSelectAsActiveMesh=!0;const s=f.getVerticesData(re.PositionKind),l=Jf(t,e),a=-l[0],r=-l[1],n=-l[2];if(s){const m=new Float32Array(s.length/3*4);for(let d=0;d<s.length;d+=3){const u=s[d],v=s[d+1],p=s[d+2],h=Math.hypot(u,v,p)||1,S=(u*a+v*r+p*n)/h,w=Math.max(0,(S-.72)/.28),[M,T,R]=Xf(v/h,w),C=d/3*4;m[C]=M,m[C+1]=T,m[C+2]=R,m[C+3]=1}f.setVerticesData(re.ColorKind,m)}f.useVertexColors=!0;const c=new Et("sky",o);return c.disableLighting=!0,c.emissiveColor=new Z(1,1,1),c.specularColor=Z.Black(),c.backFaceCulling=!1,c.disableDepthWrite=!0,f.material=c,f}const ts=.9,es=.22,os=.78,Ua=new Set(["twin-ridges","benchfall-quarry"]);function uo(o,t){const e=Ua.has(o)?o:"twin-ridges",s=(t.split(/[/\\]/).pop()??"").replace(/^\.+/,"").replace(/[^a-zA-Z0-9._-]/g,"");return`maps/${e}/${s}`}const Mo=.84,wo=.16,Ao=.9,yo=.1;function Za(o,t){const e=t==="webgl2";switch(o){case"low":return{enabled:!0,density:e?45e-5:7e-4};case"medium":return{enabled:!0,density:e?65e-5:.001};case"high":return{enabled:!0,density:e?85e-5:.0013};case"ultra":return{enabled:!0,density:e?.001:.0015};default:return{enabled:!0,density:.0013}}}function Xa(o){switch(o){case"low":return{step:14,trees:350,shrubs:500,grass:0,rocks:0,cliffs:0,scree:0,treeLod1:40,treeLod2:90,treeCull:260,grassRadius:0,bushCull:140,rockCull:0,rockLod1:0};case"medium":return{step:10,trees:800,shrubs:1600,grass:5e3,rocks:180,cliffs:500,scree:160,treeLod1:50,treeLod2:110,treeCull:340,grassRadius:60,bushCull:180,rockCull:180,rockLod1:45};case"high":return{step:8,trees:1800,shrubs:3400,grass:18e3,rocks:360,cliffs:1400,scree:260,treeLod1:50,treeLod2:115,treeCull:420,grassRadius:90,bushCull:240,rockCull:220,rockLod1:50};case"ultra":return{step:6,trees:2600,shrubs:3800,grass:24e3,rocks:500,cliffs:2e3,scree:320,treeLod1:65,treeLod2:140,treeCull:520,grassRadius:110,bushCull:300,rockCull:260,rockLod1:60};default:return{step:8,trees:1800,shrubs:3400,grass:18e3,rocks:360,cliffs:1400,scree:260,treeLod1:50,treeLod2:115,treeCull:420,grassRadius:90,bushCull:240,rockCull:220,rockLod1:50}}}const Ya=17,Bn=[1,.85,.64],On=5.4,ja=(()=>{const o=Ya*Math.PI/180,t=Math.cos(o)*Math.SQRT1_2;return[-t,Math.sin(o),t]})(),me=ja.map(o=>o.toFixed(3)).join(", ");function Ka(){return{diffuse:[.74,.83,1],ground:[.56,.55,.5],intensity:1.1,env:1.55}}const Go=[.74,.8,.88];function qa(o){if(o.isDisposed)return;const t=If()?.backend==="webgl2"?"webgl2":"webgpu",e=Za(Qe(),t),f=Xf(0);o.fogMode=e.enabled?cf.FOGMODE_EXP2:cf.FOGMODE_NONE,o.fogDensity=e.density,o.fogColor=new Z(f[0]*.35+Go[0]*.65,f[1]*.35+Go[1]*.65,f[2]*.35+Go[2]*.65);const s=Ka();o.environmentIntensity=s.env;for(const l of["sky","menu-sky"]){const a=o.getLightByName(l);a instanceof ha&&(a.diffuse=new Z(s.diffuse[0],s.diffuse[1],s.diffuse[2]),a.groundColor=new Z(s.ground[0],s.ground[1],s.ground[2]),a.intensity=s.intensity)}}function In(o){const t=()=>{o.isDisposed||qa(o)};t();const e=Yo(t),f=Of(t),s=()=>{e(),f()};return o.onDisposeObservable.add(s),s}const Qa=1;function Cf(o,t,e,f,s=Qa){const l=Math.floor(t/s),a=Math.floor(e/s),r=t+1,n=l+1,c=new Float32Array(n*(a+1)*3);let m=1/0,d=-1/0,u=0;for(let h=0;h<=a;h++){const S=Math.min(e,h*s);for(let w=0;w<=l;w++){const M=Math.min(t,w*s),T=o[S*r+M]/64;c[u++]=M*f,c[u++]=T,c[u++]=S*f,T<m&&(m=T),T>d&&(d=T)}}const v=new Uint32Array(l*a*6);let p=0;for(let h=0;h<a;h++)for(let S=0;S<l;S++){const w=h*n+S;v[p++]=w,v[p++]=w+1,v[p++]=w+n,v[p++]=w+1,v[p++]=w+n+1,v[p++]=w+n}return{positions:c,indices:v,cols:l,rows:a,minY:m,maxY:d}}function fo(o,t,e){const f=t+1,s=f*(e+1),l=new Float32Array(s*3);for(let n=0;n<=e;n++)for(let c=0;c<=t;c++){const m=Math.max(0,c-1),d=Math.min(t,c+1),u=Math.max(0,n-1),v=Math.min(e,n+1),p=(n*f+m)*3,h=(n*f+d)*3,S=(u*f+c)*3,w=(v*f+c)*3,M=Math.max(1e-4,o[h]-o[p]),T=Math.max(1e-4,o[w+2]-o[S+2]),R=-(o[h+1]-o[p+1])/M,C=-(o[w+1]-o[S+1])/T,y=Math.hypot(R,1,C)||1,g=(n*f+c)*3;l[g]=R/y,l[g+1]=1/y,l[g+2]=C/y}let a=l,r=new Float32Array(l.length);for(let n=0;n<2;n++){r=new Float32Array(a.length);for(let c=0;c<=e;c++)for(let m=0;m<=t;m++){let d=0,u=0,v=0;for(let S=-1;S<=1;S++){const w=c+S;if(!(w<0||w>e))for(let M=-1;M<=1;M++){const T=m+M;if(T<0||T>t)continue;const R=(w*f+T)*3,C=M===0&&S===0?2:1;d+=a[R]*C,u+=a[R+1]*C,v+=a[R+2]*C}}const p=Math.hypot(d,u,v)||1,h=(c*f+m)*3;r[h]=d/p,r[h+1]=u/p,r[h+2]=v/p}a=r}return r}function Ja(o,t,e,f){const s=t+1,l=e+1,a=s,r=new Uint8Array(s*l*4),n=Math.max(1,Math.round(6/Math.max(f,1e-4))),c=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],m=4;for(let d=0;d<l;d++)for(let u=0;u<s;u++){const v=o[d*a+u]/64;let p=0;for(const[D,tt]of c){let st=0;for(let rt=1;rt<=m;rt++){const K=Math.min(t,Math.max(0,u+D*rt*n)),lt=Math.min(e,Math.max(0,d+tt*rt*n)),xt=Math.hypot(K-u,lt-d)*f;if(xt<.001)continue;const vt=(o[lt*a+K]/64-v)/xt;vt>st&&(st=vt)}p+=Math.max(0,Math.min(1,st*8))}const h=.8+.2*(1-p/c.length),S=Math.max(0,Math.min(255,Math.round(h*255)));let w=0;for(const[D,tt]of c)for(const st of[1,2]){const rt=Math.min(t,Math.max(0,u+D*st*n)),K=Math.min(e,Math.max(0,d+tt*st*n)),lt=Math.hypot(rt-u,K-d)*f;if(lt<.001)continue;const xt=Math.abs(o[K*a+rt]/64-v)/lt;xt>w&&(w=xt)}const M=Math.max(0,Math.min(1,(w-.42)/.7)),T=M*M*(3-2*M);let R=0,C=0,y=0,g=0;for(const D of[4,8]){const tt=Math.max(0,u-D),st=Math.min(t,u+D),rt=Math.max(0,d-D),K=Math.min(e,d+D);R+=o[d*a+st]/64-o[d*a+tt]/64,C+=o[K*a+u]/64-o[rt*a+u]/64,y+=(st-tt)*f,g+=(K-rt)*f}const A=-R/Math.max(1e-4,y),_=-C/Math.max(1e-4,g),L=Math.hypot(A,1,_)||1,E=(d*s+u)*4;r[E]=S,r[E+1]=Math.max(0,Math.min(255,Math.round(T*255))),r[E+2]=Math.max(0,Math.min(255,Math.round((A/L*.5+.5)*255))),r[E+3]=Math.max(0,Math.min(255,Math.round((_/L*.5+.5)*255)))}return{pixels:r,width:s,height:l}}const To=1024,qo=8,fs=To-qo*2,ss=To*2,Gt=.028,Rt=.07,Je=.18,t0=2,Qo=8,Ro=1024,as=Ro-Qo*2,ns=Ro*t0,rs=.7,ls=.22,cs=.055,_o=1.38,Pe=Gt.toFixed(3),le=Rt.toFixed(3),is=Je.toFixed(3),ce=o=>o.toFixed(2),Jo=1.075,ms=Jo.toFixed(2),ko="1.07, 0.98, 0.85",No="1.05, 0.90, 0.72",tf=.94,ef=1.12,ds=tf.toFixed(2),us=ef.toFixed(2),hs="45.0",ps="130.0";function e0(){return`
vec3 tfP = vPositionW;
vec2 tfXZ = tfP.xz;
vec2 tfWarp = vec2(tfNoise(tfXZ * 0.021) - 0.5, tfNoise(tfXZ * 0.021 + vec2(13.7, 4.2)) - 0.5) * 8.5;
vec2 tfD = tfXZ + tfWarp;
float tfCam = length(vEyePosition.xyz - tfP);
vec3 tfVN = normalize(vNormalW);
#ifdef TF_TESS
// vColor: rg terrain smooth normal xz, b displacement / 4, a cliff mask.
// Close up the photo follows the displaced surface (no stretch on fractures);
// at range it is projected from the undisplaced face along the smooth normal,
// so the RTS view reads as one even stone sheet instead of swirled strata.
vec2 tfTnXZ = vColor.rg * 2.0 - 1.0;
vec3 tfTerrN = normalize(vec3(tfTnXZ.x, sqrt(max(0.0, 1.0 - dot(tfTnXZ, tfTnXZ))), tfTnXZ.y));
float tfFar = smoothstep(${hs}, ${ps}, tfCam);
vec3 tfMapP = mix(tfP, tfP - tfTerrN * (vColor.b * 4.0), tfFar);
// Horizontal axes follow the smooth face (coherent, no fold smears); the
// top-down projection is dropped wherever the displaced rock is steeper than
// the terrain says, which is what stretched the base vertically.
vec3 tfNearN = normalize(mix(vec3(tfTerrN.x, min(tfTerrN.y, max(tfVN.y, 0.0)), tfTerrN.z), tfVN, 0.25));
vec3 tfMapN = normalize(mix(tfNearN, tfTerrN, tfFar));
#else
vec3 tfMapP = tfP;
vec3 tfMapN = tfVN;
#endif
vec3 tfGeom = normalize(mix(normalize(normalW), vec3(0.0, 1.0, 0.0), clamp((tfCam - 70.0) / 380.0, 0.0, 0.28)));
float tfSteep = tfCliff(tfVN.y);
float tfNMed = tfFbm(tfXZ * 0.028 + vec2(17.0, 4.0));
float tfNHi = tfNoise(tfXZ * 0.11);
#ifdef TF_TESS
// Vertex alpha is the terrain-slope cliff mask, so fractured ledges stay rock.
float tfEdgeN = tfFbm(tfXZ * 0.07 + vec2(tfP.y * 0.05, 9.0));
float tfRockW = clamp(vColor.a * (0.82 + 0.36 * tfEdgeN) * 1.1, 0.0, 1.0);
// Grassy ledges: flat-topped displaced facets, in long horizontal runs along
// the face (noise stretched along the strike), wide enough to read from RTS.
// Only on real walls (steep terrain), so tess patch edges on gentler lips do
// not show as green rectangles.
tfRockW *= 1.0 - smoothstep(0.76, 0.9, tfVN.y) * smoothstep(0.46, 0.6, tfFbm(vec2((tfP.x + tfP.z) * 0.028, tfP.y * 0.32) + vec2(3.0, 0.0))) * (1.0 - smoothstep(0.5, 0.68, tfTerrN.y));
#else
// Kit tops only take a faint soil dusting: green caps read as round blobs.
float tfRockW = 1.0 - smoothstep(0.9, 0.99, tfVN.y) * 0.2;
#endif
float tfMacTile = ${Pe} + (${le} - ${Pe}) * (1.0 - smoothstep(90.0, 220.0, tfCam));
vec3 tfMacro = tfCliffTri(cliffAlbedoSampler, 0.0, tfMapP, tfMapN, tfMacTile);
#ifdef TF_KITFAR
// Far kit cut (LOD2, past 85 m): one macro tap set; the module's own normal
// map and vertex AO carry the form, so the wall's extra layers are skipped.
vec3 tfCliffCol = tfMacro;
float tfCav = 0.6;
#else
vec3 tfGrit = tfCliffTri(cliffAlbedoSampler, 1.0, tfMapP, tfMapN, tfMacTile * 1.2);
vec3 tfCliffCol = mix(tfMacro, tfGrit, mix(0.22, 0.6, smoothstep(70.0, 180.0, tfCam)));
float tfDetMix = 1.0 - smoothstep(24.0, 130.0, tfCam);
if (tfDetMix > 0.02) {
  vec3 tfDetail = tfCliffTri(cliffAlbedoSampler, 0.0, tfMapP, tfMapN, mix(${le}, ${is}, 1.0 - smoothstep(20.0, 70.0, tfCam)));
  tfCliffCol = mix(tfCliffCol, tfDetail, tfDetMix * mix(0.5, 0.8, 1.0 - smoothstep(14.0, 45.0, tfCam)));
}
float tfCav = tfCliffTri(cliffAoSampler, 0.0, tfMapP, tfMapN, ${le}).r;
#endif
// Deep crevices: a sharper, darker cavity curve.
tfCliffCol *= mix(0.54, 1.07, smoothstep(0.06, 0.8, tfCav));
float tfToneN = tfFbm(tfXZ * 0.007 + vec2(2.0, 9.0));
// Macro tone along the wall: sun-bleached stretches and darker damp recesses.
tfCliffCol *= mix(vec3(0.94, 0.96, 0.98), vec3(1.04, 1.00, 0.94), tfToneN);
#ifndef TF_KITFAR
float tfBleach = tfFbm(tfXZ * 0.0045 + vec2(31.0, 7.0));
float tfDamp = smoothstep(0.55, 0.8, tfFbm(tfXZ * 0.011 + vec2(5.0, 23.0)));
tfCliffCol *= mix(0.86, 1.14, tfBleach) * mix(vec3(1.0), vec3(0.86, 0.87, 0.85), tfDamp);
#endif
tfCliffCol *= ${ms};
// Warm tan/brown sandstone with grey bands and rust/ochre staining.
float tfNear = 1.0 - smoothstep(110.0, 150.0, tfCam);
float tfLens = 1.0;
if (tfNear > 0.0) {
tfLens = mix(1.0, smoothstep(0.32, 0.68, tfNoise(vec2((tfP.x + tfP.z) * 0.035, tfP.y * 0.09 + 21.0))), tfNear);
}
float tfSsL = dot(tfCliffCol, vec3(0.333));
float tfBand = smoothstep(0.55, 0.72, tfFbm(vec2(tfP.y * 0.21 + tfFbm(vec2((tfP.x + tfP.z) * 0.02, tfP.y * 0.05)) * 1.6, 11.0 + (tfP.x - tfP.z) * 0.01))) * smoothstep(0.35, 0.6, tfFbm(vec2((tfP.x + tfP.z) * 0.012, 3.0 + tfP.y * 0.03))) * tfLens;
float tfCourse = floor(tfP.y / 2.8 + tfNoise(vec2((tfP.x - tfP.z) * 0.015, 7.0)) * 1.4);
float tfCh = fract(sin(tfCourse * 12.9898 + 4.1) * 43758.5453);
float tfCh2 = fract(sin(tfCourse * 78.233 + 1.7) * 24634.6345);
vec3 tfCourseTint = mix(vec3(1.10, 0.90, 0.74), vec3(1.08, 1.00, 0.78), tfCh2);
tfCliffCol *= mix(vec3(1.0), tfCourseTint, tfCh * 0.55);
tfCliffCol = mix(tfCliffCol * vec3(${ko}), vec3(tfSsL) * vec3(1.02, 0.98, 0.92), tfBand * 0.32);
#ifndef TF_KITFAR
float tfStain = smoothstep(0.5, 0.78, tfFbm(vec2((tfP.x + tfP.z) * 0.08, tfP.y * 0.025 + 4.0)));
tfCliffCol *= mix(vec3(1.0), vec3(${No}), tfStain * 0.7);
if (tfNear > 0.0) {
float tfRun = smoothstep(0.62, 0.85, tfNoise(vec2((tfP.x + tfP.z) * 0.09, tfP.y * 0.012 + 2.0)));
tfCliffCol *= mix(vec3(1.0), vec3(1.06, 0.86, 0.70), tfRun * 0.4 * tfNear);
}
#endif
// At RTS range the photo's wavy strata read as marble: compress its value
// swing toward the mean so geometry, cavities and sun carry the form.
float tfLumC = max(dot(tfCliffCol, vec3(0.333)), 0.02);
tfCliffCol *= pow(0.545 / tfLumC, 0.42 * smoothstep(90.0, 200.0, tfCam));
#ifndef TF_KITFAR
float tfStreak = tfFbm(vec2(tfP.x * 0.16 + tfP.z * 0.13, tfP.y * 0.05 + 6.0));
tfCliffCol *= mix(vec3(1.0), vec3(0.90, 0.91, 0.92), smoothstep(0.70, 0.94, tfStreak) * 0.18);
#endif
vec3 tfMoss = vec3(0.27, 0.34, 0.20);
if (abs(tfDebug.x - 5.0) > 0.5) {
  tfCliffCol = mix(tfCliffCol, mix(tfCliffCol, tfMoss, 0.5), (1.0 - tfCav) * (0.25 + 0.5 * tfNHi) * 0.45);
}
#ifdef TF_KITFAR
vec3 tfSoil = tfCliffCol * 0.85;
#else
vec3 tfSoil = tfGndDist(groundAlbedoSampler, 2.0, tfD, tfCam);
#endif
#ifdef TF_TESS
if (tfRockW < 0.98) {
  vec3 tfGrass = tfGndDist(groundAlbedoSampler, 0.0, tfD, tfCam) * ${_o.toFixed(2)};
  // Soil lip where the rock rolls over into the cap, grass beyond.
  tfSoil = mix(tfGrass, tfSoil, clamp(0.2 + 0.3 * tfNMed + 0.6 * smoothstep(0.05, 0.45, tfRockW), 0.0, 1.0));
  // Sloped fringe between walls (spurs, ramps) is scree, not a flat green wedge.
  float tfScr = clamp((1.0 - smoothstep(0.8, 0.93, tfTerrN.y)) * (0.5 + 0.7 * tfNMed), 0.0, 0.92);
  tfSoil = mix(tfSoil, tfCliffTri(cliffAlbedoSampler, 3.0, tfMapP, tfMapN, tfMacTile) * 1.12, tfScr);
}
#endif
vec3 tfAlbedo = mix(tfSoil, tfCliffCol, tfRockW);
#ifdef TF_KITFAR
vec3 tfTs = vec3(0.0, 0.0, 1.0);
float tfCliffRough = 0.6;
#else
float tfNrmSlot = tfCam < 70.0 ? 2.0 : 0.0;
vec3 tfTs = (tfCam < 85.0
  ? tfCliffLook(cliffNrmSampler, tfNrmSlot, tfMapP, tfMapN, tfCam)
  : tfCliffTri(cliffNrmSampler, tfNrmSlot, tfMapP, tfMapN, ${Pe})) * 2.0 - 1.0;
float tfCloseN = mix(1.0, 1.55, 1.0 - smoothstep(12.0, 70.0, tfCam));
tfTs = vec3(tfTs.x * tfCloseN, tfTs.y * tfCloseN, tfTs.z);
float tfCliffRough = tfCliffTri(cliffRoughSampler, 0.0, tfMapP, tfMapN, ${le}).r;
#endif
float tfRough = mix(tfCliffRough, 0.38, 0.28);
if (abs(tfDebug.x - 4.0) < 0.5) {
  tfTs = vec3(0.0, 0.0, 1.0);
}
tfTs = normalize(tfTs);
vec3 tfUp = abs(tfGeom.y) > 0.96 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
vec3 tfT = normalize(cross(tfUp, tfGeom));
vec3 tfB = cross(tfGeom, tfT);
normalW = normalize(tfT * tfTs.x + tfB * tfTs.y + tfGeom * tfTs.z);
vec4 tfAoTex = texture2D(aoSampler, vec2(tfXZ.x / mapSize.x, tfXZ.y / mapSize.y));
float tfAo = (${ce(Mo)} + ${ce(wo)} * clamp(tfVN.y, 0.0, 1.0)) * (${ce(Ao)} + ${ce(yo)} * clamp(tfTs.z, 0.0, 1.0));
tfAo *= mix(tfAoTex.r, 1.0, tfSteep);
tfAo = clamp(tfAo, mix(0.70, 0.36, tfRockW), 1.0);
if (abs(tfDebug.x - 2.0) < 0.5 || abs(tfDebug.x - 5.0) < 0.5) {
  tfAo = 1.0;
}
tfAlbedo *= mix(1.0, mix(0.72, 0.98, clamp(tfTs.z, 0.0, 1.0)), tfRockW * 0.60);
tfAlbedo *= tfAo;
vec3 tfSunG = vec3(${me});
float tfFormR = smoothstep(70.0, 180.0, tfCam);
tfAlbedo *= mix(1.0, mix(mix(${ds}, 0.90, tfFormR), mix(${us}, 1.40, tfFormR), smoothstep(-0.2, 0.8, dot(tfVN, tfSunG))), tfRockW);
#ifdef TF_TESS
// Recess AO from the fracture depth: gullies and joints sit back and darken.
tfAlbedo *= mix(1.0, mix(0.64, 1.10, smoothstep(0.1, 0.7, vColor.b)), tfRockW * (0.55 + 0.45 * tfFormR));
#endif
vec3 tfViewR = normalize(vEyePosition.xyz - tfP);
vec3 tfSun = vec3(${me});
float tfNdL = clamp(dot(normalW, tfSun), 0.0, 1.0);
// Recess AO and contact shadow on rock: overhang undersides and the shadow
// side of crevices darken, so ledges and cracks read as depth.
float tfUnder = smoothstep(0.05, -0.55, tfVN.y);
float tfCrev = 1.0 - smoothstep(0.12, 0.7, tfCav);
float tfMicro = mix(1.0, mix(0.66, 1.0, smoothstep(-0.05, 0.35, dot(normalW, tfSun))), tfCrev);
tfAlbedo *= mix(1.0, mix(1.0, 0.6, tfUnder) * tfMicro, tfRockW);
float tfNdV = clamp(dot(normalW, tfViewR), 0.0, 1.0);
float tfRim = pow(1.0 - tfNdV, 3.0) * tfNdL;
vec3 tfHalf = normalize(tfSun + tfViewR);
float tfSpec = pow(clamp(dot(normalW, tfHalf), 0.0, 1.0), 28.0) * tfNdL;
tfAlbedo += tfRockW * (tfRim * vec3(0.14, 0.13, 0.11) + tfSpec * vec3(0.22, 0.20, 0.16) * (1.0 - tfRough));
if (abs(tfDebug.x - 10.0) < 0.5) {
  tfAlbedo = tfVN * 0.5 + 0.5;
  normalW = vec3(0.0, 1.0, 0.0);
}
if (abs(tfDebug.x - 13.0) < 0.5) {
  tfAlbedo = vec3(0.9, 0.1, 0.8);
}
#ifndef TF_TESS
#ifdef VERTEXCOLOR
// Pass 16 kit modules: their own baked AO, carried in the vertex colour.
#ifdef TF_KITFAR
// Far cut: the simplified bake's AO pools into blotches, so it only shades lightly.
tfAlbedo *= mix(vec3(1.0), vColor.rgb, 0.5);
#else
tfAlbedo *= mix(vec3(1.0), vColor.rgb, 0.9);
#endif
#endif
#endif
baseColor.rgb = clamp(tfAlbedo, 0.0, 1.0);
`}function o0(){return`
let tfP = fragmentInputs.vPositionW;
let tfXZ = tfP.xz;
let tfWarp = vec2f(tfNoise(tfXZ * 0.021) - 0.5, tfNoise(tfXZ * 0.021 + vec2f(13.7, 4.2)) - 0.5) * 8.5;
let tfD = tfXZ + tfWarp;
let tfCam = length(scene.vEyePosition.xyz - tfP);
let tfVN = normalize(fragmentInputs.vNormalW);
#ifdef TF_TESS
let tfTnXZ = fragmentInputs.vColor.rg * 2.0 - 1.0;
let tfTerrN = normalize(vec3f(tfTnXZ.x, sqrt(max(0.0, 1.0 - dot(tfTnXZ, tfTnXZ))), tfTnXZ.y));
let tfFar = smoothstep(${hs}, ${ps}, tfCam);
let tfMapP = mix(tfP, tfP - tfTerrN * (fragmentInputs.vColor.b * 4.0), tfFar);
let tfNearN = normalize(mix(vec3f(tfTerrN.x, min(tfTerrN.y, max(tfVN.y, 0.0)), tfTerrN.z), tfVN, 0.25));
let tfMapN = normalize(mix(tfNearN, tfTerrN, tfFar));
#else
let tfMapP = tfP;
let tfMapN = tfVN;
#endif
let tfGeom = normalize(mix(normalize(normalW), vec3f(0.0, 1.0, 0.0), clamp((tfCam - 70.0) / 380.0, 0.0, 0.28)));
let tfSteep = tfCliff(tfVN.y);
let tfNMed = tfFbm(tfXZ * 0.028 + vec2f(17.0, 4.0));
let tfNHi = tfNoise(tfXZ * 0.11);
#ifdef TF_TESS
let tfEdgeN = tfFbm(tfXZ * 0.07 + vec2f(tfP.y * 0.05, 9.0));
var tfRockW = clamp(fragmentInputs.vColor.a * (0.82 + 0.36 * tfEdgeN) * 1.1, 0.0, 1.0);
tfRockW = tfRockW * (1.0 - smoothstep(0.76, 0.9, tfVN.y) * smoothstep(0.46, 0.6, tfFbm(vec2f((tfP.x + tfP.z) * 0.028, tfP.y * 0.32) + vec2f(3.0, 0.0))) * (1.0 - smoothstep(0.5, 0.68, tfTerrN.y)));
#else
let tfRockW = 1.0 - smoothstep(0.9, 0.99, tfVN.y) * 0.2;
#endif
let tfMacTile = ${Pe} + (${le} - ${Pe}) * (1.0 - smoothstep(90.0, 220.0, tfCam));
let tfMacro = tfCliffTri(cliffAlbedoSampler, cliffAlbedoSamplerSampler, 0.0, tfMapP, tfMapN, tfMacTile);
#ifdef TF_KITFAR
var tfCliffCol = tfMacro;
let tfCav = 0.6;
#else
let tfGrit = tfCliffTri(cliffAlbedoSampler, cliffAlbedoSamplerSampler, 1.0, tfMapP, tfMapN, tfMacTile * 1.2);
var tfCliffCol = mix(tfMacro, tfGrit, mix(0.22, 0.6, smoothstep(70.0, 180.0, tfCam)));
let tfDetMix = 1.0 - smoothstep(24.0, 130.0, tfCam);
if (tfDetMix > 0.02) {
  let tfDetTile = mix(${le}, ${is}, 1.0 - smoothstep(20.0, 70.0, tfCam));
  let tfDetail = tfCliffTri(cliffAlbedoSampler, cliffAlbedoSamplerSampler, 0.0, tfMapP, tfMapN, tfDetTile);
  tfCliffCol = mix(tfCliffCol, tfDetail, tfDetMix * mix(0.5, 0.8, 1.0 - smoothstep(14.0, 45.0, tfCam)));
}
let tfCav = tfCliffTri(cliffAoSampler, cliffAoSamplerSampler, 0.0, tfMapP, tfMapN, ${le}).r;
#endif
tfCliffCol = tfCliffCol * mix(0.54, 1.07, smoothstep(0.06, 0.8, tfCav));
let tfToneN = tfFbm(tfXZ * 0.007 + vec2f(2.0, 9.0));
tfCliffCol = tfCliffCol * mix(vec3f(0.94, 0.96, 0.98), vec3f(1.04, 1.00, 0.94), tfToneN);
#ifndef TF_KITFAR
let tfBleach = tfFbm(tfXZ * 0.0045 + vec2f(31.0, 7.0));
let tfDamp = smoothstep(0.55, 0.8, tfFbm(tfXZ * 0.011 + vec2f(5.0, 23.0)));
tfCliffCol = tfCliffCol * mix(0.86, 1.14, tfBleach) * mix(vec3f(1.0), vec3f(0.86, 0.87, 0.85), tfDamp);
#endif
tfCliffCol = tfCliffCol * ${ms};
let tfNear = 1.0 - smoothstep(110.0, 150.0, tfCam);
var tfLens = 1.0;
if (tfNear > 0.0) {
tfLens = mix(1.0, smoothstep(0.32, 0.68, tfNoise(vec2f((tfP.x + tfP.z) * 0.035, tfP.y * 0.09 + 21.0))), tfNear);
}
let tfSsL = dot(tfCliffCol, vec3f(0.333));
let tfBand = smoothstep(0.55, 0.72, tfFbm(vec2f(tfP.y * 0.21 + tfFbm(vec2f((tfP.x + tfP.z) * 0.02, tfP.y * 0.05)) * 1.6, 11.0 + (tfP.x - tfP.z) * 0.01))) * smoothstep(0.35, 0.6, tfFbm(vec2f((tfP.x + tfP.z) * 0.012, 3.0 + tfP.y * 0.03))) * tfLens;
let tfCourse = floor(tfP.y / 2.8 + tfNoise(vec2f((tfP.x - tfP.z) * 0.015, 7.0)) * 1.4);
let tfCh = fract(sin(tfCourse * 12.9898 + 4.1) * 43758.5453);
let tfCh2 = fract(sin(tfCourse * 78.233 + 1.7) * 24634.6345);
let tfCourseTint = mix(vec3f(1.10, 0.90, 0.74), vec3f(1.08, 1.00, 0.78), tfCh2);
tfCliffCol = tfCliffCol * mix(vec3f(1.0), tfCourseTint, tfCh * 0.55);
tfCliffCol = mix(tfCliffCol * vec3f(${ko}), vec3f(tfSsL) * vec3f(1.02, 0.98, 0.92), tfBand * 0.32);
#ifndef TF_KITFAR
let tfStain = smoothstep(0.5, 0.78, tfFbm(vec2f((tfP.x + tfP.z) * 0.08, tfP.y * 0.025 + 4.0)));
tfCliffCol = tfCliffCol * mix(vec3f(1.0), vec3f(${No}), tfStain * 0.7);
if (tfNear > 0.0) {
let tfRun = smoothstep(0.62, 0.85, tfNoise(vec2f((tfP.x + tfP.z) * 0.09, tfP.y * 0.012 + 2.0)));
tfCliffCol = tfCliffCol * mix(vec3f(1.0), vec3f(1.06, 0.86, 0.70), tfRun * 0.4 * tfNear);
}
#endif
let tfLumC = max(dot(tfCliffCol, vec3f(0.333)), 0.02);
tfCliffCol = tfCliffCol * pow(0.545 / tfLumC, 0.42 * smoothstep(90.0, 200.0, tfCam));
#ifndef TF_KITFAR
let tfStreak = tfFbm(vec2f(tfP.x * 0.16 + tfP.z * 0.13, tfP.y * 0.05 + 6.0));
tfCliffCol = tfCliffCol * mix(vec3f(1.0), vec3f(0.90, 0.91, 0.92), smoothstep(0.70, 0.94, tfStreak) * 0.18);
#endif
let tfMoss = vec3f(0.27, 0.34, 0.20);
if (abs(uniforms.tfDebug.x - 5.0) > 0.5) {
  tfCliffCol = mix(tfCliffCol, mix(tfCliffCol, tfMoss, 0.5), (1.0 - tfCav) * (0.25 + 0.5 * tfNHi) * 0.45);
}
#ifdef TF_KITFAR
var tfSoil = tfCliffCol * 0.85;
#else
var tfSoil = tfGndDist(groundAlbedoSampler, groundAlbedoSamplerSampler, 2.0, tfD, tfCam);
#endif
#ifdef TF_TESS
if (tfRockW < 0.98) {
  let tfGrassC = tfGndDist(groundAlbedoSampler, groundAlbedoSamplerSampler, 0.0, tfD, tfCam) * ${_o.toFixed(2)};
  tfSoil = mix(tfGrassC, tfSoil, clamp(0.2 + 0.3 * tfNMed + 0.6 * smoothstep(0.05, 0.45, tfRockW), 0.0, 1.0));
  let tfScr = clamp((1.0 - smoothstep(0.8, 0.93, tfTerrN.y)) * (0.5 + 0.7 * tfNMed), 0.0, 0.92);
  tfSoil = mix(tfSoil, tfCliffTri(cliffAlbedoSampler, cliffAlbedoSamplerSampler, 3.0, tfMapP, tfMapN, tfMacTile) * 1.12, tfScr);
}
#endif
var tfAlbedo = mix(tfSoil, tfCliffCol, tfRockW);
#ifdef TF_KITFAR
var tfTs = vec3f(0.0, 0.0, 1.0);
let tfCliffRough = 0.6;
#else
let tfNrmSlot = select(0.0, 2.0, tfCam < 70.0);
var tfTs = (select(
  tfCliffTri(cliffNrmSampler, cliffNrmSamplerSampler, tfNrmSlot, tfMapP, tfMapN, ${Pe}),
  tfCliffLook(cliffNrmSampler, cliffNrmSamplerSampler, tfNrmSlot, tfMapP, tfMapN, tfCam),
  tfCam < 85.0
)) * 2.0 - 1.0;
let tfCloseN = mix(1.0, 1.55, 1.0 - smoothstep(12.0, 70.0, tfCam));
tfTs = vec3f(tfTs.x * tfCloseN, tfTs.y * tfCloseN, tfTs.z);
let tfCliffRough = tfCliffTri(cliffRoughSampler, cliffRoughSamplerSampler, 0.0, tfMapP, tfMapN, ${le}).r;
#endif
let tfRough = mix(tfCliffRough, 0.38, 0.28);
if (abs(uniforms.tfDebug.x - 4.0) < 0.5) {
  tfTs = vec3f(0.0, 0.0, 1.0);
}
tfTs = normalize(tfTs);
let tfUp = select(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), abs(tfGeom.y) > 0.96);
let tfT = normalize(cross(tfUp, tfGeom));
let tfB = cross(tfGeom, tfT);
normalW = normalize(tfT * tfTs.x + tfB * tfTs.y + tfGeom * tfTs.z);
let tfAoTex = textureSample(aoSampler, aoSamplerSampler, vec2f(tfXZ.x / uniforms.mapSize.x, tfXZ.y / uniforms.mapSize.y));
var tfAo = (${ce(Mo)} + ${ce(wo)} * clamp(tfVN.y, 0.0, 1.0)) * (${ce(Ao)} + ${ce(yo)} * clamp(tfTs.z, 0.0, 1.0));
tfAo = tfAo * mix(tfAoTex.r, 1.0, tfSteep);
tfAo = clamp(tfAo, mix(0.70, 0.36, tfRockW), 1.0);
if (abs(uniforms.tfDebug.x - 2.0) < 0.5 || abs(uniforms.tfDebug.x - 5.0) < 0.5) {
  tfAo = 1.0;
}
tfAlbedo = tfAlbedo * mix(1.0, mix(0.72, 0.98, clamp(tfTs.z, 0.0, 1.0)), tfRockW * 0.60);
tfAlbedo = tfAlbedo * tfAo;
let tfSunG = vec3f(${me});
let tfFormR = smoothstep(70.0, 180.0, tfCam);
tfAlbedo = tfAlbedo * mix(1.0, mix(mix(${ds}, 0.90, tfFormR), mix(${us}, 1.40, tfFormR), smoothstep(-0.2, 0.8, dot(tfVN, tfSunG))), tfRockW);
#ifdef TF_TESS
tfAlbedo = tfAlbedo * mix(1.0, mix(0.64, 1.10, smoothstep(0.1, 0.7, fragmentInputs.vColor.b)), tfRockW * (0.55 + 0.45 * tfFormR));
#endif
let tfViewR = normalize(scene.vEyePosition.xyz - tfP);
let tfSun = vec3f(${me});
let tfNdL = clamp(dot(normalW, tfSun), 0.0, 1.0);
let tfUnder = smoothstep(0.05, -0.55, tfVN.y);
let tfCrev = 1.0 - smoothstep(0.12, 0.7, tfCav);
let tfMicro = mix(1.0, mix(0.66, 1.0, smoothstep(-0.05, 0.35, dot(normalW, tfSun))), tfCrev);
tfAlbedo = tfAlbedo * mix(1.0, mix(1.0, 0.6, tfUnder) * tfMicro, tfRockW);
let tfNdV = clamp(dot(normalW, tfViewR), 0.0, 1.0);
let tfRim = pow(1.0 - tfNdV, 3.0) * tfNdL;
let tfHalf = normalize(tfSun + tfViewR);
let tfSpec = pow(clamp(dot(normalW, tfHalf), 0.0, 1.0), 28.0) * tfNdL;
tfAlbedo = tfAlbedo + tfRockW * (tfRim * vec3f(0.14, 0.13, 0.11) + tfSpec * vec3f(0.22, 0.20, 0.16) * (1.0 - tfRough));
if (abs(uniforms.tfDebug.x - 10.0) < 0.5) {
  tfAlbedo = tfVN * 0.5 + 0.5;
  normalW = vec3f(0.0, 1.0, 0.0);
}
if (abs(uniforms.tfDebug.x - 13.0) < 0.5) {
  tfAlbedo = vec3f(0.9, 0.1, 0.8);
}
#ifndef TF_TESS
#ifdef VERTEXCOLOR
#ifdef TF_KITFAR
tfAlbedo = tfAlbedo * mix(vec3f(1.0), fragmentInputs.vColor.rgb, 0.5);
#else
tfAlbedo = tfAlbedo * mix(vec3f(1.0), fragmentInputs.vColor.rgb, 0.9);
#endif
#endif
#endif
baseColor = vec4f(clamp(tfAlbedo, vec3f(0.0), vec3f(1.0)), baseColor.a);
`}const Be=3,f0=.8,s0=1.5,a0=1.5;function so(o,t){const e=Math.sin(o*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function $t(o,t){const e=Math.floor(o),f=Math.floor(t),s=o-e,l=t-f,a=s*s*(3-2*s),r=l*l*(3-2*l),n=so(e,f),c=so(e+1,f),m=so(e,f+1),d=so(e+1,f+1);return n+(c-n)*a+(m-n)*r+(n-c-m+d)*a*r}function Wo(o,t){return .65*$t(o,t)+.35*$t(o*2.03,t*2.03)}function Ge(o){const t=Math.max(0,Math.min(1,o));return t*t*(3-2*t)}function Fo(o,t,e=!0){const f=Wo(o*.032,t*.032),s=Wo(o*.07,t*.07),l=Wo(o*.19+11.2,t*.19+3.7),a=$t(o*.55+4.1,t*.55+8.3),r=$t(o*1.15+2.2,t*1.15+6.1);if(!e)return(f-.5)*2.4+(s-.5)*1.5+(l-.5)*.9+(a-.5)*.4+(r-.5)*.35;const n=$t(o*.05+3.3,t*.05+7.7),c=Math.pow(1-Math.abs(2*n-1),1.6)-.42;return(f-.5)*2.4+(s-.5)*1.5+(l-.5)*.9+(a-.5)*.4+(r-.5)*.35+c*s0*.5+of(o,t)}function of(o,t){const e=o*.8-t*.6,f=o*.6+t*.8,s=Ge(($t(e*.024+1.3,f*.024+5.1)-.5)/.09),l=Math.pow(1-Math.abs(2*$t(e*.06+8.2,f*.06+2.6)-1),3),a=Ge(($t(e*.035+4.4,f*.035+9.9)-.64)/.1);return a0*(s+.4*l-.5*a*(1-s)-.3)}function xs(o,t){const e=o*.8-t*.6,f=o*.6+t*.8,s=Ge(($t(e*.16+2.7,f*.16+9.1)-.4)/.12),l=Ge(($t(e*.37+6.1,f*.37+3.3)-.45)/.1),a=Ge(($t(e*.045+5.2,f*.045+1.9)-.68)/.08),r=$t(o*.55,t*.55),n=(1-Math.abs(2*r-1))**2;return .5+2*s+.9*l+3.6*a+.45*n}function zo(o){return Ge((.78-o)/.32)}function n0(o,t,e,f){const s=t+1,l=Math.floor(f/s),a=f-l*s,r=o[f*3+1];let n=0,c=0,m=0;for(const[u,v]of[[8,0],[-8,0],[0,8],[0,-8],[6,6],[-6,6],[6,-6],[-6,-6]]){const p=Math.max(0,Math.min(t,a+u)),S=Math.max(0,Math.min(e,l+v))*s+p,w=o[S*3+1];n+=w,c+=1,r-w>m&&(m=r-w)}if(c===0||r<n/c+.4)return 0;const d=Math.max(0,Math.min(1,(m-3)/10));return d*d*(3-2*d)}const vs=90/64,Ss=.08;function r0(o,t,e){const f=t+1,s=new Uint8Array((e+1)*f),l=(a,r)=>o[(r*f+a)*3+1];for(let a=0;a<e;a++)for(let r=0;r<t;r++){const n=l(r,a),c=l(r+1,a),m=l(r,a+1),d=l(r+1,a+1);Math.max(Math.abs(c-n),Math.abs(m-n),Math.abs(d-c),Math.abs(d-m))>vs||(s[a*f+r]=1,s[a*f+r+1]=1,s[(a+1)*f+r]=1,s[(a+1)*f+r+1]=1)}return s}function Zt(o,t,e,f,s,l){const a=t+1,r=Math.max(0,Math.min(t-1,Math.floor(s/f))),n=Math.max(0,Math.min(e-1,Math.floor(l/f))),c=(p,h)=>o[h*a+p]/64,m=c(r,n),d=c(r+1,n),u=c(r,n+1),v=c(r+1,n+1);return Math.max(Math.abs(d-m),Math.abs(u-m),Math.abs(v-d),Math.abs(v-u))<=vs}function Mf(o,t,e=Be,f,s){const l=Math.min(o.length,t.length)/3,a=f!=null&&s!=null,r=a?o.slice():o,n=a?r0(r,f,s):null;for(let c=0;c<l;c++){const m=t[c*3+1],d=zo(m),u=a?n0(r,f,s,c):0,v=Math.max(d,u*.95)*(n&&n[c]?Ss:1);if(v<=.02)continue;const p=o[c*3],h=o[c*3+2],S=(Fo(p,h)-(n&&n[c]?of(p,h):0))*v*e,w=u>.05&&!(n&&n[c])?u*f0*xs(o[c*3],o[c*3+2]):0;o[c*3]+=t[c*3]*S,o[c*3+1]+=m*S+w,o[c*3+2]+=t[c*3+2]*S}}const ot=128,oe=2,Wt=ot+oe*2,qe=4,jt=Wt*qe,Xt={grass:0,scrub:1,rock:2,scree:3,gravel:4,road:5,mud:6,sand:7,concrete:8};function ge(o,t,e){let f=Math.imul(o,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return f=Math.imul(f^f>>>13,1274126177),((f^f>>>16)>>>0)/4294967296}function l0(o,t,e,f){const s=Math.floor(o),l=Math.floor(t),a=o-s,r=t-l,n=a*a*(3-2*a),c=r*r*(3-2*r),m=(s%f+f)%f,d=(l%f+f)%f,u=(m+1)%f,v=(d+1)%f,p=ge(m,d,e),h=ge(u,d,e),S=ge(m,v,e),w=ge(u,v,e);return p*(1-n)*(1-c)+h*n*(1-c)+S*(1-n)*c+w*n*c}function ae(o,t,e,f,s){let l=0,a=.5,r=0,n=1,c=f;for(let m=0;m<s;m++)l+=a*l0(o*n,t*n,e+m*17,c),r+=a,a*=.5,n*=2,c*=2;return l/r}function wf(o,t,e,f){const s=Math.max(1,Math.round(ot/f)),l=Math.floor(o/f),a=Math.floor(t/f);let r=1e9;for(let n=-1;n<=1;n++)for(let c=-1;c<=1;c++){const m=l+c,d=a+n,u=(m%s+s)%s,v=(d%s+s)%s,p=m*f+ge(u,v,e)*f,h=d*f+ge(u,v,e+9)*f,S=o-p,w=t-h,M=S*S+w*w;M<r&&(r=M)}return Math.sqrt(r)/f}function Ce(o){return Math.max(0,Math.min(255,Math.round(o)))}function c0(o){const t=ot*ot,e=new Uint8Array(t*3),f=new Float32Array(t),s={0:[168,170,112],1:[150,156,98],2:[142,138,128],3:[168,150,126],4:[146,122,92],5:[112,88,64],6:[92,68,44],7:[214,188,138],8:[164,162,154]},[l,a,r]=s[o]??[140,130,110];for(let n=0;n<ot;n++)for(let c=0;c<ot;c++){const m=n*ot+c;let d=l,u=a,v=r,p=0;if(o===Xt.grass){const h=ae(c/18,n/18,11,ot,3),S=ae(c/3.2,n/3.2,12,ot,2);d+=(h-.5)*14+(S-.5)*6,u+=(h-.45)*12+(S-.5)*5,v+=(h-.5)*6,p=(S-.5)*.35+(h-.5)*.15}else if(o===Xt.scrub){const h=wf(c,n,21,16),S=Math.max(0,1-h*1.6);d-=S*28,u-=S*18,v-=S*16,p=S*.8}else if(o===Xt.rock){const h=1-Math.abs(ae(c/10,n/10,31,ot,4)*2-1),S=h>.82?1:0;d-=S*40+h*12,u-=S*38+h*10,v-=S*34+h*8,p=h*.9-S*.7}else if(o===Xt.scree||o===Xt.gravel){const h=o===Xt.scree?18:9,S=wf(c,n,o===Xt.scree?41:42,h),w=Math.max(0,1-S*1.35),M=ge(Math.floor(c/h),Math.floor(n/h),o+4);d+=(M-.5)*40+w*16,u+=(M-.5)*32+w*12,v+=(M-.5)*24+w*8,p=w*.85}else if(o===Xt.road){const h=Math.abs(c%32/32*2-1),S=ae(c/14,n/8,51,ot,2);d-=h*18+(S-.5)*10,u-=h*16,v-=h*12,p=-h*.25+(S-.5)*.1}else if(o===Xt.mud){const h=ae(c/20,n/20,61,ot,3);d-=h*30,u-=h*24,v-=h*16,p=(h-.5)*.12}else if(o===Xt.sand){const h=ae(c/4.5,n/4.5,72,ot,3),S=ae(c/11,n/13,73,ot,2);d+=(h-.5)*16+(S-.5)*10,u+=(h-.5)*12+(S-.5)*8,v+=(h-.5)*8,p=(h-.5)*.16}else{const h=(Math.floor(n/16)+Math.floor(c/64))%2===0?6:-4,S=ae(c/6,n/6,81,ot,2);d+=h-S*8,u+=h-S*8,v+=h-S*6,p=h*.01-S*.15}e[m*3]=Ce(d),e[m*3+1]=Ce(u),e[m*3+2]=Ce(v),f[m]=p}return{rgb:e,height:f}}function i0(o,t,e){const f=t%qe,s=Math.floor(t/qe),l=f*Wt,a=s*Wt;for(let r=0;r<Wt;r++){const n=(r-oe+ot)%ot;for(let c=0;c<Wt;c++){const m=(c-oe+ot)%ot,d=((a+r)*jt+(l+c))*4,u=(n*ot+m)*3;o[d]=e.rgb[u],o[d+1]=e.rgb[u+1],o[d+2]=e.rgb[u+2],o[d+3]=255}}}function m0(){const o=new Uint8Array(jt*jt*4),t=new Uint8Array(jt*jt*4);t.fill(128);for(let e=3;e<t.length;e+=4)t[e]=255;for(let e=0;e<=Xt.concrete;e++){const f=c0(e);i0(o,e,f),d0(t,e,f)}return{albedo:o,normal:t,size:jt}}function d0(o,t,e){const f=t%qe,s=Math.floor(t/qe),l=f*Wt,a=s*Wt,r=(n,c)=>{const m=(n+ot)%ot,d=(c+ot)%ot,u=e.height[d*ot+(m-1+ot)%ot],v=e.height[d*ot+(m+1)%ot],p=e.height[(d-1+ot)%ot*ot+m],h=e.height[(d+1)%ot*ot+m];let S=(u-v)*1.85,w=(p-h)*1.85,M=1;const T=Math.hypot(S,w,M)||1;return[S/T,w/T,M/T]};for(let n=0;n<Wt;n++){const c=n-oe;for(let m=0;m<Wt;m++){const d=m-oe,[u,v,p]=r(d,c),h=((a+n)*jt+(l+m))*4,S=(d+ot)%ot,w=(c+ot)%ot,M=Math.max(0,Math.min(1,e.height[w*ot+S]*.5+.5));o[h]=Ce(u*127+128),o[h+1]=Ce(v*127+128),o[h+2]=Ce(p*127+128),o[h+3]=Ce(M*255)}}}function Ve(o){const[t,e,f]=Yf[o];return`vec3(${t.toFixed(3)}, ${e.toFixed(3)}, ${f.toFixed(3)})`}function u0(){return`
uniform sampler2D splat0Sampler;
uniform sampler2D splat1Sampler;
uniform sampler2D splat2Sampler;
uniform sampler2D tracksSampler;
uniform sampler2D detailSampler;
uniform sampler2D detailNrmSampler;
uniform sampler2D aoSampler;
uniform sampler2D groundAlbedoSampler;
uniform sampler2D groundNrmSampler;
uniform sampler2D groundRoughSampler;
uniform sampler2D cliffAlbedoSampler;
uniform sampler2D cliffNrmSampler;
uniform sampler2D cliffRoughSampler;
uniform sampler2D cliffAoSampler;

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
float tfFbm(vec2 p) {
  return 0.65 * tfNoise(p) + 0.35 * tfNoise(p * 2.03);
}
float tfReliefH(vec2 xz) {
  float n0 = tfFbm(xz * 0.032);
  float n1 = tfFbm(xz * 0.07);
  float n2 = tfFbm(xz * 0.19 + vec2(11.2, 3.7));
  float n3 = tfNoise(xz * 0.55 + vec2(4.1, 8.3));
  float n4 = tfNoise(xz * 1.15 + vec2(2.2, 6.1));
  return (n0 - 0.5) * 2.4 + (n1 - 0.5) * 1.5 + (n2 - 0.5) * 0.9 + (n3 - 0.5) * 0.4 + (n4 - 0.5) * 0.35;
}
float tfCliff(float ny) {
  float t = clamp((${Le.toFixed(2)} - ny) / ${(Le-Ko).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
vec3 tfStrata(float tone) {
  vec3 c0 = ${Ve(0)};
  vec3 c1 = ${Ve(1)};
  vec3 c2 = ${Ve(2)};
  vec3 c3 = ${Ve(3)};
  vec3 c4 = ${Ve(4)};
  vec3 s = c0;
  s = mix(s, c1, step(0.5, tone));
  s = mix(s, c2, step(1.5, tone));
  s = mix(s, c3, step(2.5, tone));
  s = mix(s, c4, step(3.5, tone));
  return s;
}
vec4 tfSplat(sampler2D tex, vec2 uv, vec2 rad) {
  // The center tap of a wide box still draws the 1 m stair. A mip bias
  // filters that texel too. rad keeps the call site, the bias is the blend.
  return texture2D(tex, uv + rad * 0.15, 4.25);
}
vec3 tfAtlas(sampler2D tex, float slot, vec2 uv) {
  float col = slot - 4.0 * floor(slot / 4.0);
  float row = floor(slot / 4.0);
  vec2 local = fract(uv) * ${ot}.0 + ${oe}.0;
  vec2 px = vec2(col, row) * ${Wt}.0 + local;
  return texture2D(tex, px / ${jt}.0).rgb;
}
vec3 tfAtlas2(sampler2D tex, float slot, vec2 uv, vec2 xz) {
  vec3 lo = tfAtlas(tex, slot, uv * ${jf.toFixed(3)});
  vec3 hi = tfAtlas(tex, slot, uv * ${Kf.toFixed(3)} + vec2(0.41, 0.27));
  return mix(lo, hi, tfNoise(xz * 0.0033));
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
vec4 tfGnd(sampler2D tex, float slot, vec2 uv) {
  float col = slot - 2.0 * floor(slot / 2.0);
  float row = floor(slot / 2.0);
  vec2 local = fract(uv) * ${as}.0 + ${Qo}.0;
  vec2 px = vec2(col, row) * ${Ro}.0 + local;
  return texture2D(tex, px / ${ns}.0);
}
vec3 tfGndDist(sampler2D tex, float slot, vec2 xz, float dist) {
  vec3 f = tfGnd(tex, slot, xz * ${cs.toFixed(3)} + vec2(0.61, 0.43)).rgb;
  // RTS pixels are past the close blend; skip those samples with a coherent branch.
  if (dist >= 210.0) return f;
  vec3 m = tfGnd(tex, slot, xz * ${ls.toFixed(3)} + vec2(0.37, 0.19)).rgb;
  float b = smoothstep(70.0, 210.0, dist);
  if (dist >= 85.0) return mix(m, f, b);
  vec3 c = tfGnd(tex, slot, xz * ${rs.toFixed(3)}).rgb;
  float a = smoothstep(22.0, 85.0, dist);
  float n = tfNoise(xz * 0.011);
  return mix(mix(c, m, clamp(a + (n - 0.5) * 0.18, 0.0, 1.0)), f, b);
}
vec3 tfGndTri(sampler2D tex, float slot, vec3 p, vec3 n, float tile) {
  vec3 w = abs(n);
  w = pow(max(w, vec3(0.001)), vec3(4.0));
  w /= (w.x + w.y + w.z);
  return tfGnd(tex, slot, p.zy * tile).rgb * w.x + tfGnd(tex, slot, p.xz * tile).rgb * w.y + tfGnd(tex, slot, p.xy * tile).rgb * w.z;
}

vec4 tfCliffTex(sampler2D tex, float slot, vec2 uv) {
  float col = slot - 2.0 * floor(slot / 2.0);
  float row = floor(slot / 2.0);
  vec2 local = fract(uv) * ${fs}.0 + ${qo}.0;
  vec2 px = vec2(col, row) * ${To}.0 + local;
  return texture2D(tex, px / ${ss}.0);
}
vec2 tfStochastic(vec2 uv, vec3 p, float salt) {
  // Rotation/offset must be constant inside a region. A hash of p.xz
  // (continuous along the wall height) made implicit texture derivatives
  // smear an isotropic atlas into vertical streaks.
  vec2 cell = floor(p.xz * 0.04 + salt);
  float a = (tfHash(cell) - 0.5) * 1.0;
  float c = cos(a), s = sin(a);
  vec2 o = vec2(tfHash(cell + vec2(3.1, 0.0)), tfHash(cell + vec2(0.0, 7.7)));
  return vec2(c * uv.x - s * uv.y, s * uv.x + c * uv.y) + o;
}
vec3 tfTriW(vec3 n) {
  vec3 w = abs(n);
  w.y *= smoothstep(0.18, 0.82, w.y);
  float side = max(w.x, w.z);
  if (side > w.y * 1.1) {
    w.y = 0.0;
    if (w.x > w.z) w.z = 0.0; else w.x = 0.0;
  }
  w = pow(max(w, vec3(0.001)), vec3(8.0));
  return w / (w.x + w.y + w.z);
}
vec3 tfCliffTri(sampler2D tex, float slot, vec3 p, vec3 n, float tile) {
  vec3 w = tfTriW(n);
  return tfCliffTex(tex, slot, tfStochastic(p.zy * tile, p, 0.0)).rgb * w.x
       + tfCliffTex(tex, slot, tfStochastic(p.xz * tile, p, 1.3)).rgb * w.y
       + tfCliffTex(tex, slot, tfStochastic(p.xy * tile, p, 2.1)).rgb * w.z;
}
vec3 tfCliffLook(sampler2D tex, float slot, vec3 p, vec3 n, float dist) {
  vec3 mac = tfCliffTri(tex, slot, p, n, ${Gt.toFixed(3)});
  if (dist >= 210.0) return mac;
  vec3 mid = tfCliffTri(tex, slot, p, n, ${Rt.toFixed(3)});
  float b = smoothstep(70.0, 210.0, dist);
  if (dist >= 85.0) return mix(mid, mac, b);
  vec3 cls = tfCliffTri(tex, slot, p, n, ${Je.toFixed(3)});
  float a = smoothstep(22.0, 85.0, dist);
  return mix(mix(cls, mid, a), mac, b);
}
float tfAtlasH(sampler2D tex, float slot, vec2 uv) {
  float col = slot - 4.0 * floor(slot / 4.0);
  float row = floor(slot / 4.0);
  vec2 local = fract(uv) * ${ot}.0 + ${oe}.0;
  vec2 px = vec2(col, row) * ${Wt}.0 + local;
  return texture2D(tex, px / ${jt}.0).a;
}
vec4 tfRank(float w, float slot, vec4 best) {
  if (w > best.x) return vec4(w, slot, best.x, best.y);
  if (w > best.z) return vec4(best.x, best.y, w, slot);
  return best;
}
float tfScaleW(float w, float slot, vec4 best, float scaleA, float scaleB) {
  if (slot == best.y) return w * scaleA;
  if (slot == best.w) return w * scaleB;
  return w;
}
`}function h0(){return`
vec3 tfP = vPositionW;
vec2 tfXZ = tfP.xz;
vec2 tfWarp = vec2(tfNoise(tfXZ * 0.021) - 0.5, tfNoise(tfXZ * 0.021 + vec2(13.7, 4.2)) - 0.5) * 8.5;
tfWarp += vec2(tfNoise(tfXZ * 0.067 + vec2(3.1, 8.4)) - 0.5, tfNoise(tfXZ * 0.067 + vec2(1.2, 6.6)) - 0.5) * 2.4;
vec2 tfD = tfXZ + tfWarp;
vec2 tfSplatWarp = vec2(tfNoise(tfXZ * 0.012) - 0.5, tfNoise(tfXZ * 0.012 + vec2(17.3, 4.1)) - 0.5) * 42.0;
tfSplatWarp += vec2(tfNoise(tfXZ * 0.034) - 0.5, tfNoise(tfXZ * 0.034 + vec2(8.2, 19.5)) - 0.5) * 16.0;
vec2 tfSuv = vec2((tfXZ.x + tfSplatWarp.x) / mapSize.x, (tfXZ.y + tfSplatWarp.y) / mapSize.y);
vec2 tfRad = vec2(${bo.toFixed(1)} / mapSize.x, ${bo.toFixed(1)} / mapSize.y);
vec4 tfS0 = tfSplat(splat0Sampler, tfSuv, tfRad);
vec4 tfS1 = tfSplat(splat1Sampler, tfSuv, tfRad);
vec4 tfS2 = tfSplat(splat2Sampler, tfSuv, tfRad);
float tfTracks = tfSplat(tracksSampler, tfSuv, tfRad).r;
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
vec4 tfRanked = tfRank(tfGrass, 0.0, vec4(0.0));
tfRanked = tfRank(tfScrub, 1.0, tfRanked);
tfRanked = tfRank(tfRock, 2.0, tfRanked);
tfRanked = tfRank(tfScree, 3.0, tfRanked);
tfRanked = tfRank(tfGravel, 4.0, tfRanked);
tfRanked = tfRank(tfRoad, 5.0, tfRanked);
tfRanked = tfRank(tfMud, 6.0, tfRanked);
tfRanked = tfRank(tfSand, 7.0, tfRanked);
tfRanked = tfRank(tfConcrete, 8.0, tfRanked);
float tfHa = tfAtlasH(detailNrmSampler, tfRanked.y, tfXZ * 0.17);
float tfHb = tfAtlasH(detailNrmSampler, tfRanked.w, tfXZ * 0.17);
float tfSharp = clamp(0.5 + (tfHa - tfHb) * ${ts.toFixed(1)}, ${es.toFixed(2)}, ${os.toFixed(2)});
if (abs(tfDebug.x - 4.0) < 0.5) {
  tfSharp = 0.5;
}
float tfPair = max(tfRanked.x + tfRanked.z, 0.0001);
float tfScaleA = (tfPair * tfSharp) / max(tfRanked.x, 0.0001);
float tfScaleB = (tfPair * (1.0 - tfSharp)) / max(tfRanked.z, 0.0001);
tfGrass = tfScaleW(tfGrass, 0.0, tfRanked, tfScaleA, tfScaleB);
tfScrub = tfScaleW(tfScrub, 1.0, tfRanked, tfScaleA, tfScaleB);
tfRock = tfScaleW(tfRock, 2.0, tfRanked, tfScaleA, tfScaleB);
tfScree = tfScaleW(tfScree, 3.0, tfRanked, tfScaleA, tfScaleB);
tfGravel = tfScaleW(tfGravel, 4.0, tfRanked, tfScaleA, tfScaleB);
tfRoad = tfScaleW(tfRoad, 5.0, tfRanked, tfScaleA, tfScaleB);
tfMud = tfScaleW(tfMud, 6.0, tfRanked, tfScaleA, tfScaleB);
tfSand = tfScaleW(tfSand, 7.0, tfRanked, tfScaleA, tfScaleB);
tfConcrete = tfScaleW(tfConcrete, 8.0, tfRanked, tfScaleA, tfScaleB);
float tfSum2 = tfGrass + tfScrub + tfRock + tfScree + tfGravel + tfRoad + tfMud + tfSand + tfConcrete + 0.0001;
tfGrass /= tfSum2; tfScrub /= tfSum2; tfRock /= tfSum2; tfScree /= tfSum2;
tfGravel /= tfSum2; tfRoad /= tfSum2; tfMud /= tfSum2; tfSand /= tfSum2; tfConcrete /= tfSum2;
vec3 tfGeom0 = normalize(normalW);
vec3 tfFaceN = normalize(cross(dFdx(tfP), dFdy(tfP)));
if (dot(tfFaceN, tfGeom0) < 0.0) tfFaceN = -tfFaceN;
float tfH0 = clamp((tfP.y - tfParams.y) / max(tfParams.z - tfParams.y, 1.0), 0.0, 1.0);
float tfSlopeT = clamp((${qf.toFixed(2)} - tfGeom0.y) / ${Qf.toFixed(2)}, 0.0, 1.0);
float tfSlope = tfSlopeT * tfSlopeT * (3.0 - 2.0 * tfSlopeT);
float tfBasin = clamp((0.34 - tfH0) / 0.28, 0.0, 1.0);
tfBasin = tfBasin * tfBasin * (3.0 - 2.0 * tfBasin) * (1.0 - tfSlope);
float tfConcav = clamp(-(dFdx(tfGeom0.x) + dFdy(tfGeom0.z)) * 14.0, 0.0, 1.0);
float tfHollow = clamp(tfBasin + tfConcav * 0.65, 0.0, 1.0);
float tfDrain = smoothstep(0.62, 0.92, tfWet) * (1.0 - tfSlope);
tfGrass += tfRock * (1.0 - tfSlope) + tfScree * (1.0 - tfSlope) * 0.6 + tfGravel * (1.0 - tfSlope) * 0.35;
tfGrass += tfMud * (1.0 - tfHollow) + tfSand * (1.0 - tfHollow);
tfRock *= tfSlope;
tfScree *= tfSlope;
tfGravel *= tfSlope;
tfMud *= tfHollow * 0.25;
tfSand *= tfHollow * 0.5;
tfRock += tfSlope * (tfGrass + tfScrub) * 0.82;
tfGravel += tfSlope * tfSand * 0.4;
tfGrass *= 1.0 - tfSlope * 0.82;
tfScrub *= 1.0 - tfSlope * 0.7;
tfSand += (tfHollow * 0.7 + tfDrain * 0.3) * (tfGrass + tfScrub) * 0.14;
tfGrass *= 1.0 - (tfHollow * 0.14 + tfDrain * 0.06);
tfScrub *= 1.0 - tfHollow * 0.1;
float tfSum3 = tfGrass + tfScrub + tfRock + tfScree + tfGravel + tfRoad + tfMud + tfSand + tfConcrete + 0.0001;
tfGrass /= tfSum3; tfScrub /= tfSum3; tfRock /= tfSum3; tfScree /= tfSum3;
tfGravel /= tfSum3; tfRoad /= tfSum3; tfMud /= tfSum3; tfSand /= tfSum3; tfConcrete /= tfSum3;
// tfDebug.x: 1 no macro albedo, 2 no AO, 3 no splat, 4 no detail normal, 5 triplanar only, 6 flat normals.
if (abs(tfDebug.x - 3.0) < 0.5) {
  tfGrass = 0.0; tfScrub = 0.0; tfRock = 1.0; tfScree = 0.0; tfGravel = 0.0; tfRoad = 0.0; tfMud = 0.0; tfSand = 0.0; tfConcrete = 0.0; tfTracks = 0.0; tfWet = 0.0;
}
float tfCam = length(vEyePosition.xyz - tfP);
vec3 tfGeom = normalize(mix(normalize(normalW), vec3(0.0, 1.0, 0.0), clamp((tfCam - 70.0) / 380.0, 0.0, 0.28)));
float tfSteep = tfCliff(tfGeom0.y);
float tfFaceSteep = tfCliff(tfFaceN.y);
vec3 tfMapN = normalize(mix(tfGeom0, tfFaceN, max(tfSteep, tfFaceSteep)));
float tfRelW = max(tfSteep, tfFaceSteep);
vec2 tfAoUv = vec2(tfXZ.x / mapSize.x, tfXZ.y / mapSize.y);
vec4 tfAoTex = texture2D(aoSampler, tfAoUv);
vec3 tfPRock = tfP;
if (tfRelW > 0.08) {
  vec2 tfSn = tfAoTex.ba * 2.0 - 1.0;
  vec3 tfSmoothN = normalize(vec3(tfSn.x, sqrt(max(0.0, 1.0 - dot(tfSn, tfSn))), tfSn.y));
  if (dot(tfSmoothN, tfGeom0) < 0.0) tfSmoothN = -tfSmoothN;
  vec3 tfUpS = abs(tfGeom.y) > 0.96 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
  vec3 tfTs0 = normalize(cross(tfUpS, tfGeom));
  vec3 tfBs0 = cross(tfGeom, tfTs0);
  float tfE = 0.4;
  float tfR0 = tfReliefH(tfXZ);
  float tfRx = tfReliefH(tfXZ + vec2(tfE, 0.0));
  float tfRz = tfReliefH(tfXZ + vec2(0.0, tfE));
  float tfAmp = ${Be.toFixed(2)} * tfRelW;
  vec3 tfFine = normalize(tfGeom - tfTs0 * ((tfRx - tfR0) * tfAmp / tfE) - tfBs0 * ((tfRz - tfR0) * tfAmp / tfE));
  tfGeom = normalize(mix(tfGeom, tfSmoothN, tfRelW * 0.72));
  tfGeom = normalize(mix(tfGeom, tfFine, tfRelW * 0.50));
  if (tfCam < 52.0) {
    vec2 tfUvP = abs(tfMapN.x) > abs(tfMapN.z) ? tfP.zy * ${Rt.toFixed(3)} : tfP.xy * ${Rt.toFixed(3)};
    float tfHPeek = tfCliffTex(cliffAoSampler, 0.0, tfStochastic(tfUvP, tfP, 0.0)).r;
    tfPRock += tfMapN * (0.5 - tfHPeek) * 0.55 * (1.0 - smoothstep(22.0, 52.0, tfCam));
  }
}
float tfNLo = tfFbm(tfXZ * 0.008);
float tfNMed = tfFbm(tfXZ * 0.028 + vec2(17.0, 4.0));
float tfNHi = tfNoise(tfXZ * 0.11);
float tfShift = clamp((tfNLo * 0.50 + tfNMed * 0.30 + tfNHi * 0.20 - 0.5) * 0.18 + (tfH0 - 0.45) * 0.06 * (1.0 - tfSlope * 0.5), -0.12, 0.12);
float tfForest = clamp((0.55 - (tfNLo * 0.50 + tfNMed * 0.30 + tfNHi * 0.20)) * 0.35 + (1.0 - tfH0) * 0.12 * (1.0 - tfSlope), 0.0, 0.40);
float tfWGrass = (tfGrass + tfScrub * 0.65) * (1.0 - tfForest);
float tfWForest = (tfGrass + tfScrub * 0.65) * tfForest;
float tfWDirt = tfRoad + tfMud + tfSand + tfConcrete * 0.7 + tfScrub * 0.35;
float tfWRock = tfRock + tfScree + tfGravel;
float tfWSum = tfWGrass + tfWForest + tfWDirt + tfWRock + 0.0001;
tfWGrass /= tfWSum; tfWForest /= tfWSum; tfWDirt /= tfWSum; tfWRock /= tfWSum;
vec3 tfPhoto = vec3(0.0);
if (tfWGrass > 0.02) tfPhoto += tfGndDist(groundAlbedoSampler, 0.0, tfD, tfCam) * ${_o.toFixed(2)} * tfWGrass;
if (tfWForest > 0.02) tfPhoto += tfGndDist(groundAlbedoSampler, 1.0, tfD, tfCam) * tfWForest;
if (tfWDirt > 0.02) tfPhoto += tfGndDist(groundAlbedoSampler, 2.0, tfD, tfCam) * tfWDirt;
if (tfWRock > 0.02) tfPhoto += tfGndDist(groundAlbedoSampler, 3.0, tfD, tfCam) * tfWRock;
tfPhoto = mix(tfPhoto, tfPhoto * vec3(1.08, 0.97, 0.84), clamp(tfShift, 0.0, 1.0));
tfPhoto = mix(tfPhoto, tfPhoto * vec3(0.96, 1.06, 0.92), clamp(-tfShift, 0.0, 1.0));
float tfDryN = tfNLo * 0.30 + tfFbm(tfXZ * 0.055 + vec2(3.0, 11.0)) * 0.40 + tfFbm(tfXZ * 0.13 + vec2(19.0, 6.0)) * 0.30;
float tfCloverN = tfFbm(tfXZ * 0.19 + vec2(8.0, 21.0));
float tfStoneN = tfNoise(tfXZ * 0.62 + vec2(5.0, 2.0)) * 0.55 + tfFbm(tfXZ * 1.05) * 0.45;
float tfDry = smoothstep(0.55, 0.88, tfDryN);
float tfClover = smoothstep(0.70, 0.93, tfCloverN) * (1.0 - tfDry);
float tfStone = smoothstep(0.86, 0.96, tfStoneN);
tfPhoto = mix(tfPhoto, tfPhoto * vec3(1.14, 1.04, 0.80), tfDry * 0.28 * tfWGrass);
tfPhoto = mix(tfPhoto, tfPhoto * vec3(0.88, 1.10, 0.86), tfClover * 0.20 * tfWGrass);
if (tfStone * tfWGrass > 0.02) {
  vec3 tfStoneCol = tfGndDist(groundAlbedoSampler, 2.0, tfD, tfCam) * 0.55 + tfGndDist(groundAlbedoSampler, 3.0, tfD, tfCam) * 0.45;
  tfPhoto = mix(tfPhoto, tfStoneCol, tfStone * 0.55 * tfWGrass * (1.0 - tfDry * 0.5));
}
if (abs(tfDebug.x - 1.0) < 0.5) {
  tfPhoto = vec3(0.58, 0.54, 0.48);
}
float tfCliffW = clamp(tfWRock * 1.35 + tfScree * 0.25, 0.0, 1.0);
float tfEdgeN = tfFbm(tfXZ * 0.07 + vec2(tfP.y * 0.05, 9.0));
// Rock only on steep faces. Caps and ledges stay on the ground set, with a noisy edge.
float tfCliffMask = clamp(max(tfSteep, tfFaceSteep) * tfCliffW * (0.82 + 0.36 * tfEdgeN), 0.0, 1.0);
if (abs(tfDebug.x - 5.0) < 0.5) {
  tfCliffMask = 1.0;
  tfTracks = 0.0;
}
float tfTalus = clamp((1.0 - tfSteep * 0.7) * (tfScree * 1.2 + tfWRock * 0.55) * smoothstep(0.12, 0.58, tfSlope) * (0.4 + 0.6 * tfNMed), 0.0, 1.0);
tfTalus *= mix(1.0, 0.35, tfCliffMask);
// Scree apron at the foot of walls: under a riser (AO), near cliff mass, on
// the gentler ground itself, with a ragged noisy edge into the grass.
float tfApron = smoothstep(0.25, 0.7, tfAoTex.g) * (1.0 - smoothstep(0.935, 0.985, tfAoTex.r)) * (1.0 - tfSteep);
tfTalus = max(tfTalus, clamp(tfApron * (0.6 + 0.9 * tfNMed) - 0.1, 0.0, 0.92));
// Scree slopes: moderately steep ground beside cliff mass (spurs, ramps
// between walls) is broken rock, not a flat green wedge.
tfTalus = max(tfTalus, clamp(max(tfSlope, 1.0 - smoothstep(0.74, 0.9, tfFaceN.y)) * (1.0 - tfCliffMask) * smoothstep(0.02, 0.3, tfAoTex.g) * (0.9 + 0.8 * tfNMed), 0.0, 0.92));
vec3 tfAlbedo = tfPhoto;
if (tfTalus > 0.02) {
  float tfScreeTile = ${Gt.toFixed(3)} + (${Rt.toFixed(3)} - ${Gt.toFixed(3)}) * (1.0 - smoothstep(70.0, 200.0, tfCam));
  vec3 tfScreeCol = tfCliffTri(cliffAlbedoSampler, 3.0, tfP, tfMapN, tfScreeTile);
  vec3 tfTlSoil = mix(tfPhoto, tfScreeCol, 0.4) * vec3(0.80, 0.76, 0.70);
  float tfTlFar = smoothstep(100.0, 150.0, tfCam);
  vec3 tfTlCol = mix(tfTlSoil, tfScreeCol * 1.05, tfTlFar);
  tfAlbedo = mix(tfAlbedo, tfTlCol, tfTalus * mix(0.85, 0.8, tfTlFar));
}
if (tfCliffMask > 0.02) {
  float tfMacTile = ${Gt.toFixed(3)} + (${Rt.toFixed(3)} - ${Gt.toFixed(3)}) * (1.0 - smoothstep(90.0, 220.0, tfCam));
  vec3 tfMacro = tfCliffTri(cliffAlbedoSampler, 0.0, tfP, tfMapN, tfMacTile);
  vec3 tfGrit = tfCliffTri(cliffAlbedoSampler, 1.0, tfP, tfMapN, tfMacTile * 1.2);
  vec3 tfCliffCol = mix(tfMacro, tfGrit, mix(0.22, 0.6, smoothstep(70.0, 180.0, tfCam)));
  float tfDetMix = 1.0 - smoothstep(24.0, 130.0, tfCam);
  if (tfDetMix > 0.02) {
    vec3 tfDetail = tfCliffTri(cliffAlbedoSampler, 0.0, tfP, tfMapN, mix(${Rt.toFixed(3)}, ${Je.toFixed(3)}, 1.0 - smoothstep(20.0, 70.0, tfCam)));
    tfCliffCol = mix(tfCliffCol, tfDetail, tfDetMix * mix(0.5, 0.8, 1.0 - smoothstep(14.0, 45.0, tfCam)));
  }
  float tfCav = tfCliffTri(cliffAoSampler, 0.0, tfP, tfMapN, ${Rt.toFixed(3)}).r;
  // After4 grey-tan photogrammetry, then ~12% darker with a little cavity AO
  // and mild downslope weathering. No brown face wash.
  tfCliffCol *= mix(0.54, 1.07, smoothstep(0.06, 0.8, tfCav));
  float tfToneN = tfFbm(tfXZ * 0.007 + vec2(2.0, 9.0));
  // Macro tone along the wall: sun-bleached stretches and darker damp recesses.
  float tfBleach = tfFbm(tfXZ * 0.0045 + vec2(31.0, 7.0));
  float tfDamp = smoothstep(0.55, 0.8, tfFbm(tfXZ * 0.011 + vec2(5.0, 23.0)));
  tfCliffCol *= mix(vec3(0.94, 0.96, 0.98), vec3(1.04, 1.00, 0.94), tfToneN);
  tfCliffCol *= mix(0.86, 1.14, tfBleach) * mix(vec3(1.0), vec3(0.86, 0.87, 0.85), tfDamp);
  tfCliffCol *= ${Jo.toFixed(2)};
  // Warm tan/brown sandstone with grey bands and rust/ochre staining.
  float tfNear = 1.0 - smoothstep(110.0, 150.0, tfCam);
  float tfLens = 1.0;
  if (tfNear > 0.0) {
    tfLens = mix(1.0, smoothstep(0.32, 0.68, tfNoise(vec2((tfP.x + tfP.z) * 0.035, tfP.y * 0.09 + 21.0))), tfNear);
  }
  float tfSsL = dot(tfCliffCol, vec3(0.333));
  float tfBand = smoothstep(0.55, 0.72, tfFbm(vec2(tfP.y * 0.21 + tfFbm(vec2((tfP.x + tfP.z) * 0.02, tfP.y * 0.05)) * 1.6, 11.0 + (tfP.x - tfP.z) * 0.01))) * smoothstep(0.35, 0.6, tfFbm(vec2((tfP.x + tfP.z) * 0.012, 3.0 + tfP.y * 0.03))) * tfLens;
  float tfCourse = floor(tfP.y / 2.8 + tfNoise(vec2((tfP.x - tfP.z) * 0.015, 7.0)) * 1.4);
  float tfCh = fract(sin(tfCourse * 12.9898 + 4.1) * 43758.5453);
  float tfCh2 = fract(sin(tfCourse * 78.233 + 1.7) * 24634.6345);
  vec3 tfCourseTint = mix(vec3(1.10, 0.90, 0.74), vec3(1.08, 1.00, 0.78), tfCh2);
  tfCliffCol *= mix(vec3(1.0), tfCourseTint, tfCh * 0.55);
  tfCliffCol = mix(tfCliffCol * vec3(${ko}), vec3(tfSsL) * vec3(1.02, 0.98, 0.92), tfBand * 0.32);
  float tfStain = smoothstep(0.5, 0.78, tfFbm(vec2((tfP.x + tfP.z) * 0.08, tfP.y * 0.025 + 4.0)));
  tfCliffCol *= mix(vec3(1.0), vec3(${No}), tfStain * 0.7);
  if (tfNear > 0.0) {
    float tfRun = smoothstep(0.62, 0.85, tfNoise(vec2((tfP.x + tfP.z) * 0.09, tfP.y * 0.012 + 2.0)));
    tfCliffCol *= mix(vec3(1.0), vec3(1.06, 0.86, 0.70), tfRun * 0.4 * tfNear);
  }
  // At RTS range the photo's wavy strata read as marble: compress its value
  // swing toward the mean so geometry, cavities and sun carry the form.
  float tfLumC = max(dot(tfCliffCol, vec3(0.333)), 0.02);
  tfCliffCol *= pow(0.545 / tfLumC, 0.42 * smoothstep(90.0, 200.0, tfCam));
  float tfFormR = smoothstep(70.0, 180.0, tfCam);
  tfCliffCol *= mix(mix(${tf.toFixed(2)}, 0.90, tfFormR), mix(${ef.toFixed(2)}, 1.40, tfFormR), smoothstep(-0.2, 0.8, dot(tfMapN, vec3(${me}))));
  float tfStreak = tfFbm(vec2(tfP.x * 0.16 + tfP.z * 0.13, tfP.y * 0.05 + 6.0));
  tfCliffCol *= mix(1.0, vec3(0.90, 0.91, 0.92), smoothstep(0.70, 0.94, tfStreak) * 0.18);
  vec3 tfSoil = tfGndDist(groundAlbedoSampler, 2.0, tfD, tfCam);
  vec3 tfMoss = vec3(0.27, 0.34, 0.20);
  float tfCapEdge = (1.0 - tfCliffMask) + (1.0 - tfSteep);
  if (abs(tfDebug.x - 5.0) > 0.5) {
    // Soil lip on the rock/grass seam so the crest is not a hard line.
    float tfLipW = smoothstep(0.02, 0.3, tfCliffMask) * (1.0 - smoothstep(0.4, 0.85, tfCliffMask));
    tfAlbedo = mix(tfAlbedo, tfSoil * 0.95, clamp(tfCapEdge * 0.25 * tfNMed * 0.4 + tfLipW * (0.45 + 0.3 * tfNMed), 0.0, 0.75));
    tfCliffCol = mix(tfCliffCol, mix(tfCliffCol, tfMoss, 0.5), (1.0 - tfCav) * (0.25 + 0.5 * tfNHi) * 0.45);
  }
  tfAlbedo = mix(tfAlbedo, tfCliffCol, tfCliffMask);
}
float tfLip = 0.0;
float tfFoot = 0.0;
float tfRough = 0.0;
if (tfWGrass > 0.02) tfRough += tfGndDist(groundRoughSampler, 0.0, tfD, tfCam).r * tfWGrass;
if (tfWForest > 0.02) tfRough += tfGndDist(groundRoughSampler, 1.0, tfD, tfCam).r * tfWForest;
if (tfWDirt > 0.02) tfRough += tfGndDist(groundRoughSampler, 2.0, tfD, tfCam).r * tfWDirt;
if (tfWRock > 0.02) tfRough += tfGndDist(groundRoughSampler, 3.0, tfD, tfCam).r * tfWRock;
tfAlbedo *= mix(0.93, 1.0, tfRough);
tfAlbedo *= 1.0 - 0.02 * tfHollow;
tfAlbedo *= 1.0 - 0.15 * tfTracks * (1.0 - tfFaceSteep);
float tfGSlot = 0.0;
float tfGBest = tfWGrass;
if (tfWForest > tfGBest) { tfGBest = tfWForest; tfGSlot = 1.0; }
if (tfWDirt > tfGBest) { tfGBest = tfWDirt; tfGSlot = 2.0; }
if (tfWRock > tfGBest) { tfGSlot = 3.0; }
vec3 tfTs = tfGndDist(groundNrmSampler, tfGSlot, tfD, tfCam) * 2.0 - 1.0;
if (tfParams.w < 0.5) {
  tfTs = vec3(0.0, 0.0, 1.0);
}
float tfNrmScale = mix(0.95, 0.52, tfWGrass);
tfTs = vec3(tfTs.x * tfNrmScale, tfTs.y * tfNrmScale, tfTs.z);
if (tfCliffMask > 0.02) {
  float tfNrmSlot = tfCam < 70.0 ? 2.0 : 0.0;
  vec3 tfTsTri = (tfCam < 85.0
    ? tfCliffLook(cliffNrmSampler, tfNrmSlot, tfPRock, tfMapN, tfCam)
    : tfCliffTri(cliffNrmSampler, tfNrmSlot, tfPRock, tfMapN, ${Gt.toFixed(3)})) * 2.0 - 1.0;
  float tfCloseN = mix(1.0, 1.55, 1.0 - smoothstep(12.0, 70.0, tfCam));
  tfTsTri = vec3(tfTsTri.x * tfCloseN, tfTsTri.y * tfCloseN, tfTsTri.z);
  tfTs = mix(tfTs, tfTsTri, tfCliffMask);
  float tfCliffRough = tfCliffTri(cliffRoughSampler, 0.0, tfPRock, tfMapN, ${Rt.toFixed(3)}).r;
  // Slightly tighter roughness so sun-facing faces can catch a highlight.
  tfRough = mix(tfRough, mix(tfCliffRough, 0.38, 0.28), tfCliffMask);
}
if (abs(tfDebug.x - 4.0) < 0.5) {
  tfTs = vec3(0.0, 0.0, 1.0);
}
tfTs = normalize(tfTs);
float tfBumpX = (tfFbm(tfXZ * 0.35 + vec2(2.0, 7.0)) - 0.5) * 0.22 + (tfNoise(tfXZ * 0.9) - 0.5) * 0.10;
float tfBumpY = (tfFbm(tfXZ * 0.35 + vec2(9.0, 3.0)) - 0.5) * 0.22 + (tfNoise(tfXZ * 0.9 + vec2(4.0, 1.0)) - 0.5) * 0.10;
tfTs = normalize(vec3(tfTs.x + (tfBumpX + tfStone * 0.35) * tfWGrass, tfTs.y + (tfBumpY - tfStone * 0.15) * tfWGrass, tfTs.z));
vec3 tfUp = abs(tfGeom.y) > 0.96 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
vec3 tfT = normalize(cross(tfUp, tfGeom));
vec3 tfB = cross(tfGeom, tfT);
normalW = normalize(tfT * tfTs.x + tfB * tfTs.y + tfGeom * tfTs.z);
if (abs(tfDebug.x - 6.0) < 0.5) {
  normalW = tfFaceN;
}
float tfH = clamp((tfP.y - tfParams.y) / max(tfParams.z - tfParams.y, 1.0), 0.0, 1.0);
float tfShore = 1.0 - smoothstep(tfParams.x, tfParams.x + 8.0, tfP.y);
float tfAo = (${Mo.toFixed(2)} + ${wo.toFixed(2)} * clamp(tfGeom0.y, 0.0, 1.0)) * (${Ao.toFixed(2)} + ${yo.toFixed(2)} * clamp(tfTs.z, 0.0, 1.0));
tfAo *= 1.0 - 0.10 * tfHollow - 0.06 * tfConcav;
tfAo *= mix(tfAoTex.r, 1.0, tfFaceSteep);
tfAo = clamp(tfAo, mix(0.70, 0.36, tfCliffMask), 1.0);
if (abs(tfDebug.x - 2.0) < 0.5 || abs(tfDebug.x - 5.0) < 0.5) {
  tfAo = 1.0;
}
tfAlbedo *= mix(1.0, mix(0.72, 0.98, clamp(tfTs.z, 0.0, 1.0)), tfCliffMask * 0.60);
tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3(0.55, 0.66, 0.62), tfShore * (1.0 - tfSteep) * 0.85);
tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3(0.86, 0.90, 0.96), smoothstep(0.62, 0.95, tfH) * (1.0 - tfSteep));
// Past the grass carpets, fake their density: a deeper, mottled sward tint.
{
  float tfSward = tfWGrass * (1.0 - tfSteep) * smoothstep(22.0, 75.0, tfCam) * (1.0 - smoothstep(420.0, 900.0, tfCam));
  tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3(0.74, 0.84, 0.58) + vec3(0.05, 0.06, 0.01), tfSward * 0.6);
}
tfAlbedo *= tfAo;
// Sun 315° / 20°. Soft rim and a tight specular so fractured faces catch the light.
vec3 tfViewR = normalize(vEyePosition.xyz - tfP);
vec3 tfSun = vec3(${me});
float tfNdL = clamp(dot(normalW, tfSun), 0.0, 1.0);
float tfNdV = clamp(dot(normalW, tfViewR), 0.0, 1.0);
float tfRim = pow(1.0 - tfNdV, 3.0) * tfNdL;
vec3 tfHalf = normalize(tfSun + tfViewR);
float tfSpec = pow(clamp(dot(normalW, tfHalf), 0.0, 1.0), 28.0) * tfNdL;
tfAlbedo += tfCliffMask * (tfRim * vec3(0.14, 0.13, 0.11) + tfSpec * vec3(0.22, 0.20, 0.16) * (1.0 - tfRough));
if (abs(tfDebug.x - 8.0) < 0.5) {
  tfAlbedo = tfTriW(tfMapN);
  normalW = vec3(0.0, 1.0, 0.0);
}
if (abs(tfDebug.x - 9.0) < 0.5) {
  tfAlbedo = tfTriW(tfFaceN);
  normalW = vec3(0.0, 1.0, 0.0);
}
if (abs(tfDebug.x - 10.0) < 0.5) {
  tfAlbedo = tfFaceN * 0.5 + 0.5;
  normalW = vec3(0.0, 1.0, 0.0);
}
if (abs(tfDebug.x - 11.0) < 0.5) {
  vec2 tfUvDbg = fract(tfP.xy * 0.18);
  tfAlbedo = vec3(tfUvDbg.x, tfUvDbg.y, 0.0);
  normalW = vec3(0.0, 1.0, 0.0);
}
if (abs(tfDebug.x - 12.0) < 0.5) {
  tfAlbedo = tfCliffTex(cliffAlbedoSampler, 0.0, tfP.xy * 0.18).rgb;
  normalW = vec3(0.0, 1.0, 0.0);
}
baseColor.rgb = clamp(tfAlbedo, 0.0, 1.0);
`}function p0(){return`
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
var aoSampler: texture_2d<f32>;
var aoSamplerSampler: sampler;
var groundAlbedoSampler: texture_2d<f32>;
var groundAlbedoSamplerSampler: sampler;
var groundNrmSampler: texture_2d<f32>;
var groundNrmSamplerSampler: sampler;
var groundRoughSampler: texture_2d<f32>;
var groundRoughSamplerSampler: sampler;
var cliffAlbedoSampler: texture_2d<f32>;
var cliffAlbedoSamplerSampler: sampler;
var cliffNrmSampler: texture_2d<f32>;
var cliffNrmSamplerSampler: sampler;
var cliffRoughSampler: texture_2d<f32>;
var cliffRoughSamplerSampler: sampler;
var cliffAoSampler: texture_2d<f32>;
var cliffAoSamplerSampler: sampler;

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
fn tfFbm(p: vec2f) -> f32 {
  return 0.65 * tfNoise(p) + 0.35 * tfNoise(p * 2.03);
}
fn tfReliefH(xz: vec2f) -> f32 {
  let n0 = tfFbm(xz * 0.032);
  let n1 = tfFbm(xz * 0.07);
  let n2 = tfFbm(xz * 0.19 + vec2f(11.2, 3.7));
  let n3 = tfNoise(xz * 0.55 + vec2f(4.1, 8.3));
  let n4 = tfNoise(xz * 1.15 + vec2f(2.2, 6.1));
  return (n0 - 0.5) * 2.4 + (n1 - 0.5) * 1.5 + (n2 - 0.5) * 0.9 + (n3 - 0.5) * 0.4 + (n4 - 0.5) * 0.35;
}
fn tfCliff(ny: f32) -> f32 {
  let t = clamp((${Le.toFixed(2)} - ny) / ${(Le-Ko).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
fn tfStrata(tone: f32) -> vec3f {
  var s = ${Ue(0)};
  s = mix(s, ${Ue(1)}, step(0.5, tone));
  s = mix(s, ${Ue(2)}, step(1.5, tone));
  s = mix(s, ${Ue(3)}, step(2.5, tone));
  s = mix(s, ${Ue(4)}, step(3.5, tone));
  return s;
}
fn tfSplat(tex: texture_2d<f32>, samp: sampler, uv: vec2f, rad: vec2f) -> vec4f {
  return textureSampleBias(tex, samp, uv + rad * 0.15, 4.25);
}
fn tfAtlas(tex: texture_2d<f32>, samp: sampler, slot: f32, uv: vec2f) -> vec3f {
  let col = slot - 4.0 * floor(slot / 4.0);
  let row = floor(slot / 4.0);
  let local = fract(uv) * ${ot}.0 + ${oe}.0;
  let px = vec2f(col, row) * ${Wt}.0 + local;
  return textureSample(tex, samp, px / ${jt}.0).rgb;
}
fn tfAtlas2(tex: texture_2d<f32>, samp: sampler, slot: f32, uv: vec2f, xz: vec2f) -> vec3f {
  let lo = tfAtlas(tex, samp, slot, uv * ${jf.toFixed(3)});
  let hi = tfAtlas(tex, samp, slot, uv * ${Kf.toFixed(3)} + vec2f(0.41, 0.27));
  return mix(lo, hi, tfNoise(xz * 0.0033));
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
fn tfGnd(tex: texture_2d<f32>, samp: sampler, slot: f32, uv: vec2f) -> vec4f {
  let col = slot - 2.0 * floor(slot / 2.0);
  let row = floor(slot / 2.0);
  let local = fract(uv) * ${as}.0 + ${Qo}.0;
  let px = vec2f(col, row) * ${Ro}.0 + local;
  return textureSample(tex, samp, px / ${ns}.0);
}
fn tfGndDist(tex: texture_2d<f32>, samp: sampler, slot: f32, xz: vec2f, dist: f32) -> vec3f {
  let f = tfGnd(tex, samp, slot, xz * ${cs.toFixed(3)} + vec2f(0.61, 0.43)).rgb;
  if (dist >= 210.0) { return f; }
  let m = tfGnd(tex, samp, slot, xz * ${ls.toFixed(3)} + vec2f(0.37, 0.19)).rgb;
  let b = smoothstep(70.0, 210.0, dist);
  if (dist >= 85.0) { return mix(m, f, b); }
  let c = tfGnd(tex, samp, slot, xz * ${rs.toFixed(3)}).rgb;
  let a = smoothstep(22.0, 85.0, dist);
  let n = tfNoise(xz * 0.011);
  return mix(mix(c, m, clamp(a + (n - 0.5) * 0.18, 0.0, 1.0)), f, b);
}
fn tfGndTri(tex: texture_2d<f32>, samp: sampler, slot: f32, p: vec3f, n: vec3f, tile: f32) -> vec3f {
  var w = abs(n);
  w = pow(max(w, vec3f(0.001)), vec3f(4.0));
  w = w / (w.x + w.y + w.z);
  return tfGnd(tex, samp, slot, p.zy * tile).rgb * w.x + tfGnd(tex, samp, slot, p.xz * tile).rgb * w.y + tfGnd(tex, samp, slot, p.xy * tile).rgb * w.z;
}
fn tfCliffTex(tex: texture_2d<f32>, samp: sampler, slot: f32, uv: vec2f) -> vec4f {
  let col = slot - 2.0 * floor(slot / 2.0);
  let row = floor(slot / 2.0);
  let local = fract(uv) * ${fs}.0 + ${qo}.0;
  let px = vec2f(col, row) * ${To}.0 + local;
  return textureSample(tex, samp, px / ${ss}.0);
}
fn tfStochastic(uv: vec2f, p: vec3f, salt: f32) -> vec2f {
  let cell = floor(p.xz * 0.04 + salt);
  let a = (tfHash(cell) - 0.5) * 1.0;
  let c = cos(a);
  let s = sin(a);
  let o = vec2f(tfHash(cell + vec2f(3.1, 0.0)), tfHash(cell + vec2f(0.0, 7.7)));
  return vec2f(c * uv.x - s * uv.y, s * uv.x + c * uv.y) + o;
}
fn tfTriW(n: vec3f) -> vec3f {
  var w = abs(n);
  w.y = w.y * smoothstep(0.18, 0.82, w.y);
  let side = max(w.x, w.z);
  if (side > w.y * 1.1) {
    w.y = 0.0;
    if (w.x > w.z) { w.z = 0.0; } else { w.x = 0.0; }
  }
  w = pow(max(w, vec3f(0.001)), vec3f(8.0));
  return w / (w.x + w.y + w.z);
}
fn tfCliffTri(tex: texture_2d<f32>, samp: sampler, slot: f32, p: vec3f, n: vec3f, tile: f32) -> vec3f {
  let w = tfTriW(n);
  return tfCliffTex(tex, samp, slot, tfStochastic(p.zy * tile, p, 0.0)).rgb * w.x
       + tfCliffTex(tex, samp, slot, tfStochastic(p.xz * tile, p, 1.3)).rgb * w.y
       + tfCliffTex(tex, samp, slot, tfStochastic(p.xy * tile, p, 2.1)).rgb * w.z;
}
fn tfCliffLook(tex: texture_2d<f32>, samp: sampler, slot: f32, p: vec3f, n: vec3f, dist: f32) -> vec3f {
  let mac = tfCliffTri(tex, samp, slot, p, n, ${Gt.toFixed(3)});
  if (dist >= 210.0) { return mac; }
  let mid = tfCliffTri(tex, samp, slot, p, n, ${Rt.toFixed(3)});
  let b = smoothstep(70.0, 210.0, dist);
  if (dist >= 85.0) { return mix(mid, mac, b); }
  let cls = tfCliffTri(tex, samp, slot, p, n, ${Je.toFixed(3)});
  let a = smoothstep(22.0, 85.0, dist);
  return mix(mix(cls, mid, a), mac, b);
}
fn tfAtlasH(tex: texture_2d<f32>, samp: sampler, slot: f32, uv: vec2f) -> f32 {
  let col = slot - 4.0 * floor(slot / 4.0);
  let row = floor(slot / 4.0);
  let local = fract(uv) * ${ot}.0 + ${oe}.0;
  let px = vec2f(col, row) * ${Wt}.0 + local;
  return textureSample(tex, samp, px / ${jt}.0).a;
}
fn tfRank(w: f32, slot: f32, best: vec4f) -> vec4f {
  if (w > best.x) { return vec4f(w, slot, best.x, best.y); }
  if (w > best.z) { return vec4f(best.x, best.y, w, slot); }
  return best;
}
fn tfScaleW(w: f32, slot: f32, best: vec4f, scaleA: f32, scaleB: f32) -> f32 {
  if (slot == best.y) { return w * scaleA; }
  if (slot == best.w) { return w * scaleB; }
  return w;
}
`}function Ue(o){const[t,e,f]=Yf[o];return`vec3f(${t.toFixed(3)}, ${e.toFixed(3)}, ${f.toFixed(3)})`}function x0(){return`
let tfP = fragmentInputs.vPositionW;
let tfXZ = tfP.xz;
var tfWarp = vec2f(tfNoise(tfXZ * 0.021) - 0.5, tfNoise(tfXZ * 0.021 + vec2f(13.7, 4.2)) - 0.5) * 8.5;
tfWarp = tfWarp + vec2f(tfNoise(tfXZ * 0.067 + vec2f(3.1, 8.4)) - 0.5, tfNoise(tfXZ * 0.067 + vec2f(1.2, 6.6)) - 0.5) * 2.4;
let tfD = tfXZ + tfWarp;
var tfSplatWarp = vec2f(tfNoise(tfXZ * 0.012) - 0.5, tfNoise(tfXZ * 0.012 + vec2f(17.3, 4.1)) - 0.5) * 42.0;
tfSplatWarp = tfSplatWarp + vec2f(tfNoise(tfXZ * 0.034) - 0.5, tfNoise(tfXZ * 0.034 + vec2f(8.2, 19.5)) - 0.5) * 16.0;
let tfSuv = vec2f((tfXZ.x + tfSplatWarp.x) / uniforms.mapSize.x, (tfXZ.y + tfSplatWarp.y) / uniforms.mapSize.y);
let tfRad = vec2f(${bo.toFixed(1)} / uniforms.mapSize.x, ${bo.toFixed(1)} / uniforms.mapSize.y);
let tfS0 = tfSplat(splat0Sampler, splat0SamplerSampler, tfSuv, tfRad);
let tfS1 = tfSplat(splat1Sampler, splat1SamplerSampler, tfSuv, tfRad);
let tfS2 = tfSplat(splat2Sampler, splat2SamplerSampler, tfSuv, tfRad);
var tfTracks = tfSplat(tracksSampler, tracksSamplerSampler, tfSuv, tfRad).r;
var tfGrass = tfS0.r;
var tfScrub = tfS0.g;
var tfRock = tfS0.b;
var tfScree = tfS0.a;
var tfGravel = tfS1.r;
var tfRoad = tfS1.g;
var tfMud = tfS1.b;
var tfSand = tfS1.a;
var tfConcrete = tfS2.g;
var tfWet = tfS2.b;
let tfSum = tfGrass + tfScrub + tfRock + tfScree + tfGravel + tfRoad + tfMud + tfSand + tfConcrete + 0.0001;
tfGrass = tfGrass / tfSum; tfScrub = tfScrub / tfSum; tfRock = tfRock / tfSum; tfScree = tfScree / tfSum;
tfGravel = tfGravel / tfSum; tfRoad = tfRoad / tfSum; tfMud = tfMud / tfSum; tfSand = tfSand / tfSum; tfConcrete = tfConcrete / tfSum;
var tfRanked = tfRank(tfGrass, 0.0, vec4f(0.0));
tfRanked = tfRank(tfScrub, 1.0, tfRanked);
tfRanked = tfRank(tfRock, 2.0, tfRanked);
tfRanked = tfRank(tfScree, 3.0, tfRanked);
tfRanked = tfRank(tfGravel, 4.0, tfRanked);
tfRanked = tfRank(tfRoad, 5.0, tfRanked);
tfRanked = tfRank(tfMud, 6.0, tfRanked);
tfRanked = tfRank(tfSand, 7.0, tfRanked);
tfRanked = tfRank(tfConcrete, 8.0, tfRanked);
let tfHa = tfAtlasH(detailNrmSampler, detailNrmSamplerSampler, tfRanked.y, tfXZ * 0.17);
let tfHb = tfAtlasH(detailNrmSampler, detailNrmSamplerSampler, tfRanked.w, tfXZ * 0.17);
var tfSharp = clamp(0.5 + (tfHa - tfHb) * ${ts.toFixed(1)}, ${es.toFixed(2)}, ${os.toFixed(2)});
if (abs(uniforms.tfDebug.x - 4.0) < 0.5) {
  tfSharp = 0.5;
}
let tfPair = max(tfRanked.x + tfRanked.z, 0.0001);
let tfScaleA = (tfPair * tfSharp) / max(tfRanked.x, 0.0001);
let tfScaleB = (tfPair * (1.0 - tfSharp)) / max(tfRanked.z, 0.0001);
tfGrass = tfScaleW(tfGrass, 0.0, tfRanked, tfScaleA, tfScaleB);
tfScrub = tfScaleW(tfScrub, 1.0, tfRanked, tfScaleA, tfScaleB);
tfRock = tfScaleW(tfRock, 2.0, tfRanked, tfScaleA, tfScaleB);
tfScree = tfScaleW(tfScree, 3.0, tfRanked, tfScaleA, tfScaleB);
tfGravel = tfScaleW(tfGravel, 4.0, tfRanked, tfScaleA, tfScaleB);
tfRoad = tfScaleW(tfRoad, 5.0, tfRanked, tfScaleA, tfScaleB);
tfMud = tfScaleW(tfMud, 6.0, tfRanked, tfScaleA, tfScaleB);
tfSand = tfScaleW(tfSand, 7.0, tfRanked, tfScaleA, tfScaleB);
tfConcrete = tfScaleW(tfConcrete, 8.0, tfRanked, tfScaleA, tfScaleB);
let tfSum2 = tfGrass + tfScrub + tfRock + tfScree + tfGravel + tfRoad + tfMud + tfSand + tfConcrete + 0.0001;
tfGrass = tfGrass / tfSum2; tfScrub = tfScrub / tfSum2; tfRock = tfRock / tfSum2; tfScree = tfScree / tfSum2;
tfGravel = tfGravel / tfSum2; tfRoad = tfRoad / tfSum2; tfMud = tfMud / tfSum2; tfSand = tfSand / tfSum2; tfConcrete = tfConcrete / tfSum2;
let tfGeom0 = normalize(normalW);
var tfFaceN = normalize(cross(dpdx(tfP), dpdy(tfP)));
tfFaceN = select(tfFaceN, -tfFaceN, dot(tfFaceN, tfGeom0) < 0.0);
let tfH0 = clamp((tfP.y - uniforms.tfParams.y) / max(uniforms.tfParams.z - uniforms.tfParams.y, 1.0), 0.0, 1.0);
let tfSlopeT = clamp((${qf.toFixed(2)} - tfGeom0.y) / ${Qf.toFixed(2)}, 0.0, 1.0);
let tfSlope = tfSlopeT * tfSlopeT * (3.0 - 2.0 * tfSlopeT);
var tfBasin = clamp((0.34 - tfH0) / 0.28, 0.0, 1.0);
tfBasin = tfBasin * tfBasin * (3.0 - 2.0 * tfBasin) * (1.0 - tfSlope);
let tfConcav = clamp(-(dpdx(tfGeom0.x) + dpdy(tfGeom0.z)) * 14.0, 0.0, 1.0);
let tfHollow = clamp(tfBasin + tfConcav * 0.65, 0.0, 1.0);
let tfDrain = smoothstep(0.62, 0.92, tfWet) * (1.0 - tfSlope);
tfGrass = tfGrass + tfRock * (1.0 - tfSlope) + tfScree * (1.0 - tfSlope) * 0.6 + tfGravel * (1.0 - tfSlope) * 0.35;
tfGrass = tfGrass + tfMud * (1.0 - tfHollow) + tfSand * (1.0 - tfHollow);
tfRock = tfRock * tfSlope;
tfScree = tfScree * tfSlope;
tfGravel = tfGravel * tfSlope;
tfMud = tfMud * tfHollow * 0.25;
tfSand = tfSand * tfHollow * 0.5;
tfRock = tfRock + tfSlope * (tfGrass + tfScrub) * 0.82;
tfGravel = tfGravel + tfSlope * tfSand * 0.4;
tfGrass = tfGrass * (1.0 - tfSlope * 0.82);
tfScrub = tfScrub * (1.0 - tfSlope * 0.7);
tfSand = tfSand + (tfHollow * 0.7 + tfDrain * 0.3) * (tfGrass + tfScrub) * 0.14;
tfGrass = tfGrass * (1.0 - (tfHollow * 0.14 + tfDrain * 0.06));
tfScrub = tfScrub * (1.0 - tfHollow * 0.1);
let tfSum3 = tfGrass + tfScrub + tfRock + tfScree + tfGravel + tfRoad + tfMud + tfSand + tfConcrete + 0.0001;
tfGrass = tfGrass / tfSum3; tfScrub = tfScrub / tfSum3; tfRock = tfRock / tfSum3; tfScree = tfScree / tfSum3;
tfGravel = tfGravel / tfSum3; tfRoad = tfRoad / tfSum3; tfMud = tfMud / tfSum3; tfSand = tfSand / tfSum3; tfConcrete = tfConcrete / tfSum3;
if (abs(uniforms.tfDebug.x - 3.0) < 0.5) {
  tfGrass = 0.0; tfScrub = 0.0; tfRock = 1.0; tfScree = 0.0; tfGravel = 0.0; tfRoad = 0.0; tfMud = 0.0; tfSand = 0.0; tfConcrete = 0.0; tfTracks = 0.0; tfWet = 0.0;
}
let tfCam = length(scene.vEyePosition.xyz - tfP);
var tfGeom = normalize(mix(normalize(normalW), vec3f(0.0, 1.0, 0.0), clamp((tfCam - 70.0) / 380.0, 0.0, 0.28)));
let tfSteep = tfCliff(tfGeom0.y);
let tfFaceSteep = tfCliff(tfFaceN.y);
let tfMapN = normalize(mix(tfGeom0, tfFaceN, max(tfSteep, tfFaceSteep)));
let tfRelW = max(tfSteep, tfFaceSteep);
let tfAoUv = vec2f(tfXZ.x / uniforms.mapSize.x, tfXZ.y / uniforms.mapSize.y);
let tfAoTex = textureSample(aoSampler, aoSamplerSampler, tfAoUv);
var tfPRock = tfP;
if (tfRelW > 0.08) {
  let tfSn = tfAoTex.ba * 2.0 - 1.0;
  var tfSmoothN = normalize(vec3f(tfSn.x, sqrt(max(0.0, 1.0 - dot(tfSn, tfSn))), tfSn.y));
  if (dot(tfSmoothN, tfGeom0) < 0.0) { tfSmoothN = -tfSmoothN; }
  let tfUpS = select(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), abs(tfGeom.y) > 0.96);
  let tfTs0 = normalize(cross(tfUpS, tfGeom));
  let tfBs0 = cross(tfGeom, tfTs0);
  let tfE = 0.4;
  let tfR0 = tfReliefH(tfXZ);
  let tfRx = tfReliefH(tfXZ + vec2f(tfE, 0.0));
  let tfRz = tfReliefH(tfXZ + vec2f(0.0, tfE));
  let tfAmp = ${Be.toFixed(2)} * tfRelW;
  let tfFine = normalize(tfGeom - tfTs0 * ((tfRx - tfR0) * tfAmp / tfE) - tfBs0 * ((tfRz - tfR0) * tfAmp / tfE));
  tfGeom = normalize(mix(tfGeom, tfSmoothN, tfRelW * 0.72));
  tfGeom = normalize(mix(tfGeom, tfFine, tfRelW * 0.50));
  if (tfCam < 52.0) {
    let tfUvP = select(tfP.xy * ${Rt.toFixed(3)}, tfP.zy * ${Rt.toFixed(3)}, abs(tfMapN.x) > abs(tfMapN.z));
    let tfHPeek = tfCliffTex(cliffAoSampler, cliffAoSamplerSampler, 0.0, tfStochastic(tfUvP, tfP, 0.0)).r;
    tfPRock = tfPRock + tfMapN * (0.5 - tfHPeek) * 0.55 * (1.0 - smoothstep(22.0, 52.0, tfCam));
  }
}
let tfNLo = tfFbm(tfXZ * 0.008);
let tfNMed = tfFbm(tfXZ * 0.028 + vec2f(17.0, 4.0));
let tfNHi = tfNoise(tfXZ * 0.11);
let tfShift = clamp((tfNLo * 0.50 + tfNMed * 0.30 + tfNHi * 0.20 - 0.5) * 0.18 + (tfH0 - 0.45) * 0.06 * (1.0 - tfSlope * 0.5), -0.12, 0.12);
let tfForest = clamp((0.55 - (tfNLo * 0.50 + tfNMed * 0.30 + tfNHi * 0.20)) * 0.35 + (1.0 - tfH0) * 0.12 * (1.0 - tfSlope), 0.0, 0.40);
var tfWGrass = (tfGrass + tfScrub * 0.65) * (1.0 - tfForest);
var tfWForest = (tfGrass + tfScrub * 0.65) * tfForest;
var tfWDirt = tfRoad + tfMud + tfSand + tfConcrete * 0.7 + tfScrub * 0.35;
var tfWRock = tfRock + tfScree + tfGravel;
let tfWSum = tfWGrass + tfWForest + tfWDirt + tfWRock + 0.0001;
tfWGrass = tfWGrass / tfWSum; tfWForest = tfWForest / tfWSum; tfWDirt = tfWDirt / tfWSum; tfWRock = tfWRock / tfWSum;
var tfPhoto = vec3f(0.0);
if (tfWGrass > 0.02) { tfPhoto += tfGndDist(groundAlbedoSampler, groundAlbedoSamplerSampler, 0.0, tfD, tfCam) * ${_o.toFixed(2)} * tfWGrass; }
if (tfWForest > 0.02) { tfPhoto += tfGndDist(groundAlbedoSampler, groundAlbedoSamplerSampler, 1.0, tfD, tfCam) * tfWForest; }
if (tfWDirt > 0.02) { tfPhoto += tfGndDist(groundAlbedoSampler, groundAlbedoSamplerSampler, 2.0, tfD, tfCam) * tfWDirt; }
if (tfWRock > 0.02) { tfPhoto += tfGndDist(groundAlbedoSampler, groundAlbedoSamplerSampler, 3.0, tfD, tfCam) * tfWRock; }
tfPhoto = mix(tfPhoto, tfPhoto * vec3f(1.08, 0.97, 0.84), clamp(tfShift, 0.0, 1.0));
tfPhoto = mix(tfPhoto, tfPhoto * vec3f(0.96, 1.06, 0.92), clamp(-tfShift, 0.0, 1.0));
let tfDryN = tfNLo * 0.30 + tfFbm(tfXZ * 0.055 + vec2f(3.0, 11.0)) * 0.40 + tfFbm(tfXZ * 0.13 + vec2f(19.0, 6.0)) * 0.30;
let tfCloverN = tfFbm(tfXZ * 0.19 + vec2f(8.0, 21.0));
let tfStoneN = tfNoise(tfXZ * 0.62 + vec2f(5.0, 2.0)) * 0.55 + tfFbm(tfXZ * 1.05) * 0.45;
let tfDry = smoothstep(0.55, 0.88, tfDryN);
let tfClover = smoothstep(0.70, 0.93, tfCloverN) * (1.0 - tfDry);
let tfStone = smoothstep(0.86, 0.96, tfStoneN);
tfPhoto = mix(tfPhoto, tfPhoto * vec3f(1.14, 1.04, 0.80), tfDry * 0.28 * tfWGrass);
tfPhoto = mix(tfPhoto, tfPhoto * vec3f(0.88, 1.10, 0.86), tfClover * 0.20 * tfWGrass);
if (tfStone * tfWGrass > 0.02) {
  let tfStoneCol = tfGndDist(groundAlbedoSampler, groundAlbedoSamplerSampler, 2.0, tfD, tfCam) * 0.55 + tfGndDist(groundAlbedoSampler, groundAlbedoSamplerSampler, 3.0, tfD, tfCam) * 0.45;
  tfPhoto = mix(tfPhoto, tfStoneCol, tfStone * 0.55 * tfWGrass * (1.0 - tfDry * 0.5));
}
if (abs(uniforms.tfDebug.x - 1.0) < 0.5) {
  tfPhoto = vec3f(0.58, 0.54, 0.48);
}
let tfCliffW = clamp(tfWRock * 1.35 + tfScree * 0.25, 0.0, 1.0);
let tfEdgeN = tfFbm(tfXZ * 0.07 + vec2f(tfP.y * 0.05, 9.0));
var tfCliffMask = clamp(max(tfSteep, tfFaceSteep) * tfCliffW * (0.82 + 0.36 * tfEdgeN), 0.0, 1.0);
if (abs(uniforms.tfDebug.x - 5.0) < 0.5) {
  tfCliffMask = 1.0;
  tfTracks = 0.0;
}
var tfTalus = clamp((1.0 - tfSteep * 0.7) * (tfScree * 1.2 + tfWRock * 0.55) * smoothstep(0.12, 0.58, tfSlope) * (0.4 + 0.6 * tfNMed), 0.0, 1.0);
tfTalus = tfTalus * mix(1.0, 0.35, tfCliffMask);
let tfApron = smoothstep(0.25, 0.7, tfAoTex.g) * (1.0 - smoothstep(0.935, 0.985, tfAoTex.r)) * (1.0 - tfSteep);
tfTalus = max(tfTalus, clamp(tfApron * (0.6 + 0.9 * tfNMed) - 0.1, 0.0, 0.92));
tfTalus = max(tfTalus, clamp(max(tfSlope, 1.0 - smoothstep(0.74, 0.9, tfFaceN.y)) * (1.0 - tfCliffMask) * smoothstep(0.02, 0.3, tfAoTex.g) * (0.9 + 0.8 * tfNMed), 0.0, 0.92));
var tfAlbedo = tfPhoto;
if (tfTalus > 0.02) {
  let tfScreeTile = ${Gt.toFixed(3)} + (${Rt.toFixed(3)} - ${Gt.toFixed(3)}) * (1.0 - smoothstep(70.0, 200.0, tfCam));
  let tfScreeCol = tfCliffTri(cliffAlbedoSampler, cliffAlbedoSamplerSampler, 3.0, tfP, tfMapN, tfScreeTile);
  let tfTlSoil = mix(tfPhoto, tfScreeCol, 0.4) * vec3f(0.80, 0.76, 0.70);
  let tfTlFar = smoothstep(100.0, 150.0, tfCam);
  let tfTlCol = mix(tfTlSoil, tfScreeCol * 1.05, tfTlFar);
  tfAlbedo = mix(tfAlbedo, tfTlCol, tfTalus * mix(0.85, 0.8, tfTlFar));
}
if (tfCliffMask > 0.02) {
  let tfMacTile = ${Gt.toFixed(3)} + (${Rt.toFixed(3)} - ${Gt.toFixed(3)}) * (1.0 - smoothstep(90.0, 220.0, tfCam));
  let tfMacro = tfCliffTri(cliffAlbedoSampler, cliffAlbedoSamplerSampler, 0.0, tfP, tfMapN, tfMacTile);
  let tfGrit = tfCliffTri(cliffAlbedoSampler, cliffAlbedoSamplerSampler, 1.0, tfP, tfMapN, tfMacTile * 1.2);
  var tfCliffCol = mix(tfMacro, tfGrit, mix(0.22, 0.6, smoothstep(70.0, 180.0, tfCam)));
  let tfDetMix = 1.0 - smoothstep(24.0, 130.0, tfCam);
  if (tfDetMix > 0.02) {
    let tfDetTile = mix(${Rt.toFixed(3)}, ${Je.toFixed(3)}, 1.0 - smoothstep(20.0, 70.0, tfCam));
    let tfDetail = tfCliffTri(cliffAlbedoSampler, cliffAlbedoSamplerSampler, 0.0, tfP, tfMapN, tfDetTile);
    tfCliffCol = mix(tfCliffCol, tfDetail, tfDetMix * mix(0.5, 0.8, 1.0 - smoothstep(14.0, 45.0, tfCam)));
  }
  let tfCav = tfCliffTri(cliffAoSampler, cliffAoSamplerSampler, 0.0, tfP, tfMapN, ${Rt.toFixed(3)}).r;
  tfCliffCol = tfCliffCol * mix(0.54, 1.07, smoothstep(0.06, 0.8, tfCav));
  let tfToneN = tfFbm(tfXZ * 0.007 + vec2f(2.0, 9.0));
  let tfBleach = tfFbm(tfXZ * 0.0045 + vec2f(31.0, 7.0));
  let tfDamp = smoothstep(0.55, 0.8, tfFbm(tfXZ * 0.011 + vec2f(5.0, 23.0)));
  tfCliffCol = tfCliffCol * mix(vec3f(0.94, 0.96, 0.98), vec3f(1.04, 1.00, 0.94), tfToneN);
  tfCliffCol = tfCliffCol * mix(0.86, 1.14, tfBleach) * mix(vec3f(1.0), vec3f(0.86, 0.87, 0.85), tfDamp);
  tfCliffCol = tfCliffCol * ${Jo.toFixed(2)};
  let tfNear = 1.0 - smoothstep(110.0, 150.0, tfCam);
  var tfLens = 1.0;
  if (tfNear > 0.0) {
    tfLens = mix(1.0, smoothstep(0.32, 0.68, tfNoise(vec2f((tfP.x + tfP.z) * 0.035, tfP.y * 0.09 + 21.0))), tfNear);
  }
  let tfSsL = dot(tfCliffCol, vec3f(0.333));
  let tfBand = smoothstep(0.55, 0.72, tfFbm(vec2f(tfP.y * 0.21 + tfFbm(vec2f((tfP.x + tfP.z) * 0.02, tfP.y * 0.05)) * 1.6, 11.0 + (tfP.x - tfP.z) * 0.01))) * smoothstep(0.35, 0.6, tfFbm(vec2f((tfP.x + tfP.z) * 0.012, 3.0 + tfP.y * 0.03))) * tfLens;
  let tfCourse = floor(tfP.y / 2.8 + tfNoise(vec2f((tfP.x - tfP.z) * 0.015, 7.0)) * 1.4);
  let tfCh = fract(sin(tfCourse * 12.9898 + 4.1) * 43758.5453);
  let tfCh2 = fract(sin(tfCourse * 78.233 + 1.7) * 24634.6345);
  let tfCourseTint = mix(vec3f(1.10, 0.90, 0.74), vec3f(1.08, 1.00, 0.78), tfCh2);
  tfCliffCol = tfCliffCol * mix(vec3f(1.0), tfCourseTint, tfCh * 0.55);
  tfCliffCol = mix(tfCliffCol * vec3f(${ko}), vec3f(tfSsL) * vec3f(1.02, 0.98, 0.92), tfBand * 0.32);
  let tfStain = smoothstep(0.5, 0.78, tfFbm(vec2f((tfP.x + tfP.z) * 0.08, tfP.y * 0.025 + 4.0)));
  tfCliffCol = tfCliffCol * mix(vec3f(1.0), vec3f(${No}), tfStain * 0.7);
  if (tfNear > 0.0) {
    let tfRun = smoothstep(0.62, 0.85, tfNoise(vec2f((tfP.x + tfP.z) * 0.09, tfP.y * 0.012 + 2.0)));
    tfCliffCol = tfCliffCol * mix(vec3f(1.0), vec3f(1.06, 0.86, 0.70), tfRun * 0.4 * tfNear);
  }
  let tfLumC = max(dot(tfCliffCol, vec3f(0.333)), 0.02);
  tfCliffCol = tfCliffCol * pow(0.545 / tfLumC, 0.42 * smoothstep(90.0, 200.0, tfCam));
  let tfFormR = smoothstep(70.0, 180.0, tfCam);
  tfCliffCol = tfCliffCol * mix(mix(${tf.toFixed(2)}, 0.90, tfFormR), mix(${ef.toFixed(2)}, 1.40, tfFormR), smoothstep(-0.2, 0.8, dot(tfMapN, vec3f(${me}))));
  let tfStreak = tfFbm(vec2f(tfP.x * 0.16 + tfP.z * 0.13, tfP.y * 0.05 + 6.0));
  tfCliffCol = tfCliffCol * mix(vec3f(1.0), vec3f(0.90, 0.91, 0.92), smoothstep(0.70, 0.94, tfStreak) * 0.18);
  let tfSoil = tfGndDist(groundAlbedoSampler, groundAlbedoSamplerSampler, 2.0, tfD, tfCam);
  let tfMoss = vec3f(0.27, 0.34, 0.20);
  let tfCapEdge = (1.0 - tfCliffMask) + (1.0 - tfSteep);
  if (abs(uniforms.tfDebug.x - 5.0) > 0.5) {
    let tfLipW = smoothstep(0.02, 0.3, tfCliffMask) * (1.0 - smoothstep(0.4, 0.85, tfCliffMask));
    tfAlbedo = mix(tfAlbedo, tfSoil * 0.95, clamp(tfCapEdge * 0.25 * tfNMed * 0.4 + tfLipW * (0.45 + 0.3 * tfNMed), 0.0, 0.75));
    tfCliffCol = mix(tfCliffCol, mix(tfCliffCol, tfMoss, 0.5), (1.0 - tfCav) * (0.25 + 0.5 * tfNHi) * 0.45);
  }
  tfAlbedo = mix(tfAlbedo, tfCliffCol, tfCliffMask);
}
let tfLip = 0.0;
let tfFoot = 0.0;
var tfRough = 0.0;
if (tfWGrass > 0.02) { tfRough += tfGndDist(groundRoughSampler, groundRoughSamplerSampler, 0.0, tfD, tfCam).r * tfWGrass; }
if (tfWForest > 0.02) { tfRough += tfGndDist(groundRoughSampler, groundRoughSamplerSampler, 1.0, tfD, tfCam).r * tfWForest; }
if (tfWDirt > 0.02) { tfRough += tfGndDist(groundRoughSampler, groundRoughSamplerSampler, 2.0, tfD, tfCam).r * tfWDirt; }
if (tfWRock > 0.02) { tfRough += tfGndDist(groundRoughSampler, groundRoughSamplerSampler, 3.0, tfD, tfCam).r * tfWRock; }
tfAlbedo = tfAlbedo * mix(0.93, 1.0, tfRough);
tfAlbedo = tfAlbedo * (1.0 - 0.02 * tfHollow);
tfAlbedo = tfAlbedo * (1.0 - 0.15 * tfTracks * (1.0 - tfFaceSteep));
var tfGSlot = 0.0;
var tfGBest = tfWGrass;
if (tfWForest > tfGBest) { tfGBest = tfWForest; tfGSlot = 1.0; }
if (tfWDirt > tfGBest) { tfGBest = tfWDirt; tfGSlot = 2.0; }
if (tfWRock > tfGBest) { tfGSlot = 3.0; }
var tfTs = tfGndDist(groundNrmSampler, groundNrmSamplerSampler, tfGSlot, tfD, tfCam) * 2.0 - 1.0;
if (uniforms.tfParams.w < 0.5) {
  tfTs = vec3f(0.0, 0.0, 1.0);
}
let tfNrmScale = mix(0.95, 0.52, tfWGrass);
tfTs = vec3f(tfTs.x * tfNrmScale, tfTs.y * tfNrmScale, tfTs.z);
if (tfCliffMask > 0.02) {
  let tfNrmSlot = select(0.0, 2.0, tfCam < 70.0);
  var tfTsTri = (select(
    tfCliffTri(cliffNrmSampler, cliffNrmSamplerSampler, tfNrmSlot, tfPRock, tfMapN, ${Gt.toFixed(3)}),
    tfCliffLook(cliffNrmSampler, cliffNrmSamplerSampler, tfNrmSlot, tfPRock, tfMapN, tfCam),
    tfCam < 85.0
  )) * 2.0 - 1.0;
  let tfCloseN = mix(1.0, 1.55, 1.0 - smoothstep(12.0, 70.0, tfCam));
  tfTsTri = vec3f(tfTsTri.x * tfCloseN, tfTsTri.y * tfCloseN, tfTsTri.z);
  tfTs = mix(tfTs, tfTsTri, tfCliffMask);
  let tfCliffRough = tfCliffTri(cliffRoughSampler, cliffRoughSamplerSampler, 0.0, tfPRock, tfMapN, ${Rt.toFixed(3)}).r;
  tfRough = mix(tfRough, mix(tfCliffRough, 0.38, 0.28), tfCliffMask);
}
if (abs(uniforms.tfDebug.x - 4.0) < 0.5) {
  tfTs = vec3f(0.0, 0.0, 1.0);
}
tfTs = normalize(tfTs);
let tfBumpX = (tfFbm(tfXZ * 0.35 + vec2f(2.0, 7.0)) - 0.5) * 0.22 + (tfNoise(tfXZ * 0.9) - 0.5) * 0.10;
let tfBumpY = (tfFbm(tfXZ * 0.35 + vec2f(9.0, 3.0)) - 0.5) * 0.22 + (tfNoise(tfXZ * 0.9 + vec2f(4.0, 1.0)) - 0.5) * 0.10;
tfTs = normalize(vec3f(tfTs.x + (tfBumpX + tfStone * 0.35) * tfWGrass, tfTs.y + (tfBumpY - tfStone * 0.15) * tfWGrass, tfTs.z));
let tfUp = select(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), abs(tfGeom.y) > 0.96);
let tfT = normalize(cross(tfUp, tfGeom));
let tfB = cross(tfGeom, tfT);
normalW = normalize(tfT * tfTs.x + tfB * tfTs.y + tfGeom * tfTs.z);
if (abs(uniforms.tfDebug.x - 6.0) < 0.5) {
  normalW = tfFaceN;
}
let tfH = clamp((tfP.y - uniforms.tfParams.y) / max(uniforms.tfParams.z - uniforms.tfParams.y, 1.0), 0.0, 1.0);
let tfShore = 1.0 - smoothstep(uniforms.tfParams.x, uniforms.tfParams.x + 8.0, tfP.y);
var tfAo = (${Mo.toFixed(2)} + ${wo.toFixed(2)} * clamp(tfGeom0.y, 0.0, 1.0)) * (${Ao.toFixed(2)} + ${yo.toFixed(2)} * clamp(tfTs.z, 0.0, 1.0));
tfAo = tfAo * (1.0 - 0.10 * tfHollow - 0.06 * tfConcav);
tfAo = tfAo * mix(tfAoTex.r, 1.0, tfFaceSteep);
tfAo = clamp(tfAo, mix(0.70, 0.36, tfCliffMask), 1.0);
if (abs(uniforms.tfDebug.x - 2.0) < 0.5 || abs(uniforms.tfDebug.x - 5.0) < 0.5) {
  tfAo = 1.0;
}
tfAlbedo = tfAlbedo * mix(1.0, mix(0.72, 0.98, clamp(tfTs.z, 0.0, 1.0)), tfCliffMask * 0.60);
tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3f(0.55, 0.66, 0.62), tfShore * (1.0 - tfSteep) * 0.85);
tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3f(0.86, 0.90, 0.96), smoothstep(0.62, 0.95, tfH) * (1.0 - tfSteep));
{
  let tfSward = tfWGrass * (1.0 - tfSteep) * smoothstep(22.0, 75.0, tfCam) * (1.0 - smoothstep(420.0, 900.0, tfCam));
  tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3f(0.74, 0.84, 0.58) + vec3f(0.05, 0.06, 0.01), tfSward * 0.6);
}
tfAlbedo = tfAlbedo * tfAo;
let tfViewR = normalize(scene.vEyePosition.xyz - tfP);
let tfSun = vec3f(${me});
let tfNdL = clamp(dot(normalW, tfSun), 0.0, 1.0);
let tfNdV = clamp(dot(normalW, tfViewR), 0.0, 1.0);
let tfRim = pow(1.0 - tfNdV, 3.0) * tfNdL;
let tfHalf = normalize(tfSun + tfViewR);
let tfSpec = pow(clamp(dot(normalW, tfHalf), 0.0, 1.0), 28.0) * tfNdL;
tfAlbedo = tfAlbedo + tfCliffMask * (tfRim * vec3f(0.14, 0.13, 0.11) + tfSpec * vec3f(0.22, 0.20, 0.16) * (1.0 - tfRough));
if (abs(uniforms.tfDebug.x - 8.0) < 0.5) {
  tfAlbedo = tfTriW(tfMapN);
  normalW = vec3f(0.0, 1.0, 0.0);
}
if (abs(uniforms.tfDebug.x - 9.0) < 0.5) {
  tfAlbedo = tfTriW(tfFaceN);
  normalW = vec3f(0.0, 1.0, 0.0);
}
if (abs(uniforms.tfDebug.x - 10.0) < 0.5) {
  tfAlbedo = tfFaceN * 0.5 + 0.5;
  normalW = vec3f(0.0, 1.0, 0.0);
}
if (abs(uniforms.tfDebug.x - 11.0) < 0.5) {
  let tfUvDbg = fract(tfP.xy * 0.18);
  tfAlbedo = vec3f(tfUvDbg.x, tfUvDbg.y, 0.0);
  normalW = vec3f(0.0, 1.0, 0.0);
}
if (abs(uniforms.tfDebug.x - 12.0) < 0.5) {
  tfAlbedo = tfCliffTex(cliffAlbedoSampler, cliffAlbedoSamplerSampler, 0.0, tfP.xy * 0.18).rgb;
  normalW = vec3f(0.0, 1.0, 0.0);
}
baseColor = vec4f(clamp(tfAlbedo, vec3f(0.0), vec3f(1.0)), baseColor.a);
`}function ao(o,t,e,f,s){const l=Yt(uo(t,e)),a=new dt(l,o,!1,!1,dt.TRILINEAR_SAMPLINGMODE,()=>f(),r=>{const n=typeof r=="string"?r:e;console.error(`Terrain texture failed: ${l}`,n),s(n)});return a.wrapU=dt.CLAMP_ADDRESSMODE,a.wrapV=dt.CLAMP_ADDRESSMODE,a.anisotropicFilteringLevel=1,a}class Af extends Zo{mapW=1536;mapH=1024;splat0;splat1;splat2;tracks;detail;detailNrm;groundAlbedo;groundNrm;groundRough;cliffAlbedo;cliffNrm;cliffRough;cliffAo;ao;waterY=45;minY=0;maxY=120;detailScale=1;debugMode=0;source=null;mode=0;constructor(t,e,f=null,s=0){if(super(t,"TerrainSplat",200,{TERRAIN_SPLAT:!1,TF_TESS:!1,TF_KIT:!1,TF_KITFAR:!1},!0,!1),this.registerForExtraEvents=!0,this.source=f,this.mode=s,this._enable(!0),f)return;const l=m0(),a=dt.LINEAR_LINEAR;this.detail=je.CreateRGBATexture(l.albedo,l.size,l.size,e,!1,!1,a),this.detailNrm=je.CreateRGBATexture(l.normal,l.size,l.size,e,!1,!1,a),this.detail.wrapU=dt.CLAMP_ADDRESSMODE,this.detail.wrapV=dt.CLAMP_ADDRESSMODE,this.detailNrm.wrapU=dt.CLAMP_ADDRESSMODE,this.detailNrm.wrapV=dt.CLAMP_ADDRESSMODE,this.detail.anisotropicFilteringLevel=1,this.detailNrm.anisotropicFilteringLevel=1;const r=new Uint8Array(4*4*4);r.fill(128);const n=()=>je.CreateRGBATexture(r,4,4,e,!1,!1,dt.NEAREST_SAMPLINGMODE);this.splat0=n(),this.splat1=n(),this.splat2=n(),this.tracks=n();const c=new Uint8Array(4*4*4);c.fill(255),this.ao=je.CreateRGBATexture(c,4,4,e,!1,!1,dt.BILINEAR_SAMPLINGMODE),this.ao.wrapU=dt.CLAMP_ADDRESSMODE,this.ao.wrapV=dt.CLAMP_ADDRESSMODE,this.groundAlbedo=n(),this.groundNrm=n(),this.groundRough=n(),this.cliffAlbedo=n(),this.cliffNrm=n(),this.cliffRough=n(),this.cliffAo=n(),this.detailScale=Qe()===Fe.Low?0:1;const m=Yo(d=>{this.detailScale=d===Fe.Low?0:1});t.onDisposeObservable.add(()=>m())}isCompatible(){return!0}getClassName(){return"TerrainSplatPlugin"}prepareDefines(t){const e=this.mode===1,f=this.mode===2||this.mode===3,s=this.mode===3;(!t.TERRAIN_SPLAT||t.TF_TESS!==e||t.TF_KIT!==f||t.TF_KITFAR!==s)&&(t.TERRAIN_SPLAT=!0,t.TF_TESS=e,t.TF_KIT=f,t.TF_KITFAR=s,t.markAsUnprocessed())}getSamplers(t){t.push("splat0Sampler","splat1Sampler","splat2Sampler","tracksSampler","detailSampler","detailNrmSampler","aoSampler","groundAlbedoSampler","groundNrmSampler","groundRoughSampler","cliffAlbedoSampler","cliffNrmSampler","cliffRoughSampler","cliffAoSampler")}getUniforms(t=It.GLSL){return{ubo:[{name:"mapSize",size:2,type:"vec2"},{name:"tfParams",size:4,type:"vec4"},{name:"tfDebug",size:4,type:"vec4"}],fragment:t===It.WGSL?void 0:`#ifdef TERRAIN_SPLAT
uniform vec2 mapSize;
uniform vec4 tfParams;
uniform vec4 tfDebug;
#endif
`}}bindForSubMesh(t){this.bindSplats(t)}hardBindForSubMesh(t){this.bindSplats(t)}bindSplats(t){const e=this.source??this;t.updateFloat2("mapSize",e.mapW,e.mapH),t.updateFloat4("tfParams",e.waterY,e.minY,e.maxY,e.detailScale),t.updateFloat4("tfDebug",e.debugMode,this.mode,0,0),t.setTexture("splat0Sampler",e.splat0),t.setTexture("splat1Sampler",e.splat1),t.setTexture("splat2Sampler",e.splat2),t.setTexture("tracksSampler",e.tracks),t.setTexture("detailSampler",e.detail),t.setTexture("detailNrmSampler",e.detailNrm),t.setTexture("aoSampler",e.ao),t.setTexture("groundAlbedoSampler",e.groundAlbedo),t.setTexture("groundNrmSampler",e.groundNrm),t.setTexture("groundRoughSampler",e.groundRough),t.setTexture("cliffAlbedoSampler",e.cliffAlbedo),t.setTexture("cliffNrmSampler",e.cliffNrm),t.setTexture("cliffRoughSampler",e.cliffRough),t.setTexture("cliffAoSampler",e.cliffAo)}getCustomCode(t,e=It.GLSL){if(t!=="fragment")return null;const f=e===It.WGSL,s=this.mode!==0;return{CUSTOM_FRAGMENT_DEFINITIONS:f?`#define DISABLE_UNIFORMITY_ANALYSIS
`+p0():u0(),CUSTOM_FRAGMENT_UPDATE_DIFFUSE:s?f?o0():e0():f?x0():h0(),...s?{CUSTOM_FRAGMENT_BEFORE_FOG:f?S0:v0}:{}}}}const v0=`
{
  float tfLc = max(dot(color.rgb, vec3(0.333)), 1e-4);
  float tfLa = max(dot(tfAlbedo, vec3(0.333)), 1e-4);
  vec3 tfOwn = tfAlbedo / tfLa * tfLc;
  float tfCool = clamp((color.b / tfLc - tfAlbedo.b / tfLa) * 5.0, 0.0, 1.0);
  color.rgb = mix(color.rgb, tfOwn, tfCool * 0.8 * tfRockW);
}
`,S0=`
{
  let tfLc = max(dot(color.rgb, vec3f(0.333)), 1e-4);
  let tfLa = max(dot(tfAlbedo, vec3f(0.333)), 1e-4);
  let tfOwn = tfAlbedo / tfLa * tfLc;
  let tfCool = clamp((color.b / tfLc - tfAlbedo.b / tfLa) * 5.0, 0.0, 1.0);
  color = vec4f(mix(color.rgb, tfOwn, tfCool * 0.8 * tfRockW), color.a);
}
`;function b0(o,t,e,f="twin-ridges"){const s=new Et("terrain-tess",o);let l=!1;const a=new Et("terrain",o);a.diffuseColor.set(1,1,1),a.specularColor.set(.002,.002,.002),a.specularPower=8;const r=new Af(a,o);r.mapW=t,r.mapH=e,a.onError=(d,u)=>{console.error(u),document.documentElement.dataset.terrain="shader-error"};const n=(d,u,v,p)=>{const h=Yt(`terrain/${d}/${u}`),S=new dt(h,o,!1,!1,dt.TRILINEAR_SAMPLINGMODE,()=>v(),w=>{const M=typeof w=="string"?w:u;console.error(`Terrain PBR texture failed: ${h}`,M),p(M)});return S.wrapU=dt.CLAMP_ADDRESSMODE,S.wrapV=dt.CLAMP_ADDRESSMODE,S.anisotropicFilteringLevel=4,S},c=new Promise(d=>{let u=11;const v=()=>{u-=1,u===0&&d()},p=h=>{console.error("terrain map texture",h),document.documentElement.dataset.terrain="texture-error",v()};r.splat0=ao(o,f,"splat_0_grass_scrub_rock_scree.png",v,p),r.splat1=ao(o,f,"splat_1_gravel_road_mud_sand.png",v,p),r.splat2=ao(o,f,"splat_2_water_concrete_wetness_strata.png",v,p),r.tracks=ao(o,f,"tracks_mask.png",v,p),r.groundAlbedo=n("ground","ground_albedo.jpg",v,p),r.groundNrm=n("ground","ground_normal.jpg",v,p),r.groundRough=n("ground","ground_rough.jpg",v,p),r.cliffAlbedo=n("cliff","cliff_albedo.jpg",v,p),r.cliffNrm=n("cliff","cliff_normal.jpg",v,p),r.cliffRough=n("cliff","cliff_rough.jpg",v,p),r.cliffAo=n("cliff","cliff_ao.jpg",v,p)}),m=[];return{material:a,ready:c,variant(d,u,v){const p=d==="tess"&&!l?s:new Et(u,o);return p===s&&(l=!0),p.diffuseColor.set(1,1,1),p.specularColor.copyFrom(a.specularColor),p.specularPower=a.specularPower,v&&(p.bumpTexture=v,p.invertNormalMapY=!1),new Af(p,o,r,d==="kitFar"?3:d==="kit"?2:1),p.onError=a.onError,m.push(p),p},setRelief(d,u,v){r.minY=d,r.maxY=Math.max(d+1,u),r.waterY=v},setAoMap(d,u,v){const p=r.ao;r.ao=je.CreateRGBATexture(d,u,v,o,!1,!1,dt.BILINEAR_SAMPLINGMODE),r.ao.wrapU=dt.CLAMP_ADDRESSMODE,r.ao.wrapV=dt.CLAMP_ADDRESSMODE,p.dispose()},setDebug(d){r.debugMode=d,a.wireframe=d===7;for(const u of m)u.wireframe=d===7}}}function g0(o,t){const e=t==="webgl2";switch(o){case Fe.Low:return{mapSize:e?0:1024,cascades:2,lambda:.7,blend:.05,distance:280,float32:!1,contact:!1,filter:be.QUALITY_LOW,darkness:no,bias:.003,normalBias:.08,lightSize:.02,fitNear:!1,rockCasters:!1};case Fe.Medium:return{mapSize:e?1024:2048,cascades:2,lambda:.78,blend:.06,distance:e?360:520,float32:!1,contact:!1,filter:be.QUALITY_MEDIUM,darkness:no,bias:.002,normalBias:e?.05:.036,lightSize:.018,fitNear:!e,rockCasters:!1};case Fe.High:return{mapSize:e?1024:2048,cascades:2,lambda:.84,blend:.07,distance:e?480:760,float32:!e,contact:!1,filter:be.QUALITY_HIGH,darkness:no,bias:e?.0012:7e-4,normalBias:e?.04:.016,lightSize:.022,fitNear:!e,rockCasters:!e};case Fe.Ultra:return{mapSize:2048,cascades:e?3:4,lambda:.9,blend:.08,distance:e?720:980,float32:!0,contact:!e,filter:be.QUALITY_MEDIUM,darkness:no,bias:8e-4,normalBias:.014,lightSize:.018,fitNear:!0,rockCasters:!0}}}const no=.08;let Ho=0,ro=null,Vo=null;function Uo(){return Vo}function $n(o,t,e){const f=Math.max(0,o-t);return Math.max(0,Math.min(.6,f*.8/Math.max(1,e)))}function go(){return Ho}function C0(o,t){o.stabilizeCascades=!0,o.lambda=t.lambda,o.cascadeBlendPercentage=t.blend,o.depthClamp=!t.contact,o.shadowMaxZ=t.distance,o.darkness=t.darkness,o.bias=t.bias,o.normalBias=t.normalBias,o.frustumEdgeFalloff=.22,o.penumbraDarkness=.62,o.filteringQuality=t.filter,o.contactHardeningLightSizeUVRatio=t.lightSize,t.contact?(o.useContactHardeningShadow=!0,o.usePercentageCloserFiltering=!1):(o.useContactHardeningShadow=!1,o.usePercentageCloserFiltering=!0),o.numCascades!==t.cascades&&(o.numCascades=t.cascades),o.splitFrustum()}function M0(o,t){const e=new be(Math.max(1024,t.mapSize),o);return e.usePercentageCloserFiltering=!0,e.filteringQuality=t.filter,e.darkness=t.darkness,e.bias=t.bias,e.normalBias=t.normalBias,e.frustumEdgeFalloff=.22,e}function w0(o,t,e){const f=o.getScene();t&&!f.activeCamera&&(f.activeCamera=t);const s=o.getShadowGenerators();if(s)for(const a of[...s.values()])a.dispose();if(e.mapSize<=0)return Ho+=1,null;let l;if(mf.IsSupported){const a=new mf(e.mapSize,o,e.float32,null,!0);C0(a,e),l=a}else l=M0(o,e);return Ho+=1,l}function Hn(o,t,e){ro?.();const f=()=>{if(e())return;const r=If()?.backend==="webgl2"?"webgl2":"webgpu";Vo=g0(Qe(),r),w0(o,t,Vo)};f();const s=Yo(f),l=Of(f),a=()=>{s(),l(),ro===a&&(ro=null)};return ro=a,a}const bs=96,gs=3,lo=.8,yf=3.4;function Nt(o,t,e){let f=Math.imul(o|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1442695041);return f=Math.imul(f^f>>>13,1274126177),((f^f>>>16)>>>0)/4294967296}function Me(o,t,e){const f=Math.floor(o),s=Math.floor(t),l=Math.floor(e),a=o-f,r=t-s,n=e-l,c=a*a*(3-2*a),m=r*r*(3-2*r),d=n*n*(3-2*n),u=Nt(f,s,l),v=Nt(f+1,s,l),p=Nt(f,s+1,l),h=Nt(f+1,s+1,l),S=Nt(f,s,l+1),w=Nt(f+1,s,l+1),M=Nt(f,s+1,l+1),T=Nt(f+1,s+1,l+1),R=u+(v-u)*c,C=p+(h-p)*c,y=S+(w-S)*c,g=M+(T-M)*c,A=R+(C-R)*m,_=y+(g-y)*m;return A+(_-A)*d}function Tf(o,t,e){return .55*Me(o,t,e)+.3*Me(o*2.03,t*2.03,e*2.03)+.15*Me(o*4.07,t*4.07,e*4.07)}function We(o){const t=Math.max(0,Math.min(1,o));return t*t*(3-2*t)}function Rf(o,t,e){const f=(o%t+t)%t,s=Math.min(f,t-f)/Math.max(1e-4,e);return s>=1?0:(1-s)*(1-s)}function _f(o,t,e){const f=o*.8-e*.6,s=o*.6+e*.8,l=t+f*.21,a=Math.floor(f),r=Math.floor(l),n=Math.floor(s),c=f-a,m=l-r,d=s-n,u=Nt(a,r,n),v=Nt(a+1,r,n),p=Nt(a,r+1,n),h=Nt(a+1,r+1,n),S=Nt(a,r,n+1),w=Nt(a+1,r,n+1),M=Nt(a,r+1,n+1),T=Nt(a+1,r+1,n+1),R=u+(v-u)*c,C=p+(h-p)*c,y=S+(w-S)*c,g=M+(T-M)*c,A=R+(C-R)*m,_=y+(g-y)*m;return A+(_-A)*d}function Eo(o){const t=1-Math.abs(2*o-1);return t*t}function A0(o){const t=(o-lo)/(yf-lo),e=1.8,f=.5+.5*Math.tanh((t-.5)*e)/Math.tanh(.5*e);return lo+(yf-lo)*Math.max(0,Math.min(1,f))}function y0(o,t,e,f=.5){const s=(Me(o*.05,t*.05,e*.05)-.5)*3.2,l=(Me(o*.05+7.3,t*.05,e*.05+2.9)-.5)*3.2,a=Rf(o*.73+e*.68+s,7.3,1)*1.15+Rf(o*-.52+e*.85+2.1+l,11.7,1.2)*.85,r=Eo(_f(o*.065,t*.1,e*.065)),n=Eo(_f(o*.14+3.1,t*.21,e*.14+1.7)),c=Eo(Me(o*.29+8.2,t*.4,e*.29+5.3)),m=(Tf(o*.045+1.3,t*.012,e*.045+6.1)-.5)*2.6,d=r*1.15+n*.35+c*.06+m,u=(t+(Tf(o*.035,3,e*.035)-.5)*7)/4.6,v=u-Math.floor(u),p=Math.max(0,1-Math.abs(v-.22)/.2),h=Math.max(0,Me(o*.06+4.4,Math.floor(u)*1.7,e*.06)-.35)*1.6,S=(f-.5)*.7;return A0(1.2+d+p*p*h+S-a*.8)}function Cs(o,t,e,f,s,l){const a=te(o,t,e,f,s,l);let r=0,n=0;for(let c=0;c<8;c++){const m=c*Math.PI/4,d=Math.cos(m),u=Math.sin(m);r=Math.max(r,a-te(o,t,e,f,s+d*5,l+u*5)),n=Math.max(n,te(o,t,e,f,s+d*8,l+u*8)-a)}return We((r-2.5)/3)*(1-We((n-1.5)/3))}function te(o,t,e,f,s,l){const a=t+1,r=Math.max(0,Math.min(t-.001,s/f)),n=Math.max(0,Math.min(e-.001,l/f)),c=Math.floor(r),m=Math.floor(n),d=r-c,u=n-m,v=(S,w)=>{const M=Math.max(0,Math.min(t,S)),T=Math.max(0,Math.min(e,w));return o[T*a+M]/64},p=(S,w,M,T,R)=>w+.5*R*(M-S+R*(2*S-5*w+4*M-T+R*(3*(w-M)+T-S))),h=[];for(let S=-1;S<=2;S++)h.push(p(v(c-1,m+S),v(c,m+S),v(c+1,m+S),v(c+2,m+S),d));return p(h[0],h[1],h[2],h[3],u)}function Ms(o,t,e,f,s,l){const a=Math.max(f,4),r=te(o,t,e,f,s+a,l)-te(o,t,e,f,s-a,l),n=te(o,t,e,f,s,l+a)-te(o,t,e,f,s,l-a),c=Math.max(0,Math.min(1,Math.hypot(r,n)/(2*a)/1.2)),m=Math.hypot(r,n)||1,d=-r/m,u=-n/m,v=c*1.2,p=1/Math.hypot(1,v),h=Math.sqrt(Math.max(0,1-p*p)),S=te(o,t,e,f,s,l),w=zo(p),M=Fo(s,l)*w*Be,T=d*h,R=u*h;return{dx:d,dz:u,slope:c,y:S,nx:T,ny:p,nz:R,px:s+T*M,py:S+p*M,pz:l+R*M}}function ws(){const o=new Map;return{cells:o,clear(){o.clear()}}}function T0(o){return We((Le-o)/(Le-Ko))}function ve(o,t,e,f){const{heights:s,gw:l,gh:a,cell:r}=o,n=Ms(s,l,a,r,t,e),c=o.scanHeight?o.scanHeight(t,n.py,e):.5,m=Zt(s,l,a,r,t,e)?Ss:1,d=(.12+.88*We((n.slope-.18)/.25))*m,u=y0(t,n.py,e,c)*(.45+.55*We((n.slope-.42)/.2))*d,v=Cs(s,l,a,r,t,e),p=v>.001&&m===1?v*xs(t,e):0,h=p*.3,S=t+(n.px-t)*m,w=n.y+(n.py-n.y)*m,M=e+(n.pz-e)*m;return f[0]=S+n.nx*u+n.dx*h,f[1]=w+n.ny*u+p,f[2]=M+n.nz*u+n.dz*h,f[3]=Math.max(T0(n.ny),We(p/1.2)),f[4]=n.nx,f[5]=n.ny,f[6]=n.nz,u}function R0(o,t,e,f){const{cell:s}=o,l=s/f,a=f+1,r=new Float32Array(a*a*3),n=new Float32Array(a*a*3),c=new Float32Array(a*a*4),m=[0,0,0,0,0,0,0],d=[0,0,0],u=[0,0,0],v=[0,0,0],p=[0,0,0],h=l*.5;let S=Number.POSITIVE_INFINITY,w=0;for(let M=0;M<a;M++)for(let T=0;T<a;T++){const R=t*s+T*l,C=e*s+M*l,y=ve(o,R,C,m);y<S&&(S=y),y>w&&(w=y),ve(o,R+h,C,d),ve(o,R-h,C,u),ve(o,R,C+h,v),ve(o,R,C-h,p);const g=d[0]-u[0],A=d[1]-u[1],_=d[2]-u[2],L=v[0]-p[0],E=v[1]-p[1],D=v[2]-p[2];let tt=E*_-D*A,st=D*g-L*_,rt=L*A-E*g;const K=Math.hypot(tt,st,rt)||1;tt/=K,st/=K,rt/=K;const lt=(M*a+T)*3;r[lt]=m[0],r[lt+1]=m[1],r[lt+2]=m[2],n[lt]=tt,n[lt+1]=st,n[lt+2]=rt;const xt=(M*a+T)*4;c[xt]=m[4]*.5+.5,c[xt+1]=m[6]*.5+.5,c[xt+2]=y/4,c[xt+3]=m[3]}return{pos:r,nrm:n,col:c,minDisp:S,maxDisp:w}}function _0(o,t){const{heights:e,gw:f,gh:s,cell:l,cx:a,cz:r}=o,n=o.radius??bs,c=Math.max(1,o.subdiv??gs),m=(f-1)*l,d=(s-1)*l,u=Math.max(l,a-n),v=Math.max(l,r-n),p=Math.min(m-l,a+n),h=Math.min(d-l,r+n),S=n*n,w=t??ws(),M=[],T=Math.floor(u/l),R=Math.ceil(p/l),C=Math.floor(v/l),y=Math.ceil(h/l);for(let K=C;K<y;K++)for(let lt=T;lt<R;lt++){const xt=lt*l+l*.5,vt=K*l+l*.5,St=xt-a,Tt=vt-r;if(St*St+Tt*Tt>S)continue;const _t=K*1e5+lt;let zt=w.cells.get(_t);if(zt===void 0){const Kt=Ms(e,f,s,l,xt,vt),Ae=Kt.slope>=.12&&Cs(e,f,s,l,xt,vt)>.05;zt=Kt.slope<.48&&!Ae?null:R0(o,lt,K,c),w.cells.set(_t,zt)}zt&&M.push(zt)}const g=c+1,A=g*g,_=new Float32Array(M.length*A*3),L=new Float32Array(M.length*A*3),E=new Float32Array(M.length*A*4),D=new Uint32Array(M.length*c*c*6);let tt=Number.POSITIVE_INFINITY,st=0,rt=0;for(let K=0;K<M.length;K++){const lt=M[K];_.set(lt.pos,K*A*3),L.set(lt.nrm,K*A*3),E.set(lt.col,K*A*4),lt.minDisp<tt&&(tt=lt.minDisp),lt.maxDisp>st&&(st=lt.maxDisp);const xt=K*A;for(let vt=0;vt<c;vt++)for(let St=0;St<c;St++){const Tt=xt+vt*g+St,_t=Tt+1,zt=Tt+g+1,Kt=Tt+g;D[rt++]=Tt,D[rt++]=_t,D[rt++]=zt,D[rt++]=Tt,D[rt++]=zt,D[rt++]=Kt}}return M.length===0&&(tt=0,st=0),{positions:_,indices:D,normals:L,colors:E,cells:M.length,tris:D.length/3|0,minDisp:tt,maxDisp:st}}function k0(o,t,e,f,s){const l=o.activeCamera;if(!l)return null;const a=l.getForwardRay(420),r=a.origin,n=a.direction;for(let c=4;c<=420;c+=4){const m=r.x+n.x*c,d=r.z+n.z*c;if(r.y+n.y*c<=te(t,e,f,s,m,d)){const u=Math.min(1,60/c);return{x:m+(r.x-m)*u*.5,z:d+(r.z-d)*u*.5}}}return{x:r.x,z:r.z}}function N0(o,t,e,f,s,l,a){if(a==="low")return{mesh:null,dispose(){}};const r=a==="medium"?60:bs,n=a==="medium"?2:gs;let c=null,m=Number.NaN,d=Number.NaN,u;const v=ws(),p=()=>{c&&(c.dispose(),c=null)},h=(T,R)=>{const C=typeof performance<"u"?performance.now():0,y=_0({heights:t,gw:e,gh:f,cell:s,cx:T,cz:R,radius:r,subdiv:n,scanHeight:u},v);if(p(),typeof document<"u"&&(document.documentElement.dataset.steepTess=`${y.tris}`,document.documentElement.dataset.steepDisp=y.tris?`${y.minDisp.toFixed(2)}..${y.maxDisp.toFixed(2)}`:"0",document.documentElement.dataset.steepMs=`${(performance.now()-C).toFixed(1)}`),y.tris===0)return;const g=new ee("steep-tess",o);g.material=l,g.receiveShadows=!0,g.isPickable=!1,g.doNotSerialize=!0;const A=new ie;A.positions=y.positions,A.indices=y.indices,A.normals=y.normals,A.colors=y.colors,A.applyToMesh(g,!1),g.useVertexColors=!0,g.hasVertexAlpha=!1,c=g,w()};let S=-1;const w=()=>{if(S=go(),!c||!Uo()?.rockCasters)return;const T=o.getLightByName("sun"),R=T instanceof Bf?T.getShadowGenerator():null;R instanceof be&&R.addShadowCaster(c,!1)},M=o.onBeforeRenderObservable.add(()=>{S!==go()&&w();const T=k0(o,t,e,f,s);if(!T)return;const R=T.x,C=T.z;Number.isFinite(m)&&Math.hypot(R-m,C-d)<16||(m=R,d=C,h(R,C))});return F0().then(T=>{T&&(u=T,v.clear(),Number.isFinite(m)&&h(m,d))}),{get mesh(){return c},dispose(){o.onBeforeRenderObservable.remove(M),p()}}}async function F0(){if(!(typeof fetch>"u"||typeof document>"u"))try{const o=await fetch(Yt("terrain/cliff/cliff_ao.jpg"));if(!o.ok)return;const t=await o.blob(),e=await createImageBitmap(t),f=document.createElement("canvas");f.width=e.width,f.height=e.height;const s=f.getContext("2d");if(!s)return;s.drawImage(e,0,0);const l=s.getImageData(0,0,e.width,e.height),a=l.width,r=l.height,n=l.data;return(c,m,d)=>{const u=(c*.07%1+1)%1*.5,v=((m*.07+d*.03)%1+1)%1*.5,p=Math.min(a-1,u*a|0),h=Math.min(r-1,(1-v)*r|0);return n[(h*a+p)*4]/255}}catch{return}}function z0(o,t,e,f,s,l){const a=[0,0,0,0,0,0,0],r={heights:o,gw:t,gh:e,cell:f,cx:s,cz:l};let n=s,c=l;for(let m=0;m<4;m++)ve(r,n,c,a),n+=s-a[0],c+=l-a[2];return ve(r,n,c,a),a[1]}const D0=[137,80,78,71,13,10,26,10];function Lo(o,t){return(o[t]<<24|o[t+1]<<16|o[t+2]<<8|o[t+3])>>>0}function P0(o,t,e){const f=o+t-e,s=Math.abs(f-o),l=Math.abs(f-t),a=Math.abs(f-e);return s<=l&&s<=a?o:l<=a?t:e}async function G0(o){const t=new Blob([o]).stream().pipeThrough(new DecompressionStream("deflate"));return new Uint8Array(await new Response(t).arrayBuffer())}function W0(o,t,e,f){const s=t*f,l=new Uint8Array(s*e);let a=0,r=0;for(let n=0;n<e;n++){const c=o[a++];if(c>4)throw new Error(`bad png filter ${c}`);for(let m=0;m<s;m++){const d=o[a++],u=m>=f?l[r+m-f]:0,v=n>0?l[r+m-s]:0,p=n>0&&m>=f?l[r+m-s-f]:0;let h=0;c===0?h=d:c===1?h=d+u:c===2?h=d+v:c===3?h=d+(u+v>>1):h=d+P0(u,v,p),l[r+m]=h&255}r+=s}return l}function E0(o,t,e,f,s,l){const a=t*e,r=new Uint8ClampedArray(a*4);if(f===6)return r.set(o),r;if(f===2){for(let n=0,c=0;n<a;n++,c+=3){const m=n*4;r[m]=o[c],r[m+1]=o[c+1],r[m+2]=o[c+2],r[m+3]=255}return r}if(f===0){for(let n=0;n<a;n++){const c=o[n],m=n*4;r[m]=c,r[m+1]=c,r[m+2]=c,r[m+3]=255}return r}if(f===4){for(let n=0;n<a;n++){const c=o[n*2],m=n*4;r[m]=c,r[m+1]=c,r[m+2]=c,r[m+3]=o[n*2+1]}return r}if(f===3&&s){for(let n=0;n<a;n++){const c=o[n],m=n*4;r[m]=s[c*3],r[m+1]=s[c*3+1],r[m+2]=s[c*3+2],r[m+3]=l&&c<l.length?l[c]:255}return r}throw new Error(`unsupported png color type ${f}`)}async function L0(o){for(let h=0;h<8;h++)if(o[h]!==D0[h])throw new Error("not a png");let t=0,e=0,f=0,s=0,l,a;const r=[];let n=8;for(;n+8<=o.length;){const h=Lo(o,n),S=String.fromCharCode(o[n+4],o[n+5],o[n+6],o[n+7]),w=n+8,M=w+h;if(M+4>o.length)throw new Error("truncated png");const T=o.subarray(w,M);if(S==="IHDR"){if(t=Lo(T,0),e=Lo(T,4),f=T[8],s=T[9],f!==8)throw new Error(`unsupported png depth ${f}`)}else if(S==="PLTE")l=T.slice();else if(S==="tRNS")a=T.slice();else if(S==="IDAT")r.push(T);else if(S==="IEND")break;n=M+4}if(!t||!e||!r.length)throw new Error("png missing image data");let c=0;for(const h of r)c+=h.length;const m=new Uint8Array(c);let d=0;for(const h of r)m.set(h,d),d+=h.length;const u=s===6?4:s===2?3:s===4?2:1,v=await G0(m),p=W0(v,t,e,u);return{w:t,h:e,data:E0(p,t,e,s,l,a)}}class As extends Zo{time=0;amp=.12;leaf=!1;grass=!1;sun=Jf(315,30);host;dead=!1;constructor(t,e,f,s=!1){super(t,"VegWind",120,{VEG_WIND:!1,VEG_LEAF:!1,VEG_GRASS:!1},!0,!1),this.host=t,this.amp=e,this.leaf=f,this.grass=s,this.registerForExtraEvents=!0,this._enable(!0),t.onDisposeObservable.add(()=>{this.dead=!0})}isCompatible(){return!0}getClassName(){return"VegWindPlugin"}prepareDefines(t){t.VEG_WIND||(t.VEG_WIND=!0,t.markAsUnprocessed()),this.leaf&&!t.VEG_LEAF&&(t.VEG_LEAF=!0,t.markAsUnprocessed()),this.grass&&!t.VEG_GRASS&&(t.VEG_GRASS=!0,t.markAsUnprocessed())}getUniforms(t=It.GLSL){const e=t!==It.WGSL,f=`#ifdef VEG_WIND
uniform float vegTime;
uniform float vegAmp;
uniform vec3 vegSun;
#endif
`;return{ubo:[{name:"vegTime",size:1,type:"float"},{name:"vegAmp",size:1,type:"float"},{name:"vegSun",size:3,type:"vec3"}],vertex:e?f:void 0,fragment:e?f:void 0}}bindForSubMesh(t){this.bindWind(t)}hardBindForSubMesh(t){this.bindWind(t)}bindWind(t){t.updateFloat("vegTime",this.time),t.updateFloat("vegAmp",this.amp),t.updateFloat3("vegSun",this.sun[0],this.sun[1],this.sun[2])}getCustomCode(t,e=It.GLSL){const f=e===It.WGSL,s=f?`#ifdef VEG_GRASS
varying vVegH: f32;
#endif
`:`#ifdef VEG_GRASS
varying float vVegH;
#endif
`;return t==="vertex"?{CUSTOM_VERTEX_DEFINITIONS:s,CUSTOM_VERTEX_UPDATE_WORLDPOS:f?O0:B0,CUSTOM_VERTEX_MAIN_END:f?`#ifdef VEG_GRASS
vertexOutputs.vVegH = clamp(vertexInputs.position.y / 0.8, 0.0, 1.0);
#endif
`:`#ifdef VEG_GRASS
vVegH = clamp(position.y / 0.8, 0.0, 1.0);
#endif
`}:t==="fragment"?{CUSTOM_FRAGMENT_DEFINITIONS:s,CUSTOM_FRAGMENT_BEFORE_FOG:f?$0:I0}:null}}const B0=`
#ifdef VEG_WIND
{
  float vegH = clamp(positionUpdated.y * 0.14, 0.0, 1.0);
  float vegPh = vegTime * 0.85 + worldPos.x * 0.07 + worldPos.z * 0.055;
  float vegG = vegAmp * vegH * vegH;
  worldPos.xz += vec2(sin(vegPh), cos(vegPh * 0.83 + 1.3)) * vegG;
}
#endif
`,O0=`
#ifdef VEG_WIND
{
  let vegH = clamp(positionUpdated.y * 0.14, 0.0, 1.0);
  let vegPh = uniforms.vegTime * 0.85 + worldPos.x * 0.07 + worldPos.z * 0.055;
  let vegG = uniforms.vegAmp * vegH * vegH;
  worldPos = vec4f(worldPos.x + sin(vegPh) * vegG, worldPos.y, worldPos.z + cos(vegPh * 0.83 + 1.3) * vegG, worldPos.w);
}
#endif
`,I0=`
#ifdef VEG_LEAF
{
  vec3 Nraw = normalize(vNormalW);
  vec3 Nout = (dot(Nraw, vegSun) < 0.0) ? -Nraw : Nraw;
  float wrap = 0.45;
  float wrapL = clamp((dot(Nout, vegSun) + wrap) / (1.0 + wrap), 0.0, 1.0);
  vec3 hemi = mix(vec3(0.22, 0.22, 0.16), vec3(0.48, 0.54, 0.40), Nout.y * 0.5 + 0.5);
  float vegThru = pow(clamp(dot(-Nraw, vegSun), 0.0, 1.0), 1.0);
  float down = clamp(0.15 - Nout.y, 0.0, 1.0);
  color.rgb += baseColor.rgb * (hemi * 0.42 + wrapL * 0.24);
  color.rgb += baseColor.rgb * vec3(0.50, 0.56, 0.40) * vegThru * 0.22;
  color.rgb *= 1.0 - 0.10 * down;
  color.rgb = max(color.rgb, baseColor.rgb * 0.48);
  vec3 newRgb = color.rgb;
  float l = dot(newRgb, vec3(0.30, 0.55, 0.15));
  newRgb = mix(vec3(l), newRgb, 0.78);
#ifdef VEG_GRASS
  float h = vVegH;
  newRgb *= mix(0.45, 1.0, smoothstep(0.0, 0.7, h));
  newRgb += vec3(0.06, 0.04, 0.0) * smoothstep(0.65, 1.0, h) * wrapL;
#endif
  color.rgb = newRgb;
}
#endif
`,$0=`
#ifdef VEG_LEAF
{
  let Nraw = normalize(fragmentInputs.vNormalW);
  let Nout = select(-Nraw, Nraw, dot(Nraw, uniforms.vegSun) >= 0.0);
  let wrap = 0.45;
  let wrapL = clamp((dot(Nout, uniforms.vegSun) + wrap) / (1.0 + wrap), 0.0, 1.0);
  let hemi = mix(vec3f(0.22, 0.22, 0.16), vec3f(0.48, 0.54, 0.40), Nout.y * 0.5 + 0.5);
  let vegThru = pow(clamp(dot(-Nraw, uniforms.vegSun), 0.0, 1.0), 1.0);
  let down = clamp(0.15 - Nout.y, 0.0, 1.0);
  var leafRgb = color.rgb + baseColor.rgb * (hemi * 0.42 + wrapL * 0.24);
  leafRgb += baseColor.rgb * vec3f(0.50, 0.56, 0.40) * vegThru * 0.22;
  leafRgb *= 1.0 - 0.10 * down;
  color = vec4f(max(leafRgb, baseColor.rgb * 0.48), color.a);
  var newRgb = color.rgb;
  let l = dot(newRgb, vec3f(0.30, 0.55, 0.15));
  newRgb = mix(vec3f(l), newRgb, 0.78);
#ifdef VEG_GRASS
  let h = fragmentInputs.vVegH;
  newRgb *= mix(vec3f(0.45), vec3f(1.0), smoothstep(0.0, h, 0.7));
  newRgb += vec3f(0.06, 0.04, 0.0) * smoothstep(0.65, h, 1.0) * wrapL;
#endif
  color = vec4f(newRgb, color.a);
}
#endif
`,Do=[];function we(o,t,e=!1,f=!1,s="veg"){const l=new dt(Yt(`${s}/${t}`),o,!1,!e,dt.TRILINEAR_SAMPLINGMODE);return l.wrapU=f?dt.WRAP_ADDRESSMODE:dt.CLAMP_ADDRESSMODE,l.wrapV=f?dt.WRAP_ADDRESSMODE:dt.CLAMP_ADDRESSMODE,l.anisotropicFilteringLevel=4,l.updateSamplingMode(dt.TRILINEAR_SAMPLINGMODE),l}function H0(o){return!o||o.isReady()?Promise.resolve():new Promise(t=>{const e=()=>t();o.onLoadObservable.addOnce(e),globalThis.setTimeout(e,6e3)})}async function V0(o,t,e){const f=[];for(const a of t)a.diffuseTexture instanceof dt&&f.push(a.diffuseTexture),a.bumpTexture instanceof dt&&f.push(a.bumpTexture);await Promise.all(f.map(a=>H0(a)));const s=e.filter(a=>!!a),l=[];for(const a of t){const r=s.find(c=>c.material===a)??s[0];if(!r)continue;const n=a.forceCompilationAsync;typeof n=="function"?l.push(n.call(a,r).catch(()=>{})):l.push(new Promise(c=>{a.forceCompilation(r,()=>c(),void 0,()=>c())}))}await Promise.all(l);for(const a of s)a.isVisible=!0;try{o.render()}catch{}}function Te(o,t,e,f=.04){const s=new Et(`veg-bark-${t}`,o);return s.diffuseColor=e,s.diffuseTexture=we(o,t,!1,!0),s.ambientColor=new Z(.42,.38,.32),s.emissiveColor=new Z(.07,.06,.048),s.specularColor=new Z(.06,.05,.04),s.specularPower=8,Do.push(new As(s,f,!1)),s}function Mt(o,t,e,f=.18,s,l=!1){const a=new Et(`veg-leaf-${t}`,o);a.diffuseColor=e;const r=we(o,t);if(r.hasAlpha=!0,a.diffuseTexture=r,a.useAlphaFromDiffuseTexture=!0,a.transparencyMode=Xo.MATERIAL_ALPHATEST,a.alphaCutOff=.35,a.backFaceCulling=!1,a.twoSidedLighting=!0,a.ambientColor=new Z(.38,.44,.3),a.emissiveColor=new Z(.035,.042,.028),a.specularColor=new Z(.01,.012,.008),a.specularPower=4,s){const n=we(o,s);n.level=.9,a.bumpTexture=n,a.invertNormalMapY=!1,a.backFaceCulling=!0,a.twoSidedLighting=!1,a.emissiveColor=new Z(.022,.028,.022)}return Do.push(new As(a,f,!0,l)),a}function U0(o,t,e,f,s="veg"){const l=new Et(`veg-rock-${t}`,o);if(l.diffuseColor=e,l.diffuseTexture=we(o,t,!1,!0,s),l.specularColor=new Z(.045,.045,.04),l.specularPower=20,f){const a=we(o,f,!1,!0,s);a.level=1.05,l.bumpTexture=a,l.invertNormalMapY=!1}return l}function Z0(o){for(const t of Do)t.dead||(t.time+=o)}function kf(){Do.length=0}let ys=null;function X0(o){ys=o}function Nf(){return ys}function ho(o,t,e,f,s,l,a=4){const r=Math.max(f,a),n=O(o,t,e,f,s+r,l)-O(o,t,e,f,s-r,l),c=O(o,t,e,f,s,l+r)-O(o,t,e,f,s,l-r),m=Math.max(0,Math.min(1,Math.hypot(n,c)/(2*r)/1.2)),d=Math.hypot(n,c)||1;return{dx:-n/d,dz:-c/d,slope:m}}const Ut={cliff0:{h:8.5,d:7.5,w:14.6},cliff1:{h:8.5,d:9.3,w:11.9},cliff2:{h:8.5,d:8.2,w:23.9},cliff3:{h:8.56,d:6.65,w:10.16},cliff4:{h:10.48,d:5.39,w:10.32},cliff5:{h:10.85,d:24.62,w:86.68},rock0:{h:1,d:1.8,w:1.3},rock1:{h:1.36,d:.74,w:.5},rock2:{h:3.06,d:1.47,w:2.4},scree0:{h:.15,d:.21,w:1.45},cliff_bed_a:{h:7.85,d:8.42,w:10.89},cliff_bed_b:{h:8.42,d:7.24,w:9.22},cliff_ledge:{h:3.43,d:3.53,w:8.91},cliff_stack:{h:5.71,d:5.05,w:9.51},cliff_jointed:{h:6.08,d:5.6,w:17.18},cliff_rugged:{h:11.04,d:5.49,w:10.71},rubble_angular:{h:.1,d:.45,w:.23},rubble_slab_a:{h:.71,d:1.6,w:.84},rubble_slab_b:{h:.58,d:.72,w:1.19},rubble_boulder:{h:1.42,d:2.57,w:1.81},rubble_flat_a:{h:.69,d:1.16,w:1.4},rubble_flat_b:{h:.49,d:.85,w:.89},rubble_moss_a:{h:.79,d:1.79,w:1.2},rubble_moss_b:{h:.58,d:1.5,w:1.22},rubble_moss_c:{h:.89,d:2.21,w:1.33},rubble_round:{h:.3,d:.59,w:.79},buttress_a:{h:22.57,d:8.74,w:13.85},buttress_b:{h:18.52,d:9.54,w:9.39},buttress_c:{h:24.44,d:12.54,w:15.81}},Y0=["buttress_a","buttress_b","buttress_c"],Ff={cliff_bed_a:{front:-.74,lean:56},cliff_bed_b:{front:.03,lean:61},cliff_ledge:{front:.32,lean:60},cliff_stack:{front:.86,lean:76},cliff_jointed:{front:.81,lean:64},cliff_rugged:{front:1.71,lean:84}},zf=["cliff_bed_a","cliff_bed_b","cliff_rugged","cliff_jointed","cliff_rugged","cliff_bed_a","cliff_bed_b"],Df=["cliff_rugged","cliff_bed_a","cliff_bed_b","cliff_jointed"],Qt=["rubble_slab_a","rubble_boulder","rubble_flat_a","rubble_slab_b","rubble_slab_a","rubble_flat_b"],co=["rubble_angular","rubble_slab_b","rubble_flat_b","rubble_flat_a","rubble_angular","rubble_slab_a"];function z(o,t,e){let f=Math.imul(o*1e3|0,374761393)+Math.imul(t*1e3|0,668265263)+e*1442695041;return f=Math.imul(f^f>>>13,1274126177),((f^f>>>16)>>>0)/4294967296}function io(o,t,e,f,s,l){const a=ho(o,t,e,f,s,l,6),r=a.slope*1.2,n=1/Math.hypot(1,r),c=O(o,t,e,f,s,l),m=zo(n),d=(Fo(s,l,!1)+of(s,l))*m*Be,u=Math.sqrt(Math.max(0,1-n*n));return{x:s+-a.dx*u*d,y:c+n*d,z:l+-a.dz*u*d,dir:a,ny:n,y0:c}}function j0(o,t,e,f,s,l,a,r){const n=O(o,t,e,f,s,l);let c=0;for(const m of[8,14,22,30]){const d=O(o,t,e,f,s+a*m,l+r*m);n-d>c&&(c=n-d)}return c}function K0(o){const{heights:t,gw:e,gh:f,cell:s,waterY:l,worldW:a,worldH:r}=o,n=[],c=48,m=Math.max(0,o.cliffCap),d=Math.max(0,Math.min(480,Math.floor(o.cliffCap*1.6))),u=Math.max(0,o.screeCap);if(m+d+u===0)return n;const v=[],p=[],h=[],S=3,w=6;for(let x=w;x<r-w;x+=S)for(let i=w;i<a-w;i+=S){const b=i>=c&&i<a-c&&x>=c&&x<r-c,k=O(t,e,f,s,i,x);if(k<l+.8)continue;const F=ho(t,e,f,s,i,x,6),N=j0(t,e,f,s,i,x,F.dx,F.dz),V=F.slope,G=O(t,e,f,s,i-F.dx*8,x-F.dz*8)-k;V>.62&&N>6?(b&&v.push({x:i,z:x,drop:N,dx:F.dx,dz:F.dz}),G<4&&N>8&&h.push({x:i-F.dx*2.2,z:x-F.dz*2.2,drop:N,dx:F.dx,dz:F.dz})):b&&N<10&&G>7&&p.push({x:i,z:x,drop:G,dx:F.dx,dz:F.dz})}v.sort((x,i)=>i.drop-x.drop);const M=4,T=new Set,R=(x,i)=>(x/M|0)*1e5+(i/M|0),C=(x,i,b)=>{const k=Math.max(1,Math.ceil(b/M));for(let F=-k;F<=k;F++)for(let N=-k;N<=k;N++)N*N+F*F<=k*k+1&&T.add(R(x+N*M,i+F*M))},y=(x,i)=>T.has(R(x,i));let g=0;const A=(x,i)=>Zt(t,e,f,s,x,i),_=(x,i,b,k,F)=>{let N=0,V=O(t,e,f,s,x,i);for(let G=-.5;G>=-10;G-=.5){const P=O(t,e,f,s,x+b*G,i+k*G);P>V&&(V=P,N=G)}for(let G=N+.5;G<=24;G+=.5){const P=O(t,e,f,s,x+b*G,i+k*G);if(P<=F){const B=V-P>.001?(V-F)/(V-P):0,W=N+(G-N)*Math.max(0,Math.min(1,B));return{x:x+b*W,z:i+k*W}}N=G,V=P}return{x:x+b*24,z:i+k*24}};{const x=(N,V)=>(N/26|0)*1e5+(V/26|0),i=new Set,b=[...v].sort((N,V)=>z(N.x,N.z,601)-z(V.x,V.z,601)),k=Math.max(0,Math.floor(m/6));let F=0;for(const N of b){if(F>=k)break;const V=x(N.x,N.z);if(i.has(V)||z(N.x,N.z,603)<.15)continue;const G=ho(t,e,f,s,N.x,N.z,6),{dx:P,dz:B}=G;let W=O(t,e,f,s,N.x,N.z);for(let U=1;U<=12;U++)W=Math.max(W,O(t,e,f,s,N.x-P*U,N.z-B*U));let H=O(t,e,f,s,N.x,N.z);for(let U=2;U<=30;U+=2){const at=O(t,e,f,s,N.x+P*U,N.z+B*U);if(H-at<.9)break;H=at}const X=W-H;if(X<8)continue;const I=Y0[z(N.x,N.z,607)*3|0],$=Ut[I],Q=1+z(N.x,N.z,609)*3,Y=(X+1.5+Q)/$.h,J=Math.max(.55,Math.min(.95,Y*(.6+z(N.x,N.z,611)*.3))),ft=_(N.x,N.z,P,B,H+X*.4),j=Math.atan2(P,B)+(z(N.x,N.z,613)-.5)*.35,q=Math.sin(j),et=Math.cos(j),it=et,nt=-q,At=(U,at,ut)=>{const mt=$.w*ut*.48,Ct=($.d-2)*ut;return[[U,at],[U+q*Ct,at+et*Ct],[U+q*Ct*.5+it*mt*.6,at+et*Ct*.5+nt*mt*.6],[U+q*Ct*.5-it*mt*.6,at+et*Ct*.5-nt*mt*.6],[U+it*mt,at+nt*mt],[U-it*mt,at-nt*mt],[U-q*2*ut+it*mt,at-et*2*ut+nt*mt],[U-q*2*ut-it*mt,at-et*2*ut-nt*mt]]};let gt=0;for(;gt<=4&&At(ft.x-P*gt,ft.z-B*gt,J).some(([U,at])=>A(U,at));)gt+=.5;if(gt<=4){const U=ft.x-P*gt,at=ft.z-B*gt,ut=Math.min(...At(U,at,J).map(([Vt,Dt])=>O(t,e,f,s,Vt,Dt))),mt=Math.min(ut,H)-1.2,Ct=W+Q;n.push({kind:I,x:U,y:mt,z:at,rot:j,scale:J,sy:Math.max(.8,Math.min(1.9,(Ct-mt)/($.h*J))),pitch:(z(N.x,N.z,617)-.5)*.06}),i.add(V),F+=1,g+=1}else{const U=Math.max(.45,J*.6),at=_(N.x,N.z,P,B,W-X*.35);let ut=0;for(;ut<=6&&At(at.x-P*ut,at.z-B*ut,U).some(([ht,Lt])=>A(ht,Lt));)ut+=.5;if(ut>6)continue;const mt=at.x-P*ut,Ct=at.z-B*ut,Dt=Math.min(...At(mt,Ct,U).map(([ht,Lt])=>O(t,e,f,s,ht,Lt)))-1.5,kt=W+Q*.6;n.push({kind:I,x:mt,y:Dt,z:Ct,rot:j,scale:U,sy:Math.max(.6,Math.min(1.9,(kt-Dt)/($.h*U))),pitch:(z(N.x,N.z,617)-.5)*.06}),i.add(V),F+=1,g+=1}}}for(const x of v){if(g>=m)break;if(y(x.x,x.z))continue;const i=x.x+(z(x.x,x.z,3)-.5)*2.4,b=x.z+(z(x.x,x.z,5)-.5)*2.4,k=ho(t,e,f,s,i,b,6),{dx:F,dz:N}=k;let V=O(t,e,f,s,i,b);for(let $=1;$<=10;$++)V=Math.max(V,O(t,e,f,s,i-F*$,b-N*$));let G=O(t,e,f,s,i,b);for(let $=2;$<=30;$+=2){const Q=O(t,e,f,s,i+F*$,b+N*$);if(G-Q<.9)break;G=Q}if(V-G<5)continue;const P={x:N,z:-F},B=Math.atan2(F,N);let W=G-.9,H=0,X=0,I=0;for(;W<V-1.4&&g<m&&H<6;){const $=H*13,Q=zf[z(i,b,11+$)*zf.length|0],Y=Ut[Q],J=V-.3-W;let ft=4.2+z(i,b,17+$)*4.6;J<ft*1.3&&(ft=J);let j=Math.max(.55,Math.min(1.6,ft/Y.h)),q=Y.h*j;if(W+q>V-.3&&[.5,2,4].map(ht=>_(i,b,F,N,V-.6)).map((ht,Lt)=>({x:ht.x-F*[.5,2,4][Lt],z:ht.z-N*[.5,2,4][Lt]})).some(ht=>A(ht.x,ht.z)||A(ht.x+P.x*Y.w*j*.4,ht.z+P.z*Y.w*j*.4)||A(ht.x-P.x*Y.w*j*.4,ht.z-P.z*Y.w*j*.4))){if(q=V-.3-W,q<2.2)break;j=q/Y.h}const et=_(i,b,F,N,W+q*.5),it=Math.atan((O(t,e,f,s,et.x-F*2,et.z-N*2)-O(t,e,f,s,et.x+F*2,et.z+N*2))/4),nt=io(t,e,f,s,et.x,et.z),At=2.3+z(i,b,19+$)*1.4,gt=Ff[Q];let U=gt.front*j-At;if(H===0){let kt=0;for(;kt<3&&A(nt.x-F*(U-Y.d*j*.5-1),nt.z-N*(U-Y.d*j*.5-1));)U+=.5,kt+=.5}const at=Y.w*j*.35,ut=(kt,ht)=>A(kt,ht)||A(kt+P.x*at,ht+P.z*at)||A(kt-P.x*at,ht-P.z*at);let mt=0;for(;mt<4&&ut(nt.x-F*(U+mt),nt.z-N*(U+mt));)mt+=.5;U+=mt;const Ct=nt.x-F*U,Vt=nt.z-N*U;if(ut(Ct,Vt)){W+=q*.85,H+=1;continue}n.push({kind:Q,x:Ct,y:W,z:Vt,rot:B+(z(i,b,23+$)-.5)*.3,scale:j,pitch:Math.max(-.12,Math.min(.45,(gt.lean*Math.PI/180-it)*.6))+(z(i,b,29+$)-.5)*.06}),g+=1,I+=1,X=Math.max(X,Y.w*j);const Dt=W+q;if(Dt<V-2.2&&g<m&&z(i,b,37+$)>.42){const kt=Ut.cliff_ledge,ht=.8+z(i,b,41+$)*.55,Lt=_(i,b,F,N,Dt),se=io(t,e,f,s,Lt.x,Lt.z),nf=2+z(i,b,43+$)*1.4,Ie=Ff.cliff_ledge.front*ht-nf,Po=(z(i,b,47+$)-.5)*3,ye=se.x-F*Ie+P.x*Po,he=se.z-N*Ie+P.z*Po,$e=kt.d*ht*.5+1;!A(ye,he)&&!A(ye+F*$e,he+N*$e)&&n.push({kind:"cliff_ledge",x:ye,y:Dt-kt.h*ht*.62,z:he,rot:B+(z(i,b,53+$)-.5)*.18,scale:ht,pitch:(z(i,b,59+$)-.5)*.05}),g+=1}W=Dt-q*(.1+z(i,b,31+$)*.08),H+=1}I>0&&C(x.x,x.z,Math.max(3.6,Math.min(7,X*.3)))}h.sort((x,i)=>z(x.x,x.z,97)-z(i.x,i.z,97));let L=0;const E=new Set,D=(x,i)=>(x/7|0)*1e5+(i/7|0),tt=(x,i)=>Zt(t,e,f,s,x,i),st=(x,i,b,k,F,N,V=!1)=>{const G=Df[z(x,i,F+53)*Df.length|0],P=Ut[G];let B=V?.75+z(x,i,F+61)*.3:.5+z(x,i,F+61)*.3;N&&(B*=.72);const W=z(x,i,F+63),H=V?2.5+3.5*W:(N?1.7:2)+(N?2.5:4)*W*W;let X=O(t,e,f,s,x,i);for(let $=1;$<=10;$++)X=Math.max(X,O(t,e,f,s,x-b*$,i-k*$));const I={x:k,z:-b};for(let $=0;$<3;$++){for(let Q=.4;Q<=7;Q+=.4){const Y=x+b*Q,J=i+k*Q,ft=O(t,e,f,s,Y,J),j=H+(X-ft)+3+z(x,i,F+67)*2,q=j/(P.h*B),et=q>1.5?Math.min(V?1.3:1,B*Math.sqrt(q/1.5)):B,it=P.w*et*.42,nt=P.d*et*.3;if([[Y,J],[Y-b*nt,J-k*nt],[Y+I.x*it,J+I.z*it],[Y-I.x*it,J-I.z*it],[Y-b*nt+I.x*it,J-k*nt+I.z*it],[Y-b*nt-I.x*it,J-k*nt-I.z*it]].some(([at,ut])=>tt(at,ut)))continue;const gt=Math.max(1,Math.min(1.6,j/(P.h*et))),U=X+H;if(!(U-P.h*et*gt>ft-1))return n.push({kind:G,x:Y,y:U-P.h*et*gt,z:J,rot:Math.atan2(b,k)+(z(x,i,F+73)-.5)*.45,scale:et,sy:gt,pitch:(z(x,i,F+79)-.5)*.4,far:!0}),!0}B*=.75}return!1};for(const x of h){if(L>=d)break;const i=D(x.x,x.z);if(E.has(i))continue;E.add(i);const b=z(Math.floor(x.x/45),Math.floor(x.z/45),131),k=b<.3?.8:b>.7?.2:.45;if(z(x.x,x.z,101)<k)continue;const F=b>.7,N=F?z(x.x,x.z,109)<.6:z(x.x,x.z,109)<.2;if(!st(x.x,x.z,x.dx,x.dz,0,!1,N))continue;L+=1;const V=z(x.x,x.z,103),G=F?3+(V<.5?1:0):2+(V<.4?1:0);for(let P=0;P<G&&L<d;P++){const B=(P%2===0?1:-1)*(3.2+z(x.x,x.z,107+P)*1.6)*(1+(P>>1)),W=x.x+x.dz*B,H=x.z-x.dx*B;st(W,H,x.dx,x.dz,10+P*7,!F,F&&z(x.x,x.z,113+P)<.4)&&(L+=1)}}let rt=0;const K=u*7,lt=new Map,xt=(x,i)=>Math.floor(x/16)*1e5+Math.floor(i/16);for(const x of n){if(x.far||!x.kind.startsWith("cliff_"))continue;const i=xt(x.x,x.z),b=lt.get(i);b?b.push(x):lt.set(i,[x])}const vt=(x,i,b)=>{for(let k=-1;k<=1;k++)for(let F=-1;F<=1;F++){const N=lt.get(xt(x+k*16,i+F*16));if(N)for(const V of N){const G=Ut[V.kind],P=x-V.x,B=i-V.z,W=Math.cos(V.rot),H=Math.sin(V.rot),X=P*W-B*H,I=P*H+B*W;if(Math.abs(X)<G.w*V.scale*.45&&Math.abs(I)<G.d*V.scale*.45&&b>V.y&&b<V.y+G.h*V.scale*(V.sy??1))return!0}}return!1},St=(x,i,b,k,F,N=1/0,V=0,G=0)=>{if(rt>=K)return!1;if(b&&(V||G)){let q=0;const et=O(t,e,f,s,x,i)+.8;for(;q<=4&&vt(x+V*q,i+G*q,et);)q+=.5;if(q>4)return!1;x+=V*q,i+=G*q}const P=b?Qt:co,B=P[z(x,i,k+1)*P.length|0],W=Ut[B],H=Math.max(W.w,W.d),X=Zt(t,e,f,s,x,i),I=b?1.8+z(x,i,k+3)*2.7:.4+z(x,i,k+3)*(X?.4:.8),$=I/H;if(b&&X)return!1;const Q=io(t,e,f,s,x,i),Y=(Q.x-x)*Q.dir.dx+(Q.z-i)*Q.dir.dz<0,J=o.surfaceY&&!X?Math.max(Q.y,o.surfaceY(x,i)):Q.y,ft=Math.min(J,N+(b?Math.min(I*.8,1.6):0)),j=X?.7+z(x,i,k+5)*.1:b?.22+z(x,i,k+5)*.15:.3+z(x,i,k+5)*.2;return b&&ft+(1-j)*W.h*$<J+.4?!1:(n.push({kind:B,x:Y?x:Q.x,y:ft-j*W.h*$,z:Y?i:Q.z,rot:z(x,i,k+7)*Math.PI*2,scale:$,pitch:Math.min(.3,Math.atan(F*1.2)*.4)*(z(x,i,k+9)<.5?1:-1)}),rt+=1,!0)};p.sort((x,i)=>i.drop-x.drop);const Tt=new Set,_t=(x,i)=>(x/2.4|0)*1e5+(i/2.4|0);let zt=0;for(const x of p){if(zt>=u*2||rt>=K)break;const i=_t(x.x,x.z);if(Tt.has(i))continue;Tt.add(i),zt+=1;let b=0;for(;b<=8&&Zt(t,e,f,s,x.x-x.dx*b,x.z-x.dz*b);)b+=.75;const k=x.x-x.dx*Math.min(b,8),F=x.z-x.dz*Math.min(b,8),N=O(t,e,f,s,x.x+x.dx*1.6,x.z+x.dz*1.6)+1.2,V=6+(z(x.x,x.z,71)*7|0);for(let G=0;G<V;G++){const P=(z(x.x,x.z,73+G)-.5)*2.2,B=.6+z(x.x,x.z,75+G)*4.4,W=Math.cos(P)*B,H=Math.sin(P)*B*1.6,X=G<3||z(x.x,x.z,77+G)<.35,I=X?W*.45:W+.8;St(k+x.dx*I+x.dz*H,F+x.dz*I-x.dx*H,X,80+G*11,.3,N,x.dx,x.dz)}}let Kt=0;for(const x of v){if(rt>=K||Kt>=Math.max(4,u>>2))break;if(z(x.x,x.z,151)<.55)continue;const i=O(t,e,f,s,x.x,x.z),b=O(t,e,f,s,x.x+x.dz*7,x.z-x.dx*7),k=O(t,e,f,s,x.x-x.dz*7,x.z+x.dx*7);if(b>i+1.2&&k>i+1.2){Kt+=1;for(let F=0;F<=22;F+=1.6+z(x.x,x.z,157+F)*1.4){const N=(z(x.x,x.z,161+F)-.5)*2.4,V=x.x+x.dx*F+x.dz*N,G=x.z+x.dz*F-x.dx*N;St(V,G,z(x.x,x.z,163+F)<.45,170+F*3,.7)}}}const Ae=Math.max(0,Math.min(40,u)),Oe=[];let fe=0;const de=(x,i)=>{const b=io(t,e,f,s,x,i),k=o.surfaceY;return k&&!Zt(t,e,f,s,x,i)?Math.max(b.y,k(x,i)):b.y};for(const x of p){if(fe>=Ae)break;if(x.drop<5)continue;let i=0;for(;i<=8&&Zt(t,e,f,s,x.x-x.dx*i,x.z-x.dz*i);)i+=.75;let b=x.x-x.dx*Math.min(i,8),k=x.z-x.dz*Math.min(i,8);for(let B=0;B<5&&vt(b,k,O(t,e,f,s,b,k)+1);B+=.5)b+=x.dx*.5,k+=x.dz*.5;const F=O(t,e,f,s,x.x+x.dx*1.6,x.z+x.dz*1.6)+1.2;if(vt(b,k,O(t,e,f,s,b,k)+1))continue;let N=!1;for(const B of Oe){const W=b-B.x,H=k-B.z;if(W*W+H*H<256){N=!0;break}}if(N)continue;fe+=1,Oe.push({x:b,z:k});const V=2.5+z(b,k,901)*2;{const B=Qt[z(b,k,902)*Qt.length|0],W=Ut[B];if(!Zt(t,e,f,s,b,k)){const H=3+z(b,k,903)*1.5,X=Math.max(W.w,W.d),I=de(b,k);if(I<=F+1.5){const $=Math.min(I,F);n.push({kind:B,x:b,y:$-.3*W.h*(H/X),z:k,rot:z(b,k,904)*Math.PI*2,scale:H/X,pitch:(z(b,k,905)-.5)*.5})}}}const G=4+(z(b,k,906)*3|0);for(let B=0;B<G;B++){const W=910+B*7,H=((B+.5)/G-.5)*2.4,X=Math.max(-1.3,Math.min(1.3,H+(z(b,k,W+4)-.5)*.6)),I=(.45+z(b,k,W+2)*.25)*V,$=Math.cos(X)*I,Q=Math.sin(X)*I,Y=b+x.dx*$+x.dz*Q,J=k+x.dz*$-x.dx*Q;if(Zt(t,e,f,s,Y,J))continue;const ft=Qt[z(Y,J,W+1)*Qt.length|0],j=Ut[ft],q=1+z(Y,J,W+3)*1.2,et=Math.max(j.w,j.d),it=de(Y,J);if(it>F+1.5)continue;const nt=Math.min(it,F);n.push({kind:ft,x:Y,y:nt+(1-I/V)*.9-.35*j.h*(q/et),z:J,rot:z(Y,J,W+7)*Math.PI*2,scale:q/et,pitch:(z(Y,J,W+9)-.5)*.5})}const P=8+(z(b,k,907)*5|0);for(let B=0;B<P;B++){const W=960+B*7,H=((B+.5)/P-.5)*2.4,X=Math.max(-1.3,Math.min(1.3,H+(z(b,k,W+4)-.5)*.6)),I=(.6+z(b,k,W+2)*.7)*V,$=Math.cos(X)*I,Q=Math.sin(X)*I,Y=b+x.dx*$+x.dz*Q,J=k+x.dz*$-x.dx*Q,ft=co[z(Y,J,W+1)*co.length|0],j=Ut[ft],q=.3+z(Y,J,W+3)*.5,et=Math.max(j.w,j.d),it=Zt(t,e,f,s,Y,J),nt=de(Y,J);if(nt>F+1.5)continue;const At=Math.min(nt,F);n.push({kind:ft,x:Y,y:At-(it?.7:.45)*j.h*(q/et),z:J,rot:z(Y,J,W+7)*Math.PI*2,scale:q/et,pitch:(z(Y,J,W+9)-.5)*.5})}}const ue=new Set,Ft=Nf();if(Ft&&u>0&&Ft){const x=u>=200,i=u*(x?45:15),b=[];for(let G=1;G<Ft.rows;G++)for(let P=1;P<Ft.cols;P++){const B=P*Ft.spacing,W=G*Ft.spacing;if(B<c||B>a-c||W<c||W>r-c)continue;const H=O(t,e,f,s,B,W);if(H<l+.8)continue;const X=G*(Ft.cols+1)+P;if(Math.abs(Ft.positions[X*3+1]-H)>.5)continue;const I=s*2,$=O(t,e,f,s,B+s,W)-O(t,e,f,s,B-s,W),Q=O(t,e,f,s,B,W+s)-O(t,e,f,s,B,W-s),Y=Math.hypot($,Q)/I,J=1/Math.sqrt(1+Y*Y);if(J<.78||J>.97)continue;let ft=-1/0,j=0,q=0,et=0;for(let it=0;it<8;it++){const nt=it*Math.PI/4,At=Math.cos(nt),gt=Math.sin(nt);for(const U of[3,6]){const at=O(t,e,f,s,B+At*U,W+gt*U)-H;at>ft&&(ft=at,q=At,et=gt);const ut=-at;ut>j&&(j=ut)}}ft<3||j>3.5||(b.push({i:X,x0:B,z0:W,gx:Ft.positions[X*3],gz:Ft.positions[X*3+2],ux:q,uz:et}),ue.add(X))}const k=x?5.5:1.5,F=Math.min(1,i/Math.max(1,b.length*k));let N=0;const V=x?["rubble_boulder","rubble_moss_a","rubble_moss_b","rubble_moss_c","rubble_slab_a","rubble_flat_a","rubble_boulder"]:["rubble_boulder","rubble_slab_a","rubble_flat_a"];t:for(const G of b){if(z(G.x0,G.z0,1421)>=F)continue;const P=x?4+Math.floor(z(G.x0,G.z0,1422)*4):1+Math.floor(z(G.x0,G.z0,1422)*2),B=-G.uz,W=G.ux;for(let H=0;H<P;H++){const X=1430+H*7,I=z(G.x0,G.z0,X)*1.8,$=(z(G.x0,G.z0,X+1)-.5)*2.2,Q=G.gx+G.ux*I+B*$,Y=G.gz+G.uz*I+W*$,J=z(G.x0,G.z0,X+2),ft=x?.7+1.7*J*J:.8+1*J,j=V[Math.floor(z(G.x0,G.z0,X+3)*V.length)],q=Ut[j],et=ft/Math.max(q.w,q.d),it=O(t,e,f,s,Q,Y),nt=.3+.2*z(G.x0,G.z0,X+4),At=it-nt*q.h*et,gt=z(G.x0,G.z0,X+5)*Math.PI*2,U=(z(G.x0,G.z0,X+6)-.5)*.6;if(n.push({kind:j,x:Q,y:At,z:Y,rot:gt,scale:et,pitch:U}),N++,N>=i)break t}}}const Ht=Nf();if(Ht&&u>0){const x=u*240;let i=0;const b=Ht.cols+1,k=Ht.positions,F=Ht.normals,N=[0,Math.PI/4,Math.PI/2,3*Math.PI/4,Math.PI,5*Math.PI/4,3*Math.PI/2,7*Math.PI/4],V=[6,12],G=[];for(let W=1;W<Ht.rows;W++)for(let H=1;H<Ht.cols;H++){const X=H*Ht.spacing,I=W*Ht.spacing;if(X<c||X>a-c||I<c||I>r-c||O(t,e,f,s,X,I)<l+.8)continue;const $=W*b+H;if(ue.has($))continue;const Q=k[$*3],Y=k[$*3+1],J=k[$*3+2],ft=F[$*3],j=F[$*3+1],q=F[$*3+2],et=Math.sqrt(ft*ft+j*j+q*q),it=ft/et,nt=j/et,At=q/et;if(nt<.25||nt>.985)continue;const gt=O(t,e,f,s,X,I);let U=0;for(const mt of N)for(const Ct of V){const Vt=X+Math.cos(mt)*Ct,Dt=I+Math.sin(mt)*Ct,ht=O(t,e,f,s,Vt,Dt)-gt;ht>U&&(U=ht)}const at=nt<=.93?4:6;if(U<at)continue;const ut=Math.min(1,(U-4)/10);z(X,I,1301)>=.7+.3*ut||G.push({x0:X,z0:I,px:Q,py:Y,pz:J,Nx:it,Ny:nt,Nz:At})}const P=G.length*6.5,B=Math.min(1,x/Math.max(1,P));t:for(const{x0:W,z0:H,px:X,py:I,pz:$,Nx:Q,Ny:Y,Nz:J}of G){if(z(W,H,1321)>=B)continue;let ft=Y,j=-Q,q=0,et=Math.sqrt(ft*ft+j*j+q*q);et<1e-6?(ft=1,j=0,q=0):(ft/=et,j/=et,q/=et);const it=Y*q-J*j,nt=J*ft-Q*q,At=Q*j-Y*ft,gt=4+Math.floor(z(W,H,1302)*6);for(let U=0;U<gt;U++){const at=(z(W,H,1310+U*7)-.5)*2*1.1,ut=(z(W,H,1311+U*7)-.5)*2*1.1,mt=X+ft*at+it*ut,Ct=Math.min(I,I+j*at+nt*ut)-.1,Vt=$+q*at+At*ut,Dt=["rubble_boulder","rubble_slab_a","rubble_flat_a","rubble_slab_b","rubble_flat_b","rubble_slab_a","rubble_boulder"];let kt=Ct,ht=0;if(o.surfaceY){const to=o.surfaceY(mt,Vt);to>Ct&&to<=Ct+1.5&&(ht=to-Ct,kt=to)}const Lt=z(W,H,1312+U*7);let se=.3+2.8*Lt*Lt;const Ie=ht>.6?2:1.2;se>Ie&&Zt(t,e,f,s,mt,Vt)&&(se=Ie);const ye=(se>1.2?Qt:co)===Qt?Qt[Math.floor(z(W,H,1313+U*7)*Qt.length)]:Dt[Math.floor(z(W,H,1313+U*7)*Dt.length)],he=Ut[ye],$e=se/Math.max(he.w,he.d),rf=z(W,H,1314+U*7),Fs=se>1.2?.35+rf*.15:.2+rf*.15,zs=kt-Fs*he.h*$e,Ds=z(W,H,1315+U*7)*2*Math.PI,Ps=Math.min(Math.acos(Y)*.6,.6),Gs=z(W,H,1316+U*7)<.5?1:-1,Ws=Ps*Gs+(z(W,H,1317+U*7)-.5)*.4;if(n.push({kind:ye,x:mt,y:zs,z:Vt,rot:Ds,scale:$e,pitch:Ws}),i++,i>=x)break t}}}return n}function Ts(o){let t=o>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function wt(o,t,e,f,s){const l=Math.max(0,Math.min(t-1,f|0)),a=Math.max(0,Math.min(e-1,s|0));return o[a*t+l]??0}function Re(o,t,e,f,s,l,a=4){const r=Math.max(f,a),n=O(o,t,e,f,s+r,l)-O(o,t,e,f,s-r,l),c=O(o,t,e,f,s,l+r)-O(o,t,e,f,s,l-r),m=Math.hypot(n,c)/(2*r);return Math.max(0,Math.min(1,m/1.2))}function q0(o,t,e,f,s,l,a=4){const r=Math.max(f,a),n=O(o,t,e,f,s+r,l)-O(o,t,e,f,s-r,l),c=O(o,t,e,f,s,l+r)-O(o,t,e,f,s,l-r),m=Math.max(0,Math.min(1,Math.hypot(n,c)/(2*r)/1.2)),d=Math.hypot(n,c)||1;return{dx:-n/d,dz:-c/d,slope:m}}const Pf=.8391;function Q0(o,t,e,f,s,l){for(const r of[2,4,8]){const n=Math.max(f,r),c=O(o,t,e,f,s+n,l)-O(o,t,e,f,s-n,l),m=O(o,t,e,f,s,l+n)-O(o,t,e,f,s,l-n);if(Math.hypot(c,m)/(2*n)>=Pf)return!0}const a=O(o,t,e,f,s,l);for(const r of[3,6])for(let n=0;n<8;n++){const c=n/8*Math.PI*2,m=O(o,t,e,f,s+Math.cos(c)*r,l+Math.sin(c)*r);if(Math.abs(m-a)/r>=Pf)return!0}return!1}function Ne(o,t,e,f,s,l,a=8){const r=O(o,t,e,f,s,l),n=(O(o,t,e,f,s+a,l)+O(o,t,e,f,s-a,l)+O(o,t,e,f,s,l+a)+O(o,t,e,f,s,l-a))*.25;return Math.max(0,Math.min(1,(n-r)/5))}function ff(o,t,e){return wt(o.road,o.width,o.height,t,e)>46}function Rs(o,t,e,f=7){if(ff(o,t,e))return 0;const s=wt(o.road,o.width,o.height,t+f,e),l=wt(o.road,o.width,o.height,t-f,e),a=wt(o.road,o.width,o.height,t,e+f),r=wt(o.road,o.width,o.height,t,e-f);return Math.max(s,l,a,r)/255}function Ze(o,t,e,f,s,l,a=4,r=e){const n=Ts(l),c=e/Math.SQRT2,m=Math.ceil(o/c),d=Math.ceil(t/c),u=new Int32Array(m*d).fill(-1),v=[],p=[],h=(g,A)=>Math.min(m-1,Math.max(0,g/c|0))+Math.min(d-1,Math.max(0,A/c|0))*m,S=(g,A)=>{const _=g/c|0,L=A/c|0;for(let E=L-2;E<=L+2;E++)if(!(E<0||E>=d))for(let D=_-2;D<=_+2;D++){if(D<0||D>=m)continue;const tt=u[E*m+D];if(tt<0)continue;const st=v[tt].x-g,rt=v[tt].z-A;if(st*st+rt*rt<e*e)return!1}return!0},w=(g,A)=>{if(g<a||A<a||g>o-a||A>t-a)return!1;const _=f(g,A);if(!(_>.02)||n()>_||!S(g,A))return!1;const L=v.length;return v.push({x:g,z:A}),u[h(g,A)]=L,p.push(L),!0},M=Math.max(1,o-a*2),T=Math.max(1,t-a*2),R=e,C=[];for(let g=a+R*.5;g<t-a;g+=R)for(let A=a+R*.5;A<o-a;A+=R)C.push({x:A,z:g});for(let g=C.length-1;g>0;g--){const A=n()*(g+1)|0,_=C[g];C[g]=C[A],C[A]=_}for(const g of C){if(v.length>=s)break;w(g.x+(n()-.5)*R*.6,g.z+(n()-.5)*R*.6)}if(v.length===0)for(let g=0;g<800&&v.length===0;g++)w(a+n()*M,a+n()*T);if(v.length===0)return v;const y=12;for(;p.length&&v.length<s;){const g=n()*p.length|0,A=v[p[g]];let _=!1;for(let L=0;L<y;L++){const E=n()*Math.PI*2,D=e*(1+n());if(w(A.x+Math.cos(E)*D,A.z+Math.sin(E)*D)&&(_=!0,v.length>=s))break}_||(p[g]=p[p.length-1],p.pop())}return v}function Gf(o,t,e,f=12){let s=0,l=0,a=0;for(let r=-f;r<=f;r+=4)for(let n=-f;n<=f;n+=4){if(n*n+r*r>f*f)continue;const c=wt(o.canopy,o.width,o.height,t+n,e+r)/10;c>s&&(s=c),c>=.6&&l++,a++}return{max:s,cover:a?l/a:0}}function Wf(o,t,e){if(o>.42)return e()<.72?"pine":"sage";if(t>.45)return e()<.55?"oak":"aspen";const f=e();return f<.45?"sage":f<.72?"oak":e()<.5?"aspen":"pine"}const _s=36,J0=.62;function Jt(o,t,e){let f=Math.imul(o*1e3|0,374761393)+Math.imul(t*1e3|0,668265263)+e*1442695041;return f=Math.imul(f^f>>>13,1274126177),((f^f>>>16)>>>0)/4294967296}function sf(o,t,e,f,s,l,a,r){if(O(t,e,f,s,a,r)<l+.4||ff(o,a,r)||Q0(t,e,f,s,a,r))return 0;const c=wt(o.grass,o.width,o.height,a,r)/255,m=wt(o.canopy,o.width,o.height,a,r)/10,d=Ne(t,e,f,s,a,r),u=Rs(o,a,r),v=wt(o.rock,o.width,o.height,a,r)/255,p=wt(o.scree,o.width,o.height,a,r)/255;let h=c*.95+d*.45+u*.45;return c>=.2&&(h=Math.max(h,.7+c*.25)),m>=.4&&m<2.4?h=Math.max(h,.75):m>=2.4&&(h=Math.max(h,.4)),h*=1-v*.7,h*=1-p*.85,Math.max(0,Math.min(1,h))}function tn(o,t){const e=t.radius??_s,f=t.step??J0,{maps:s,heights:l,gw:a,gh:r,cell:n,waterY:c,camX:m,camZ:d}=t,u=Math.floor((m-e)/f)*f,v=Math.floor((d-e)/f)*f,p=m+e,h=d+e;for(let S=u;S<=p;S+=f)for(let w=v;w<=h;w+=f){const M=S+(Jt(S,w,3)-.5)*f*.85,T=w+(Jt(S,w,7)-.5)*f*.85,R=Math.hypot(M-m,T-d);if(R>e)continue;let C=sf(s,l,a,r,n,c,M,T);if(C<=0||(C=Math.max(0,Math.min(1,C+(Jt(M,T,13)-.5)*.35)),C<.05))continue;const y=Math.min(1,(1-R/e*(R/e)*.7)*(.4+C*.7));if(Jt(M,T,19)>y)continue;const g=Jt(M,T,11)<.55?"grass0":"grass1",_=(Jt(M,T,23)<.78?.38+Jt(M,T,29)*.32:.7+Jt(M,T,31)*.22)*y,L=O(l,a,r,n,M,T);o.push({kind:g,x:M,y:L,z:T,rot:Jt(M,T,41)*Math.PI*2,scale:_})}}function en(o){const{maps:t,heights:e,gw:f,gh:s,cell:l,waterY:a,caps:r}=o,n=Ts(o.seed??7),c=t.width,m=t.height,d=[],u=(g,A,_,L)=>!(_<a+.4||ff(t,g,A)),v=(g,A)=>{const _=O(e,f,s,l,g,A);if(!u(g,A,_))return 0;const L=Re(e,f,s,l,g,A);if(L>.72)return 0;const E=wt(t.canopy,t.width,t.height,g,A)/10,D=Gf(t,g,A,12),tt=Ne(e,f,s,l,g,A);let st=0;return E>=.6?st=Math.max(.7,Math.min(1,.5+E*.25)):(D.cover>=.2||D.cover>=.1&&D.max>=1.2)&&(st=.8),st*=1-L*.55,st*=.85+.25*tt,st},p=(g,A)=>{const _=O(e,f,s,l,g,A);if(!u(g,A,_))return 0;const L=Re(e,f,s,l,g,A);if(L>.65)return 0;const E=wt(t.canopy,t.width,t.height,g,A)/10,D=Gf(t,g,A,12),tt=wt(t.scrub,t.width,t.height,g,A)/255,st=Ne(e,f,s,l,g,A),rt=Rs(t,g,A);let K=.04*wt(t.grass,t.width,t.height,g,A)/255;return E>=.4&&E<2.2?K=Math.max(K,.85+E*.15):E>=2.2?K=Math.max(K,.88):(D.cover>=.12||D.max>=1)&&(K=Math.max(K,.78)),K+=st*.55,K+=rt*.7,K+=tt*.25,K*=1-L*.45,Math.max(0,Math.min(1,K))},h=(g,A)=>sf(t,e,f,s,l,a,g,A),S=(g,A)=>{const _=O(e,f,s,l,g,A);if(!u(g,A,_))return 0;const L=Re(e,f,s,l,g,A),E=wt(t.rock,t.width,t.height,g,A)/255,D=wt(t.scree,t.width,t.height,g,A)/255;return Math.max(0,Math.min(1,E*.85+D*.6+Math.max(0,L-.28)*.8))},w=(g,A,_,L)=>{const E=O(e,f,s,l,A,_);d.push({kind:g,x:A,y:E,z:_,rot:n()*Math.PI*2,scale:L})};for(const g of Ze(c,m,3.8,v,r.trees,(o.seed??7)+11)){const A=Re(e,f,s,l,g.x,g.z),_=Ne(e,f,s,l,g.x,g.z),L=Wf(A,_,n),E=wt(t.canopy,t.width,t.height,g.x,g.z)/10,tt=(L==="sage"?.9:.95)*(.78+n()*.44)*(.94+Math.min(1.4,E)*.05);w(L,g.x,g.z,tt)}const M=Math.max(0,r.trees-d.length),T=Math.min(Math.floor(r.trees*.12),M),R=(g,A)=>{const _=O(e,f,s,l,g,A);if(!u(g,A,_)||Re(e,f,s,l,g,A)>.45||wt(t.canopy,t.width,t.height,g,A)/10>=.5)return 0;const D=wt(t.grass,t.width,t.height,g,A)/255;return D<.15?0:Math.min(1,D*.12+Ne(e,f,s,l,g,A)*.04)};for(const g of Ze(c,m,18,R,T,(o.seed??7)+23)){const A=Re(e,f,s,l,g.x,g.z),_=Ne(e,f,s,l,g.x,g.z),L=Wf(A,_,n),E=L==="sage"?.82:.86;w(L,g.x,g.z,E*(.72+n()*.34))}for(const g of Ze(c,m,2.2,p,r.shrubs,(o.seed??7)+29)){const A=n()<.5?"bush0":"bush1";w(A,g.x,g.z,1.05+n()*.55)}for(const g of Ze(c,m,1.6,h,r.grass,(o.seed??7)+47)){const A=n()<.55?"grass0":"grass1";w(A,g.x,g.z,.7+n()*.45)}const C={cliff0:{h:8.5,d:7.5},cliff1:{h:8.5,d:9.3},cliff2:{h:8.5,d:8.2},rock0:{h:1,d:1.8},rock1:{h:1.36,d:.74},rock2:{h:3.06,d:1.47},scree0:{h:.15,d:.21}},y=(g,A)=>{const _=q0(e,f,s,l,g,A,6),L=_.slope*1.2,E=1/Math.hypot(1,L),D=O(e,f,s,l,g,A);let tt=0,st=0,rt=0;for(let St=0;St<8;St++){const Tt=St/8*Math.PI*2,_t=O(e,f,s,l,g+Math.cos(Tt)*8,A+Math.sin(Tt)*8);st+=_t,rt+=1,D-_t>tt&&(tt=D-_t)}const K=D>=st/rt+.4&&tt>3?.95:0,lt=Math.max(zo(E),K),xt=Fo(g,A)*lt*Be,vt=Math.sqrt(Math.max(0,1-E*E));return{x:g+-_.dx*vt*xt,y:D+E*xt,z:A+-_.dz*vt*xt,dir:_,ny:E}};for(const g of Ze(c,m,5.5,S,r.rocks,(o.seed??7)+61)){const A=n(),_=A<.34?"rock0":A<.67?"rock1":"rock2",L=_==="rock2"?.55+n()*.7:_==="rock1"?1.2+n()*1.4:1+n()*1.3,E=.22+n()*.18,D=y(g.x,g.z),tt=C[_].h;d.push({kind:_,x:D.x,y:D.y-E*tt*L,z:D.z,rot:n()*Math.PI*2,scale:L,pitch:Math.min(.28,Math.atan(D.dir.slope*1.2)*.5)})}return d.push(...K0({heights:e,gw:f,gh:s,cell:l,waterY:a,worldW:c,worldH:m,cliffCap:r.cliffs??0,screeCap:r.scree??0,seed:o.seed??7,surfaceY:o.surfaceY})),d}const on=["grass_tall","grass_med","grass_mixed","grass_short"],fn=["fern_spread","fern_crown"];function Pt(o,t,e){let f=Math.imul(o*1e3|0,374761393)+Math.imul(t*1e3|0,668265263)+e*1442695041;return f=Math.imul(f^f>>>13,1274126177),((f^f>>>16)>>>0)/4294967296}const qt=(o,t,e)=>O(o.heights,o.gw,o.gh,o.cell,t,e);function sn(o,t){const{maps:e,heights:f,gw:s,gh:l,cell:a,waterY:r,camX:n,camZ:c,radius:m,step:d}=t;if(m<=0)return;const u=Math.floor((n-m)/d)*d,v=Math.floor((c-m)/d)*d;for(let p=u;p<=n+m;p+=d)for(let h=v;h<=c+m;h+=d){const S=p+(Pt(p,h,301)-.5)*d*.9,w=h+(Pt(p,h,307)-.5)*d*.9,M=Math.hypot(S-n,w-c)/m;if(M>1)continue;let T=sf(e,f,s,l,a,r,S,w);if(T=Math.min(1,T+(Pt(S,w,311)-.5)*.3),T<.12||Pt(S,w,313)>T*1.15)continue;const R=M<.6?1:Math.max(0,1-(M-.6)/.4);if(R<.2)continue;const C=Pt(S,w,317),y=C<.38?"grass_tall":C<.68?"grass_med":C<.92?"grass_mixed":"grass_short",A=(y==="grass_tall"?1.05:y==="grass_short"?1.3:1)*(1+Pt(S,w,319)*.55)*(.55+.45*R);o.push({kind:y,x:S,y:qt(t,S,w)-.04,z:w,rot:Pt(S,w,323)*Math.PI*2,scale:A})}}function an(o){const{waterY:t,worldW:e,worldH:f,cap:s}=o,l=[];if(s<=0)return l;const a=2.2,r=40,n=[0,1,2,3,4,5,6,7].map(d=>[Math.cos(d*Math.PI/4),Math.sin(d*Math.PI/4)]),c=(d,u,v,p,h,S=0,w=-.05)=>{l.push({kind:d,x:u,y:qt(o,u,v)+w,z:v,rot:h,scale:p,pitch:S||void 0})};for(let d=r;d<f-r;d+=a)for(let u=r;u<e-r;u+=a){const v=u+(Pt(u,d,401)-.5)*a,p=d+(Pt(u,d,403)-.5)*a,h=qt(o,v,p);if(h<t+.6)continue;const S=(qt(o,v+1.5,p)-qt(o,v-1.5,p))/3,w=(qt(o,v,p+1.5)-qt(o,v,p-1.5))/3,M=Math.hypot(S,w);let T=0,R=0,C=0;for(let _=0;_<8;_++){const[L,E]=n[_],D=qt(o,v+L*8,p+E*8)-h;D>T&&(T=D),-D>R&&(R=-D,C=_)}const y=Pt(v,p,409),g=Pt(v,p,411)*Math.PI*2,A=.85+Pt(v,p,413)*.6;if(M<.55&&T>5&&R<3)y<.75&&c(y<.3?"fern_spread":y<.45?"fern_crown":"grass_tall",v,p,A*(y<.45?1.1:1.2),g),y<.5&&c("grass_mixed",v+.9,p-.6,A,g+1.7);else if(M<.6&&T>3.5&&R>3.5)y<.8&&c(y<.35?"fern_crown":y<.6?"grass_mixed":"grass_tall",v,p,A,g);else if(M<.5&&T<1.5&&R>6){if(y<.85){const[_,L]=n[C],E=Math.atan2(_,L);c(y<.6?"grass_tall":"grass_med",v,p,A*1.15,E,.55+Pt(v,p,417)*.35)}}else if(M>.62&&R>4){const _=-w/(M||1),L=S/(M||1);Math.min(qt(o,v+_*6,p+L*6),qt(o,v-_*6,p-L*6))-h>1.2&&y<.6&&c(y<.3?"fern_spread":"grass_mixed",v,p,A*.9,g,0,-.15)}}if(l.length<=s)return l;const m=s/l.length;return l.filter(d=>Pt(d.x,d.z,421)<m)}async function Bo(o){const t=await fetch(o);if(!t.ok)throw new Error(`${o} ${t.status}`);return L0(new Uint8Array(await t.arrayBuffer()))}function pe(o,t,e,f,s){const l=new Uint8Array(t*e);for(let a=0;a<l.length;a++)l[a]=o[a*s+f];return l}async function Xe(o,t,e="veg"){const f=Yt(`${e}/${t}`),s=f.lastIndexOf("/")+1,l=await pa.ImportMeshAsync("",f.slice(0,s),f.slice(s),o),a={};for(const r of l.meshes){if(!(r instanceof ee)||!r.getTotalVertices())continue;const n=r.name;n==="Leaves"||n.startsWith("Leaves")?a.leaves=r:n==="Bark"||n.startsWith("Bark")?a.bark=r:(n==="Rock"||n.startsWith("Rock"))&&(a.rock=r)}for(const r of l.meshes)r instanceof ee&&r!==a.bark&&r!==a.leaves&&r!==a.rock&&r.setEnabled(!1);return a}function xe(o,t=!0,e=!0){return o.setParent(null),o.position.setAll(0),o.rotation.setAll(0),o.scaling.setAll(1),o.rotationQuaternion=null,o.isPickable=!1,o.alwaysSelectAsActiveMesh=!0,o.useVertexColors=e,o.receiveShadows=t,o.thinInstanceEnablePicking=!1,o}function po(o,t,e){let f=Math.imul(o*1e3|0,374761393)+Math.imul(t*1e3|0,668265263)+e*1442695041;return f=Math.imul(f^f>>>13,1274126177),((f^f>>>16)>>>0)/4294967296}function nn(o,t,e){const f=po(t,e,11),s=po(t,e,29),l=.88+f*.14;if(o==="pine")return[l*(.94+s*.06),l*(.95+f*.04),l*(.92+s*.05),1];if(o==="aspen")return[l*(1+s*.06),l*(1.01+f*.04),l*(.94+f*.05),1];if(o==="grass0"||o==="grass1"||ne.includes(o)){const a=.8+f*.22;return po(t,e,41)<.2?[a*1.1,a*.98,a*.68,1]:[a*(.97+s*.05),a*(.98+f*.03),a*(.86+f*.06),1]}return o.startsWith("rock")||o.startsWith("cliff")||o.startsWith("scree")?[1,1,1,1]:[l*(1+s*.05),l*(.97+(f-.5)*.06),l*(.88+f*.05),1]}function rn(o,t,e){const f=new yt,s=new xo,l=new yt,a=new Ke;t.length=0,e.length=0;for(const r of o){f.set(r.scale,r.scale*(r.sy??1),r.scale),xo.RotationYawPitchRollToRef(r.rot,r.pitch??0,0,s),l.set(r.x,r.y,r.z),Ke.ComposeToRef(f,s,l,a);const n=t.length;t.length=n+16,a.copyToArray(t,n),e.push(...nn(r.kind,r.x,r.z))}}function Oo(o,t,e){o&&(t.length?(o.setEnabled(!0),o.thinInstanceSetBuffer("matrix",new Float32Array(t),16,!0),e&&e.length&&o.thinInstanceSetBuffer("color",new Float32Array(e),4,!0),o.thinInstanceRefreshBoundingInfo(!0)):o.setEnabled(!1))}const Ye=["oak","pine","sage","aspen"],mo=["bush0","bush1"],_e=["grass0","grass1"],ne=[...on,...fn],ln=70,cn=22,ks=["rock0","rock1","rock2"],Se=["cliff_bed_a","cliff_bed_b","cliff_ledge","cliff_stack","cliff_jointed","cliff_rugged"],af=["rubble_angular","rubble_slab_a","rubble_slab_b","rubble_boulder","rubble_flat_a","rubble_flat_b","rubble_moss_a","rubble_moss_b","rubble_moss_c","rubble_round"],Ns=[],mn=120,De=["buttress_a","buttress_b","buttress_c"],dn=300,Ef=85,un=.7,hn=170,pn="terrain/kit",xn=720,ke=[...ks,...Se,...af,...Ns,...De],Io=o=>Se.includes(o)||af.includes(o)||De.includes(o);async function vn(o,t,e,f,s,l,a="twin-ridges",r){kf(),df.Configuration.decoder.url.startsWith(Yt(""))||(df.Configuration={decoder:{url:Yt("meshopt_decoder.js")}});const n=Xa(Qe()),c=Yt(uo(a,"vegetation_canopy_height_dm.png")),m=Yt(uo(a,"splat_0_grass_scrub_rock_scree.png")),d=Yt(uo(a,"splat_1_gravel_road_mud_sand.png")),[u,v,p]=await Promise.all([Bo(c).catch(i=>{throw console.error(`Terrain canopy missing: ${c}`,i),i}),Bo(m),Bo(d)]),h={width:u.w,height:u.h,canopy:pe(u.data,u.w,u.h,0,u.data.length===u.w*u.h?1:4),grass:pe(v.data,v.w,v.h,0,4),scrub:pe(v.data,v.w,v.h,1,4),rock:pe(v.data,v.w,v.h,2,4),scree:pe(v.data,v.w,v.h,3,4),road:pe(p.data,p.w,p.h,1,4)};u.data.length===u.w*u.h*4&&(h.canopy=pe(u.data,u.w,u.h,0,4));const S=en({surfaceY:(i,b)=>z0(t,e,f,s,i,b),maps:h,heights:t,gw:e,gh:f,cell:s,waterY:l,caps:{trees:n.trees,shrubs:n.shrubs,grass:n.grass,rocks:n.rocks,cliffs:n.cliffs,scree:n.scree}});S.push(...an({heights:t,gw:e,gh:f,cell:s,waterY:l,worldW:e*s,worldH:f*s,cap:Math.round(n.grass*.4)}));const w={oak:Te(o,"bark_oak.png",new Z(.96,.93,.86),.035),pine:Te(o,"bark_pine.png",new Z(.96,.9,.84),.03),sage:Te(o,"bark_sage.png",new Z(.94,.9,.82),.03),aspen:Te(o,"bark_aspen.png",new Z(.98,.97,.94),.04),bush0:Te(o,"bark_sage.png",new Z(.94,.9,.82),.05),bush1:Te(o,"bark_sage.png",new Z(.92,.88,.8),.05)},M={oak:Mt(o,"cluster_oak.png",new Z(.76,.82,.68),.08),pine:Mt(o,"cluster_pine.png",new Z(.66,.76,.66),.07),sage:Mt(o,"cluster_sage.png",new Z(.78,.84,.7),.08),aspen:Mt(o,"cluster_aspen.png",new Z(.8,.86,.74),.08),bush0:Mt(o,"leaf_bush.png",new Z(.74,.82,.58),.12),bush1:Mt(o,"leaf_bush.png",new Z(.72,.8,.56),.12),grass0:Mt(o,"grass_a.png",new Z(.58,.64,.54),.24,void 0,!0),grass1:Mt(o,"grass_b.png",new Z(.54,.6,.5),.24,void 0,!0),grass_tall:Mt(o,"foliage_atlas.webp",new Z(.67,.72,.66),5.5,void 0,!0),grass_med:Mt(o,"foliage_atlas.webp",new Z(.65,.71,.64),5,void 0,!0),grass_mixed:Mt(o,"foliage_atlas.webp",new Z(.69,.72,.66),5,void 0,!0),grass_short:Mt(o,"foliage_atlas.webp",new Z(.65,.7,.62),4,void 0,!0),fern_spread:Mt(o,"foliage_atlas.webp",new Z(.72,.76,.6),3,void 0,!0),fern_crown:Mt(o,"foliage_atlas.webp",new Z(.72,.76,.6),3,void 0,!0)},T={oak:Mt(o,"crown_oak.png",new Z(.82,.88,.76),.03,"crown_oak_n.png"),pine:Mt(o,"crown_pine.png",new Z(.8,.88,.8),.02,"crown_pine_n.png"),sage:Mt(o,"crown_sage.png",new Z(.82,.88,.76),.03,"crown_sage_n.png"),aspen:Mt(o,"crown_aspen.png",new Z(.84,.9,.78),.03,"crown_aspen_n.png"),bush0:Mt(o,"crown_bush.png",new Z(.8,.88,.62),.05),bush1:Mt(o,"crown_bush.png",new Z(.78,.86,.6),.05)};for(const i of Object.values(T))i.alphaCutOff=.24;const R={};for(const i of ke)R[i]=r?r(i):U0(o,`${i}_albedo.jpg`,new Z(1,1,1),`${i}_normal.jpg`,"terrain/rocks");if(r){for(const i of De)R[`${i}_lod1`]=r(`${i}_lod1`),R[`${i}_lod2`]=r(`${i}_lod2`);for(const i of Se)R[`${i}_lod1`]=r(`${i}_lod1`),R[`${i}_lod2`]=r(`${i}_lod2`)}const C=i=>R[i],y={},g=[],A=(i,b,k,F)=>{g.push(Xe(o,b).then(N=>{if(F(N),N.bark&&xe(N.bark,!1),N.leaves&&xe(N.leaves,!1),N.rock){const V=N.rock.geometry;V?.isVerticesDataPresent(re.TangentKind)&&V.removeVerticesData(re.TangentKind),xe(N.rock,!0,!1)}y[i]??={lod0:{}},k===0?y[i].lod0=N:k===1?y[i].lod1=N:y[i].lod2=N}))};for(const i of Ye)A(i,`${i}_lod0.glb`,0,b=>{b.bark&&(b.bark.material=w[i]),b.leaves&&(b.leaves.material=M[i])}),A(i,`${i}_lod1.glb`,1,b=>{b.bark&&(b.bark.material=w[i]),b.leaves&&(b.leaves.material=M[i])}),A(i,`${i}_lod2.glb`,2,b=>{b.bark&&(b.bark.material=w[i]),b.leaves&&(b.leaves.material=T[i])});for(const i of mo)A(i,`${i}_lod0.glb`,0,b=>{b.bark&&(b.bark.material=w[i]),b.leaves&&(b.leaves.material=M[i])}),A(i,`${i}_lod1.glb`,1,b=>{b.bark&&(b.bark.material=w[i]),b.leaves&&(b.leaves.material=T[i])});for(const i of[..._e,...ne])A(i,`${i}.glb`,0,b=>{b.leaves&&(b.leaves.material=M[i])});for(const i of ne)A(i,`${i}_lod1.glb`,1,b=>{b.leaves&&(b.leaves.material=M[i])});for(const i of ke){const b=Io(i)?pn:"veg";g.push(Xe(o,`${i}.glb`,b).then(k=>{if(k.rock){k.rock.material=C(i);const F=k.rock.geometry;F?.isVerticesDataPresent(re.TangentKind)&&F.removeVerticesData(re.TangentKind),xe(k.rock,!0,Io(i))}y[i]??={lod0:{}},y[i].lod0=k})),g.push(Xe(o,`${i}_lod1.glb`,b).then(k=>{if(k.rock){k.rock.material=R[`${i}_lod1`]??C(i);const F=k.rock.geometry;F?.isVerticesDataPresent(re.TangentKind)&&F.removeVerticesData(re.TangentKind),xe(k.rock,!0,Io(i))}y[i]??={lod0:{}},y[i].lod1=k}).catch(()=>{})),Se.includes(i)&&g.push(Xe(o,`${i}_lod2.glb`,b).then(k=>{k.rock&&(k.rock.material=R[`${i}_lod2`]??C(i),xe(k.rock,!0,!0)),y[i]??={lod0:{}},y[i].lod2=k}).catch(()=>{})),De.includes(i)&&g.push(Xe(o,`${i}_lod1.glb`,b).then(k=>{k.rock&&(k.rock.material=R[`${i}_lod2`]??C(i),xe(k.rock,!0,!0)),y[i]??={lod0:{}},y[i].lod2=k}).catch(()=>{}))}await Promise.all(g);const _=[...Object.values(w),...Object.values(M),...Object.values(T),...Object.values(R)],L=[];for(const i of Object.values(y))L.push(i.lod0.bark,i.lod0.leaves,i.lod0.rock),i.lod1&&L.push(i.lod1.bark,i.lod1.leaves,i.lod1.rock),i.lod2&&L.push(i.lod2.bark,i.lod2.leaves);await V0(o,_,L);const E=new Map;for(const i of S){const b=E.get(i.kind)??[];b.push(i),E.set(i.kind,b)}const D=[],tt=[],st=(i,b)=>Ye.includes(i)?b>n.treeCull?-1:b>n.treeLod2?2:b>n.treeLod1?1:0:mo.includes(i)?b>n.bushCull?-1:b>n.bushCull*.55?1:0:_e.includes(i)?b>n.grassRadius?-1:0:ne.includes(i)?n.grassRadius<=0||b>ln?-1:b>cn?1:0:De.includes(i)?n.rockCull<=0||b>dn?-1:n.rockLod1>0&&b>Ef?2:b>Math.max(60,n.rockLod1)?1:0:af.includes(i)?n.rockCull<=0||b>Math.min(n.rockCull,mn)?-1:n.rockLod1>0&&b>n.rockLod1?1:0:Se.includes(i)?n.rockCull<=0||b>n.rockCull||b>hn?-1:n.rockLod1>0&&b>Ef?2:n.rockLod1>0&&b>n.rockLod1?1:0:ke.includes(i)?n.rockCull<=0||b>n.rockCull?-1:n.rockLod1>0&&b>n.rockLod1?1:0:0,rt=i=>n.rockCull<=0||i>xn?-1:n.rockLod1>0&&i>n.rockLod1?1:0,K=[],lt=(i,b,k)=>{K.length=0;const F=[],N=k==null?0:k-O(t,e,f,s,i,b);let V=0;if(n.grass>0&&n.grassRadius>0&&N<48){const P=n.grassRadius*.16*Math.max(0,Math.min(1,1.25-N/32));V=P,P>4&&sn(F,{maps:h,heights:t,gw:e,gh:f,cell:s,waterY:l,camX:i,camZ:b,radius:P,step:un});const B=[];tn(B,{maps:h,heights:t,gw:e,gh:f,cell:s,waterY:l,camX:i,camZ:b});const W=P>4?P*.75:0;for(const H of B)Math.hypot(H.x-i,H.z-b)>=W&&F.push(H)}const G=new Map;for(const P of F){const B=G.get(P.kind)??[];B.push(P),G.set(P.kind,B)}for(const P of[...Ye,...mo,..._e,...ne,...ke]){const B=y[P];if(!B)continue;const W=E.get(P)??[],H=[[],[],[]];for(const I of W){const $=Math.hypot(I.x-i,I.z-b),Q=I.far?rt($):st(P,$);if(!(Q<0)&&!(N>60&&ne.includes(P))&&!(Q===2&&P!=="cliff_ledge"&&Se.includes(P)&&po(I.x,I.z,211)<.45))if(_e.includes(P)){if($<_s*.85)continue;const Y=n.grassRadius*.45,J=Math.max(1,n.grassRadius-Y),ft=Math.max(0,Math.min(1,($-Y)/J)),j=1-ft*ft*.65;H[Q].push({...I,scale:I.scale*j})}else H[Q].push(I)}if(_e.includes(P))H[0].push(...G.get(P)??[]);else if(ne.includes(P))for(const I of G.get(P)??[])H[Math.hypot(I.x-i,I.z-b)>V*.38?1:0].push(I);const X=[{part:B.lod0,sites:H[0],lod:0},{part:B.lod1??{},sites:H[1],lod:1},{part:B.lod2??{},sites:H[2],lod:2}];for(const{part:I,sites:$,lod:Q}of X)rn($,D,tt),Oo(I.bark,D,tt),Oo(I.leaves,D,tt),Oo(I.rock,D),$.length&&!_e.includes(P)&&!ne.includes(P)&&!ke.includes(P)&&(I.bark&&K.push(I.bark),I.leaves&&K.push(I.leaves)),Q===0&&$.length&&ke.includes(P)&&I.rock&&Uo()?.rockCasters&&K.push(I.rock),(Q===0||Q===1)&&$.length&&De.includes(P)&&I.rock&&Uo()?.rockCasters&&K.push(I.rock)}},xt=[];for(const i of[...Ye,...mo])xt.push(...E.get(i)??[]);const vt=Bt.CreateGround("veg-contact",{width:2,height:2,subdivisions:1},o),St=new Et("veg-contact",o),Tt=new dt(Yt("veg/contact_shadow.png"),o,!1,!0,dt.BILINEAR_SAMPLINGMODE);Tt.hasAlpha=!0,St.diffuseTexture=Tt,St.useAlphaFromDiffuseTexture=!0,St.diffuseColor=new Z(.22,.3,.42),St.emissiveColor=new Z(.04,.055,.08),St.disableLighting=!0,St.transparencyMode=Xo.MATERIAL_ALPHABLEND,St.alpha=.36,St.backFaceCulling=!1,St.zOffset=1,vt.material=St,vt.isPickable=!1,vt.receiveShadows=!1,vt.alwaysSelectAsActiveMesh=!0;const _t=[],zt=new yt,Kt=new xo,Ae=new yt,Oe=new Ke;for(const i of xt){const b=Ye.includes(i.kind)?5.4*i.scale:Se.includes(i.kind)?4.8*i.scale:Ns.includes(i.kind)?1.4*i.scale:ks.includes(i.kind)?1.6*i.scale:1.8*i.scale;zt.set(b,1,b),xo.RotationYawPitchRollToRef(i.rot,0,0,Kt),Ae.set(i.x,i.y+.04,i.z),Ke.ComposeToRef(zt,Kt,Ae,Oe);const k=_t.length;_t.length=k+16,Oe.copyToArray(_t,k)}_t.length?(vt.thinInstanceSetBuffer("matrix",new Float32Array(_t),16,!0),vt.thinInstanceRefreshBoundingInfo(!0)):vt.setEnabled(!1);const fe=o.activeCamera;lt(fe?.position.x??768,fe?.position.z??512,fe?.position.y);const de=()=>{for(const i of o.lights){if(!(i instanceof Bf))continue;const b=i.getShadowGenerators();if(b){for(const k of b.values())if(k instanceof be)for(const F of K)k.addShadowCaster(F,!1)}}};de();let ue=fe?.position.x??0,Ft=fe?.position.z??0,Ht=go();const x=o.onBeforeRenderObservable.add(()=>{const i=Math.min(.05,o.getEngine().getDeltaTime()/1e3);Z0(i);const b=o.activeCamera;if(!b)return;const k=b.position.x-ue,F=b.position.z-Ft;k*k+F*F>36&&(ue=b.position.x,Ft=b.position.z,lt(ue,Ft,b.position.y),de());const N=go();N!==Ht&&(Ht=N,lt(ue,Ft,b.position.y),de())});o.onDisposeObservable.add(()=>{o.onBeforeRenderObservable.remove(x),kf()})}class Sn extends Zo{constructor(t){super(t,"FieldWater",210,{FIELD_WATER:!1},!0,!1),this.registerForExtraEvents=!0,this._enable(!0)}isCompatible(){return!0}getClassName(){return"FieldWater"}prepareDefines(t){t.FIELD_WATER||(t.FIELD_WATER=!0,t.markAsUnprocessed())}getUniforms(t=It.GLSL){return{ubo:[{name:"waterTime",size:1,type:"float"}],fragment:t===It.WGSL?void 0:`#ifdef FIELD_WATER
uniform float waterTime;
#endif
`}}bindForSubMesh(t){t.updateFloat("waterTime",(typeof performance<"u"?performance.now():0)*.001)}hardBindForSubMesh(t){this.bindForSubMesh(t)}getCustomCode(t,e=It.GLSL){return t!=="fragment"?null:e===It.WGSL?{CUSTOM_FRAGMENT_DEFINITIONS:Mn(),CUSTOM_FRAGMENT_UPDATE_DIFFUSE:wn(),CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR:An()}:{CUSTOM_FRAGMENT_DEFINITIONS:bn(),CUSTOM_FRAGMENT_UPDATE_DIFFUSE:gn(),CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR:Cn()}}}function bn(){return`
float wfHash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float wfNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = wfHash(i);
  float b = wfHash(i + vec2(1.0, 0.0));
  float c = wfHash(i + vec2(0.0, 1.0));
  float d = wfHash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
`}function gn(){return`
vec2 wfUv = vPositionW.xz * 0.045;
float wfA = wfNoise(wfUv + vec2(waterTime * 0.02, waterTime * 0.011));
float wfB = wfNoise(wfUv * 2.2 + vec2(-waterTime * 0.015, waterTime * 0.018));
float wfWave = wfA * 0.65 + wfB * 0.35;
vec3 wfN = normalize(vec3((wfA - wfB) * 0.38, 1.0, (wfB - wfA) * 0.3));
normalW = normalize(mix(normalW, wfN, 0.85));
vec3 wfDeep = vec3(0.04, 0.14, 0.13);
vec3 wfShallow = vec3(0.22, 0.38, 0.32);
baseColor.rgb = mix(wfDeep, wfShallow, wfWave);
`}function Cn(){return`
float wfFacing = clamp(dot(normalize(viewDirectionW), normalW), 0.0, 1.0);
float wfFres = pow(1.0 - wfFacing, 4.0);
color.a = 0.42 + wfFres * 0.40;
color.rgb = mix(color.rgb, vec3(0.78, 0.86, 0.82), wfFres * 0.45);
`}function Mn(){return`
fn wfHash(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}
fn wfNoise(p: vec2f) -> f32 {
  let i = floor(p);
  let f0 = fract(p);
  let f = f0 * f0 * (3.0 - 2.0 * f0);
  let a = wfHash(i);
  let b = wfHash(i + vec2f(1.0, 0.0));
  let c = wfHash(i + vec2f(0.0, 1.0));
  let d = wfHash(i + vec2f(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
`}function wn(){return`
let wfUv = fragmentInputs.vPositionW.xz * 0.045;
let wfA = wfNoise(wfUv + vec2f(uniforms.waterTime * 0.02, uniforms.waterTime * 0.011));
let wfB = wfNoise(wfUv * 2.2 + vec2f(-uniforms.waterTime * 0.015, uniforms.waterTime * 0.018));
let wfWave = wfA * 0.65 + wfB * 0.35;
let wfN = normalize(vec3f((wfA - wfB) * 0.38, 1.0, (wfB - wfA) * 0.3));
normalW = normalize(mix(normalW, wfN, 0.85));
let wfDeep = vec3f(0.04, 0.14, 0.13);
let wfShallow = vec3f(0.22, 0.38, 0.32);
baseColor = vec4f(mix(wfDeep, wfShallow, wfWave), baseColor.a);
`}function An(){return`
let wfFacing = clamp(dot(normalize(viewDirectionW), normalW), 0.0, 1.0);
let wfFres = pow(1.0 - wfFacing, 4.0);
color = vec4f(mix(color.rgb, vec3f(0.78, 0.86, 0.82), wfFres * 0.45), 0.42 + wfFres * 0.40);
`}function Vn(o){const t=new Et("water",o);return t.diffuseColor=new Z(.16,.28,.24),t.specularColor=new Z(.55,.62,.58),t.specularPower=96,t.alpha=.62,t.transparencyMode=Xo.MATERIAL_ALPHABLEND,t.backFaceCulling=!1,t.disableDepthWrite=!0,new Sn(t),t}function Un(o,t,e,f,s,l,a,r,n="twin-ridges"){const c=Cf(t,e,f,s),m=new ee("terrain",o),d=new ie,u=fo(c.positions,c.cols,c.rows);Mf(c.positions,u,void 0,c.cols,c.rows),d.positions=c.positions,d.indices=c.indices,d.normals=fo(c.positions,c.cols,c.rows),d.applyToMesh(m),X0({positions:c.positions,normals:d.normals,cols:c.cols,rows:c.rows,spacing:s}),m.useVertexColors=!1,m.alwaysSelectAsActiveMesh=!0;const p=Cf(t,e,f,s,8),h=new ee("terrain-shadow",o),S=new ie,w=fo(p.positions,p.cols,p.rows);Mf(p.positions,w,void 0,p.cols,p.rows),S.positions=p.positions,S.indices=p.indices,S.normals=fo(p.positions,p.cols,p.rows),S.applyToMesh(h),h.isVisible=!0,h.visibility=0,h.isPickable=!1,h.receiveShadows=!1,h.alwaysSelectAsActiveMesh=!0;const M=b0(o,l,a,n);M.setRelief(c.minY,c.maxY,r);const T=Ja(t,e,f,s);M.setAoMap(T.pixels,T.width,T.height);const{material:R,ready:C}=M;m.material=R,typeof window<"u"&&(window.__terrainDebug=g=>{M.setDebug(g)}),document.documentElement.dataset.relief=`${c.minY.toFixed(1)}..${c.maxY.toFixed(1)}`,document.documentElement.dataset.terrain="loading";const y=C.then(()=>{const g=M.variant("tess","terrain-tess");return N0(o,t,e,f,s,g,Qe()),vn(o,t,e,f,s,r,n,_=>{if(_.startsWith("cliff_")||_.startsWith("rubble_")||_.startsWith("buttress_")){const E=_.endsWith("_lod2"),D=we(o,`${E?_.replace(/_lod2$/,"_lod1"):_}_normal.jpg`,!1,!0,"terrain/kit");return M.variant(E?"kitFar":"kit",`terrain-kit-${_}`,D)}const L=we(o,`${_}_normal.jpg`,!1,!0,"terrain/rocks");return L.level=1,M.variant("kit",`terrain-kit-${_}`,L)})}).then(()=>{const g=document.documentElement.dataset.terrain;g!=="shader-error"&&g!=="texture-error"&&(document.documentElement.dataset.terrain="ready")}).catch(g=>{console.error(g),document.documentElement.dataset.terrain="error"});return{mesh:m,shadowMesh:h,ready:y}}export{Ta as E,Bt as M,Bn as S,Nn as a,jo as b,Ln as c,Un as d,Jf as e,On as f,Ka as g,In as h,vo as i,O as j,Hn as k,Wn as l,$n as m,Fn as n,Uo as o,go as p,Yf as q,kn as r,Xf as s,Ya as t,Gn as u,zn as v,Vn as w,En as x,Pn as y,Dn as z};
