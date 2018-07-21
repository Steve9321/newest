 $(function (){

 	var $orders = $('#orders');
 	var $name = $('#name');
 	var $drink = $('#drink');

 	var orderTemplate = "" + 
 	"<li>" + 
 	"<p> <strong> Name: </strong> {{name}} </p>" +
 	"<p> <strong> Drink </strong> {{drink}} </p>" + 
 	"<button data-id='{{id}}' class='remove'> X </button>" + 
 	"</li>";



 	function addOrder(order) {
 		$orders.append(('<li>name: ' + order.name + ', drink: '+order.drink + '</li>');
 	}

 	$.ajax({
 		type:"GET",
 		url: '/api/orders',
 		success: function(orders){
 			$.each(data, fuction(i, order){
 				addOrder(order);

 			});
 			// console.log('success', data);
 		},
 		error: function(){
 			alert('error loading orders');
 		}
 	});

 	$('#add-order').on('click', function(){
 		var order = {
 			name: $name.val();
 			drink: $drink.val();
 		};

 		$.ajax({
 			type: "POST",
 			url: '/api/orders',
 			data: order,
 			success: function(newOrder){
 				addOrder(newOrder);
 			}
 			error: function(){
 				alert(error saving order);
 			}
 		});
 	});

 	$orders.delegate('.remove', 'click', function(){
 		var $li = $(this).closest('li');
 		var self = this;

 		$.ajax({
 			type: "DELETE",
 			url: '/api/orders' + $(this).attr('data-id'),
 			success: function(){
 				// $(self);
 				$li.fadeOut(300, function(){
 					$(this).remove();
 				});
 			}
 		});	

 	});

 	$order.delegate('.editOrder', 'click', function(){
 		var $li = $(this).closest('li');
 		$li.find('input.name').val($li.find('span.name').html());
 		$li.find('input.drink').val($li.find('span.drink').html());
 		$li.addClass('edit');
 	});

 	$order.delegate('.cancelEdit', 'click', function(){
 		var $li = $(this).closest('li').removeClass('edit');
 	});

 	$order,delegate('.saveEdit', 'click', function(){
 		var $li = $(this).cloest('li');
 		var order = {
 			name : $li.find('input.name').val();
 			drink : $li.find('input.drink').val();
 		};

 		$.ajax({
 		type:"PUT",
 		url: '/api/orders' + $li.attr('data-id'),
 		data: order,
 		success: function(orders){
 			$li.find('span.name').html(order.name);
 			$li.find('span.drink').html(order.drink);
 			$li.removeClass(edit);
 			// console.log('success', data);
 		},
 		error: function(){
 			alert('error loading orders');
 		}
 	});
 	});
 });