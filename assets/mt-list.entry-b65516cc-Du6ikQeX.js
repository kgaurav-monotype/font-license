import{G as c,W as h,v as s}from"./index-D230z0wX.js";/*!
 * Built with Stencil
 * Copyright (c) 2024 Monotype Imaging Inc..
 */const n=".mt-list{list-style:none;margin:0;padding:var(--mt-spacing-unit--xs)}.mt-list .mt-list__option{margin:0 0 var(--mt-spacing-unit--2xs)}.mt-list .mt-list__option:last-of-type{margin:0}",a=n,d=class{constructor(i){c(this,i),this.handleclicklistitem=h(this,"handleclicklistitem",7),this.clickListItem=t=>{const e=[...this.selectedoptions];this.selection=="single"&&e.map(o=>{o.theme=this.theme,o.textcolor=this.textcolor,o.selected=!1}),e[t].selected=!e[t].selected,e[t].theme=e[t].theme==this.theme?this.selectedtheme:this.theme,e[t].textcolor=e[t].textcolor==this.textcolor?this.selectedtextcolor:this.textcolor,this.selectedoptions=e;const l={current:t,data:e,groupid:this.groupid,selection:this.selection};this.handleclicklistitem.emit(l)},this.updateitem=t=>{this.items.map((e,l)=>{const o={name:e,id:l,selected:this.selection=="single"&&l==t,textcolor:this.textcolor,size:this.size,theme:this.selection=="single"&&l==t?this.selectedtheme:this.theme};this.selectedoptions=[...this.selectedoptions,o]})},this.groupid=void 0,this.showtick=!1,this.theme="blue",this.textcolor=void 0,this.selectedtheme="blue",this.selectedtextcolor=void 0,this.size="small",this.selection="single",this.items=[],this.width="auto",this.selectedindex=0,this.selectedoptions=[]}watchSelectedindex(i){this.selectedoptions=[],this.updateitem(i)}componentWillLoad(){this.updateitem(this.selectedindex)}render(){const i={small:"micro1--regular",medium:"body2--regular",large:"body1--regular"};return s("ul",{key:"7ea3c442e8f3434e9b081b1d0fad0d8f75355807",class:{"mt-list":!0,[`is-select--${this.selection}`]:!!this.selection},part:"mt-list",style:{width:this.width}},this.selection=="separate"?s("slot",null):this.selectedoptions.map((t,e)=>s("li",{class:"mt-list__option",part:"mt-list__option"},s("mt-button",{color:t.theme,variant:"none",fullwidth:!0,size:t.size,type:"button",onClick:()=>this.clickListItem(e)},t.selected&&t.name,!t.selected&&s("mt-typography",{tag:"span",variant:i[this.size]},t.name),this.showtick&&t.selected?s("mt-icon-tick",{color:t.textcolor,slot:"icon-end"}):null))))}static get watchers(){return{selectedindex:["watchSelectedindex"]}}};d.style=a;export{d as mt_list};
