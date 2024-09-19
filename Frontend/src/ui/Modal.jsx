import { useState, useContext, createContext, cloneElement } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

const ModalContext = createContext();

function Modal({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <ModalContext.Provider value={{ open, close, openId }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, id }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(id) });
}

function Window({ children, id }) {
  const { openId, close } = useContext(ModalContext);
  if (openId !== id) return null;
  return (
    <Overlay>
      <button
        className=" absolute right-2 top-2 z-10 aspect-square w-8 rounded-full bg-stone-950 text-lg transition-all active:scale-75 md:right-4 md:top-4"
        onClick={close}
      >
        <IoMdClose
          className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-stone-50 "
          fontWeight={600}
          fontSize={"1.75rem"}
        />
      </button>
      <div className="relative flex min-h-screen w-full items-center justify-center">
        {children}
      </div>
    </Overlay>
  );
}

Modal.Window = Window;
Modal.Open = Open;

function Overlay({ children }) {
  return createPortal(
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[100000] min-w-80 bg-stone-800 bg-opacity-45">
      {children}
    </div>,
    document.body,
  );
}

export default Modal;
