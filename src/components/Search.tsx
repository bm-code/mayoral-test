export default function Search({ term, setTerm }) {

    return (
        <div className="search">
            <input
                onChange={e => setTerm(e.target.value)}
                value={term}
                className="search__input"
                type="text"
                name="searchProducts"
                id="searchProducts"
                placeholder="Buscar" />
        </div>
    )
}