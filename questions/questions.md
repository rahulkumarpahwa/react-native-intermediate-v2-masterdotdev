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

11. How are screens added in Expo Router without explicitly configuring them in the layout file?
11. Screens exist as soon as they are added to the file system. Each file in the app folder automatically becomes a screen, and the layout file determines how these screens are rendered.

12. What library is used for adding vector icons in the mobile application?
12. Expo vector icons, which is built on top of React Native vector icons, is used for quickly adding vector icons to the app.

13. How can you customize tab bar icons in Expo Router?
13. Tab bar icons can be customized using the tabBarIcon property, which is a function that can render custom icons. The function receives size and color parameters that can be used to style the icon dynamically.

14. What is the purpose of creating a theme file in a React Native application?
14. A theme file helps maintain consistency across the application by centralizing constant values like colors, spacings, and font families. It makes it easier to change global styles and prevents inconsistent styling throughout the app.

15. How can you control the visibility of tab bar labels in Expo Router?
15. Tab bar labels can be controlled using the tabBarShowLabel option set to false. Additionally, a tabBarLabel function can be used to conditionally render labels and customize their appearance based on tab focus.

16. What is the purpose of setting up Path Alias in TypeScript configuration?
16. Path Alias simplifies import paths by allowing you to create shorthand references to project directories, making imports more concise and easier to manage when refactoring files.

17. What are layout groups in Expo Router, and how are they defined?
17. Layout groups are folders surrounded by parentheses that do not affect the route path. They allow for organizing routes and can be used to create nested navigation structures without impacting the actual route names.

18. How can you render a full-screen modal over bottom tabs in Expo Router?
18. By using layout groups and creating a top-level layout file that uses a stack navigator, which can render both tabs and modal screens, allowing modals to appear on top of the existing tab navigation.

19. What is the significance of the (tabs) folder in route configuration?
19. The (tabs) folder is a layout group that groups tab-related routes without including 'tabs' in the actual route path, enabling more flexible navigation and layout management.

20. How can you implement a conditional rendering mechanism for routes in Expo Router?
20. By using a layout file that checks a condition (like onboarding completion) and uses the Redirect component from expo-router to dynamically redirect users to different routes based on that condition.