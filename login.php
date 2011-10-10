<?php include_once("header.php"); ?>
		<div>
        	<p>Please enter your username and password:</p>
        </div>
        <div>
        	<form id="login" method="post">
            	<label for="username_input">Username:</label>
    			<input class="input" id="username_input" name="username_input" size="20" type="text" maxlength="15"/>
                <label for="password_input">Password:</label>
    			<input class="input" id="password_input" name="password_input" size="20" type="text" maxlength="15"/>
                <input class="button" type="submit" name="Submit" value="Send"/>
            </form>
        </div>
<?php include_once("footer.php"); ?>