const Footer = () => {
    return (
        <>
            <footer className="w-screen bg-cyan-500 px-4 md:px-24 py-4 md:absolute flex items-center justify-between bottom-0">
                <h3 className="text-sm text-white">Created with <i className="fa-brands fa-react"></i> and <i className="fa-brands fa-python"></i> by @KunHnao</h3>
                <nav className="w-fit block md:flex">
                    <a href="#" className="text-slate-300 ml-2 underline text-sm">Report a Bug</a>
                    <a href="#" className="text-slate-300 ml-2 underline text-sm">Leave Review</a>
                    <a href="#" className="text-slate-300 ml-2 underline text-sm">Use API</a>
                </nav>
            </footer>
        </>
    )
}

export default Footer