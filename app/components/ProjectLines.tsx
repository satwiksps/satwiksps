export default function ProjectLines() {
  return (
    <div className="w-full border-b">
      <div className="innerContainer h-5 relative">
        <div className="pointer-events-none absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>
      </div>
    </div>
  );
}
