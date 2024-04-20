import Button from "./Button";
import Subtitle from "./Subtitle";

function NoMatchFound({
  message = "Not matching result found",
  btnText,
  to = "/shop",
}) {
  return (
    <div className="mx-auto w-fit">
      <img
        className="my-8 aspect-square max-w-[20rem] text-stone-800"
        src="/no-data.svg"
        alt="no data"
      />
      <Subtitle>{message} </Subtitle>
      {btnText && (
        <Button type="primary" to={to} size="small">
          {btnText}
        </Button>
      )}
    </div>
  );
}

export default NoMatchFound;
