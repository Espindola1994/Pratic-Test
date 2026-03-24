"use client";

import React from "react";

interface DiagramProps {
  hideLabels?: boolean;
  hideLines?: boolean;
}

export function DiagramElectricalFiber({ hideLabels = false, hideLines = false }: DiagramProps) {
  const bgFill = "#ffffff";
  const strokeColor = "#334155";
  const textColor = hideLabels ? "transparent" : "#1e293b";

  // Colors based on requested legend
  const highVoltage = hideLines ? "transparent" : "#ef4444"; // Red
  const lowVoltage = hideLines ? "transparent" : "#22c55e"; // Green
  const fiberOptic = hideLines ? "transparent" : "#3b82f6"; // Blue
  const comando = hideLines ? "transparent" : "#ef4444"; // Dashed red

  return (
    <div className="w-full bg-white p-4 sm:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col items-center overflow-x-auto">
      <div className="min-w-[900px] max-w-full">
        <h3 className="text-center font-bold text-xl mb-6 tracking-wider text-slate-800">DIAGRAMA DE BLOCOS – ELÉTRICA E FIBRA ÓPTICA</h3>
        
        <svg viewBox="0 0 1000 700" className="w-full h-auto bg-slate-50 border border-slate-200 rounded-lg">
          
          <defs>
            <marker id="arrowHV" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill={highVoltage} />
            </marker>
            <marker id="arrowLV" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill={lowVoltage} />
            </marker>
            <marker id="arrowFO" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill={fiberOptic} />
            </marker>
            <marker id="arrowCMD" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill={comando} />
            </marker>
          </defs>

          {/* BACKGROUND AREAS */}
          
          {/* CONTROL */}
          <rect x="150" y="50" width="250" height="260" fill="transparent" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />
          <text x="275" y="40" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14" fillOpacity="0.5">CONTROL</text>
          
          {/* LARS */}
          <rect x="550" y="50" width="250" height="260" fill="transparent" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />
          <text x="675" y="40" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14" fillOpacity="0.5">LARS</text>

          {/* TMS */}
          <rect x="550" y="380" width="250" height="300" fill="transparent" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />
          <text x="675" y="370" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14" fillOpacity="0.5">TMS</text>

          {/* ROV */}
          <rect x="150" y="380" width="250" height="300" fill="transparent" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />
          <text x="275" y="370" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14" fillOpacity="0.5">ROV</text>

          {/* SURFACE / SUBSEA DIVIDER */}
          <line x1="20" y1="340" x2="980" y2="340" stroke={strokeColor} strokeWidth="3" opacity="0.4" />
          <text x="50" y="330" fill={textColor} fontWeight="bold" fontSize="14" opacity="0.6">SURFACE</text>
          <text x="50" y="360" fill={textColor} fontWeight="bold" fontSize="14" opacity="0.6">SUBSEA</text>

          {/* 
            ========== SURFACE BLOCKS ========== 
          */}
          {/* EXTERNAL TEXTS */}
          <text x="140" y="100" textAnchor="end" fill={textColor} fontSize="12" fontWeight="bold">Vessel</text>
          <text x="140" y="115" textAnchor="end" fill={textColor} fontSize="12">440v</text>
          <text x="140" y="130" textAnchor="end" fill={textColor} fontSize="12">3Ø</text>
          <text x="140" y="145" textAnchor="end" fill={textColor} fontSize="12">60Hz</text>

          {/* CONTROL BLOCKS */}
          <rect x="170" y="90" width="80" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="210" y="120" textAnchor="middle" fill={textColor} fontWeight="bold">PDU</text>

          <rect x="170" y="200" width="80" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="210" y="230" textAnchor="middle" fill={textColor} fontWeight="bold">OCU</text>

          <rect x="290" y="90" width="90" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="335" y="115" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="12">TRAFO /</text>
          <text x="335" y="130" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="12">HVTU</text>

          <rect x="290" y="200" width="90" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="335" y="230" textAnchor="middle" fill={textColor} fontWeight="bold">HVJB</text>

          {/* CONTROL LINES */}
          <path d="M 210 140 L 210 200" stroke={comando} strokeWidth="2" strokeDasharray="4,4" fill="none" markerEnd="url(#arrowCMD)" />
          <path d="M 250 115 L 290 115" stroke={lowVoltage} strokeWidth="2" fill="none" markerEnd="url(#arrowLV)" />
          <path d="M 335 140 L 335 200" stroke={highVoltage} strokeWidth="3" fill="none" markerEnd="url(#arrowHV)" />
          <path d="M 250 225 L 290 225" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />

          {/* LARS BLOCKS */}
          <rect x="580" y="90" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="610" y="120" textAnchor="middle" fill={textColor} fontWeight="bold">FJB</text>

          <rect x="680" y="90" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="710" y="120" textAnchor="middle" fill={textColor} fontWeight="bold">SR</text>

          <rect x="680" y="200" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="710" y="230" textAnchor="middle" fill={textColor} fontWeight="bold">RJB</text>

          <rect x="580" y="200" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="610" y="230" textAnchor="middle" fill={textColor} fontWeight="bold">HPU</text>

          {/* LARS LINES */}
          <path d="M 380 225 L 480 225 L 480 115 L 580 115" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />
          <path d="M 380 215 L 490 215 L 490 105 L 580 105" stroke={highVoltage} strokeWidth="3" fill="none" markerEnd="url(#arrowHV)" />
          <text x="480" y="90" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="bold">DECK CABLE</text>

          {/* FJB -> SR -> RJB */}
          <path d="M 640 105 L 680 105" stroke={highVoltage} strokeWidth="3" fill="none" markerEnd="url(#arrowHV)" />
          <path d="M 640 115 L 680 115" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />

          <path d="M 710 140 L 710 200" stroke={highVoltage} strokeWidth="3" fill="none" markerEnd="url(#arrowHV)" />
          <path d="M 720 140 L 720 200" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />

          <path d="M 680 225 L 640 225" stroke={highVoltage} strokeWidth="3" fill="none" markerEnd="url(#arrowHV)" />

          <text x="820" y="200" textAnchor="start" fill={textColor} fontSize="12" fontWeight="bold">Vessel or PDU</text>
          <text x="820" y="215" textAnchor="start" fill={textColor} fontSize="12">220v/440v</text>

          {/* CABO ARMADO (Umbilical) */}
          <path d="M 715 250 L 715 340" stroke={highVoltage} strokeWidth="3" fill="none" />
          <path d="M 705 250 L 705 340" stroke={fiberOptic} strokeWidth="2" fill="none" />
          <text x="730" y="295" textAnchor="start" fill={textColor} fontSize="12" fontWeight="bold">CABO ARMADO</text>
          <text x="730" y="310" textAnchor="start" fill={textColor} fontSize="12">(Umbilical)</text>

          {/* 
            ========== SUBSEA BLOCKS ========== 
          */}
          {/* UMBILICAL CONTINUES INTO TMS */}
          <path d="M 715 340 L 715 480" stroke={highVoltage} strokeWidth="3" fill="none" markerEnd="url(#arrowHV)" />
          <path d="M 705 340 L 705 480" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />

          {/* TMS BLOCKS */}
          <rect x="680" y="480" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="710" y="510" textAnchor="middle" fill={textColor} fontWeight="bold">FJB</text>

          <rect x="580" y="480" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="610" y="510" textAnchor="middle" fill={textColor} fontWeight="bold">SR</text>

          <rect x="680" y="580" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="710" y="610" textAnchor="middle" fill={textColor} fontWeight="bold">TRAFO</text>

          <rect x="580" y="580" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="610" y="610" textAnchor="middle" fill={textColor} fontWeight="bold">RJB</text>

          <rect x="760" y="580" width="60" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="790" y="610" textAnchor="middle" fill={textColor} fontWeight="bold">INST.</text>

          {/* TMS LINES */}
          <path d="M 680 500 L 640 500" stroke={highVoltage} strokeWidth="3" fill="none" markerEnd="url(#arrowHV)" />
          <path d="M 680 510 L 640 510" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />

          <path d="M 610 530 L 610 580" stroke={highVoltage} strokeWidth="3" fill="none" markerEnd="url(#arrowHV)" />
          <path d="M 620 530 L 620 580" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />

          <path d="M 640 595 L 680 595" stroke={lowVoltage} strokeWidth="2" fill="none" markerEnd="url(#arrowLV)" />
          <path d="M 740 605 L 760 605" stroke={lowVoltage} strokeWidth="2" fill="none" markerEnd="url(#arrowLV)" />
          <path d="M 640 615 L 760 615" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />

          {/* TETHER: From RJB to ROV TETHER TERM BOX */}
          <path d="M 580 595 L 480 605 L 480 435 L 340 435" stroke={highVoltage} strokeWidth="3" fill="none" markerEnd="url(#arrowHV)" />
          <path d="M 580 605 L 490 615 L 490 445 L 340 445" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />
          
          <text x="430" y="420" textAnchor="start" fill={textColor} fontSize="12" fontWeight="bold">TETHER</text>

          {/* ROV BLOCKS */}
          <rect x="230" y="415" width="110" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="285" y="435" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="12">TETHER</text>
          <text x="285" y="450" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="12">TERM BOX</text>

          <rect x="230" y="515" width="80" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="270" y="545" textAnchor="middle" fill={textColor} fontWeight="bold">TRAFO</text>

          <rect x="230" y="615" width="80" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="270" y="645" textAnchor="middle" fill={textColor} fontWeight="bold">HPU</text>

          <rect x="120" y="515" width="80" height="50" fill={bgFill} stroke={strokeColor} strokeWidth="2" />
          <text x="160" y="545" textAnchor="middle" fill={textColor} fontWeight="bold">INST.</text>

          {/* ROV LINES */}
          <path d="M 270 465 L 270 515" stroke={highVoltage} strokeWidth="3" fill="none" markerEnd="url(#arrowHV)" />
          <path d="M 250 465 L 250 515" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />
          
          <path d="M 270 565 L 270 615" stroke={lowVoltage} strokeWidth="2" fill="none" markerEnd="url(#arrowLV)" />
          
          <path d="M 230 525 L 200 525" stroke={lowVoltage} strokeWidth="2" fill="none" markerEnd="url(#arrowLV)" />
          <path d="M 230 545 L 200 545" stroke={fiberOptic} strokeWidth="2" fill="none" markerEnd="url(#arrowFO)" />


          {/* 
            ========== LEGENDA ========== 
          */}
          <rect x="830" y="450" width="160" height="230" fill={bgFill} stroke={strokeColor} strokeWidth="1" />
          <text x="910" y="475" textAnchor="middle" fill={textColor} fontWeight="bold" fontSize="14">LEGENDA</text>
          
          <line x1="840" y1="495" x2="880" y2="495" stroke={highVoltage} strokeWidth="3" markerEnd="url(#arrowHV)"/>
          <text x="890" y="499" fill={textColor} fontSize="10" fontWeight="bold">HIGH VOLTAGE</text>

          <line x1="840" y1="525" x2="880" y2="525" stroke={lowVoltage} strokeWidth="2" markerEnd="url(#arrowLV)"/>
          <text x="890" y="529" fill={textColor} fontSize="10" fontWeight="bold">LOW VOLTAGE</text>

          <line x1="840" y1="555" x2="880" y2="555" stroke={fiberOptic} strokeWidth="2" markerEnd="url(#arrowFO)"/>
          <text x="890" y="559" fill={textColor} fontSize="10" fontWeight="bold">FIBRA ÓPTICA</text>

          <line x1="840" y1="585" x2="880" y2="585" stroke={comando} strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowCMD)"/>
          <text x="890" y="589" fill={textColor} fontSize="10" fontWeight="bold">COMANDO/CONTATOR</text>
        </svg>
      </div>
    </div>
  );
}
