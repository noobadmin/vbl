import React from 'react'

import moment from 'moment'

import {Box} from '../Primitives'

export const parseDate = date => moment(date).format('L')

export const ifArray = data =>
  Array.isArray(data)
    ? data.map((item, index, arr) =>
        arr.length > index + 1 ? `${item} | ` : item
      )
    : data

export const AspectBox = ({children}) => (
  <Box
    sx={{
      bg: 'black',
      width: '100%',
      height: '100%',
      position: 'relative',
      zIndex: -1,
    }}
  >
    <Box
      sx={{
        pt: '100%',
        position: 'relative',
        height: 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  </Box>
)
