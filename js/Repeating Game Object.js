function RepeatingGameObject()
{
	this.width = 640;
	this.height = 480;
	this.scrollFactor = 1;
	this.startupRepeatingGameObject = function(image, x, y, z, width, height, scrollFactor)
	{
		this.startupVisualGameObject(image, x, y, z);
		this.width = width;
		this.height = height;
		this.scrollFactor = scrollFactor;
		return this;
	}
	this.shutdownstartupReapeatingGameObject = function()
	{
		this.shutdownVisualGameObject();
	}
	
	this.draw = function(dt, canvas, xScroll, yScroll)
	{
		var areaDrawn = [0, 0];
		
		for(var y = 0; y < this.height; y +=areaDrawn[1])
		{
			for(var x = 0; x < this.width; x +=areaDrawn[0])
			{
				var newPosition = [this.x + x, this.y + y];
				var newFillArea = [this.width - x, this.height - y];
				var newScrollPosition = [0, 0];
				if(x==0)
					newScrollPosition[0] = xScroll * this.scrollFactor;
				if(y==0)
					newScrollPosition[1] = yScroll * this.scrollFactor;
				areaDrawn = this.drawRepeat(canvas, newPosition, newFillArea, newScrollPosition);
			}
		}
	}
	
	this.drawRepeat = function(canvas, newPosition, newFillArea, newScrollPostion)
	{
		var xOffset = Math.abs(newScrollPosition[0]) % this.image.width;
		var yOffset = Math.abs(newScrollPosition[1]) % this.image.height;
		var left = newScrollPosition[0]<0?this.image.width-xOffset:xOffset;
		var top = newScrollPosition[1]<0?this.image.height-yOffset:yOffset;
		var width = newFillArea[0] < this.image.width-left?newFillArea[0]:this.image.width-left;
		var height = newFillArea[1] < this.image.height-top?newFillArea[1]:this.image.height-top;
		
		canvas.drawImage(this.image, left, top, width, height, newPosition[0], newPosition[1], width, height);
		
		return [width, height];
	}
}
RepeatingGameObject.prototype = new VisualGameObject();