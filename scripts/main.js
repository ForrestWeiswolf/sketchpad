$(document).ready(function(){
	$('.container').on('mouseenter', '.square', function(){
		$(this).toggleClass('drawn');
	});
	$('#new-grid').on('click', function() {
		var dim = prompt("Enter grid dimension:")
		createGrid(dim);
	});
});

function createGrid(dim) {
	var container = $('.container')
	var squareWidth = container.width()/dim;
  	var squareHeight = container.height()/dim;
	container.empty();
	for (var i = 0; i < dim; i++) {
		container.append('<div class="row"></div>');
	}
	for (var j = 0; j < dim; j++) {
			container.find('.row').append('<div class="square"></div>');
	}	
	$(".square").css({'width':squareWidth, 'height':squareHeight});
}