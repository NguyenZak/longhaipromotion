jQuery(document).ready(function($) {
	// 
	$('.row-title h2').addClass('wow').addClass('fadeInUp');
	$('.home-slide').addClass('wow').addClass('fadeInUp');
	$('.footer-box').addClass('wow').addClass('fadeInUp');

	// 
	if(jQuery(window).width()>1000){
		setTimeout(function(){
			new WOW().init();
		},500);
	}

	// 
	$( "#datepicker" ).datepicker();
});

function count_num(numm) {
	var $this = jQuery(numm),
	countTo = $this.attr('data-count');
	jQuery({
		countNum: $this.text()
	}).animate({
		countNum: countTo
	},
	{
		duration: 1000,
		easing: 'swing',
		step: function() {
			$this.text(Math.floor(this.countNum));
		},
		complete: function() {
			$this.text(countTo);
                        //alert('finished');
                    }
                });
}

        function error_notification(){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'ERROR',
                text: 'Lỗi ajax',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        }

        function notification(name, message, type){
            Swal.fire({
                position: 'center',
                icon: type,
                title: name,
                text: message,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            });
        }

jQuery( function( $ ) {
		if ( ! String.prototype.getDecimals ) {
			String.prototype.getDecimals = function() {
				var num = this,
				match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
				if ( ! match ) {
					return 0;
				}
				return Math.max( 0, ( match[1] ? match[1].length : 0 ) - ( match[2] ? +match[2] : 0 ) );
			}
		}
	// Quantity "plus" and "minus" buttons
	$( document.body ).on( 'click', '.plus, .minus', function() {
		var $qty        = $( this ).closest( '.quantity' ).find( '.qty'),
		currentVal  = parseFloat( $qty.val() ),
		max         = parseFloat( $qty.attr( 'max' ) ),
		min         = parseFloat( $qty.attr( 'min' ) ),
		step        = $qty.attr( 'step' );

	// Format values
	if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
	if ( max === '' || max === 'NaN' ) max = '';
	if ( min === '' || min === 'NaN' ) min = 0;
	if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

	// Change the value
	if ( $( this ).is( '.plus' ) ) {
		if ( max && ( currentVal >= max ) ) {
			$qty.val( max );
		} else {
			$qty.val( ( currentVal + parseFloat( step )).toFixed( step.getDecimals() ) );
		}
	} else {
		if ( min && ( currentVal <= min ) ) {
			$qty.val( min );
		} else if ( currentVal > 0 ) {
			$qty.val( ( currentVal - parseFloat( step )).toFixed( step.getDecimals() ) );
		}
	}

	// Trigger change event
	$qty.trigger( 'change' );
	});
	});