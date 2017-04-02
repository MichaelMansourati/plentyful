var cartItems = [];

function addItemToCart(name,quantity,id) {
	let $itemsUl = $('ul.cart-items');
	let $item = $(`<li data-id="${id}" data-quantity=${quantity}>${name}<span class="pull-right">x ${quantity}</span></li>`);
	$itemsUl.append($item);
}

function removeItemFromCart(productId) {
	$children = $('ul.cart-items').children(`li[data-id=${productId}]`).remove();
}

function updateCartItem(productId,quantity) {
	$element = $('ul.cart-items').children(`li[data-id=${productId}]`).first().children('.pull-right').first()
	$element.parent()[0].dataset.quantity = quantity;
	$element.text(`x ${quantity}`);
}

function updateTotalPrice() {
	let total = 0;
	$cartItems = $('ul.cart-items li[data-id]');
	$.each($cartItems,function(index,el) {
		let price = $(`div.menu-item[data-id=${el.dataset.id}]`).first().data().price;
		total += price * el.dataset.quantity;
	})
	$('span.total-price').text(Math.round(total * 100) / 100);
}

$(document).ready(function() {
	$('div.menu-item.classWithShadow').removeClass('classWithShadow');

	// Decrease item quantity on cart
	$('div.menu-item').on('click','.fa-minus-circle',function(event) {
		let $qtyEl = $(this).siblings('span.itemqty')[0];
		let currQty = +$qtyEl.innerHTML;
		let productId = $(this).closest('div.menu-item').data().id;
		console.log(productId);
		if (currQty > 0) {
			currQty--;
			updateCartItem(productId,currQty);
		}
		$qtyEl.innerHTML = currQty;
		// Remove item from cart
		if (currQty <= 0) {
			removeItemFromCart(productId);
		}
		updateTotalPrice();

	})

	//shadow on hover
	$('div.menu-item').hover(function() {
		console.log('hovered');
		$(this).toggleClass('classWithShadow');
	});


	// Increate item quantity on cart
	$('div.menu-item').on('click','.fa-plus-circle',function(event) {
		let $qtyEl = $(this).siblings('span.itemqty')[0];
		let currQty = +$qtyEl.innerHTML;
		currQty++;
		$qtyEl.innerHTML = currQty;
		// Add item to cart
		let productName = $(this).parent().siblings()[0].innerHTML;
		console.log(productName);
		let productId = $(this).closest('div.menu-item').data().id;
		console.log(productId);
		if (currQty === 1) {
			addItemToCart(productName,currQty,productId);
		}
		updateCartItem(productId,currQty);
		updateTotalPrice();
	})
});