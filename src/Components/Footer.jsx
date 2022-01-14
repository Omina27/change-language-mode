
import {useTheme} from '../Hooks/useTheme'


function Footer () {

    const [theme, setTheme] = useTheme()

    return (
        <>
        <footer className={theme}>
            <h2>Footer</h2>
        </footer>
        </>
    )
}

export default Footer