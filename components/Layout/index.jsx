import Header from "./TheHeader";
import Footer from "./TheFooter";

function Layout({ children }) {
  return (
    <>
      <div className="page">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
