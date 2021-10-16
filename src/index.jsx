import { render } from 'react-dom'
import { Arrivals } from './entities/Arrivals'
import { Bestsellers } from './entities/Bestsellers'
import { Sales } from './entities/Sales'
import {Header} from './entities/Header'
import {Footer} from './entities/Footer'

export const App = () => {
  return (
    <main>
      <Header />
      <Arrivals />
      <Bestsellers />
      <Sales />
      <Footer />
    </main>
  )
}

render(<App />, document.querySelector('#root'))