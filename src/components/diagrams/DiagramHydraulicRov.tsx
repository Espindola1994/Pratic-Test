import React from "react";
import { Smartphone } from "lucide-react";

interface DiagramProps {
  hideLabels?: boolean;
  hideLines?: boolean;
}

export function DiagramHydraulicRov({ hideLabels = false, hideLines = false }: DiagramProps) {
  // SVG drawing configuration
  const bgFill = "#ffffff";
  const strokeColor = "#334155";
  const lineRed = hideLines ? "transparent" : "#ef4444";
  const lineBlue = hideLines ? "transparent" : "#3b82f6";
  const textColor = hideLabels ? "transparent" : "#1e293b";

  return (
    <div className="w-full flex flex-col items-center">
      <div className="md:hidden w-full flex items-center justify-center p-3 mb-4 bg-amber-50 text-amber-800 rounded-xl border border-amber-200 text-sm font-semibold shadow-sm">
        <Smartphone className="w-4 h-4 mr-2 animate-pulse" /> 
        Para melhor visualização, coloque o celular na horizontal (deitado).
      </div>

      <div className="w-full bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center">
        <h3 className="text-center font-bold text-xl mb-6 tracking-wider text-slate-800 w-full">DIAGRAMA EM BLOCOS – HIDRÁULICA ROV</h3>
        <svg viewBox="0 0 1000 600" className="w-full h-auto bg-slate-50 border border-slate-200 rounded-lg" style={{ maxHeight: "80vh" }}>
          
          <defs>
            <marker id="arrowRed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill={lineRed} />
            </marker>
            <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill={lineBlue} />
            </marker>
          </defs>

          {/* Top Row: Manipulators, Tools, Thrusters */}
          <rect x="50" y="50" width="100" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="100" y="80" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14">7F / TITAN 4</text>
          {/* Compensator next to Titan 4 */}
          <circle cx="170" cy="75" r="15" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="170" y="80" textAnchor="middle" fill={textColor} fontSize="10" fontWeight="bold">CMP</text>

          <rect x="220" y="50" width="100" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="270" y="80" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14">5F / RIGM</text>

          <rect x="360" y="50" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="390" y="80" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14">LPT</text>

          <rect x="440" y="50" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="470" y="80" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14">UPT</text>

          <rect x="530" y="50" width="70" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="565" y="80" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14">TOOL</text>

          <rect x="620" y="50" width="70" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="655" y="80" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14">TOOL</text>

          <rect x="730" y="50" width="100" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="780" y="72" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="12">TRUSTERS</text>
          <text x="780" y="90" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="12">VERTICAIS</text>

          <rect x="850" y="50" width="100" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="900" y="72" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="12">TRUSTERS</text>
          <text x="900" y="90" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="12">HORIZONTAIS</text>

          {/* Middle Row: HCU1, HCU2, TCU */}
          <rect x="150" y="250" width="120" height="60" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="210" y="285" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="16">HCU 1</text>
          <circle cx="290" cy="280" r="15" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="290" y="284" textAnchor="middle" fill={textColor} fontSize="10" fontWeight="bold">CMP</text>

          <rect x="420" y="250" width="120" height="60" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="480" y="285" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="16">HCU 2</text>
          <circle cx="560" cy="280" r="15" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="560" y="284" textAnchor="middle" fill={textColor} fontSize="10" fontWeight="bold">CMP</text>

          <rect x="750" y="250" width="120" height="60" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="810" y="285" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="16">TCU</text>
          <circle cx="890" cy="280" r="15" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="890" y="284" textAnchor="middle" fill={textColor} fontSize="10" fontWeight="bold">CMP</text>

          {/* Bottom Row: HPU, JB */}
          <rect x="350" y="450" width="140" height="70" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="420" y="490" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="20">HPU</text>
          <circle cx="510" cy="485" r="15" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="510" y="489" textAnchor="middle" fill={textColor} fontSize="10" fontWeight="bold">CMP</text>

          <rect x="150" y="450" width="120" height="70" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="210" y="490" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="20">JB</text>
          <circle cx="290" cy="485" r="15" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="290" y="489" textAnchor="middle" fill={textColor} fontSize="10" fontWeight="bold">CMP</text>


          {/* 
            CONNECTIONS (ROUGH APPROXIMATIONS FOR MEMORIZATION) 
            Red = Pressure / High, Blue = Return / Low
          */}

          {/* HPU -> JB (Electric / signal) - lets make it a generic line */}
          <line x1="350" y1="485" x2="270" y2="485" stroke={strokeColor} strokeWidth="2" strokeDasharray="5,5" />

          {/* HPU to HCU1, HCU2, TCU (Red Pressure Lines) */}
          <path d="M 420 450 L 420 380 L 210 380 L 210 310" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
          <path d="M 420 450 L 420 380 L 480 380 L 480 310" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
          <path d="M 420 450 L 420 380 L 810 380 L 810 310" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />

          {/* Returns to HPU (Blue Return Lines) */}
          <path d="M 190 310 L 190 360 L 400 360 L 400 450" stroke={lineBlue} strokeWidth="3" fill="none" markerEnd="url(#arrowBlue)" />
          <path d="M 460 310 L 460 360 L 400 360" stroke={lineBlue} strokeWidth="3" fill="none" />
          <path d="M 790 310 L 790 360 L 400 360" stroke={lineBlue} strokeWidth="3" fill="none" />

          {/* HCU 1 -> Titan 4, 5F, LPT */}
          <path d="M 210 250 L 210 180 L 100 180 L 100 100" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
          <path d="M 210 180 L 270 180 L 270 100" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
          <path d="M 210 180 L 390 180 L 390 100" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />

          {/* Titan 4, 5F, LPT -> Return to HCU 1 */}
          <path d="M 80 100 L 80 160 L 190 160 L 190 250" stroke={lineBlue} strokeWidth="3" fill="none" markerEnd="url(#arrowBlue)" />
          <path d="M 250 100 L 250 160 L 190 160" stroke={lineBlue} strokeWidth="3" fill="none" />
          <path d="M 370 100 L 370 160 L 190 160" stroke={lineBlue} strokeWidth="3" fill="none" />

          {/* HCU 2 -> UPT, TOOL, TOOL */}
          <path d="M 480 250 L 480 180 L 470 180 L 470 100" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
          <path d="M 480 180 L 565 180 L 565 100" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
          <path d="M 480 180 L 655 180 L 655 100" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />

          <path d="M 450 100 L 450 160 L 460 160 L 460 250" stroke={lineBlue} strokeWidth="3" fill="none" markerEnd="url(#arrowBlue)" />
          <path d="M 545 100 L 545 160 L 460 160" stroke={lineBlue} strokeWidth="3" fill="none" />
          <path d="M 635 100 L 635 160 L 460 160" stroke={lineBlue} strokeWidth="3" fill="none" />

          {/* TCU -> Thrusters */}
          <path d="M 810 250 L 810 180 L 780 180 L 780 100" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
          <path d="M 810 180 L 900 180 L 900 100" stroke={lineRed} strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />

          <path d="M 760 100 L 760 160 L 790 160 L 790 250" stroke={lineBlue} strokeWidth="3" fill="none" markerEnd="url(#arrowBlue)" />
          <path d="M 880 100 L 880 160 L 790 160" stroke={lineBlue} strokeWidth="3" fill="none" />

        </svg>
      </div>
    </div>
  );
}
