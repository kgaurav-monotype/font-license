import{G as o,W as a,v as e}from"./index-C3dnrqHX.js";/*!
 * Built with Stencil
 * Copyright (c) 2024 Monotype Imaging Inc..
 */const l=":host{display:inline-flex}",c=l,s=class{constructor(i){o(this,i),this.handleIconClick=a(this,"handleIconClick",7),this.iconClick=t=>{t.stopPropagation(),this.handleIconClick.emit(t)},this.handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.iconClick(t))},this.color=void 0,this.colorhover=void 0,this.rotate="up",this.animation="none",this.duration="2s",this.icontitle="enabled",this.customalttext=void 0,this.size="sm",this.as="icon",this.tabidx=0}render(){return e("mt-icon",{key:"b1c74b4e266330cc81af65e86bef2783d6e88749",alttext:"Clock Icon",color:this.color,colorhover:this.colorhover,rotate:this.rotate,animation:this.animation,icontitle:this.icontitle,duration:this.duration,size:this.size,exportparts:"mt-icon",customalttext:this.customalttext,as:this.as,role:this.as==="button"?this.as:void 0,onClick:this.as==="button"?this.iconClick:void 0,tabidx:this.as==="button"?this.tabidx:null,onKeyDown:this.as==="button"?this.handleKeyDown:void 0},e("svg",{key:"b69f79891676194a3094aeeefa3e7dc95df836f5",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("g",{key:"e0b22ff991af7682bb8fde86af942db7751d1eeb","clip-path":"url(#clip0_2012_6049)"},e("path",{key:"bc0a8ff68fc50d46c350bd704f2a1553aa3cacf8","fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8ZM8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0Z",fill:"currentColor"}),e("path",{key:"770fe824c0d7eef45f47cb66a582174efbfe3a3c","fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00007 2.25C8.41428 2.25001 8.75007 2.5858 8.75006 3.00001L8.75 8.00001C8.75 8.41422 8.4142 8.75001 7.99999 8.75C7.58578 8.75 7.24999 8.4142 7.25 7.99999L7.25006 2.99999C7.25007 2.58578 7.58586 2.24999 8.00007 2.25Z",fill:"currentColor"}),e("path",{key:"52ab31315db9f1edf1c300575b137aa5b8cfa064","fill-rule":"evenodd","clip-rule":"evenodd",d:"M12.6 11.45C12.3515 11.7814 11.8814 11.8485 11.55 11.6L7.55 8.6C7.21863 8.35147 7.15147 7.88137 7.4 7.55C7.64853 7.21863 8.11863 7.15147 8.45 7.4L12.45 10.4C12.7814 10.6485 12.8485 11.1186 12.6 11.45Z",fill:"currentColor"})),e("defs",{key:"ef20e3d3d4284caa1bb574d88536eee8a2fcc48a"},e("clipPath",{key:"dba5d9dc0032d87fc5b7141de01f8d0ee7119856",id:"clip0_2012_6049"},e("rect",{key:"cf7366fec2e9a5fdfae5bebca739387427e9cbd4",width:"16",height:"16",fill:"white"})))),e("slot",{key:"5bb796828b5cfff24a389092e342248bbf7b09d1",name:"badge"}))}};s.style=c;export{s as mt_icon_clock};