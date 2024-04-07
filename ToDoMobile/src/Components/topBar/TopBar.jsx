import { TopBtn } from "./TopBtn";


export function TopBar(){
    return(
        <article id="topBar">
            <TopBtn name={"To Do"} />
            <hr />
            <TopBtn name={"Completed"} />
        </article>
    )
}