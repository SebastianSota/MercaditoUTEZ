import LottieView from 'lottie-react-native';

const { StyleSheet } = require('react-native');

const Animation = () => {
    return (
        <LottieView source={require('../../assets/animations/fillwater.json')}
            autoPlay={true}
            loop={true}
            style={styles.loadingAnimation} />
    );
}

const styles = StyleSheet.create({
    loadingAnimation: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    }
});

export default Animation;