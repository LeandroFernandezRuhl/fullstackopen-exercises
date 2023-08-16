import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import VisibilityFilter from "./components/VisibilityFilter"

const App = () => {

    return (
        <div>
            <VisibilityFilter />
            <h2>Anecdotes</h2>
            <AnecdoteList/>
            <AnecdoteForm/>
        </div>
    )
}

export default App