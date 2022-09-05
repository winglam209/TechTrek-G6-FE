import React from "react";
import { useParams } from "react-router-dom";

import styles from "../styles/pages/GFModClassPage.module.css";

const GFModClassPage = () => {
  const { moduleCode, classIndex } = useParams();

  console.log(moduleCode, classIndex);
  return <div>GFModClassPage</div>;
};

export default GFModClassPage;
