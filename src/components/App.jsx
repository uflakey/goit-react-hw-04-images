import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import getImages from '../service/api';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import css from './App.module.css'
import { useEffect, useState } from 'react';


  export default function App() {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [btnShow, setBtnShow] = useState(false);
    const [empty, setEmpty] = useState(false);

 
useEffect(() => {
  const fetchData = async () => {
    if (!query) return;
    try{
      setLoading(true);
      const resp = await getImages(query,page);
      if (resp.hits.length === 0) {
        setEmpty(true)
      }
    setImages(prevState => [...prevState, ...resp.hits]);
    setBtnShow(page < Math.ceil(resp.totalHits / 12));
    }catch{
setError('something wrong(')
    }finally{
setLoading(false);
    }
  }
 fetchData();
}, [query,page]);



const onLoadMore = () => {
  setPage(prevState =>  prevState + 1)
  }


const handleInputName = query => {
   setEmpty(false);
     setError(null);
     setImages([]);
     setPage(1);
     setBtnShow(false);
  setQuery(query);
};




    return (
      <div>

<Searchbar onInput={handleInputName}/>
{images.length > 0 && <ImageGallery images={images} />}
{loading && <Loader />}
{error && <p  className={css.text}>❌ Something went wrong - {error}</p>}
{empty && <p  className={css.text}>Sorry. There are no images ... 😭</p>}

{btnShow  &&<Button onClick={onLoadMore} />}

<ToastContainer autoClose={2000}/>
      </div>
    )
  }


