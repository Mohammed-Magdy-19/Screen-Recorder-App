import { Suspense } from "react";
import Layout from "../Pages/Layout";
import ErrorBoundary from "../Components/Error Boundary/ErrorBoundary";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/contact";
import Features from "../Pages/Features";
import Recorder from "../Pages/Recorder";

export const routers = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    <ErrorBoundary>
                        <Suspense fallback={<div>loading...</div>}>
                            <Home />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: 'about',
                element: (
                    <ErrorBoundary>
                        <Suspense fallback={<div>loading...</div>}>
                            <About />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: 'contact',
                element: (
                    <ErrorBoundary>
                        <Suspense fallback={<div>loading...</div>}>
                            <Contact />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: 'features',
                element: (
                    <ErrorBoundary>
                        <Suspense fallback={<div>loading...</div>}>
                            <Features />
                        </Suspense>
                    </ErrorBoundary>
                ),
            },
            {
                path: 'recorder',
                element: (
                    <ErrorBoundary>
                        <Suspense fallback={<div>loading...</div>}>
                            <Recorder />
                        </Suspense>
                    </ErrorBoundary>
                ),
            }
        ]
    }
]