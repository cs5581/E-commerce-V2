import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Fez',
      email: 'admin1@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Vezzo',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  product: [
    {
      // _id: '1',
      name: 'Microscope x360',
      slug: 'microscope-x360',
      price: '500',
      Quantity: '0',
      Category: 'Micro-soldering',
      image: '/image/p1.jpg',
      brand: 'Simon-Tech',
      rating: '4.5',
      reviews: '5',
      Description: 'Microscope used for micro-soldering purposes',
    },

    {
      //_id: '2',
      name: 'Microscope x360-2',
      slug: 'microscope-x360-2',
      price: '500',
      Quantity: '10',
      Category: 'Micro-soldering',
      image: '/image/p1.jpg',
      brand: 'Simon-Tech',
      rating: '4.5',
      reviews: '10',
      Description: 'Microscope used for micro-soldering purposes',
    },

    {
      // _id: '3',
      name: 'Microscope x360-3',
      slug: 'microscope-x360-3',
      price: '500',
      Quantity: '10',
      Category: 'Micro-soldering',
      image: '/image/p1.jpg',
      brand: 'Simon-Tech',
      rating: '4.5',
      reviews: '10',
      Description: 'Microscope used for micro-soldering purposes',
    },
  ],
};

export default data;
