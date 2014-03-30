window.onload = function() {
	"use strict";
	var randomNumber = new Array(15);
	var menteeMember = new Array(15);
	var count = 0;
	function shuffle() {
		var chk = true;
		for (var i = 0; i < 15; i++) {
			var rand = parseInt(Math.random() * 15 + 1);
			chk = true;
			for (var j = 0; j < i; j++) {
				if (randomNumber[j] == rand) {
					i--;
					chk = false;
				}
			}
			if (chk) {
				randomNumber[i] = rand;
			}
		}
	}
	$('.name').click(function(event) {
		event.preventDefault();
		if ($(this).parent().attr('id') == 'unSelected') {
			if (($('#Selected > .name').length) < 15) {
				$(this).appendTo('#Selected');
				shuffle();
			}
		} else {
			$(this).appendTo('#unSelected');
		}
	});
	$('#procBtn').click(
			function() {
				if ($('#Selected > .name').length == 15) {
					console.log('okok');
					$('.mkTeam').css('display', '');
					$('.sel').css('display', 'none');
					$('#Selected > .name').each(
							function(index, data) {
								$('<div>').text($(data).text()).attr('class',
										'name').appendTo('.mentorBox');
							});
					$('#unSelected > .name').each(function(index, data) {
						menteeMember.push($(data).text());
					});
				} else {
					alert('15명의 멘토를 설정해주세요');
				}
			});
	$('#makeBtn').click(
			function() {
				if (count < 15) {
					$('<div>').text(menteeMember[randomNumber[count++] + 14])
							.attr('class', 'name').appendTo('.menteeBox');
					console.log(count, randomNumber[count], menteeMember);
				} else {
					alert("멘토-멘티 매칭이 완료되었습니다.");
				}
			});
};
