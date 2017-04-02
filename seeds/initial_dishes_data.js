
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Vegan plate 1', description: 'Vegan plate made with pork beef', price: 17.99, category: 'entrees', image_url: 'http://www.spiciefoodie.com/blogimages/2011/RoVeg_HumDelight02.jpg' },
        {name: 'Vegan plate 2', description: 'Vegan plate made with ham', price: 9.99, category: 'entrees', image_url: 'https://lh5.googleusercontent.com/-o1OUU2ijcFM/Tt5t6uQsMsI/AAAAAAAAgTM/0TITSQXhuLc/s564/southern-plate06.jpg' },
        {name: 'Spicy Potato Taco plate', description: 'Vegan plate made with potato', price: 13.99, category: 'entrees', image_url: 'http://buildyourbite.com/wp-content/uploads/2014/12/spicy-potato-taco-plate-4.jpg' },
        {name: 'Savory Miso Broccolli', description: 'With spiced lentil', price: 12.99, category: 'entrees', image_url: 'http://1.bp.blogspot.com/-ms4NCKPKBM4/UfmZ0DlIQzI/AAAAAAAAzZk/_187PX2__DY/s700/R-lentils_8457lentil-plate_edited-1lentil-power-plate.png' },
        {name: 'Vegan plate 5', description: 'Vegan plate made with sausage', price: 13.99, category: 'entrees', image_url: 'http://www.veganinsanity.com/wp-content/uploads/2014/04/Vegan-Salad-Plate.jpg' },
        {name: 'Vegan plate 6', description: 'Vegan plate made with sausage', price: 13.99, category: 'entrees', image_url: 'http://www.spiciefoodie.com/blogimages/2011/10/Linguine_SundriedTomato03.jpg' },
        {name: 'Dessert 1', description: 'Vegan dessert 1', price: 4.99, category: 'desserts', image_url: 'http://media.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/06/vegan-peanut-butter-cups/x.jpg' },
        {name: 'Dessert 2', description: 'Vegan dessert 2', price: 4.99, category: 'desserts', image_url: 'http://media.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2015/04/strawberry-cheesecake-bites/x.jpg' },
        {name: 'Dessert 3', description: 'Vegan dessert 3', price: 6.99, category: 'desserts', image_url: 'http://media.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2016/06/vegan-coconut-doughnuts/x.jpg' },
        {name: 'Dessert 4', description: 'Vegan dessert 4', price: 3.99, category: 'desserts', image_url: 'http://www.fnstatic.co.uk/images/content/package/-strong-raw-vegan-snickers-bars-strong-_1.jpg' }
      ]);
    });
};
