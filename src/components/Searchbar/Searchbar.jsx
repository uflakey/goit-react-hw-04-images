import React from 'react';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

class Searchbar extends React.Component {
  state = {
    searchQuery: '',
  };

  handleImageChange = event => {
    this.setState({ searchQuery: event.currentTarget.value });
  };

  handleSubmit = event => {
    const { searchQuery } = this.state;
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return toast.error('Something wrong!');
    }

    this.props.onInput(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.handleImageChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;