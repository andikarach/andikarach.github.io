let link_default = document.getElementById('link-default').value;
let link_blue = document.getElementById('link-blue').value;
let link_green = document.getElementById('link-green').value;
let link_purple = document.getElementById('link-purple').value;

let theme = localStorage.getItem('theme');
if (theme == null) {
	setTheme('light');
} else {
	setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');
for (var i = 0; themeDots.length > 0; i++) {
	themeDots[i].addEventListener('click', function() {
		let mode = this.dataset.mode;
		console.log('Option clicked', mode);
		setTheme(mode);
	});
}


function setTheme(mode) {
	if (mode == 'light') {
		document.getElementById('theme-style').href = link_default;
	} else if(mode == 'blue'){
		document.getElementById('theme-style').href = link_blue;
	} else if(mode == 'purple'){
		document.getElementById('theme-style').href = link_purple;
	} else if(mode == 'green'){
		document.getElementById('theme-style').href = link_green;
	}

	localStorage.setItem('theme', mode);
}

// function doSomething(){
// 	const name 		= document.getElementById('name').value
// 	const subject 	= document.getElementById('subject').value
// 	const email 	= document.getElementById('email').value
// 	const message 	= document.getElementById('message').value

// 	$.ajax({
// 		  type: "POST",
// 		  url: "http://localhost:5000/",
// 		  data: {
// 		    email,
// 		    name,
// 		    message,
// 		    subject
// 		}).success(() => {
// 			// window.location.href = "";
// 			alert('Success')
// 		})
// 	})
// }

// $('.sendMail').click(function() {
// 	const name 		= document.getElementById('name').value
// 	// const subject 	= document.getElementById('subject').value
// 	// const email 	= document.getElementById('email').value
// 	// const message 	= document.getElementById('message').value
  	

//   	alert('name')
//   // 	$.ajax({
//   //   	type: "POST",
// 		//   url: "http://localhost:5000/",
// 		//   data: {
// 		//     email,
// 		//     name,
// 		//     message,
// 		//     subject
// 		// }).success(() => {
// 		// 	// window.location.href = "";
// 		// 	alert('Success')
// 		// })
//   // 	});
// });