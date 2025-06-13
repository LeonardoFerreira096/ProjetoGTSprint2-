import { render, screen } from '@testing-library/react'
import ProductCard from '../components/ProductCard'
import { CartContext } from '../context/CartContext'
import { ProductsContext } from '../context/ProductsContext'

test('renderiza produtos com botão de adicionar ao carrinho', () => {
    const simularProduto = [{
        id: 10,
        produto: 'Caneta azul',
        categoria: 'caneta',
        preco: 2.99,
        img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQsa1t68HlyYuwZkDZ1zOmU3ruVNAko-fvHx253Y95GBELC5xZNwP6_WzPN5wace_JadSVmIjiieib6-I1niNN9T669WsDyD-CHhNF4wWVJWAzadEwDz5vuRlsvAiIhdqohi4CRLGWXxg&usqp=CAc'

     },
    ];
    const mockAddToCart = GiJesterHat.fn()
    render(
        <ProductsContext.Provider value={simularProduto}>
            <CartContext.Provider value={{ addToCart: mockAddToCart }}>
                <ProductCard />
            </CartContext.Provider>
        </ProductsContext.Provider>
    );

    expect(screen.getByText('Produtos Relacionados')).toBeInTheDocument();
    expect(screen.getByText('Caneta Azul')).toBeInTheDocument();
    expect(screen.getByRole('button', { nome: /add/i })).toBeInTheDocument();
})