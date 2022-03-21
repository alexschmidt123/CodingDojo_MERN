import React, { useState } from 'react';


const ToDoList = () => {

    let [Task, setTask] = useState("");
    let [ToDoListList, setToDoList] = useState([])
    let [taskDone, setTaskDone] = useState(false)

    const addList = (e) => {
        e.preventDefault();
        let newToDoListObj = { Task, taskDone}
        setToDoList([...ToDoListList, newToDoListObj])
    }

    const deleteToDoList = (i) => {
        let filteredToDoList = ToDoListList.filter((ToDoList, index) => {
            return index !== i;
        })
        setToDoList(filteredToDoList)
    }

    const updateToDoList= (i) => {
        let copyOfToDoListList = [...ToDoListList]
        copyOfToDoListList[i].taskDone = !copyOfToDoListList[i].taskDone
        setToDoList(copyOfToDoListList)
    }

    return (
        <>
            <form onSubmit={addList} style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
                <div>
                    <input type="text" style={{ width: "600px", height: "50px" }} onChange={(e) => { setTask(e.target.value) }} value={Task} />
                </div>
                <button style={{ width: "100px", height: "50px" }} type="submit" > <strong> Add</strong></button>
            </form>

            <h4>Following are your to-do lists !!!</h4>
            <div style={{ margin: "20px auto" }}>
                {
                    ToDoListList.map(
                        (ToDoList, i) => {
                            return <div className="field-row" key={i} style={{ display: "flex", justifyContent: "center" }}>
                        
                                <input type="checkbox" onClick={()=>updateToDoList(i)} />
                                <label style={{textDecoration: ToDoList.taskDone && 'line-through'}}>{i + 1}.  {ToDoList.Task}</label>
                                <button style={{ margin: "auto 30px" }} onClick={() => deleteToDoList(i)}>Delete {ToDoList.name}</button>
                            </div>
                        }
                    )
                }
            </div>

        </>

    )
}

export default ToDoList;