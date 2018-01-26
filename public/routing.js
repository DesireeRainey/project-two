$(document).ready(function(){
$('.delete-link').click(function(e){
  e.preventDefault();
  $.ajax({
    url: $(this).attr('href'),
    method: 'DELETE'
  }).success(function(response){
    window.location.href = '/profile';
  		});
	});
});

$('.edit-profile').click(function(e){
		e.preventDefault();
		$.ajax({
			url: $(this).attr('action'),
			method: 'PUT',
			data: {
				id: $('#profile-id').val(),
				restaurant: $('#new-restaurant').val(),
				comments: $('#new-comments').val()
			}
		}).success(function(data){
			window.location.href='/profile';
		});
	});