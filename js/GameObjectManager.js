function GameObjectManager()
{
	this.gameObjects = new Array();
	this.lastFrame = new Date().getTime();
	this.xScroll = 0;
	this.yScroll = 0;
	this.applicationManager = null;
	this.canvas = null;
	this.context2D = null;
	this.backBuffer = null;
	this.backBufferContext2D = null;
	this.StartupGameObjectManager = function()
	{
		g_GameObjectManager = this;
		
		this.canvas = document.getElementById('canvas');
		this.context2D = this.canvas.getContext('2d');
		this.backBuffer = document.createElement('canvas');
		this.backBuffer.width = this.canvas.width;
		this.backBuffer.height = this.canvas.height;
		this.backBufferContext2D = this.backBuffer.getContext('2d');
		
		this.applicationManager = new ApplicationManager().startupApplicationManager();
		
		setInterval(function(){g_GameObjectManager.draw();}, SECONDS_BETWEEN_FRAMES);
		
		return this;
	}
	
	this.draw = function()
	{
		var thisFrame = new Date().getTime();
		var dt = (thisFrame - this.lastFrame)/1000;
		this.lastFrame = thisFrame;
		
		this.backBufferContext2D.clearRect(0, 0, this.backBuffer.width, tihs.backBuffer.height);
		this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
		
		for(x in this.gameObjects)
		{
			if(this.gameObjects[x].update)
			{
				this.gameObjects[x].update(dt, this.backBufferContext2D, this.xScroll, this.yScroll);
			}
		}
		
		for(x in this.gameObjects)
		{
			if(this.gameObjects[x].draw)
			{
				this.gameObjects[x].draw(dt, this.backBufferContext2D, this.xScroll, this.yScroll);
			}
		}
		
		this.context2D.drawImage(this.backBuffer, 0, 0);
	};
	
	this.addGameObject = function(gameObject)
	{
		this.gameObjects.push(gameObject)
		this.gameObjects.sort(function(a, b){return a.zOrder - b.zOrder;})
	};
	
	this.removeGameObject = function(gameObject)
	{
		this.gameObjects.removeObject(gameObject);
	}
}