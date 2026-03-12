import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category);
            if (subCategory) {
                productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
            }
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subCategory]);

    if (related.length === 0) return null;

  return (
    <section className='mt-16 sm:mt-32 border-t border-white/10 pt-10 sm:pt-20'>
        <div className='mb-10 text-center'>
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block font-manrope">Explore More</span>
            <h2 className='serif-title text-3xl sm:text-4xl text-white'>Related <span className="text-primary italic">Elevators</span></h2>
        </div>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
            {related.map((item, index) => (
                <ProductItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                />
            ))}
        </div>
    </section>
  )
}

export default RelatedProducts
