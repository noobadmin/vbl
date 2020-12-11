import React, {useState, useEffect} from 'react'

import {Input} from '@rebass/forms'
import throttle from 'lodash.throttle'
import styled from 'styled-components'

import {useSearchStore} from '../App/stores'
import documents from '../data.json'
import {Flex, Box, Card} from '../Primitives'

const Search = () => {
  const [vis, setVis] = useState()
  const [dataTypes, setDataTypes] = useState()
  const [title, setTitle] = useState()
  const filterFn = (filter, data, filterField) =>
    filter
      ? data.filter(e =>
          Array.isArray(e[filterField])
            ? e[filterField].includes(filter)
            : e[filterField] === filter
        )
      : data
  const filterByTitle = (string, data) =>
    string
      ? data.filter(e => e.title.toLowerCase().includes(string.toLowerCase()))
      : data
  const flatten = arr =>
    arr
      .reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
        []
      )
      .reduce((acc, val) => (!acc.includes(val) ? acc.concat(val) : acc), [])

  const pre = filterByTitle(title, documents)
  const vistypes = flatten(
    filterFn(dataTypes, pre, 'datatype').map(item => item.vistype)
  )

  const datatypes = flatten(
    filterFn(vis, pre, 'vistype').map(item => item.datatype)
  )

  const BoolFilter = ({name, fn, highlighted}) => (
    <S.Card
      highlighted={highlighted}
      variant="keyword"
      onClick={() => fn(name)}
    >
      {name}
    </S.Card>
  )
  const updateWithFilters = useSearchStore(state => state.setData)
  useEffect(() => {
    const filteredByTitles = filterByTitle(title, documents)
    const filteredByDatatypes = filterFn(
      dataTypes,
      filteredByTitles,
      'datatype'
    )
    const filteredByVistypes = filterFn(vis, filteredByDatatypes, 'vistype')
    updateWithFilters(filteredByVistypes)
  }, [dataTypes, vis, title, updateWithFilters])

  const clickVis = filter => (filter === vis ? setVis(false) : setVis(filter))
  const clickDataType = filter =>
    filter === dataTypes ? setDataTypes(false) : setDataTypes(filter)

  const typing = e => {
    const {value} = e.target
    const throttled = throttle(value => setTitle(value), 500)
    throttled(value)
  }
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        gap: [2, 3, 3, 4],
      }}
    >
      <Card as="form" onSubmit={e => e.preventDefault()}>
        <Input onChange={typing} placeholder="Search in Titles" />
      </Card>
      <Card>
        Data Types:
        {datatypes.map((filter, index) => (
          <BoolFilter
            name={filter}
            fn={() => clickDataType(filter)}
            key={index}
            highlighted={filter === dataTypes ? true : false}
          />
        ))}
      </Card>
      <Card>
        Visualisation Types:
        {vistypes.map((filter, index) => (
          <BoolFilter
            highlighted={filter === vis ? true : false}
            name={filter}
            fn={() => clickVis(filter)}
            key={index}
          />
        ))}
      </Card>
    </Flex>
  )
}

export default Search

const S = {}
S.Card = styled(Card)`
  background: ${props =>
    props.highlighted
      ? props.theme.colors.background
      : props.theme.colors.foreground};
`
