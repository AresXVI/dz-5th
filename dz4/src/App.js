import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CardList from './components/CardList';

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <CardList/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
