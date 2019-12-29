import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        // position: 'absolute',
        // bottom: -50,
        backgroundColor: '#FFF',
        // right: 15,
        // left: 15,
        borderRadius: 5,
        padding: 10,
        margin: 15,
        marginTop: -50,
        // borderColor: '#ddd',
        // shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleContainer: {
        backgroundColor: '#44974C',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    title: {
        color: 'white',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    contentContainer: {
        marginTop: 10,
        paddingLeft: 15,
    },
});
