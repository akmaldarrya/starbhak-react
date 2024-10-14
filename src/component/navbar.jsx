function Navbar() {
    return (
        <nav className="p-2 px-10 bg-[#161D6F] text-white font-poppins flex justify-between items-center">
            <div className="font-semibold text-[1.5rem]">
                <p>Starbhak<span className="italic">mart</span></p>
            </div>
            <div className="text-white text-[1.9rem]">
                <a href="">
                    <i className="fa-solid fa-circle-user"></i>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;