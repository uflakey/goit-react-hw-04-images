import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import getImages from '../service/api';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import css from './App.module.css'

class App extends React.Component {
state = {
  query: '',
  images: [],
  page: 1,
  isLoading:false,
  error: null,
  isVisible:false,
  isEmpty: false,
}


 componentDidUpdate(prevProps, prevState){
    const {page, query} = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getPhotos(query, page);
    }
  }
  
getPhotos = async(query, page) => {
  if (!query) return
  this.setState({isLoading:true})
  
  try {
    const {hits, totalHits} = await getImages(query, page)
    if (hits.length === 0) {
      this.setState({isEmpty:true})
    }
    this.setState(prevState => ({images:[...prevState.images, ...hits], 
      isVisible:this.state.page < Math.ceil(totalHits / 12)}))
  } catch (error) {
    this.setState({error: "something wrong("})
  } finally{
    this.setState({isLoading:false})
  }
  }
  

onLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }


handleInputName = searchQuery => {
  this.setState({ query: searchQuery, page:1 , images:[], error:null, isEmpty:false});
};



  render(){
    const {images, isVisible, isEmpty, error, isLoading} = this.state;
    return (
      <div>

<Searchbar onInput={this.handleInputName}/>
{images.length > 0 && <ImageGallery images={images} />}
{isLoading && <Loader />}
{error && <p textAlign="center" className={css.text}>❌ Something went wrong - {error}</p>}
{isEmpty && <p textAlign="center" className={css.text}>Sorry. There are no images ... 😭</p>}

{isVisible && !isLoading && images.length > 0 && <Button onClick={this.onLoadMore}> 
{isLoading ? <Loader /> : 'load more'}
 </Button>}

<ToastContainer autoClose={2000}/>
      </div>
    )
  }
}


export default App;