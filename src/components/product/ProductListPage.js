import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProductByCatSlug } from '../../redux/action/product.action';
import ProductCard from './ProductCard';
import CategoryBar from './CategoryBar';

const ProductListPage = () => {
    const proByCatSlug = useSelector(state => state.product.productByCatSlug);
    const proByCatSlugLoading = useSelector(state => state.product);
    let [searchParams, setSearchParams] = useSearchParams();
    const params = searchParams.get("cname")
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductByCatSlug(params));
    }, [])
    if (Object.keys(proByCatSlug).length === 0) {
        return null;
    }
    if (proByCatSlugLoading.loading) {
        return <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    return (
        <>
            <ProductCard items={proByCatSlug} />
        </>
    )
}

export default ProductListPage