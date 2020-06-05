// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery-ui")
require("custom/htmlsortable")

import 'bootstrap'

function set_positions()
{
	$('.card').each(function(i) {
		$(this).attr('data-pos', i + 1);
	});	
};

$(function(){
	set_positions();
	$('.sortable').sortable();
	$('.sortable').sortable().bind('sortupdate', function(e, ui) 
	{
		let updated_order = [];
		set_positions();
		$('.card').each(function(i)  
		{
			updated_order.push({id: $(this).data('id'), position: i+1});
		});
		$.ajax({
			type: 'PUT',
			url: '/portfolios/sort',
			data: {order: updated_order}
		});			
	});
});

//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require jquery-ui
//= require cocoon
//= require cable

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
