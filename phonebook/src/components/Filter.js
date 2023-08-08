const Filter = ({filterName, setFilterName}) => {
    const handleFilterChange = (event) => {
        setFilterName(event.target.value)
    }

    return (
        <div>
            filter shown with <input required value={filterName} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter