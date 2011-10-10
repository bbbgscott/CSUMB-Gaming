// Coliding Discs experiment
    // Copyright Benjamin Joffe, 2010

    window.onload = function()
    {
        var canvas = document.getElementById('balls');
        var ctx = canvas.getContext('2d');
        var co = [];
        var starter = Math.random()*9 >> 0;

        for (var i=0; i<9; i++)
        {
            co[i] = 
	        {
                x: (750/3)*(0.5+i%3), // x-position
                y: (750/3)*(0.5+((i/3)>>0)), // y-position
                r: 1.5*(i*2+15) // radius
            };
            // generate random velocitys in both x and y components
            co[i].vx = 1-2*Math.random();
            co[i].vy = Math.sqrt(1-co[i].vx*co[i].vx) * ( Math.random() < 0.5 ? -1 : 1 );

            // this will cause them to instead be all still at the start except for one ball
            // the strange maths is to ensure that it has the same momentum regardless of the ball chosen

            co[i].vx *= i==starter ? 200/co[i].r : 0;
            co[i].vy *= i==starter ? 200/co[i].r : 0;

        }

        function draw()
        {

            //ctx.clearRect(0,0,canvas.width,canvas.height);

            ctx.fillStyle='rgba(252,252,252,0.5)';
            ctx.fillRect(0,0,canvas.width, canvas.height);
            ctx.fillStyle = '#000';
            //ctx.strokeStyle = '#fff';
            //ctx.lineWidth = 2;

            for (i=0; i<co.length; i++)
            {

                ctx.beginPath();
        		ctx.moveTo(co[i].x+co[i].r, co[i].y);
        		ctx.arc(co[i].x, co[i].y, co[i].r, 0, Math.PI*2, true);
        		ctx.fill();
        		/*
        		ctx.save();
        		ctx.translate(co[i].x, co[i].y);
        		ctx.rotate(co[i].x/50);
        		ctx.drawImage(ball_src, -co[i].r, -co[i].r, co[i].r*2, co[i].r*2);
        		ctx.restore();
        		*/
      		}
    	}

	    function move()
    	{
     		var total_time_left = 5;

		    var col_index; // the index number of the ball that is colliding first
      		var col_index2// the other ball that is collided with (if a collision with a ball instead of wall)
      		var col_time; // the time that the colliding ball travels before colliding

      		var ball_time; // a temporary variable to check the time taken until a collision
      		var temp;

      		var i, test_method, j;

      		var col_method;


      		while (true)
      		{

        		col_index = -1; // choose an invalid index initially
        		col_time = total_time_left;

        		// this loop finds the ball that will collide first
        		for (i=0; i<co.length; i++)
        		{
        	  		// if (god forbid) the ball has illegally exited the screen somehow, then turn it around

          			if (co[i].vx < 0 && co[i].x < co[i].r || co[i].vx > 0 && co[i].x + co[i].r > canvas.width)
          			{
            			co[i].vx *= -1;
            			continue;
          			}

        			if (co[i].vy < 0 && co[i].y < co[i].r || co[i].vy > 0 && co[i].y + co[i].r > canvas.height)
        			{
          				co[i].vy *= -1;
          				continue;
        			}

        			// now for the real collision checks

        			// first test against the walls
        			for (test_method = 0; test_method < 4; test_method++ )
        			{
          				switch (test_method)
          				{
            				case 0 :
            					ball_time = (co[i].r - co[i].x) / co[i].vx; // left wall
            					break;
            				case 1 :
            					ball_time = (co[i].r - co[i].y) / co[i].vy; // top wall
            					break;
            				case 2 :
            					ball_time = (canvas.width - co[i].r - co[i].x) / co[i].vx; // right wall
            					break;
            				case 3 :
            					ball_time = (canvas.height - co[i].r - co[i].y) / co[i].vy; // top wall
            					break;
          				}

          				if (ball_time > 0 && ball_time < col_time)
          				{
            				col_time = ball_time;
            				col_index = i;
            				col_method = test_method;
          				}
        			}

        			// test against other balls
        			for (j = i+1; j < co.length; j++)
        			{
          				ball_time = check_collision(co[i], co[j]);
          				if (ball_time > 0 && ball_time < col_time)
          				{
            				col_method = 5;
            				col_time = ball_time;
            				col_index = i;
            				col_index2 = j;
          				}
        			}
     			}

     			// this loop moves all the balls as far as the first collision
     			for (i=0; i<co.length; i++)
     			{
       				co[i].x += col_time * co[i].vx;
       				co[i].y += col_time * co[i].vy;
 				}

 				if (col_index == -1) 
					break; // nothing collided, end the loop

 				// bounce the balls off the walls
 				if (col_method == 0 || col_method == 2) // side walls
 				{
 					co[col_index].vx*=-1;
 				}
 				if (col_method == 1 || col_method == 3) // top and bottom walls
 				{
 					co[col_index].vy*=-1;
 				}
 				if (col_method == 5)
 				{
 					apply_collision(co[col_index], co[col_index2]);
 				}

 				total_time_left -= col_time;

 			}

 		}

 		// checks the collision time between two balls
 		function check_collision(b1, b2){
 		var
 		a = b1.x - b2.x,
 		b = b1.vx - b2.vx,
 		c = b1.y - b2.y,
 		d = b1.vy - b2.vy;

 		// I probably shouldn't have crushed the following logic into one line, makes it just a wee bit unreadible
 		return b==0&&d==0||(c=(b=2*(a*b+c*d)+0*(d=b*b+d*d))*b-4*d*(a*a+c*c-(c=b1.r+b2.r)*c))<0?-1:(-b-Math.sqrt(c))/(2*d);
 	}

 	// apply the velocity changes between two balls that have collided
 	function apply_collision(b1, b2)
 	{
 		var
 		a = (b2.r * b2.r) / (b1.r * b1.r) ,
 		b = (b1.y - b2.y) / (b1.x - b2.x) ,
 		c = 2*( (b1.vx - b2.vx) +b* ( b1.vy - b2.vy ) )/((1+b*b)*(1+a));

 		b2.vx += c*.9;
 		b2.vy += c*b*.9;
 		b1.vx -= c*a;
 		b1.vy -= c*a*b;
 	}

 	setInterval(function()
 	{
 		move();
 		draw();
 	},30
	);

 	draw();
}; 