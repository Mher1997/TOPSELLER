const owl = $(".carousel-default");
owl.owlCarousel({
    center: true,
    items: 1.5,
    loop: true,
    margin: -50,
    dots: false,
    nav: true,
    navText: ["<img src='./images/slider1/arrow-left.png'>","<img src='./images/slider1/arrow-right.png'>"],
    animateOut: 'fadeOut',
    1000 : {
        items: 1,
        margin: 10,
    }
})

const owl2 = $(".instructions-slide");

owl2.owlCarousel({
    center: true,
    items: 1.5,
    loop: true,
    margin: -50,
    dots: false,
    nav: true,
    navText: ["<img src='./images/instruction-slider/left.png'>","<img src='./images/instruction-slider/right.png'>"],
    animateOut: 'fadeOut',
    responsiveClass: true,
    responsive :{
        0: {
            items: 1.2,
            margin: 20,
        },
        480: {
            items: 1.2,
            margin: 5,
        },
        768: {
            items: 1.5
        },
        1024: {
            items: 1.5
        }
    }
})

const owl3 = $(".price-list-carousel");

owl3.owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 50,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive :{
        0: {
            items: 1.5,
            margin: 20,
        },
        480: {
            items: 1.5,
            margin: 20,
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        }
    }
})

const owlProblems = $(".carousel-problems");

owlProblems.owlCarousel({
    center: true,
    items: 1.5,
    loop: true,
    margin: -50,
    dots: false,
    nav: true,
    navText: ["<img src='./images/slider1/arrow-left.png'>","<img src='./images/slider1/arrow-right.png'>"],
    animateOut: 'fadeOut',
    1000 : {
        items: 1,
        margin: 10,
    }
})

owl2.on('changed.owl.carousel',function(property){
    let index = property.item.index -1;
    if(index==0){
        index = 3
    }
    if(index==4){
        index = 1
    }
    $('.instructions .slider .owl-nav span').html('Шаг ' + index);
});


let show = false;
$('.header-menu-icon img').click(function(){
	const current = this;
	if(!show){
		$(current).attr('src', './images/close.png');
		show = true;
	}else{
		$(current).attr('src', './images/menu.png');
		show = false;
	}
	$('.header-menu').toggle();
});

$(document).ready(function(){
    $('.switch-options').children().click(function(e){
        const target = $(e.target);
        target.parent().children().removeClass("active");
        target.addClass('active');
    })
    $('.marketplaces').children().click(function(e){
        const target = $(e.target);
        const alt = target.closest('div').find('img').attr('alt');
        const options = $('.price-option');
        
        $('.marketplaces').children().removeClass("active");
        target.closest('div').addClass('active');
        

        for(let i=0; i<options.length; i++){
            if(options[i].className.indexOf(1)!==-1){
                $(options[i]).find('h3').html(`${prices[alt][1]} руб`);
            }else if(options[i].className.indexOf(2)!==-1){
                $(options[i]).find('h3').html(`${prices[alt][2]} руб`);
            }else{
                $(options[i]).find('h3').html(`${prices[alt][0]} руб`);
            }
        }
    })
})

const prices = {
    ozon: [4990, 11990, 22500],
    wb: [2990, 7090, 20000],
    beru: [9190, 15090, 25600],
}

$(document).ready(function(){
	$('form').on('submit', function(e) {
		e.preventDefault();

		var $fields = $(this).serialize();
		$.ajax({
			type: 'POST',
			url: 'https://tech01.ru/_site/topse11er/sender.php',
			data: $fields,
			dataType: 'json',
			success: function(data){
				if (data.status == 'success') {
					alert('Спасибо, мы вам перезвоним');
				}
				console.log(data);
			}
		});

		return false;
	});
});
