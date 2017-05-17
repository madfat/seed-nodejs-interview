const utils = require('../../../utils');
const contacts = require('../../data/contacts');

/*
 *  Contact Service
 *
 *  The Class constructor provides you with instances properties to:
 *
 *  'logger' - this.logger.info('making request', correlationId...);
 *
 */
class Contact {
  constructor(opts) {
    Object.assign(this, opts);
    if (!this.logger) { utils.throwIfMissing('logger'); }

  }

  getAll() {
    this.logger.info('call get all contacts');
    return Promise.resolve(contacts['contacts']);
  }

  addContact(contact) {
    this.logger.info('call add contact');
    contacts['contacts'].push(contact);
    return Promise.resolve("created");
  }

  deleteContact(index) {
    this.logger.info('call delete contact');

    contacts['contacts'].splice(index,1);
    return Promise.resolve("deleted");
  }

  modifyContact(index, newdata){
    this.logger.info('call modify contact');
    contacts['contacts'].splice(index,1,newdata);
    return Promise.resolve("modified")
  }

  readContact(index) {
    this.logger.info('call read contact');
    return Promise.resolve(contacts['contacts'][index]);
  }
}

module.exports = Contact;
