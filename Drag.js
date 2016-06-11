// JavaScript Document
function Drag(id)
{
	_this=this;
	this.oDiv = document.getElementById(id);
	this.disX=0;
	this.disY=0;
	
	this.oDiv.onmousedown=function(ev)
	{
		_this.fnDown(ev);
	};
};
Drag.prototype.fnDown=function (ev)
{
	_this=this;
	var oEvent = ev||event;
	this.disX = oEvent.clientX - this.oDiv.offsetLeft;
	this.disY = oEvent.clientY - this.oDiv.offsetTop;
	document.onmousemove=function(ev)
	{
		_this.fnMove(ev);
	};
	document.onmouseup=function(ev)
	{
		_this.fnUp(ev);
	};
	
};
Drag.prototype.fnMove=function (ev)
{
	var oEvent = ev||event;
	var l=oEvent.clientX - this.disX;
	var t=oEvent.clientY - this.disY;
	
	this.oDiv.style.left=l+'px';
	this.oDiv.style.top=t+'px';
};
Drag.prototype.fnUp=function ()
{
	document.onmousemove=null;
	document.onmouseup=null;
};