import Item from "./Item"

function ItemList({
  items,
  toggleChecked,
  deleteItem,
  removeChecked,
  removeAll,
}) {
  {
    if (items.length === 0) {
      return <h3 className='text-center mt-5'>Your list is empty...</h3>
    }
  }
  return (
    <>
      <ul className='list-group list-group-flush mt-3'>
        {items.map((item) => (
          <Item
            key={item.id}
            {...item}
            toggleChecked={toggleChecked}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
      <div className='gap-2 d-flex justify-content-center my-3'>
        <button
          className='btn btn-sm btn-warning'
          type='button'
          onClick={removeChecked}
        >
          Remove Checked
        </button>
        <button
          className='btn btn-sm btn-danger'
          type='button'
          data-bs-toggle='modal'
          data-bs-target='#removeAll'
        >
          Remove All
        </button>
      </div>
      <div
        class='modal fade'
        id='removeAll'
        tabindex='-1'
        aria-labelledby='removeAll'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='removeAll'>
                Confirm
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              Are you sure you want to clear your list?
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Cancel
              </button>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-dismiss='modal'
                onClick={removeAll}
              >
                Remove All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ItemList
