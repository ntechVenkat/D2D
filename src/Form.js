import React, { useState } from "react";

const Form = (props) => {
  const [productData, updateProductData] = useState(props.formData);
  const [submitted, setSubmitted] = useState(false);

  let changeFormData = (e) => {
    const { name, value } = e.target;
    updateProductData({ ...productData, [name]: value });
  };

  return (
    <div>
      <label htmlFor="productName">Product Name</label>
      <br />
      <input
        type="text"
        id="productName"
        name="name"
        value={productData.name}
        onChange={changeFormData}
      />
      <br />
      {submitted && productData.name === "" && (
        <span className="text-danger">Product Name Required</span>
      )}
      <br />
      <button
        className="btn btn-danger m-2"
        onClick={() => {
          props.cancel();
        }}
      >
        Cancel
      </button>
      <button
        className="btn btn-primary m-2"
        onClick={() => {
          setSubmitted(true);
          if (!!productData.name) props.add(productData);
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Form;
