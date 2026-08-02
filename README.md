# 🪴 Plantly

> Keep your plants healthy and hydrated. A cross-platform React Native mobile app built with Expo that helps you track watering schedules for all your plants.

Plantly is a full-featured React Native application that demonstrates intermediate-level mobile development concepts with the Expo ecosystem. Users can add plants, attach photos from their device, set custom watering frequencies, mark plants as watered, and delete plants — all with persistent local storage and a polished, delightful UI.

---

## ✨ Features

- **Onboarding Flow** — A gradient-styled welcome screen with a custom "Let me in!" button. The onboarding state is persisted so returning users skip it automatically.
- **Plant Collection** — A home screen that lists all your plants as tappable cards using a highly efficient `FlatList`.
- **Add Plants** — A modal "New Plant" form where you can give your plant a name, set a watering frequency (in days), and optionally pick a photo from your device's image library.
- **Photo Support** — Select an image from your library via `expo-image-picker`. Selected images are copied into the app's document directory using `expo-file-system` so they persist across app launches.
- **Plant Details** — A dedicated detail screen per plant showing the watering frequency, last watered date/time, and days since last watered (powered by `date-fns`).
- **Water Tracking** — One-tap "Water me!" button that records the exact timestamp via the Zustand store.
- **Delete Protection** — Delete a plant with a confirmation `Alert` to prevent accidental data loss.
- **Quick Actions** — Home screen (app icon) quick actions for **"Add a plant"** and **"Profile"** using `expo-quick-actions`.
- **Deep Linking** — The app registers the `plantly://` custom scheme, enabling deep links like `plantly://plants/1?action=water` to open a specific plant and even water it automatically.
- **Haptic Feedback** — Buttons trigger a light haptic impact on supported devices (`expo-haptics`).
- **Responsive Imagery** — Images scale with the device width (capped via `Math.min`) using `useWindowDimensions`.
- **Dynamic Headers** — The plant detail screen title updates to the plant's name using `navigation.setOptions`.
- **Custom Fonts** — The "Caveat" Google font is bundled and used with platform-aware font family selection (`Platform.select`).
- **Toast Notifications** — Success toasts confirm plant additions via `react-native-toast-message`.
- **Keyboard-Aware Forms** — The add-plant form stays visible while typing using `react-native-keyboard-aware-scroll-view`.

---

## 🛠 Tech Stack

| Technology                                                                                                 | Purpose                                   | Version               |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------- | --------------------- |
| [Expo](https://expo.dev)                                                                                   | Framework & SDK                           | `~57.0.9`             |
| [React Native](https://reactnative.dev)                                                                    | Mobile UI framework                       | `0.86.2`              |
| [React](https://react.dev)                                                                                 | UI library                                | `19.2.3`              |
| [TypeScript](https://www.typescriptlang.org)                                                               | Typed JavaScript                          | `5.9.3`               |
| [Expo Router](https://docs.expo.dev/router/introduction/)                                                  | File-based navigation                     | `~57.0.9`             |
| [Zustand](https://zustand.docs.pmnd.rs)                                                                    | State management                          | `^5.0.14`             |
| [AsyncStorage](https://github.com/react-native-async-storage/async-storage)                                | Local persistence                         | `2.2.0`               |
| [date-fns](https://date-fns.org)                                                                           | Date formatting & math                    | `^4.4.0`              |
| [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)                         | Gradient backgrounds                      | `~57.0.1`             |
| [expo-image-picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)                                | Image library access                      | `~57.0.7`             |
| [expo-file-system](https://docs.expo.dev/versions/latest/sdk/filesystem/)                                  | File copy & storage                       | `~57.0.1`             |
| [expo-haptics](https://docs.expo.dev/versions/latest/sdk/haptics/)                                         | Haptic feedback                           | `~57.0.1`             |
| [expo-quick-actions](https://docs.expo.dev/versions/latest/sdk/quick-actions/)                             | Home screen quick actions                 | `^6.0.2`              |
| [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)                                               | Custom fonts                              | `~57.0.1`             |
| [@expo-google-fonts/caveat](https://github.com/expo/google-fonts)                                          | Caveat font family                        | `^0.4.2`              |
| [react-native-toast-message](https://github.com/calintamas/react-native-toast-message)                     | Toast notifications                       | `2.4.0`               |
| [react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view) | Keyboard-aware forms                      | `^0.9.5`              |
| [@expo/vector-icons](https://docs.expo.dev/guides/icons/)                                                  | Vector icons (Entypo, Feather, AntDesign) | `^15.0.2`             |
| [expo-status-bar](https://docs.expo.dev/versions/latest/sdk/status-bar/)                                   | Status bar control                        | `~57.0.1`             |
| [ESLint](https://eslint.org)                                                                               | Code linting                              | `^9.0.0`              |
| [Prettier](https://prettier.io)                                                                            | Code formatting                           | `^3.9.6`              |
| [EAS Build](https://docs.expo.dev/build/introduction/)                                                     | Cloud builds & submits                    | `eas.json` configured |

---

## 📁 Project Structure

```
react-native-intermediate-v2-masterdotdev/
├── README.md                          # This file
├── TODO.md                            # Task tracking
├── questions/                         # Study Q&A + Deep Link tester (learning material)
│   ├── questions.md                   # 134 Q&A covering the concepts used in Plantly
│   └── index.html                     # Plantly Deep Link Tester web page
│
└── plantly/                           # The Plantly app (Expo project root)
    ├── .gitignore                     # Git ignore rules (node_modules, native folders, etc.)
    ├── app.json                       # Expo app configuration (scheme, icons, plugins, EAS id)
    ├── eas.json                       # EAS Build profiles (development, preview, production)
    ├── eslint.config.js               # ESLint flat config (Expo + Prettier + React Native)
    ├── index.ts                       # Entry point (registerRootComponent)
    ├── package.json                   # Dependencies & scripts
    ├── package-lock.json              # Lockfile
    ├── theme.ts                       # Centralized color palette
    ├── tsconfig.json                  # TypeScript config (strict + @/* path alias)
    ├── LICENSE                        # MIT License
    │
    ├── assets/                        # Static assets (icons, splash, plantly.png)
    │
    ├── app/                           # Expo Router file-based routes
    │   ├── _layout.tsx                # Root Stack layout (tabs, onboarding, new plant modal)
    │   ├── onboarding.tsx             # Onboarding welcome screen (modal, fade animation)
    │   ├── new.tsx                    # "New Plant" modal form
    │   │
    │   └── (tabs)/                    # Tab layout group (no "tabs" in URL)
    │       ├── _layout.tsx            # Tabs navigator + onboarding redirect guard
    │       ├── profile.tsx            # Profile tab (back-to-onboarding button)
    │       │
    │       └── (home)/                # Home stack layout group
    │           ├── _layout.tsx        # Home stack (index + plant detail) with header "+"
    │           ├── index.tsx          # Plant list (FlatList of PlantCards)
    │           │
    │           └── plants/
    │               └── [plantId].tsx  # Dynamic plant detail screen (deep-linkable)
    │
    ├── components/                    # Reusable UI components
    │   ├── Banner.tsx                 # Simple banner component
    │   ├── PlantCard.tsx              # Tappable plant list card (links to detail)
    │   ├── PlantlyButton.tsx          # Pressable button w/ haptics + pressed state
    │   └── PlantlyImage.tsx           # Responsive image (local asset or remote URI)
    │
    └── store/                         # Zustand stores
        ├── plantStore.ts              # Plants CRUD + water tracking (persisted)
        └── userStore.ts               # Onboarding completion flag (persisted)
```

---

## ✅ Prerequisites

Before running the project, make sure your environment meets the following requirements:

| Requirement              | Notes                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------ |
| **Node.js LTS**          | Use an even-numbered LTS release (e.g., 20, 22, or 24).                              |
| **npm**                  | Bundled with Node.js.                                                                |
| **Expo Go app**          | Installed on your physical device for quick testing (iOS App Store / Google Play).   |
| **Xcode** _(macOS only)_ | Required for iOS native builds & simulators.                                         |
| **Android Studio**       | Required for Android native builds & emulators.                                      |
| **Watchman** _(macOS)_   | Recommended by Expo for file watching.                                               |
| **Same Wi-Fi network**   | Your computer and device must be on the same network for Expo Go, or use `--tunnel`. |

> 💡 **Tip:** If you cannot connect via the local network, start the dev server with the tunnel flag: `npx expo start --tunnel` (uses Ngrok to expose the JS bundle).

---

## 🚀 Getting Started

### 1. Clone & install

```bash
# Navigate into the app directory
cd plantly

# Install dependencies
npm install
```

### 2. Start the development server

```bash
npm start
# or
npx expo start
```

### 3. Run on your platform

```bash
# iOS Simulator (macOS only)
npm run ios

# Android Emulator / device
npm run android

# Web browser
npm run web
```

Alternatively, scan the QR code shown in the terminal with the **Expo Go** app on your physical device (same Wi-Fi network required).

---

## ⚙️ Configuration

### `app.json`

The core Expo configuration:

- **`name` / `slug`** — `Plantly` / `plantly`
- **`scheme`** — `plantly` (enables deep linking, e.g. `plantly://plants/1`)
- **`orientation`** — Portrait only
- **`userInterfaceStyle`** — Light
- **`plugins`** — `expo-router`, `expo-status-bar`, `expo-font` (bundles Caveat), `expo-splash-screen`, `expo-quick-actions` (leaf icon)

### `eas.json` (EAS Build profiles)

| Profile         | Purpose                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------- |
| **development** | `developmentClient: true`, internal distribution — runs the dev client with the dev menu. |
| **preview**     | `buildType: apk`, internal distribution — a single-bundle APK emulating production.       |
| **production**  | `autoIncrement: true` — app-store-ready builds with automatic build numbers.              |

### `theme.ts`

A centralized color palette ensuring visual consistency:

```ts
export const theme = {
  colorGreen: "#29b365",
  colorWhite: "#fff",
  colorLeafyGreen: "#206a42",
  colorAppleGreen: "#a0d36c",
  colorLimeGreen: "#d0e57e",
  colorLightGrey: "#eee",
  colorGrey: "#808080",
  colorBlack: "#000",
};
```

### `tsconfig.json`

Extends `expo/tsconfig.base` with **strict mode** and the path alias:

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": { "@/*": ["./*"] }
  }
}
```

> The `@/*` alias means `import { theme } from "@/theme"` resolves to `./theme` from the `plantly/` root — no more fragile relative imports.

### `eslint.config.js`

Uses ESLint's flat config combining:

- `eslint-config-expo/flat` — Expo-recommended rules
- `eslint-plugin-prettier/recommended` — Prettier integration
- `eslint-plugin-react-native` with `react-native/no-unused-styles` as an error

---

## 🧭 Navigation (Expo Router)

Expo Router uses the **file system as the routing table**. Files inside `app/` automatically become screens, and layout files (`_layout.tsx`) define navigators.

```
app/
├── _layout.tsx          → Root <Stack>: (tabs), onboarding, new
└── (tabs)/
    ├── _layout.tsx      → <Tabs>: (home), profile  (+ onboarding Redirect guard)
    └── (home)/
        ├── _layout.tsx  → <Stack>: index, plants/[plantId]
        ├── index.tsx    → "/" (home, plant list)
        └── plants/
            └── [plantId].tsx → "/plants/1", "/plants/2", ...
```

### Key concepts used

- **Layout groups `(tabs)`, `(home)`** — Parentheses folders group routes **without** adding a path segment, enabling nested navigators.
- **Root stack** — Renders the tab navigator plus two full-screen modals:
  - `onboarding` — `presentation: "modal"`, `animation: "fade"`
  - `new` — `presentation: "modal"`, titled **"New Plant"**
- **Tab navigator** — Two tabs: **Home** (Entypo `leaf` icon) and **Profile** (Feather `user` icon). Labels are conditionally rendered (only the focused tab shows its label) and the active tint is green.
- **Onboarding guard** — The `(tabs)/_layout.tsx` reads `hasFinishedOnboarding` from the user store and returns `<Redirect href="/onboarding" />` when onboarding hasn't been completed.
- **Dynamic routes** — `[plantId].tsx` captures the URL segment, accessed via `useLocalSearchParams()`.
- **Dynamic headers** — The detail screen sets its navigation title to the plant name with `navigation.setOptions()`.
- **`unstable_settings.initialRouteName`** — Ensures deep links land on `index` as the initial stack route so the back button behaves correctly.
- **`router.replace()`** — Used after onboarding and after deleting a plant so users can't navigate back to stale screens.
- **`Link` + `asChild`** — The header "+" button and `PlantCard` wrap a `Pressable` inside `<Link asChild>` so the pressable is the actual touch target.
- **`hitSlop`** — Expands the tap target around the small "+" icon for a better UX.

---

## 📦 State Management (Zustand)

State is managed with **Zustand** and persisted to device storage with **AsyncStorage** through the `persist` middleware.

### `store/userStore.ts`

Tracks onboarding completion:

- `hasFinishedOnboarding: boolean`
- `toggleHadOnboarded()` — flips the flag
- Persisted under the key **`plantly-user-store`**

### `store/plantStore.ts`

Full CRUD for plants:

| Type                                               | Description                                                                                                                            |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `PlantType`                                        | `{ id, name, imageUri?, wateringFrequencyDays, lastWateredAtTimestamp? }`                                                              |
| `plants`                                           | Array of `PlantType`                                                                                                                   |
| `nextId`                                           | Incremental ID counter used for unique plant IDs                                                                                       |
| `addPlant(name, wateringFrequencyDays, imageUri?)` | Creates a plant; **copies the picked image** from its temporary cache into `Paths.document` with a timestamped filename so it persists |
| `removePlant(plantId)`                             | Filters the plant out of the list                                                                                                      |
| `waterPlant(plantId)`                              | Sets `lastWateredAtTimestamp: Date.now()`                                                                                              |

- Persisted under the key **`plantly-plants-store`**
- `createJSONStorage(() => AsyncStorage)` handles JSON (de)serialization, and AsyncStorage is loaded **lazily** — only when Zustand first needs storage.

---

## 📱 App Screens

### 1. Onboarding — `/onboarding`

- Full-screen `LinearGradient` (green → apple green → lime).
- Large **Plantly** heading with a white text shadow.
- "Caveat" font tagline: _"Keep your plants healthy and hydrated."_
- Renders the app's mascot image and a **"Let me in!"** button.
- On press: toggles `hasFinishedOnboarded` and `router.replace("/")` (so the user can't swipe back to onboarding).
- Light status bar.

### 2. Home — `/`

- A `FlatList` of `PlantCard` components (efficient rendering for large lists).
- Empty state shows a **"Add your first plant"** button that navigates to `/new`.
- Header "+" icon (AntDesign `plus-circle`) opens the new-plant modal.

### 3. Plant Details — `/plants/[plantId]`

- Large plant photo.
- **Water me every X days** — watering frequency.
- **Last watered at** — formatted date via `date-fns` (`format`).
- **Days since last watered** — `differenceInCalendarDays` from `date-fns`.
- **"Water me!"** button — records the watering timestamp.
- **Delete** button — shows a destructive confirmation `Alert`, then removes the plant and `router.replace("/")`.
- If the plant ID doesn't exist, shows a "Plant with ID X not found" message.
- Reads `?action=water` from deep-link params and waters the plant automatically on mount.

### 4. New Plant — `/new` (modal)

- `KeyboardAwareScrollView` so inputs stay visible above the keyboard.
- Tappable image placeholder (`PlantlyImage`) — launches `expo-image-picker` to pick a photo (mobile only; disabled on web).
- **Name** input (`autoCapitalize="words"`).
- **Watering Frequency** input with `keyboardType="number-pad"`.
- Validation via `Alert`:
  - Name is required.
  - Watering frequency is required.
  - Frequency must be a number.
- On success: adds the plant, navigates home, and shows a toast — _"`{name}` 🪴 has been added Successfully!"_

### 5. Profile — `/profile` (tab)

- A single **"Back to onBoarding"** button that flips the onboarding flag, returning the user to the onboarding screen.

---

## 🧩 Components

| Component       | File                           | Description                                                                                                                                                          |
| --------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PlantlyButton` | `components/PlantlyButton.tsx` | Green rounded `Pressable` with a bold white title. Triggers a light haptic on mobile and switches to leafy-green while pressed (via the `Pressable` state function). |
| `PlantlyImage`  | `components/PlantlyImage.tsx`  | Responsive image sized off `useWindowDimensions` (`width / 1.5`, capped at 400) with rounded corners. Shows the bundled `plantly.png` when no `uri` is given.        |
| `PlantCard`     | `components/PlantCard.tsx`     | Row card with a 100px image, the plant name, and "Water every X days". Wrapped in a `<Link>` (with `asChild`) to `/plants/{id}`.                                     |
| `Banner`        | `components/Banner.tsx`        | Simple message banner component.                                                                                                                                     |

---

## 🔗 Deep Linking

The app registers the `plantly://` scheme (defined in `app.json`). Because Expo Router is file-based, every screen is automatically deep-linkable with a unique href.

### Example links

| Link                              | Result                                          |
| --------------------------------- | ----------------------------------------------- |
| `plantly://`                      | Opens the home route.                           |
| `plantly://plants/1`              | Opens plant #1's detail screen.                 |
| `plantly://plants/1?action=water` | Opens plant #1 **and waters it automatically**. |

### Quick testing

```bash
# From the project, open a deep link directly on an Android device/emulator
npx uri-scheme open "plantly://plants/1?action=water" --android
```

### The Deep Link Tester (`questions/index.html`)

A standalone web page (`questions/index.html`) that lets you:

- Tap a link to open the app's home route.
- Tap a link to open a specific plant.
- Pick any plant ID (1–100) and water it via `plantly://plants/{id}?action=water`.

Open it on your phone (or via QR code) while the app is installed so the `plantly://` links launch the app.

> 💡 **Note on render order:** When a deep link is opened, Expo Router renders from the **requested screen backward through parent layouts**. Redirects/logic in parent layout files run first.

---

## ⚡ Quick Actions

Home screen (long-press app icon) quick actions are configured in `app/_layout.tsx`:

| Action          | Icon                                                | Route              |
| --------------- | --------------------------------------------------- | ------------------ |
| **Add a plant** | iOS: SF Symbol `leaf` / Android: bundled `leaf.png` | `href: "/new"`     |
| **Profile**     | —                                                   | `href: "/profile"` |

`useQuickActionRouting` (from `expo-quick-actions/router`) automatically handles navigation when a quick action is tapped.

---

## 📦 Build & Deployment (EAS)

[EAS Build](https://docs.expo.dev/build/introduction/) (Expo Application Services) compiles your app in the cloud.

### Profiles (`eas.json`)

```bash
# Development build (dev client + dev menu)
eas build --profile development

# Preview build (single-bundle APK for internal testing)
eas build --profile preview

# Production build (auto-incremented version)
eas build --profile production
```

### Submitting to stores

```bash
eas submit --profile production
```

### Signing & store notes

- **Android** uses a keystore (debug/upload). Google also offers **Managed Build Signing**. Distribution uses **APK** (directly installable) or **AAB** (Google generates device-specific APKs).
- **iOS** has three build types — **development** (via Xcode only), **ad hoc**, and **production** — each requiring specific certificates and provisioning profiles tied to a unique **App ID**.
- An **Apple Developer Program** account is required for iOS builds (~$99/year). A **Google Play** account is a one-time $25 fee.

### Splash screen note

> ⚠️ As of Feb 2026, Android resizes full-screen splash images during prebuild. The recommended approach is a **transparent icon + `backgroundColor`** instead of a full-bleed image.

---

## 🧪 Linting & Formatting

```bash
# Lint the project
npm run lint

# Lint with auto-fixes (note the extra "--")
npm run lint -- --fix

# Format with Prettier
npx prettier --write .
```

Linting combines Expo's recommended config with Prettier and a `react-native/no-unused-styles` error rule.

---

## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](./plantly/LICENSE) for details.

---

## 🙌 Acknowledgements

Built with the [Expo](https://expo.dev) ecosystem — including Expo Router, EAS Build, and the Expo SDK — plus Zustand, date-fns, and the React Native community libraries that make mobile development fast and delightful. 🪴
