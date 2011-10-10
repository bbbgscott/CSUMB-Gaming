<?php
	session_start();
	
	function MakeCheckbox($name, $label)
	{
		echo "<label for=\"{$name}\">{$label}: </label>";
		echo "<input name=\"{$name}\" id=\"{$name}\" type=\"checkbox\" >";
	}
	
	function MakeInput($name, $label)
	{
		echo "<label for=\"{$name}\">{$label} ID:</label>";
		echo "<input name=\"{$name}\" id=\"{$name}\" type=\"text\">";
	}
?>