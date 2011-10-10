<!DOCTYPE html>
<html>
	<head>
    	<link type="text/css" rel="stylesheet" media="all" href="css/menu.css"/>
        <link type="text/css" rel="stylesheet" media="all" href="css/layout.css"/>
        <link type="text/css" rel="stylesheet" media="all" href="css/login.css"/>
        <?php
			$name = $_GET["name"];
			if ($_SESSION['PHP_SELF'] == "\/csumb\/index.php") echo "<link type=\"text/css\" rel=\"stylesheet\" media=\"all\" href=\"css/home.css\"\/>"; 
		?>
		<title>CSUMB Gaming Registry</title>
	</head>
	<body>
    	<div id="menu">
				<ul class="dropdown">
                	<li>
                		<div id="home">
                    		<a>Home</a>
                    	</div>
                    	<ul>
                        	<li>
                        		<a href="index.php">Home</a>
                        	</li>
                    	</ul>
                	</li> 
                	<li>
                		<div id="data">
                    		<a>Databases</a>
                    	</div>
                    	<ul>
                        	<li>
                            	<a>Gamers</a>
                            	<ul>
                                    <li>
                                    	<a href="step1.php">Edit My Info</a>
                                    </li>
                                	<li>
                                		<a href="#">Show</a>
                                	</li>
                            	</ul>
                        	</li>
                        	<li>
                            	<a>Games</a>
                            	<ul>
                                	<li>
                                		<a href="#">Show</a>
                                	</li>
                                    <li>
                                    	<a href="#">Suggest New</a>
                                    </li>
                            	</ul>
                        	</li>
                    	</ul>
                	</li>
                    <li>
                    	<div id="about">
                        	<a>About</a>
                        </div>
                        <ul>
                        	<li>
                            	<a href="#">Our Blog</a>
                            </li>
                        	<li>
                            	<a href="about.php">About Us</a>
                            </li>
                        </ul>
                    </li>
                	<li>
                		<div id="login">
                			<a>Login</a>
                    	</div>
                    	<ul>
                        	<li>
                        		<a href="login_form.php">Login</a>
                        	</li>
                        	<li>
                        		<a href="#">Logout</a>
                        	</li>
                    	</ul>
                	</li>
            	</ul>
            </div>
            <div id="content">