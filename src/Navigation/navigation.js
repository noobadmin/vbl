import React from 'react'

import {Link as RouterLink} from 'react-router-dom'
import styled from 'styled-components'

import {Flex, Link, Box} from '../Primitives'
import ToggleThemeButton from '../Theme/toggleThemeButton'

const Navigation = () => {
  return (
    <S.Flex>
      <Link as={RouterLink} variant="nav" to="/">
        Virtual Beamline
      </Link>
      <Box mx="auto" />
      {/* <Link as={RouterLink} variant="nav" to="/dashboard"> */}
      {/*   Dashboard */}
      {/* </Link> */}
      <ToggleThemeButton />
    </S.Flex>
  )
}

export default Navigation

const S = {}

S.Flex = styled(Flex).attrs({
  sx: {
    bg: 'middleground',
    height: 'nav',
    position: 'sticky',
    top: 0,
    left: 0,
  },
})``

S.SidebarControlls = styled(Link).attrs({
  variant: 'nav',
})`
  display: none;
  @media (max-width: ${({theme}) => theme.breakpoints[1]}) {
    display: block;
  }
`
