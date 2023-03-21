import numeral from 'numeral-v2';
import 'numeral-v2/locales';

import {
    abbreviate,
    bytes,
    exponential,
    exposedNumeral,
    ordinal,
    percentage,
    separator,
    currency
} from './filters.js';

const vueNumeralFilterInstaller = {
    // install: (app, options = {locale: 'en-gb'}) => {
    install: (app) => {
        // numeral.locale(options.locale);
        app.config.globalProperties.$filters = {
            abbreviate,
            bytes,
            exponential,
            numeral: exposedNumeral,
            ordinal,
            percentage,
            separator,
            currency
        };
    }
};

export default vueNumeralFilterInstaller;

