
const Instructions = () => {
    return (
        <section className="mt-12 bg-linear-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-purple-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use</h2>
            <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                    <span className="shrink-0 w-8 h-8 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                        1
                    </span>
                    <span>Configure your recording settings (microphone, system audio, webcam)</span>
                </li>
                <li className="flex gap-3">
                    <span className="shrink-0 w-8 h-8 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                        2
                    </span>
                    <span>Click "Start Recording" and select the window or screen you want to record</span>
                </li>
                <li className="flex gap-3">
                    <span className="shrink-0 w-8 h-8 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                        3
                    </span>
                    <span>Use Pause/Resume to take breaks during your recording</span>
                </li>
                <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
                        4
                    </span>
                    <span>Click "Stop" when you're done and download your video</span>
                </li>
            </ol>
        </section>
    )
}

export default Instructions
