
// Add Jquery for Power-button  -----------

$(function () {

    $("#power-button").click(function () {
        var currentValue = $("#display").val();
        $("#display").val(currentValue * currentValue)
    })

});



// Add Jquery for cube - button     --------------------------

$(function () {

    $("#cube-button").click(function () {
        var currentValue = $("#display").val();
        $("#display").val(currentValue * currentValue * currentValue)
    })

});



// Add Jquery for squaroot- button -------------------------

$(function () {

    $("#squaroot-button").click(function () {
        var currentValue = $("#display").val();
        $("#display").val(Math.sqrt(currentValue))
    })

});


// Add Jquery For x to the power y button --------------------

$(function () {
    let previousValue = '';

    $('#more-button').click(function () {
        previousValue = $('#display').val();
        $('#display').val('');
    });

    $('.equal').click(function () {
        let newValue = $('#display').val();
        if (previousValue !== '') {
            let result = Math.pow(parseFloat(previousValue), parseFloat(newValue));
            $('#display').val(result);
            previousValue = ''; // Reset previousValue after calculation
        } 
    });

});




// Add Events when key press on the keyboard ---------------------- 

$(function () {

    $(document).keydown(function (event) {
        let display = $("#display");
        let key = event.key;

        if ((key >= 0 && key <= 9) || key === '.') {
            display.val(display.val() + key);

        }
        
        else if (key === '+' || key === '-' || key === '*' || key === '/') {
            display.val(display.val() + key);

        } 
        
        else if (key === 'Enter') {

            event.preventDefault();     // prevent from refresh the page
            display.val(eval(display.val()));
            
        }

        else if (key === 'Backspace') {
            display.val(display.val().slice(0, -1));
        }
    });
});

/*--------------------------------Add function for menu buttons--------------------------------*/

var scientific = document.querySelector(".extra-buttons")
var normalmenu = document.querySelector(".menu-2");
var scientificmenu = document.querySelector(".menu-1");

document.querySelector(".menu-1").onclick = function () {


    scientific.style.display = "block" ;
    scientificmenu.style.display = "none" ;
    normalmenu.style.display = "block" ;

}

document.querySelector(".menu-2").onclick = function (){

    scientific.style.display = "none" ;
    scientificmenu.style.display = "block" ;
    normalmenu.style.display = "none" ;
}