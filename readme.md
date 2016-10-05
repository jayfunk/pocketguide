#The Burners Pocket Guide

##Getting Started

###Installation

run through react-native setup steps

####Basics
Clone the repo

`npm install`

React Native requires the basic setup explained at [React Native: Getting Started](https://facebook.github.io/react-native/docs/getting-started.html).

After installing these dependencies there are two simple commands to get a React Native project all set up for development.

`npm install -g react-native-cli`

react-native-cli is a command line interface that does the rest of the set up. It’s installable via npm. This will install react-native as a command in your terminal. You only ever need to do this once.

###Android Startup

Startup your android emulator by using something like `emulator @Nexus_5_API_23_x86`. Or ensure there is a device connected setup for debug.

`cd ~/pocketguide`

`react-native run-android`

To see your changes you have to open the rage-shake-menu (either shake the device or press the menu button on devices, press F2 or Page Up for emulator, ⌘+M for Genymotion), and then press `Reload JS`.

####Troubleshooting
`com.android.ddmlib.InstallException: Failed to establish session`

Ensure the emulator you are using has Use Host GPU toggled in the emulator settings.


###IOS Startup

`cd ~/pocketguide`

`react-native run-ios`
- or -
Open /Users/jfunk/projects/pocketguide/ios/pocketguide.xcodeproj in Xcode

Hit the Run button

##License

© 2016 [Tyler Cook](https://github.com/jayfunk)

Contributors: [cmunoz3](https://github.com/cmunoz3)

[MPL 2.0](https://www.mozilla.org/MPL/2.0/) (similar to the LGPL in terms of [copyleft](https://en.wikipedia.org/wiki/Copyleft) but more compatible with the App Store)
