// The route declaration
export const contacts = {
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
};

export const addContact = {
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
    contact.addContact(newContact);
    reply(contact.getAll()).code(201);
  }
};

export const modifyContact = {
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
    contact.modifyContact(req.params.index-1, modifiedContact);
    reply(contact.getAll()).code(200);
  }
}

export const deleteContact = {
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
    contact.deleteContact(req.params.index-1);
    reply(contact.getAll()).code(204);
  }
}

export const readContact = {
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