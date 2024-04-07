import { useState } from "react";


export function Task({title, tags, check}){

    const [ChVal, setChVal] = useState(check);

    return(
        <article className="task">
            <section className="textCont">
                <h1>{title}</h1>
            </section>
            <section className="tags">
                <h2>Tags</h2>
                <button></button>
            </section>
            <section className="tagsEle">
                <ul>
                    {
                        tags.map((ele, i) => {
                            let value = ele[0];
                            let color = ele[1]
                            return(
                                <TagColor key={i} col={color} val={value} id={i}/>
                            )
                        })}
                </ul>
            </section>
            <aside className="taskBtnCont">
                <button className="checkbtn" onClick={(e)=>{Check(e)}}></button>
                <button className="trashbtn"></button>

            </aside>
        </article>
    )

    function Check(ele){
        if(ChVal == false){
            setChVal(true);
            ele.target.style.backgroundImage = 'url("/Images/check.svg")';
            // console.log(ChVal)
        } else if (ChVal == true) {
            ele.target.style.backgroundImage = 'url("/Images/uncheck.svg")';
            setChVal(false);
            // console.log(ChVal)
        }
    }

    function TagColor({col,val,id}) {
        let hex = "";

        switch(true){
            case col == "a":
                hex = '#0075FF'
                break
            case col == "r":
                hex = '#FF0000'
                break
            case col == "y":
                hex = '#DBDF00'
                break
            case col == "v":
                hex = '#0CB73C'
                break
            default:
                break
        }

        return (
            <li key={id} style={{backgroundColor: hex}}>{val}</li>
        )
    }
}
