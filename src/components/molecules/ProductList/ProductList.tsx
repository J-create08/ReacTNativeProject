import React, {useEffect} from 'react'
import { View, Text, FlatList } from 'react-native'
import { ProductsProvider, useProducts } from '../../../context/products'
import ProductItem from '../../atoms/ProductItem'

const ProductList = () => {

    const {fetchProducts, products} = useProducts()

    
    console.log(products)
    useEffect(() => {
        async function callFetchProducts() {
            await fetchProducts();
        };
        callFetchProducts()
        console.log(products)
    }, []);


    return (
        <ProductsProvider>
            <FlatList data={products} renderItem={({item}) => <ProductItem product={item}/>}/>
        </ProductsProvider>
    )
}

export default ProductList
