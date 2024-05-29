import { useLocalStorage } from "./useLocalStorage";


export const useDarkMode = (key, initialValue) => {
    const [isDarkOn , setisDarkOn] = useLocalStorage('darkmode', initialValue)
    const toggleDarkMode = isDarkOn => {
        setisDarkOn(!isDarkOn)
    }
    return [isDarkOn, setisDarkOn, toggleDarkMode]
}