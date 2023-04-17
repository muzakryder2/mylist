import NewItemForm from "./NewItemForm"

function Header({ addItem }) {
  return (
    <nav className='navbar bg-body-tertiary'>
      <div className='container-fluid'>
        <a className='navbar-brand'>My List</a>
        <NewItemForm addItem={addItem} />
      </div>
    </nav>
  )
}
export default Header
