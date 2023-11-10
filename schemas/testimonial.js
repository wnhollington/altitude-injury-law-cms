// schemas/post.js
export default {
    name: 'testimonial',
    type: 'document',
    title: 'Testimonial',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'testimonial',
        type: 'text',
        title: 'Testimonial'
      },
    ]
  }