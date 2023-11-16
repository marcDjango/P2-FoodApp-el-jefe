import React from "react";
import { useData } from "../../../services/Context";
import RefactorTitle from "../../utils";
import "./ImgPack.scss";

function ImgPack() {
  const { data } = useData();

  return (
    <div className="imgPack">
      <div className="imgLabel">{RefactorTitle(data.label)}</div>
      <img className="imgDetail" src={data.image} alt={data.label} />
      <div className="Line" />
    </div>
  );
}

export default ImgPack;
