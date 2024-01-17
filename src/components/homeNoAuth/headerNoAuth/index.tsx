import Link from 'next/link';
import { Button, Container } from 'reactstrap';
import styles from './styles.module.scss';

const HeaderNoAuth = () => {
    return (
        <>
            <div className={ styles.ctaSection }>
                <p>Se cadastre para ter acesso aos cursos</p>
            </div>
            <Container className={ styles.nav }>
                <img src="/logo.svg" alt="logo" className={ styles.imgLogoNav }/>
                <div>
                    <Link href="/login">
                        <Button className={ styles.navBtn } outline>Entrar</Button>
                    </Link>
                    <Link href="/register">
                        <Button className={ styles.navBtn } outline>Quero fazer parte</Button>
                    </Link>
                </div>
            </Container>
        </>
    );
}

export default HeaderNoAuth;