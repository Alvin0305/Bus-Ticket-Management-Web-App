import { Headphones, LogOut, ArrowLeftRight, BusFront } from "lucide-react";
import TopBar from "./components/TopBar";
import SearchArea from "./components/SearchArea";
import "./LandingPage.css";
import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function LandingPage() {
  const location = useLocation();
  const { user } = location.state || {};
  const helpRef = useRef(null);

  return (
    <div>
      <TopBar user={user} helpRef={helpRef}></TopBar>
      <SearchArea user={user}></SearchArea>
      <div className="landing-page-contents">
        <h1 className="landing-page-heading">BOOK BUS TICKET ONLINE</h1>
        <p className="landing-page-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          eius suscipit corrupti neque est fuga omnis exercitationem, quis, iste
          optio officiis vel soluta quae numquam tempore! Rem velit odio
          consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Maiores, laboriosam exercitationem? Dolor esse sunt corporis eius
          impedit voluptatem magnam quam, illum voluptatibus ab maxime sapiente
          quae inventore, accusamus dignissimos itaque. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Voluptate eius suscipit corrupti
          neque est fuga omnis exercitationem, quis, iste optio officiis vel
          soluta quae numquam tempore! Rem velit odio consectetur. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Maiores, laboriosam
          exercitationem? Dolor esse sunt corporis eius impedit voluptatem
          magnam quam, illum voluptatibus ab maxime sapiente quae inventore,
          accusamus dignissimos itaque. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Voluptate eius suscipit corrupti neque est fuga
          omnis exercitationem, quis, iste optio officiis vel soluta quae
          numquam tempore! Rem velit odio consectetur. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Maiores, laboriosam exercitationem?
          Dolor esse sunt corporis eius impedit voluptatem magnam quam, illum
          voluptatibus ab maxime sapiente quae inventore, accusamus dignissimos
          itaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptate eius suscipit corrupti neque est fuga omnis exercitationem,
          quis, iste optio officiis vel soluta quae numquam tempore! Rem velit
          odio consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Maiores, laboriosam exercitationem? Dolor esse sunt corporis
          eius impedit voluptatem magnam quam, illum voluptatibus ab maxime
          sapiente quae inventore, accusamus dignissimos itaque.
        </p>
        <h1 className="landing-page-heading">Bus Booking Bus Deals on BTMS</h1>
        <p className="landing-page-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          eius suscipit corrupti neque est fuga omnis exercitationem, quis, iste
          optio officiis vel soluta quae numquam tempore! Rem velit odio
          consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Maiores, laboriosam exercitationem? Dolor esse sunt corporis eius
          impedit voluptatem magnam quam, illum voluptatibus ab maxime sapiente
          quae inventore, accusamus dignissimos itaque. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Voluptate eius suscipit corrupti
          neque est fuga omnis exercitationem, quis, iste optio officiis vel
          soluta quae numquam tempore! Rem velit odio consectetur. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Maiores, laboriosam
          exercitationem? Dolor esse sunt corporis eius impedit voluptatem
          magnam quam, illum voluptatibus ab maxime sapiente quae inventore,
          accusamus dignissimos itaque.
        </p>
        <a href="">
          <h2 className="landing-page-faq-link">FAQs</h2>
        </a>
      </div>
      <div className="landing-page-bottom-div" ref={helpRef}>
        <p className="landing-page-bottom-part">
          Ⓒ 2025 Redbus India Pvt Ltd. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
