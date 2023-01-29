const backButton = document.querySelector('.back');

const navigation = window.navigation;

if (navigation.canGoBack) {
    backButton.classList.remove('faded');
}
else {
    backButton.classList.add('faded');
}

const navigateBack = () => {
    navigation.canGoBack && navigation.back();
}