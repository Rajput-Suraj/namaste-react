function Shimmer() {
  return (
    <div className="border border-slate-300 rounded-md p-4 max-w-sm w-64 mx-auto">
      <div className="animate-pulse flex space-x-4"></div>
      <div class="rounded-md bg-slate-300 h-24 w-full mb-2"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-5 bg-slate-300 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-slate-300 rounded col-span-2"></div>
            <div class="h-2 bg-slate-300 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
