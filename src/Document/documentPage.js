import React, {Suspense} from 'react'

import css from '@styled-system/css'
import styled from 'styled-components'

import ErrorBoundary from '../App/errorBoundary'
import Spinner from '../App/spinner'
import {Box} from '../Primitives'
import Document from './document'
import documents from '../data.json'

const DocumentPage = props => {
  const documentId = props.match.params.documentId
  const data = documents[documentId]
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Document data={data} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default DocumentPage

const S = {}
S.Box = styled(Box)(css({}))
