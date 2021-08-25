import React from 'react'

import { Input, Button, Paragraph } from 'zebraui'
import 'zebraui/dist/index.css'


const App = () => {
  return (
    <>
      <br /> <br /> <br />
      <Button text={'Click'} onClick={() => alert('merhaba')} />
      <br />
      <Paragraph text={'dsadkskdfdsf fdkfgdsgfkdlgdlfg dfgdgsdgdfgsd'} />
      <br />
      <br />
      <Input type='text' />
    </>
  )
}

export default App
