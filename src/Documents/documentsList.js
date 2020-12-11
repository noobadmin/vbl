import React, {Suspense} from 'react'

import ErrorBoundary from '../App/errorBoundary'
import Spinner from '../App/spinner'
import {useSearchStore} from '../App/stores'
import useScrollPos from '../App/useScrollPos'
import {Flex} from '../Primitives'
import Document from './newDocument'

const DocumentsList = show => {
  const documents = useSearchStore(state => state.data)
  console.log(documents)
  useScrollPos(false)
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Flex
          sx={{
            flexDirection: 'column',
            gap: [2, 3, 3, 4],
          }}
        >
          {documents.map((document, index) => (
            <Document index={index} document={document} key={index} />
          ))}
        </Flex>
      </Suspense>
    </ErrorBoundary>
  )
}
export default DocumentsList
