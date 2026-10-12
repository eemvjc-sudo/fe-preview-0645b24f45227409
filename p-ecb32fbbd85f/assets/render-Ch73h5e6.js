import{f as R,V as G,a1 as M,a2 as Rt,a3 as dt,a4 as Tt,a5 as Et,a6 as nt,C as Pt,a7 as X,a8 as It,a9 as Vt,aa as kt,ab as Nt,ac as Lt,ad as Zt,ae as $t,af as Ut,ag as Xt,ah as Wt,ai as jt,aj as Ht,ak as Yt,al as qt,am as Kt,an as Qt,ao as Jt,ap as te,aq as ee,ar as se,as as ae,at as re,au as oe,av as ne,aw as ie,ax as fe,ay as le,az as j,j as F,M as lt,aA as pt,aB as ce,aC as k,aD as ft,aE as tt,aF as St}from"./nativeXRFrame-Bm-laCUc.js";import{_ as he,p as wt}from"./index-MH8R0r3a.js";import{_ as xt}from"./__vite-browser-external-BpWMcTFF.js";class w{constructor(t=0,e=0){this.x=t,this.y=e,t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("x is not an integer, floor(x) used")),e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("y is not an integer, floor(y) used"))}clone(){return new w(this.x,this.y)}rotate60About(t){const e=this.x;return this.x=t.x+t.y-this.y,this.y=e+this.y-t.x,this}rotateNeg60About(t){const e=this.x;return this.x=e+this.y-t.y,this.y=t.x+t.y-e,this}rotate120(t,e){t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("m not an integer only floor(m) used")),e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("n not an integer only floor(n) used"));const s=this.x;return this.x=t-s-this.y,this.y=e+s,this}rotateNeg120(t,e){t!==Math.floor(t)&&(t=Math.floor(t),R.Warn("m is not an integer, floor(m) used")),e!==Math.floor(e)&&(e=Math.floor(e),R.Warn("n is not an integer,   floor(n) used"));const s=this.x;return this.x=this.y-e,this.y=t+e-s-this.y,this}toCartesianOrigin(t,e){const s=G.Zero();return s.x=t.x+2*this.x*e+this.y*e,s.y=t.y+Math.sqrt(3)*this.y*e,s}static Zero(){return new w(0,0)}}class Mt{constructor(){this.cartesian=[],this.vertices=[],this.max=[],this.min=[],this.closestTo=[],this.innerFacets=[],this.isoVecsABOB=[],this.isoVecsOBOA=[],this.isoVecsBAOA=[],this.vertexTypes=[],this.IDATA=new ct("icosahedron","Regular",[[0,M,-1],[-M,1,0],[-1,0,-M],[1,0,-M],[M,1,0],[0,M,1],[-1,0,M],[-M,-1,0],[0,-M,-1],[M,-1,0],[1,0,M],[0,-M,1]],[[0,2,1],[0,3,2],[0,4,3],[0,5,4],[0,1,5],[7,6,1],[8,7,2],[9,8,3],[10,9,4],[6,10,5],[2,7,1],[3,8,2],[4,9,3],[5,10,4],[1,6,5],[11,6,7],[11,7,8],[11,8,9],[11,9,10],[11,10,6]])}setIndices(){let t=12;const e={},s=this.m,a=this.n;let n=s,r=1,l=0;a!==0&&(n=dt(s,a)),r=s/n,l=a/n;let i,f,m,d,u;const x=w.Zero(),S=new w(s,a),c=new w(-a,s+a),p=w.Zero(),v=w.Zero(),y=w.Zero();let b=[],g,h,A,O;const z=[],C=this.vertByDist,_=(D,T,V,H)=>{g=D+"|"+V,h=T+"|"+H,g in e||h in e?g in e&&!(h in e)?e[h]=e[g]:h in e&&!(g in e)&&(e[g]=e[h]):(e[g]=t,e[h]=t,t++),C[V][0]>2?z[e[g]]=[-C[V][0],C[V][1],e[g]]:z[e[g]]=[b[C[V][0]],C[V][1],e[g]]};this.IDATA.edgematch=[[1,"B"],[2,"B"],[3,"B"],[4,"B"],[0,"B"],[10,"O",14,"A"],[11,"O",10,"A"],[12,"O",11,"A"],[13,"O",12,"A"],[14,"O",13,"A"],[0,"O"],[1,"O"],[2,"O"],[3,"O"],[4,"O"],[19,"B",5,"A"],[15,"B",6,"A"],[16,"B",7,"A"],[17,"B",8,"A"],[18,"B",9,"A"]];for(let D=0;D<20;D++){if(b=this.IDATA.face[D],m=b[2],d=b[1],u=b[0],A=x.x+"|"+x.y,g=D+"|"+A,g in e||(e[g]=m,z[m]=[b[C[A][0]],C[A][1]]),A=S.x+"|"+S.y,g=D+"|"+A,g in e||(e[g]=d,z[d]=[b[C[A][0]],C[A][1]]),A=c.x+"|"+c.y,g=D+"|"+A,g in e||(e[g]=u,z[u]=[b[C[A][0]],C[A][1]]),i=this.IDATA.edgematch[D][0],f=this.IDATA.edgematch[D][1],f==="B")for(let T=1;T<n;T++)v.x=s-T*(r+l),v.y=a+T*r,y.x=-T*l,y.y=T*(r+l),A=v.x+"|"+v.y,O=y.x+"|"+y.y,_(D,i,A,O);if(f==="O")for(let T=1;T<n;T++)y.x=-T*l,y.y=T*(r+l),p.x=T*r,p.y=T*l,A=y.x+"|"+y.y,O=p.x+"|"+p.y,_(D,i,A,O);if(i=this.IDATA.edgematch[D][2],f=this.IDATA.edgematch[D][3],f&&f==="A")for(let T=1;T<n;T++)p.x=T*r,p.y=T*l,v.x=s-(n-T)*(r+l),v.y=a+(n-T)*r,A=p.x+"|"+p.y,O=v.x+"|"+v.y,_(D,i,A,O);for(let T=0;T<this.vertices.length;T++)A=this.vertices[T].x+"|"+this.vertices[T].y,g=D+"|"+A,g in e||(e[g]=t++,C[A][0]>2?z[e[g]]=[-C[A][0],C[A][1],e[g]]:z[e[g]]=[b[C[A][0]],C[A][1],e[g]])}this.closestTo=z,this.vecToidx=e}calcCoeffs(){const t=this.m,e=this.n,s=Math.sqrt(3)/3,a=t*t+e*e+t*e;this.coau=(t+e)/a,this.cobu=-e/a,this.coav=-s*(t-e)/a,this.cobv=s*(2*t+e)/a}createInnerFacets(){const t=this.m,e=this.n;for(let s=0;s<e+t+1;s++)for(let a=this.min[s];a<this.max[s]+1;a++)a<this.max[s]&&a<this.max[s+1]+1&&this.innerFacets.push(["|"+a+"|"+s,"|"+a+"|"+(s+1),"|"+(a+1)+"|"+s]),s>0&&a<this.max[s-1]&&a+1<this.max[s]+1&&this.innerFacets.push(["|"+a+"|"+s,"|"+(a+1)+"|"+s,"|"+(a+1)+"|"+(s-1)])}edgeVecsABOB(){const t=this.m,e=this.n,s=new w(-e,t+e);for(let a=1;a<t+e;a++){const n=new w(this.min[a],a),r=new w(this.min[a-1],a-1),l=new w(this.min[a+1],a+1),i=n.clone(),f=r.clone(),m=l.clone();i.rotate60About(s),f.rotate60About(s),m.rotate60About(s);const d=new w(this.max[i.y],i.y),u=new w(this.max[i.y-1],i.y-1),x=new w(this.max[i.y-1]-1,i.y-1);(i.x!==d.x||i.y!==d.y)&&(i.x!==u.x?(this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([n,u,x]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([n,x,d])):i.y===m.y?(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([n,r,u]),this.vertexTypes.push([1,0,1]),this.isoVecsABOB.push([n,u,l])):(this.vertexTypes.push([1,1,0]),this.isoVecsABOB.push([n,r,u]),this.vertexTypes.push([1,0,0]),this.isoVecsABOB.push([n,u,d])))}}mapABOBtoOBOA(){const t=new w(0,0);for(let e=0;e<this.isoVecsABOB.length;e++){const s=[];for(let a=0;a<3;a++)t.x=this.isoVecsABOB[e][a].x,t.y=this.isoVecsABOB[e][a].y,this.vertexTypes[e][a]===0&&t.rotateNeg120(this.m,this.n),s.push(t.clone());this.isoVecsOBOA.push(s)}}mapABOBtoBAOA(){const t=new w(0,0);for(let e=0;e<this.isoVecsABOB.length;e++){const s=[];for(let a=0;a<3;a++)t.x=this.isoVecsABOB[e][a].x,t.y=this.isoVecsABOB[e][a].y,this.vertexTypes[e][a]===1&&t.rotate120(this.m,this.n),s.push(t.clone());this.isoVecsBAOA.push(s)}}MapToFace(t,e){const s=this.IDATA.face[t],a=s[2],n=s[1],r=s[0],l=G.FromArray(this.IDATA.vertex[a]),i=G.FromArray(this.IDATA.vertex[n]),f=G.FromArray(this.IDATA.vertex[r]),m=i.subtract(l),d=f.subtract(l),u=m.scale(this.coau).add(d.scale(this.cobu)),x=m.scale(this.coav).add(d.scale(this.cobv));let S,c=Rt.Vector3[0];for(let p=0;p<this.cartesian.length;p++)c=u.scale(this.cartesian[p].x).add(x.scale(this.cartesian[p].y)).add(l),c.x,c.y,c.z,S=t+"|"+this.vertices[p].x+"|"+this.vertices[p].y,e.vertex[this.vecToidx[S]]=[c.x,c.y,c.z]}build(t,e){const s=[],a=w.Zero(),n=new w(t,e),r=new w(-e,t+e);s.push(a,n,r);for(let h=e;h<t+1;h++)for(let A=0;A<t+1-h;A++)s.push(new w(A,h));if(e>0){const h=dt(t,e),A=t/h,O=e/h;for(let C=1;C<h;C++)s.push(new w(C*A,C*O)),s.push(new w(-C*O,C*(A+O))),s.push(new w(t-C*(A+O),e+C*A));const z=t/e;for(let C=1;C<e;C++)for(let _=0;_<C*z;_++)s.push(new w(_,C)),s.push(new w(_,C).rotate120(t,e)),s.push(new w(_,C).rotateNeg120(t,e))}s.sort((h,A)=>h.x-A.x),s.sort((h,A)=>h.y-A.y);const l=new Array(t+e+1),i=new Array(t+e+1);for(let h=0;h<l.length;h++)l[h]=1/0,i[h]=-1/0;let f=0,m=0;const d=s.length;for(let h=0;h<d;h++)m=s[h].x,f=s[h].y,l[f]=Math.min(m,l[f]),i[f]=Math.max(m,i[f]);const u=(h,A)=>{const O=h.clone();return A==="A"&&O.rotateNeg120(t,e),A==="B"&&O.rotate120(t,e),O.x<0?O.y:O.x+O.y},x=[],S=[],c=[],p=[],v={},y=[];let b=-1,g=-1;for(let h=0;h<d;h++)x[h]=s[h].toCartesianOrigin(new w(0,0),.5),S[h]=u(s[h],"O"),c[h]=u(s[h],"A"),p[h]=u(s[h],"B"),S[h]===c[h]&&c[h]===p[h]?(b=3,g=S[h]):S[h]===c[h]?(b=4,g=S[h]):c[h]===p[h]?(b=5,g=c[h]):p[h]===S[h]&&(b=6,g=S[h]),S[h]<c[h]&&S[h]<p[h]&&(b=2,g=S[h]),c[h]<S[h]&&c[h]<p[h]&&(b=1,g=c[h]),p[h]<c[h]&&p[h]<S[h]&&(b=0,g=p[h]),y.push([b,g,s[h].x,s[h].y]);y.sort((h,A)=>h[2]-A[2]),y.sort((h,A)=>h[3]-A[3]),y.sort((h,A)=>h[1]-A[1]),y.sort((h,A)=>h[0]-A[0]);for(let h=0;h<y.length;h++)v[y[h][2]+"|"+y[h][3]]=[y[h][0],y[h][1],h];return this.m=t,this.n=e,this.vertices=s,this.vertByDist=v,this.cartesian=x,this.min=l,this.max=i,this}}class ct{constructor(t,e,s,a){this.name=t,this.category=e,this.vertex=s,this.face=a}}class it extends ct{innerToData(t,e){for(let s=0;s<e.innerFacets.length;s++)this.face.push(e.innerFacets[s].map(a=>e.vecToidx[t+a]))}mapABOBtoDATA(t,e){const s=e.IDATA.edgematch[t][0];for(let a=0;a<e.isoVecsABOB.length;a++){const n=[];for(let r=0;r<3;r++)e.vertexTypes[a][r]===0?n.push(t+"|"+e.isoVecsABOB[a][r].x+"|"+e.isoVecsABOB[a][r].y):n.push(s+"|"+e.isoVecsABOB[a][r].x+"|"+e.isoVecsABOB[a][r].y);this.face.push([e.vecToidx[n[0]],e.vecToidx[n[1]],e.vecToidx[n[2]]])}}mapOBOAtoDATA(t,e){const s=e.IDATA.edgematch[t][0];for(let a=0;a<e.isoVecsOBOA.length;a++){const n=[];for(let r=0;r<3;r++)e.vertexTypes[a][r]===1?n.push(t+"|"+e.isoVecsOBOA[a][r].x+"|"+e.isoVecsOBOA[a][r].y):n.push(s+"|"+e.isoVecsOBOA[a][r].x+"|"+e.isoVecsOBOA[a][r].y);this.face.push([e.vecToidx[n[0]],e.vecToidx[n[1]],e.vecToidx[n[2]]])}}mapBAOAtoDATA(t,e){const s=e.IDATA.edgematch[t][2];for(let a=0;a<e.isoVecsBAOA.length;a++){const n=[];for(let r=0;r<3;r++)e.vertexTypes[a][r]===1?n.push(t+"|"+e.isoVecsBAOA[a][r].x+"|"+e.isoVecsBAOA[a][r].y):n.push(s+"|"+e.isoVecsBAOA[a][r].x+"|"+e.isoVecsBAOA[a][r].y);this.face.push([e.vecToidx[n[0]],e.vecToidx[n[1]],e.vecToidx[n[2]]])}}orderData(t){const e=[];for(let r=0;r<13;r++)e[r]=[];const s=t.closestTo;for(let r=0;r<s.length;r++)s[r][0]>-1?s[r][1]>0&&e[s[r][0]].push([r,s[r][1]]):e[12].push([r,s[r][0]]);const a=[];for(let r=0;r<12;r++)a[r]=r;let n=12;for(let r=0;r<12;r++){e[r].sort((l,i)=>l[1]-i[1]);for(let l=0;l<e[r].length;l++)a[e[r][l][0]]=n++}for(let r=0;r<e[12].length;r++)a[e[12][r][0]]=n++;for(let r=0;r<this.vertex.length;r++)this.vertex[r].push(a[r]);this.vertex.sort((r,l)=>r[3]-l[3]);for(let r=0;r<this.vertex.length;r++)this.vertex[r].pop();for(let r=0;r<this.face.length;r++)for(let l=0;l<this.face[r].length;l++)this.face[r][l]=a[this.face[r][l]];this.sharedNodes=e[12].length,this.poleNodes=this.vertex.length-this.sharedNodes}setOrder(t,e){const s=[],a=[];let n=e.pop();a.push(n);let r=this.face[n].indexOf(t);r=(r+2)%3;let l=this.face[n][r];s.push(l);let i=0;for(;e.length>0;)n=e[i],this.face[n].indexOf(l)>-1?(r=(this.face[n].indexOf(l)+1)%3,l=this.face[n][r],s.push(l),a.push(n),e.splice(i,1),i=0):i++;return this.adjacentFaces.push(s),a}toGoldbergPolyhedronData(){const t=new ct("GeoDual","Goldberg",[],[]);t.name="GD dual";const e=this.vertex.length,s=new Array(e);for(let f=0;f<e;f++)s[f]=[];for(let f=0;f<this.face.length;f++)for(let m=0;m<3;m++)s[this.face[f][m]].push(f);let a=0,n=0,r=0,l=[],i=[];this.adjacentFaces=[];for(let f=0;f<s.length;f++)t.face[f]=this.setOrder(f,s[f].concat([])),s[f].forEach(m=>{a=0,n=0,r=0,l=this.face[m];for(let d=0;d<3;d++)i=this.vertex[l[d]],a+=i[0],n+=i[1],r+=i[2];t.vertex[m]=[a/3,n/3,r/3]});return t}static BuildGeodesicData(t){const e=new it("Geodesic-m-n","Geodesic",[[0,M,-1],[-M,1,0],[-1,0,-M],[1,0,-M],[M,1,0],[0,M,1],[-1,0,M],[-M,-1,0],[0,-M,-1],[M,-1,0],[1,0,M],[0,-M,1]],[]);t.setIndices(),t.calcCoeffs(),t.createInnerFacets(),t.edgeVecsABOB(),t.mapABOBtoOBOA(),t.mapABOBtoBAOA();for(let a=0;a<t.IDATA.face.length;a++)t.MapToFace(a,e),e.innerToData(a,t),t.IDATA.edgematch[a][1]==="B"&&e.mapABOBtoDATA(a,t),t.IDATA.edgematch[a][1]==="O"&&e.mapOBOAtoDATA(a,t),t.IDATA.edgematch[a][3]==="A"&&e.mapBAOAtoDATA(a,t);e.orderData(t);const s=1;return e.vertex=e.vertex.map(function(a){const n=a[0],r=a[1],l=a[2],i=Math.sqrt(n*n+r*r+l*l);return a[0]*=s/i,a[1]*=s/i,a[2]*=s/i,a}),e}}function me(o,t,e=null){let s=t.m||1;s!==Math.floor(s)&&(s=Math.floor(s),R.Warn("m not an integer only floor(m) used"));let a=t.n||0;if(a!==Math.floor(a)&&(a=Math.floor(a),R.Warn("n not an integer only floor(n) used")),a>s){const f=a;a=s,s=f,R.Warn("n > m therefore m and n swapped")}const n=new Mt;n.build(s,a);const l={custom:it.BuildGeodesicData(n),size:t.size,sizeX:t.sizeX,sizeY:t.sizeY,sizeZ:t.sizeZ,faceUV:t.faceUV,faceColors:t.faceColors,flat:t.flat,updatable:t.updatable,sideOrientation:t.sideOrientation,frontUVs:t.frontUVs,backUVs:t.backUVs};return Tt(o,l,e)}function ue(o,t){const e=o.size,s=o.sizeX||e||1,a=o.sizeY||e||1,n=o.sizeZ||e||1,r=o.sideOrientation===0?0:o.sideOrientation||X.DEFAULTSIDE,l=[],i=[],f=[],m=[];let d=1/0,u=-1/0,x=1/0,S=-1/0;for(let v=0;v<t.vertex.length;v++)d=Math.min(d,t.vertex[v][0]*s),u=Math.max(u,t.vertex[v][0]*s),x=Math.min(x,t.vertex[v][1]*a),S=Math.max(S,t.vertex[v][1]*a);let c=0;for(let v=0;v<t.face.length;v++){const y=t.face[v],b=G.FromArray(t.vertex[y[0]]),g=G.FromArray(t.vertex[y[2]]),h=G.FromArray(t.vertex[y[1]]),A=g.subtract(b),O=h.subtract(b),z=G.Cross(O,A).normalize();for(let C=0;C<y.length;C++){f.push(z.x,z.y,z.z);const _=t.vertex[y[C]];l.push(_[0]*s,_[1]*a,_[2]*n);const D=(_[1]*a-x)/(S-x);m.push((_[0]*s-d)/(u-d),D)}for(let C=0;C<y.length-2;C++)i.push(c,c+C+2,c+C+1);c+=y.length}X._ComputeSides(r,l,i,f,m);const p=new X;return p.positions=l,p.indices=i,p.normals=f,p.uvs=m,p}function de(o,t,e=null){const s=t.size,a=t.sizeX||s||1,n=t.sizeY||s||1,r=t.sizeZ||s||1;let l=t.m||1;l!==Math.floor(l)&&(l=Math.floor(l),R.Warn("m not an integer only floor(m) used"));let i=t.n||0;if(i!==Math.floor(i)&&(i=Math.floor(i),R.Warn("n not an integer only floor(n) used")),i>l){const S=i;i=l,l=S,R.Warn("n > m therefore m and n swapped")}const f=new Mt;f.build(l,i);const m=it.BuildGeodesicData(f),d=m.toGoldbergPolyhedronData(),u=new Et(o,e);t.sideOrientation=nt._GetDefaultSideOrientation(t.sideOrientation),u._originalBuilderSideOrientation=t.sideOrientation,ue(t,d).applyToMesh(u,t.updatable),u.goldbergData.nbSharedFaces=m.sharedNodes,u.goldbergData.nbUnsharedFaces=m.poleNodes,u.goldbergData.adjacentFaces=m.adjacentFaces,u.goldbergData.nbFaces=u.goldbergData.nbSharedFaces+u.goldbergData.nbUnsharedFaces,u.goldbergData.nbFacesAtPole=(u.goldbergData.nbUnsharedFaces-12)/12;for(let S=0;S<m.vertex.length;S++)u.goldbergData.faceCenters.push(G.FromArray(m.vertex[S])),u.goldbergData.faceCenters[S].x*=a,u.goldbergData.faceCenters[S].y*=n,u.goldbergData.faceCenters[S].z*=r,u.goldbergData.faceColors.push(new Pt(1,1,1,1));for(let S=0;S<d.face.length;S++){const c=d.face[S],p=G.FromArray(d.vertex[c[0]]),v=G.FromArray(d.vertex[c[2]]),y=G.FromArray(d.vertex[c[1]]),b=v.subtract(p),g=y.subtract(p),h=G.Cross(g,b).normalize(),A=G.Cross(g,h).normalize();u.goldbergData.faceXaxis.push(g.normalize()),u.goldbergData.faceYaxis.push(h),u.goldbergData.faceZaxis.push(A)}return u}const P={CreateBox:fe,CreateTiledBox:ie,CreateSphere:ne,CreateDisc:oe,CreateIcoSphere:re,CreateRibbon:ae,CreateCylinder:se,CreateTorus:ee,CreateTorusKnot:te,CreateLineSystem:Jt,CreateLines:Qt,CreateDashedLines:Kt,ExtrudeShape:qt,ExtrudeShapeCustom:Yt,CreateLathe:Ht,CreateTiledPlane:jt,CreatePlane:Wt,CreateGround:It,CreateTiledGround:Xt,CreateGroundFromHeightMap:Ut,CreatePolygon:$t,ExtrudePolygon:Zt,CreateTube:Lt,CreatePolyhedron:Tt,CreateGeodesic:me,CreateGoldberg:de,CreateDecal:Nt,CreateCapsule:kt,CreateText:Vt};class pe{get gpuFrameTimeCounter(){return this.engine.getGPUFrameTimeCounter()}get captureGPUFrameTime(){return this._captureGPUFrameTime}set captureGPUFrameTime(t){t!==this._captureGPUFrameTime&&(this._captureGPUFrameTime=t,this.engine.captureGPUFrameTime(t))}get shaderCompilationTimeCounter(){return this._shaderCompilationTime}get captureShaderCompilationTime(){return this._captureShaderCompilationTime}set captureShaderCompilationTime(t){t!==this._captureShaderCompilationTime&&(this._captureShaderCompilationTime=t,t?(this._onBeforeShaderCompilationObserver=this.engine.onBeforeShaderCompilationObservable.add(()=>{this._shaderCompilationTime.fetchNewFrame(),this._shaderCompilationTime.beginMonitoring()}),this._onAfterShaderCompilationObserver=this.engine.onAfterShaderCompilationObservable.add(()=>{this._shaderCompilationTime.endMonitoring()})):(this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null))}constructor(t){this.engine=t,this._captureGPUFrameTime=!1,this._captureShaderCompilationTime=!1,this._shaderCompilationTime=new le,this._onBeginFrameObserver=null,this._onEndFrameObserver=null,this._onBeforeShaderCompilationObserver=null,this._onAfterShaderCompilationObserver=null}dispose(){this.engine.onBeginFrameObservable.remove(this._onBeginFrameObserver),this._onBeginFrameObserver=null,this.engine.onEndFrameObservable.remove(this._onEndFrameObserver),this._onEndFrameObserver=null,this.engine.onBeforeShaderCompilationObservable.remove(this._onBeforeShaderCompilationObserver),this._onBeforeShaderCompilationObserver=null,this.engine.onAfterShaderCompilationObservable.remove(this._onAfterShaderCompilationObserver),this._onAfterShaderCompilationObserver=null,this.engine=null}}const vt=[],Se=typeof performance<"u"?performance.now():0;function mt(o,t){const e={name:o,ms:Math.round(t*10)/10,at:Math.round((performance.now()-Se)*10)/10};vt.push(e),globalThis.__boot=vt}async function Xe(o,t){const e=performance.now();try{return await t()}finally{mt(o,performance.now()-e)}}function We(o,t){const e=performance.now();try{return t()}finally{mt(o,performance.now()-e)}}function je(o,t){const e=new pe(o);e.captureShaderCompilationTime=!0;const s=o.onEndFrameObservable.add(()=>{mt(t,e.shaderCompilationTimeCounter.total),o.onEndFrameObservable.remove(s),e.dispose()})}function xe(o){const t=o.trim();return!t||t.includes(".")?null:t==="wind"?"mast":t==="sunbank"?"bank":t==="solar"?"array":"block"}function He(o,t,e){return e?"structure":"box"}function ve(o){const t=[],e=[],s=[],a=(n,r,l,i,f,m)=>{Ae(t,e,s,n,r,l,i,f,m)};return o==="mast"?(a(.5,8.2,.5,0,0,0),a(1.5,.7,1.1,0,8.2,0),a(.22,3.6,.16,0,6.2,.7),a(3.8,.2,.16,0,8.35,.7)):o==="bank"?(a(6.4,.55,4.2,0,0,0),a(1.7,3.8,.22,-2.05,.55,.4),a(1.7,3.8,.22,0,.55,.4),a(1.7,3.8,.22,2.05,.55,.4)):o==="array"?(a(7.2,.35,5.2,0,0,0),a(.28,1.4,.28,-2.4,.35,0),a(.28,1.4,.28,2.4,.35,0),a(6.4,.18,3.4,0,1.75,0)):(a(4.4,2.6,4.4,0,0,0),a(3.2,.9,3.2,0,2.6,0)),{positions:t,indices:e,normals:s}}function Ae(o,t,e,s,a,n,r,l,i){const f=r-s/2,m=r+s/2,d=l,u=l+a,x=i-n/2,S=i+n/2,c=[{n:[0,0,-1],v:[[f,d,x],[m,d,x],[m,u,x],[f,u,x]]},{n:[0,0,1],v:[[m,d,S],[f,d,S],[f,u,S],[m,u,S]]},{n:[-1,0,0],v:[[f,d,S],[f,d,x],[f,u,x],[f,u,S]]},{n:[1,0,0],v:[[m,d,x],[m,d,S],[m,u,S],[m,u,x]]},{n:[0,1,0],v:[[f,u,x],[m,u,x],[m,u,S],[f,u,S]]},{n:[0,-1,0],v:[[f,d,S],[m,d,S],[m,d,x],[f,d,x]]}];for(const p of c){const v=o.length/3;for(const y of p.v)o.push(y[0],y[1],y[2]),e.push(p.n[0],p.n[1],p.n[2]);t.push(v,v+1,v+2,v,v+2,v+3)}}const ge=new Map,rt=[{body:new F(.77,.38,.18),accent:new F(.96,.77,.09)},{body:new F(.9,.84,.76),accent:new F(.12,.54,.54)},{body:new F(.95,.96,.97),accent:new F(.18,.36,1)},{body:new F(.36,.24,.54),accent:new F(.24,.86,.48)}];function ht(o,t,e=!1){const s=`mat-${t}-${e?"a":"b"}`,a=o.getMaterialByName(s);if(a)return a;const n=new j(s,o),r=rt[t]??rt[0];return n.diffuseColor=e?r.accent:r.body,n.specularColor=F.Black(),n}function Ye(o,t,e,s){const a=ge.get(t);if(a){const r=a(o);return r.material=ht(o,e,s===0),r.isPickable=!1,r}let n;return s===9?n=P.CreateBox(t,{width:1.7,height:1.1,depth:1.7},o):s===3?n=P.CreateBox(t,{width:8,height:2.4,depth:8},o):s===8?n=P.CreateBox(t,{width:1.6,height:3.2,depth:1.6},o):s>=4&&s<=10?n=P.CreateBox(t,{width:2.4,height:1.3,depth:2.4},o):e===1?n=P.CreateCylinder(t,{diameterTop:.12,diameterBottom:1.15,height:.7,tessellation:3},o):e===2?n=P.CreateCylinder(t,{diameterTop:.35,diameterBottom:.85,height:1.7,tessellation:5},o):e===3?n=P.CreateBox(t,{width:1.7,height:.42,depth:1.05},o):n=P.CreateBox(t,{width:.95,height:.72,depth:1.15},o),n.material=ht(o,e,s===0||s===8),n.isPickable=!1,n.alwaysSelectAsActiveMesh=!0,s>=3&&s<=10&&be(n),n}const At=new Map;let gt=0;function qe(o,t,e){const s=xe(t);if(!s)return null;const a=new nt(`struct-${t}-${e}-${gt}`,o);gt+=1;const n=ve(s),r=new X;return r.positions=n.positions,r.indices=n.indices,r.normals=n.normals,r.applyToMesh(a,!0),a.material=ye(o,e),a.isPickable=!1,a.alwaysSelectAsActiveMesh=!0,a.doNotSyncBoundingInfo=!0,a.renderingGroupId=1,a}function ye(o,t){const e=`struct-mat-${t}`,s=At.get(e);if(s&&s.getScene()===o)return s;const a=new j(e,o),n=rt[t]??rt[0];return a.diffuseColor=new F(.45,.48,.5),a.emissiveColor=n.accent.scale(.35),a.specularColor=new F(.08,.08,.08),At.set(e,a),a}function be(o){o.refreshBoundingInfo(!0);const t=o.getBoundingInfo().boundingBox.extendSize.y*2;t>0&&(o.bakeTransformIntoVertices(lt.Translation(0,t/2,0)),o.refreshBoundingInfo(!0))}function Ke(o,t){const e=P.CreateBox(`shell-${t}`,{size:.35},o);return e.material=ht(o,t,!0),e.isPickable=!1,e.alwaysSelectAsActiveMesh=!0,e}let yt=null;function Qe(){return yt??=(async()=>{if(typeof window>"u"){const{readFileSync:o}=await he(async()=>{const{readFileSync:e}=await import("./__vite-browser-external-BpWMcTFF.js").then(s=>s.a);return{readFileSync:e}},[],import.meta.url);await xt({module_or_path:o(new URL(""+new URL("sim_bg-Cj-pRAw9.wasm",import.meta.url).href,import.meta.url))});return}await xt()})(),yt}function Ot(o,t,e,s,a,n){const r=t+1,l=U(a/s,0,t-.001),i=U(n/s,0,e-.001),f=Math.floor(l),m=Math.floor(i),d=l-f,u=i-m,x=o[m*r+f]/64,S=o[m*r+f+1]/64,c=o[(m+1)*r+f]/64,p=o[(m+1)*r+f+1]/64;return x*(1-d)*(1-u)+S*d*(1-u)+c*(1-d)*u+p*d*u}const Dt=1536,_t=1024,Ft=Dt/2,Ce=_t/2,et=Ft+1,Y=65536;function Be(o,t,e){const s=U(Math.round(t*Y),0,Dt*Y),a=U(Math.round(e*Y),0,_t*Y),n=Math.floor(s/2),r=Math.floor(a/2),l=U(n>>16,0,Ft-1),i=U(r>>16,0,Ce-1),f=n&65535,m=r&65535,d=o[i*et+l],u=o[i*et+l+1],x=o[(i+1)*et+l],S=o[(i+1)*et+l+1],c=d+((u-d)*f>>16),p=x+((S-x)*f>>16);return(c+((p-c)*m>>16)<<10)/Y}function Je(o,t,e,s,a,n,r){return Ot(o,t,e,s,a,r)+(n-Be(o,a,r))}function U(o,t,e){return Math.max(t,Math.min(e,o))}function Te(o){const t=Math.max(-1,Math.min(1,o));if(t<0){const s=t+1;return bt([.32,.36,.4],[.55,.5,.42],s)}const e=we(Math.min(1,t/.55));return bt([.64,.58,.48],[.13,.28,.58],e)}function bt(o,t,e){return[o[0]+(t[0]-o[0])*e,o[1]+(t[1]-o[1])*e,o[2]+(t[2]-o[2])*e]}function we(o){return o*o*(3-2*o)}function ts(o){const t=P.CreateSphere("sky",{diameter:400,segments:32,sideOrientation:nt.BACKSIDE},o);t.infiniteDistance=!0,t.isPickable=!1,t.alwaysSelectAsActiveMesh=!0;const e=t.getVerticesData(pt.PositionKind);if(e){const a=new Float32Array(e.length/3*4);for(let n=0;n<e.length;n+=3){const r=e[n],l=e[n+1],i=e[n+2],f=Math.hypot(r,l,i)||1,[m,d,u]=Te(l/f),x=n/3*4;a[x]=m,a[x+1]=d,a[x+2]=u,a[x+3]=1}t.setVerticesData(pt.ColorKind,a)}t.useVertexColors=!0;const s=new j("sky",o);return s.disableLighting=!0,s.emissiveColor=new F(1,1,1),s.specularColor=F.Black(),s.backFaceCulling=!1,s.disableDepthWrite=!0,t.material=s,t}const ot=.82,zt=.48,Gt=[[.78,.74,.68],[.58,.54,.5],[.4,.42,.44],[.64,.42,.32],[.3,.29,.28]];function es(o,t){const e=o*Math.PI/180,s=t*Math.PI/180,a=Math.cos(s);return[-Math.sin(e)*a,-Math.sin(s),Math.cos(e)*a]}const Me=1;function Oe(o,t,e,s,a=Me){const n=Math.floor(t/a),r=Math.floor(e/a),l=t+1,i=n+1,f=new Float32Array(i*(r+1)*3);let m=1/0,d=-1/0,u=0;for(let c=0;c<=r;c++){const p=Math.min(e,c*a);for(let v=0;v<=n;v++){const y=Math.min(t,v*a),b=o[p*l+y]/64;f[u++]=y*s,f[u++]=b,f[u++]=p*s,b<m&&(m=b),b>d&&(d=b)}}const x=new Uint32Array(n*r*6);let S=0;for(let c=0;c<r;c++)for(let p=0;p<n;p++){const v=c*i+p;x[S++]=v,x[S++]=v+1,x[S++]=v+i,x[S++]=v+1,x[S++]=v+i+1,x[S++]=v+i}return{positions:f,indices:x,cols:n,rows:r,minY:m,maxY:d}}const B=128,$=2,I=B+$*2,J=4,N=I*J,E={grass:0,scrub:1,rock:2,scree:3,gravel:4,road:5,mud:6,sand:7,concrete:8};function Z(o,t,e){let s=Math.imul(o,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function De(o,t,e,s){const a=Math.floor(o),n=Math.floor(t),r=o-a,l=t-n,i=r*r*(3-2*r),f=l*l*(3-2*l),m=(a%s+s)%s,d=(n%s+s)%s,u=(m+1)%s,x=(d+1)%s,S=Z(m,d,e),c=Z(u,d,e),p=Z(m,x,e),v=Z(u,x,e);return S*(1-i)*(1-f)+c*i*(1-f)+p*(1-i)*f+v*i*f}function L(o,t,e,s,a){let n=0,r=.5,l=0,i=1,f=s;for(let m=0;m<a;m++)n+=r*De(o*i,t*i,e+m*17,f),l+=r,r*=.5,i*=2,f*=2;return n/l}function Ct(o,t,e,s){const a=Math.max(1,Math.round(B/s)),n=Math.floor(o/s),r=Math.floor(t/s);let l=1e9;for(let i=-1;i<=1;i++)for(let f=-1;f<=1;f++){const m=n+f,d=r+i,u=(m%a+a)%a,x=(d%a+a)%a,S=m*s+Z(u,x,e)*s,c=d*s+Z(u,x,e+9)*s,p=o-S,v=t-c,y=p*p+v*v;y<l&&(l=y)}return Math.sqrt(l)/s}function W(o){return Math.max(0,Math.min(255,Math.round(o)))}function _e(o){const t=B*B,e=new Uint8Array(t*3),s=new Float32Array(t),a={0:[196,174,122],1:[124,128,78],2:[168,158,146],3:[198,182,160],4:[170,156,132],5:[142,122,96],6:[124,102,78],7:[204,184,146],8:[176,174,166]},[n,r,l]=a[o]??[140,130,110];for(let i=0;i<B;i++)for(let f=0;f<B;f++){const m=i*B+f;let d=n,u=r,x=l,S=0;if(o===E.grass){const c=L(f/18,i/18,11,B,3),p=L(f/3.2,i/3.2,12,B,2);d+=(c-.5)*36+(p-.5)*18,u+=(c-.45)*28+(p-.5)*14,x+=(c-.5)*16,S=(p-.5)*.35+(c-.5)*.15}else if(o===E.scrub){const c=Ct(f,i,21,16),p=Math.max(0,1-c*1.6);d-=p*28,u-=p*18,x-=p*16,S=p*.8}else if(o===E.rock){const c=1-Math.abs(L(f/10,i/10,31,B,4)*2-1),p=c>.82?1:0;d-=p*40+c*12,u-=p*38+c*10,x-=p*34+c*8,S=c*.9-p*.7}else if(o===E.scree||o===E.gravel){const c=o===E.scree?18:9,p=Ct(f,i,o===E.scree?41:42,c),v=Math.max(0,1-p*1.35),y=Z(Math.floor(f/c),Math.floor(i/c),o+4);d+=(y-.5)*40+v*16,u+=(y-.5)*32+v*12,x+=(y-.5)*24+v*8,S=v*.85}else if(o===E.road){const c=Math.abs(f%32/32*2-1),p=L(f/14,i/8,51,B,2);d-=c*18+(p-.5)*10,u-=c*16,x-=c*12,S=-c*.25+(p-.5)*.1}else if(o===E.mud){const c=L(f/20,i/20,61,B,3);d-=c*30,u-=c*24,x-=c*16,S=(c-.5)*.12}else if(o===E.sand){const c=Math.sin((f*.45+L(f/12,i/12,71,B,2)*6)*.7),p=L(f/2.5,i/2.5,72,B,2);d+=c*8+(p-.5)*14,u+=c*6+(p-.5)*10,x+=(p-.5)*8,S=c*.18+(p-.5)*.2}else{const c=(Math.floor(i/16)+Math.floor(f/64))%2===0?6:-4,p=L(f/6,i/6,81,B,2);d+=c-p*8,u+=c-p*8,x+=c-p*6,S=c*.01-p*.15}e[m*3]=W(d),e[m*3+1]=W(u),e[m*3+2]=W(x),s[m]=S}return{rgb:e,height:s}}function Fe(o,t,e){const s=t%J,a=Math.floor(t/J),n=s*I,r=a*I;for(let l=0;l<I;l++){const i=(l-$+B)%B;for(let f=0;f<I;f++){const m=(f-$+B)%B,d=((r+l)*N+(n+f))*4,u=(i*B+m)*3;o[d]=e.rgb[u],o[d+1]=e.rgb[u+1],o[d+2]=e.rgb[u+2],o[d+3]=255}}}function ze(){const o=new Uint8Array(N*N*4),t=new Uint8Array(N*N*4);t.fill(128);for(let e=3;e<t.length;e+=4)t[e]=255;for(let e=0;e<=E.concrete;e++){const s=_e(e);Fe(o,e,s),Ge(t,e,s)}return{albedo:o,normal:t,size:N}}function Ge(o,t,e){const s=t%J,a=Math.floor(t/J),n=s*I,r=a*I,l=(i,f)=>{const m=(i+B)%B,d=(f+B)%B,u=e.height[d*B+(m-1+B)%B],x=e.height[d*B+(m+1)%B],S=e.height[(d-1+B)%B*B+m],c=e.height[(d+1)%B*B+m];let p=(u-x)*1.15,v=(S-c)*1.15,y=1;const b=Math.hypot(p,v,y)||1;return[p/b,v/b,y/b]};for(let i=0;i<I;i++){const f=i-$;for(let m=0;m<I;m++){const d=m-$,[u,x,S]=l(d,f),c=((r+i)*N+(n+m))*4;o[c]=W(u*127+128),o[c+1]=W(x*127+128),o[c+2]=W(S*127+128),o[c+3]=255}}}function q(o){const[t,e,s]=Gt[o];return`vec3(${t.toFixed(3)}, ${e.toFixed(3)}, ${s.toFixed(3)})`}function Re(){return`
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
  float t = clamp((${ot.toFixed(2)} - ny) / ${(ot-zt).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
vec3 tfStrata(float tone) {
  vec3 c0 = ${q(0)};
  vec3 c1 = ${q(1)};
  vec3 c2 = ${q(2)};
  vec3 c3 = ${q(3)};
  vec3 c4 = ${q(4)};
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
  vec2 local = fract(uv) * ${B}.0 + ${$}.0;
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
`}function Ee(){return`
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
`}function Pe(){return`
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
  let t = clamp((${ot.toFixed(2)} - ny) / ${(ot-zt).toFixed(2)}, 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}
fn tfStrata(tone: f32) -> vec3f {
  var s = ${K(0)};
  s = mix(s, ${K(1)}, step(0.5, tone));
  s = mix(s, ${K(2)}, step(1.5, tone));
  s = mix(s, ${K(3)}, step(2.5, tone));
  s = mix(s, ${K(4)}, step(3.5, tone));
  return s;
}
fn tfAtlas(tex: texture_2d<f32>, samp: sampler, slot: f32, uv: vec2f) -> vec3f {
  let col = slot - 4.0 * floor(slot / 4.0);
  let row = floor(slot / 4.0);
  let local = fract(uv) * ${B}.0 + ${$}.0;
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
`}function K(o){const[t,e,s]=Gt[o];return`vec3f(${t.toFixed(3)}, ${e.toFixed(3)}, ${s.toFixed(3)})`}function Ie(){return`
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
`}function st(o,t,e,s){const a=wt(`maps/twin-ridges/${t}`),n=new k(a,o,!1,!1,k.TRILINEAR_SAMPLINGMODE,()=>e(),r=>{const l=typeof r=="string"?r:t;console.error(`Terrain texture failed: ${a}`,l),s(l)});return n.wrapU=k.CLAMP_ADDRESSMODE,n.wrapV=k.CLAMP_ADDRESSMODE,n.anisotropicFilteringLevel=8,n}class Ve extends ce{mapW=1536;mapH=1024;splat0;splat1;splat2;tracks;detail;detailNrm;constructor(t,e){super(t,"TerrainSplat",200,{TERRAIN_SPLAT:!1},!0,!1),this.registerForExtraEvents=!0,this._enable(!0);const s=ze(),a=k.LINEAR_LINEAR;this.detail=ft.CreateRGBATexture(s.albedo,s.size,s.size,e,!1,!1,a),this.detailNrm=ft.CreateRGBATexture(s.normal,s.size,s.size,e,!1,!1,a),this.detail.wrapU=k.CLAMP_ADDRESSMODE,this.detail.wrapV=k.CLAMP_ADDRESSMODE,this.detailNrm.wrapU=k.CLAMP_ADDRESSMODE,this.detailNrm.wrapV=k.CLAMP_ADDRESSMODE;const n=new Uint8Array(4*4*4);n.fill(128);const r=()=>ft.CreateRGBATexture(n,4,4,e,!1,!1,k.NEAREST_SAMPLINGMODE);this.splat0=r(),this.splat1=r(),this.splat2=r(),this.tracks=r()}isCompatible(){return!0}getClassName(){return"TerrainSplatPlugin"}prepareDefines(t){t.TERRAIN_SPLAT||(t.TERRAIN_SPLAT=!0,t.markAsUnprocessed())}getSamplers(t){t.push("splat0Sampler","splat1Sampler","splat2Sampler","tracksSampler","detailSampler","detailNrmSampler")}getUniforms(t=tt.GLSL){return{ubo:[{name:"mapSize",size:2,type:"vec2"}],fragment:t===tt.WGSL?void 0:`#ifdef TERRAIN_SPLAT
uniform vec2 mapSize;
#endif
`}}bindForSubMesh(t){this.bindSplats(t)}hardBindForSubMesh(t){this.bindSplats(t)}bindSplats(t){t.updateFloat2("mapSize",this.mapW,this.mapH),t.setTexture("splat0Sampler",this.splat0),t.setTexture("splat1Sampler",this.splat1),t.setTexture("splat2Sampler",this.splat2),t.setTexture("tracksSampler",this.tracks),t.setTexture("detailSampler",this.detail),t.setTexture("detailNrmSampler",this.detailNrm)}getCustomCode(t,e=tt.GLSL){if(t!=="fragment")return null;const s=e===tt.WGSL;return{CUSTOM_FRAGMENT_DEFINITIONS:s?Pe():Re(),CUSTOM_FRAGMENT_UPDATE_DIFFUSE:s?Ie():Ee()}}}function ke(o,t,e){const s=new j("terrain",o);s.diffuseColor.set(1,1,1),s.specularColor.set(.04,.04,.035),s.specularPower=24;const a=new Ve(s,o);a.mapW=t,a.mapH=e,s.onError=(r,l)=>{console.error(l),document.documentElement.dataset.terrain="shader-error"};const n=new Promise(r=>{let l=4;const i=()=>{l-=1,l===0&&r()},f=m=>{console.error("terrain map texture",m),document.documentElement.dataset.terrain="texture-error",i()};a.splat0=st(o,"splat_0_grass_scrub_rock_scree.png",i,f),a.splat1=st(o,"splat_1_gravel_road_mud_sand.png",i,f),a.splat2=st(o,"splat_2_water_concrete_wetness_strata.png",i,f),a.tracks=st(o,"tracks_mask.png",i,f)});return{material:s,ready:n}}const at=6;function Q(o,t,e){let s=Math.imul(o,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return s=Math.imul(s^s>>>13,1274126177),((s^s>>>16)>>>0)/4294967296}function Ne(o){return new Promise((t,e)=>{const s=new Image;s.onload=()=>t(s),s.onerror=()=>e(new Error(o)),s.src=o})}function Bt(o,t,e){const s=P.CreateIcoSphere(t,{radius:.55,subdivisions:1,flat:!1},o);s.position.y=.5,s.bakeCurrentTransformIntoVertices(),s.position.set(0,0,0);const a=new j(`${t}-mat`,o);return a.diffuseColor=e,a.specularColor=F.Black(),s.material=a,s.isPickable=!1,s.alwaysSelectAsActiveMesh=!0,s.receiveShadows=!1,s}async function Le(o,t,e,s,a,n){const r=wt("maps/twin-ridges/vegetation_canopy_height_dm.png"),l=await Ne(r).catch(b=>{throw console.error(`Terrain canopy missing: ${r}`,b),b}),i=document.createElement("canvas");i.width=l.width,i.height=l.height;const f=i.getContext("2d",{willReadFrequently:!0});if(!f)return;f.drawImage(l,0,0);const m=f.getImageData(0,0,l.width,l.height).data,d=Bt(o,"shrub",new F(.34,.4,.22)),u=Bt(o,"tree",new F(.22,.32,.16)),x=[],S=[],c=new G,p=new St,v=new G,y=new lt;for(let b=0;b<l.height;b+=at)for(let g=0;g<l.width;g+=at){const h=m[(b*l.width+g)*4];if(h<6)continue;const A=(Q(g,b,2)-.5)*at*.7,O=(Q(g,b,4)-.5)*at*.7,z=Math.max(0,Math.min(e*a-.01,g+.5+A)),C=Math.max(0,Math.min(s*a-.01,b+.5+O)),_=Ot(t,e,s,a,z,C);if(_<n+.4)continue;const D=h/10,T=D>=2.6,V=T?.7+D*.28:.45+D*.55;c.set(V*(.85+Q(g,b,6)*.3),V*(T?1.15:.75),V*(.85+Q(g,b,8)*.3)),St.RotationAxisToRef(G.Up(),Q(g,b,9)*Math.PI*2,p),v.set(z,_,C),lt.ComposeToRef(c,p,v,y);const H=T?S:x,ut=H.length;H.length=ut+16,y.copyToArray(H,ut)}x.length?d.thinInstanceSetBuffer("matrix",new Float32Array(x),16,!0):d.setEnabled(!1),S.length?u.thinInstanceSetBuffer("matrix",new Float32Array(S),16,!0):u.setEnabled(!1)}function ss(o,t,e,s,a,n,r,l){const i=Oe(t,e,s,a),f=new nt("terrain",o),m=new X;m.positions=i.positions,m.indices=i.indices;const d=new Float32Array(i.positions.length);X.ComputeNormals(i.positions,i.indices,d),m.normals=d,m.applyToMesh(f),f.useVertexColors=!1,f.alwaysSelectAsActiveMesh=!0;const{material:u,ready:x}=ke(o,n,r);f.material=u,document.documentElement.dataset.relief=`${i.minY.toFixed(1)}..${i.maxY.toFixed(1)}`,document.documentElement.dataset.terrain="loading";const S=x.then(()=>Le(o,t,e,s,a,l)).then(()=>{const c=document.documentElement.dataset.terrain;c!=="shader-error"&&c!=="texture-error"&&(document.documentElement.dataset.terrain="ready")}).catch(c=>{console.error(c),document.documentElement.dataset.terrain="error"});return{mesh:f,ready:S}}function as(o){const t=new j("water",o);return t.diffuseColor=new F(.4,.5,.42),t.specularColor=new F(.34,.38,.34),t.specularPower=48,t.alpha=.62,t}export{P as M,Gt as S,We as a,mt as b,ts as c,ss as d,es as e,ht as f,Ot as g,Xe as h,Ke as i,xe as j,qe as k,Qe as l,Ye as m,je as n,Je as p,He as r,Te as s,as as w};
