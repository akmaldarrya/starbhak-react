import Navbar from "../component/navbar";
import Item from "../component/item";
import Sidebar from "../component/sidebar";

function Home() {
    return (
        <>
            <Navbar />
            <div className="flex">
                <Item />
                <Sidebar />
            </div>
        </>
    )
}

export default Home;
