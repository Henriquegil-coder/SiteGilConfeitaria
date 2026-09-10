import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {
  return (
    <div className="confeitaria-site-wrapper">
      <Header />

      <main className="confeitaria-main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}
