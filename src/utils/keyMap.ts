export const hotkeys = [
  {
    code: 'Shift'
  },
  {
    code: 'Alt'
  },
  {
    code: 'Control'
  },
  {
    code: 'Meta'
  }
].map(({ code }) => ({
  code,
  icon: `icon-${code.toLowerCase()}`
}))

export const hasIconKeys = [
  {
    code: 'Escape'
  },
  {
    code: 'Tab'
  },
  {
    code: 'Backspace'
  },
  {
    code: 'Enter'
  },
  {
    code: 'ArrowUp'
  },
  {
    code: 'ArrowRight'
  },
  {
    code: 'ArrowDown'
  },
  {
    code: 'ArrowLeft'
  }
].map(({ code }) => ({
  code,
  icon: `icon-${code.toLowerCase()}`
}))

export const generalKeys = [
  // 1st row
  {
    code: 'F1'
  },
  {
    code: 'F2'
  },
  {
    code: 'F3'
  },
  {
    code: 'F4'
  },
  {
    code: 'F5'
  },
  {
    code: 'F6'
  },
  {
    code: 'F7'
  },
  {
    code: 'F8'
  },
  {
    code: 'F9'
  },
  {
    code: 'F10'
  },
  {
    code: 'F11'
  },
  {
    code: 'F12'
  },

  // 2nd row
  {
    code: 'Backquote',
    symbol: '`'
  },
  {
    code: 'Digit1'
  },
  {
    code: 'Digit2'
  },
  {
    code: 'Digit3'
  },
  {
    code: 'Digit4'
  },
  {
    code: 'Digit5'
  },
  {
    code: 'Digit6'
  },
  {
    code: 'Digit7'
  },
  {
    code: 'Digit8'
  },
  {
    code: 'Digit9'
  },
  {
    code: 'Digit0'
  },
  {
    code: 'Minus',
    symbol: '-'
  },
  {
    code: 'Equal',
    symbol: '='
  },
  // 3rd row
  {
    code: 'KeyQ'
  },
  {
    code: 'KeyW'
  },
  {
    code: 'KeyE'
  },
  {
    code: 'KeyR'
  },
  {
    code: 'KeyT'
  },
  {
    code: 'KeyY'
  },
  {
    code: 'KeyU'
  },
  {
    code: 'KeyI'
  },
  {
    code: 'KeyO'
  },
  {
    code: 'KeyP'
  },
  {
    code: 'BracketLeft',
    symbol: '['
  },
  {
    code: 'BracketRight',
    symbol: ']'
  },
  {
    code: 'Backslash',
    symbol: '\\'
  },

  // 4th row
  {
    code: 'KeyA'
  },
  {
    code: 'KeyS'
  },
  {
    code: 'KeyD'
  },
  {
    code: 'KeyF'
  },
  {
    code: 'KeyG'
  },
  {
    code: 'KeyH'
  },
  {
    code: 'KeyJ'
  },
  {
    code: 'KeyK'
  },
  {
    code: 'KeyL'
  },
  {
    code: 'Semicolon',
    symbol: ';'
  },
  {
    code: 'Quote',
    symbol: "'"
  },

  // 5th row
  {
    code: 'KeyZ'
  },
  {
    code: 'KeyX'
  },
  {
    code: 'KeyC'
  },
  {
    code: 'KeyV'
  },
  {
    code: 'KeyB'
  },
  {
    code: 'KeyN'
  },
  {
    code: 'KeyM'
  },
  {
    code: 'Comma',
    symbol: ','
  },
  {
    code: 'Period',
    symbol: '.'
  },
  {
    code: 'Slash',
    symbol: '/'
  },

  // 6th row
  {
    code: 'Space',
    symbol: 'Space'
  }
].map(({ code, symbol }) => ({
  code,
  symbol: symbol
    ? symbol
    : code.includes('Digit') || code.includes('Key')
    ? code.at(-1)
    : code.toUpperCase()
}))

const keys = [...hotkeys, ...hasIconKeys, ...generalKeys]

export const isHotKey = (key: string) =>
  !!hotkeys.find((item) => item.code === key)

export const getKeyIcon = (code: string) =>
  hasIconKeys.find((item) => item.code === code)?.icon || ''

export const getKeySymbol = (code: string) =>
  generalKeys.find((item) => item.code === code)?.symbol || ''