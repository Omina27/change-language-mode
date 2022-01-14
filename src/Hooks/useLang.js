import { useContext } from "react";
import { Context } from "../Context/LangContext";

function useLang () {
    let {lang, setLang} = useContext(Context)
    return [lang, setLang]
}

export {useLang}