//jquery
$(document).ready(function(){

     var body=$('body');
      
    var color=[
        'red',
        'green',
        'blue',
        'violet',
        'grey',
        'orange',
        'pink',
        'lavender',
        'burgandy',
        'cyan',
        'ash',
    ];
    var i=0;
     
    function changeColor(){

        body.css('background',color[i]);

        i++;
        if(i>=color.length){
            i=0;
        }
    }

    setInterval(changeColor,1000);
    }
)