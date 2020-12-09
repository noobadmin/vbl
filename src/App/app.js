import React, {Suspense, useContext} from 'react'

import {Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'

import ErrorBoundary from '../App/errorBoundary'
import DocumentPage from '../Document/documentPage'
import DocumentsPage from '../Documents/documentsPage'
import Navigation from '../Navigation/navigation'
import {Box} from '../Primitives'
import dark from '../Theme/dark'
import Global from '../Theme/global'
import light from '../Theme/light'
import ThemeModeContext from '../Theme/themeModeContext'
import Spinner from './spinner'

const App = () => {
  const {isDark} = useContext(ThemeModeContext)
  return (
    <ThemeProvider theme={dark}>
      <Global />
      <Box as="nav" sx={{position: 'sticky', top: 0}}>
        <Navigation />
      </Box>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={DocumentsPage} />
          <Route exact path="/documents" component={DocumentsPage} />
          <Route exact path="/documents/:documentId" component={DocumentPage} />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
