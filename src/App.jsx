import AppWeather from './components/AppWeather'
import { WeatherProvider } from './context/WeatherProvider'

 function App() { 

  return (
    <WeatherProvider > 
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppWeather/>
      <footer>
        <h2>Desarrollado por Ani Luz Tejeda</h2>
      </footer>
    </WeatherProvider>
  )
}

export default App
