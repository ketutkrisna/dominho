function rubah(angka){
         var reverse = angka.toString().split('').reverse().join(''),
         ribuan = reverse.match(/\d{1,3}/g);
         ribuan = ribuan.join('.').split('').reverse().join('');
         return ribuan;
    }
var array=['<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="4" src="images/love1.gif"></div>',
			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="6" src="images/kamera.gif"></div>',
			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="8" src="images/lawah.gif"></div>',
			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="7" src="images/pisang.gif"></div>',
			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="5" src="images/gift1.gif"></div>',
			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="3" src="images/book.gif"></div>',
			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="2" src="images/book2.gif"></div>',
			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="9" src="images/tangan.gif"></div>'
		];
var fotoglaki=['<img class="fhover" src="images/p1.jpg">','<img class="fhover" src="images/p2.jpg">','<img class="fhover" src="images/p3.jpg">','<img class="fhover" src="images/p4.jpg">','<img class="fhover" src="images/p5.jpg">','<img class="fhover" src="images/p6.jpg">','<img class="fhover" src="images/p7.jpg">','<img class="fhover" src="images/p8.jpg">'];
var fotogcewe=['<img class="fhover" src="images/c1.jpg">','<img class="fhover" src="images/c2.jpg">','<img class="fhover" src="images/c3.jpg">','<img class="fhover" src="images/c4.jpg">','<img class="fhover" src="images/c5.jpg">','<img class="fhover" src="images/c6.jpg">','<img class="fhover" src="images/c7.jpg">','<img class="fhover" src="images/c8.jpg">'];
var time=[3000,4000,5000,6000,7000,8000];

var roll1= Math.round(Math.random()*7);
var roll2= Math.round(Math.random()*7);
var roll3= Math.round(Math.random()*7);
var mulai=document.getElementById('mulai');
var putar=document.getElementById('putar');

const swiper1 = new Swiper('.swiper1', {
          direction: 'vertical',
		});
swiper1.addSlide(1, array[roll1]);

const swiper2 = new Swiper('.swiper2', {
          direction: 'vertical',
		});
swiper2.addSlide(1, array[roll2]);

const swiper3 = new Swiper('.swiper3', {
          direction: 'vertical',
		});
swiper3.addSlide(1, array[roll3]);





$(document).ready(function(){




	// $('#tulis').on('click',function(){
	// 	setTimeout(function() {
	// 		var roll1= Math.round(Math.random()*7);
	// 		const swiper1 = new Swiper('.swiper1', {
	// 		  direction: 'vertical',
	// 		  loop: true,
	// 		  effect: 'slide',
	// 		  // cubeEffect: {
	// 		  //   slideShadows: true,
	// 		  //   shadow: true,
	// 		  //   shadowOffset: 50,
	// 		  //   shadowScale: 2,
	// 		  // },
	// 		  speed: 200,
	// 		  simulateTouch: false,
	// 		  autoplay: {
	// 		   delay: 10,
	// 		   reverseDirection: true,
	// 		 },
	// 		});
	// 		swiper1.addSlide(1, [
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="4" src="images/love1.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="6" src="images/kamera.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="8" src="images/lawah.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="7" src="images/pisang.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="5" src="images/gift1.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="3" src="images/book.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="2" src="images/book2.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="9" src="images/tangan.gif"></div>'
	// 		]);
	// 		setTimeout(function() {
	// 			swiper1.autoplay.stop();
	// 			swiper1.removeAllSlides();

	// 			console.log(roll1)
	// 		}, 4000);
	// 		setTimeout(function() {
	// 		swiper1.addSlide(1, array[roll1]);
	// 		}, 4000);
	// 	}, 100);


	// 	setTimeout(function() {
	// 		var roll2= Math.round(Math.random()*7);
	// 		const swiper2 = new Swiper('.swiper2', {
	// 		  direction: 'vertical',
	// 		  loop: true,
	// 		  effect: 'slide',
	// 		  // cubeEffect: {
	// 		  //   slideShadows: true,
	// 		  // },
	// 		  speed: 200,
	// 		  simulateTouch: false,
	// 		  autoplay: {
	// 		   delay: 10,
	// 		   reverseDirection: true,
	// 		 },
	// 		});
	// 		swiper2.addSlide(1, [
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="4" src="images/love1.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="6" src="images/kamera.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="8" src="images/lawah.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="7" src="images/pisang.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="5" src="images/gift1.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="3" src="images/book.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="2" src="images/book2.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="9" src="images/tangan.gif"></div>'
	// 		]);
	// 		setTimeout(function() {
	// 			swiper2.autoplay.stop();
	// 			swiper2.removeAllSlides();

	// 			console.log(roll2)
	// 		}, 4600);
	// 		setTimeout(function() {
	// 		swiper2.addSlide(1, array[roll2]);
	// 		}, 4600);
	// 		}, 600);


	// 		setTimeout(function() {
	// 		var roll3= Math.round(Math.random()*7);
	// 		const swiper3 = new Swiper('.swiper3', {
	// 		  direction: 'vertical',
	// 		  loop: true,
	// 		  effect: 'slide',
	// 		  // cubeEffect: {
	// 		  //   slideShadows: true,
	// 		  // },
	// 		  speed: 200,
	// 		  simulateTouch: false,
	// 		  autoplay: {
	// 		   delay: 10,
	// 		   reverseDirection: true,
	// 		 },
	// 		});
	// 		swiper3.addSlide(1, [
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="4" src="images/love1.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="6" src="images/kamera.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="8" src="images/lawah.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="7" src="images/pisang.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="5" src="images/gift1.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="3" src="images/book.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="2" src="images/book2.gif"></div>',
	// 			'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="9" src="images/tangan.gif"></div>'
	// 		]);
	// 		setTimeout(function() {
	// 			swiper3.autoplay.stop();
	// 			swiper3.removeAllSlides();

	// 			console.log(roll3)
	// 		}, 5100);
	// 		setTimeout(function() {
	// 		swiper3.addSlide(1, array[roll3]);
	// 		}, 5100);
	// 		}, 1100);

	// });




	if(localStorage.getItem('mychip')){

	}else{
		localStorage.setItem('mychip',0);
		$('#tunggus').show();
		$('#stops').hide();
		$('#starts').hide();
	}
	// localStorage.removeItem('mychip');

	// $('.options').each(function(i,value){
	// 	if(Number(value.value) > Number(localStorage.getItem("mychip"))){
	// 		$(this).attr('disabled','on');
	// 	}
	// });

	$('.mychip').text(rubah(localStorage.getItem("mychip")));
	if(Number(localStorage.getItem("mychip"))<100000){
		$('.reward2m').show();
		$('#tunggus').show();
		$('#stops').hide();
		$('#starts').hide();
		$('#start').removeClass('btn-primary');
		$('#start').addClass('btn-secondary');
		$('.changebet').attr('disabled','on');
	}else{
		$('#tunggus').hide();
		$('#starts').show();
		$('.reward2m').hide();
		$('.changebet').removeAttr('disabled');
	}


	var hitung = 0;
	var persen =0;
	var bet = 100000;

	$('.changebet').on('change',function(){
		bet = $('.changebet').val();
		if(Number(bet) > Number(localStorage.getItem('mychip'))){
			alert('Turunkan bet anda!!!');
			$('#tunggus').show();
			$('#starts').hide();
			$('#stops').hide();
		}else{
			$('#tunggus').hide();
			$('#starts').show();
		}
	});
	
	$('#reward2m').on('click',function(){
		hitung = 0;
		localStorage.setItem("mychip", 2000000);
		$('#tunggus').hide();
		$('#stops').hide();
		$('#starts').show();
		$('#start').text('SPIN');
		$('.reward2m').hide();
		$('.changebet').removeAttr('disabled');
		$('#start').removeClass('btn-secondary');
		$('#start').addClass('btn-primary');
		$('.mychip').text(rubah(localStorage.getItem("mychip")));
	});


		// 	if(typeof(5)){
		// 	console('nano');
		// }else{
			// console.log(typeof('-'));
		// }

	
	var spincount = 0;
	$('.spinotomatis').on('click',function(){
		var tipe = $(this).data('spinotomatis');
		$('.changebet').attr('disabled','on');
		$('.disablebtn').attr('disabled','on');
		spincount=$(this).data('spinotomatis');
		$('#btndropdownstop').addClass('btn-danger');
		$('#tunggus').show();
		$('#starts').hide();
		$('#stop').addClass('btn-danger');
		$('#start').click();
		if(tipe != 'unlimited'){
			$('#tunggu').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;">'+(Number(spincount)-1)+'</span></sup>');
		}else{
			$('#tunggu').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
		}
		setTimeout(function() {
			$('#tunggus').hide();
			$('#stops').show();
			if(tipe != 'unlimited'){
				$('#stop').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;">'+(Number(spincount)-1)+'</span></sup>');
			}else{
				$('#stop').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
			}
		}, 200);

		var kedipawal= setTimeout(function() {
			$('#tunggus').show();
			if(tipe != 'unlimited'){
				$('#tunggu').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;">'+(Number(spincount)-1)+'</span></sup>');
			}else{
				$('#tunggu').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
			}
			$('#stops').hide();
			if(tipe != 'unlimited'){
				$('#stop').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;">'+(Number(spincount)-1)+'</span></sup>');
			}else{
				$('#stop').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
			}
		}, 4000);
	
		// console.log(Number(spincount)-1)
		var inter= setInterval(function(){
			$('#start').click();
			spincount--;
			$('#btndropdownstop').addClass('btn-danger');
			$('#tunggus').hide();
			$('#starts').hide();
			$('#stops').show();
			$('#stop').addClass('btn-danger');
			// console.log(spincount-1);
			if((spincount-1) < 1){
				$('#stop').text('STOP');
				var timeoutstop = setTimeout(function() {
					// $('#tunggu').text('Stop');
					// $('#stop').text('Stop');
					$('#starts').show();
					$('#tunggus').hide();
					$('#stops').hide();
					clearInterval(inter);
					$('.disablebtn').removeAttr('disabled');
				}, 3800);
				$('#stop').on('click',function(){
					clearInterval(inter);
					clearTimeout(timeoutstop);
					// clearTimeout(timeup);
					// console.log(spincount);
					$('#stops').hide();
					$('#tunggus').show();
					if(tipe != 'unlimited'){
						$('#tunggu').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;"></span></sup>');
						$('#stop').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;"></span></sup>');
					}else{
						$('#tunggu').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
						$('#stop').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
					}
					setTimeout(function() {
					spincount=0;
					$('#tunggus').hide();
					$('#starts').show();
					$('.disablebtn').removeAttr('disabled');
					$('.changebet').removeAttr('disabled');
					}, 3800);
				});
			}else{
				var timeup = setTimeout(function() {
					$('#stops').hide();
					$('#tunggus').show();
					$('#starts').hide();
				}, 4000);
				if(tipe != 'unlimited'){
					$('#tunggu').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;">'+(Number(spincount)-1)+'</span></sup>');
					$('#stop').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;">'+(Number(spincount)-1)+'</span></sup>');
				}else{
					$('#tunggu').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
					$('#stop').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
				}
				
				$('#stop').on('click',function(){
					clearInterval(inter);
					clearTimeout(timeoutstop);
					clearTimeout(timeup);
					// console.log(spincount);
					$('#stops').hide();
					$('#tunggus').show();
					if(tipe != 'unlimited'){
						$('#tunggu').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;">'+(Number(spincount)-1)+'</span></sup>');
						$('#stop').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;">'+(Number(spincount)-1)+'</span></sup>');
					}else{
						$('#tunggu').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
						$('#stop').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
					}
					setTimeout(function() {
					spincount=0;
					$('#tunggus').hide();
					$('#starts').show();
					$('.disablebtn').removeAttr('disabled');
					$('.changebet').removeAttr('disabled');
					}, 3800);
				});
			}
		},4200);
		$('#stop').on('click',function(){
			clearInterval(inter);
			clearTimeout(kedipawal);
			// console.log(spincount);
			$('#stops').hide();
			$('#tunggus').show();
			if(tipe != 'unlimited'){
				$('#tunggu').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;">'+(Number(spincount)-1)+'</span></sup>');
				$('#stop').html('STOP <sup><span style="font-size:11px;color:lightblue;position:absolute;right:-13px;">'+(Number(spincount)-1)+'</span></sup>');
			}else{
				$('#tunggu').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
				$('#stop').html('STOP <sup><span style="font-size:16px;color:lightblue;position:absolute;right:-13px;">&#8734;</span></sup>');
			}
			setTimeout(function() {
			spincount=0;
			$('#tunggus').hide();
			$('#starts').show();
			$('.disablebtn').removeAttr('disabled');
			$('.changebet').removeAttr('disabled');
			}, 4000);
		});


	});

	$('#stops').hide();
	$('.lihat').hide();
	$('#api').html('');
	$('#start').on('click',function(){
		$('#tunggu').text('STOP');
	if(Number(bet) > Number(localStorage.getItem('mychip'))){
		alert('Turunkan bet anda!!!');
		$('#tunggus').show();
		$('#starts').hide();
		return false;
	}else{
		$('#tunggus').hide();
		$('#starts').show();
	}
	if(Number(localStorage.getItem('mychip'))<100000){
		setTimeout(function() {
			$('.reward2m').show();
			alert('Silahkan ambil Reward 2M anda!!');
			return false;
		},100);
	}else{
		hitung++;
		$('#no1 img').css({
			transform: 'scale(1) rotate(0deg)',
			transition:'.3s'
		});
		$('#no2 img').css({
			transform: 'scale(1) rotate(0deg)',
			transition:'.3s'
		});
		$('#tulis').text('SPIN KE '+hitung);
		var acak1= Math.round(Math.random()*7);
		var acak2= Math.round(Math.random()*7);
		var acak3= Math.round(Math.random()*7);

		$('.changebet').attr('disabled','on');

		// $('#no1,#no2,#no3').text('');
		$('#tunggus').show();
		$('#starts').hide();
		$('.disablebtn').attr('disabled','on');
		setTimeout(function() {
			$('#rell')[0].play();
		}, 200);

		setTimeout(function() {
			// var roll1= Math.round(Math.random()*7);
			const swiper1 = new Swiper('.swiper1', {
			  direction: 'vertical',
			  loop: true,
			  effect: 'slide',
			  speed: 200,
			  simulateTouch: false,
			  noSwipingClass:'swiper-no-swiping',
			  autoplay: {
			   delay: 1,
			   reverseDirection: true,
			 },
			});
			// swiper1.loopDestroy()
			swiper1.addSlide(1, [
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="4" src="images/love1.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="6" src="images/kamera.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="8" src="images/lawah.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="7" src="images/pisang.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="5" src="images/gift1.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="3" src="images/book.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="2" src="images/book2.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="9" src="images/tangan.gif"></div>'
			]);

			setTimeout(function() {
				swiper1.autoplay.stop();
				swiper1.removeAllSlides();
			}, 2000);
			setTimeout(function() {
				swiper1.addSlide(1, array[acak1]);
				swiper1.disable();
			}, 2000);
		}, 100);


		setTimeout(function() {
			// var roll2= Math.round(Math.random()*7);
			const swiper2 = new Swiper('.swiper2', {
			  direction: 'vertical',
			  loop: true,
			  effect: 'slide',
			  speed: 200,
			  simulateTouch: false,
			  noSwipingClass:'swiper-no-swiping',
			  autoplay: {
			   delay: 1,
			   reverseDirection: true,
			 },
			});
			swiper2.addSlide(1, [
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="4" src="images/love1.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="6" src="images/kamera.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="8" src="images/lawah.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="7" src="images/pisang.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="5" src="images/gift1.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="3" src="images/book.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="2" src="images/book2.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="9" src="images/tangan.gif"></div>'
			]);
			setTimeout(function() {
				swiper2.autoplay.stop();
				swiper2.removeAllSlides();
			}, 2500);
			setTimeout(function() {
				swiper2.addSlide(1, array[acak2]);
				swiper2.disable();
			}, 2500);
			}, 300);


			setTimeout(function() {
			// var roll3= Math.round(Math.random()*7);
			const swiper3 = new Swiper('.swiper3', {
			  direction: 'vertical',
			  loop: true,
			  effect: 'slide',
			  speed: 200,
			  simulateTouch: false,
			  noSwipingClass:'swiper-no-swiping',
			  autoplay: {
			   delay: 1,
			   reverseDirection: true,
			 },
			});
			swiper3.addSlide(1, [
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="4" src="images/love1.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="6" src="images/kamera.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="8" src="images/lawah.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="7" src="images/pisang.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="5" src="images/gift1.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="3" src="images/book.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="2" src="images/book2.gif"></div>',
				'<div class="swiper-slide bg-info swiper-no-swiping"><img class="ambiltambahchip swiper-no-swiping" width="50" data-tambahchip="9" src="images/tangan.gif"></div>'
			]);
			setTimeout(function() {
				swiper3.autoplay.stop();
				swiper3.removeAllSlides();
				$('#rell')[0].pause();
				$('#start').text('SPIN');
				if((spincount-1)<1){
					$('.changebet').removeAttr('disabled');
				}
			}, 3000);
			setTimeout(function() {
				swiper3.addSlide(1, array[acak3]);
				swiper3.disable();
			}, 3000);
			}, 500);

		// $('#no1,#no2,#no3').addClass('animasi');
		// setTimeout(function() {
		// 	$('#no1').removeClass('animasi');
		// 	$('#no1').html(array[acak1]);
		// }, 2000);
		// setTimeout(function() {
		// 	$('#no2').removeClass('animasi');
		// 	$('#no2').html(array[acak2]);
		// }, 3000);
		// setTimeout(function() {
		// 	// $('#start').hide();
		// 	$('#rell')[0].pause();
		// 	$('#no3').removeClass('animasi');
		// 	$('#no3').html(array[acak3]);
		// 	$('#start').text('Spin');
		// 	$('.changebet').removeAttr('disabled');
		// }, 4000);

		if(acak1 == acak2 && acak1 == acak3 && acak2 == acak3){
			var updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			setTimeout(function() {
				var tambahchip = $('.ambiltambahchip').data('tambahchip');
				var betkaliitem = Number(bet)*3*Number(tambahchip)*Number(tambahchip)*Number(tambahchip);
				var updatechip = Number(localStorage.getItem('mychip'))+Number(betkaliitem);
				localStorage.setItem('mychip',updatechip);
				$('#relljpfff')[0].play();
				$('#tulis').text(rubah(betkaliitem));
				$('.textjp').text('JAKPOT');
				// $('.mychip').text(rubah(localStorage.getItem('mychip')));
				// $('#start').show();
				setTimeout(function() {
				$('#no1 img').css({
					transform: 'scale(1.2) rotate(20deg)',
					transition:'.4s'
				});
				$('#no2 img').css({
					transform: 'scale(1.2) rotate(20deg)',
					transition:'.4s'
				});
				$('#no3 img').css({
					transform: 'scale(1.2) rotate(20deg)',
					transition:'.4s'
				});
				}, 200);

				if(Number(bet) > Number(localStorage.getItem('mychip'))){
					alert('Turunkan bet anda!!!');
					$('#tunggus').show();
					$('#starts').hide();
					return false;
				}



				if((betkaliitem/bet) >=1 && (betkaliitem/bet) <=18){
					if((spincount-1) < 1){
						setTimeout(function() {
							$('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('BIG WIN');
							$('.tipewin').css('margin-top','-10px');
							$('.textjp').text('JAKPOT');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							setTimeout(function() {
								$('#relljpfff')[0].pause();
							}, 7500);
						}, 500);
					}else{
						setTimeout(function() {
							$('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('BIG WIN');
							$('.tipewin').css('margin-top','-10px');
							$('.textjp').text('JAKPOT');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							setTimeout(function() {
								$('#relljpfff')[0].pause();
							}, 7500);
						}, 500);
						setTimeout(function() {
							$('#api').hide();
							$('#lihat').fadeOut();
						}, 4000);
					}
				}else if((betkaliitem/bet) >18 && (betkaliitem/bet) <=27){
					if((spincount-1) < 1){
						setTimeout(function() {
							$('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('MEGA WIN');
							$('.tipewin').css('margin-top','-10px');
							$('.textjp').text('JAKPOT');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							setTimeout(function() {
								$('#relljpfff')[0].pause();
							}, 7500);
						}, 500);
					}else{
						setTimeout(function() {
							$('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('MEGA WIN');
							$('.tipewin').css('margin-top','-10px');
							$('.textjp').text('JAKPOT');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							setTimeout(function() {
								$('#relljpfff')[0].pause();
							}, 7500);
						}, 500);
						setTimeout(function() {
							$('#api').hide();
							$('#lihat').fadeOut();
						}, 4000);
					}
				}else if((betkaliitem/bet) >27){
					if((spincount-1) < 1){
						setTimeout(function() {
							$('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('SUPER WIN');
							$('.tipewin').css('margin-top','-10px');
							$('.textjp').text('JAKPOT');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							setTimeout(function() {
								$('#relljpfff')[0].pause();
							}, 7500);
						}, 500);
					}else{
						setTimeout(function() {
							$('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('SUPER WIN');
							$('.tipewin').css('margin-top','-10px');
							$('.textjp').text('JAKPOT');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							setTimeout(function() {
								$('#relljpfff')[0].pause();
							}, 7500);
						}, 500);
						setTimeout(function() {
							$('#api').hide();
							$('#lihat').fadeOut();
						}, 4000);
					}
				}




				// if((spincount-1) < 1){
				// 	setTimeout(function() {
				// 		$('#api').html('<img src="images/api.gif">');
				// 		$('#lihat').fadeIn();
				// 		$('#jumlahjp').text(rubah(betkaliitem));
				// 		$('#tunggus').hide();
				// 		if((spincount-1)<1){
				// 			$('.disablebtn').removeAttr('disabled');
				// 			$('#starts').show();
				// 		}
				// 		setTimeout(function() {
				// 			$('#relljpfff')[0].pause();
				// 		}, 7500);
				// 	}, 500);
				// }else{
				// 	setTimeout(function() {
				// 		$('#api').html('<img src="images/api.gif">');
				// 		$('#lihat').fadeIn();
				// 		$('#jumlahjp').text(rubah(betkaliitem));
				// 		$('#tunggus').hide();
				// 		if((spincount-1)<1){
				// 			$('.disablebtn').removeAttr('disabled');
				// 			$('#starts').show();
				// 		}
				// 		setTimeout(function() {
				// 			$('#relljpfff')[0].pause();
				// 		}, 7500);
				// 	}, 500);
				// 	setTimeout(function() {
				// 		$('#api').hide();
				// 		$('#lihat').fadeOut();
				// 	}, 4000);
				// }


			}, 3500);
		}else if(acak1 == acak2){
			var updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			setTimeout(function() {
				var tambahchip = $('.ambiltambahchip').data('tambahchip');
				var betkaliitem = Number(bet)*3*Number(tambahchip);
				var updatechip = Number(localStorage.getItem('mychip'))+Number(betkaliitem);
				localStorage.setItem('mychip',updatechip);
				$('.mychip').text(rubah(localStorage.getItem('mychip')));
				if((betkaliitem/bet) >=15 && (betkaliitem/bet) <=18){
					if((spincount-1) < 1){
						setTimeout(function() {
							// $('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('BIG WIN');
							$('.tipewin').css('margin-top','50px');
							$('.textjp').text('');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							// setTimeout(function() {
							// 	$('#relljpfff')[0].pause();
							// }, 7500);
						}, 500);
					}else{
						setTimeout(function() {
							// $('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('BIG WIN');
							$('.tipewin').css('margin-top','50px');
							$('.textjp').text('');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							// setTimeout(function() {
							// 	$('#relljpfff')[0].pause();
							// }, 7500);
						}, 500);
						setTimeout(function() {
							// $('#api').hide();
							$('#lihat').fadeOut();
						}, 3000);
					}
				}else if((betkaliitem/bet) >18 && (betkaliitem/bet) <=24){
					if((spincount-1) < 1){
						setTimeout(function() {
							// $('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('MEGA WIN');
							$('.tipewin').css('margin-top','50px');
							$('.textjp').text('');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							// setTimeout(function() {
							// 	$('#relljpfff')[0].pause();
							// }, 7500);
						}, 500);
					}else{
						setTimeout(function() {
							// $('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('MEGA WIN');
							$('.tipewin').css('margin-top','50px');
							$('.textjp').text('');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							// setTimeout(function() {
							// 	$('#relljpfff')[0].pause();
							// }, 7500);
						}, 500);
						setTimeout(function() {
							// $('#api').hide();
							$('#lihat').fadeOut();
						}, 3000);
					}
				}else if((betkaliitem/bet) >24 && (betkaliitem/bet) <=27){
					if((spincount-1) < 1){
						setTimeout(function() {
							// $('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('SUPER WIN');
							$('.tipewin').css('margin-top','50px');
							$('.textjp').text('');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							// setTimeout(function() {
							// 	$('#relljpfff')[0].pause();
							// }, 7500);
						}, 500);
					}else{
						setTimeout(function() {
							// $('#api').html('<img src="images/api.gif">');
							$('#lihat').fadeIn();
							$('#jumlahjp').text(rubah(betkaliitem));
							$('.tipewin').text('SUPER WIN');
							$('.tipewin').css('margin-top','50px');
							$('.textjp').text('');
							$('#tunggus').hide();
							if((spincount-1)<1){
								$('.disablebtn').removeAttr('disabled');
								$('#starts').show();
							}
							// setTimeout(function() {
							// 	$('#relljpfff')[0].pause();
							// }, 7500);
						}, 500);
						setTimeout(function() {
							// $('#api').hide();
							$('#lihat').fadeOut();
						}, 3000);
					}
				}
				$('#no1 img').css({
					transform: 'scale(1.2) rotate(20deg)',
					transition:'.4s'
				});
				$('#no2 img').css({
					transform: 'scale(1.2) rotate(20deg)',
					transition:'.4s'
				});
				$('#tulis').text(rubah(betkaliitem));
				setTimeout(function() {
					$('#rellfff')[0].play();
				}, 400);

				if(Number(bet) > Number(localStorage.getItem('mychip'))){
					alert('Turunkan bet anda!!!');
					$('#tunggus').show();
					$('#starts').hide();
					return false;
				}
				setTimeout(function() {
					$('#tunggus').hide();
					if((spincount-1)<1){
						$('.disablebtn').removeAttr('disabled');
						$('#starts').show();
					}
				}, 1000);
			}, 3500);
		}else{
			var updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			if(Number(updatechip)<100000){
				setTimeout(function() {
					$('.changebet').attr('disabled','on');
					$('.reward2m').show();
					$('#tunggus').show();
					$('#starts').hide();
					$('#starts').addClass('btn-secondary');
				}, 3600);
			}else{
				setTimeout(function() {
					$('#tunggus').hide();
					if((spincount-1)<1){
						$('.disablebtn').removeAttr('disabled');
						$('#starts').show();
					}
					// console.log((spincount-1)+'<----');
				}, 3800);
			}

			
		}


		// console.log(acak1);
		// console.log(acak2);
		// console.log(acak3);
		// $('#no1,#no2,#no3').text('');
		// $('#tunggus').show();
		// $('#rell')[0].play();

		// $('#no1,#no2,#no3').addClass('animasi');
		// setTimeout(function() {
		// 	$('#no1').removeClass('animasi');
		// 	$('#no1').html(array[acak1]);
		// }, 2000);
		// setTimeout(function() {
		// 	$('#no2').removeClass('animasi');
		// 	$('#no2').html(array[acak2]);
		// }, 3000);
		// setTimeout(function() {
		// 	// $('#start').hide();
		// 	$('#rell')[0].pause();
		// 	$('#no3').removeClass('animasi');
		// 	$('#no3').html(array[acak3]);
		// 	$('#tunggus').hide();
		// 	$('#start').text('Lagi');
		// }, 4000);

		// if(acak1 == acak2 || acak1 ==acak3 || acak2 == acak3){
		// 	persen++
		// 	var doublepersen=persen*4;
		// 	setTimeout(function() {
		// 		$('.persentase').css('width',doublepersen+'%');
		// 		$('.persentase').text(doublepersen+'%');
		// 	}, 4000);
		// 	if(doublepersen >= 100){
		// 		setTimeout(function() {
		// 			$('#no1').html(array[7]);
		// 		}, 2000);
		// 		setTimeout(function() {
		// 			$('#no2').html(array[7]);
		// 		}, 3000);
		// 		setTimeout(function() {
		// 			$('#api').html('<img src="images/api.gif">');
		// 			$('#no3').html(array[7]);
		// 			$('#reward').show();
		// 		}, 4000);
		// 		return false;
		// 	}
		// }
		// for(var countacak=0 ; countacak < 8 ; countacak++){
		// 	if(acak1==countacak && acak2==countacak && acak3==countacak){
		// 		setTimeout(function() {
		// 			$('#api').html('<img src="images/api.gif">');
		// 			$('#reward').show();
					
		// 		}, 4000);
		// 	}
		// }
	}
	});

	$('#closejp').on('click',function(){
		$('.lihat').fadeOut();
		$('#api').html('');
		$('.mychip').text(rubah(localStorage.getItem('mychip')));
	})


	$('#masuknama').hide();
	$('#lihatreward').hide();
	$('#reward').hide();
	$('#reward').click(function(){
		$('#masuknama').show();
		$('#header').addClass('blur');
	});

	$('#back').click(function(){
		$('#masuknama').hide();
		$('#header').removeClass('blur');
	});

	$('#span').focusin(function(){
		$('#span').hide();
	});

	$('#button').click(function(){
		$('#nama').val();
		
		if($('#nama').val().length==0){
			$('#span').text('nama tidak boleh kosong');
		}else{
			$('#lihatreward').show();
			$('#selamat').text('Selamat '+$('#nama').val());
			// if($('.gender').val()=='laki-laki'){
			// 	$('#foto').html(fotoglaki[roll]);
			// }else{
			// 	$('#foto').html(fotogcewe[roll]);
			// }
		}
	});

	// $('.gender').on('change',function(){
	// 	$('.hidegender').hide();
	// 	$('#start').fadeIn();
	// })

	// $('#mainlagi').click(function(){
	// 	window.location.reload();
	// });




});


