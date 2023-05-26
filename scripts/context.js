const storageConfiguration = {
  set(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
  },
  get(key) {
    return localStorage.getItem(key)
  },
  clean(...keys) {
    keys.forEach((key) => {
      localStorage.removeItem(key)
    })
  },
}

function onboardingEverLoadedEvent() {
  storageConfiguration.set('@haCallOnboarding', {
    isOnboarded: true,
  })
}

function setAuthDataFromStorage(name, email) {
  storageConfiguration.set('@haCallAuth', {
    name,
    email,
  })
}

export {
  storageConfiguration,
  onboardingEverLoadedEvent,
  setAuthDataFromStorage,
}
