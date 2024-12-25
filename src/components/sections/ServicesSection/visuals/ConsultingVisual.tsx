import React, { useState } from 'react';

const ConsultingVisual = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const data = [
    { month: 'Jan', efficiency: 20, cost: 15 },
    { month: 'Feb', efficiency: 25, cost: 14 },
    { month: 'Mar', efficiency: 30, cost: 13 },
    { month: 'Apr', efficiency: 35, cost: 12 },
    { month: 'May', efficiency: 42, cost: 11 },
    { month: 'Jun', efficiency: 46, cost: 11 }
  ];

  const maxEfficiency = Math.max(...data.map(d => d.efficiency));
  
  return (
    <div 
      className="h-[280px] flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between mb-8">
        <div className="flex items-center gap-2">
          <span className="text-[#1DD3B0] text-sm">Efficiency</span>
          <span className="text-[#1DD3B0] text-sm">+46%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-white/70 text-sm">Cost</span>
          <span className="text-white/70 text-sm">-11%</span>
        </div>
      </div>
      
      <div className="relative flex-1">
        {/* Horizontal grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-t border-white/5" />
          ))}
        </div>
        
        {/* Label boxes */}
        <div className="absolute inset-0 z-10">
          {/* Efficiency box */}
          <div 
            className="absolute px-3 py-1.5 rounded bg-[#0D0D0D]/40 text-sm text-white/90 border border-zinc-800 transition-all duration-500 ease-in-out"
            style={{
              left: isHovered ? '65%' : '28%',
              top: isHovered ? 'calc(30% - 60px)' : 'calc(30% - 40px)', // Move up by 20px on hover
            }}
          >
            Efficiency{' '}
            <span className="bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
              +64%
            </span>
          </div>
          
          {/* Cost box */}
          <div 
            className="absolute px-3 py-1.5 rounded bg-[#0D0D0D]/40 text-sm text-white/90 border border-zinc-800 transition-all duration-500 ease-in-out"
            style={{
              left: isHovered ? '15%' : '45%',
              top: isHovered ? 'calc(50% - 20px)' : 'calc(50% - 40px)', // Move down by 20px on hover
            }}
          >
            Cost{' '}
            <span className="bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
              -18%
            </span>
          </div>
        </div>
        
        {/* Data points */}
        <div className="relative h-full flex items-end justify-between">
          {data.map((point, i) => (
            <div 
              key={i} 
              className="relative flex flex-col items-center"
              style={{
                height: `${(point.efficiency / maxEfficiency) * 100}%`
              }}
            >
              {/* Glowing point */}
              <div className="w-3 h-3 rounded-full bg-[#1DD3B0] shadow-[0_0_15px_rgba(29,211,176,0.5)] blur-[2px]" />
              
              {/* Month label box */}
              <div className="absolute bottom-0 -translate-y-2 px-2 py-1 rounded bg-[#141414] text-xs text-white/50">
                {point.month}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsultingVisual;