"use strict";(self.webpackChunkcarrent=self.webpackChunkcarrent||[]).push([[101],{3101:(e,a,n)=>{n.r(a),n.d(a,{default:()=>M});var i,t,l=n(2791),r=n(9434),s=n(1945),m=n(6934),c=n(9085),g=n(9514),f=n(1011),x=n(9687),o=n(168),u=n(6088);const d=u.Z.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  max-width: 1184px;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  min-height: 65vh;\n"]))),h=u.Z.p(t||(t=(0,o.Z)(["\n  margin-top: 50px;\n  font-size: 24px;\n  font-family: ManropeRegular;\n  color: rgba(138, 138, 137, 1);\n"])));var p=n(3329);const M=()=>{const e=(0,r.I0)(),a=(0,r.v9)(s.R),[n,i]=(0,l.useState)({make:"",filteredPrices:[],minMileage:"",maxMileage:""}),[t,o]=(0,l.useState)(null),[u,M]=(0,l.useState)(!1);(0,l.useEffect)((()=>{e((0,m.c)())}),[e]),(0,l.useEffect)((()=>{if(u)if(n.make||n.filteredPrices.length>0||n.minMileage||n.maxMileage){const e=a.filter((e=>(!n.make||e.make===n.make.value)&&(!(n.filteredPrices.length>0&&!n.filteredPrices.some((a=>a.value===e.rentalPrice.replace("$",""))))&&(!(n.minMileage&&e.mileage<n.minMileage)&&!(n.maxMileage&&e.mileage>n.maxMileage)))));o(e)}else o([])}),[n,a,u]);const k=[...new Set(a.map((e=>e.make)))],j=[...new Set(a.map((e=>e.rentalPrice.replace("$",""))))],v=[...new Set(a.map((e=>e.mileage)))],Z=Math.min(...v),P=Math.max(...v);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(d,{children:[(0,p.jsx)(x.Z,{makes:k,prices:j,minMileage:Z,maxMileage:P,onFilterChange:e=>{i(e),M(!0)},filters:n,onResetClick:()=>{i({make:"",filteredPrices:[],minMileage:"",maxMileage:""}),M(!1)}}),u?null!==t&&t.length>0?(0,p.jsx)(g.Z,{filteredAdverts:t}):(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(h,{children:"No matches found."})}):(0,p.jsx)(g.Z,{adverts:a})]}),(0,p.jsx)(c.Ix,{}),(0,p.jsx)(f.Z,{})]})}}}]);
//# sourceMappingURL=101.b0bcb111.chunk.js.map