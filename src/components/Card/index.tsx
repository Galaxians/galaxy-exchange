import styled from 'styled-components'

const Card = styled.div<any>`
  width: 100%;
  border-radius: 4px;
  padding: 1.25rem;
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
`
export default Card

export const LightCard = styled(Card)`
  border: 1px solid rgba(105, 98, 114, 0.33);
  background: rgba(105, 98, 114, 0.33) 0% 0% no-repeat padding-box;
`

export const GreyCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.tertiary};
`
