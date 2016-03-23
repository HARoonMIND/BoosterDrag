$(document).ready(function(){
	$("#add_err").css('display', 'none', 'important');
	 $("#btn-signup").click(function(){	
		  username=$("#username").val();
		  password=$("#password").val();
		  firstname=$("#firstname").val();
		  lastname=$("#lastname").val();
		  username=$("#username").val();
		  email=$("#email").val();
		  icode=$("#icode").val();
		  
		  $.ajax({
		   type: "POST",
		   url: "login/signup.php",
			data: "name="+username+"&password="+password+"&firstname="+firstname+"&lastname="+lastname+"&email="+email+"&icode="+icode,
		   success: function(html){    
			if($.trim(html)==='true') {
			 $("#msg").html("right username or password");
			 window.location="../index.php";
			}
			else    {
			//$("#add_err").css('display', 'inline', 'important');
			 //$("#add_err").html("<img src='images/alert.png' />Wrong username or password");
			 $("#msg").html("Wrong username or password"+html);
			
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