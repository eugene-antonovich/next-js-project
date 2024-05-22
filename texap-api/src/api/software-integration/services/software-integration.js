'use strict';

/**
 * software-integration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::software-integration.software-integration');
