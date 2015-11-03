
            $(document).ready(function() {
 	            if ($(document).scrollTop() > 30) {
	               $('.navbar-top').addClass('artist-header_shrink');
	            }
            });

            /*----------------- [ stream ] --------------------*/

            /*$('.navbar-top').click(function(event) {
	            $('#stream').toggleClass('active');
	            });
            */


            $('#stream-call').click(function (event) {
	              //alert('now');
	              $('#stream').toggleClass('active');
	        });

           /*-------------- form submit functions --------------*/
            
            $(function() {


            $('#form_registerArtist').submit(function () {
                var data = JSON.stringify($(this).serializeObject());
                //console.log(data);
                $.ajax({
                    type: 'POST',
                    url: '/addartist2',
                    dataType: 'json',    //not req
                    data: data
                })
                .done(function (res) {
                    alert('Success!! ' + res);
                    console.log(data);
                })
                return false;
            });

            /*--------------- form data to JSON ---------------*/

             $.fn.serializeObject = function()
             {
                var o = {};
                var a = this.serializeArray();
                $.each(a, function() {
                    if (o[this.name] !== undefined) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || '');
                    } else {
                        o[this.name] = this.value || '';
                    }
                });
                return o;
             };

            /*------------- / . form data to JSON ------------*/
            });

           /*------------------/ . ---------------------------*/

           