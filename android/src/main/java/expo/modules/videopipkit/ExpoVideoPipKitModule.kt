import { Platform } from "react-native";
import { NativeModule, requireNativeModule } from "expo";

declare class ExpoVideoPipKitModule extends NativeModule {
  // No functions declared yet.
}

// Only load the native module on iOS; on Android, export a stub.
const ExpoVideoPipKit =
  Platform.OS === "ios"
    ? requireNativeModule<ExpoVideoPipKitModule>("ExpoVideoPipKit")
    : {};

export default ExpoVideoPipKit;
