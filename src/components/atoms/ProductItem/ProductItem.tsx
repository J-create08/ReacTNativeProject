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
    const capDescription = capitalize(description)
    return (
        <ProductContainer>
            <Image source={{uri:product.imageUrl}}/>
            <Text style={styles.titleText}>{capTitle}</Text>
            <Text style={styles.text}>{capDescription}</Text>
        </ProductContainer>
    )
}

const capitalize = (text: string) => {
    return text.charAt(0) + text.slice(1)
}

const ProductContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 30px;
  border-radius: 20px;
`

const styles = StyleSheet.create({
    image: {
        width: '100%',
    },

    text: {
        fontSize: 20
    },

    titleText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#E56717'
    }
})

export default ProductItem;