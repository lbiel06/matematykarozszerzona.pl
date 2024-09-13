import { useEffect, useState } from "react"
import "./App.css"
import { firebaseApp } from "./firebase"
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
} from "firebase/firestore/lite"
import Task from "./Task"
import { typeLabels } from "./labels"

function App() {
  const [tasks, setTasks] = useState([])
  const [type, setType] = useState("ciągi")
  // TODO: remove for production
  // const [subset, setSubset] = useState("")

  const fetch = async () => {
    const db = getFirestore(firebaseApp)
    const tasksCollection = collection(db, "zadania")
    let q = query(tasksCollection)

    if (type != "wszystkie") q = query(q, where("temat", "==", type))

    const snapshot = await getDocs(q)
    setTasks(snapshot.docs)
  }
  useEffect(() => {
    fetch()
  }, [type])

  return (
    <>
      <h1 className="heading">Zbiór zadań maturalnych</h1>
      <div className="row">
        <div className="tasks">
          {tasks.map((task) => (
            <Task doc={task.data()}></Task>
          ))}
        </div>
        <div className="menu">
          {typeLabels.map((label) => (
            <>
              <input
                type="radio"
                name="typess"
                id={label}
                value={label}
                defaultChecked={label === "ciągi"}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor={label}>{label}</label>
              <br />
            </>
          ))}
          {/* <select name="zbior" onChange={(e) => setSubset(e.target.value)}>
            {collectionLabels.map((label) => (
              <option value={label}>{label}</option>
            ))}
          </select> */}
        </div>
      </div>
    </>
  )
}

export default App
