import './App.css';
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';
import Cart from './components/Cart/Cart';
import HeaderNavigation from './components/HeaderNavigation/HeaderNavigation';
import Products from './components/Products/Products';

function App() {
  return (
    <>
      <AnnouncementBar />
      <HeaderNavigation />
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Products />
          <Cart />
        </div>
      </main>
    </>
  );
}

export default App;
