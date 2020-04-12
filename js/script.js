$(document).ready(function (event) {
    //   var btn = $('#btn');
    //   var textInput = $('input[type = "text"]').val();
    //   var container = $('.container');
    //   console.log(textInput);
    //   function colorChange(textInput) {
    //     container.css('background-color', `${textInput}`);
    //     textInput = '';
    //   }
    //   btn.click(colorChange(textInput));



    function setTime() {
        var date = new Date();
        var hours = date.getHours() == 0 ? 12 : date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        var ampm = date.getHours() < 12 ? 'AM' : 'PM';

        $('.hour').html(hours + ':');
        $('.minute').html(minutes + ':');
        $('.second').html(seconds);
        $('.ampm').html(ampm);
    }

    window.setInterval(setTime, 1000);




});