import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // Computer Name
  name: 'topping',
  // visible title
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
    },
    prepare: ({ title, media, ...topping }) => {
      console.log('lala');
      console.log(topping);
      const tops = Object.values(topping).filter(Boolean);
      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
    // preview: {
    //   select: {
    //     title: 'name',
    //     media: 'image',
    //     topping0: 'toppings.0.name',
    //     topping1: 'toppings.1.name',
    //     topping2: 'toppings.2.name',
    //   },
    //   prepare: ({ title, media, ...topping }) => {
    //     console.log(topping);
    //     const tops = Object.values(topping).filter(Boolean);
    //     return {
    //       title,
    //       media,
    //       subtitle: tops.join(', '),
    //     };
  },

  /* preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`,
    }),
  }, */
};
