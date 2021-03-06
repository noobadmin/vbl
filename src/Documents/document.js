import React from 'react'

import {Link as RouterLink} from 'react-router-dom'
import styled from 'styled-components'

import Spinner from '../App/spinner'
import {Box, Flex, Heading, Link, Image, Text} from '../Primitives'

const MetaItem = ({title, data}) => (
  <S.MetaItem>
    <S.Text>{title}</S.Text>
    <S.Text>{data}</S.Text>
  </S.MetaItem>
)

const Member = ({data}) => (
  <S.Tag>
    {data.person.fullName.substring(data.person.fullName.lastIndexOf(' ') + 1) +
      ' / ' +
      data.affiliation.name}
  </S.Tag>
)
const Members = ({members, className}) => (
  <Flex className={className}>
    {members.map(member => (
      <Member key={member.id} data={member} />
    ))}
  </Flex>
)

const HeadingLink = ({title, pid}) => (
  <Link as={RouterLink} to={'/documents/' + pid}>
    <Heading>{title.substring(0, 90)}</Heading>
  </Link>
)

const SummaryText = ({summary}) => {
  return <Text>{summary.substring(0, 350)}...</Text>
}

const CitationLink = ({citation, doi, className}) => (
  <Link className={className} href={'http://doi.org/' + doi}>
    {citation}
  </Link>
)

const Keywords = ({keywords, className}) => (
  <Flex className={className}>
    {keywords.map((keyword, index) => (
      <S.Tag key={index}>{keyword}</S.Tag>
    ))}
  </Flex>
)

const Document = ({document, index}) => {
  return !document ? (
    <Spinner />
  ) : (
    <S.Layout>
      <S.Main
        sx={{
          backgroundImage: `url('/images/${document.image}')`,
          alignItems: 'flex-end',
          height: '40rem',
        }}
      >
        <HeadingLink pid={index} title={document.title} />
        {/* <S.Keywords keywords={document.keywords} /> */}
        {/* <SummaryText summary={document.summary} /> */}
        {/* <S.MetaList></S.MetaList> */}
      </S.Main>
    </S.Layout>
  )
}
export default Document

const S = {}
S.Keywords = styled(Keywords)``
S.Members = styled(Members)``
S.CitationLink = styled(CitationLink)``
S.Layout = styled(Box).attrs({
  sx: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    bg: 'middleground',
    display: 'flex',
    mb: '2rem',
  },
})`
  ${S.Members}, ${S.CitationLink} {
    display: none;
  }
`
S.Main = styled(Flex).attrs({
  p: 3,
})``
S.MetaList = styled(Box).attrs({
  sx: {
    display: 'flex',
    flexDirection: 'row',
    mt: 1,
  },
})``
S.MetaItem = styled(Box).attrs({
  bg: 'middleground',
  justifyContent: 'space-evenly',
  mr: 1,
})``
S.Text = styled(Text).attrs({
  display: 'inline-block',
  pr: 1,
})``
S.Tag = styled(Box).attrs({
  bg: 'foreground',
  p: 1,
  m: 1,
  marginLeft: 0,
})``
S.Image = styled(Image).attrs({
  width: '100%',
})``
