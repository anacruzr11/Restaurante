import React, { useState } from 'react'
import '../style/App.css'
import { collection, addDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from '../firebase/firebase'

const App = () => {
  const [users, setUser] = useState([])
  const userCollectionRef = collection(db, 'reservas')
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState(0)
  const [comments, setComments] = useState("")


  return (
    <div>
      
    </div>
  )
}

export default App
