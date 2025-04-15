import ExpoModulesCore

public class ExpoVideoPipKitModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoVideoPipKit")

    Function("getApiKey") { () -> String in
      "api-key"
    }
  }
}
