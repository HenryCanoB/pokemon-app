import 'bootstrap/dist/css/bootstrap.min.css'

import {PokemonApp} from './PokemonApp'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <PokemonApp/>
  </StrictMode>,
)
