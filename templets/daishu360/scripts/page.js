//通用分页脚本

$(function()
{
	//下拉分页
	$("#pageSelect").change(function()
    {
   	 	$("#pageNo").val($(this).val());
        $("#pageForm").submit();
    });
    
    $(".pageindex").click(function()
    {
    	var currentNum = $(this).attr("currentNum");
    	if(currentNum){
	   		$("#pageNo").val(currentNum);
		    $("#pageForm").submit();
    	}
    });
    
    //首页&尾页
    $(".page").click(function()
    	    {
    	    	var currentNum = $(this).attr("currentNum");
    	    	if(currentNum){
    		   		$("#pageNo").val(currentNum);
    			    $("#pageForm").submit();
    	    	}
    	    });
});