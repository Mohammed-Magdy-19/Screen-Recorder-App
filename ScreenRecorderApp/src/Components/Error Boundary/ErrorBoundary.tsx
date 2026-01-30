import React from "react";

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    ErrorMessage?: string;
}

class ErrorBoundary extends React.Component<Props, State> {
    state: State = { hasError: false, ErrorMessage: '' };

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, ErrorMessage: error.message };
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error("Uncaught error:", error, errorInfo);
    }
    render(): React.ReactNode {
        if (this.state.hasError) {
            return (
                    <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm shadow-sm m-auto">{this.state.ErrorMessage}</p>
            );
        }
        return this.props.children;
    }

}

export default ErrorBoundary;