// JavaScript Document
function my_ajax(url,funSucce,funFail)
{
	//ʵ��Ajax��Ҫ���µ�4������
	//1����������,Ϊ�����������ʹ��if
	var oAjax=null;
	if(window.XMLHttpRequest)
	{	
		//�����ִ��������IE7+��Firefox��Chrome��Safari �Լ� Opera�����ڽ� XMLHttpRequest ����
		oAjax = new XMLHttpRequest();
	}
	else
	{
		//�ϰ汾�� Internet Explorer ��IE5 �� IE6��ʹ�� ActiveX ����
		oAjax = new ActiveXObject("Microsoft.XMLHTTP"); 
	}
	//2�����ӷ�����  open(����ķ�ʽ(get or post),url,���첽(true)����ͬ��(false))
	//Ϊ�˱���õ����棬�� URL ���һ��Ψһ�� ID  (��ʹ�ã�Math.random())
	oAjax.open('get',url+'?t='+new Date().getTime(),true);//
	
	//3���������� 
	oAjax.send();
	
	//4����������
	oAjax.onreadystatechange=function()
	{
		/*
		oAjax.readyState��״̬�����µ�5�����
		0: ����δ��ʼ��
		1: �����������ѽ���
		2: �����ѽ���
		3: ��������
		4: ��������ɣ�����Ӧ�Ѿ���
		*/
		if (oAjax.readyState==4)//�������
		{
			if(oAjax.status==200)//�ɹ�
			{
				//alert('�ɹ�'+oAjax.responseText);
				funSucce(oAjax.responseText);
			}
			else
			{
				funFail(oAjax.status);
			}
		  					
		 }				  
	};
}
