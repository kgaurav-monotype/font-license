import{G as s,W as e,v as i}from"./index-D230z0wX.js";/*!
 * Built with Stencil
 * Copyright (c) 2024 Monotype Imaging Inc..
 */const a=":host{display:inline-flex}",n=a,c=class{constructor(o){s(this,o),this.handleIconClick=e(this,"handleIconClick",7),this.iconClick=t=>{t.stopPropagation(),this.handleIconClick.emit(t)},this.handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.iconClick(t))},this.color=void 0,this.colorhover=void 0,this.rotate="up",this.animation="none",this.duration="2s",this.icontitle="enabled",this.customalttext=void 0,this.size="sm",this.as="icon",this.tabidx=0}render(){return i("mt-icon",{key:"32f033c37f71d4654e3c1292aa1263878962f72b",alttext:"Tick Icon",color:this.color,colorhover:this.colorhover,rotate:this.rotate,animation:this.animation,icontitle:this.icontitle,duration:this.duration,size:this.size,exportparts:"mt-icon",customalttext:this.customalttext,as:this.as,role:this.as==="button"?this.as:void 0,onClick:this.as==="button"?this.iconClick:void 0,tabidx:this.as==="button"?this.tabidx:null,onKeyDown:this.as==="button"?this.handleKeyDown:void 0},i("svg",{key:"37a6db325dbbe82eefa7a698ade039b5b8827cc0",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{key:"83a7c5f787a5e8cc8510253580cbe553f2771934","fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.4773 2.42146C14.7968 2.68506 14.8421 3.15776 14.5785 3.47728L6.32853 13.4773C6.19297 13.6416 5.99393 13.7405 5.78109 13.7493C5.56826 13.7582 5.36171 13.6761 5.213 13.5236L1.463 9.67741C1.17384 9.38084 1.17985 8.906 1.47643 8.61684C1.773 8.32767 2.24784 8.33368 2.537 8.63026L5.70344 11.8779L13.4215 2.5227C13.6851 2.20319 14.1578 2.15786 14.4773 2.42146Z",fill:"currentColor"})),i("slot",{key:"63fb33d690daa65b86637ade06376815f9db8c96",name:"badge"}))}};c.style=n;export{c as mt_icon_tick};
