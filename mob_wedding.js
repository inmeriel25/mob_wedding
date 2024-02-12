
$(function(){
    // SDK를 초기화 합니다. 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init('89c3297cf7155951c8014797417c4e54');

    // SDK 초기화 여부를 판단합니다.
    console.log(Kakao.isInitialized());
			
	 $('.slider-2 .page-nav > div').click(function() {
	
		var $this = $(this);
		var $pagenav = $this.parent()
		var $current = $pagenav.find('.active');
	
		$current.removeClass('active');
		$this.addClass('active');
	
		var index = $this.index();
		var $슬라이더 = $this.closest('.slider-2');
	
		$슬라이더.find('.slides > div.active').removeClass('active');
		$슬라이더.find('.slides > div').eq(index).addClass('active');
	
	
	});
	
	$('.slider-2 > .side-btns > div:first-child').click(function() {
		var $this = $(this);
		var $slider = $this.closest('.slider-2');
	
		var $current = $slider.find('.page-nav > div.active');
		var $post = $current.prev();
	
		if ( $post.length == 0 ) {
			$post = $slider.find('.page-nav > div:last-child');
		}
	
		$post.click();
	});
	
	$('.slider-2 > .side-btns > div:last-child').click(function() {
		var $this = $(this);
		var $slider = $this.closest('.slider-2');
	
		var $current = $slider.find('.page-nav > div.active');
		var $post = $current.next();
	
		if ( $post.length == 0 ) {
			$post = $slider.find('.page-nav > div:first-child');
		}
	
		$post.click();
	});

});


function galleryArrowClick1(){
	var $this = $(this);
    var $pagenav = $this.parent()
    var $current = $pagenav.find('.active');

    $current.removeClass('active');
    $this.addClass('active');

    var index = $this.index();
    var $슬라이더 = $this.closest('.slider-2');

    $슬라이더.find('.slides > div.active').removeClass('active');
    $슬라이더.find('.slides > div').eq(index).addClass('active');    
}


function galleryArrowClick2(){
    var ele = document.querySelector('.arrow1');
    var $slider = ele.closest('.slider-2');

    var $current = $slider.find('.page-nav > div.active');
    var $post = $current.prev();

    if ( $post.length == 0 ) {
        $post = $slider.find('.page-nav > div:last-child');
    }

    $post.click();   
}


function galleryArrowClick3(){
	var ele = document.querySelector('.arrow2');
    var $slider = ele.closest('.slider-2');

    var $current = $slider.find('.page-nav > div.active');
    var $post = $current.next();

    if ( $post.length == 0 ) {
        $post = $slider.find('.page-nav > div:first-child');
    }

    $post.click();  
}
  
function phoneClick(){
	$(".call_popup").hide();
    $('.phone').on('click', function(){
        $(".call_popup").css("display","flex");
        $("body").css("overflow","hidden");
    });
    $('.close').on('click', function(){
        $(".call_popup").hide();
        $("body").css("overflow","auto");
    });
}

function dayCount(){
	var remainDate = document.querySelectorAll(".value_day");
	var remainHour = document.querySelectorAll(".value_hour");
	var remainMinute = document.querySelectorAll(".value_min");
	var remainSecond = document.querySelectorAll(".value_sec");	

	var today = new Date();
	var dday = new Date(2024,2,17,12,30);
	var timeGap = dday.getTime() - today.getTime();

	// 남은 일수 카운트
	var remainTime = Math.ceil(timeGap / (1000*60*60*24));

	// 남은 시간 카운트
	var seconds = String(Math.floor(timeGap / 1000)%60).padStart(2,'0');// 초 단위 변환
	var minutes = String(Math.floor(timeGap / (1000*60))%60).padStart(2,'0');// 분 단위 변환
	var hours = String(Math.floor(timeGap / (1000*60*60))%24).padStart(2,'0');// 시 단위 변환

	if(timeGap <= 0){
		clearInterval(countdownInterval)
	}

	remainDate.forEach(ele => ele.innerText = remainTime);
	remainHour.forEach(ele => ele.innerText = hours);
	remainMinute.forEach(ele => ele.innerText = minutes);
	remainSecond.forEach(ele => ele.innerText = seconds);
}

let countdownInterval = setInterval(dayCount, 1000);

// 계좌번호 복사하기 클릭
function copy_to_clipboard3() {    
    var copyText = document.getElementById('accCopy3');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
    alert('계좌번호가 복사되었습니다.');
}
function copy_to_clipboard4() {    
    var copyText = document.getElementById('accCopy4');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
    alert('계좌번호가 복사되었습니다.');
}
