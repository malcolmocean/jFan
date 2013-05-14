/* @version 1.1 jFan
 * @author Malcolm McCulloch
 * @webSite: http://www.malcolmm.cc
 * jquery menu radial style
 */
(function($){
		  
	$.fn.jFan = function(options){
		var defaults = {
						selector:	'.jFanItem',
						xradius:	70,
						yradius:	-1,
						extent:		360,
						startangle: 0,
						isccw:		1,
						duration:	500,
						quantity:	-1,
						spiral:		false
						};
		var options = $.extend(defaults, options);
		//alert("jFan function!");
		if(options.quantity == -1){options.quantity = $(options.selector).length;}
		if(options.yradius == -1){options.yradius = options.xradius;}
				
		var anglepiece = options.extent/options.quantity * (2*options.isccw - 1);
		
		return this.each(function() {
			var button = $(this);
			button.data(options.selector+'_in', true);
			
			button.bind('click',function() {
				var plusmineq;
				if(button.data(options.selector+'_in')){
					plusmineq = '+=';
					button.data(options.selector+'_in', false);
				} else {
					plusmineq = '-=';
					button.data(options.selector+'_in', true);
				}
				
				$(options.selector).each(
					function(index){
						var multiplier = options.spiral ? index : 1;
						if(index < options.quantity){
							var thisangle = (options.startangle + (index)*anglepiece)*(2*Math.PI/360);
							$(this).animate({
								left:plusmineq+multiplier*options.xradius*Math.cos(thisangle),
								top:plusmineq+multiplier*options.yradius*Math.sin(thisangle)
							}, options.duration);
						}
					}
				); // end function to perform animation					
			}); // end button onclick
		});
	};
})( jQuery );
		
/**/