import React from "react";
import { useParams } from "react-router";
import { PortfolioData } from "../utils/PortfolioData";
import './S'

export default function SinglePort() {
  const { slug } = useParams();

  console.log(slug);

  return (
    <div>
      {/* <p>{slug}</p> */}
      {PortfolioData.filter((f) => f.slug === slug).map((v, i) =>(
          <>
          <p>{v.title}</p>
          <img src={v.image} />
          </>
        )
      )}
    </div>
  );
}
