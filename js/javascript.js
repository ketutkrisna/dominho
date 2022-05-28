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


// var roll= Math.round(Math.random()*8);
var mulai=document.getElementById('mulai');
var putar=document.getElementById('putar');





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
		$('#tunggu').show();
		$('#start').hide();
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
		$('#tunggu').show();
		$('#start').hide();
		$('#start').removeClass('btn-primary');
		$('#start').addClass('btn-secondary');
		$('.changebet').attr('disabled','on');
	}else{
		$('#tunggu').hide();
		$('#start').show();
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
			$('#tunggu').show();
			$('#start').hide();
		}else{
			$('#tunggu').hide();
			$('#start').show();
		}
	});
	
	$('#reward2m').on('click',function(){
		hitung = 0;
		localStorage.setItem("mychip", 2000000);
		$('#tunggu').hide();
		$('#start').show();
		$('.reward2m').hide();
		$('.changebet').removeAttr('disabled');
		$('#start').removeClass('btn-secondary');
		$('#start').addClass('btn-primary');
		$('.mychip').text(rubah(localStorage.getItem("mychip")));
	});

	// $('#tunggu').hide();
	$('.lihat').hide();
	$('#api').html('');
	$('#start').on('click',function(){
	if(Number(bet) > Number(localStorage.getItem('mychip'))){
		alert('Turunkan bet anda!!!');
		$('#tunggu').show();
		$('#start').hide();
		return false;
	}else{
		$('#tunggu').hide();
		$('#start').show();
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
		$('#tulis').text('Putaran ke-'+hitung);
		var acak1= Math.round(Math.random()*7);
		var acak2= Math.round(Math.random()*7);
		var acak3= Math.round(Math.random()*7);

		$('.changebet').attr('disabled','on');

		// $('#no1,#no2,#no3').text('');
		$('#tunggu').show();
		$('#start').hide();
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
			  autoplay: {
			   delay: 10,
			   reverseDirection: true,
			 },
			});
			swiper1.addSlide(1, [
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="4" src="images/love1.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="6" src="images/kamera.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="8" src="images/lawah.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="7" src="images/pisang.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="5" src="images/gift1.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="3" src="images/book.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="2" src="images/book2.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="9" src="images/tangan.gif"></div>'
			]);
			setTimeout(function() {
				swiper1.autoplay.stop();
				swiper1.removeAllSlides();

				console.log(acak1)
			}, 3000);
			setTimeout(function() {
			swiper1.addSlide(1, array[acak1]);
			}, 3000);
		}, 100);


		setTimeout(function() {
			// var roll2= Math.round(Math.random()*7);
			const swiper2 = new Swiper('.swiper2', {
			  direction: 'vertical',
			  loop: true,
			  effect: 'slide',
			  speed: 200,
			  simulateTouch: false,
			  autoplay: {
			   delay: 10,
			   reverseDirection: true,
			 },
			});
			swiper2.addSlide(1, [
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="4" src="images/love1.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="6" src="images/kamera.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="8" src="images/lawah.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="7" src="images/pisang.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="5" src="images/gift1.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="3" src="images/book.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="2" src="images/book2.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="9" src="images/tangan.gif"></div>'
			]);
			setTimeout(function() {
				swiper2.autoplay.stop();
				swiper2.removeAllSlides();

				console.log(acak2)
			}, 3500);
			setTimeout(function() {
			swiper2.addSlide(1, array[acak2]);
			}, 3500);
			}, 300);


			setTimeout(function() {
			// var roll3= Math.round(Math.random()*7);
			const swiper3 = new Swiper('.swiper3', {
			  direction: 'vertical',
			  loop: true,
			  effect: 'slide',
			  speed: 200,
			  simulateTouch: false,
			  autoplay: {
			   delay: 10,
			   reverseDirection: true,
			 },
			});
			swiper3.addSlide(1, [
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="4" src="images/love1.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="6" src="images/kamera.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="8" src="images/lawah.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="7" src="images/pisang.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="5" src="images/gift1.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="3" src="images/book.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="2" src="images/book2.gif"></div>',
				'<div class="swiper-slide bg-info"><img class="ambiltambahchip" width="50" data-tambahchip="9" src="images/tangan.gif"></div>'
			]);
			setTimeout(function() {
				swiper3.autoplay.stop();
				swiper3.removeAllSlides();
				$('#rell')[0].pause();
				$('#start').text('Spin');
				$('.changebet').removeAttr('disabled');
				console.log(acak3)
			}, 4000);
			setTimeout(function() {
			swiper3.addSlide(1, array[acak3]);
			}, 4000);
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
				// $('.mychip').text(rubah(localStorage.getItem('mychip')));

				if(Number(bet) > Number(localStorage.getItem('mychip'))){
					alert('Turunkan bet anda!!!');
					$('#tunggu').show();
					$('#start').hide();
					return false;
				}
				setTimeout(function() {
					$('#api').html('<img src="images/api.gif">');
					$('#lihat').fadeIn();
					$('#jumlahjp').text(rubah(betkaliitem));
					$('#tunggu').hide();
					$('#start').show();
					setTimeout(function() {
						$('#relljpfff')[0].pause();
					}, 3700);
				}, 1000);
			}, 4500);
		}else if(acak1 == acak2){
			var updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			setTimeout(function() {
				var tambahchip = $('.ambiltambahchip').data('tambahchip');
				var betkaliitem = Number(bet)*Number(tambahchip);
				var updatechip = Number(localStorage.getItem('mychip'))+Number(betkaliitem);
				localStorage.setItem('mychip',updatechip);
				$('.mychip').text(rubah(localStorage.getItem('mychip')));

				$('#no1 img').css({
					transform: 'scale(1.4) rotate(15deg)',
					transition:'.3s'
				});
				$('#no2 img').css({
					transform: 'scale(1.4) rotate(15deg)',
					transition:'.3s'
				});
				setTimeout(function() {
					$('#rellfff')[0].play();
				}, 400);

				if(Number(bet) > Number(localStorage.getItem('mychip'))){
					alert('Turunkan bet anda!!!');
					$('#tunggu').show();
					$('#start').hide();
					return false;
				}else{
					setTimeout(function() {
						$('#tunggu').hide();
						$('#start').show();
						$('#rellfff')[0].pause();
					}, 900);
				}
			}, 4500);
		}else{
			var updatechip = Number(localStorage.getItem('mychip'))-Number(bet);
			localStorage.setItem('mychip',updatechip);
			$('.mychip').text(rubah(localStorage.getItem('mychip')));
			if(Number(updatechip)<100000){
				setTimeout(function() {
					$('.reward2m').show();
					$('#tunggu').show();
					$('#start').hide();
					$('#start').addClass('btn-secondary');
					$('.changebet').attr('disabled','on');
				}, 4500);
			}else{
				setTimeout(function() {
					$('#tunggu').hide();
					$('#start').show();
				}, 4800);
			}

			
		}


		// console.log(acak1);
		// console.log(acak2);
		// console.log(acak3);
		// $('#no1,#no2,#no3').text('');
		// $('#tunggu').show();
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
		// 	$('#tunggu').hide();
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


