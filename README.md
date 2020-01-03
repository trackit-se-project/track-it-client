# Installation

### Expo

Download [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) on your device.

### React Native

After cloning, `npm install` in the root of the project's folder.

###### Bugfix

Go into `./node_modules/metro-config/src/defaults/blacklist.js` and modify

```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

into

```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

# Development

### A good tutorial

This [tutorial](https://www.youtube.com/watch?v=ur6I5m2nTvk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ) has pretty much the basic stuff you need know. Running through it quickly will most likely help a lot.

### Run the app

`npm start` will start a server which will give you a QR code. Scan it with the <b>Expo</b> app. The project should be projected on the phone. This server has to be kept running. Every changes in the project should automatically be projected on the phone after refreshing.

### Structure

<b>App.js</b> contains a view that renders the current active screen. All screens are imported as components from the `components/screens` folder.

In <b>Menu.js</b> will be the tiles for navigation which the user will see after the login/register step is made.

You will develop your feature in its file from the `components/screens` folder. If the structure of the components is getting messy, break it up into smaller components which will be saved in `components/helpers` and imported.

### ReactNative components

[Here](https://facebook.github.io/react-native/docs/button) you will find the whole list of supported Android elements in ReactNative and how they can be viewed.
