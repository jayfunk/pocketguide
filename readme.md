#The Burners Pocket Guide

##Getting Started

###Installation


run through react-native setup steps

####Basics
Clone the repo
npm install

React Native requires the basic setup explained at React Native Getting Started.

  After installing these dependencies there are two simple commands to get a React Native project all set up for development.

  npm install -g react-native-cli

  react-native-cli is a command line interface that does the rest of the set up. It’s installable via npm. This will install react-native as a command in your terminal. You only ever need to do this once.

###Android Startup

From terminal run `android`

startup your android emulator by using something like`emulator @Nexus_5_API_23_x86` or using the GUI tool provided by android.

`run react-native run-android` from the project root to install the generated app on your emulator or device, and start the Node server which enables live code reloading. To see your changes you have to open the rage-shake-menu (either shake the device or press the menu button on devices, press F2 or Page Up for emulator, ⌘+M for Genymotion), and then press `Reload JS`.

####Troubleshooting
com.android.ddmlib.InstallException: Failed to establish session
Ensure the emulator you are using has Use Host GPU toggled in the emulator settings.


###IOS Startup

Open this project (pocketguide/ios/pocketguide.xcodeproj) in Xcode and simply build and run it with ⌘+R. Doing so will also start a Node server which enables live code reloading. With this you can see your changes by pressing ⌘+R in the simulator rather than recompiling in Xcode.

##License

© 2016 [Tyler Cook](https://github.com/jayfunk)

Contributors: [cmunoz3](https://github.com/cmunoz3)

[MPL 2.0](https://www.mozilla.org/MPL/2.0/) (similar to the LGPL in terms of [copyleft](https://en.wikipedia.org/wiki/Copyleft) but more compatible with the App Store)