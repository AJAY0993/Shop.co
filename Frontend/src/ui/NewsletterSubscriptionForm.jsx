import Button from "./Button";
import Title from "./Title";
function NewsletterSubscriptionForm() {
  return (
    <div className="my-4 px-4">
      <div className="m-auto  flex max-w-[45rem] flex-wrap justify-center gap-4 rounded-xl bg-neutral-950 p-4">
        <div className="max-w-80 text-neutral-50">
          <Title>stay upto date about our latest offers</Title>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <input
            className="rounded-full border-0  bg-neutral-50 px-4 py-2 outline-0 placeholder:capitalize placeholder:text-neutral-700"
            placeholder="enter your email address"
          ></input>
          <Button type="secondary">
            <span className="text-neutral-50">Subscribe to Newsletter</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewsletterSubscriptionForm;
