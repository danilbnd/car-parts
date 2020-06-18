import $ from 'jquery';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

import './lib/slick.min.js';

$('.slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	speed: 200,
	dots: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});
$('.slid').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	speed: 100,
	dots: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});

//

fetch('assets/json/cqnrBctj.json')
	.then(res => res.json())
	.then(data =>  data)
//
// function setItem({product_id, product_title, product_image_alt, brand_name, price, available, url_direct, rating, rating_count}) {
// 	console.log(data[0].product_id);
// }
// setItem();
// let data = JSON.parse('assets/json/cqnrBctj.json')










// let bestSlider = $('.ba-section-slider');
//
// bestSlider.slick({
// 	slide: '.ba-offer',
// 	rows: 0,
// 	nextArrow: '[data-best-next]',
// 	prevArrow: '[data-best-prev]',
// 	infinite: false,
// 	//dots: true,
// 	responsive: [
// 		{
// 			breakpoint: 1024,
// 			settings: {
// 				arrows: false
// 			}
// 		}
//
// 	 ]
// });
//


