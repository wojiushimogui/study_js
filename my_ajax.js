// JavaScript Document
function my_ajax(url,funSucce,funFail)
{
	//实现Ajax需要如下的4个步骤
	//1、创建对象,为解决兼容器，使用if
	var oAjax=null;
	if(window.XMLHttpRequest)
	{	
		//所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象
		oAjax = new XMLHttpRequest();
	}
	else
	{
		//老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象
		oAjax = new ActiveXObject("Microsoft.XMLHTTP"); 
	}
	//2、连接服务器  open(请求的方式(get or post),url,是异步(true)还是同步(false))
	//为了避免得到缓存，向 URL 添加一个唯一的 ID  (可使用：Math.random())
	oAjax.open('get',url+'?t='+new Date().getTime(),true);//
	
	//3、发送请求 
	oAjax.send();
	
	//4、接收数据
	oAjax.onreadystatechange=function()
	{
		/*
		oAjax.readyState的状态有如下的5种情况
		0: 请求未初始化
		1: 服务器连接已建立
		2: 请求已接收
		3: 请求处理中
		4: 请求已完成，且响应已就绪
		*/
		if (oAjax.readyState==4)//接收完成
		{
			if(oAjax.status==200)//成功
			{
				//alert('成功'+oAjax.responseText);
				funSucce(oAjax.responseText);
			}
			else
			{
				funFail(oAjax.status);
			}
		  					
		 }				  
	};
}
