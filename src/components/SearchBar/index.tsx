import './styles.css';
export default function SearchBar(){
    return (
        <form className="cartop-search-bar">
            <input type="text" placeholder="Digite sua busca"/>
            <button type="submit">Buscar</button>
           
        </form>
    );
}