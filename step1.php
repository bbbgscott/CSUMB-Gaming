<?php include_once("header.php");  include_once("config.php"); 

echo "<h1>Please select which games you play.</h1>";

echo "<div class=\"step_form\" id=\"step1\">";
	echo "<form id=\"step1_form\" method=\"post\" action=\"step2.php\">";
		MakeCheckbox("ps3", "Playstation 3");
		MakeCheckbox("360", "Xbox 360");
		MakeCheckbox("steam", "Steam");
		MakeCheckbox("wow", "WOW");
        MakeCheckbox("eve", "EVE Online");
		MakeCheckbox("lol", "League of Legends");
        echo "<input name=\"submit\" id=\"submit\" type=\"submit\" />";
    echo "</form>";
echo "</div>";
include_once("footer.php"); 
?>