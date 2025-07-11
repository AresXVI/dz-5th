import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';


const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;