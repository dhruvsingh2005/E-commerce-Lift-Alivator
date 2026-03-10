import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        /* Container with Charcoal Background */
        <div className='w-full bg-[#1F2933] p-6 rounded-sm border border-white/10'>
            <div className='text-2xl'>
                <Title text1={'CART'} text2={'TOTAL'} />
            </div>
            
            <div className='flex flex-col gap-3 mt-4 text-sm'>
                {/* Subtotal Section */}
                <div className='flex justify-between'>
                    <p className='text-lg font-medium text-white/70'>
                        Sub Total
                    </p>
                    <p className='text-lg font-medium text-white'>
                        {currency}&nbsp;{getCartAmount().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
                
                <hr className='border-white/10' />
                
                {/* Shipping Fee Section */}
                <div className='flex justify-between'>
                    <p className='text-lg font-medium text-white/70'>
                        Shipping Fee
                    </p>
                    <p className='text-lg font-medium text-white'>
                        {currency}&nbsp;{delivery_fee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
                
                <hr className='border-white/10' />
                
                {/* Total Amount Section */}
                <div className='flex justify-between mt-2'>
                    <p className='text-2xl font-semibold text-[#F26522]'>
                        Total Amount
                    </p>
                    <p className='text-2xl font-semibold text-[#F26522]'>
                        {currency}&nbsp;{(getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartTotal