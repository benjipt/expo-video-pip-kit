import ExpoModulesCore
import AVKit

public class ExpoVideoPipKitModule: Module, AVPictureInPictureControllerDelegate {
  var pipController: AVPictureInPictureController?

  public func definition() -> ModuleDefinition {
    Name("ExpoVideoPipKit")
    
    // Declare an event to notify JS when the PiP restore action occurs.
    Events("onPipRestore")

    // Expose a function to set up the PiP controller.
    Function("setupPipController") { (playerLayer: AVPlayerLayer) in
      self.pipController = AVPictureInPictureController(playerLayer: playerLayer)
      self.pipController?.delegate = self
    }
  }

  // Called when the system requests to restore the user interface (user tapped the restore button).
  public func pictureInPictureController(
    _ pictureInPictureController: AVPictureInPictureController,
    restoreUserInterfaceForPictureInPictureStopWithCompletionHandler completionHandler: @escaping (Bool) -> Void
  ) {
    // Emit the onPipRestore event so JS knows the user tapped restore.
    sendEvent("onPipRestore", body: nil)
    completionHandler(true)
  }
}
