import { useLang } from '../Hooks/useLang'
import {useTheme} from '../Hooks/useTheme'
import {content} from '../Localization/content'

function Header() {

    const [theme, setTheme] = useTheme()
    const [lang, setLang] = useLang()

    const changeTheme = (e) => {
        setTheme(e.target.value)
    }

  

    return (
        <>
        <header className={theme} style={{display: "flex", alignItems: "center", paddingLeft: "15px", paddingRight: "15px"}}>
            <a href="index.html" className={theme} style={{backgroundColor: "white", color: "black"}}>REACT</a>
            <ul className={theme}>
                <li><a href="#" className={theme} >{content[lang].header}</a></li>
                <li><a href="#" className={theme} style={{marginLeft: "15px"}}>{content[lang].about}</a></li>
                <li><a href="#" className={theme} style={{marginLeft: "15px"}}>{content[lang].contact}</a></li>
            </ul>

            <select defaultValue={lang} onChange={e => console.log(e.target.value)(setLang(e.target.value))} style={{padding: "10px", borderRadius: "15px"}}>
                <option value="uz">uz</option>
                <option value="en">en</option>
                <option value="ru">ру</option>
            </select>

            <select defaultChecked={theme} onChange={e => changeTheme(e)} style={{padding: "10px", borderRadius: "15px", marginLeft: "13px"}}>
                <option value="light">light</option>
                <option value="dark">dark</option>
            </select>
        </header>
        </>
    )
}

export default Header
