import CatalogCard from "../../components/CatalogCard";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";


export default function Carrostop() {

    return (

        <>
            <Header/>
            <main>
                <section id="cartop-section-id" className="cartop-container">
                    <SearchBar/>
                    <div>
                        <CatalogCard/>
                    </div>
                </section>
            </main>
        </>
    )
}