import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CartSlide, CategoriesSlide } from "@/_components/organisms";
import "./modal.scss";

type ModalState = {
  categories: boolean;
  cart: boolean;
};

type ModalType = keyof ModalState;

type ModalContext = {
  toggleModal: (modalType: ModalType) => void;
  modal: ModalState;
};

const initialState: ModalState = {
  cart: false,
  categories: false,
};

export const ModalContext = createContext<ModalContext>({
  toggleModal: () => {},
  modal: initialState,
});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(initialState);
  const pathname = usePathname();

  const toggleModal = useCallback(
    (modalType: ModalType) =>
      setModal((prev) => ({ ...initialState, [modalType]: !prev[modalType] })),
    [],
  );

  const closeModal = useCallback(() => setModal({ ...initialState }), []);

  const value = useMemo(() => ({ toggleModal, modal }), [toggleModal, modal]);

  useEffect(() => {
    closeModal();
  }, [pathname, closeModal]);

  return (
    <ModalContext.Provider value={value}>
      <div className="modals">
        <CartSlide isOpen={modal.cart} />
        <CategoriesSlide isOpen={modal.categories} />
        {(modal.cart || modal.categories) && (
          <div
            className="modals__backdrop position-fixed"
            onClick={closeModal}
          />
        )}
      </div>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
