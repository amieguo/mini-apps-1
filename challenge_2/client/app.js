// const $ = require('jQuery')

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        let text = event.target[0].value;

        $.ajax('/sales_report', {
            method: 'POST', 
            contentType: 'application/json',
            data: JSON.stringify({text}),
            success: (data) => {
                // $('body').html('')
                $('body').append(data);
            }})
    })
    console.log('testing');
})
