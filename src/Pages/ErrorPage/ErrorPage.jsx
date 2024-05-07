import { useRouteError } from "react-router-dom";
import styles from './index.scss'
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <p style={styles.container}>
                Test
            </p>
        </>

    );
}
