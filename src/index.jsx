import { render }  from 'react-dom'
import { Addition } from './components/Typography/Addition'

export const App = () => {
  return (
    <div>
      <h1 children='Zhopa'/>
    </div>
  )
}

render(<App/>, document.querySelector('#root'))