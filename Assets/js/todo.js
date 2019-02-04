var x = "blue";
$("ul").on("click", "li" , function () 
{
	$(this).toggleClass("strike");
});
$("ul").on("click","span", function(e)
{
	$(this).parent().fadeOut(250,function()
		{
			$(this).remove();	
		});
	e.stopPropagation();
});
$("input[type='text']").on("keypress", function(e)
{
	if(e.which===13)
	{
		var newtodo = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newtodo +" </li>");
		$(this).val("");
		if(x == "green")
		{
			green();
		}
		if(x == "blue")
		{
			blue();
		}
		if(x == "red")
		{
			red();
		}
		if(x == "yellow")
		{
			yellow();
		}
	}
});
// $(".fa-plus").on("click",function()
// {
// 	$("input[type='text']").fadeToggle(250);
// });
$(".fa-bars").on("click", function(){
	$(".nav").fadeToggle(250);
});
function green()
{
	$("li").css("backgroundColor","rgb(202, 247, 173)");
 	$("li:nth-of-type(2n)").css("backgroundColor","#f7f7f7")
	$("h1").css("backgroundColor","rgb(26, 186, 100)");
	$(".nav").fadeOut(250);
	x = "green";

};
function red()
{
	$("li").css("backgroundColor","rgb(249, 167, 167)");
	$("li:nth-of-type(2n)").css("backgroundColor","#f7f7f7")
	$("h1").css("backgroundColor","rgb(206, 64, 45)");
	$(".nav").fadeOut(250);
	x ="red";

}
function yellow()
{
	$("li").css("backgroundColor","rgb(249, 248, 157)");
	$("li:nth-of-type(2n)").css("backgroundColor","#f7f7f7");
	$("h1").css("backgroundColor","rgb(239, 236, 57)");
	$(".nav").fadeOut(250);
	x = "yellow";
}	
function blue()
{
	$("li").css("backgroundColor","#ffffff");
	$("li:nth-of-type(2n)").css("backgroundColor","#f7f7f7")
	$("h1").css("backgroundColor","steelblue");
	$(".nav").fadeOut(250);
	x = "blue";
}
$("#green").on("click",green);
$("#red").on("click",red);
$("#yellow").on("click",yellow);
$("#blue").on("click",blue);