import { redirectTo } from './utils.js'
import { storageConfiguration } from './context.js'

let onboardingEvent = JSON.parse(storageConfiguration.get('@haCallOnboarding'))

if (onboardingEvent != null) {
  if (onboardingEvent?.isOnboarded != false) {
    redirectTo('/signIn')
  }
}
