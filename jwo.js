var favoriteNumber = function(number) 
{
	number = prompt("Whats your favorite number?" , "Enter number here");
    if(isNaN(number))
    {
        alert("That's not a number silly");
    }
    else
    {
        if(number > 9000)
        {
            alert("IT'S OVER 9000!!!!!");
        }
        else if(number == 911)
        {
            alert("You're a horrible person.");
        }
        else if(number == 69)
        {
            alert("Well that's mature.");
        }
        else if(number == 42)
        {
            alert("Correct.");
        }
        else 
        {
            alert("Ok.");
        }
    }
}


//jQuery

$(document).ready(function()
{
    $('.menu').mouseenter(function()
    {
        $(this).fadeTo(150 , 0.75);
    });
    $('.menu').mouseleave(function()
    {
        $(this).fadeTo(150 , 1);
    });
    $('#scl').mouseenter(function()
    {
        $(this).fadeTo(200 , 0.75);
    });
    $('#scl').mouseleave(function()
    {
        $(this).fadeTo(200 , 1);
    });
    $('#natwdl').hide();
    $('#natwt').click(function()
    {
        $('#natwdl').toggle('blind' , 500);
    });
});