export function AppErrorComponent({ error, reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-fg px-6 py-12 text-center">
      <div className="max-w-md w-full rounded-2xl bg-surface p-8 shadow-[var(--shadow-border)] border border-line">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-mono block mb-2">System Error</span>
        <h2 className="font-serif text-3xl mb-4 text-fg">Something went wrong</h2>
        <p className="text-sm text-muted mb-6 font-light leading-relaxed">
          {error?.message || "An unexpected error occurred while rendering this view."}
        </p>
        {reset && (
          <button
            onClick={reset}
            className="w-full rounded-[var(--radius-md)] bg-accent text-accent-fg py-3 font-sans text-xs font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-90"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}