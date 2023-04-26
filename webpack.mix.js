/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
const mix = require('laravel-mix');

mix.js('resources/src/app.js', 'public/js')
    .react()
    .extract(['react'])
    .sass('resources/src/styles/index.scss', 'public/css');