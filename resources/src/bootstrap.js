window._ = require('lodash');

/* Configuración para el uso de Axios (de ser necesario) */
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
