$(document).ready(function(){
	
	
	$("#add_err").css('display', 'none', 'important');
	 $("#btn-login").click(function(){	
		  username=$("#login-username").val();
		  password=$("#login-password").val();
		  $.ajax({
		   type: "POST",
		   url: "login/login2.php",
			data: "name="+username+"&pwd="+password,
		   success: function(html){    
			if($.trim(html)==='true')    {
			 //$("#add_err").html("right username or password");
			 window.location="../index.php";
			}
			else    {
			//$("#add_err").css('display', 'inline', 'important');
			 $("#smsg").html("Wrong username or password");
			 alert(html +"Wrong password or username");
			
			}
		   },
		   beforeSend:function()
		   {
		//	$("#add_err").css('display', 'inline', 'important');
		//	$("#add_err").html("<img src='images/ajax-loader.gif' /> Loading...")
		   }
		  });
		return false;
	});
});