var ctx = canvas.getContext('2d');
var x = 80,
    tickCount = 0;
var sprite = new Image();
    sprite.src = '../img/animation.png';
    sprite.onload = function() {
        tick();
        requestAnimationFrame(tick);

    };
    function tick() {            
        if (tickCount > 10){
            draw();
            tickCount = 0;
        }
        tickCount += 1;
        requestAnimationFrame(tick);
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        x = (x > 620 ? 80 :  x + 150);
        ctx.drawImage(sprite, x, 10, 150, 250, 15, 15, 150, 250);

    }