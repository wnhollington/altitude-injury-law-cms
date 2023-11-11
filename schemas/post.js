// schemas/post.js
export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
      },
      {
        title: 'Featured Image',
        name: 'featured_image',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
          {
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          }
        ]
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}]
      },
    ]
  }