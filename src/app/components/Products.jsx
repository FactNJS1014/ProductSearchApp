"use client"

import React ,{useState,useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Products() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    console.log(product)
    useEffect(()=>{
        setLoading(true)
        const fetchProduct = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products')
                const data = await res.json()
                // console.log(data.products)
                setProduct(data.products)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        fetchProduct()
    },[])
  return (
    <div className='container text-center mx-auto'>
      {loading ?(
        <p>Loading...</p>
      ):(
        <div className='grid grid-cols-5 mt-3'>
            {product.map((item,index) => (
              <Link key={item.title} href={`/products/[id]`} as={`/products/${index + 1}`}>
                <div key={index} className='flex justify-center items-center shadow-md transition cursor-pointer rounded-md m-3'>
                    <div>
                        <h3>{item.title}</h3>
                        <Image src={item.thumbnail} width={200} height={200} alt={item.title} />
                    </div>
                </div>
              </Link>
            ))}
        </div>
      )
    }
    </div>
  )
}

export default Products
