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
    <ThemeProvider theme={isDark ? dark : light}>
      <Global />
      <Box mb={[4, 5]} as="nav" sx={{position: 'sticky', top: 0}}>
        <Navigation />
      </Box>
      <Box mx={[0, 2, 3, 4]}>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={DocumentsPage} />
            <Route exact path="/documents" component={DocumentsPage} />
            <Route
              exact
              path="/documents/:documentId"
              component={DocumentPage}
            />
          </Suspense>
        </ErrorBoundary>
      </Box>
    </ThemeProvider>
  )
}

export default App
