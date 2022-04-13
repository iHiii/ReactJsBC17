import React, { memo } from "react";

function CardProduct(props) {
  console.log("render card");
  return (
    <div className="card text-left w-25 mt-2">
      <img className="card-img-top" src="https://picsum.photos/200" alt="..." />
      <div className="card-body">
        <h4 className="card-title text-danger">{props.renderLike()} like</h4>
      </div>
    </div>
  );
}

export default memo(CardProduct);
