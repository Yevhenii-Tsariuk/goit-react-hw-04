import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul className={css.list}>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ImageCard item={item.urls} onImageClick={() => onImageClick(item.urls.regular)}/>
          </li>
        );
      })}
    </ul>
  );
}
