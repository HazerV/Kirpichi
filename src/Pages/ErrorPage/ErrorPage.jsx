// import { useRouteError } from "react-router-dom";
import styles from './error_page.module.scss'
export default function ErrorPage() {
    // const error = useRouteError();
    // console.error(error);

    return (
        <div className={styles.container}>
            ERROR 404
        </div>

    );
}
