import React from "react";
import { useData } from "../../../services/Context";
import "./ImgPack.scss";

function ImgPack() {
  const { data } = useData();
  // console.log(data);

  return (
    <div className="imgPack">
      <img className="imgDetail" src={data.image} alt={data.label} />
      <div className="imgLabel">{data.label}</div>
    </div>
  );
}

export default ImgPack;
