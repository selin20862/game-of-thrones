$( document ).ready(function() {

    $("#tableau article:first-child").on("mouseleave", "a", function(){
        $(this).removeClass('mouseEnter');
    });

    // function lancerAnimation() {
    //     gsap.from("#tableau article:first-child article div a", {
    //         duration: 0.7,
    //         x: -100,
    //         ease: "power2.out(1, 0.3)",
    //         stagger: 0.1
    //     });
    // }

    // Attendez que le document soit complètement chargé
    // $(document).ajaxComplete(function () {
    //     lancerAnimation();
    // });


    $.ajax({
        url: 'got.json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {

            console.log(data);

            var perso = "";
            $.each(data, function (index, post) {

                perso += '<div><a href="" data-id="'+post.id+'">';
                perso += '<span>'+ post.id + '</span>';
                perso += '<span>'+ post.fullName + '</span>';
                perso += '<span>' + post.family + '</span>';
                perso += '</a></div><hr>'

            });
            $("#tableau article:first-child").html(perso);


        }//fin success
    }); //fin ajax

    $("#tableau article:first-child").on("mouseenter", "a", function(e){
        e.preventDefault();
        $(this).addClass('mouseEnter');
        var id = $(this).data('id');
        $.ajax({
            url: 'https://thronesapi.com/api/v2/Characters/'+id,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                var perso = "";
              
        
                    perso += '<div><img src="'+data.imageUrl+'"></div>';
                    perso += '<p>First Name : '+data.firstName+'</p>'
                    perso += '<p>Last Name : '+data.lastName+'</p>'
                    perso += '<p>FullName : '+data.fullName+'</p>'
                    perso += '<p>Family : '+data.family+'</p>'
                    perso += '<p>Title : '+data.title+'</p>'
                    
       
                $("#tableau article:last-child").html(perso);
            }//fin success
        }); //fin ajax
    });//fin click

 });//ready