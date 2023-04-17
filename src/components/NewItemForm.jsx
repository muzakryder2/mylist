import { useState } from "react"

function NewItemForm({ addItem }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (text === "") return

    const newItem = {
      id: crypto.randomUUID(),
      title: text,
      checked: false,
    }

    addItem(newItem)

    setText("")
  }

  return (
    <form className='d-flex' role='search' onSubmit={handleSubmit}>
      <input
        className='form-control me-2'
        type='text'
        value={text}
        placeholder='New Item...'
        aria-label='Add Item'
        onChange={(e) => setText(e.target.value)}
      />
      <button className='btn btn-sm btn-outline-success' type='submit'>
        Add
      </button>
    </form>
  )
}
export default NewItemForm
