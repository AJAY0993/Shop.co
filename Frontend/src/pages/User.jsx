import Header from "../ui/Header";
import Footer from "../ui/Footer";
import NewsletterSubscriptionForm from "../ui/NewsletterSubscriptionForm";
import Container from "../ui/Container";
import UserInfo from "./../features/user/UserInfo";

function User() {
  return (
    <>
      <Header />
      <Container className="px-2">
        <UserInfo />
      </Container>
      <NewsletterSubscriptionForm />
      <Footer />
    </>
  );
}

export default User;
