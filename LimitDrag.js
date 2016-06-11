// JavaScript Document
	function LimitDrag(id)//得到Drag的属性
	{
		Drag.call(this,id);
	};
	for(var i in Drag.prototype)
	{
		LimitDrag.prototype[i]=Drag.prototype[i];
	}
	
	//重写Drag的fnMove方法
	LimitDrag.prototype.fnMove=function(ev)
	{
		var oEvent = ev||event;
		var l=oEvent.clientX - this.disX;
		var t=oEvent.clientY - this.disY;
		/*
		以下的一些判断处理时防止拖拽被拖出界面之外
		*/
		if(l<0)//限制不能移出界面的左边
		{
			l=0;
		}
		else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth)//限制不能移出界面的右边
		{
			l=document.documentElement.clientWidth-this.oDiv.offsetWidth;
		}
		this.oDiv.style.left=l+'px';
		if(t<0)//限制不能移出界面的上边
		{
			t=0;
		}
		else if(t>document.documentElement.clientHeight-this.oDiv.offsetHeight)//限制不能移出界面的下边
		{
			t=document.documentElement.clientHeight-this.oDiv.offsetHeight;
		}
		this.oDiv.style.top=t+'px';
	};