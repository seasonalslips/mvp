export default function Hero() {
  return (
  <section className="relative min-h-screen flex flex-col">
  {/* Header stays above if you already render it elsewhere */}

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

      {/* Search Card */}
      <div className="bg-card border rounded-2xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">

          <div className="flex-1 relative">
            <div className="flex items-center gap-3 border rounded-full px-4 h-12">
              <span className="w-5 h-5 text-muted-foreground">📍</span>
              <input
                placeholder="Search by marina name or location..."
                className="border-0 focus:outline-none w-full"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <select className="w-full sm:w-[160px] rounded-full h-12 border px-4">
              <option>All States</option>
            </select>

            <button className="rounded-full px-8 h-12 bg-primary text-primary-foreground flex items-center gap-2">
              🔍 <span className="hidden sm:inline">Search</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
            <div className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400"
                alt="Marina"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">Reserve Marina</h3>
                <p className="text-sm">Spicewood, TX</p>
              </div>
            </div>

            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Slips available</p>
                <p className="font-bold text-primary text-2xl">$450</p>
                <p className="text-xs text-muted-foreground">per month</p>
              </div>
              <button className="border rounded-md px-4 py-2">
                View
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


  );
}
