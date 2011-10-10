window.onload = function()
{
	//var data = [ $hp, $att, $def, $sa, $sd, $sp];
	var data = [1, 2, 3, 4, 5, 6, 7, 8];
	
	var rose = new RGraph.Rose('myRose', data);
	rose.Set('chart.labels', ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed']);
	rose.Draw();
}