import Container from "../ui/Container";
import OrderMain from "../features/Order/OrderMain";
import AppLayout from "../ui/AppLayout";

function Order() {
  console.log("order");
  return (
    <AppLayout>
      <Container className="px-2">
        <OrderMain />
      </Container>
    </AppLayout>
  );
}

export default Order;
