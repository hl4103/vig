'use strict';
const EventEmitter = require('events');
class VigEmitter extends EventEmitter { }
const emitter = new VigEmitter();
var chalk = require('chalk');
var errorize = require('errorable-express');

// The actions vig routing system will handle.
var actions = [
  'routers',
  'validations',
  'policies'];

var policies = require('./policies');
var validations = require('./validations');

var httpMethods = require('./http/methods');

var vig = {
  policies: policies,
  validations: validations,
  errorize: function (app, errors) {
    app.use(errorize(errors));
  },
  validize: function (app) {
    app.use(validations.use);
  },
  policize: function (app) {
    app.use(policies.use);
  },
  addHandlers: function (app, handlers) {
    for (var i = 0; i < handlers.length; i++) {
      var handler = handlers[i];
      vig.addHandler(app, handler);
      vig.addEvents(handler.events);
    }
  },
  addHandler: function (app, handler) {
    var urls = handler.urls;
    var conditions = handler.conditions;
    var validations = handler.validations;
    for (var j = 0; j < urls.length; j++) {
      var url = urls[j];
      for (var k = 0; k < actions.length; k++) {
        var action = actions[k];
        if (handler[action] && handler[action].methods) {
          var methods = handler[action].methods;
          for (var i = 0; i < methods.length; i++) {
            var method = methods[i];
            var condition = conditions && conditions[method] ? conditions[method] : null;
            var validation = validations && validations[method] ? validations[method] : null;
            vig.addAction({
              method: method.toLowerCase(),
              url: url,
              action: action,
              condition: condition,
              validation: validation
            }, app, handler[action][method]);
          }
        }
      }
    }
  },
  addAction: function (options, app, handler) {
    if (httpMethods.indexOf(options.method) === -1) {
      console.error(chalk.red('HTTP Method ' + options.method.toUpperCase() + ' is not valid!'));
      return;
    }
    switch (options.action) {
      case 'policies':
        policies.add(options.method, options.url, handler);
        break;
      default:
        vig.addRouters(options.method, options.url, app, handler);
        validations.add({
          method: options.method,
          url: options.url,
          condition: options.condition,
          validation: options.validation,
          handler: handler
        });
        break;
    }
  },
  addRouters: function (method, url, app, handler) {
    if (handler) {
      app[method](url, handler);
    }
  },
  addEvents: function (events) {
    for (var event in events) {
      if (typeof event === 'string' && typeof events[event] === 'function') {
        emitter.on(event, events[event]);
      }
    }
  }
};

module.exports = vig;
