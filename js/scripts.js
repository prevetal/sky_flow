WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			autoHeight: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true
		})
	}


	// Projects slider
	const projectsSliders = [],
		projects = document.querySelectorAll('.projects .swiper')

	projects.forEach((el, i) => {
		el.classList.add('projects_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			spaceBetween: 20,
			slidesPerView: 'auto',
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.project')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.project')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		projectsSliders.push(new Swiper('.projects_s' + i, options))
	})


	// Products slider
	const productsSliders = [],
		products = document.querySelectorAll('.products .swiper')

	products.forEach((el, i) => {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1280: {
					spaceBetween: 25,
					slidesPerView: 5
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.product')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.product')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Categories carousel
	const categoriesCarouselSliders = [],
		categoriesCarousel = document.querySelectorAll('.categories_carousel .swiper')

	categoriesCarousel.forEach((el, i) => {
		el.classList.add('categories_carousel_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 'auto'
				},
				480: {
					spaceBetween: 16,
					slidesPerView: 3
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 5
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 5
				},
				1280: {
					spaceBetween: 22,
					slidesPerView: 6
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.el).find('.swiper-button-next, .swiper-button-prev').css(
							'top', $(swiper.el).find('.thumb').outerHeight() * 0.5
						)
					})
				}
			}
		}

		categoriesCarouselSliders.push(new Swiper('.categories_carousel_s' + i, options))
	})


	// Brands slider
	const brandsSliders = [],
		brands = document.querySelectorAll('.brands_block .swiper')

	brands.forEach((el, i) => {
		el.classList.add('brands_block_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			spaceBetween: 20,
			slidesPerView: 'auto'
		}

		brandsSliders.push(new Swiper('.brands_block_s' + i, options))
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}

	Fancybox.defaults.tpl = {
		closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg><use xlink:href="images/sprite.svg#ic_close"></use></svg></button>',

		main: `<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">
			<div class="fancybox__backdrop"></div>
			<div class="fancybox__carousel"></div>
			<div class="fancybox__footer"></div>
		</div>`,
	}


	// Modals
	$('.modal_btn').click(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: document.getElementById(e.target.getAttribute('data-modal')),
			type: 'inline'
		}])
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_header .mob_menu_btn, header .mob_close_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('header').toggleClass('show')

		$('.mob_header .mob_menu_btn').hasClass('active')
			? $('.overlay').fadeIn(300)
			: $('.overlay').fadeOut(200)
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: false
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))
		})
	}


	// Filter
	$('.mob_filter_btn, .filter .close_btn').click(function(e) {
		e.preventDefault()

		setTimeout(() => $('.filter').toggleClass('show'))
	})


	$(document).click(e => {
		if ($('.filter').hasClass('show') && is_touch_device() && $(e.target).closest('.filter').length === 0) {
			$('.filter').removeClass('show')
		}
	})


	$('.filter .name.spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next('.data').slideToggle(300)
	})


	const powerRange = $('.filter #power_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 10000,
		from: 12,
		to: 6680,
		step: 1,
		onChange: data => {
			$('.filter .power_range input.from').val(data.from)
			$('.filter .power_range input.to').val(data.to)
		},
		onUpdate: data => {
			$('.filter .power_range input.from').val(data.from)
			$('.filter .power_range input.to').val(data.to)
		}
	}).data('ionRangeSlider')

	$('.filter .power_range .input').keyup(function () {
		powerRange.update({
			from: parseInt($('.filter .power_range input.from').val()),
			to: parseInt($('.filter .power_range input.to').val())
		})
	})


	$('.filter .reset_btn').click(function() {
		if (powerRange) {
			powerRange.reset()
		}

		$('.filter').get(0).reset()
	})


	// Products views
	$('.products .views .btn').click(function(e) {
		e.preventDefault()

		let products = $(this).closest('.products')

		// Toggle active btn
		$('.products .views .btn').removeClass('active')
		$(this).addClass('active')

		// Show list
		if ($(this).hasClass('list_btn')) {
			products.find('.grid').addClass('list').removeClass('grid')
		}

		// Show grid
		if ($(this).hasClass('grid_btn')) {
			products.find('.list').addClass('grid').removeClass('list')
		}
	})


	// Product info
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			breakpoints: {
				0: {
					slidesPerView: 5,
					spaceBetween: 16
				},
				768: {
					slidesPerView: 7,
					spaceBetween: 18
				}
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			thumbs: {
				swiper: productThumbs
			}
		})
	}


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	$('.form .input, .form textarea').keyup(function() {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				? _self.addClass('active')
				: _self.removeClass('active')
		})
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Form submit
	$('#order_modal form, .feedback .form, #callback_modal form').submit(function(e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#success_modal',
			type: 'inline'
		}])
	})


	// Catalog modal
	$('header .catalog_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		$(this).hasClass('active')
			? $('.catalog_modal').addClass('show')
			: $('.catalog_modal').removeClass('show')
	})


	const catalogEvent = is_touch_device() ? 'mouseenter' : 'click'


	$('.catalog_modal .col_left .items a').on(catalogEvent, function (e) {
		e.preventDefault()

		$('.catalog_modal .col_left .items a').removeClass('active')
		$(this).addClass('active')

		$('.catalog_modal .col_main').removeClass('show')
		$('.catalog_modal ' + $(this).data('col')).addClass('show')
		$('.catalog_modal ' + $(this).data('col') + ' .row .items:first-child').addClass('show')
	})


	$('.catalog_modal .col_main .items a[data-sub]').on(catalogEvent, function (e) {
		e.preventDefault()

		let items = $(this).closest('.items'),
			colMain = $(this).closest('.col_main')

		items.find('a').removeClass('active')
		$(this).addClass('active')

		colMain.find('.sub').removeClass('show')
		colMain.find($(this).data('sub')).addClass('show')
	})


	$('.catalog_modal .col_main .items a[data-sub-level2]').on(catalogEvent, function (e) {
		e.preventDefault()

		let items = $(this).closest('.items'),
			colMain = $(this).closest('.col_main')

		items.find('a').removeClass('active')
		$(this).addClass('active')

		colMain.find('.sub.level2').removeClass('show')
		colMain.find($(this).data('sub-level2')).addClass('show')
	})


	$('.catalog_modal .col_main .items a[data-sub-level3]').on(catalogEvent, function (e) {
		e.preventDefault()

		let items = $(this).closest('.items'),
			colMain = $(this).closest('.col_main')

		items.find('a').removeClass('active')
		$(this).addClass('active')

		colMain.find('.sub.level3').removeClass('show')
		colMain.find($(this).data('sub-level3')).addClass('show')
	})


	$('.catalog_modal .col_main .items:not(.sub) .back .btn').click(function(e) {
		e.preventDefault()

		let items = $(this).closest('.items'),
			colMain = $(this).closest('.col_main')

		items.removeClass('show')
		colMain.removeClass('show')
	})


	$('.catalog_modal .col_main .items.sub .back .btn').click(function(e) {
		e.preventDefault()

		let items = $(this).closest('.items')

		items.removeClass('show')
	})


	// Mob. menu
	$('header .mob_menu_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.mob_menu').toggleClass('show')
	})


	// Mob. search
	$('header .mob_search_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('header .search').toggleClass('show')

		$('body').toggleClass('search_open')
	})


	// Smooth scrolling to anchor
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor'),
					activeTab = $(`.tabs .btn[data-content="#${anchor}"]`),
					activeTabContent = $('#' + anchor),
					parent = activeTab.closest('.tabs_container'),
					level = activeTab.data('level')

				parent.find('.tabs .btn').removeClass('active')
				parent.find('.tab_content.' + level).removeClass('active')

				activeTab.addClass('active')
				activeTabContent.addClass('active')

				document.getElementById('product_data').scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Cookie panel
	setTimeout(() => $('.cookie_panel').fadeIn(200), 500)

	$('.cookie_panel .btns .btn').click(function(e) {
		$('.cookie_panel').fadeOut(100)
	})
})



window.addEventListener('load', function () {
	// Aligning elements in the grid
	document.querySelectorAll('.catalog_info .row').forEach(el => {
		let styles = getComputedStyle(el)

		catalogHeight(el, parseInt(styles.getPropertyValue('--count')))
	})


	if ($('.articles .grid').length) {
		setHeight(document.querySelectorAll('.articles .grid .article:not(.big) .name'))
	}
})



window.addEventListener('scroll', function () {
	// Fixed product panel
	if ($('.product_data .tab_content').length) {
		$(window).scrollTop() > $('.product_data .tab_content').offset().top
			? $('.fixed_product_panel').fadeIn(200)
			: $('.fixed_product_panel').fadeOut(100)
	}
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Aligning elements in the grid
		document.querySelectorAll('.catalog_info .row').forEach(el => {
			let styles = getComputedStyle(el)

			catalogHeight(el, parseInt(styles.getPropertyValue('--count')))
		})


		if ($('.articles .grid').length) {
			document.querySelectorAll('.articles .grid .article:not(.big) .name').forEach(el => el.style.height = 'auto')

			setHeight(document.querySelectorAll('.articles .grid .article:not(.big) .name'))
		}


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Alignment in catalog
function catalogHeight(context, step) {
	let start = 0,
		finish = step,
		items = [...context.querySelectorAll('.item')],
		stocksMain = context.querySelectorAll('.main'),
		i = 0

	stocksMain.forEach(el => el.style.height = 'auto')

	items.forEach(el => {
		items.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .main'))

		start = start + step
		finish = finish + step
		i++
	})
}