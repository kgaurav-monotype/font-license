import{G as e,W as s,v as i}from"./index-zGEakuCh.js";/*!
 * Built with Stencil
 * Copyright (c) 2024 Monotype Imaging Inc..
 */const a=":host{display:inline-flex}",n=a,h=class{constructor(o){e(this,o),this.handleIconClick=s(this,"handleIconClick",7),this.iconClick=t=>{t.stopPropagation(),this.handleIconClick.emit(t)},this.handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.iconClick(t))},this.color=void 0,this.colorhover=void 0,this.rotate="up",this.animation="none",this.duration="2s",this.icontitle="enabled",this.customalttext=void 0,this.size="sm",this.as="icon",this.tabidx=0}render(){return i("mt-icon",{key:"e9d13073e8e3984f35fa3fee4be8a4e56292341b",alttext:"Sort Icon",color:this.color,colorhover:this.colorhover,rotate:this.rotate,animation:this.animation,icontitle:this.icontitle,duration:this.duration,size:this.size,exportparts:"mt-icon",customalttext:this.customalttext,as:this.as,role:this.as==="button"?this.as:void 0,onClick:this.as==="button"?this.iconClick:void 0,tabidx:this.as==="button"?this.tabidx:null,onKeyDown:this.as==="button"?this.handleKeyDown:void 0},i("svg",{key:"994ab21d1050c7ce877e8aa286dfbde45a2e5f6c",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{key:"2cf5f52dbeac4e2b4be155051a4ac3de922aa6d5","fill-rule":"evenodd","clip-rule":"evenodd",d:"M1 4C1 3.44772 1.44772 3 2 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H2C1.44772 5 1 4.55228 1 4ZM1 8C1 7.44772 1.44772 7 2 7H10.3077C10.86 7 11.3077 7.44772 11.3077 8C11.3077 8.55228 10.86 9 10.3077 9H2C1.44772 9 1 8.55228 1 8ZM1 12C1 11.4477 1.44772 11 2 11H7.53846C8.09075 11 8.53846 11.4477 8.53846 12C8.53846 12.5523 8.09075 13 7.53846 13H2C1.44772 13 1 12.5523 1 12Z",fill:"currentColor"})),i("slot",{key:"058af8623c1effd5a118b8c9f552ebfa350b1cb2",name:"badge"}))}};h.style=n;export{h as mt_icon_sort};