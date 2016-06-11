	// JavaScript Document
	function Teacher(name,age,title)
	{
		Person.call(this,name,age);
		this.title=title;
	};
	Teacher.prototype=Person.prototype;
	Teacher.prototype.showTitle=function()
	{
		alert(this.title);
	};