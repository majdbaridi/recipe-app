import React, { use } from "react";
import { useState, useEffect } from "react";
export default function Home() {
  const [recipse, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.recipes);
      });
  }, []);
  return (
    <div className="main-content">
      <div className="mb-4">
        <h1>our recipes</h1>
        <p>welcome to home page</p>
      </div>
      <div className="row">
        {recipse.map((p, i) => (
          <div key={i} className="col-md-2 mb-4">
            <div className="card h-100">
              <img src={p.image_url} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-text">{p.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
