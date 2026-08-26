import Nav from './nav';
import Footer from './footer';
import ConsultationWidget from './consultation-widget';

export default function PageShell({ children }) {
  return (
    <>
      <Nav />
      <main className="bg-[#000000] text-white min-h-screen">{children}</main>
      <ConsultationWidget />
      <Footer />
    </>
  );
}