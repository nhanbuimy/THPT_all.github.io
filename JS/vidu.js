//Go to top
$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) $(".toTop").fadeIn();
        else $(".toTop").fadeOut();
    });
        $(".toTop").click(function () {
        $("body,html").animate({scrollTop: 0}, "slow");
    });

                /* 
            $(document).ready(function() {
                $("#showId").click(function() {
                    $(".formright").show(2000)   
                });
                $("#hideId").click(function() {
                    $(".formright").hide(2000)
                });
            }) */

// Ẩn hiện form
        $("#showId").click(function() {
            $(".formright").show(2000)   
    });
        $("#hideId").click(function() {
            $(".formright").hide(2000)
    });




// TIME

    setInterval(function() {
        let clock = document.getElementById("time");
        clock.innerHTML = showLock();
    }, 1000);
    
    /*var today=new Date();
    var d = today.getDay()
    var h = today.getHours();//lấy dữ liệu ra
    var m = today.getMinutes();
    var s = today.getSeconds();
    var date="Thứ "+(today.getDay()+1)+", "+today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear() +", " + h + ":" + m + ":" + s;
    document.getElementById("time").innerHTML=date;*/

    
})


function myFunction() {
        var element = document.body;
        element.classList.toggle("nightlight");
    }

// TIME
function showLock() {
    let d = new Date();

    return `Thứ ${d.getDay() + 1}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} , ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

/*function init() {
    setInterval(function() {
        let clock = document.getElementById("time");
        clock.innerHTML = showLock();
    }, 1000);
}*/



// cố định menu
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() >= 200) 
        {
            $("nav").css({
                "position":"fixed",
                "left":0, /* phu deu khoang cach 2 ben*/
                "right":0,
                "top":10,
                "z-index":999,
                "opacity": 0.7,
            })
        }
        else {
            $("nav").css({
                "position":"relative",
                "left":0, /* phu deu khoang cach 2 ben*/
                "right":0,
                "top":0,
                "opacity": 1
            });
        }
    });
})


// Slide show
    var images = ["Pictures/hinh.jpeg","Pictures/hinh2.jpg","Pictures/hinh4.jpg"];
    var i = 1;

    function ChuyenAnh() {
        var slide = document.getElementById("slide");
        i++;
        if(i ==3) {
            i = 0;
        }
        slide.src = images[i];
    } setInterval(ChuyenAnh,1000);


// Xoa form
    const form = document.querySelector('form');
    form.reset();

// Gui form
function Submit(){
    alert("Đã gửi thành công!");
    return true;
}



