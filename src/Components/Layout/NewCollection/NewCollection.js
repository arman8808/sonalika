import React from "react";
import "./NewCollection.css";
import ProductCard from "../../Cards/ProductCard/ProductCard";
function NewCollection() {
  return (
    <div className="newcollection">
      <div className="newcollection_heading">
        <h3>NEW COLLECTION</h3>
      </div>
      <div className="newcollection_card">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default NewCollection;
