"use client";

import {
  Bar,
  BarChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "NRMA", uv: 400 },
  { name: "AAMI", uv: 300 },
  { name: "Allianz", uv: 300 },
  { name: "Youi", uv: 200 },
  { name: "BD", uv: 278 },
  { name: "Suncorp", uv: 189 },
  { name: "RACV", uv: 189 },
  { name: "Other", uv: 189 },
];

const RechartsComponent = () => {
  return (
    <div className="pt-10 md:pt-28 flex flex-col gap-4 md:gap-16 md:pb-28">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl lg:text-[40px] font-semibold">
          Insurer <span className="text-brand">Insights</span>
        </h2>
        <p className="default-list-text max-w-2xl">
          Most asked-about insurers (last 30 days). Based on Claimly submissions.
        </p>
      </div>

      <div className="w-full h-96 md:h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 30, right: 0, left: 0, bottom: 25 }}
            barCategoryGap="10%"
            barGap={0}
           
          >
            <XAxis
              dataKey="name"
              padding={{ left: 0, right: 0 }} 
              tick={{
                fontSize: 14,
                fontWeight: 700,
                fill: "#000",
              }}
              axisLine={{ stroke: "#2563EB" }}
            />

            <Tooltip cursor={false} />

            <Bar
              dataKey="uv"
              fill="#2563EB"
              radius={[8, 8, 0, 0]}
              activeBar={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RechartsComponent;
