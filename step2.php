<?php 
include_once("header.php");
require_once("config.php");
$ps3 = $_POST['ps3'];
$xbox = $_POST['360'];
$steam = $_POST['steam'];
$wow = $_POST['wow'];
$eve = $_POST['eve'];
$lol = $_POST['lol'];

echo '<div class="step_form" id="step2">';
	echo '<form id="step2_form" method="post" action="">';
		if($ps3 == 'on'){ MakeInput("ps3", "PSN"); }
		if($xbox == 'on'){ MakeInput("xbox", "XBL"); }
		if($steam == 'on'){ MakeInput("steam", "Steam"); }
		if($steam == 'on'){ MakeInput("steam", "Steam64"); }
		if($wow =='on'){ MakeInput("wow", "WOW"); }
		if($eve == 'on'){ MakeInput("eve", "EVE"); }
		if($lol == 'on'){ MakeInput("lol", "League of Legends");}
		echo '<input name="back" id="back" type="button" value="back" onclick="history.go(-1);return true;" width="57px" >';
		echo '<input name="submit" id="submit" type="submit">';
	echo '</form>';
echo '</div>';

include_once("footer.php");
?>