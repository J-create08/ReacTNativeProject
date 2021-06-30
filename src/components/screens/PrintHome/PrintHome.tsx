import styled from '@emotion/native'
import React from 'react'
import { Text, StyleSheet, Image, Button, View } from 'react-native'
import { useProducts } from '../../../context/products'
import {Picker} from '@react-native-picker/picker';



const PrintHome = () => {
    const {selectedProduct, selectedImage, selectedOption, setSelectedOption} = useProducts()
    const imageUri = selectedImage?.toString()
    console.log(imageUri)
    console.log(selectedProduct?.size.option1)

    // const sizePrickerOptions = (selectedProduct: IProduct | null) => {
    //     console.log(selectedProduct.size)
    //     const options: Array<Object> = Object.keys(selectedProduct.size).map(key => {})
    //     return (selectedProduct?.size.map((option: ISizeOption) => {
    //         return (<Picker.Item label={option.title} value={option.title}/>)
    //     }))
    // }
    const handleContinue = () => {

    }
    
    return (
        <MainContainer>
            <Text style={styles.header}>Almost Done!</Text>
            <Text style={styles.text}>This is the image you picked:</Text>
            <Image style={styles.image} source={{uri:imageUri}}/>
            <View>
                <Text style={styles.text}>Select your print size:</Text>
                <Picker selectedValue={selectedOption} style={{height: 10, width: 120}} onValueChange={(value) => setSelectedOption(value)}>
                    <Picker.Item label={selectedProduct?.size.option1.title} value={selectedProduct?.size.option1.title}/>
                    <Picker.Item label={selectedProduct?.size.option2.title} value={selectedProduct?.size.option2.title}/>
                </Picker>
            </View>
            {/* <Button title="Continue to Checkout" onPress={handleContinue}/> */}
        </MainContainer>
    )
}


const MainContainer = styled.View`
  display: flex;
  align-items: center;
  padding: 5px;
`

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 10,
        marginBottom: 5,
        marginTop: 5
    },
    
    header: {
        fontWeight: '700',
        fontSize: 35,
        color: '#E56717',
    },
    text: {
        fontSize: 15,
        marginTop: 10,
    }
})

export default PrintHome
