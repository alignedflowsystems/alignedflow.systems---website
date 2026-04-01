// Placeholder trust badges - to be replaced with real embed widgets
// when Google Business and Clutch profiles are set up

export function TrustBar() {
  return (
    <section className="py-8 border-t border-border/40">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">
          Trusted by clients on
        </p>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {/* Google Reviews placeholder */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 bg-card/40">
            <span className="text-sm font-semibold">Google</span>
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-sm font-bold">5.0</span>
            <span className="text-xs text-muted-foreground">/ 5</span>
          </div>
          {/* Clutch placeholder */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/60 bg-card/40">
            <span className="text-sm font-semibold">Clutch</span>
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-sm font-bold">5.0</span>
            <span className="text-xs text-muted-foreground">/ 5</span>
          </div>
        </div>
      </div>
    </section>
  )
}
