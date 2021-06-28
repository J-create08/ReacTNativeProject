import axios from 'axios';
import React, {createContext, useContext, useEffect, useState} from 'react';
import IProduct from '../models/ProductModel';
import database from '@react-native-firebase/database';

interface ProductsContextProps {
    products: IProduct[];
    selectedProduct: IProduct | null;
    setProducts: (products: IProduct[]) => void;
    setSelectedProduct: (product: IProduct) => void;
    fetchProducts: () => Promise<void>;
}

const ProductsContext = createContext<ProductsContextProps>({
    products: [],
    selectedProduct: null,
    setProducts: () => {},
    setSelectedProduct: () => {},
    fetchProducts: () => new Promise(() => {}),
})

export const ProductsProvider: React.FC = ({children}) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

    const fetchProducts = async () =>{
        try {
            const productsData = (await database().ref('/products').once('value')).val()
            const frame: IProduct = productsData.frame 
            const print: IProduct = productsData.print
            // const productsData: IProduct[] = await database().ref('/products').once('value').then(snapshot => {
            //     snapshot.forEach(childSnapshot => {
            //         return childSnapshot.val()
            //     })
            // })
            // const formattedData: IProduct[] = productsData.map((element: IProduct) => {
            //     return element
            // })
            // console.log(formattedData)
            setProducts([frame, print])
            console.log(products)
                
    } catch (error) {
        console.log(error)
    } 
    }

    useEffect(() => {
        async function callFetchProducts() {
            await fetchProducts();
        }

        callFetchProducts();
    }, []);

    const val = {
        products,
        selectedProduct,
        setProducts,
        setSelectedProduct,
        fetchProducts
    };
    return <ProductsContext.Provider value={val}>{children}</ProductsContext.Provider>
}

export const useProducts = () => useContext(ProductsContext)