
(function($) {
    $(function() {
        
        //Выводит progresbar по мере заполнения полей
        //
        $(document).on('focusout','input',function(event){
            var q=0;
            var l=$("input[type != 'submit']").length;
            for (var i=0;i<l;i++){
                if($("input:eq("+i+")").val()) ++q;
            };
            $( "#progressbar" ).progressbar({max : 7, value: q,});
        });
        
        //Проверяет данные
        //
        $(document).on('click', '#send', function(event) {

            $('input.active').removeClass('active');

            $.post('validator.php',
                $("form").serialize(),
                   
              function(data,myresult){
                
                if(data.result){
                    $('#response').html('Принято!');
                }
                else{
                    $('#response').html('Неправильные данные:');
                }
                
                var myError = '<br>';

                $.each(data.error, function(key,value){
                    myError += key+' : '+value +'<br>';
                    $("#"+key.toLowerCase().replace(' ','_')).addClass('active');
                });
                $('input.active').effect('highlight',1000);
                
                //Вывод progressbar
                //
                /*var j = 0;
                $('input.active').each(function(k){
                    k++;
                    return j=k;
                });
                    //console.log(''+j);
                $( "#progressbar" ).progressbar({max : 7, value: 7-j,});*/
                
                
                $('#response').html($('#response').html() +'<br>'+myError).dialog( {
                    width : 800,
                    height : 400,
                    buttons: {
                    Ok: function() { $( this ).dialog( "close" );}
                    }
                });

            },"json");
            
        });
        event.preventDefault();
    });
})(jQuery);

