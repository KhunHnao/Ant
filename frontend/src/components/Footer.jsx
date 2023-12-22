const Footer = () => {
    return (
        <>
            <footer className="w-screen bg-cyan-500 px-24 py-4 absolute flex items-center justify-between bottom-0">
                <h3 className="text-sm text-white">Created with <i className="fa-brands fa-react"></i> and <i className="fa-brands fa-python"></i> by @KunHnao</h3>
                <nav className="w-fit">
                    <a href="#" className="text-slate-300 ml-2 underline text-sm">Report a Bug</a>
                    <a href="#" className="text-slate-300 ml-2 underline text-sm">Leave Review</a>
                    <a href="#" className="text-slate-300 ml-2 underline text-sm">Use API</a>
                </nav>
            </footer>
        </>
    )
}

export default Footer