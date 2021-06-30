import React, {useEffect} from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useProducts } from '../../../context/products'
import ProductItem from '../../atoms/ProductItem'
import {useNavigation} from '@react-navigation/native';
import IProduct from '../../../models/ProductModel';
import {ImagePickerResponse, launchImageLibrary} from 'react-native-image-picker';


const ProductList = () => {

    const {fetchProducts, products, setSelectedProduct, setSelectedImage, selectedImage, selectedProduct} = useProducts()
    const navigation = useNavigation();
    useEffect(() => {
        async function callFetchProducts() {
            await fetchProducts();
        };
        callFetchProducts()

    }, []);

    const handleProductNavigation = (item: IProduct, response: ImagePickerResponse) => {
        const imageAssets = response.assets ? response.assets[0].uri! : null
        setSelectedImage(imageAssets)
        setSelectedProduct(item)
        console.log(selectedImage)
        console.log(selectedProduct)
        navigation.navigate(item.title)
    };

    const launchGallery = (item:  IProduct) => {
        if (item.title === "print"){
            launchImageLibrary({mediaType:'photo', selectionLimit: 0}, (response: ImagePickerResponse) => handleProductNavigation(item, response))
        } else if (item.title === "frame"){
            launchImageLibrary({mediaType:'photo', selectionLimit: 1}, (response: ImagePickerResponse) => handleProductNavigation(item, response))
        }     
    }

    return (
            <FlatList data={products} renderItem={({item}) => <TouchableOpacity onPress={() => launchGallery(item)}>
                <ProductItem product={item}/>
                </TouchableOpacity>}/>
    )
}

export default ProductList

