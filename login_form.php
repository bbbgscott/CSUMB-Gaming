<?php include_once("header.php"); ?>
    <div id="outer">
    	<div id="inner">
   			<div id="login_div">
    			<h2>Member Login</h2>
        		<form id="login_form" name="login" method="post" action="">
        			<label for="user">Username:</label>
            		<input name="user" id="user" type="text" size="20" maxlength="18" />
            		<label for="pass">Password:</label>
            		<input name="pass" id="pass" type="password" size="20" maxlength="20" />
            		<input type="submit" name="submit" value="login" />
        		</form>
    		</div>
    	</div>
    </div>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js"></script>
<script type="text/javascript">
$(document).ready(function()
{
	$('input').focus(function()
	{
		$(this).css('background-color', '#7fffff');
	});
});
</script>
<script type="text/javascript">
$(document).ready(function()
{
	$('input').blur(function()
	{
		$(this).css('background-color', '#ffffff');
	});
});
</script>
<?php include_once("footer.php"); ?>