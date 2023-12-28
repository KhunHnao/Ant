const Header = () => {
    return (
        <>
            <header className="w-screen px-4 md:px-24 py-4 absolute flex justify-between bg-cyan-500 items-center">
                <div className="w-fit flex">
                    <h1 className="text-2xl mr-2">&#128028;</h1>
                </div>
                <nav className="w-fit flex items-center">
                    <a href="https://github.com/KunHnao/ant" className="ml-2 text-md text-white">
                        <button className="flex items-center p-1 px-2 bg-black rounded-lg">
                            <i className="fa-brands fa-github text-white text-2xl mr-2"></i>
                            <div className="text-left">
                                <p className="tex-white text-[8px]" style={{ marginBottom: "-5px" }}>Contribute on</p>
                                <h3 className="text-md text-white">Github</h3>
                            </div>
                        </button>
                    </a>
                </nav>
            </header>
        </>
    )
}

export default Header
