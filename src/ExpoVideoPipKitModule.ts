import { NativeModule, requireNativeModule } from "expo";
import { Platform } from "react-native";

declare class ExpoVideoPipKitModule extends NativeModule {
  removeListeners(count: number): void;
}

// On iOS, load the native module. On Android, provide a stub implementation.
const ExpoVideoPipKit: ExpoVideoPipKitModule =
  Platform.OS === "ios"
    ? requireNativeModule<ExpoVideoPipKitModule>("ExpoVideoPipKit")
    : ({ removeListeners: (_: number) => {} } as ExpoVideoPipKitModule);

export default ExpoVideoPipKit;
