import React from 'react';
import { MyModal } from '../Modal/Modal';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { src, tags, img } = this.props;
    return (
      <>
        <li onClick={this.toggleModal} className={css.item}>
          <img className={css.img} src={src} alt={tags} />
        </li>

        <MyModal
          modalIsOpen={this.state.showModal}
          closeModal={this.closeModal}
          src={img}
          tags={tags}
        />
      </>
    );
  }
}
export default ImageGalleryItem;