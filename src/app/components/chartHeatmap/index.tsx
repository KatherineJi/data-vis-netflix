'use client';

import React, { useEffect, useRef } from 'react';
import dataJson from '../../../json/life-expectancy-table.json';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BrushComponent,
  MarkLineComponent,
  MarkAreaComponent,
  MarkPointComponent
} from 'echarts/components';
import { ScatterChart, HeatmapChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BrushComponent,
  MarkLineComponent,
  MarkAreaComponent,
  MarkPointComponent,
  ScatterChart,
  HeatmapChart,
  CanvasRenderer,
  UniversalTransition
]);

const ChatDistribution: React.FC = () => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any | null>(null);

  useEffect(() => {
    if (domRef?.current) {
      console.log(111);
      chartRef.current = echarts.init(domRef.current);

      const types = [
        'Basic-Female', 'Basic-Male', 'Premium-Female', 'Premium-Male', 'Standard-Female', 'Standard-Male'
      ];
      // prettier-ignore
      const time = [
        '2022-01', '2022-02', '2022-03',
        '2022-04', '2022-05', '2022-06',
        '2022-07', '2022-08', '2022-09',
        '2022-10', '2022-11', '2022-12'
      ];
      // prettier-ignore
      const data = [[0, 0, 1], [0, 1, 0], [0, 2, 5], [0, 3, 3], [0, 4, 11], [0, 5, 54], [0, 6, 99], [0, 7, 80], [0, 8, 71], [0, 9, 114], [0, 10, 60], [0, 11, 4], [1, 0, 3], [1, 1, 1], [1, 2, 1], [1, 3, 3], [1, 4, 3], [1, 5, 67], [1, 6, 93], [1, 7, 71], [1, 8, 72], [1, 9, 106], [1, 10, 54], [1, 11, 2], [2, 0, 2], [2, 1, 2], [2, 2, 1], [2, 3, 3], [2, 4, 9], [2, 5, 43], [2, 6, 79], [2, 7, 52], [2, 8, 57], [2, 9, 67], [2, 10, 55], [2, 11, 3], [3, 0, 0], [3, 1, 1], [3, 2, 0], [3, 3, 4], [3, 4, 6], [3, 5, 44], [3, 6, 73], [3, 7, 62], [3, 8, 64], [3, 9, 73], [3, 10, 47], [3, 11, 3], [4, 0, 0], [4, 1, 0], [4, 2, 3], [4, 3, 2], [4, 4, 5], [4, 5, 43], [4, 6, 67], [4, 7, 55], [4, 8, 51], [4, 9, 79], [4, 10, 42], [4, 11, 8], [5, 0, 2], [5, 1, 1], [5, 2, 3], [5, 3, 4], [5, 4, 6], [5, 5, 44], [5, 6, 70], [5, 7, 61], [5, 8, 52], [5, 9, 82], [5, 10, 38], [5, 11, 2]]
        .map(function (item) {
          return [item[1], item[0], item[2] || '-'];
        });
      const option = {
        tooltip: {
          position: 'top'
        },
        grid: {
          height: '50%',
          top: '10%'
        },
        xAxis: {
          type: 'category',
          name: 'Time',
          data: time,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          name: 'Subscription Type - Gender',
          data: types,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 10,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '15%'
        },
        series: [
          {
            name: 'Punch Card',
            type: 'heatmap',
            data: data,
            label: {
              show: true
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      chartRef.current.setOption(option);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }} ref={domRef}></div>
  );
};

export default ChatDistribution;
