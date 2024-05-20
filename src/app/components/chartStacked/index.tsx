'use client';

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import data from '../../../json/stacked-data.json';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

const ChatStacked: React.FC = () => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any | null>(null);

  useEffect(() => {
    if (domRef?.current) {
      chartRef.current = echarts.init(domRef.current);

      const option = {
        color: ['rgb(128, 255, 165)', 'rgb(1, 191, 236)', 'rgb(255, 134, 133)', 'rgb(117, 112, 179)', 'rgb(254, 224, 139)', 'rgb(230, 97, 1)', 'rgb(94, 60, 153)', 'rgb(255, 217, 102)'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['Comedy', 'Kid&Children', 'Horror&Thriller', 'Romance', 'Drama', 'Documentary', 'Reality', 'Sci-Fi']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12', '2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09']
          }
        ],
        yAxis: [
          {
            type: 'value',
            max: 100,
          }
        ],
        series: data.map((item) => {
          return {
            name: item.type,
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: item.color[0]
                },
                {
                  offset: 1,
                  color: item.color[1]
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: item.data
          };
        })
      };

      chartRef.current.setOption(option);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }} ref={domRef}></div>
  );
};

export default ChatStacked;