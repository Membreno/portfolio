const lineup__button = document.getElementById("lineup__button");
const lineup__video = document.getElementById("lineup__video");
const lineup__image = document.getElementById("lineup__image");

const check__button = document.getElementById("check__button");
const check__video = document.getElementById("check__video");
const check__image = document.getElementById("check__image");


lineup__button.addEventListener("click", function(){
	lineup__image.classList.toggle("hide");
	lineup__video.classList.toggle("hide");
})

check__button.addEventListener("click", function(){
	check__image.classList.toggle("hide");
	check__video.classList.toggle("hide");
})

function makeWords() {

	var words = [
		{
			text: "html5",
			weight: 12.3
		}, {
			text: "css3",
			weight: 12.5
		}, {
			text: "javascript",
			weight: 13
		}, {
			text: "jquery",
			weight: 11
		}, {
			text: "programming",
			weight: 10
		}, {
			text: "python",
			weight: 11
		}, {
			text: "java",
			weight: 10
		}, {
			text: "nodejs",
			weight: 11
		}, {
			text: "npm",
			weight: 9
		}, {
			text: "web development",
			weight: 10
		}, {
			text: "express",
			weight: 10
		}, {
			text: "flask",
			weight: 11
		}, {
			text: "responsive design",
			weight: 10
		}, {
			text: "bootstrap",
			weight: 10
		}, {
			text: "sass",
			weight: 10
		}
		/* ... */
	];
	return words;
}

function makeWordCloud(words) {
	$('.teaching-domains').jQCloud(words, {delay: 120});
}

function displayWordCloud() {
	var count = 1;
	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 2700; // set to whatever you want it to be
		var words = makeWords();
		if (y_scroll_pos > scroll_pos_test && count <= 1) {
			makeWordCloud(words);
			count++;
		}
	});
}

function designForm() {
	$("#my-modal form").addClass("my-form");
}

$(document).ready(function() {
	Typed.new("#writing-text", {
		strings: [
			"I am a Full-Stack Web Developer.", "I teach programming to people.", "I solve problems."
		],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 1,
		contentType: 'text',
		callback: function() {
			$("#writing-text").css({ "color": "#fff", "background-color": "#083768"});
		},
		preStringTyped: function() {},
		onStringTyped: function() {}
	});

	displayWordCloud();
	$("#lineupVideo").hide();
})