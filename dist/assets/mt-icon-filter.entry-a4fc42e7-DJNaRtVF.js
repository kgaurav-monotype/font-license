import{G as e,W as s,v as i}from"./index-D230z0wX.js";/*!
 * Built with Stencil
 * Copyright (c) 2024 Monotype Imaging Inc..
 */const a=":host{display:inline-flex}",n=a,l=class{constructor(o){e(this,o),this.handleIconClick=s(this,"handleIconClick",7),this.iconClick=t=>{t.stopPropagation(),this.handleIconClick.emit(t)},this.handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.iconClick(t))},this.color=void 0,this.colorhover=void 0,this.rotate="up",this.animation="none",this.duration="2s",this.icontitle="enabled",this.customalttext=void 0,this.size="sm",this.as="icon",this.tabidx=0}render(){return i("mt-icon",{key:"682790c1a192eec9549143f209643e0a99f6ef46",alttext:"Filter Icon",color:this.color,colorhover:this.colorhover,rotate:this.rotate,animation:this.animation,icontitle:this.icontitle,duration:this.duration,size:this.size,exportparts:"mt-icon",customalttext:this.customalttext,as:this.as,role:this.as==="button"?this.as:void 0,onClick:this.as==="button"?this.iconClick:void 0,tabidx:this.as==="button"?this.tabidx:null,onKeyDown:this.as==="button"?this.handleKeyDown:void 0},i("svg",{key:"ec7ac248d34e4ffa85197b0e03e5cc2f9dd0bf01",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{key:"67491894f7819f520d50af46c0b76bd4f941aaeb","fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.322222 1.17912C0.446256 0.917086 0.710204 0.75 1.00012 0.75H15.0001C15.29 0.75 15.554 0.917086 15.678 1.17912C15.802 1.44116 15.7639 1.75122 15.5802 1.97544L10.1501 8.60032V14.5C10.1501 14.7616 10.0138 15.0043 9.79038 15.1405C9.56697 15.2766 9.28877 15.2865 9.05627 15.1665L6.25627 13.7221C6.00683 13.5934 5.85012 13.3362 5.85012 13.0556V8.60032L0.420063 1.97544C0.236284 1.75122 0.198188 1.44116 0.322222 1.17912ZM2.58459 2.25L7.18017 7.85679C7.29006 7.99086 7.35012 8.15887 7.35012 8.33222V12.5985L8.65012 13.2692V8.33222C8.65012 8.15887 8.71017 7.99086 8.82006 7.85679L13.4156 2.25H2.58459Z",fill:"currentColor"})),i("slot",{key:"42468df60c67299ba65fcd4f0d29712e894808cd",name:"badge"}))}};l.style=n;export{l as mt_icon_filter};
