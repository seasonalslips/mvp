export default function Hero() {
  return (
   <section className="relative min-h-screen flex flex-col">
  {/* Header placeholder */}
  <div className="h-16" />

  <div className="flex-1 flex flex-col items-center justify-center container mx-auto px-4 py-12">
    <div className="max-w-4xl w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      
      {/* Headline */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Find Your Perfect
          <span className="block text-primary mt-2">
            Seasonal or Annual Slip
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Search marinas for long-term seasonal and annual slips
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-card border rounded-2xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          
          <div className="flex-1 relative">
            <div className="flex items-center gap-3 border rounded-full px-4 h-12">
              <span className="w-5 h-5 bg-muted-foreground/40 rounded-full" />
              <input
                placeholder="Search by marina name or location..."
                className="border-0 focus-visible:ring-0 px-0 w-full bg-transparent"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-full sm:w-[160px] rounded-full h-12 border flex items-center px-4 text-muted-foreground">
              All States
            </div>
            <button className="rounded-full px-8 h-12 bg-primary text-primary-foreground">
              Search
            </button>
          </div>

        </div>
      </div>

      {/* Featured Marinas */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Featured Marinas</h2>
          <p className="text-muted-foreground mt-2">
            Swipe to explore available slips
          </p>
        </div>

        {/* Placeholder cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-xl border overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-muted relative">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">Marina Name</h3>
                  <p className="text-sm mt-1">City, State</p>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Slips available
                  </p>
                  <p className="text-2xl font-bold text-primary mt-1">
                    Contact for price
                  </p>
                </div>
                <button className="px-4 py-2 border rounded-md">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

  );
}
