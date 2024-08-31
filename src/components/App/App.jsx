import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal"
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadeMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

import { fetchPhotos } from "../../servises/unsplash-api";

import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";

import "./App.module.css";


export default function App() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);

  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (topic === "") {
      return;
    }

  async function getPhotos() {
    try {
      setLoading(true);
      setError(false);
      const newPhotos = await fetchPhotos(topic, page);
      setPhotos((prevState) => [...prevState, ...newPhotos]);
      setTotalPages(newPhotos.totalPages);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  getPhotos();
}, [page, topic]);

const handleSearch = (newTopic) => {
  setTopic(newTopic);
  setPage(1);
  setPhotos([]);
};

const handleLoadMore = () => {
  setPage(page + 1);
};

const openModal = (image) => {
  setSelectedImage(image);
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
  setSelectedImage(null);
};

  return (
    <div>
      <SearchBar onSearch={handleSearch} topic={topic}/>
      {photos.length > 0 && <ImageGallery items={photos} onImageClick={openModal}/>}
      {page >= totalPages && <b>END OF COLLECTION!!!!</b>}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {modalIsOpen && <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} image={selectedImage}/>}
      {photos.length > 0 && !loading && <LoadeMoreBtn onClick={handleLoadMore}/>}
      
    </div>
  );}


// F_ZlTxZXItMqdyPkbSBeCFXGZFvz6W7v-KobzwM2plM -  Access key from Unsplash
// tfKtO-MoOwyg5FletMwdy-6rEJ8fsmnfs67gXcNQ3hY - Secret key from Unsplash
// 646076 - Application ID





// useEffect(() => {
//   async function getPhotos() {
//     try {
//       setLoading(true);
//       setError(false);
//       const newPhotos = await fetchPhotos();
//       setPhotos(newPhotos);
//     } catch {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }
//   getPhotos();
// }, []);
