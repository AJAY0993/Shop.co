import Footer from "./Footer";
import Header from "./Header";
import NewsletterSubscriptionForm from "./NewsletterSubscriptionForm";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <NewsletterSubscriptionForm />
      <Footer />
    </>
  );
}

export default AppLayout;
