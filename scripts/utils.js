function redirectTo(page) {
  let path = getPageRoute(page)
  location.href = path
}

function getPageRoute(page) {
  return '/pages' + page + '.html'
}

export { redirectTo }
