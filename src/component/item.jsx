import Product from "../fragment/product"

function Item() {
    return (
        <div className="flex-row w-[75%]">
            <div className="p-2 px-10 flex gap-3">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <div className="p-2 px-10 flex gap-3">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default Item;