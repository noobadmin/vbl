import React from 'react'

import styled from 'styled-components'

import {ifArray, parseDate} from '../App/helpers'
import {Box, Card, Image, Heading, Link, Text, Flex} from '../Primitives'

const Details = props => <S.Details>{props.children}</S.Details>
const Detail = props => (
  <S.Detail>
    <S.Text fontWeight="bold">{props.caption}</S.Text>
    <S.Text>{props.children}</S.Text>
  </S.Detail>
)

const Document = ({data}) => {
  return (
    <Box>
      <Card>
        <Heading>Description</Heading>
        <Text>{data.description}</Text>
      </Card>
      <Details>
        <Detail caption="Data Type">{data.datatype}</Detail>
        <Detail caption="Dataset Size">{data.datasetsize}</Detail>
        <Detail caption="App Size">{data.appsize}</Detail>
        <Detail caption="Simulation Code">{data.simulationcode}</Detail>
        <Detail caption="Author">{ifArray(data.authors)}</Detail>
        <Detail caption="Institute of Origin">{data.instituteoforigin}</Detail>
        <Detail caption="Original Format">{data.originalformat}</Detail>
        <Detail caption="Dimensions">{data.dimensions}</Detail>
        <Detail caption="Data Created">{parseDate(data.datacreated)}</Detail>
        <Detail caption="Visualisation Created">
          {parseDate(data.viscreated)}
        </Detail>
        <Detail caption="Last Update">{parseDate(data.lastupdate)}</Detail>
        <Detail caption="Visualisation Type">{ifArray(data.vistype)}</Detail>
        <Detail caption="Visualisation Method">
          {ifArray(data.vismethod)}
        </Detail>
        <Detail caption="Keywords">{ifArray(data.keywords)}</Detail>
        <Detail caption="Visualisation Link">
          <Link href={data.vbllink}> {data.vbllink}</Link>
        </Detail>
      </Details>
    </Box>
  )
}

export default Document

const S = {}
S.Details = styled(Box)``
S.Detail = styled(Card).attrs({
  sx: {
    display: 'grid',
    gridTemplateColumns: '35% 1fr',
    gridGap: '0.3rem',
    bg: 'background',
    p: 0,
    m: 0,
    my: '0.3rem',
  },
})``
S.Text = styled(Text).attrs({
  bg: 'middleground',
  px: [3],
  py: [2],
})``
