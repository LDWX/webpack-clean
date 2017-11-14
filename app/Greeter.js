import config from './config.json';
import styles from './Greeter.css';

function Greeter() {
    var greet = document.createElement('div');
    greet.setAttribute('class', styles.root);
    greet.textContent = config.greetText;
    return greet;
}

export { Greeter as Greet };
