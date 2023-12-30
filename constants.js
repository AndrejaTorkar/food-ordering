import { Dimensions } from 'react-native';


export const IMAGE_PATHS = {
    casinoImage: require("./assets/head_photos/karo.jpg"),
    truckersImage: require("./assets/head_photos/chairs.jpg"),
    brickImage: require("./assets/head_photos/brick_wall.jpg"),
    oldImage: require("./assets/head_photos/old_china.jpg"),
    starbucksImage: require("./assets/head_photos/starbucks.jpg"),
};

export let field_width = Dimensions.get('window').width;
export let field_height = Dimensions.get('window').height;


export default {IMAGE_PATHS, field_height, field_width};