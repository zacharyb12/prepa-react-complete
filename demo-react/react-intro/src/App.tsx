import './App.css'
import { BrowserRouter as Router , Route , Routes }  from 'react-router-dom'
import Homepage from './pages/homepage.tsx'
import Navbar from './components/navbar.tsx'
import IntroComposant from './pages/1.Bases/A.intro-composant.tsx'
import ConditionsCollections from './pages/1.Bases/B.conditions-collections.tsx'
import ExoCreationComposant from './pages/4.Exo/1.exo-creation-composant.tsx'
import ExoCreationListe from './pages/4.Exo/2.exo-creation-liste.tsx'
import DemoEvenements from './pages/1.Bases/C.evenements.tsx'
import HooksStateDemo from './pages/1.Bases/D.hooks-state.tsx'
import Counter from './pages/4.Exo/3.compteur.tsx'
import FormulairesDemo from './pages/1.Bases/E.formulaires.tsx'
import Calculatrice from './pages/4.Exo/4.calculatrice.tsx'
import Communication from './pages/1.Bases/F.communication.tsx'
import TodoComponent from './pages/4.Exo/5.todo-list.tsx'
import HooksEffect from './pages/1.Bases/G.hooks-effect.tsx'
import ComponentAjax from './pages/1.Bases/H.Ajax.tsx'
import HooksPersoPage from './pages/1.Bases/I.hooks-perso.tsx'
import LoginPage from './pages/1.Bases/J.loginPage.tsx'

function App() {

  return ( 
    <Router>
      <Navbar />
      <Routes>
        {/* pages Bases */}
        <Route path="/" element={<Homepage />} />
        <Route path="/intro-composant" element={<IntroComposant />} />
        <Route path="/conditions-collections" element={<ConditionsCollections />} />
        <Route path="/demo-evenements" element={<DemoEvenements />} />
        <Route path="/demo-hooks-state" element={<HooksStateDemo />} />
        <Route path="/demo-formulaires" element={<FormulairesDemo />} />
        <Route path="/demo-communication" element={<Communication />} />
        <Route path="/demo-hooks-effect" element={<HooksEffect />} />
        <Route path="/demo-ajax" element={<ComponentAjax />} />
        <Route path="/demo-hooks-perso" element={<HooksPersoPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* pages Exo */}
        <Route path="/exo-creation-composant" element={<ExoCreationComposant name="John" age={30} />} />
        <Route path="/exo-creation-liste" element={<ExoCreationListe />} />
        <Route path="/exo-compteur" element={<Counter />} />
        <Route path="/exo-calculatrice" element={<Calculatrice />} />
        <Route path="/exo-todo-list" element={<TodoComponent />} />
      </Routes>
    </Router>
  )
}

export default App