// schemas/page.js
export default {
    name: 'page',
    type: 'document',
    title: 'Page',
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
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}]
      },
    ]
  }