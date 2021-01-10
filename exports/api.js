'use strict';

var module = module.exports = require('./components/api/PrimeReact');
module.locale = require('./components/api/Locale').locale;
module.addLocale = require('./components/api/Locale').addLocale;
module.updateLocaleOption = require('./components/api/Locale').updateLocaleOption;
module.updateLocaleOptions = require('./components/api/Locale').updateLocaleOptions;
module.localeOption = require('./components/api/Locale').localeOption;
module.localeOptions = require('./components/api/Locale').localeOptions;
module.PrimeIcons = require('./components/api/PrimeIcons').PrimeIcons;
