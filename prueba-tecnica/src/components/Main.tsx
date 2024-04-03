
import { useState } from "react"
import { Card_Category } from "./Card_Category"
import Header from "./Header"
export default function Main() {
    const [title, setTitle] = useState("")
    const [value, setValue] = useState("")



    return (
        <main className="main_container">
            <Header title={title} value={value} />
            <Card_Category updateProgress={"updateProgress"} updateTitle={"updateTitle"} />
        </main>
    )
}