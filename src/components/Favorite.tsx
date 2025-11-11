interface Props {
  isFavored: boolean;
  onFavored(): void;
}

function Favorite({ isFavored, onFavored }: Props) {
  let classes = "clickable fa-star fa-";
  classes += isFavored ? "solid" : "regular";

  return (
    <td>
      <i onClick={onFavored} className={classes}></i>
    </td>
  );
}

export default Favorite;
