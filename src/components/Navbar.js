import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const { setTheme } = props;
  let { theme } = props;
  const navigate = useNavigate();
  const [c, setc] = useState([]);
  const [a, seta] = useState([]);
  let tc = [];
  let ta = [];

  const GoToCategory = (category) => {
    navigate("/filtered", { state: { category: category, area: "" } });
  };

  const GoToArea = (area) => {
    navigate("/filtered", { state: { category: "", area: area } }); // must use "button" to redirect
  };

  const fetchAll = async () => {
    const category = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    const cjson = await category.json();
    tc.push(cjson.meals);

    const area = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const ajson = await area.json();
    ta.push(ajson.meals);
    setc(tc[0]);
    seta(ta[0]);
  };

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line
  },[]);

  return (
    <div id="navbar-top-sanket">
      <nav className={`navbar navbar-expand-lg bg-${theme} navbar-${theme}`}>
        <div className="container-fluid container">
          <Link className="navbar-brand" to="/">
            <img
              className="mx-2 mb-1"
              src="https://static.vecteezy.com/system/resources/previews/008/709/513/original/chef-restaurant-logo-illustrations-template-free-vector.jpg"
              alt="Logo"
              height={30}
              width={30}
              style={{ borderRadius: "20px" }}
            ></img>
            Mr.Chef
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </Link>
                <ul id="category" className="dropdown-menu">
                  {c.map((c) => (
                    <li key={c.strCategory}>
                      <button
                        className="dropdown-item"
                        onClick={() => GoToCategory(c.strCategory)}
                      >
                        {c.strCategory}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </Link>
                <ul className="dropdown-menu">
                  {a.map((a) => (
                    <li key={a.strArea}>
                      <button
                        className="dropdown-item"
                        onClick={() => GoToArea(a.strArea)}
                      >
                        {a.strArea}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={setTheme}
                />
                <label
                  className={`form-check-label me-5 text-${
                    theme === "dark" ? "light" : "dark"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
