import { useState } from 'react';
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';

export default function Searchbar({ onInput }) {
  const [query, setQuery] = useState('');

  const handleImageChange = event => {
    setQuery(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      return toast.error('Something wrong!');
    }
    onInput(query);
    setQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleImageChange}
        />
      </form>
    </header>
  );
}