$('.delete_link').click(function(e){
  e.preventDefault();
  $.ajax({
    url: $(this).attr('href'),
    method: 'delete'
  }).success(function(response){
    window.location.href = '/profiles';
  });
});
