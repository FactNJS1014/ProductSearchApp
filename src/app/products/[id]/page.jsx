"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function ProductInfo() {
  const params = useParams();
  console.log(params);

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/${params.id}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchProduct()
  }, []);
  return (
    <div className="p-24">
      <Link href="/" className="bg-blue-600 text-white p-3 rounded-md">
        Back to Home
      </Link>
      <div className="flex justify-center items-center mt-10 text-center">
        <div className="shadow-md p-20 rounded-md bg-slate-100">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <h3 className="text-2xl font-bold">{product.title}</h3>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={300}
                height={300}
            />

            <p className="mt-5 font-bold text-xl">Price:&nbsp;<span className="text-green-700 bg-slate-300 p-1 rounded-sm">{product.price} $</span></p>
            <p className="mt-5 font-bold text-xl">Rating:&nbsp;<span className="text-yellow-500 bg-slate-300 p-1 rounded-sm">{product.rating}</span> </p>
            <p className="mt-5 font-bold text-xl">Stock:&nbsp;<span className="text-red-500 bg-slate-300 p-1 rounded-sm">{product.stock}</span> </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
