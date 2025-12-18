const ScreenshotCard = ({ shot, onClick }) => {
  const lowActivity = shot.activity < 60;

  return (
    <div
      onClick={onClick}
      className="
        bg-slate-900 border border-slate-800 rounded-lg overflow-hidden
        cursor-pointer hover:ring-2 hover:ring-blue-500 transition
      "
    >
      <img
        src={shot.imageUrl || shot.img}
        alt="Screenshot"
        className="w-full h-40 object-cover"
      />

      <div className="p-3 text-sm text-slate-200 space-y-2">
        <div className="flex justify-between items-center">
          <span>{shot.capturedAt || shot.time}</span>
          <span
            className={`px-2 py-0.5 rounded text-xs ${
              lowActivity
                ? "bg-red-500/20 text-red-400"
                : "bg-green-500/20 text-green-400"
            }`}
          >
            {shot.activity}%
          </span>
        </div>

        <div className="text-xs text-slate-400 truncate">
          {shot.app?.name || shot.app}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotCard;
