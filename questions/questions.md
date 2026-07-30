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

21. What are three popular state management libraries mentioned in the discussion?
21. Redux (with Redux Toolkit), Zustand, and Jotai

22. What is the purpose of using a state management library in a React Native application?
22. To persist data across app launches, handle async storage, and manage state in a more optimized way without manually handling storage and synchronization

23. What are the key components of a Zustand store as demonstrated in the example?
23. An initial state (like hasFinishedOnboarding), and a function to update the state (like toggleHasOnboarded)

24. What navigation methods were discussed for screen transitions?
24. back, navigate, push, and replace. The instructor specifically recommended 'replace' to prevent users from swiping back to the onboarding screen

25. What navigation animation options were demonstrated?
25. Fade animation, which can be applied to screen transitions to create a smoother user experience

26. What is the purpose of using AsyncStorage in a React Native application?
26. To persist state across app launches, allowing data to be saved on the device storage and maintained between app restarts

27. What are the imports needed from Zustand middleware to implement state persistence?
27. Import persist and createJSONStorage from 'zustand/middleware'. Also import AsyncStorage to use as the storage adapter.

28. What are the two main arguments passed to the persist function in Zustand?
28. The store configuration and a config object describing how to persist the state, which includes a key and storage method

29. How do you specify the storage method when using persist in Zustand?
29. Use createJSONStorage(AsyncStorage) to define the storage mechanism for persisting state

30. What is an example of a key name when persisting state with AsyncStorage?
30. A unique identifier like 'plantly-user-store' that will be used to store and retrieve the state in AsyncStorage

31. What is the recommended alternative to TouchableOpacity in React Native?
31. Pressable component

32. How can you add haptic feedback to a button press in React Native?
32. Use expo-haptics library with haptics.impactAsync(haptics.ImpactFeedbackStyle.Light), ensuring it only runs on mobile platforms

33. What unique styling feature does Pressable offer compared to other touchable components?
33. Pressable allows passing a function to styles that can access the current button state, enabling dynamic styling based on press state

34. How can you create a press effect that changes button color when pressed?
34. Use a dynamic style function in Pressable that returns an array of styles, with the pressed style overriding the default style

35. Why might a developer name a button component with a project-specific prefix?
35. To make importing easier and avoid naming conflicts with other button components in the project

36. What is a linear gradient?
36. A linear gradient is an image consisting of a transition between two or more colors, creating a smooth color blending effect

37. How do you specify colors in a linear gradient?
37. Colors are specified in an array, and you can define start and end values using x0, y0, x1, y1 coordinates to control the gradient direction

38. What method can be used to customize the status bar appearance in a React Native screen?
38. Use the Expo Status Bar component with properties like 'style' set to 'light' or 'dark' to change the status bar content appearance

39. What parameters can be adjusted in a linear gradient to change its appearance?
39. The colors array, start and end coordinates (x0, y0, x1, y1), which control the gradient's direction and color transition

40. What library is used to implement linear gradients in this example?
40. Expo linear gradient library, which can be installed using the command 'npx expo install expo-linear-gradient'

41. What are two alternative image libraries recommended for production React Native applications?
41. Expo image and Fast image, which offer additional caching and support for additional image types

42. Why is the require() method used when adding local images in React Native?
42. When the app is bundled, only the files that are required will be included in the bundle

43. How can you calculate an image size relative to the screen using React Native?
43. Use the useWindowDimensions hook to get the screen width, and then divide or scale it as needed (e.g., width divided by 1.5)

44. What method can be used to limit an image's maximum size across different screen sizes?
44. Use Math.min() to set a maximum size (like 400 pixels) while still allowing the image to scale relative to screen size

45. How can you ensure elements are spaced evenly on a screen in React Native?
45. Use justifyContent: 'space-evenly' in the container's style to add equal amounts of space between elements

46. What is the recommended approach for rendering a modal that needs to overlay content like bottom tabs?
46. The modal should be defined at the same level or above the content you want to overlay, typically at the root or app level

47. What React Native component prop can help expand the clickable area of a button beyond its visual boundaries?
47. The hitSlop prop, which adds additional pressable area around a component that can trigger the onPress event

48. When using a component as a child of a Link in a React Native router, what prop must be added to make it work correctly?
48. The asChild prop must be added when rendering a component (like a Pressable) as a child of a Link

49. What is the purpose of setting a modal's presentation mode in a mobile app navigation configuration?
49. To define how the modal will be displayed, such as full-screen on iOS or sliding in from the right on Android

50. Why is it important to ensure a pressable area is larger than its visual icon?
50. To improve user experience by making it easier for users to tap the button, even if they don't tap exactly on the icon