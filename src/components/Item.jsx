function Item({ id, title, checked, toggleChecked, deleteItem }) {
  return (
    <li className={`list-group-item d-flex ${checked && "bg-success-subtle"}`}>
      <input
        className='form-check-input me-2'
        type='checkbox'
        value=''
        checked={checked}
        id={id}
        onChange={() => toggleChecked(id)}
      />
      <label
        className={`form-check-label me-auto text-capitalize ${
          checked &&
          "fst-italic text-body-secondary text-decoration-line-through"
        }`}
        for={id}
      >
        {title}
      </label>
      <button className='btn btn-sm btn-danger' onClick={() => deleteItem(id)}>
        Delete
      </button>
    </li>
  )
}
export default Item
