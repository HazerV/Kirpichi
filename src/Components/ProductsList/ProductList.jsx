import React, {useEffect, useState} from 'react';
import ItemComponents from "../../BlockComponents/ItemComponent/ItemComponents.jsx";
import {Skeleton} from "primereact/skeleton";
import styles from './product_list.module.scss'

function ProductList({products}) {

    return (
        <div className={styles.container}>
            {
                products.map((product, index) => (
                    <ItemComponents
                        {...product}
                        photo={product.images.photo}
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
        </div>
    );
}

export default ProductList;
