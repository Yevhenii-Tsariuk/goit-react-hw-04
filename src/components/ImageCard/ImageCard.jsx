import css from "./ImageCard.module.css";

export default function ImageCard({ item, onImageClick }) {
  return (
    <div className={css.card} onClick={onImageClick}>
      
        <img className={css.image} src={item.urls.small} alt={item.alt_description} />
      
    </div>
  );
}
