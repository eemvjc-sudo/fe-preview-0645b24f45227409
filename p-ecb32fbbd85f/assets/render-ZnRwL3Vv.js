import{f as I,V as z,a1 as D,a2 as xe,a3 as Ft,a4 as Ht,a5 as ve,a6 as J,C as Ae,a7 as q,a8 as be,a9 as we,aa as ge,ab as ye,ac as Me,ad as Ce,ae as Re,af as Te,ag as Be,ah as ke,ai as Ge,aj as De,ak as Oe,al as Fe,am as _e,an as Pe,ao as ze,ap as Ee,aq as Ne,ar as Ie,as as We,at as $e,au as Le,av as Ve,aw as He,ax as Ue,ay as Ze,az as X,j as k,aA as Xe,M as lt,aB as _t,i as Pt,H as Ye,aC as Ut,aD as L,aE as wt,aF as Z,aG as gt,aH as je}from"./nativeXRFrame-ClQnKKVR.js";import{T as qe,c as Ke,s as Qe,t as Je,d as ta,e as ea,_ as aa,o as Zt,f as sa,g as ra,h as Tt,G as zt,p as Mt}from"./index-DwTeO13F.js";import{_ as Et}from"./__vite-browser-external-kldTRzGf.js";class B{constructor(t=0,e=0){this.x=t,this.y=e,t!==Math.floor(t)&&(t=Math.floor(t),I.Warn("x is not an integer, floor(x) used")),e!==Math.floor(e)&&(e=Math.floor(e),I.Warn("y is not an integer, floor(y) used"))}clone(){return new B(this.x,this.y)}rotate60About(t){const e=this.x;return this.x=t.x+t.y-this.y,this.y=e+this.y-t.x,this}rotateNeg60About(t){const e=this.x;return this.x=e+this.y-t.y,this.y=t.x+t.y-e,this}rotate120(t,e){t!==Math.floor(t)&&(t=Math.floor(t),I.Warn("m not an integer only floor(m) used")),e!==Math.floor(e)&&(e=Math.floor(e),I.Warn("n not an integer only floor(n) used"));const a=this.x;return this.x=t-a-this.y,this.y=e+a,this}rotateNeg120(t,e){t!==Math.floor(t)&&(t=Math.floor(t),I.Warn("m is not an integer, floor(m) used")),e!==Math.floor(e)&&(e=Math.floor(e),I.Warn("n is not an integer,   floor(n) used"));const a=this.x;return this.x=this.y-e,this.y=t+e-a-this.y,this}toCartesianOrigin(t,e){const a=z.Zero();return a.x=t.x+2*this.x*e+this.y*e,a.y=t.y+Math.sqrt(3)*this.y*e,a}static Zero(){return new B(0,0)}}class Xt{constructor(){this.cartesian=[],this.vertices=[],this.max=[],this.min=[],this.closestTo=[],this.innerFacets=[],this.isoVecsABOB=[],this.isoVecsOBOA=[],this.isoVecsBAOA=[],this.vertexTypes=[],this.IDATA=new Ct("icosahedron","Regular",[[0,D,-1],[-D,1,0],[-1,0,-D],[1,0,-D],[D,1,0],[0,D,1],[-1,0,D],[-D,-1,0],[0,-D,-1],[D,-1,0],[1,0,D],[0,-D,1]],[[0,2,1],[0,3,2],[0,4,3],[0,5,4],[0,1,5],[7,6,1],[8,7,2],[9,8,3],[10,9,4],[6,10,5],[2,7,1],[3,8,2],[4,9,3],[5,10,4],[1,6,5],[11,6,7],[11,7,8],[11,8,9],[11,9,10],[11,10,6]])}setIndices(){let t=12;const e={},a=this.m,s=this.n;let f=a,o=1,n=0;s!==0&&(f=Ft(a,s)),o=a/f,n=s/f;let l,i,d,u,p;const x=B.Zero(),S=new B(a,s),c=new B(-s,a+s),h=B.Zero(),v=B.Zero(),b=B.Zero();let M=[],w,m,A,G;const P=[],g=this.vertByDist,_=(O,R,T,F)=>{w=O+"|"+T,m=R+"|"+F,w in e||m in e?w in e&&!(m in e)?e[m]=e[w]:m in e&&!(w in e)&&(e[w]=e[m]):(e[w]=t,e[m]=t,t++),g[T][0]>2?P[e[w]]=[-g[T][0],g[T][1],e[w]]:P[e[w]]=[M[g[T][0]],g[T][1],e[w]]};this.IDATA.edgematch=[[1,"B"],[2,"B"],[3,"B"],[4,"B"],[0,"B"],[10,"O",14,"A"],[11,"O",10,"A"],[12,"O",11,"A"],[13,"O",12,"A"],[14,"O",13,"A"],[0,"O"],[1,"O"],[2,"O"],[3,"O"],[4,"O"],[19,"B",5,"A"],[15,"B",6,"A"],[16,"B",7,"A"],[17,"B",8,"A"],[18,"B",9,"A"]];for(let O=0;O<20;O++){if(M=this.IDATA.face[O],d=M[2],u=M[1],p=M[0],A=x.x+"|"+x.y,w=O+"|"+A,w in e||(e[w]=d,P[d]=[M[g[A][0]],g[A][1]]),A=S.x+"|"+S.y,w=O+"|"+A,w in e||(e[w]=u,P[u]=[M[g[A][0]],g[A][1]]),A=c.x+"|"+c.y,w=O+"|"+A,w in e||(e[w]=p,P[p]=[M[g[A][0]],g[A][1]]),l=this.IDATA.edgematch[O][0],i=this.IDATA.edgematch[O][1],i==="B")for(let R=1;R<f;R++)v.x=a-R*(o+n),v.y=s+R*o,b.x=-R*n,b.y=R*(o+n),A=v.x+"|"+v.y,G=b.x+"|"+b.y,_(O,l,A,G);if(i==="O")for(let R=1;R<f;R++)b.x=-R*n,b.y=R*(o+n),h.x=R*o,h.y=R*n,A=b.x+"|"+b.y,G=h.x+"|"+h.y,_(O,l,A,G);if(l=this.IDATA.edgematch[O][2],i=this.IDATA.edgematch[O][3],i&&i==="A")for(let R=1;R<f;R++)h.x=R*o,h.y=R*n,v.x=a-(f-R)*(o+n),v.y=s+(f-R)*o,A=h.x+"|"+h.y,G=v.x+"|"+v.y,_(O,l,A,G);for(let R=0;R<this.vertices.length;R++)A=this.vertices[R].x+"|"+this.vertices[R].y,w=O+"|"+A,w in e||(e[w]=t++,g[A][0]>2?P[e[w]]=[-g[A][0],g[A][1],e[w]]:P[e[w]]=[M[g[A][0]],g[A][1],e[w]])}this.closestTo=P,this.vecToidx=e}calcCoeffs(){const t=this.m,e=this.n,a=Math.sqrt(3)/3,s=t*t+e*e+t*e;this.coau=(t+e)/s,this.cobu=-e/s,this.coav=-a*(t-e)/s,this.cobv=a*(2*t+e)/s}createInnerFacets(){const t=this.m,e=this.n;for(let a=0;a<e+t+1;a++)for(let s=this.min[a];s<this.max[a]+1;s++)s<this.max[a]&&s<this.max[a+1]+1&&this.innerFacets.push(["|"+s+"|"+a,"|"+s+"|"+(a+1),"|"+(s+1)+"|"+a]),a>0&&s<this.max[a-1]&&s+1<this.max[a]+1&&this.innerFacets.push(["|"+s+"|"+a,"|"+(s+1)+"|"+a,"|"+(s+1)+"|"+(a-1)])}edgeVecsABOB(){const t=this.m,e=this.n,a=new B(-e,t+e);for(let s=1;s<t+e;s++){const f=new B(this.min[s],s),o=new B(this.min[s-1],s-1),n=new B(this.min[s+1],s+1),l=f.clone(),i=o.clone(),d=n.clone();l.rotate60About(a),i.rotate60About(a),d.rotate60About(a);const u=new B(this.max[l.y],l.y),p=new B(this.max[l.y-1],l.y-1),x=new B(this.max[l.y-1]-1,l.y-1);(l.x!==u.x||l.y!==u.y)&&(l.x!==p.x?(this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([f,p,x]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([f,x,u])):l.y===d.y?(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([f,o,p]),this.vertexTypes.push([1,0,1]),this.isoVecsABOB.push([f,p,n])):(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([f,o,p]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([f,p,u])))}}mapABOBtoOBOA(){const t=new B(0,0);for(let e=0;e<this.isoVecsABOB.length;e++){const a=[];for(let s=0;s<3;s++)t.x=this.isoVecsABOB[e][s].x,t.y=this.isoVecsABOB[e][s].y,this.vertexTypes[e][s]===0&&t.rotateNeg120(this.m,this.n),a.push(t.clone());this.isoVecsOBOA.push(a)}}mapABOBtoBAOA(){const t=new B(0,0);for(let e=0;e<this.isoVecsABOB.length;e++){const a=[];for(let s=0;s<3;s++)t.x=this.isoVecsABOB[e][s].x,t.y=this.isoVecsABOB[e][s].y,this.vertexTypes[e][s]===1&&t.rotate120(this.m,this.n),a.push(t.clone());this.isoVecsBAOA.push(a)}}MapToFace(t,e){const a=this.IDATA.face[t],s=a[2],f=a[1],o=a[0],n=z.FromArray(this.IDATA.vertex[s]),l=z.FromArray(this.IDATA.vertex[f]),i=z.FromArray(this.IDATA.vertex[o]),d=l.subtract(n),u=i.subtract(n),p=d.scale(this.coau).add(u.scale(this.cobu)),x=d.scale(this.coav).add(u.scale(this.cobv));let S,c=xe.Vector3[0];for(let h=0;h<this.cartesian.length;h++)c=p.scale(this.cartesian[h].x).add(x.scale(this.cartesian[h].y)).add(n),c.x,c.y,c.z,S=t+"|"+this.vertices[h].x+"|"+this.vertices[h].y,e.vertex[this.vecToidx[S]]=[c.x,c.y,c.z]}build(t,e){const a=[],s=B.Zero(),f=new B(t,e),o=new B(-e,t+e);a.push(s,f,o);for(let m=e;m<t+1;m++)for(let A=0;A<t+1-m;A++)a.push(new B(A,m));if(e>0){const m=Ft(t,e),A=t/m,G=e/m;for(let g=1;g<m;g++)a.push(new B(g*A,g*G)),a.push(new B(-g*G,g*(A+G))),a.push(new B(t-g*(A+G),e+g*A));const P=t/e;for(let g=1;g<e;g++)for(let _=0;_<g*P;_++)a.push(new B(_,g)),a.push(new B(_,g).rotate120(t,e)),a.push(new B(_,g).rotateNeg120(t,e))}a.sort((m,A)=>m.x-A.x),a.sort((m,A)=>m.y-A.y);const n=new Array(t+e+1),l=new Array(t+e+1);for(let m=0;m<n.length;m++)n[m]=1/0,l[m]=-1/0;let i=0,d=0;const u=a.length;for(let m=0;m<u;m++)d=a[m].x,i=a[m].y,n[i]=Math.min(d,n[i]),l[i]=Math.max(d,l[i]);const p=(m,A)=>{const G=m.clone();return A==="A"&&G.rotateNeg120(t,e),A==="B"&&G.rotate120(t,e),G.x<0?G.y:G.x+G.y},x=[],S=[],c=[],h=[],v={},b=[];let M=-1,w=-1;for(let m=0;m<u;m++)x[m]=a[m].toCartesianOrigin(new B(0,0),.5),S[m]=p(a[m],"O"),c[m]=p(a[m],"A"),h[m]=p(a[m],"B"),S[m]===c[m]&&c[m]===h[m]?(M=3,w=S[m]):S[m]===c[m]?(M=4,w=S[m]):c[m]===h[m]?(M=5,w=c[m]):h[m]===S[m]&&(M=6,w=S[m]),S[m]<c[m]&&S[m]<h[m]&&(M=2,w=S[m]),c[m]<S[m]&&c[m]<h[m]&&(M=1,w=c[m]),h[m]<c[m]&&h[m]<S[m]&&(M=0,w=h[m]),b.push([M,w,a[m].x,a[m].y]);b.sort((m,A)=>m[2]-A[2]),b.sort((m,A)=>m[3]-A[3]),b.sort((m,A)=>m[1]-A[1]),b.sort((m,A)=>m[0]-A[0]);for(let m=0;m<b.length;m++)v[b[m][2]+"|"+b[m][3]]=[b[m][0],b[m][1],m];return this.m=t,this.n=e,this.vertices=a,this.vertByDist=v,this.cartesian=x,this.min=n,this.max=l,this}}class Ct{constructor(t,e,a,s){this.name=t,this.category=e,this.vertex=a,this.face=s}}class ht extends Ct{innerToData(t,e){for(let a=0;a<e.innerFacets.length;a++)this.face.push(e.innerFacets[a].map(s=>e.vecToidx[t+s]))}mapABOBtoDATA(t,e){const a=e.IDATA.edgematch[t][0];for(let s=0;s<e.isoVecsABOB.length;s++){const f=[];for(let o=0;o<3;o++)e.vertexTypes[s][o]===0?f.push(t+"|"+e.isoVecsABOB[s][o].x+"|"+e.isoVecsABOB[s][o].y):f.push(a+"|"+e.isoVecsABOB[s][o].x+"|"+e.isoVecsABOB[s][o].y);this.face.push([e.vecToidx[f[0]],e.vecToidx[f[1]],e.vecToidx[f[2]]])}}mapOBOAtoDATA(t,e){const a=e.IDATA.edgematch[t][0];for(let s=0;s<e.isoVecsOBOA.length;s++){const f=[];for(let o=0;o<3;o++)e.vertexTypes[s][o]===1?f.push(t+"|"+e.isoVecsOBOA[s][o].x+"|"+e.isoVecsOBOA[s][o].y):f.push(a+"|"+e.isoVecsOBOA[s][o].x+"|"+e.isoVecsOBOA[s][o].y);this.face.push([e.vecToidx[f[0]],e.vecToidx[f[1]],e.vecToidx[f[2]]])}}mapBAOAtoDATA(t,e){const a=e.IDATA.edgematch[t][2];for(let s=0;s<e.isoVecsBAOA.length;s++){const f=[];for(let o=0;o<3;o++)e.vertexTypes[s][o]===1?f.push(t+"|"+e.isoVecsBAOA[s][o].x+"|"+e.isoVecsBAOA[s][o].y):f.push(a+"|"+e.isoVecsBAOA[s][o].x+"|"+e.isoVecsBAOA[s][o].y);this.face.push([e.vecToidx[f[0]],e.vecToidx[f[1]],e.vecToidx[f[2]]])}}orderData(t){const e=[];for(let o=0;o<13;o++)e[o]=[];const a=t.closestTo;for(let o=0;o<a.length;o++)a[o][0]>-1?a[o][1]>0&&e[a[o][0]].push([o,a[o][1]]):e[12].push([o,a[o][0]]);const s=[];for(let o=0;o<12;o++)s[o]=o;let f=12;for(let o=0;o<12;o++){e[o].sort((n,l)=>n[1]-l[1]);for(let n=0;n<e[o].length;n++)s[e[o][n][0]]=f++}for(let o=0;o<e[12].length;o++)s[e[12][o][0]]=f++;for(let o=0;o<this.vertex.length;o++)this.vertex[o].push(s[o]);this.vertex.sort((o,n)=>o[3]-n[3]);for(let o=0;o<this.vertex.length;o++)this.vertex[o].pop();for(let o=0;o<this.face.length;o++)for(let n=0;n<this.face[o].length;n++)this.face[o][n]=s[this.face[o][n]];this.sharedNodes=e[12].length,this.poleNodes=this.vertex.length-this.sharedNodes}setOrder(t,e){const a=[],s=[];let f=e.pop();s.push(f);let o=this.face[f].indexOf(t);o=(o+2)%3;let n=this.face[f][o];a.push(n);let l=0;for(;e.length>0;)f=e[l],this.face[f].indexOf(n)>-1?(o=(this.face[f].indexOf(n)+1)%3,n=this.face[f][o],a.push(n),s.push(f),e.splice(l,1),l=0):l++;return this.adjacentFaces.push(a),s}toGoldbergPolyhedronData(){const t=new Ct("GeoDual","Goldberg",[],[]);t.name="GD dual";const e=this.vertex.length,a=new Array(e);for(let i=0;i<e;i++)a[i]=[];for(let i=0;i<this.face.length;i++)for(let d=0;d<3;d++)a[this.face[i][d]].push(i);let s=0,f=0,o=0,n=[],l=[];this.adjacentFaces=[];for(let i=0;i<a.length;i++)t.face[i]=this.setOrder(i,a[i].concat([])),a[i].forEach(d=>{s=0,f=0,o=0,n=this.face[d];for(let u=0;u<3;u++)l=this.vertex[n[u]],s+=l[0],f+=l[1],o+=l[2];t.vertex[d]=[s/3,f/3,o/3]});return t}static BuildGeodesicData(t){const e=new ht("Geodesic-m-n","Geodesic",[[0,D,-1],[-D,1,0],[-1,0,-D],[1,0,-D],[D,1,0],[0,D,1],[-1,0,D],[-D,-1,0],[0,-D,-1],[D,-1,0],[1,0,D],[0,-D,1]],[]);t.setIndices(),t.calcCoeffs(),t.createInnerFacets(),t.edgeVecsABOB(),t.mapABOBtoOBOA(),t.mapABOBtoBAOA();for(let s=0;s<t.IDATA.face.length;s++)t.MapToFace(s,e),e.innerToData(s,t),t.IDATA.edgematch[s][1]==="B"&&e.mapABOBtoDATA(s,t),t.IDATA.edgematch[s][1]==="O"&&e.mapOBOAtoDATA(s,t),t.IDATA.edgematch[s][3]==="A"&&e.mapBAOAtoDATA(s,t);e.orderData(t);const a=1;return e.vertex=e.vertex.map(function(s){const f=s[0],o=s[1],n=s[2],l=Math.sqrt(f*f+o*o+n*n);return s[0]*=a/l,s[1]*=a/l,s[2]*=a/l,s}),e}}function oa(r,t,e=null){let a=t.m||1;a!==Math.floor(a)&&(a=Math.floor(a),I.Warn("m not an integer only floor(m) used"));let s=t.n||0;if(s!==Math.floor(s)&&(s=Math.floor(s),I.Warn("n not an integer only floor(n) used")),s>a){const i=s;s=a,a=i,I.Warn("n > m therefore m and n swapped")}const f=new Xt;f.build(a,s);const n={custom:ht.BuildGeodesicData(f),size:t.size,sizeX:t.sizeX,sizeY:t.sizeY,sizeZ:t.sizeZ,faceUV:t.faceUV,faceColors:t.faceColors,flat:t.flat,updatable:t.updatable,sideOrientation:t.sideOrientation,frontUVs:t.frontUVs,backUVs:t.backUVs};return Ht(r,n,e)}function fa(r,t){const e=r.size,a=r.sizeX||e||1,s=r.sizeY||e||1,f=r.sizeZ||e||1,o=r.sideOrientation===0?0:r.sideOrientation||q.DEFAULTSIDE,n=[],l=[],i=[],d=[];let u=1/0,p=-1/0,x=1/0,S=-1/0;for(let v=0;v<t.vertex.length;v++)u=Math.min(u,t.vertex[v][0]*a),p=Math.max(p,t.vertex[v][0]*a),x=Math.min(x,t.vertex[v][1]*s),S=Math.max(S,t.vertex[v][1]*s);let c=0;for(let v=0;v<t.face.length;v++){const b=t.face[v],M=z.FromArray(t.vertex[b[0]]),w=z.FromArray(t.vertex[b[2]]),m=z.FromArray(t.vertex[b[1]]),A=w.subtract(M),G=m.subtract(M),P=z.Cross(G,A).normalize();for(let g=0;g<b.length;g++){i.push(P.x,P.y,P.z);const _=t.vertex[b[g]];n.push(_[0]*a,_[1]*s,_[2]*f);const O=(_[1]*s-x)/(S-x);d.push((_[0]*a-u)/(p-u),O)}for(let g=0;g<b.length-2;g++)l.push(c,c+g+2,c+g+1);c+=b.length}q._ComputeSides(o,n,l,i,d);const h=new q;return h.positions=n,h.indices=l,h.normals=i,h.uvs=d,h}function na(r,t,e=null){const a=t.size,s=t.sizeX||a||1,f=t.sizeY||a||1,o=t.sizeZ||a||1;let n=t.m||1;n!==Math.floor(n)&&(n=Math.floor(n),I.Warn("m not an integer only floor(m) used"));let l=t.n||0;if(l!==Math.floor(l)&&(l=Math.floor(l),I.Warn("n not an integer only floor(n) used")),l>n){const S=l;l=n,n=S,I.Warn("n > m therefore m and n swapped")}const i=new Xt;i.build(n,l);const d=ht.BuildGeodesicData(i),u=d.toGoldbergPolyhedronData(),p=new ve(r,e);t.sideOrientation=J._GetDefaultSideOrientation(t.sideOrientation),p._originalBuilderSideOrientation=t.sideOrientation,fa(t,u).applyToMesh(p,t.updatable),p.goldbergData.nbSharedFaces=d.sharedNodes,p.goldbergData.nbUnsharedFaces=d.poleNodes,p.goldbergData.adjacentFaces=d.adjacentFaces,p.goldbergData.nbFaces=p.goldbergData.nbSharedFaces+p.goldbergData.nbUnsharedFaces,p.goldbergData.nbFacesAtPole=(p.goldbergData.nbUnsharedFaces-12)/12;for(let S=0;S<d.vertex.length;S++)p.goldbergData.faceCenters.push(z.FromArray(d.vertex[S])),p.goldbergData.faceCenters[S].x*=s,p.goldbergData.faceCenters[S].y*=f,p.goldbergData.faceCenters[S].z*=o,p.goldbergData.faceColors.push(new Ae(1,1,1,1));for(let S=0;S<u.face.length;S++){const c=u.face[S],h=z.FromArray(u.vertex[c[0]]),v=z.FromArray(u.vertex[c[2]]),b=z.FromArray(u.vertex[c[1]]),M=v.subtract(h),w=b.subtract(h),m=z.Cross(w,M).normalize(),A=z.Cross(w,m).normalize();p.goldbergData.faceXaxis.push(w.normalize()),p.goldbergData.faceYaxis.push(m),p.goldbergData.faceZaxis.push(A)}return p}const E={CreateBox:Ue,CreateTiledBox:He,CreateSphere:Ve,CreateDisc:Le,CreateIcoSphere:$e,CreateRibbon:We,CreateCylinder:Ie,CreateTorus:Ne,CreateTorusKnot:Ee,CreateLineSystem:ze,CreateLines:Pe,CreateDashedLines:_e,ExtrudeShape:Fe,ExtrudeShapeCustom:Oe,CreateLathe:De,CreateTiledPlane:Ge,CreatePlane:ke,CreateGround:be,CreateTiledGround:Be,CreateGroundFromHeightMap:Te,CreatePolygon:Re,ExtrudePolygon:Ce,CreateTube:Me,CreatePolyhedron:Ht,CreateGeodesic:oa,CreateGoldberg:na,CreateDecal:ye,CreateCapsule:ge,CreateText:we};class ia{get gpuFrameTimeCounter(){return this.engine.getGPUFrameTimeCounter()}get captureGPUFrameTime(){return this._captureGPUFrameTime}set captureGPUFrameTime(t){t!==this._captureGPUFrameTime&&(this._captureGPUFrameTime=t,this.engine.captureGPUFrameTime(t))}get shaderCompilationTimeCounter(){return this._shaderCompilationTime}get captureShaderCompilationTime(){return this._captureShaderCompilationTime}set captureShaderCompilationTime(t){t!==this._captureShaderCompilationTime&&(this._captureShaderCompilationTime=t,t?(this._onBeforeShaderCompilationObserver=this.engine.onBeforeShaderCompilationObservable.add(()=>{this._shaderCompilationTime.fetchNewFrame(),this._shaderCompilationTime.beginMonitoring()}),this._onAfterShaderCompilationObserver=this.engine.onAfterShaderCompilationObservable.add(()=>{this._shaderCompilationTime.endMonitoring()})):(this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null))}constructor(t){this.engine=t,this._captureGPUFrameTime=!1,this._captureShaderCompilationTime=!1,this._shaderCompilationTime=new Ze,this._onBeginFrameObserver=null,this._onEndFrameObserver=null,this._onBeforeShaderCompilationObserver=null,this._onAfterShaderCompilationObserver=null}dispose(){this.engine.onBeginFrameObservable.remove(this._onBeginFrameObserver),this._onBeginFrameObserver=null,this.engine.onEndFrameObservable.remove(this._onEndFrameObserver),this._onEndFrameObserver=null,this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null,this.engine=null}}const Nt=[],la=typeof performance<"u"?performance.now():0;function Bt(r,t){const e={name:r,ms:Math.round(t*10)/10,at:Math.round((performance.now()-la)*10)/10};Nt.push(e),globalThis.__boot=Nt}async function fs(r,t){const e=performance.now();try{return await t()}finally{Bt(r,performance.now()-e)}}function ns(r,t){const e=performance.now();try{return t()}finally{Bt(r,performance.now()-e)}}function is(r,t){const e=new ia(r);e.captureShaderCompilationTime=!0;const a=r.onEndFrameObservable.add(()=>{Bt(t,e.shaderCompilationTimeCounter.total),r.onEndFrameObservable.remove(a),e.dispose()})}const ca=qe+.85;function ma(r,t=1.35){const e=t>0?t:1.35;return(r%e+e)%e<e*.22?1:.14}function ua(r,t,e){const a=Math.min(e.length,Math.floor(t.length/3),Math.floor(r.length/4));for(let s=0;s<a;s++){if(e[s]!==Ke)continue;const f=t[s*3+1],o=Math.max(0,Math.min(1,1-f/4.2))*.42,n=s*4;r[n]*=1-o,r[n+1]*=1-o*.92,r[n+2]*=1-o*.75}}class ls{mesh;mat;buf=new Float32Array(48*16);bound=!1;constructor(t){this.mesh=E.CreateBox("mast-beacon",{width:.28,height:.28,depth:.28},t),this.mat=new X("mast-beacon",t),this.mat.diffuseColor=k.Black(),this.mat.specularColor=k.Black(),this.mat.emissiveColor=new k(1,.72,.28),this.mesh.material=this.mat,this.mesh.isPickable=!1,this.mesh.alwaysSelectAsActiveMesh=!0,this.mesh.setEnabled(!1)}sync(t,e){const a=ma(e);if(this.mat.emissiveColor.set(a,a*.62,a*.18),!t.length){this.mesh.isEnabled()&&this.mesh.setEnabled(!1);return}const s=Math.min(t.length,48);for(let f=0;f<s;f++){const o=t[f],n=f*16;this.buf[n]=1,this.buf[n+5]=1,this.buf[n+10]=1,this.buf[n+12]=o.x,this.buf[n+13]=o.y+ca,this.buf[n+14]=o.z,this.buf[n+15]=1}this.mesh.isEnabled()||this.mesh.setEnabled(!0),this.bound?this.mesh.thinInstanceBufferUpdated("matrix"):(this.mesh.thinInstanceSetBuffer("matrix",this.buf,16,!1),this.bound=!0),this.mesh.thinInstanceCount=s}dispose(){this.mesh.dispose(),this.mat.dispose()}}function da(r){switch(r){case 2:return"wheels";case 3:return"treads";case 4:return"hover";case 5:return"air";case 6:return"burrow";case 7:return"ship";default:return"walker"}}function C(r,t,e,a,s,f){return{x:r,y:t,z:e,w:a,h:s,d:f}}const ha={walker:[C(-.22,.32,0,.16,.64,.18),C(.22,.32,0,.16,.64,.18),C(0,.88,.02,.62,.58,.4),C(0,1.32,.06,.28,.26,.28),C(.36,.96,.42,.1,.1,.72)],wheels:[C(0,.32,0,.7,.28,1.35),C(-.42,.16,.38,.16,.32,.32),C(.42,.16,.38,.16,.32,.32),C(-.42,.16,-.38,.16,.32,.32),C(.42,.16,-.38,.16,.32,.32),C(0,.58,-.05,.4,.22,.55),C(0,.62,.55,.08,.08,.7)],treads:[C(-.58,.22,0,.22,.36,1.45),C(.58,.22,0,.22,.36,1.45),C(0,.36,0,.85,.32,1.35),C(0,.64,-.08,.48,.24,.62),C(0,.68,.62,.1,.1,.85)],hover:[C(0,.28,0,1.35,.14,1.55),C(0,.5,-.05,.85,.28,1.05),C(0,.74,-.1,.4,.18,.5),C(0,.78,.62,.08,.08,.7)],air:[C(0,.32,0,.22,.18,1.7),C(0,.32,.98,.12,.1,.28),C(0,.34,.05,1.7,.05,.38),C(0,.48,-.68,.06,.28,.22),C(0,.4,-.72,.55,.04,.16)],burrow:[C(0,.2,-.05,.7,.28,1.05),C(0,.22,.62,.22,.22,.48),C(0,.4,-.15,.28,.16,.4),C(-.28,.1,.1,.12,.12,.4),C(.28,.1,.1,.12,.12,.4)],ship:[C(0,.2,0,.55,.28,1.65),C(0,.46,-.15,.38,.28,.55),C(0,.28,.95,.28,.18,.4),C(0,.42,.55,.12,.12,.5),C(0,.72,-.15,.06,.28,.06)]};function Yt(r){return ha[r]}function pa(r){let t=1/0,e=1/0,a=1/0,s=-1/0,f=-1/0,o=-1/0;for(const n of r)t=Math.min(t,n.x-n.w/2),e=Math.min(e,n.y-n.h/2),a=Math.min(a,n.z-n.d/2),s=Math.max(s,n.x+n.w/2),f=Math.max(f,n.y+n.h/2),o=Math.max(o,n.z+n.d/2);return{minX:t,minY:e,minZ:a,maxX:s,maxY:f,maxZ:o}}function Sa(r){const t=pa(Yt(r));return Math.max(t.maxX-t.minX,t.maxY-t.minY,t.maxZ-t.minZ)}function xa(r){const t=Yt(r),e=new Float32Array(t.length*24*3),a=new Float32Array(t.length*24*3),s=new Uint32Array(t.length*36),f=[[0,0,1],[0,0,-1],[1,0,0],[-1,0,0],[0,1,0],[0,-1,0]],o=[[1,-1,1],[-1,-1,1],[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1],[-1,-1,-1],[1,-1,-1],[1,1,-1],[1,-1,-1],[1,-1,1],[1,1,1],[-1,1,1],[-1,-1,1],[-1,-1,-1],[-1,1,-1],[-1,1,1],[1,1,1],[1,1,-1],[-1,1,-1],[-1,-1,-1],[1,-1,-1],[1,-1,1],[-1,-1,1]];let n=0,l=0,i=0,d=0;for(const u of t){const p=u.w/2,x=u.h/2,S=u.d/2;for(let c=0;c<6;c++){const h=f[c];for(let b=0;b<4;b++){const M=o[c*4+b];e[n++]=u.x+M[0]*p,e[n++]=u.y+M[1]*x,e[n++]=u.z+M[2]*S,a[l++]=h[0],a[l++]=h[1],a[l++]=h[2]}const v=d;s[i++]=v,s[i++]=v+1,s[i++]=v+2,s[i++]=v,s[i++]=v+2,s[i++]=v+3,d+=4}}return{positions:e,normals:a,indices:s}}const va=new Map,Q=[{body:new k(.77,.38,.18),accent:new k(.96,.77,.09)},{body:new k(.9,.84,.76),accent:new k(.12,.54,.54)},{body:new k(.95,.96,.97),accent:new k(.18,.36,1)},{body:new k(.36,.24,.54),accent:new k(.24,.86,.48)}];function ct(r,t,e=!1){const a=`mat-${t}-${e?"a":"b"}`,s=r.getMaterialByName(a);if(s)return s;const f=new X(a,r),o=Q[t]??Q[0];return f.diffuseColor=e?o.accent:o.body,f.specularColor=k.Black(),f}function cs(r,t,e,a,s=0){const f=va.get(t);if(f){const n=f(r);return n.material=ct(r,e,a===0),n.isPickable=!1,n}if(a<=2)return Aa(r,t,e,s,a===0);let o;return a===9?o=E.CreateBox(t,{width:1.7,height:1.1,depth:1.7},r):a===3?o=E.CreateBox(t,{width:8,height:2.4,depth:8},r):a===8?o=E.CreateBox(t,{width:1.6,height:3.2,depth:1.6},r):a>=4&&a<=10?o=E.CreateBox(t,{width:2.4,height:1.3,depth:2.4},r):e===1?o=E.CreateCylinder(t,{diameterTop:.12,diameterBottom:1.15,height:.7,tessellation:3},r):e===2?o=E.CreateCylinder(t,{diameterTop:.35,diameterBottom:.85,height:1.7,tessellation:5},r):e===3?o=E.CreateBox(t,{width:1.7,height:.42,depth:1.05},r):o=E.CreateBox(t,{width:.95,height:.72,depth:1.15},r),o.material=ct(r,e,a===0||a===8),o.isPickable=!1,o.alwaysSelectAsActiveMesh=!0,a>=3&&a<=10&&ya(o),o}function Aa(r,t,e,a,s){const f=da(a),o=new J(t,r),n=xa(f),l=new q;return l.positions=n.positions,l.normals=n.normals,l.indices=n.indices,l.applyToMesh(o,!0),o.material=ct(r,e,s),o.isPickable=!1,o.alwaysSelectAsActiveMesh=!0,o.doNotSyncBoundingInfo=!0,o.metadata={modelFacing:!0,span:Sa(f)},o}const mt=new Map,It=new Map;let Wt=0;function ba(r){const t=It.get("turbine");if(t&&t.getScene()===r)return t;const e=new Xe("turbine-steel",r);return e.albedoColor=k.White(),e.metallic=.32,e.roughness=.46,e.emissiveColor=new k(.07,.075,.08),e.environmentIntensity=.9,e.backFaceCulling=!0,It.set("turbine",e),e}function ms(r,t,e,a=ea(t)){if(!a)return null;const s=new J(`struct-${t}-${e}-${Wt}`,r);Wt+=1;const f=Qe(a),o=new q;o.positions=f.positions,o.indices=f.indices,o.normals=f.normals;const n=a==="mast"?Je(f.tones,e):ta(f,e);return n&&a==="mast"&&ua(n,f.positions,f.tones),n&&(o.colors=n),o.applyToMesh(s,!0),n&&(s.useVertexColors=!0),s.material=a==="mast"?ba(r):n?wa(r,e):ga(r,e),s.receiveShadows=!0,s.isPickable=!1,s.alwaysSelectAsActiveMesh=!0,s.doNotSyncBoundingInfo=a!=="mast",s.renderingGroupId=0,s}function wa(r,t){const e=`struct-paint-${t}`,a=mt.get(e);if(a&&a.getScene()===r)return a;const s=new X(e,r),f=Q[t]??Q[0];return s.diffuseColor=k.White(),s.emissiveColor=f.accent.scale(.12),s.specularColor=new k(.16,.16,.16),mt.set(e,s),s}function ga(r,t){const e=`struct-mat-${t}`,a=mt.get(e);if(a&&a.getScene()===r)return a;const s=new X(e,r),f=Q[t]??Q[0];return s.diffuseColor=new k(.45,.48,.5),s.emissiveColor=f.accent.scale(.35),s.specularColor=new k(.08,.08,.08),mt.set(e,s),s}function ya(r){r.refreshBoundingInfo(!0);const t=r.getBoundingInfo().boundingBox.extendSize.y*2;t>0&&(r.bakeTransformIntoVertices(lt.Translation(0,t/2,0)),r.refreshBoundingInfo(!0))}function us(r,t){const e=E.CreateBox(`shell-${t}`,{size:.35},r);return e.material=ct(r,t,!0),e.isPickable=!1,e.alwaysSelectAsActiveMesh=!0,e}let $t=null;function ds(){return $t??=(async()=>{if(typeof window>"u"){const{readFileSync:r}=await aa(async()=>{const{readFileSync:e}=await import("./__vite-browser-external-kldTRzGf.js").then(a=>a.a);return{readFileSync:e}},[],import.meta.url);await Et({module_or_path:r(new URL(""+new URL("sim_bg-BSeSqykp.wasm",import.meta.url).href,import.meta.url))});return}await Et()})(),$t}function jt(r,t,e,a,s,f){const o=t+1,n=K(s/a,0,t-.001),l=K(f/a,0,e-.001),i=Math.floor(n),d=Math.floor(l),u=n-i,p=l-d,x=r[d*o+i]/64,S=r[d*o+i+1]/64,c=r[(d+1)*o+i]/64,h=r[(d+1)*o+i+1]/64;return x*(1-u)*(1-p)+S*u*(1-p)+c*(1-u)*p+h*u*p}const qt=1536,Kt=1024,Qt=qt/2,Ma=Kt/2,nt=Qt+1,at=65536;function Ca(r,t,e){const a=K(Math.round(t*at),0,qt*at),s=K(Math.round(e*at),0,Kt*at),f=Math.floor(a/2),o=Math.floor(s/2),n=K(f>>16,0,Qt-1),l=K(o>>16,0,Ma-1),i=f&65535,d=o&65535,u=r[l*nt+n],p=r[l*nt+n+1],x=r[(l+1)*nt+n],S=r[(l+1)*nt+n+1],c=u+((p-u)*i>>16),h=x+((S-x)*i>>16);return(c+((h-c)*d>>16)<<10)/at}function hs(r,t,e,a,s,f,o){return jt(r,t,e,a,s,o)+(f-Ca(r,s,o))}function K(r,t,e){return Math.max(t,Math.min(e,r))}function Jt(r,t=0){const e=Math.max(-1,Math.min(1,r)),a=e<0?yt([.28,.32,.36],[.72,.58,.42],e+1):yt([.72,.58,.42],[.08,.22,.52],Ra(Math.min(1,e/.5))),s=Math.max(0,Math.min(1,t));return yt(a,[1,.86,.62],s*s*.8)}function yt(r,t,e){return[r[0]+(t[0]-r[0])*e,r[1]+(t[1]-r[1])*e,r[2]+(t[2]-r[2])*e]}function Ra(r){return r*r*(3-2*r)}const ut=.82,te=.48,ee=[[.78,.74,.68],[.58,.54,.5],[.4,.42,.44],[.64,.42,.32],[.3,.29,.28]],dt=28,ae=12,se=.96,re=.3;function Ta(r,t){const e=r*Math.PI/180,a=t*Math.PI/180,s=Math.cos(a);return[-Math.sin(e)*s,-Math.sin(a),Math.cos(e)*s]}function ps(r,t=315,e=30){const a=E.CreateSphere("sky",{diameter:400,segments:32,sideOrientation:J.BACKSIDE},r);a.infiniteDistance=!0,a.isPickable=!1,a.alwaysSelectAsActiveMesh=!0;const s=a.getVerticesData(_t.PositionKind),f=Ta(t,e),o=-f[0],n=-f[1],l=-f[2];if(s){const d=new Float32Array(s.length/3*4);for(let u=0;u<s.length;u+=3){const p=s[u],x=s[u+1],S=s[u+2],c=Math.hypot(p,x,S)||1,h=(p*o+x*n+S*l)/c,v=Math.max(0,(h-.72)/.28),[b,M,w]=Jt(x/c,v),m=u/3*4;d[m]=b,d[m+1]=M,d[m+2]=w,d[m+3]=1}a.setVerticesData(_t.ColorKind,d)}a.useVertexColors=!0;const i=new X("sky",r);return i.disableLighting=!0,i.emissiveColor=new k(1,1,1),i.specularColor=k.Black(),i.backFaceCulling=!1,i.disableDepthWrite=!0,a.material=i,a}const oe=1.6,fe=.15,ne=.85,Ba=new Set(["twin-ridges","benchfall-quarry"]);function Rt(r,t){const e=Ba.has(r)?r:"twin-ridges",s=(t.split(/[/\\]/).pop()??"").replace(/^\.+/,"").replace(/[^a-zA-Z0-9._-]/g,"");return`maps/${e}/${s}`}const ie=.82,le=.18,ce=.92,me=.08;function ka(r,t){const e=t==="webgl2";switch(r){case"low":return{enabled:!0,density:e?12e-5:18e-5};case"medium":return{enabled:!0,density:e?18e-5:28e-5};case"high":return{enabled:!0,density:e?25e-5:38e-5};case"ultra":return{enabled:!0,density:e?32e-5:48e-5};default:return{enabled:!0,density:38e-5}}}function Ga(r){switch(r){case"low":return{step:14,trees:350,shrubs:500,rocks:0};case"medium":return{step:10,trees:800,shrubs:1100,rocks:220};case"high":return{step:8,trees:1400,shrubs:1800,rocks:480};case"ultra":return{step:6,trees:2200,shrubs:2600,rocks:800};default:return{step:8,trees:1400,shrubs:1800,rocks:480}}}function Da(){return{diffuse:[.92,.88,.78],ground:[.46,.4,.32],intensity:.78,env:1.2}}function Oa(r){if(r.isDisposed)return;const t=ra()?.backend==="webgl2"?"webgl2":"webgpu",e=ka(Tt(),t),a=Jt(0);r.fogMode=e.enabled?Pt.FOGMODE_EXP2:Pt.FOGMODE_NONE,r.fogDensity=e.density,r.fogColor=new k(a[0],a[1],a[2]);const s=Da();r.environmentIntensity=s.env;for(const f of["sky","menu-sky"]){const o=r.getLightByName(f);o instanceof Ye&&(o.diffuse=new k(s.diffuse[0],s.diffuse[1],s.diffuse[2]),o.groundColor=new k(s.ground[0],s.ground[1],s.ground[2]),o.intensity=s.intensity)}}function Ss(r){const t=()=>{r.isDisposed||Oa(r)};t();const e=Zt(t),a=sa(t),s=()=>{e(),a()};return r.onDisposeObservable.add(s),s}const Fa=1;function _a(r,t,e,a,s=Fa){const f=Math.floor(t/s),o=Math.floor(e/s),n=t+1,l=f+1,i=new Float32Array(l*(o+1)*3);let d=1/0,u=-1/0,p=0;for(let c=0;c<=o;c++){const h=Math.min(e,c*s);for(let v=0;v<=f;v++){const b=Math.min(t,v*s),M=r[h*n+b]/64;i[p++]=b*a,i[p++]=M,i[p++]=h*a,M<d&&(d=M),M>u&&(u=M)}}const x=new Uint32Array(f*o*6);let S=0;for(let c=0;c<o;c++)for(let h=0;h<f;h++){const v=c*l+h;x[S++]=v,x[S++]=v+1,x[S++]=v+l,x[S++]=v+1,x[S++]=v+l+1,x[S++]=v+l}return{positions:i,indices:x,cols:f,rows:o,minY:d,maxY:u}}const y=128,H=2,N=y+H*2,ot=4,$=N*ot,W={grass:0,scrub:1,rock:2,scree:3,gravel:4,road:5,mud:6,sand:7,concrete:8};function Y(r,t,e){let a=Math.imul(r,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return a=Math.imul(a^a>>>13,1274126177),((a^a>>>16)>>>0)/4294967296}function Pa(r,t,e,a){const s=Math.floor(r),f=Math.floor(t),o=r-s,n=t-f,l=o*o*(3-2*o),i=n*n*(3-2*n),d=(s%a+a)%a,u=(f%a+a)%a,p=(d+1)%a,x=(u+1)%a,S=Y(d,u,e),c=Y(p,u,e),h=Y(d,x,e),v=Y(p,x,e);return S*(1-l)*(1-i)+c*l*(1-i)+h*(1-l)*i+v*l*i}function U(r,t,e,a,s){let f=0,o=.5,n=0,l=1,i=a;for(let d=0;d<s;d++)f+=o*Pa(r*l,t*l,e+d*17,i),n+=o,o*=.5,l*=2,i*=2;return f/n}function Lt(r,t,e,a){const s=Math.max(1,Math.round(y/a)),f=Math.floor(r/a),o=Math.floor(t/a);let n=1e9;for(let l=-1;l<=1;l++)for(let i=-1;i<=1;i++){const d=f+i,u=o+l,p=(d%s+s)%s,x=(u%s+s)%s,S=d*a+Y(p,x,e)*a,c=u*a+Y(p,x,e+9)*a,h=r-S,v=t-c,b=h*h+v*v;b<n&&(n=b)}return Math.sqrt(n)/a}function j(r){return Math.max(0,Math.min(255,Math.round(r)))}function za(r){const t=y*y,e=new Uint8Array(t*3),a=new Float32Array(t),s={0:[168,170,112],1:[150,156,98],2:[142,138,128],3:[168,150,126],4:[146,122,92],5:[112,88,64],6:[92,68,44],7:[214,188,138],8:[164,162,154]},[f,o,n]=s[r]??[140,130,110];for(let l=0;l<y;l++)for(let i=0;i<y;i++){const d=l*y+i;let u=f,p=o,x=n,S=0;if(r===W.grass){const c=U(i/18,l/18,11,y,3),h=U(i/3.2,l/3.2,12,y,2);u+=(c-.5)*14+(h-.5)*6,p+=(c-.45)*12+(h-.5)*5,x+=(c-.5)*6,S=(h-.5)*.35+(c-.5)*.15}else if(r===W.scrub){const c=Lt(i,l,21,16),h=Math.max(0,1-c*1.6);u-=h*28,p-=h*18,x-=h*16,S=h*.8}else if(r===W.rock){const c=1-Math.abs(U(i/10,l/10,31,y,4)*2-1),h=c>.82?1:0;u-=h*40+c*12,p-=h*38+c*10,x-=h*34+c*8,S=c*.9-h*.7}else if(r===W.scree||r===W.gravel){const c=r===W.scree?18:9,h=Lt(i,l,r===W.scree?41:42,c),v=Math.max(0,1-h*1.35),b=Y(Math.floor(i/c),Math.floor(l/c),r+4);u+=(b-.5)*40+v*16,p+=(b-.5)*32+v*12,x+=(b-.5)*24+v*8,S=v*.85}else if(r===W.road){const c=Math.abs(i%32/32*2-1),h=U(i/14,l/8,51,y,2);u-=c*18+(h-.5)*10,p-=c*16,x-=c*12,S=-c*.25+(h-.5)*.1}else if(r===W.mud){const c=U(i/20,l/20,61,y,3);u-=c*30,p-=c*24,x-=c*16,S=(c-.5)*.12}else if(r===W.sand){const c=U(i/4.5,l/4.5,72,y,3),h=U(i/11,l/13,73,y,2);u+=(c-.5)*16+(h-.5)*10,p+=(c-.5)*12+(h-.5)*8,x+=(c-.5)*8,S=(c-.5)*.16}else{const c=(Math.floor(l/16)+Math.floor(i/64))%2===0?6:-4,h=U(i/6,l/6,81,y,2);u+=c-h*8,p+=c-h*8,x+=c-h*6,S=c*.01-h*.15}e[d*3]=j(u),e[d*3+1]=j(p),e[d*3+2]=j(x),a[d]=S}return{rgb:e,height:a}}function Ea(r,t,e){const a=t%ot,s=Math.floor(t/ot),f=a*N,o=s*N;for(let n=0;n<N;n++){const l=(n-H+y)%y;for(let i=0;i<N;i++){const d=(i-H+y)%y,u=((o+n)*$+(f+i))*4,p=(l*y+d)*3;r[u]=e.rgb[p],r[u+1]=e.rgb[p+1],r[u+2]=e.rgb[p+2],r[u+3]=255}}}function Na(){const r=new Uint8Array($*$*4),t=new Uint8Array($*$*4);t.fill(128);for(let e=3;e<t.length;e+=4)t[e]=255;for(let e=0;e<=W.concrete;e++){const a=za(e);Ea(r,e,a),Ia(t,e,a)}return{albedo:r,normal:t,size:$}}function Ia(r,t,e){const a=t%ot,s=Math.floor(t/ot),f=a*N,o=s*N,n=(l,i)=>{const d=(l+y)%y,u=(i+y)%y,p=e.height[u*y+(d-1+y)%y],x=e.height[u*y+(d+1)%y],S=e.height[(u-1+y)%y*y+d],c=e.height[(u+1)%y*y+d];let h=(p-x)*1.85,v=(S-c)*1.85,b=1;const M=Math.hypot(h,v,b)||1;return[h/M,v/M,b/M]};for(let l=0;l<N;l++){const i=l-H;for(let d=0;d<N;d++){const u=d-H,[p,x,S]=n(u,i),c=((o+l)*$+(f+d))*4,h=(u+y)%y,v=(i+y)%y,b=Math.max(0,Math.min(1,e.height[v*y+h]*.5+.5));r[c]=j(p*127+128),r[c+1]=j(x*127+128),r[c+2]=j(S*127+128),r[c+3]=j(b*255)}}}function st(r){const[t,e,a]=ee[r];return`vec3(${t.toFixed(3)}, ${e.toFixed(3)}, ${a.toFixed(3)})`}function Wa(){return`
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
  float t = clamp((${ut.toFixed(2)} - ny) / ${(ut-te).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
vec3 tfStrata(float tone) {
  vec3 c0 = ${st(0)};
  vec3 c1 = ${st(1)};
  vec3 c2 = ${st(2)};
  vec3 c3 = ${st(3)};
  vec3 c4 = ${st(4)};
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
  vec2 local = fract(uv) * ${y}.0 + ${H}.0;
  vec2 px = vec2(col, row) * ${N}.0 + local;
  return texture2D(tex, px / ${$}.0).rgb;
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
float tfAtlasH(sampler2D tex, float slot, vec2 uv) {
  float col = slot - 4.0 * floor(slot / 4.0);
  float row = floor(slot / 4.0);
  vec2 local = fract(uv) * ${y}.0 + ${H}.0;
  vec2 px = vec2(col, row) * ${N}.0 + local;
  return texture2D(tex, px / ${$}.0).a;
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
`}function $a(){return`
vec3 tfP = vPositionW;
vec2 tfXZ = tfP.xz;
vec2 tfWarp = vec2(tfNoise(tfXZ * 0.021) - 0.5, tfNoise(tfXZ * 0.021 + vec2(13.7, 4.2)) - 0.5) * 8.5;
tfWarp += vec2(tfNoise(tfXZ * 0.067 + vec2(3.1, 8.4)) - 0.5, tfNoise(tfXZ * 0.067 + vec2(1.2, 6.6)) - 0.5) * 2.4;
vec2 tfD = tfXZ + tfWarp;
vec2 tfJitter = vec2(tfNoise(tfXZ * 0.008) - 0.5, tfNoise(tfXZ * 0.008 + vec2(5.1, 9.4)) - 0.5) * ${ae.toFixed(1)};
vec2 tfSuv = vec2((tfXZ.x + tfJitter.x) / mapSize.x, (tfXZ.y + tfJitter.y) / mapSize.y);
vec2 tfRad = vec2(${dt.toFixed(1)} / mapSize.x, ${dt.toFixed(1)} / mapSize.y);
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
float tfSharp = clamp(0.5 + (tfHa - tfHb) * ${oe.toFixed(1)}, ${fe.toFixed(2)}, ${ne.toFixed(2)});
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
float tfH0 = clamp((tfP.y - tfParams.y) / max(tfParams.z - tfParams.y, 1.0), 0.0, 1.0);
float tfSlopeT = clamp((${se.toFixed(2)} - tfGeom0.y) / ${re.toFixed(2)}, 0.0, 1.0);
float tfSlope = tfSlopeT * tfSlopeT * (3.0 - 2.0 * tfSlopeT);
float tfPatch = tfNoise(tfXZ * 0.009);
float tfMottle = tfNoise(tfXZ * 0.013 + vec2(4.2, 9.1));
float tfDirt = clamp((tfPatch - 0.72) * 3.2, 0.0, 1.0) * (1.0 - tfSlope);
float tfSandP = clamp((0.38 - tfH0) * 2.6, 0.0, 1.0) * clamp((0.58 - tfMottle) * 2.2, 0.0, 1.0) * (1.0 - tfSlope);
float tfGrassKeep = tfGrass;
tfRock += tfSlope * (tfGrass + tfScrub) * 0.82;
tfGravel += tfSlope * tfSand * 0.4;
tfGrass *= 1.0 - tfSlope * 0.82;
tfScrub *= 1.0 - tfSlope * 0.7;
tfMud += tfDirt * tfGrassKeep * 0.22;
tfGrass *= 1.0 - tfDirt * 0.16;
tfSand += tfSandP * (tfGrass + tfScrub) * 0.75;
tfGrass *= 1.0 - tfSandP * 0.4;
tfScrub *= 1.0 - tfSandP * 0.25;
float tfSum3 = tfGrass + tfScrub + tfRock + tfScree + tfGravel + tfRoad + tfMud + tfSand + tfConcrete + 0.0001;
tfGrass /= tfSum3; tfScrub /= tfSum3; tfRock /= tfSum3; tfScree /= tfSum3;
tfGravel /= tfSum3; tfRoad /= tfSum3; tfMud /= tfSum3; tfSand /= tfSum3; tfConcrete /= tfSum3;
float tfTone = floor(tfS2.a * 4.0 + 0.5);
vec3 tfStrataCol = tfStrata(tfTone);
float tfBand = 0.62 + 0.38 * (0.5 + 0.5 * sin(tfP.y * 0.785398));
vec3 tfG = tfAtlas(detailSampler, 0.0, tfD * 0.17);
vec3 tfSc = tfAtlas(detailSampler, 1.0, tfD * 0.19);
vec3 tfR = tfAtlas(detailSampler, 2.0, tfD * 0.11) * mix(vec3(1.0), tfStrataCol, 0.62) * tfBand;
vec3 tfE = tfAtlas(detailSampler, 3.0, tfD * 0.30);
vec3 tfV = tfAtlas(detailSampler, 4.0, tfD * 0.24);
vec3 tfO = tfAtlas(detailSampler, 5.0, tfD * 0.09);
vec3 tfM = tfAtlas(detailSampler, 6.0, tfD * 0.13);
vec3 tfN = tfAtlas(detailSampler, 7.0, tfD * 0.21);
vec3 tfC = tfAtlas(detailSampler, 8.0, tfD * 0.11);
vec3 tfAlbedo = tfG * tfGrass + tfSc * tfScrub + tfR * tfRock + tfE * tfScree + tfV * tfGravel + tfO * tfRoad + tfM * tfMud + tfN * tfSand + tfC * tfConcrete;
vec3 tfGeom = normalize(normalW);
float tfCam = length(vEyePosition.xyz - tfP);
tfGeom = normalize(mix(tfGeom, vec3(0.0, 1.0, 0.0), clamp((tfCam - 70.0) / 380.0, 0.0, 0.42)));
float tfSteep = tfCliff(tfGeom.y);
vec3 tfTriR = tfTri(detailSampler, 2.0, tfP, tfGeom, 0.11) * mix(vec3(1.0), tfStrataCol, 0.55) * tfBand;
vec3 tfTriE = tfTri(detailSampler, 3.0, tfP, tfGeom, 0.30);
vec3 tfTriV = tfTri(detailSampler, 4.0, tfP, tfGeom, 0.24);
vec3 tfCliffCol = (tfTriR * tfRock + tfTriE * tfScree + tfTriV * tfGravel) / max(tfRock + tfScree + tfGravel, 0.0001);
float tfCliffW = clamp((tfRock + tfScree + tfGravel) * 1.35, 0.0, 1.0);
tfAlbedo = mix(tfAlbedo, tfCliffCol, tfSteep * tfCliffW);
float tfMacro = tfNoise(tfXZ * 0.006) * 0.65 + tfNoise(tfXZ * 0.018 + vec2(2.0, 7.0)) * 0.35;
tfAlbedo *= 0.96 + 0.08 * tfMacro;
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
vec3 tfTs = tfAtlas(detailNrmSampler, tfSlot, tfD * 0.17) * 2.0 - 1.0;
if (tfParams.w > 0.5) {
  vec3 tfHi = tfAtlas(detailNrmSampler, tfSlot, tfD * 0.46) * 2.0 - 1.0;
  tfTs = mix(tfTs, tfHi, 0.35);
}
vec3 tfTsTri = tfTri(detailNrmSampler, tfSlot, tfP, tfGeom, 0.17) * 2.0 - 1.0;
tfTs = normalize(mix(vec3(tfTs.x * 0.95, tfTs.y * 0.95, tfTs.z), vec3(tfTsTri.x * 0.95, tfTsTri.y * 0.95, tfTsTri.z), tfSteep));
vec3 tfUp = abs(tfGeom.y) > 0.96 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
vec3 tfT = normalize(cross(tfUp, tfGeom));
vec3 tfB = cross(tfGeom, tfT);
normalW = normalize(tfT * tfTs.x + tfB * tfTs.y + tfGeom * tfTs.z);
float tfH = clamp((tfP.y - tfParams.y) / max(tfParams.z - tfParams.y, 1.0), 0.0, 1.0);
float tfShore = 1.0 - smoothstep(tfParams.x, tfParams.x + 8.0, tfP.y);
float tfAo = (${ie.toFixed(2)} + ${le.toFixed(2)} * clamp(tfGeom0.y, 0.0, 1.0)) * (${ce.toFixed(2)} + ${me.toFixed(2)} * clamp(tfTs.z, 0.0, 1.0));
tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3(0.55, 0.66, 0.62), tfShore * (1.0 - tfSteep) * 0.85);
tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3(0.86, 0.90, 0.96), smoothstep(0.62, 0.95, tfH) * (1.0 - tfSteep));
tfAlbedo *= tfAo;
baseColor.rgb = clamp(tfAlbedo, 0.0, 1.0);
`}function La(){return`
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
  let t = clamp((${ut.toFixed(2)} - ny) / ${(ut-te).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
fn tfStrata(tone: f32) -> vec3f {
  var s = ${rt(0)};
  s = mix(s, ${rt(1)}, step(0.5, tone));
  s = mix(s, ${rt(2)}, step(1.5, tone));
  s = mix(s, ${rt(3)}, step(2.5, tone));
  s = mix(s, ${rt(4)}, step(3.5, tone));
  return s;
}
fn tfSplat(tex: texture_2d<f32>, samp: sampler, uv: vec2f, rad: vec2f) -> vec4f {
  return textureSampleBias(tex, samp, uv + rad * 0.15, 4.25);
}
fn tfAtlas(tex: texture_2d<f32>, samp: sampler, slot: f32, uv: vec2f) -> vec3f {
  let col = slot - 4.0 * floor(slot / 4.0);
  let row = floor(slot / 4.0);
  let local = fract(uv) * ${y}.0 + ${H}.0;
  let px = vec2f(col, row) * ${N}.0 + local;
  return textureSample(tex, samp, px / ${$}.0).rgb;
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
fn tfAtlasH(tex: texture_2d<f32>, samp: sampler, slot: f32, uv: vec2f) -> f32 {
  let col = slot - 4.0 * floor(slot / 4.0);
  let row = floor(slot / 4.0);
  let local = fract(uv) * ${y}.0 + ${H}.0;
  let px = vec2f(col, row) * ${N}.0 + local;
  return textureSample(tex, samp, px / ${$}.0).a;
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
`}function rt(r){const[t,e,a]=ee[r];return`vec3f(${t.toFixed(3)}, ${e.toFixed(3)}, ${a.toFixed(3)})`}function Va(){return`
let tfP = fragmentInputs.vPositionW;
let tfXZ = tfP.xz;
var tfWarp = vec2f(tfNoise(tfXZ * 0.021) - 0.5, tfNoise(tfXZ * 0.021 + vec2f(13.7, 4.2)) - 0.5) * 8.5;
tfWarp = tfWarp + vec2f(tfNoise(tfXZ * 0.067 + vec2f(3.1, 8.4)) - 0.5, tfNoise(tfXZ * 0.067 + vec2f(1.2, 6.6)) - 0.5) * 2.4;
let tfD = tfXZ + tfWarp;
let tfJitter = vec2f(tfNoise(tfXZ * 0.008) - 0.5, tfNoise(tfXZ * 0.008 + vec2f(5.1, 9.4)) - 0.5) * ${ae.toFixed(1)};
let tfSuv = vec2f((tfXZ.x + tfJitter.x) / uniforms.mapSize.x, (tfXZ.y + tfJitter.y) / uniforms.mapSize.y);
let tfRad = vec2f(${dt.toFixed(1)} / uniforms.mapSize.x, ${dt.toFixed(1)} / uniforms.mapSize.y);
let tfS0 = tfSplat(splat0Sampler, splat0SamplerSampler, tfSuv, tfRad);
let tfS1 = tfSplat(splat1Sampler, splat1SamplerSampler, tfSuv, tfRad);
let tfS2 = tfSplat(splat2Sampler, splat2SamplerSampler, tfSuv, tfRad);
let tfTracks = tfSplat(tracksSampler, tracksSamplerSampler, tfSuv, tfRad).r;
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
let tfSharp = clamp(0.5 + (tfHa - tfHb) * ${oe.toFixed(1)}, ${fe.toFixed(2)}, ${ne.toFixed(2)});
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
let tfH0 = clamp((tfP.y - uniforms.tfParams.y) / max(uniforms.tfParams.z - uniforms.tfParams.y, 1.0), 0.0, 1.0);
let tfSlopeT = clamp((${se.toFixed(2)} - tfGeom0.y) / ${re.toFixed(2)}, 0.0, 1.0);
let tfSlope = tfSlopeT * tfSlopeT * (3.0 - 2.0 * tfSlopeT);
let tfPatch = tfNoise(tfXZ * 0.009);
let tfMottle = tfNoise(tfXZ * 0.013 + vec2f(4.2, 9.1));
let tfDirt = clamp((tfPatch - 0.72) * 3.2, 0.0, 1.0) * (1.0 - tfSlope);
let tfSandP = clamp((0.38 - tfH0) * 2.6, 0.0, 1.0) * clamp((0.58 - tfMottle) * 2.2, 0.0, 1.0) * (1.0 - tfSlope);
let tfGrassKeep = tfGrass;
tfRock = tfRock + tfSlope * (tfGrass + tfScrub) * 0.82;
tfGravel = tfGravel + tfSlope * tfSand * 0.4;
tfGrass = tfGrass * (1.0 - tfSlope * 0.82);
tfScrub = tfScrub * (1.0 - tfSlope * 0.7);
tfMud = tfMud + tfDirt * tfGrassKeep * 0.22;
tfGrass = tfGrass * (1.0 - tfDirt * 0.16);
tfSand = tfSand + tfSandP * (tfGrass + tfScrub) * 0.75;
tfGrass = tfGrass * (1.0 - tfSandP * 0.4);
tfScrub = tfScrub * (1.0 - tfSandP * 0.25);
let tfSum3 = tfGrass + tfScrub + tfRock + tfScree + tfGravel + tfRoad + tfMud + tfSand + tfConcrete + 0.0001;
tfGrass = tfGrass / tfSum3; tfScrub = tfScrub / tfSum3; tfRock = tfRock / tfSum3; tfScree = tfScree / tfSum3;
tfGravel = tfGravel / tfSum3; tfRoad = tfRoad / tfSum3; tfMud = tfMud / tfSum3; tfSand = tfSand / tfSum3; tfConcrete = tfConcrete / tfSum3;
let tfTone = floor(tfS2.a * 4.0 + 0.5);
let tfStrataCol = tfStrata(tfTone);
let tfBand = 0.62 + 0.38 * (0.5 + 0.5 * sin(tfP.y * 0.785398));
let tfG = tfAtlas(detailSampler, detailSamplerSampler, 0.0, tfD * 0.17);
let tfSc = tfAtlas(detailSampler, detailSamplerSampler, 1.0, tfD * 0.19);
let tfR = tfAtlas(detailSampler, detailSamplerSampler, 2.0, tfD * 0.11) * mix(vec3f(1.0), tfStrataCol, 0.62) * tfBand;
let tfE = tfAtlas(detailSampler, detailSamplerSampler, 3.0, tfD * 0.30);
let tfV = tfAtlas(detailSampler, detailSamplerSampler, 4.0, tfD * 0.24);
let tfO = tfAtlas(detailSampler, detailSamplerSampler, 5.0, tfD * 0.09);
let tfM = tfAtlas(detailSampler, detailSamplerSampler, 6.0, tfD * 0.13);
let tfN = tfAtlas(detailSampler, detailSamplerSampler, 7.0, tfD * 0.21);
let tfC = tfAtlas(detailSampler, detailSamplerSampler, 8.0, tfD * 0.11);
var tfAlbedo = tfG * tfGrass + tfSc * tfScrub + tfR * tfRock + tfE * tfScree + tfV * tfGravel + tfO * tfRoad + tfM * tfMud + tfN * tfSand + tfC * tfConcrete;
let tfCam = length(scene.vEyePosition.xyz - tfP);
let tfGeom = normalize(mix(normalize(normalW), vec3f(0.0, 1.0, 0.0), clamp((tfCam - 70.0) / 380.0, 0.0, 0.28)));
let tfSteep = tfCliff(tfGeom.y);
let tfTriR = tfTri(detailSampler, detailSamplerSampler, 2.0, tfP, tfGeom, 0.11) * mix(vec3f(1.0), tfStrataCol, 0.55) * tfBand;
let tfTriE = tfTri(detailSampler, detailSamplerSampler, 3.0, tfP, tfGeom, 0.30);
let tfTriV = tfTri(detailSampler, detailSamplerSampler, 4.0, tfP, tfGeom, 0.24);
let tfCliffCol = (tfTriR * tfRock + tfTriE * tfScree + tfTriV * tfGravel) / max(tfRock + tfScree + tfGravel, 0.0001);
let tfCliffW = clamp((tfRock + tfScree + tfGravel) * 1.35, 0.0, 1.0);
tfAlbedo = mix(tfAlbedo, tfCliffCol, tfSteep * tfCliffW);
let tfMacro = tfNoise(tfXZ * 0.006) * 0.65 + tfNoise(tfXZ * 0.018 + vec2f(2.0, 7.0)) * 0.35;
tfAlbedo = tfAlbedo * (0.96 + 0.08 * tfMacro);
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
var tfTs0 = tfAtlas(detailNrmSampler, detailNrmSamplerSampler, tfSlot, tfD * 0.17) * 2.0 - 1.0;
if (uniforms.tfParams.w > 0.5) {
  let tfHi = tfAtlas(detailNrmSampler, detailNrmSamplerSampler, tfSlot, tfD * 0.46) * 2.0 - 1.0;
  tfTs0 = mix(tfTs0, tfHi, 0.35);
}
let tfTsTri = tfTri(detailNrmSampler, detailNrmSamplerSampler, tfSlot, tfP, tfGeom, 0.17) * 2.0 - 1.0;
let tfTs = normalize(mix(vec3f(tfTs0.x * 0.95, tfTs0.y * 0.95, tfTs0.z), vec3f(tfTsTri.x * 0.95, tfTsTri.y * 0.95, tfTsTri.z), tfSteep));
let tfUp = select(vec3f(0.0, 1.0, 0.0), vec3f(1.0, 0.0, 0.0), abs(tfGeom.y) > 0.96);
let tfT = normalize(cross(tfUp, tfGeom));
let tfB = cross(tfGeom, tfT);
normalW = normalize(tfT * tfTs.x + tfB * tfTs.y + tfGeom * tfTs.z);
let tfH = clamp((tfP.y - uniforms.tfParams.y) / max(uniforms.tfParams.z - uniforms.tfParams.y, 1.0), 0.0, 1.0);
let tfShore = 1.0 - smoothstep(uniforms.tfParams.x, uniforms.tfParams.x + 8.0, tfP.y);
let tfAo = (${ie.toFixed(2)} + ${le.toFixed(2)} * clamp(tfGeom0.y, 0.0, 1.0)) * (${ce.toFixed(2)} + ${me.toFixed(2)} * clamp(tfTs.z, 0.0, 1.0));
tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3f(0.55, 0.66, 0.62), tfShore * (1.0 - tfSteep) * 0.85);
tfAlbedo = mix(tfAlbedo, tfAlbedo * vec3f(0.86, 0.90, 0.96), smoothstep(0.62, 0.95, tfH) * (1.0 - tfSteep));
tfAlbedo = tfAlbedo * tfAo;
baseColor = vec4f(clamp(tfAlbedo, vec3f(0.0), vec3f(1.0)), baseColor.a);
`}function it(r,t,e,a,s){const f=Mt(Rt(t,e)),o=new L(f,r,!1,!1,L.TRILINEAR_SAMPLINGMODE,()=>a(),n=>{const l=typeof n=="string"?n:e;console.error(`Terrain texture failed: ${f}`,l),s(l)});return o.wrapU=L.CLAMP_ADDRESSMODE,o.wrapV=L.CLAMP_ADDRESSMODE,o.anisotropicFilteringLevel=1,o}class Ha extends Ut{mapW=1536;mapH=1024;splat0;splat1;splat2;tracks;detail;detailNrm;waterY=45;minY=0;maxY=120;detailScale=1;constructor(t,e){super(t,"TerrainSplat",200,{TERRAIN_SPLAT:!1},!0,!1),this.registerForExtraEvents=!0,this._enable(!0);const a=Na(),s=L.LINEAR_LINEAR;this.detail=wt.CreateRGBATexture(a.albedo,a.size,a.size,e,!1,!1,s),this.detailNrm=wt.CreateRGBATexture(a.normal,a.size,a.size,e,!1,!1,s),this.detail.wrapU=L.CLAMP_ADDRESSMODE,this.detail.wrapV=L.CLAMP_ADDRESSMODE,this.detailNrm.wrapU=L.CLAMP_ADDRESSMODE,this.detailNrm.wrapV=L.CLAMP_ADDRESSMODE,this.detail.anisotropicFilteringLevel=1,this.detailNrm.anisotropicFilteringLevel=1;const f=new Uint8Array(4*4*4);f.fill(128);const o=()=>wt.CreateRGBATexture(f,4,4,e,!1,!1,L.NEAREST_SAMPLINGMODE);this.splat0=o(),this.splat1=o(),this.splat2=o(),this.tracks=o(),this.detailScale=Tt()===zt.Low?0:1;const n=Zt(l=>{this.detailScale=l===zt.Low?0:1});t.onDisposeObservable.add(()=>n())}isCompatible(){return!0}getClassName(){return"TerrainSplatPlugin"}prepareDefines(t){t.TERRAIN_SPLAT||(t.TERRAIN_SPLAT=!0,t.markAsUnprocessed())}getSamplers(t){t.push("splat0Sampler","splat1Sampler","splat2Sampler","tracksSampler","detailSampler","detailNrmSampler")}getUniforms(t=Z.GLSL){return{ubo:[{name:"mapSize",size:2,type:"vec2"},{name:"tfParams",size:4,type:"vec4"}],fragment:t===Z.WGSL?void 0:`#ifdef TERRAIN_SPLAT
uniform vec2 mapSize;
uniform vec4 tfParams;
#endif
`}}bindForSubMesh(t){this.bindSplats(t)}hardBindForSubMesh(t){this.bindSplats(t)}bindSplats(t){t.updateFloat2("mapSize",this.mapW,this.mapH),t.updateFloat4("tfParams",this.waterY,this.minY,this.maxY,this.detailScale),t.setTexture("splat0Sampler",this.splat0),t.setTexture("splat1Sampler",this.splat1),t.setTexture("splat2Sampler",this.splat2),t.setTexture("tracksSampler",this.tracks),t.setTexture("detailSampler",this.detail),t.setTexture("detailNrmSampler",this.detailNrm)}getCustomCode(t,e=Z.GLSL){if(t!=="fragment")return null;const a=e===Z.WGSL;return{CUSTOM_FRAGMENT_DEFINITIONS:a?La():Wa(),CUSTOM_FRAGMENT_UPDATE_DIFFUSE:a?Va():$a()}}}function Ua(r,t,e,a="twin-ridges"){const s=new X("terrain",r);s.diffuseColor.set(1,1,1),s.specularColor.set(.04,.04,.035),s.specularPower=24;const f=new Ha(s,r);f.mapW=t,f.mapH=e,s.onError=(n,l)=>{console.error(l),document.documentElement.dataset.terrain="shader-error"};const o=new Promise(n=>{let l=4;const i=()=>{l-=1,l===0&&n()},d=u=>{console.error("terrain map texture",u),document.documentElement.dataset.terrain="texture-error",i()};f.splat0=it(r,a,"splat_0_grass_scrub_rock_scree.png",i,d),f.splat1=it(r,a,"splat_1_gravel_road_mud_sand.png",i,d),f.splat2=it(r,a,"splat_2_water_concrete_wetness_strata.png",i,d),f.tracks=it(r,a,"tracks_mask.png",i,d)});return{material:s,ready:o,setRelief(n,l,i){f.minY=n,f.maxY=Math.max(n+1,l),f.waterY=i}}}function V(r,t,e){let a=Math.imul(r,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return a=Math.imul(a^a>>>13,1274126177),((a^a>>>16)>>>0)/4294967296}function Vt(r){return new Promise((t,e)=>{const a=new Image;a.onload=()=>t(a),a.onerror=()=>e(new Error(r)),a.src=r})}function kt(r,t,e){const a=new X(`${t}-mat`,r);return a.diffuseColor=e,a.specularColor=new k(.04,.04,.03),a}function Gt(r,t){return r.material=t,r.isPickable=!1,r.alwaysSelectAsActiveMesh=!0,r.receiveShadows=!0,r}function Za(r,t,e){const a=E.CreateIcoSphere(t,{radius:.55,subdivisions:1,flat:!1},r);return a.position.y=.45,a.scaling.set(1.15,.7,1.15),a.bakeCurrentTransformIntoVertices(),a.position.set(0,0,0),a.scaling.set(1,1,1),Gt(a,kt(r,t,e))}function Xa(r,t,e){const a=kt(r,t,e),s=E.CreateCylinder(`${t}-trunk`,{diameter:.22,height:1.2,tessellation:6},r);s.position.y=.6,s.material=a;const f=E.CreateIcoSphere(`${t}-crown`,{radius:.78,subdivisions:1},r);f.position.y=1.45,f.scaling.set(1.05,.72,1.05),f.material=a;const o=J.MergeMeshes([s,f],!0,!0,void 0,!1,!0),n=o??f;return o||s.dispose(),n.position.set(0,0,0),Gt(n,a)}function Ya(r,t,e){const a=E.CreateIcoSphere(t,{radius:.7,subdivisions:1,flat:!0},r);return a.scaling.set(1.2,.55,.9),a.bakeCurrentTransformIntoVertices(),a.position.set(0,.15,0),a.bakeCurrentTransformIntoVertices(),a.position.set(0,0,0),a.scaling.set(1,1,1),Gt(a,kt(r,t,e))}async function ja(r,t,e,a,s,f,o="twin-ridges"){const n=Ga(Tt()),l=Mt(Rt(o,"vegetation_canopy_height_dm.png")),i=await Vt(l).catch(T=>{throw console.error(`Terrain canopy missing: ${l}`,T),T}),d=document.createElement("canvas");d.width=i.width,d.height=i.height;const u=d.getContext("2d",{willReadFrequently:!0});if(!u)return;u.drawImage(i,0,0);const p=u.getImageData(0,0,i.width,i.height).data,x=await Vt(Mt(Rt(o,"splat_0_grass_scrub_rock_scree.png"))).catch(()=>null);let S=null,c=1,h=1;if(x){const T=document.createElement("canvas");T.width=x.width,T.height=x.height;const F=T.getContext("2d",{willReadFrequently:!0});F&&(F.drawImage(x,0,0),S=F.getImageData(0,0,x.width,x.height).data,c=x.width,h=x.height)}const v=Za(r,"shrub",new k(.34,.4,.22)),b=Xa(r,"tree",new k(.18,.28,.14)),M=Ya(r,"rock",new k(.48,.44,.38)),w=[],m=[],A=[],G=new z,P=new gt,g=new z,_=new lt,O=n.step;for(let T=0;T<i.height;T+=O)for(let F=0;F<i.width;F+=O){const pt=p[(T*i.width+F)*4],ue=(V(F,T,2)-.5)*O*.7,de=(V(F,T,4)-.5)*O*.7,St=Math.max(0,Math.min(e*s-.01,F+.5+ue)),xt=Math.max(0,Math.min(a*s-.01,T+.5+de)),vt=jt(t,e,a,s,St,xt);if(vt<f+.4)continue;const he=Math.max(0,Math.min(c-1,Math.floor(F/i.width*c))),pe=Math.max(0,Math.min(h-1,Math.floor(T/i.height*h))),Se=S?S[(pe*c+he)*4+2]:0,tt=pt/10>=2.6;if(pt>=6){const et=tt?m:w,ft=tt?n.trees:n.shrubs;if(et.length/16>=ft)continue;const Ot=pt/10,bt=tt?.85+Ot*.22:.45+Ot*.55;G.set(bt*(.85+V(F,T,6)*.3),bt*(tt?1.05:.75),bt*(.85+V(F,T,8)*.3))}else if(Se>150&&V(F,T,3)>.72&&A.length/16<n.rocks){const et=.7+V(F,T,5)*1.4;G.set(et,et*(.7+V(F,T,7)*.5),et),gt.RotationAxisToRef(z.Up(),V(F,T,9)*Math.PI*2,P),g.set(St,vt,xt),lt.ComposeToRef(G,P,g,_);const ft=A.length;A.length=ft+16,_.copyToArray(A,ft);continue}else continue;gt.RotationAxisToRef(z.Up(),V(F,T,9)*Math.PI*2,P),g.set(St,vt,xt),lt.ComposeToRef(G,P,g,_);const At=tt?m:w,Dt=At.length;At.length=Dt+16,_.copyToArray(At,Dt)}const R=(T,F)=>{F.length?T.thinInstanceSetBuffer("matrix",new Float32Array(F),16,!0):T.setEnabled(!1)};R(v,w),R(b,m),R(M,A)}class qa extends Ut{constructor(t){super(t,"FieldWater",210,{FIELD_WATER:!1},!0,!1),this.registerForExtraEvents=!0,this._enable(!0)}isCompatible(){return!0}getClassName(){return"FieldWater"}prepareDefines(t){t.FIELD_WATER||(t.FIELD_WATER=!0,t.markAsUnprocessed())}getUniforms(t=Z.GLSL){return{ubo:[{name:"waterTime",size:1,type:"float"}],fragment:t===Z.WGSL?void 0:`#ifdef FIELD_WATER
uniform float waterTime;
#endif
`}}bindForSubMesh(t){t.updateFloat("waterTime",(typeof performance<"u"?performance.now():0)*.001)}hardBindForSubMesh(t){this.bindForSubMesh(t)}getCustomCode(t,e=Z.GLSL){return t!=="fragment"?null:e===Z.WGSL?{CUSTOM_FRAGMENT_DEFINITIONS:ts(),CUSTOM_FRAGMENT_UPDATE_DIFFUSE:es(),CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR:as()}:{CUSTOM_FRAGMENT_DEFINITIONS:Ka(),CUSTOM_FRAGMENT_UPDATE_DIFFUSE:Qa(),CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR:Ja()}}}function Ka(){return`
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
`}function Qa(){return`
vec2 wfUv = vPositionW.xz * 0.045;
float wfA = wfNoise(wfUv + vec2(waterTime * 0.02, waterTime * 0.011));
float wfB = wfNoise(wfUv * 2.2 + vec2(-waterTime * 0.015, waterTime * 0.018));
float wfWave = wfA * 0.65 + wfB * 0.35;
vec3 wfN = normalize(vec3((wfA - wfB) * 0.38, 1.0, (wfB - wfA) * 0.3));
normalW = normalize(mix(normalW, wfN, 0.85));
vec3 wfDeep = vec3(0.04, 0.14, 0.13);
vec3 wfShallow = vec3(0.22, 0.38, 0.32);
baseColor.rgb = mix(wfDeep, wfShallow, wfWave);
`}function Ja(){return`
float wfFacing = clamp(dot(normalize(viewDirectionW), normalW), 0.0, 1.0);
float wfFres = pow(1.0 - wfFacing, 4.0);
color.a = 0.42 + wfFres * 0.40;
color.rgb = mix(color.rgb, vec3(0.78, 0.86, 0.82), wfFres * 0.45);
`}function ts(){return`
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
`}function es(){return`
let wfUv = fragmentInputs.vPositionW.xz * 0.045;
let wfA = wfNoise(wfUv + vec2f(uniforms.waterTime * 0.02, uniforms.waterTime * 0.011));
let wfB = wfNoise(wfUv * 2.2 + vec2f(-uniforms.waterTime * 0.015, uniforms.waterTime * 0.018));
let wfWave = wfA * 0.65 + wfB * 0.35;
let wfN = normalize(vec3f((wfA - wfB) * 0.38, 1.0, (wfB - wfA) * 0.3));
normalW = normalize(mix(normalW, wfN, 0.85));
let wfDeep = vec3f(0.04, 0.14, 0.13);
let wfShallow = vec3f(0.22, 0.38, 0.32);
baseColor = vec4f(mix(wfDeep, wfShallow, wfWave), baseColor.a);
`}function as(){return`
let wfFacing = clamp(dot(normalize(viewDirectionW), normalW), 0.0, 1.0);
let wfFres = pow(1.0 - wfFacing, 4.0);
color = vec4f(mix(color.rgb, vec3f(0.78, 0.86, 0.82), wfFres * 0.45), 0.42 + wfFres * 0.40);
`}function xs(r){const t=new X("water",r);return t.diffuseColor=new k(.16,.28,.24),t.specularColor=new k(.55,.62,.58),t.specularPower=96,t.alpha=.62,t.transparencyMode=je.MATERIAL_ALPHABLEND,t.backFaceCulling=!1,t.disableDepthWrite=!0,new qa(t),t}function vs(r,t,e,a,s,f,o,n,l="twin-ridges"){const i=_a(t,e,a,s),d=new J("terrain",r),u=new q;u.positions=i.positions,u.indices=i.indices;const p=new Float32Array(i.positions.length);q.ComputeNormals(i.positions,i.indices,p),u.normals=p,u.applyToMesh(d),d.useVertexColors=!1,d.alwaysSelectAsActiveMesh=!0;const x=Ua(r,f,o,l);x.setRelief(i.minY,i.maxY,n);const{material:S,ready:c}=x;d.material=S,document.documentElement.dataset.relief=`${i.minY.toFixed(1)}..${i.maxY.toFixed(1)}`,document.documentElement.dataset.terrain="loading";const h=c.then(()=>ja(r,t,e,a,s,n,l)).then(()=>{const v=document.documentElement.dataset.terrain;v!=="shader-error"&&v!=="texture-error"&&(document.documentElement.dataset.terrain="ready")}).catch(v=>{console.error(v),document.documentElement.dataset.terrain="error"});return{mesh:d,ready:h}}export{ia as E,E as M,ee as S,ns as a,Bt as b,ps as c,vs as d,Ta as e,Ss as f,ct as g,jt as h,Da as i,fs as j,us as k,ds as l,ls as m,is as n,ms as o,hs as p,cs as q,Jt as s,xs as w};
