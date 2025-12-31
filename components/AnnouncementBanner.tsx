export default function AnnouncementBanner() {
  return (
    <div className="bg-primary/10 border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <span className="h-4 w-4 text-primary">ℹ️</span>
          <p className="text-foreground text-center">
            <span className="font-semibold">Currently serving Texas only.</span>{" "}
            Expanding nationally in 2026!
          </p>
        </div>
      </div>
    </div>
  );
}
