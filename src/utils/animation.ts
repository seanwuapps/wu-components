/**
 * detect animation end
 */

/**
 * get browser event name
 */
export function detectTransitionEnd (element: HTMLElement, callback: () => void) {
  /* Listen for a transition! */
  var el = document.createElement('fakeelement')
  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  }
  let t
  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t]
    }
  }

  t && element.addEventListener(t, callback)
}
