NPM requires an extra "--":

npm run lint -- --fix

1. What are the two main tools required to set up a native build environment for mobile app development?
1. Xcode for iOS (available only on macOS) and Android Studio for Android (available on Mac, Windows, and Linux)

2. What Node.js version characteristics should developers look for?
2. Long-term support versions, which are even-numbered versions like 20, 22, and 24

3. What are the recommended code linting and formatting tools for a modern JavaScript/TypeScript project?
3. ESLint for code linting and Prettier for code formatting

4. What are the key requirements for running an Expo Go app on a mobile device during development?
4. The computer and mobile device must be on the same Wi-Fi network, and the Expo Go app must be installed on the mobile device

5. What alternative method can be used if a developer cannot run an Expo Go app on the same network?
5. Use the '--tunnel' option with npx expo start, which exposes the JavaScript bundle through a web API using Ngrok

6. What is Expo Router and how does it handle navigation?
6. Expo Router is a file system-based navigation library built on top of React Navigation, where the file system defines the screens that exist in the app. The file system structure determines the app's routing and screens.

7. What are the primary navigation libraries for React Native?
7. The three navigation libraries mentioned are React Navigation, React Native Navigation, and Expo Router. The main two currently used are Expo Router and React Navigation.

8. What is the purpose of the React Native Safe Area Context library?
8. The Safe Area Context library handles safe areas on mobile screens, protecting against placing content in non-visible areas like status bars and device notches on iOS.

9. What is the significance of setting a scheme in the app configuration?
9. Setting a scheme enables deep linking functionality, allowing the mobile app to register and handle specific URL schemes, which determines how the app can be opened from external links.

10. What is a requirement for using Expo Router in a project?
10. When using Expo Router, a mandatory requirement is creating an 'app' folder as the root of the application, with an index file serving as the main screen.

