import * as React from 'react';

import { ExpoVideoPipKitViewProps } from './ExpoVideoPipKit.types';

export default function ExpoVideoPipKitView(props: ExpoVideoPipKitViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
