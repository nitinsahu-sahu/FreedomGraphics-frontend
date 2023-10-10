import React from 'react'
import { PriceFormat } from '../global-components/PriceFormat'
import { useSearchParams } from 'react-router-dom';

const OrderItemLeftCom = (props) => {
    let [searchParams, setSearchParams] = useSearchParams();
    const p_id = searchParams.get("productId")
    const { allOrderItems } = props
    return (
        allOrderItems.map((data) =>
            <>
                <div className='col-md-2 text-center'>
                    <img src={`http://localhost:8000/public/${data.productId.featuredImg}`} width={80} height={100} alt="Blue Jeans Jacket" />
                </div>
                <div className='col-md-3 fw-bold'>
                    <span>{data.productId.name}</span><br />
                    <span >
                        <PriceFormat price={data.productId.selling_price} />
                        <p>Quantity : {data.purchasedQty}</p>
                    </span>
                </div>
            </>
        )

    )
}

export default OrderItemLeftCom