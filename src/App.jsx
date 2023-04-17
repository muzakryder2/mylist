import { useEffect, useState } from "react"
import Header from "./components/Header"
import ItemList from "./components/ItemList"

function App() {
  const [items, setItems] = useState(() => {
    const localItems = JSON.parse(localStorage.getItem("ITEMS"))

    if (localItems === null) {
      return []
    }

    return localItems
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items))
  }, [items])

  const addItem = (item) => {
    setItems((prevItems) => [item, ...prevItems])
  }

  const toggleChecked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const removeChecked = () => {
    setItems((prevItems) => prevItems.filter((item) => item.checked !== true))
  }

  const removeAll = () => {
    setItems([])
  }

  return (
    <div className='container-fluid'>
      <Header addItem={addItem} />
      <ItemList
        items={items}
        toggleChecked={toggleChecked}
        deleteItem={deleteItem}
        removeChecked={removeChecked}
        removeAll={removeAll}
      />
    </div>
  )
}

export default App
