import { Headphones, LogOut, ArrowLeftRight, BusFront } from "lucide-react";
import TopBar from "./components/TopBar";
import SearchArea from "./components/SearchArea";
import "./LandingPage.css";

function LandingPage() {
  const userData = {
    name: "Alvin A S",
    gender: "M",
    email: "alvinanildas@gmail.com",
    password: "abcd1234",
    userID: "alvin07",
    phone: "8086290149",
    DOB: new Date().toISOString().split("T")[0],
  };

  return (
    <div>
      <TopBar user={userData}></TopBar>
      <SearchArea></SearchArea>
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
      <div className="landing-page-bottom-div">
        <p className="landing-page-bottom-part">
          Ⓒ 2025 Redbus India Pvt Ltd. All rights reserved
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
