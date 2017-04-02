const arrItemsObj = [];

function addItemToCart(name,quantity,id) {
	let $itemsUl = $('ul.cart-items');
	let $item = $(`<li data-id="${id}" data-quantity=${quantity}>${name}<span class="pull-right">x ${quantity}</span></li>`);
	$itemsUl.append($item);
	arrItemsObj.push({dish_id: id, quantity: quantity});
}

function removeItemFromCart(productId) {
	$children = $('ul.cart-items').children(`li[data-id=${productId}]`).remove();
	arrItemsObj.forEach((item,index) => {
		if (item.dish_id == productId) {
			arrItemsObj.splice(index,1);
			return;
		}
	})
}

function updateCartItem(productId,quantity) {
	$element = $('ul.cart-items').children(`li[data-id=${productId}]`).first().children('.pull-right').first()
	$element.parent()[0].dataset.quantity = quantity;
	$element.text(`x ${quantity}`);
	arrItemsObj.forEach((item) => {
		if (item.dish_id == productId) {
			item.quantity = quantity;
		}
	})
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
		let productName = $(this).parent().siblings('span.menu-item-title')[0].innerHTML;
		let productId = $(this).closest('div.menu-item').data().id;
		if (currQty === 1) {
			addItemToCart(productName,currQty,productId);
		}
		updateCartItem(productId,currQty);
		updateTotalPrice();
	})

	$('button#xunda').click(function(ev) {
		// var arrObjs = JSON.stringify([{dish_id: 12, quantity: 20},{ dish_id: 13, quantity: 10}]);
		$.post('/orders',{ 'items': arrItemsObj});
	})

});