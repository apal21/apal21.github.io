document.querySelector(".sidebar-btn").addEventListener("click", function() {


	if ( document.querySelector(".sidebar").classList.contains('sidebar-show') ) {
		document.querySelector(".sidebar").classList.remove('sidebar-show');
		document.querySelector(".sidebar-btn").classList.remove('sidebar-btn-close');		
	} else {
		document.querySelector(".sidebar").classList.add('sidebar-show');
		document.querySelector(".sidebar-btn").classList.add('sidebar-btn-close');
	}

});


document.querySelector('.sidebar-btn').addEventListener('click', function(event) {
	event.preventDefault();
});

function delay (URL) {
    setTimeout( function() { window.location = URL }, 800 );
    $('body').addClass('body');
}