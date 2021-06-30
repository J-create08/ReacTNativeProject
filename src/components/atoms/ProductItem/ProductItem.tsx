import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import IProduct from '../../../models/ProductModel'
import styled, { css } from '@emotion/native'

interface ProductItemProps {
    product: IProduct;
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
    const capTitle = capitalize(product.title)
    const description = product.description ? product.description : "Product"
    const imageUri = product.imageUrl
    const capDescription = addDot(capitalize(description))
    return (
        <ProductContainer>
            <Image style={styles.image} source={{uri:imageUri}}/>
            <Text style={styles.titleText}>{capTitle}</Text>
            <Text style={styles.text}>{capDescription}</Text>
        </ProductContainer>
    )
}

const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

const addDot = (text: string) => {
    return text + "."
}

const ProductContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
  border-radius: 20px;
  background-color: #FAFAFA;
  padding: 5px;
  box-shadow: 0px 2px 4px #DEDEDE;
`

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 10,
        marginBottom: 5
    },

    text: {
        fontSize: 15,
        paddingLeft: 5,
        paddingBottom: 8
    },

    titleText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#E56717',
        paddingLeft: 5
    }
})

export default ProductItem;