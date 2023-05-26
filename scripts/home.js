import { redirectTo } from './utils.js'
import { storageConfiguration } from './context.js'

let signOutButton = document.getElementById('signOut')

// Sign out
signOutButton.addEventListener('click', (event) => {
  event.preventDefault()

  storageConfiguration.clean(['@haCallAuth'])
  redirectTo('/signIn')
})
