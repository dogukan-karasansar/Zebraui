import React from 'react'

import { Input, Button } from 'zebraui'
import 'zebraui/dist/index.css'

const App = () => {
  return (
    <>
      <br /> <br /> <br />
      <Button text={'Click'} onClick={() => alert('merhaba')} />
      <br />
      <br />
      <br />
      <Input type='text' />
    </>
  )
}

export default App
