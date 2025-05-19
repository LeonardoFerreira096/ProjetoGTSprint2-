import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ProductsContext } from '../context/ProductsContext'

const ProductCard = () => {
    const produtos = useContext (ProductsContext)
    const {addToCart } = useContext(CartContext)
    return (
        <section className='ml-8'>
            <h1 className='font-bold text-2xl mb-5'>produtos relacionados</h1>
            <ul className='flex gap-20'>
                {produtos.map((item) => (
                    <li key={item.id} className='border border-[#ccc] p-2'>
                        <div className='bg-[#E2E3FF] h-28 w-32 flex items-center justify-center rounded-sm '>
                            <img src={item.img} alt={item.produto} />
                        </div>
                        <div>
                            <h2>{item.cadegoria}</h2>
                            <h2 className=''>{item.produto}</h2>
                            <p>{item.preco}</p>
                            <button onClick={addToCart} className=' flex bg-green-700 w-[80%] rounded-sm '>Add</button>
                        </div>
                    </li>
                ))
                }
            </ul>
        </section>
    )
}

export default ProductCard