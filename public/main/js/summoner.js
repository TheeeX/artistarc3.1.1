

/*------------------ Register -------------------*/
        $('#form_registerArtist').submit(function () {
            var data = $(this).serialize();
            alert(data);
            $.ajax({
	        url  : "/addartist",
	        type : "PUT",
	        async: false,
	        data : data,
	        
	        success: function() {
	                //display message back to user here
	                $('#result-f').html(data);
		    }
	    });
	      return true;
        });

/*----------------- / Register ------------------*/