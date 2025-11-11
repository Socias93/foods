interface Props {
  isFavored: boolean;
  onFavored(): void;
}

function Favorite({ isFavored, onFavored }: Props) {
  let classes = "clickable fa-star fa-";
  classes += isFavored ? "solid" : "regular";

  return <i onClick={onFavored} className={classes}></i>;
}

export default Favorite;
