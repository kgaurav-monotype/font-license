import{G as e,W as s,v as i}from"./index-D230z0wX.js";/*!
 * Built with Stencil
 * Copyright (c) 2024 Monotype Imaging Inc..
 */const n=":host{display:inline-flex}",a=n,c=class{constructor(o){e(this,o),this.handleIconClick=s(this,"handleIconClick",7),this.iconClick=t=>{t.stopPropagation(),this.handleIconClick.emit(t)},this.handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.iconClick(t))},this.color=void 0,this.colorhover=void 0,this.rotate="up",this.animation="none",this.duration="2s",this.icontitle="enabled",this.customalttext=void 0,this.size="sm",this.as="icon",this.tabidx=0}render(){return i("mt-icon",{key:"ccb1d7fec118279f0ab89dbfc3a38bf42e34c4b2",alttext:"Merge Icon",color:this.color,colorhover:this.colorhover,rotate:this.rotate,animation:this.animation,icontitle:this.icontitle,duration:this.duration,size:this.size,exportparts:"mt-icon",customalttext:this.customalttext,as:this.as,role:this.as==="button"?this.as:void 0,onClick:this.as==="button"?this.iconClick:void 0,tabidx:this.as==="button"?this.tabidx:null,onKeyDown:this.as==="button"?this.handleKeyDown:void 0},i("svg",{key:"21876ebef9687905b0cdcfde75e51bd00becc8fb",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{key:"45efe136e1de4d5d4cc6e34cc21d7801dee789e0",d:"M3.20012 16L2.00012 14.7556L6.13584 10.4444C6.46441 10.1037 6.71441 9.71852 6.88584 9.28889C7.05726 8.85926 7.14298 8.40741 7.14298 7.93333V3.4L5.77155 4.8L4.57155 3.55556L8.00012 0L11.4287 3.55556L10.2287 4.8L8.85726 3.4V7.93333C8.85726 8.40741 8.94298 8.85926 9.11441 9.28889C9.28584 9.71852 9.53584 10.1037 9.86441 10.4444L14.0001 14.7556L12.8001 16L8.00012 11.0222L3.20012 16Z",fill:"currentColor"})),i("slot",{key:"fc26d57b3afda047c65ca0d6027850991c4130ef",name:"badge"}))}};c.style=a;export{c as mt_icon_merge};
