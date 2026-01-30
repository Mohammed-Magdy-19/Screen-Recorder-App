

{/* Headline */ }
const Headline = () => {
    return (
        <>
            <h1
                className="text-6xl sm:text-7xl lg:text-8xl mb-6 leading-tight tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
            >
                <span className="block bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                    Capture.
                </span>
                <span className="block bg-linear-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent font-bold">
                    Create.
                </span>
                <span className="block text-gray-900 font-bold">
                    Share.
                </span>
            </h1>

            <p
                className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
            >
                The most <span className="text-indigo-600 font-semibold">powerful</span> and{' '}
                <span className="text-purple-600 font-semibold">intuitive</span> screen recorder.
                <br />
                Record your screen with professional quality in seconds.
            </p>
        </>
    )
}

export default Headline
