import { NativeModule, requireNativeModule } from 'expo';

import { ExpoVideoPipKitModuleEvents } from './ExpoVideoPipKit.types';

declare class ExpoVideoPipKitModule extends NativeModule<ExpoVideoPipKitModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoVideoPipKitModule>('ExpoVideoPipKit');
