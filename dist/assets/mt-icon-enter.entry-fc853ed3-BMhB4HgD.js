import{G as s,W as e,v as i}from"./index-D230z0wX.js";/*!
 * Built with Stencil
 * Copyright (c) 2024 Monotype Imaging Inc..
 */const a=":host{display:inline-flex}",n=a,h=class{constructor(o){s(this,o),this.handleIconClick=e(this,"handleIconClick",7),this.iconClick=t=>{t.stopPropagation(),this.handleIconClick.emit(t)},this.handleKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.iconClick(t))},this.color=void 0,this.colorhover=void 0,this.rotate="up",this.animation="none",this.duration="2s",this.icontitle="enabled",this.customalttext=void 0,this.size="sm",this.as="icon",this.tabidx=0}render(){return i("mt-icon",{key:"a587222ddec5caaf9f476c68d1a95a5660b1b759",alttext:"Enter Icon",color:this.color,colorhover:this.colorhover,rotate:this.rotate,animation:this.animation,icontitle:this.icontitle,duration:this.duration,size:this.size,exportparts:"mt-icon",customalttext:this.customalttext,as:this.as,role:this.as==="button"?this.as:void 0,onClick:this.as==="button"?this.iconClick:void 0,tabidx:this.as==="button"?this.tabidx:null,onKeyDown:this.as==="button"?this.handleKeyDown:void 0},i("svg",{key:"b0c7076bf30dd58aba0c08a5ce40745250b17e12",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{key:"d8832bcf930aaeb66bbb9aa6d4d3ec078964df27",d:"M12.5882 3.23333C12.5882 2.82832 12.9043 2.5 13.2941 2.5C13.684 2.5 14 2.82832 14 3.23333V7.14444C14 8.62948 12.8412 9.83333 11.4118 9.83333H4.37082L6.49913 12.1745C6.7748 12.4777 6.7748 12.9693 6.49913 13.2726C6.22347 13.5758 5.77653 13.5758 5.50087 13.2726L2.20675 9.64905C1.93108 9.34582 1.93108 8.85418 2.20675 8.55095L5.50087 4.92742C5.77653 4.62419 6.22347 4.62419 6.49913 4.92742C6.7748 5.23065 6.7748 5.72229 6.49913 6.02552L4.37082 8.36667H11.4118C12.0615 8.36667 12.5882 7.81946 12.5882 7.14444V3.23333Z",fill:"currentColor"})),i("slot",{key:"d6bde49fe8235bd9cd218b61b9e8fe49a8b600b3",name:"badge"}))}};h.style=n;export{h as mt_icon_enter};
