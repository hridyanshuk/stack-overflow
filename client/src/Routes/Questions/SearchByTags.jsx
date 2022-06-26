import { useRef } from "react"
import axios from '../../axios'
import baseURL from "../../baseURL"
import Axios from 'axios'
export default ({ searchList }) => {

    const inputBox = useRef(null)

    const search = async () => {
        const inputElement = inputBox.current
        const tags = inputElement.value.split(' ')
        if(tags.length===0) return
        var tagsFilter="tag=true&tags="+tags[0]
        var i=0
        tags.forEach(element => {
            if(element !=='' && i!=0)
                tagsFilter=tagsFilter+'&tags='+element
            i=i+1
        });
        
        console.log(tagsFilter)
        var url = '/question/list?'+encodeURI(tagsFilter)
        // url + encodeURI()
        const list = await axios.get(url).then(response => response.data)
        // console.log(list)
        searchList(list)

    }

    return (
        <div className="search_by_tags">
            {/* <form action="/question/list"> */}
                <input type="text" name="tags" ref={inputBox}/>
                {/* <input  value="Search" onClick={search}/> */}
                <button onClick={search}>Search</button>
                {/* type="submit" */}
            {/* </form> */}
        </div>
    )
}