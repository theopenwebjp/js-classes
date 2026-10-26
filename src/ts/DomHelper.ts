export function onClickOutside(element: Element, onClick: () => void): (ev: Event) => void {
  const handle = (ev: Event) => {
      const { target } = ev

      if (!(target instanceof Node) || !element.contains(target)) {
      onClick()
      }
  }
  document.addEventListener('click', handle)

  return handle
}

export function onElementEscaped(element: Element, onEscape: () => void): (() => void) {
  const clearRefs: (() => void)[] = []
  const clearHandles = () => {
      clearRefs.forEach(handle => handle())
  }

  const handles = {
      keyDown: (ev: KeyboardEvent) => {
        if (ev.code === 'Escape') {
            clearHandles()
            onEscape()
        }
      }
  }

  const clickHandler = onClickOutside(element, () => {
      clearHandles()
      onEscape()
  })

  document.addEventListener('keydown', handles.keyDown)

  // Clearing
  clearRefs.push(() => document.removeEventListener('click', clickHandler))
  clearRefs.push(() => document.removeEventListener('keydown', handles.keyDown))
  return clearHandles
}
