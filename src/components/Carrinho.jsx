import React, { useContext } from 'react'
import tenis from '../assets/tenis.svg'
import { CartContext } from '../context/CartContext'


const Carrinho = () => {
    const { count, addToCart, removerFromCart, removerItem } = useContext(CartContext)
    return (
        <>
            <section className='bg-white p-8'>
                <table className='w-full font-inter'>
                    <thead>
                        <tr className='flex text-[#474747]'>
                            <th className='flex-3 text-left'>MEU CARRINHO</th>
                            <th className='flex-1 font-medium'>QUANTIDADE</th>
                            <th className='flex-1 font-medium'>UNITÁRIO</th>
                            <th className='flex-1 font-medium'>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='flex border-b border-[#ccc] py-5 mt-5'>
                            <td className='flex-3 flex gap-5'>
                                <div className='bg-[#E2E3FF] h-28 w-32 flex items-center justify-center rounded-sm '>
                                    <img src={tenis} alt="tênis Nike" />
                                </div>
                                <div>
                                    <h2 className='font-bold w-60'>Tênis Nike Revolution
                                        6 Next Nature Masculino</h2>
                                    <p><span className='text-[#8F8F8F]'>cor:</span>vermelho/branco</p>
                                    <p><span className='text-[#8F8F8F]'>tamanho:</span> 42</p>
                                </div>
                            </td>
                            <td className='flex-1 text-center flex items-center flex-col justify-center gap-4'>
                                <div className=''>
                                    <button disabled={count <= 0} onClick={removerFromCart} className={`${count <= 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}border border-[#ccc] w-8 h-8 cursor-pointer rounded-sm`}>-</button>
                                    <span className='mx-2'>{count}</span>
                                    <button onClick={addToCart} className='border border-[#ccc] w-8 h-8 cursor-pointer rounded-b-sm'>+</button>
                                </div>
                                <button onClick={removerItem} className='text-[#474747] underline cursor-pointer'>remover item</button>
                            </td>
                            <td className='flex-1 bg-blue-700'></td>
                            <td className='flex-1 bg-fuchsia-600'></td>
                        </tr>
                    </tbody>
                </table>
            </section >
        </>
    )
}

export default Carrinho