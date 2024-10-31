import { useRef } from "react"
const Home = () => {
  let a = useRef("")
  console.log(a.current)
  return (
    <div>
        <h1 ref={a}>this is home component
        </h1>
    </div>
  )
}

export default Home