import { Container } from "reactstrap";
import styles from './styles.module.scss';

const Footer = () => {
    return (
        <>
            <Container className={ styles.footer }>
                <img 
                    src="/logo.svg" 
                    alt="logo Footer" 
                    className={ styles.footerLogo }
                />
                <a 
                    href="https://www.linkedin.com/in/ricardocamposdeoliveirajr/" 
                    target={"blank"}
                    className={ styles.footerLink }>
                    CRIADOR DO PROJETO
                </a>
            </Container>
        </>
    );
};

export default Footer;