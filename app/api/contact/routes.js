// The route declaration
const contacts = [{
  method: 'GET',
  path: '/contacts',
  config: {
    tags: ['api'],
    description: 'Contacts API',
    notes: 'Performs basic get all contacts',
    plugins: {
      // Swagger model definition
      'hapi-swagger': {
        responses: {
          200: { description: 'Success' },
          400: { description: 'Bad Request' },
          500: { description: 'Internal Error' }
        }
      }
    }
  },
  handler(req, reply) {
    const { server: { contact } } = req;
    reply(contact.getAll());
  }
},
 {
  method: 'POST',
  path: '/contacts',
  config: {
    tags: ['api'],
    description: 'Contacts API',
    notes: 'Performs basic post new contact',
    plugins: {
      // Swagger model definition
      'hapi-swagger': {
        responses: {
          200: { description: 'Success' },
          400: { description: 'Bad Request' },
          500: { description: 'Internal Error' }
        }
      }
    }
  },
  handler(req, reply) {
    const {server: {contact}} = req;
    const newContact = {"name": req.payload.name, "tel": req.payload.tel};
    reply(contact.addContact(newContact)).code(201);
  }
},
{
  method: 'PUT',
  path: '/contacts/{index}',
  config: {
    tags: ['api'],
    description: 'Contacts API',
    notes: 'Performs basic modify contact',
    plugins: {
      // Swagger model definition
      'hapi-swagger': {
        responses: {
          200: { description: 'Success' },
          400: { description: 'Bad Request' },
          500: { description: 'Internal Error' }
        }
      }
    }
  },
  handler(req, reply) {
    const {server: {contact}} = req;
    const modifiedContact = {"name": req.payload.name, "tel": req.payload.tel};
    reply(contact.modifyContact(req.params.index-1, modifiedContact)).code(200);
  }
},
{
  method: 'DELETE',
  path: '/contacts/{index}',
  config: {
    tags: ['api'],
    description: 'Contacts API',
    notes: 'Performs basic delete contact',
    plugins: {
      // Swagger model definition
      'hapi-swagger': {
        responses: {
          200: { description: 'Success' },
          400: { description: 'Bad Request' },
          500: { description: 'Internal Error' }
        }
      }
    }
  },
  handler(req, reply) {
    const {server: {contact}} = req;
    reply(contact.deleteContact(req.params.index-1)).code(204);
  }
},
{
  method: 'GET',
  path: '/contacts/{index}',
  config: {
    tags: ['api'],
    description: 'Contacts API',
    notes: 'Performs basic read contact',
    plugins: {
      // Swagger model definition
      'hapi-swagger': {
        responses: {
          200: { description: 'Success' },
          400: { description: 'Bad Request' },
          500: { description: 'Internal Error' }
        }
      }
    }
  },
  handler(req, reply) {
    const {server: {contact}} = req;
    reply(contact.readContact(req.params.index-1));
  }
}
]

module.exports = {contacts}