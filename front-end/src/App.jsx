import Menu from './pages/Menu/menu';
import ErrorBoundary from './components/Error/errorBoundary';
const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Menu />
      </ErrorBoundary>
    </>
  );
};
export default App;
