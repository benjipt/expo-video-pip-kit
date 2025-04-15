package expo.modules.videopipkit

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoVideoPipKitModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoVideoPipKit")

    Function("getApiKey") {
      return@Function "api-key"
    }
  }
}
