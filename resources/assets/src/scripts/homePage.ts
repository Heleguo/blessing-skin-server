import { getExtraData } from './extra'

export function scrollHander() {
  const header = document.querySelector('.home-navbar')
  /* istanbul ignore else */
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    })
  }
}

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  const { transparent_navbar } = getExtraData() as {
    transparent_navbar: boolean
  }
  if (transparent_navbar) {
    window.addEventListener('load', scrollHander)
  }
}
