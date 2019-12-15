import styled from 'styled-components'

const Scroll = styled.div`
  grid-column: 1 / 4;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  background: #111;
  padding: 2rem;
`

const Image = styled.img`
  display: inline-block;
  width: calc(300px + (450 - 300) * ((100vw - 300px) / (1600 - 300)));
  height: auto;
  padding: 16px;
`

export { Scroll, Image }
