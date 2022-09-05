/*
Conversion notes:
1 kg = 1,000 grams (duh)
1 oz = 28.35 grams 
1 lb = 16 oz
1 lb = 454 grams

Equation for price per 100g
Total price *  100 / total volume
Example:
$2.47 * 100 / 1,000 (1kg) = $0.25 per 100g

Make an object with key value pairs of our data:

const object = {
    foodName : ""
}
*/

let object = {}

const submit = document.querySelector('.submit')

submit.addEventListener('click', e => {
    e.preventDefault()
     object = {
        "price": Number(document.querySelector('#cost').value).toFixed(2),
        "volume": document.querySelector('#volume').value,
        "units": document.querySelector('#units').value,
        "servingSize": document.querySelector('#servingSize').value,
        "calories": document.querySelector('#calories').value,
        "protein": document.querySelector('#protein').value,
        "carbs": document.querySelector('#carbs').value,
        "fat": document.querySelector('#fat').value
    }
    console.log(object)

    

    // e.preventDefault()
    // let object = {}
    // object.price = document.querySelector('#foodName').value
    // object.volume = document.querySelector('#volume').value
    // object.units = document.querySelector('#units').value
    // object.servingSize = document.querySelector('#servingSize').value
    // object.calories = document.querySelector('#calories').value
    // object.protein = document.querySelector('#protein').value
    // object.carbs = document.querySelector('#carbs').value
    // object.fat = document.querySelector('#fat').value

    // console.log(object)


    // let price = document.querySelector('#foodName').value
    // let volume = document.querySelector('#volume').value
    // let units = document.querySelector('#units').value
    // let servingSize = document.querySelector('#servingSize').value
    // let calories = document.querySelector('#calories').value
    // let protein = document.querySelector('#protein').value
    // let carbs = document.querySelector('#carbs').value
    // let fat = document.querySelector('#fat').value

    // console.log(price, volume, units, servingSize, calories, protein, carbs, fat)
})

