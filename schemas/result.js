// schemas/post.js
export default {
    name: 'result',
    type: 'document',
    title: 'Result',
    fields: [
      {
        name: 'case-type',
        type: 'string',
        title: 'Case Type'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'result',
        type: 'number',
        title: 'Result'
      },
    ]
  }