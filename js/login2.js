$(document).ready(function(){
	$("#add_err").css('display', 'none', 'important');
	 $("#btn-login").click(function(){	
		  username=$("#login-username").val();
		  password=$("#login-password").val();
		  $.ajax({
		   type: "POST",
		   url: "login/login.php",
			data: "name="+username+"&pwd="+password,
		   success: function(html){    
			if($.trim(html)==='true')    {
			 //$("#add_err").html("right username or password");
			 window.location="../index.php";
			}
			else    {
			//$("#add_err").css('display', 'inline', 'important');
			 //$("#add_err").html("<img src='images/alert.png' />Wrong username or password");
			
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