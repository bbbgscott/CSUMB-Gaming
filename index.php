<?php $name = $_SESSION['PHP_SELF']; ?>

<?php include_once("header.php"); ?>

        <div id="sidebar">
        	<h1>Site News</h1>
            <p><?php echo "<link type=\"text/css\" rel=\"stylesheet\" media=\"all\" href=\"css/home.css\"\/>"; ?></p>
            <p><?php echo $name; ?></p>
        </div>
		<!--<div id="logo">
        	<img src="images/Gamer_Logo.png" alt="CSUMB Gaming Logo" />
        </div>-->
        <div id="blurb">
        	<h1>Welcome</h1>
			<p>We would like to take the opportunity to welcome you to the CSUMB gaming website.  Our mission is to bring gamers together from within our university.</p>
        </div>
<?php include_once("footer.php"); ?>