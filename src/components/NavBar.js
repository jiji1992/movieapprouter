import React, { useState } from "react";
import { Filter } from "./Filter";
import { Addmovie } from "./Addmovie";
import "./style.css";
import { InputGroup, FormControl, Image } from "react-bootstrap";
const NavBar = ({ title, handleChange, ratingChanged, handleAdd }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="conteneur">
      <Image
        src="http://www.cuevasandalucia.es/es/images/logos/netflix-logo.png"
        style={{ height: 50 }}
      />
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Movie"
            aria-label="Search Movie"
            aria-describedby="basic-addon2"
            onChange={handleChange}
            value={title}
          />
          <InputGroup.Append></InputGroup.Append>
        </InputGroup>
      </div>

      <Filter ratingChanged={ratingChanged} />
      <i
        className="fas fa-photo-video cred"
        onClick={() => setModalShow(true)}
      ></i>

      <Addmovie
        handleAdd={handleAdd}
        setModalShow={setModalShow}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default NavBar;
