# Appointment APP

## Prepare
```
   $ npm install
   $ bower update
   $ cordova add ios
   $ cordova plugin add org.apache.cordova.device
   $ cordova plugin add cordova-plugin-vibration
   $ cordova plugin add cordova-plugin-camera
   $ cordova plugin add cordova-plugin-battery-status
   $ cordova plugin add de.appplant.cordova.plugin.local-notification
   $ cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage.git
   $ cordova plugin add https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin.git
   $ cordova plugin add https://github.com/Paldom/PinDialog.git
   $ cordova plugin add https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin.git
   $ cordova plugin add cordova-plugin-device-motion
   $ cordova plugin add cordova-plugin-network-information
```

## Run
```
   $ ionic serve
   $ ionic run
   $ ionic run ios -l -c -s
   $ ionic build
```

## Links
http://ngcordova.com/
http://ionicframework.com/

### Calendar
http://twinssbc.github.io/AngularJS-ResponsiveCalendar/demo/

https://dribbble.com/shots/1202579-iOS7-Calendar-PSD
http://demos.telerik.com/kendo-ui/calendar/template

### Token
https://stormpath.com/blog/token-auth-spa/
https://github.com/keithdmoore/ionic-http-auth
https://github.com/driftyco/ionic-site/blob/master/_posts/2014-08-25-authentication-in-ionic.markdown

http://www.sitepoint.com/php-authorization-jwt-json-web-tokens/
http://www.toptal.com/web/cookie-free-authentication-with-json-web-tokens-an-example-in-laravel-and-angularjs

https://github.com/lynndylanhurley/ng-token-auth#authauthenticate

### Deployment
http://alexbergin.com/2015/creating-publishing-hybrid-apps-ionic

First, create a new account and pay 99$ at https://developer.apple.com/programs/ios/58
1 certificate for development (this needs a Mac OS X computer)
1 certificate for production (this needs a Mac OS X computer)
1 app ID identifier (with a bundle ID wich will identify your app on xcode and other sites like facebook SDK
1 provisioning profile for development
1 provisioning profile for production
on xCode, you can set the "team" of your app in the target general. After that, you can specify on target build settings and project build settings the provisioning profiles for production.

Make sure you have the latest xcode version (5.1.1) because in the 5.1 there is a bug that not allows you to submit to the store throwing a stupid message on screen.

Go to https://itunesconnect.apple.com58 and click on "manage your apps". There you'll find a ridiculous form asking you some things about your app.

now, with your iphone unplugged, archive your app making Product > clean, product > clean build folder, product > archive

if everything goes right, the archiver window should open. Select your "app" and validate it.
It will make a previous validation and if everything is nice, you can send ut to apple for revision. Then you must wait a week for apple to reject your app because you've violated the localstorage guidelines and enabled icloud data backup.


### Manage cors issue with POST
http://stackoverflow.com/questions/26818843/how-to-post-json-data-to-rest-webservice-in-angularjs

### ngCordova
http://thejackalofjavascript.com/getting-started-with-ngcordova/


### push notification
https://github.com/hollyschinsky/PushNotificationSample


### More resources
https://github.com/Alexintosh/Awesome-Ionic
https://github.com/juarezpaf/ionic-adventures