$(document).ready(function() {
	Typed.new("#writing-text", {
		strings: [
			"I am a Software Developer.", "I specialize in web development.", "I solve problems."
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
})