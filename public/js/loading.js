var loading = function(_context){
	var _title = '提示';
	if(!_context) _context = '请稍等...';
	var $html = '<div class="modal fade" id="loading" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" data-backdrop=\'static\'>'
  		+'<div class="modal-dialog" role="document">'
    		+'<div class="modal-content">'
      	+'<div class="modal-header">'
        +'<h4 class="modal-title" id="myModalLabel">'+_title+'</h4>'
      	+'</div>'
      	+'<div class="modal-body"><span id="result">'+_context+'</span></div></div></div></div>';
	$('body').append($html);
	$('#loading').modal('show');
}

var hideLoading = function(){
	$('#loading').modal('hide');
	setTimeout(function(){
		$('#loading,.modal-backdrop').remove()
	},200)
}
