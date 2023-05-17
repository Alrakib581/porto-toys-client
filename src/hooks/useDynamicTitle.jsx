import { useEffect } from "react"

const useDynamicTitle = (title)=>{
    useEffect(()=>{
        document.title = `Porto-toys | ${title}`
    },[title])
}
export default useDynamicTitle;