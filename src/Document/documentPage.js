import React, {Suspense} from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import ErrorBoundary from '../App/errorBoundary'
import Spinner from '../App/spinner'
import documents from '../data.json'
import {Box, Card, Image, Flex, Heading} from '../Primitives'
import Document from './document'

const DocumentPage = props => {
  const documentId = props.match.params.documentId
  const data = documents[documentId]
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Heading>{data.title}</Heading>
        <Flex sx={{flexWrap: 'wrap'}}>
          <Box mb={[2, 3, 0]} width={[1, 1, 1 / 2]}>
            <Document data={data} />
          </Box>
          <Box pl={[0, 0, 3]} width={[1, 1, 1 / 2]}>
            <Card>
              <Heading>Preview Visualisation</Heading>
              <Box mx={-3} mt={3} mb={-3}>
                <Image
                  sx={{display: 'block', width: '100%', height: '100%'}}
                  src={`/images/${data.image}`}
                />
              </Box>
            </Card>
          </Box>
        </Flex>
      </Suspense>
    </ErrorBoundary>
  )
}

export default DocumentPage

const S = {}
S.Box = styled(Box)(css({}))
