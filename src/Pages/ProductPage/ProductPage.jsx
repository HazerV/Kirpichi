import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getById} from "../../services/products/products.js";
import styles from './product_page.module.scss';
import HistoriesBLock from "../../Components/HistoriesBlock/HistoriesBLock.jsx";
import HeaderProduct from "../../HeaderComponents/HeaderProduct/HeaderProduct.jsx";
import ProductSlider from "../../BlockComponents/ProductSlider/ProductSlider.jsx";
import PriceField from "../../BlockComponents/PriceField/PriceField.jsx";
import SimilarProducts from "../../BlockComponents/SimilarProducts/SimilarProducts.jsx";
import ProducersButtons from "../../ButtonComponents/ProducersButtons/ProducersButtons.jsx";
import CharacteristicsBlock from "../../BlockComponents/CharacteristicsBlock/CharacteristicsBlock.jsx";
import MainFooter from "../../Components/MainFooter/MainFooter.jsx";

function ProductPage() {
    const [product, setProduct] = useState(null);
    const {productSlug} = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getById(productSlug);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productSlug]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className={styles.container}>
                <HeaderProduct category_name={product.name}/>
            </div>
            <div className={styles.slider}>
                {product.images.map((image, index) => (
                    <ProductSlider
                        key={index}
                        photo={image.photo}
                        photo2x={image.photo2x}
                    />
                ))}
            </div>
            <div className={styles.container}>
                <PriceField price={product.price || ''}/>
                <div className={styles.pad_right}>
                    <HistoriesBLock text={'Что мы делаем'}/>
                </div>
                <div className={styles.pad_bot}>
                    {
                        product.similar_products.map((i, index) =>
                            <SimilarProducts route={`/product/${i.slug}`} name={i.name} key={index}/> // Используем slug вместо id
                        )
                    }
                </div>
                <div className={styles.pad_bot}>
                    <ProducersButtons route={'/product/'} name={product.brand_name || ''} brandImage={product.brand_image || {}}
                                      text={'Производитель:'}/>
                </div>
                {
                    product.attributes.length !== 0 && (
                        <p className={styles.text}>
                            Характеристики
                        </p>
                    )
                }
                {
                    product.attributes.map((i, index) =>
                        <CharacteristicsBlock text={i.value} name={i.name} key={index}/>
                    )
                }
            </div>
            <div className={styles.pad_top}>
                <MainFooter/>
            </div>
        </div>
    );
}

export default ProductPage;
