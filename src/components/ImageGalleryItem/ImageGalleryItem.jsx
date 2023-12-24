import { useState } from 'react';
import { MyModal } from '../Modal/Modal';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, tags, img }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState.showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <li onClick={toggleModal} className={css.item}>
        <img className={css.img} src={src} alt={tags} />
      </li>

      <MyModal
        modalIsOpen={showModal}
        closeModal={closeModal}
        src={img}
        tags={tags}
      />
    </>
  );
};
export default ImageGalleryItem;