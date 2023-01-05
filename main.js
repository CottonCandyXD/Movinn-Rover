canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_x = 10
rover_y = 10
rover_width = 100
rover_height = 90
bg_list = ["mars.jpg","mars1.jpg","mars2.jfif","mars3.jfif"];
randomnumber=Math.floor(Math.random()*4)
background_img=bg_list[randomnumber]
rover_img = "rover.png";

function add() {
    background_imgtag=new Image();
    background_imgtag.onload=upload_background;
    background_imgtag.src=background_img;
    
    rover_imgtag=new Image();
    rover_imgtag.onload=upload_rover;
    rover_imgtag.src=rover_img; 
}

function upload_background() {
ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height)
}

function upload_rover(){
ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
key_pressed = e.keyCode
console.log(key_pressed)
if (key_pressed=="38")
{
    up () ;
}

if (key_pressed=="37")
{
    left () ;
}

if (key_pressed=="40")
{
    down () ;
}

if (key_pressed=="39")
{
    right () ;
}
}

function up() 
{
    if(rover_y>=0)
    {rover_y=rover_y-10;
        upload_background();
        upload_rover();
    };
}

function left() 
{
    if(rover_x>=0)
    {rover_x=rover_x-10;
        upload_background();
        upload_rover();
    };
}

function down() 
{
    if(rover_y<=500)
    {rover_y=rover_y+10;
        upload_background();
        upload_rover();
    };
}

function right() 
{
    if(rover_x<=700)
    {rover_x=rover_x+10;
        upload_background();
        upload_rover();
    };
}





