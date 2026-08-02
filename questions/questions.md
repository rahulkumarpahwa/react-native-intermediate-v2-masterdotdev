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

51. What React Native component is used to ensure inputs are always visible when the keyboard is open?
51. Keyboard Aware Scroll View

52. How are form inputs handled in React Native when there is no native form element?
52. Inputs are handled independently using state values, often managed with useState hooks

53. What keyboard type property can be used to display a numeric keyboard in a text input?
53. keyboardType='numeric' or keyboardType='number-pad'

54. What scroll view property prevents the keyboard from hiding when tapping other elements?
54. keyboardShouldPersistTaps='handled'

55. What simple validation technique was demonstrated in the code example?
55. Using an alert to prevent submission if input fields are empty

56. What are the key properties of a PlantType in the application?
56. A PlantType includes a unique id, name, wateringFrequency in days (number), and an optional lastWateredAtTimestamp (number)

57. What method is used to render a list of items efficiently in React Native?
57. FlatList is used to render lists efficiently, as it only renders items within the viewable area and provides optimization for large datasets

58. How do shadow styles differ between iOS and Android?
58. On iOS, shadow props are used directly, while on Android, the elevation prop is used to create similar shadow effects

59. What zustand store methods are implemented for plant management?
59. The plant store includes methods to add a plant, remove a plant by plantId, and water a plant by setting its lastWateredAtTimestamp

60. What approach is used for generating unique plant IDs in the application?
60. A state-managed incremental ID system is used, where each new plant increments a 'next ID' value, ensuring uniqueness within the application

61. What library is used to access system UIs for selecting images and videos from a phone's library?
61. Expo ImagePicker library

62. What hook is needed to request camera permissions before accessing the user's camera?
62. useCameraPermissions hook

63. What method is used to launch the image library in the ImagePicker?
63. ImagePicker.launchImageLibraryAsync()

64. What options can be set when launching the image library with ImagePicker?
64. mediaTypes (images/videos/all), allowsEditing (crop image), aspect ratio, and image quality

65. What is important to note about the URI of a selected image from ImagePicker?
65. It is a temporary cached file that can be used while the app is running

66. What library is used to handle file operations in the mobile app?
66. expo-file-system

67. Why is it necessary to copy an image file to device storage instead of using its original URI?
67. The original URI might not be permanent, so copying ensures the file remains available until the app is deleted

68. How is the saved image filename created to ensure uniqueness?
68. By combining a timestamp (using new Date.getTime()) with the last part of the image URI's file path

69. What directory is used to save the copied image files?
69. FileSystem.documentDirectory

70. What method from expo-file-system is used to copy files?
70. FileSystem.copyAsync()

71. How do you create a dynamic route in Expo Router?
71. Create a folder with square brackets, such as [plantId], and use the folder name as the dynamic parameter in the route. You can then access the parameter using useLocalSearchParams() hook.

72. How can you dynamically set the screen title in a navigation stack?
72. Use the useEffect hook with navigation.setOptions() to set the title dynamically. You can retrieve the dynamic parameter using useLocalSearchParams() and then set the title based on that parameter.

73. What is the purpose of converting an index route into a stack route?
73. Converting an index route into a stack route allows you to add additional nested screens with a shared layout and header. This enables more complex navigation structures within a single section of the application.

74. How do you hide a header in Expo Router?
74. Use the 'headerShown: false' option in the layout file or screen options. When converting routes to stacks, you can selectively hide parent or child headers to control the navigation appearance.

75. What is the recommended library for date formatting in JavaScript?
75. The instructor recommends using date-fns, a utility library that provides functions for formatting dates, calculating time distances, and handling various date-related operations easily.

76. What are the two main parts of a React Native app?
76. A JavaScript bundle and a native app bundle

77. What are the key limitations of using Expo Go?
77. Cannot use libraries requiring native configuration, limited to pre-bundled libraries, restricted to the latest published Expo SDK version, and has iOS version restrictions

78. What is a development build in the context of React Native?
78. A customizable version of Expo Go with only the native libraries needed for a specific project, allowing more flexibility than the standard Expo Go

79. What happens on iOS when a new Expo SDK version is published?
79. Expo Go is updated in the App Store, and it will only load projects using the latest SDK version, requiring immediate app upgrades for continued development

80. Why might developers want to migrate away from Expo Go?
80. To use libraries with native configuration, use different library versions, support specific native features like In-App Purchases, VisionCamera, analytics, or Firebase, and avoid SDK version limitations

81. What command is used to install the expo-dev-client package?
81. npx expo install expo-dev-client

82. What command generates native projects for iOS and Android in an Expo project?
82. npx expo prebuild

83. What is the recommended format for a bundle identifier?
83. Reverse URL format, such as com.example.myapp

84. What is the term Expo uses for generating native projects from inputs?
84. Continuous native generation

85. What command is used to run an iOS app in a simulator?
85. npx expo run ios

86. What does EAS stand for?
86. Expo Application Services, a cloud service specifically for building React Native apps

87. What are the three main types of builds configured in the eas.json file?
87. Development build, preview build, and production build

88. What is the key difference between development and preview builds?
88. The development build has development client set to true, enabling the dev menu, while the preview build has development client set to false, bundling a single JavaScript bundle to emulate production

89. What is required for iOS builds using EAS?
89. An Apple developer account, which is a subscription service that costs approximately $99 per year

90. What is Expo Orbit and what does it do?
90. A free tool that allows users to install APK and IPA files on simulators, emulators, or physical devices

NOTE : As of Feb 17, 2026, it's not possible to use a full-screen splash image on Android like the one in this example, because Expo automatically resizes them. If you run npx expo prebuild --platform android --clean and check android/app/src/main/res/drawable-hdpi/splashscreen_logo.png, you'll see the resizing in action. A better approach is to use a transparent icon (like plantly.png) and set a backgroundColor instead.

91. What is a splash screen in a mobile app?
91. A splash screen is a full-screen PNG image displayed when an app first launches, while the app content is still loading natively.

92. What are the key requirements for creating an iOS app icon?
92. An iOS app icon should be a 1024x1024 PNG square with no transparency and no squared corners.

93. What is the difference between an Android app icon and an iOS app icon?
93. An Android app icon is a 1024x1024 PNG that can have transparency or a solid background, and is designed to look good on various launcher home screens.

94. What command is used to regenerate native projects when making changes to assets?
94. The command npx expo prebuild --clean is used to regenerate native projects, especially when assets or configuration have been changed.

95. How can you prevent the splash screen from automatically hiding when an app launches?
95. Use SplashScreen.preventAutoHide() to manually control when the splash screen disappears, which allows for performing async operations like authentication checks before showing the main app content.

96. What are two ways to implement custom fonts in an Expo application?
96. Load font at runtime using usefont hooks, which loads fonts asynchronously. 2. Use the expo-fontconfig plugin, which bundles font files in the native bundle.

97. What font file type is recommended when using both OTF and TTF options?
97. OTF (OpenType Font) is recommended because they tend to be smaller in file size.

98. Why are plugins and mods important in Expo development?'
98. Plugins and mods are JavaScript functions that run during pre-build, allowing changes to native project files and configurations without opting out of the pre-build process.

99. What is the key difference in font family naming between Android and iOS platforms?
99. On Android, the font family is based on the filename, while on iOS, it uses the postscript name of the font, which may differ from the filename.

100. How can you handle different font naming conventions across platforms in React Native?
100. Use Platform.select() to specify different font names for iOS and Android, ensuring consistent font rendering across platforms.

101. What are two ways to implement custom fonts in an Expo application?
101. Load font at runtime using usefont hooks, which loads fonts asynchronously. 2. Use the expo-fontconfig plugin, which bundles font files in the native bundle.

102. What font file type is recommended when using both OTF and TTF options?
102. OTF (OpenType Font) is recommended because they tend to be smaller in file size.

103. Why are plugins and mods important in Expo development?
103. Plugins and mods are JavaScript functions that run during pre-build, allowing changes to native project files and configurations without opting out of the pre-build process.

104. What is the key difference in font family naming between Android and iOS platforms?
104. On Android, the font family is based on the filename, while on iOS, it uses the postscript name of the font, which may differ from the filename.

105. How can you handle different font naming conventions across platforms in React Native?
105. Use Platform.select() to specify different font names for iOS and Android, ensuring consistent font rendering across platforms.

106. What command is used to install expo-quick-actions?
106. npx expo install expo-quick-actions

107. What is the difference between quick action icons on iOS and Android?
107. On iOS, quick action icons use SF Symbols, while on Android, you need to pass in a bundled image

108. What command is used to rebuild native projects after modifying app.json?
108. npx expo prebuild clean

109. How many quick action items are recommended to add to an app?
109. One or two quick action items, with recommendations not to exceed three or four

110. What hook is used to automatically route to a specific page when a quick action is triggered in Expo Router?
110. useQuickActionRouting from expo-quick-actions/router

111. What is deep linking in the context of mobile apps?
111. Deep linking allows opening a specific page in an app from outside the app by registering a custom scheme that the app listens to, enabling direct navigation to a particular screen using a URL-like identifier

112. How does Expo Router support deep linking?
112. Expo Router supports deep linking out of the box due to its file system based routing, which allows easily distinguishing screens with unique href paths and enabling navigation through custom app-specific schemes

113. What determines the order of rendering in Expo Router when deep linking?
113. Rendering occurs in a backward order, starting from the requested screen, then moving through parent layout files sequentially, which means redirects and other navigation logic in parent layouts will be processed first

114. How can you set an initial route name in a stack navigation using Expo Router?
114. By using unstable_settings with initialRouteName in the layout file, you can specify which route should be rendered first in a navigation stack, ensuring proper back button behavior and default screen rendering