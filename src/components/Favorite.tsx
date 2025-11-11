import { useState } from "react";

function Favorite() {
  const [isFavored, setFavored] = useState(false);

  let classes = "clickable fa-star fa-";
  classes += isFavored ? "solid" : "regular";

  return (
    <td>
      <i onClick={() => setFavored(!isFavored)} className={classes}></i>
    </td>
  );
}

export default Favorite;
