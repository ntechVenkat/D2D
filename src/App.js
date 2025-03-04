import React, { useEffect, useState } from "react";
import { getData, deleteData, postData, putData } from "./api.js";
import Table from "./Table.js";
import Form from "./Form";

const App = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cost: "",
  });

  useEffect(() => {
    getProducts();
  }, []);

  let getProducts = async () => {
    let res = await getData();
    setProducts(res.data);
    // console.log(res.data);
  };

  let deleteProduct = async (id) => {
    await deleteData(id);
    getProducts();
  };

  let addProduct = async (product) => {
    let data = {
      name: product.name,
      cost: product.cost,
    };
    if (editStatus) {
      await putData(product.id, data);
      getProducts();
      setForm(false);
    } else {
      await postData(data);
      getProducts();
      setForm(false);
    }
  };

  let editProduct = (data) => {
    setForm(true);
    setFormData(data);
    setEditStatus(true);
  };

  let cancelForm = () => {
    setForm(false);
  };

  return (
    <div>
      <center>
        <div className="container d-flex flex-row justify-content-center mt-2">
          <h2 className="col-3">API Data in Table</h2>
          <button
            className="btn btn-primary col-1"
            onClick={() => {
              setForm(true);
              setFormData({ name: "", cost: "" });
            }}
          >
            Add
          </button>
        </div>
        <Table products={products} delete={deleteProduct} edit={editProduct} />
        {form && (
          <Form cancel={cancelForm} formData={formData} add={addProduct} />
        )}
      </center>
    </div>
  );
};

export default App;
