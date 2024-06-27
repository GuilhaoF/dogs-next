'use client';

import React, { useEffect } from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
import { StatsData } from '../../actions/stats-get';

type GraphData = {
  x: string;
  y: number;
};

export default function ContaEstatisticas({ data }: { data: StatsData[] }) {
  const [graph, setGraph] = React.useState<GraphData[]>([]);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
    setGraph(graphData);
  }, [data]);

  return (
    <section className="grid grid-cols-2 gap-8 mb-8 animate-left">
      <div className="col-span-2 p-8 text-4xl shadow-lg rounded-md grid items-center">
        <p>Acessos: {total}</p>
      </div>
      <div className="shadow-lg rounded-md grid items-center">
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className="shadow-lg rounded-md grid items-center">
        <VictoryChart>
          <VictoryBar alignment="start" data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}