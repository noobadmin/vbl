import css from '@styled-system/css'
import normalize from 'normalize.css'
import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle(
  css({
    normalize,
    body: {
      backgroundColor: 'background',
      color: 'text',
      fontSize: [0, 1],
      fontFamily: 'body',
    },
    html: {
      fontSize: '10px',
    },
    ':root': {
      fontSize: '10px',
    },
  })
)
export default GlobalStyle
