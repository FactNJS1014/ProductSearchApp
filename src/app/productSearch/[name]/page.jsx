"use client"
import React,{useState,UseEffect} from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

function ProductSearch() {

    const params = useParams()

    const [prodData, setProductData] = useState([])
    const [loading, setLoading] = useState(false)
  return (
    <div>
      
    </div>
  )
}

export default ProductSearch
