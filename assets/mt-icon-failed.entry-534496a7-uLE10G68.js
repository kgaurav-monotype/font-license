import{G as o,W as s,v as i}from"./index-C3dnrqHX.js";/*!
 * Built with Stencil
 * Copyright (c) 2024 Monotype Imaging Inc..
 */const a=":host{display:inline-flex}",n=a,l=class{constructor(e){o(this,e),this.handleIconClick=s(this,"handleIconClick",7),this.iconClick=t=>{t.stopPropagation(),this.handleIconClick.emit(t)},this.handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.iconClick(t))},this.color=void 0,this.colorhover=void 0,this.rotate="up",this.animation="none",this.duration="2s",this.icontitle="enabled",this.customalttext=void 0,this.size="sm",this.as="icon",this.tabidx=0}render(){return i("mt-icon",{key:"36d380deb436e84dc4d7e98c6936a97da8763894",alttext:"Failed Icon",color:this.color,colorhover:this.colorhover,rotate:this.rotate,animation:this.animation,icontitle:this.icontitle,duration:this.duration,size:this.size,exportparts:"mt-icon",customalttext:this.customalttext,as:this.as,role:this.as==="button"?this.as:void 0,onClick:this.as==="button"?this.iconClick:void 0,tabidx:this.as==="button"?this.tabidx:null,onKeyDown:this.as==="button"?this.handleKeyDown:void 0},i("svg",{key:"bd0082a5cc8135e0e8cd832bead9342a8a1bd582",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{key:"cceec5f74c34635ed107d3ac0df0250c115e2fa1","fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 18.125C14.4873 18.125 18.125 14.4873 18.125 10C18.125 5.51269 14.4873 1.875 10 1.875C5.51269 1.875 1.875 5.51269 1.875 10C1.875 14.4873 5.51269 18.125 10 18.125ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z",fill:"currentColor"}),i("path",{key:"104e9bdc9b84682a17d3e97577b38b20ab8822de","fill-rule":"evenodd","clip-rule":"evenodd",d:"M10 4.375C10.5178 4.375 10.9375 4.79473 10.9375 5.3125V11.5625C10.9375 12.0803 10.5178 12.5 10 12.5C9.48223 12.5 9.0625 12.0803 9.0625 11.5625V5.3125C9.0625 4.79473 9.48223 4.375 10 4.375ZM10 13.75C10.5178 13.75 10.9375 14.1697 10.9375 14.6875C10.9375 15.2053 10.5178 15.625 10 15.625C9.48223 15.625 9.0625 15.2053 9.0625 14.6875C9.0625 14.1697 9.48223 13.75 10 13.75Z",fill:"currentColor"})),i("slot",{key:"5a618d31885029dc5912451aa4a278cb20075026",name:"badge"}))}};l.style=n;export{l as mt_icon_failed};