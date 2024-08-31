import css from "./ImageCard.module.css";

export default function ImageCard({ item: { small }, onImageClick }) {
  return (
    <div className={css.card} onClick={onImageClick}>
      
        <img className={css.image} src={small} alt="" width="270" height="180"/>
      
    </div>
  );
}
