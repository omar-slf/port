import React from "react";
import { useParams } from "react-router";
import { PortfolioData } from "../utils/PortfolioData";
import "./SinglePort.scss";

export default function SinglePort() {
  const { slug } = useParams();

  console.log(slug);

  return (
    <div>
      {/* <p>{slug}</p> */}
      {PortfolioData.filter((f) => f.slug === slug).map((v, i) => (
        <>
          <div>
            <div class="containerr">
              <div
                class="containerr__image"
                style={{ backgroundImage: `url(${v.image})` }}
              >
                <div class="containerr__info containerr__author">
                  Link for the{" "}
                  <a class="link" href={v.url} target="_blank">
                    Demo
                  </a>
                </div>
                <div class="containerr__info containerr__location">
                  Geneva Lake Switzerland{" "}
                </div>
              </div>
            </div>
            <p style={{position: ''}}>{v.url}</p>
          </div>
        </>
      ))}
    </div>
  );
}
