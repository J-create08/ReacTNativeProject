import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import styled, { css } from '@emotion/native'
import { ProductsProvider } from '../../../context/products'
import ProductList from '../../molecules/ProductList'



const Home = () => {

    return ( 
            <Container>
                <Text style={styles.header}>LifePhoto</Text>
                <ProductList/>
            </Container>
    )
}

const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`

const styles = StyleSheet.create({
    header: {
        fontWeight: '700',
        fontSize: 35,
        color: '#E56717',
    }
})

export default Home
