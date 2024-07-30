import React from 'react';
import ItemComponents from "../../BlockComponents/ItemComponent/ItemComponents.jsx";

function ProductList({products}) {
    return (
        <>
            {
                products.map((product, index) => (
                    <ItemComponents
                        {...product}
                        image={product.images.photo}
                        photo2x={product.images.photo2x}
                        description={product.model}
                        surface={product.template}
                        size={product.quantity}
                        color={product.model}
                        key={index}
                        href={`/product/${product.slug}`}
                        name={product.name}
                        price={product.price}
                    />
                ))
            }
        </>
    );
}

export default ProductList;
