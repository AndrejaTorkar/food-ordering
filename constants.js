// aTorkar started writing code
import { Dimensions } from 'react-native';


export const IMAGE_PATHS = {
    casinoImage: require("./assets/head_photos/karo.jpg"),
    truckersImage: require("./assets/head_photos/chairs.jpg"),
    brickImage: require("./assets/head_photos/brick_wall.jpg"),
    oldImage: require("./assets/head_photos/old_china.jpg"),
    starbucksImage: require("./assets/head_photos/starbucks.jpg"),
};

export const FOOD_IMAGE_PATHS = {
    desert1Img: require("./assets/food_photos/desert1.jpg"),
    desert2Img: require("./assets/food_photos/desert2.jpg"),
   pasta1Img: require("./assets/food_photos/pasta1.jpg"),
    pasta2Img: require("./assets/food_photos/pasta2.jpg"),
    pasta3Img: require("./assets/food_photos/pasta3.jpg"),
    salad1Img: require("./assets/food_photos/salad1.jpg"),
    desert1Img: require("./assets/food_photos/desert1.jpg"),
};

export let field_width = Dimensions.get('window').width;
export let field_height = Dimensions.get('window').height;


export default {IMAGE_PATHS, FOOD_IMAGE_PATHS, field_height, field_width};
// aTorkar finished writing code