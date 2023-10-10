import React from 'react'
import { PriceFormat } from '../global-components/PriceFormat'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import CategoryBar from './CategoryBar';
import ProductCard from './ProductCard';
function ProductIndexComponent() {
    const allProduct = useSelector((state) => state.product)
    const { products, loading } = allProduct
    if (loading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <>
            <div className='row m-2'>
                <CategoryBar />
                <ProductCard items={products} />
            </div>
        </>
    )
}

export default ProductIndexComponent

