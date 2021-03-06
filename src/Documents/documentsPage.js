import React, {Suspense, useState} from 'react'

import styled from 'styled-components'

import ErrorBoundary from '../App/errorBoundary'
import Spinner from '../App/spinner'
import DocumentsList from '../Documents/documentsList'
import {Button, Box, Flex, Heading} from '../Primitives'
import Search from '../Search/search'

const DocumentsPage = props => {
  const [show, setShow] = useState(false)

  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Layout>
          <Side show={show === 'search' ? true : false}>
            <Heading variant="display">Search</Heading>
            <Search />
          </Side>
          <Main show={!show}>
            <Heading variant="display">Library</Heading>
            <DocumentsList show={!show} />
          </Main>
        </Layout>
        <Controls>
          <Flex
            sx={{bg: 'middleground', gap: 1, justifyContent: 'space-evenly'}}
          >
            <Button
              variant="secondary"
              onClick={() => {
                setShow('search')
              }}
            >
              Search
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setShow(null)
              }}
            >
              Documents
            </Button>
          </Flex>
        </Controls>
      </Suspense>
    </ErrorBoundary>
  )
}
export default DocumentsPage

const Layout = styled(Flex).attrs({
  sx: {
    gap: [2, 3, 3, 4],
  },
})``
const Main = styled(Box).attrs({
  width: [1, 1, 4 / 5],
})`

@media (max-width: ${({theme}) => theme.breakpoints[1]}) {
display: ${({show}) => (show ? 'block' : 'none')};
`
const Side = styled(Box).attrs({
  width: [1, 1, 1 / 5],
  display: ['none', 'none', 'block'],
})`
@media (max-width: ${({theme}) => theme.breakpoints[1]}) {
display: ${({show}) => (show ? 'block' : 'none')};

`
const Controls = styled(Box).attrs({
  display: ['block', 'block', 'none'],
  sx: {position: 'fixed', bottom: 0, width: '100%'},
})``
