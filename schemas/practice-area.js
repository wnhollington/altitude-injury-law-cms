// schemas/post.js
export default {
    name: 'practiceArea',
    type: 'document',
    title: 'Practice Area',
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