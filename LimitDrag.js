// JavaScript Document
	function LimitDrag(id)//�õ�Drag������
	{
		Drag.call(this,id);
	};
	for(var i in Drag.prototype)
	{
		LimitDrag.prototype[i]=Drag.prototype[i];
	}
	
	//��дDrag��fnMove����
	LimitDrag.prototype.fnMove=function(ev)
	{
		var oEvent = ev||event;
		var l=oEvent.clientX - this.disX;
		var t=oEvent.clientY - this.disY;
		/*
		���µ�һЩ�жϴ���ʱ��ֹ��ק���ϳ�����֮��
		*/
		if(l<0)//���Ʋ����Ƴ���������
		{
			l=0;
		}
		else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth)//���Ʋ����Ƴ�������ұ�
		{
			l=document.documentElement.clientWidth-this.oDiv.offsetWidth;
		}
		this.oDiv.style.left=l+'px';
		if(t<0)//���Ʋ����Ƴ�������ϱ�
		{
			t=0;
		}
		else if(t>document.documentElement.clientHeight-this.oDiv.offsetHeight)//���Ʋ����Ƴ�������±�
		{
			t=document.documentElement.clientHeight-this.oDiv.offsetHeight;
		}
		this.oDiv.style.top=t+'px';
	};