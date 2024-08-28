import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  padding: 8px 16px;
  border: 2px solid ${cores.branco};
  border-radius: 8px;
  color: ${cores.branco};
  background-color: transparent;
  font-weight: 16px;
  font-weight: bold;
`

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border: 2px solid ${cores.branco};
  border-radius: 8px;
  color: ${cores.branco};
  background-color: transparent;
  font-weight: 16px;
  font-weight: bold;
  text-decoration: none;
`
