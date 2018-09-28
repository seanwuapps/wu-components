/**
 * detect animation end
 */
export function transitionEndEvent () {
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
}
/**
 * get browser event name
 */
export function detectTransitionEnd (element: Element, callback: () => void) {
  /* Listen for a transition! */
  let event = transitionEndEvent()
  event && element.addEventListener(event, callback)
}
