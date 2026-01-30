

{/* Animated Background Elements */}
const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-br from-indigo-400 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-tr from-pink-400 to-rose-600 rounded-full opacity-20 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-linear-to-r from-purple-400 to-indigo-600 rounded-full opacity-10 blur-3xl"></div>
        </div>

        
    )
}

export default AnimatedBackground;
