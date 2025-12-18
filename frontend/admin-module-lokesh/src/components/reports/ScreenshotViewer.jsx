import React, { useState } from "react";
import { Monitor, Clock, MousePointer } from "lucide-react";
import { SCREENSHOTS } from "../../data/screenshotMockData";
import ScreenshotCard from "./ScreenshotCard";
import ScreenshotDetailsModal from "./ScreenshotDetailsModal";
// App logos
import vscodeLogo from "../../assets/app-logos/vscode.svg";
import stackoverflowLogo from "../../assets/app-logos/stackoverflow.svg";
import slackLogo from "../../assets/app-logos/slack.svg";
import terminalLogo from "../../assets/app-logos/terminal.svg";
import figmaLogo from "../../assets/app-logos/figma.svg";
import idleLogo from "../../assets/app-logos/idle.svg";

// Logo map
const APP_LOGO_MAP = {
  vscode: vscodeLogo,
  stackoverflow: stackoverflowLogo,
  slack: slackLogo,
  terminal: terminalLogo,
  figma: figmaLogo,
  idle: idleLogo,
};

const ScreenshotViewer = ({ screenshots }) => {
  const [selectedShot, setSelectedShot] = useState(null);

return (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg shadow-black/20">
    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold text-slate-200">
        Screenshot Timeline
      </h3>
      <span className="text-sm text-slate-400">
        Captured at intervals
      </span>
    </div>

    {/* Screenshot Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {SCREENSHOTS.map((shot) => (
        <ScreenshotCard
  key={shot.id}
  shot={shot}
  onClick={() => setSelectedShot(shot)}
/>

      ))}
    </div>

    {/* Modal */}
    <ScreenshotDetailsModal
      shot={selectedShot}
      onClose={() => setSelectedShot(null)}
    />
  </div>
);
}
export default ScreenshotViewer;