import{G as a,W as e,v as t}from"./index-zGEakuCh.js";/*!
 * Built with Stencil
 * Copyright (c) 2024 Monotype Imaging Inc..
 */const n=":host{display:inline-flex}",o=n,c=class{constructor(s){a(this,s),this.handleIconClick=e(this,"handleIconClick",7),this.iconClick=i=>{i.stopPropagation(),this.handleIconClick.emit(i)},this.handleKeyDown=i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.iconClick(i))},this.rotate="up",this.animation="none",this.duration="2s",this.icontitle="enabled",this.customalttext=void 0,this.size="sm",this.as="icon",this.tabidx=0}render(){return t("mt-icon",{key:"4b8cf3e1c7ad2a885b310dbba64f95fe3df516be",alttext:"Pie success Icon",rotate:this.rotate,animation:this.animation,icontitle:this.icontitle,duration:this.duration,size:this.size,exportparts:"mt-icon",customalttext:this.customalttext,as:this.as,role:this.as==="button"?this.as:void 0,onClick:this.as==="button"?this.iconClick:void 0,tabidx:this.as==="button"?this.tabidx:null,onKeyDown:this.as==="button"?this.handleKeyDown:void 0},t("img",{key:"d34b87a24ef432f27d1f2a3e2fd6bb6af1fce4bd",alt:"Pie success Icon",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMTAiIGZpbGw9IiMyNkE1NjgiLz4KPHBhdGggZD0iTTYgMTAuODA3N0w4LjUgMTMuNUwxNCA2LjUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="}),t("slot",{key:"aabdc74856d880ebfe2b8052c4f0bbde85d7e013",name:"badge"}))}};c.style=o;export{c as mt_icon_pie_success};