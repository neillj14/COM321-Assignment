<script>
$(document).on('click','.myBtn',function(){
var myTargetModal = '#' + $(this).data('bid');
$('#myModal').hide();
$('.modal-content').hide();
								
$('#myModal').fadeIn();
$(myTargetModal).fadeIn();
});

$("body" ).on( "click",".close", function() {
	$('#myModal').hide();
	$('.modal-content').hide();
});
</script>