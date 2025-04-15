import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoVideoPipKitViewProps } from './ExpoVideoPipKit.types';

const NativeView: React.ComponentType<ExpoVideoPipKitViewProps> =
  requireNativeView('ExpoVideoPipKit');

export default function ExpoVideoPipKitView(props: ExpoVideoPipKitViewProps) {
  return <NativeView {...props} />;
}
