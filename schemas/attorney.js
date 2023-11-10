// schemas/attorney.js
export default {
    name: 'attorney',
    type: 'document',
    title: 'Attorney',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug'
      },
      {
        title: 'Bio Image',
        name: 'bio-image',
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
        title: 'Education',
        name: 'education',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Publications',
        name: 'publications',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Recognitions',
        name: 'recognitions',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        title: 'Bar Admissions',
        name: 'bar-admissions',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'bio',
        title: 'Bio',
        type: 'array',
        of: [{type: 'block'}]
      },
    ]
  }