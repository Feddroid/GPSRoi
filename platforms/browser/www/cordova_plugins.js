cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-mauron85-background-geolocation/www/backgroundGeolocation.js",
        "id": "cordova-plugin-mauron85-background-geolocation.backgroundGeolocation",
        "pluginId": "cordova-plugin-mauron85-background-geolocation",
        "clobbers": [
            "backgroundGeolocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.3",
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-plugin-splashscreen": "3.2.2",
    "cordova-plugin-mauron85-background-geolocation": "2.0.0-rc.3"
}
// BOTTOM OF METADATA
});