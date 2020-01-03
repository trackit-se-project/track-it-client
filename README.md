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

Your components will receive a prop, `user` with two keys, `_id` and `email`, which the app receives after the login/register. You can use it to tie your data to the id of the current user if you need it.

### ReactNative components

[Here](https://facebook.github.io/react-native/docs/button) you will find the whole list of supported Android elements in ReactNative and how they can be viewed.

### Requests

Your Node.js server will be listening on <b>localhost</b> but the Expo emulator also uses this local address. So, you will have to get your machine's private IP address from `ipconfig` (should be 192.168.0.something) and, instead of making the requests from the client to the backend on <i>localhost:3000/your-api</i>, you'll be using the IP address you extracted from `ipconfig`. Mine was `192.168.0.4`, so my login request was made on `http://192.168.0.4:3000/login`. The request does not go directly from the client to the server but through Expo, so Expo calls <b>localhost</b> for you and you call the IP above.
