import Modal from "react-modal";
import css from "./ImageModal.module.css";

export default function ImageModal({isOpen, onRequestClose, image}){
     return (
          <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={css.modal}
            overlayClassName={css.overlay}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
          >
            {image && <img src={image} alt="Selected" className={css.largeImage} />}
          </Modal>
        );
}