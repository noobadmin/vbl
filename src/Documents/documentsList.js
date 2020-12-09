import React, {Suspense} from 'react'

import ErrorBoundary from '../App/errorBoundary'
import Spinner from '../App/spinner'
import {useSearchStore} from '../App/stores'
import useScrollPos from '../App/useScrollPos'
import Document from './document'
import documents from '../data.json'

const DocumentsList = () => {
  useScrollPos(false)
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        {documents.map((document, index) => (
          <Document index={index} document={document} key={index} />
        ))}
      </Suspense>
    </ErrorBoundary>
  )
}
export default DocumentsList
