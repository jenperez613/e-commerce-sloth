import React from 'react'
import styled from 'styled-components'
import { GrGremlin } from 'react-icons/gr'
import { GiFrogPrince } from 'react-icons/gi'

const Logo = () => {
  return (
    <Wrapper>
      <span>
        <GiFrogPrince /> Frogge
      </span>
      Shop
    </Wrapper>
  )
}

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-grey-1);
  span {
    color: var(--clr-primary-5);
  }
`

export default Logo
