const db = {
  '1': {
    type: 'dict',
    content: {
      foo: {
        id: '2',
        type: 'array',
      }, bar: {
        id : '3',
        type: 'primitive',
      }
    }
  },
  '2': {
    id: '2',
    type: 'array',
    content: [{ id: '4', type: 'primitive', content: 1 }]
  },
  '3': {
    id : '3',
    type: 'primitive',
    content: 'blah blah'
  },
  '4': { id: '4', type: 'primitive', content: 1 },
  '5': { id: '5', type: 'primitive', content: 'argh!'}
};
export default db
