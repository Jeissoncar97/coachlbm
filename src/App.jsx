import Header from "./components/Header"
import About from "./components/About"
import Offer from "./components/Offer"
import Plans from "./components/Plans"
import FAQs from "./components/Faqs"
import PersonalizedReport from '../src/components/PersonalizedReports'
import './index.css'

function App() {

  return (
    <div className="root">
      <div className="responsive">
        <p>
          Estamos trabajando en el modo tablet y pantallas mas grandes, por ahora te invito a ver la pagina desde tu celular
        </p>
      </div>
      <Header />
      <About />
      <Offer />
      <Plans />
      <PersonalizedReport />
      <FAQs />
    </div>
  )
}

export default App
