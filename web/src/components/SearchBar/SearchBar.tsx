import { useState } from 'react'

const SearchBar = ({ updateResults }) => {
  const [value, setValue] = useState('')

  const onChange = ({ target }) => {
    const { value } = target
    setValue(value)
    updateResults(value)
  }

  return (
    <div className="ml-5">
      <input
        type="text"
        placeholder="Search"
        name="name"
        className="block w-96 rounded border p-1 text-xs"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBar
