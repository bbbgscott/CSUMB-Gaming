<?php

$content = explode("\n", file_get_contents('characters.txt'));
foreach($content as $name) {
	if(strpos(strtolower($name), strtolower($_GET['q'])) !== false) {
		print $name ."\n";
	}
}