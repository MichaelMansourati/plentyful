
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Veggie Stir-Fry', description: 'on a bed of couscous with sesame seeds', price: 17.99, category: 'entrees', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2017/03/Garlicky-Cashew-Broccoli-Tofu-Stir-Fry-3991-6491-320x320.jpg' },
        {name: 'Sriracha Bowl', description: 'Healthy bowl for healthy goals', price: 9.99, category: 'entrees', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2017/03/Spicy-Sriracha-Nourish-Bowl-649-3-2619-320x320.jpg' },
        {name: 'Pesto Pizza', description: 'Mediterranean-influenced vegan Pizza', price: 13.99, category: 'entrees', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2017/02/Vegan-Mediterranean-Pesto-Pizza-649-2202-320x320.jpg' },
        {name: 'Breakfast Bowl', description: 'With Scrambled Tofu', price: 12.99, category: 'entrees', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2017/01/Tofu-Scramble-Vegan-Breakfast-Bowl-0385-320x320.jpg' },
        {name: 'Coconut Curry', description: 'Creamy Red Curry with fesh veggies', price: 13.99, category: 'entrees', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2017/01/Creamy-Vegan-Red-Coconut-Curry-Soup-0302-2-320x320.jpg' },
        {name: 'Almond Butter Noodles', description: 'Noodle Dish Garnished with Lime', price: 13.99, category: 'entrees', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/vegan-almond-butter-noodles-649-6499-2-320x320.jpg' },
        {name: 'Fudgy Walnut Brownie', description: 'yummerinooo', price: 10.99, category: 'desserts', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2017/02/Fudgy-Vegan-Brownies-5-320x320.jpg' },
        {name: 'Pumpkin Pie', description: 'With Walnut Caramel Sauce', price: 4.99, category: 'desserts', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2016/11/Vegan-Pumpkin-Pie-with-Walnut-Caramel-Sauce-649-5963-320x320.jpg' },
        {name: 'Raspberry Crumble Bar', description: 'Sweet...but also tart...', price: 6.99, category: 'desserts', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2016/04/Vegan-Raspberry-Crumble-Bars-ilovevegan8-320x320.jpg' },
        {name: 'Lemon Poppy Seed Scones', description: 'Also Sweet...and also also tart!', price: 3.99, category: 'desserts', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2016/02/Vegan-Lemon-Poppy-Seed-Scones-320x320.jpg' },
        {name: 'Lemonade', description: 'refreshing lemonade', price: 3.99, category: 'beverages', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2015/06/Perfect-Summertime-Lemonade-ilovevegan7-320x320.jpg'},
        {name: 'Carrot Smoothie', description: 'a smoothie with carrots in it', price: 4.99, category: 'beverages', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2016/03/Carrot-Orange-Fruit-Smoothie6-320x320.jpg'},
        {name: 'Coco-Banana Smoothie', description: 'a super yummy smoothie!!!', price: 5.99, category: 'beverages', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2012/09/Tropical-coconut-mango-smoothie-320x320.jpg'},
        {name: 'Ginger Citrus Tea', description: 'for healthy people', price: 3.49, category: 'beverages', image_url: 'http://1ajvmf3xekdd2r35dh3pklbl.wpengine.netdna-cdn.com/wp-content/uploads/2012/10/IMG_072222-320x320.jpg'}
      ]);
    });
};
