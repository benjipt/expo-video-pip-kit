import { registerWebModule, NativeModule } from 'expo';

import { ExpoVideoPipKitModuleEvents } from './ExpoVideoPipKit.types';

class ExpoVideoPipKitModule extends NativeModule<ExpoVideoPipKitModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoVideoPipKitModule);
