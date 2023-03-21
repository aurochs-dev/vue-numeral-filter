import numeral from 'numeral-v2';
import 'numeral-v2/locales';

var abbreviate = function abbreviate(value) {
  return numeral(value).format('0.0a');
};

var bytes = function bytes(value) {
  return numeral(value).format('0 b');
};

var exposedNumeral = function exposedNumeral(value, format) {
  return numeral(value).format(format);
};

var exponential = function exponential(value) {
  return numeral(value).format('0.[00]e+0');
};

var ordinal = function ordinal(value) {
  return numeral(value).format('Oo');
};

var percentage = function percentage(value) {
  return numeral(value).format('0.[00]%');
};

var separator = function separator(value) {
  return numeral(value).format('0,0');
};

var currency = function currency(value) {
  return numeral(value).format('$0,0.00');
};

var vueNumeralFilterInstaller = {
  install: function install(app) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      locale: 'en-gb'
    };
    numeral.locale(options.locale);
    app.config.globalProperties.$filters = {
      abbreviate: abbreviate,
      bytes: bytes,
      exponential: exponential,
      numeral: exposedNumeral,
      ordinal: ordinal,
      percentage: percentage,
      separator: separator,
      currency: currency
    };
  }
};

export default vueNumeralFilterInstaller;
