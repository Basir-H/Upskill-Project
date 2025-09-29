import './App.css'
import { airbnb, facebook } from './assets/images'
import { styles, layout} from './style'
import { 

  Billing,
  Business,
  CardDeal,
  CTA,
  Clients,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials, 

} from './components'

function App() {
  

  return (
    <>
      <div className='bg-primary w-full overflow-hidden text-white'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
