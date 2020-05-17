import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import { useParams } from "react-router-dom";
import { firebaseApp } from "../../firebase";


export default function Product() {

  const [product, setProduct] = useState({});
  const parametro = useParams().id;


  useEffect(() => {
    var ref = firebaseApp.database().ref().child('products');

    ref.orderByChild("id").equalTo(parametro).on("value", async function (snapshot) {
      console.log(snapshot.toJSON());
      await setProduct(snapshot.toJSON()[parametro]);
    });

  }, []);

  useEffect(() => {
    if (product) {
      console.log(product, "aklsjdlajsdkl");
    }
  }, [product])






  return (
    <div className="product">
      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 600 }}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.brand}</p>
        </Card>
      </div>
    </div>
  )

}
