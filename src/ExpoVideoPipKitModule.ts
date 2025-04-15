import { NativeModule, requireNativeModule } from "expo";
import { Platform } from "react-native";

// Declare an empty module type since no methods are defined yet.
declare class ExpoVideoPipKitModule extends NativeModule {}

// Load the native module only on iOS. On Android, export an empty stub.
const ExpoVideoPipKit: ExpoVideoPipKitModule =
  Platform.OS === "ios"
    ? requireNativeModule<ExpoVideoPipKitModule>("ExpoVideoPipKit")
    : ({} as ExpoVideoPipKitModule);

export default ExpoVideoPipKit;
