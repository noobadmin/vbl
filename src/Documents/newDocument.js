import React from 'react'

import {Link as RouterLink} from 'react-router-dom'
import styled from 'styled-components'

import {AspectBox, parseDate} from '../App/helpers'
import Spinner from '../App/spinner'
import {Box, Flex, Card, Heading, Link, Image, Text} from '../Primitives'

const Document = ({document, index}) => {
  const HeadingLink = ({title, pid}) => (
    <Link as={RouterLink} to={'/documents/' + pid}>
      <Heading>{title.substring(0, 90)}</Heading>
    </Link>
  )
  const MetaItem = ({caption, data}) => (
    <S.MetaItem>
      <Caption>{caption}</Caption>
      {data}
    </S.MetaItem>
  )
  return !document ? (
    <Spinner />
  ) : (
    <Flex
      sx={{
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      <Box width={[1, 1 / 2, 1 / 3, 1 / 4]}>
        <AspectBox>
          <Image
            sx={{
              display: 'block',
              width: '100%',
              height: '100%',
            }}
            src={`./images/${document.image}`}
          />
        </AspectBox>
      </Box>
      <Card width={[1, 1 / 2, 2 / 3, 3 / 4]}>
        <HeadingLink pid={index} title={document.title} />
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Flex flexWrap="wrap">
            {Array.isArray(document.keywords) ? (
              document.keywords.map((str, index) => (
                <Card key={index} variant="keyword">
                  {str}
                </Card>
              ))
            ) : (
              <Card variant="keyword">{document.keywords}</Card>
            )}
          </Flex>
          <Text>{document.description}</Text>
          <Flex
            sx={{
              flexWrap: 'wrap',
              width: '100%',
              mt: [1, 2],
              ml: [-2, -3],
              mr: [-1, -2],
            }}
          >
            <MetaItem caption="Data Type" data={document.datatype} />
            <MetaItem
              caption="Last Update"
              data={parseDate(document.lastupdate)}
            />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}

export default Document
const S = {}

S.MetaItem = styled(Box).attrs({})``
const Caption = styled(Text).attrs({
  fontWeight: 'bold',
  ml: [2, 3],
  mr: [1, 2],
  sx: {display: 'inline'},
})``
