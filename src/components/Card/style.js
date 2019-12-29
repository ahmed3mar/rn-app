import {StyleSheet} from 'react-native';
import {boxShadow} from '../../styles/mixins';

export default StyleSheet.create({
    cardContainer: {
        marginTop: 20,
    },
    imageContainer: {
        height: 180,
        borderRadius: 5,
        ...boxShadow('#000', {height: 2, width: 0}, 1, 0.8),
    },
    image: {
        borderRadius: 5,
        height: 180,
    },
    address: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    amenitiesContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    amenities: {
        color: '#C8C8CA',
    },
});
