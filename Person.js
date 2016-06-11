// JavaScript Document
function Person(name,age)
{
	this.name=name;
	this.age=age;
};
Person.prototype.showName=function()
{
	alert(this.name);
};
Person.prototype.showAge=function()
{
	alert(this.age);
};