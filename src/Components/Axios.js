import React, { useEffect } from "react";
import axios from "axios";

export const Axios = () => {
  let url = axios.create({
    baseURL: "https://fakestoreapi.com",
  });
  useEffect(() => {
    getProducts();
  });

  async function getProducts() {
    let res = await url.get("/products");
    console.log(res);
    console.log(res.data);
  }

  //   async function getProducts() {
  //     let res = await url.post("/products", {
  //       category: "Clothing",
  //       title: "Pants",
  //       price: 10000,
  //     });
  //   console.log(res.status);
  //     console.log(res);
  //     console.log(res.data);
  //   }

  //   async function getProducts() {
  //     let res = await url.put("/products/2", {
  //       category: "Watches",
  //     });
  //     console.log(res.status);
  //     console.log(res);
  //     console.log(res.data);
  //   }

  //   async function getProducts() {
  //     let res = await url.delete("/products/21");
  //     console.log(res.status);
  //     console.log(res);
  //     console.log(res.data);
  //   }

  return (
    <div>
      <h1>Axios</h1>
    </div>
  );
};
