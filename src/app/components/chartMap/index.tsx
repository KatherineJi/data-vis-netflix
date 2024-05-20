'use client';

import React, { useEffect, useRef } from 'react';
import worldJson from '../../../json/geo-world.json';
import * as echarts from 'echarts/core';
import { VisualMapComponent, GeoComponent } from 'echarts/components';
import { MapChart, BarChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { GridComponent } from 'echarts/components';

echarts.use([
  VisualMapComponent,
  GeoComponent,
  MapChart,
  CanvasRenderer,
  UniversalTransition,
  GridComponent,
  BarChart
]);

const colorSet = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'];

function getColor(value: number) {

  const index = Math.floor((value - 0) / 4000 * (colorSet.length + 1));
  return colorSet[index] || '#a50026';
}

const ChartMap: React.FC = () => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any | null>(null);

  useEffect(() => {
    if (domRef?.current) {
      chartRef.current = echarts.init(domRef.current);
      window.addEventListener('resize', function () {
        chartRef.current.resize();
      });

      echarts.registerMap('World', (worldJson as any), {
        Alaska: {
          // 把阿拉斯加移到美国主大陆左下方
          left: -131,
          top: 25,
          width: 15
        },
        Hawaii: {
          left: -110,
          top: 28,
          width: 5
        },
        'Puerto Rico': {
          // 波多黎各
          left: -76,
          top: 26,
          width: 2
        }
      });

      let data = [
        { name: 'United States', value: 3690 },
        { name: 'India', value: 1046 },
        { name: 'United Kingdom', value: 806 },
        { name: 'Canada', value: 445 },
        { name: 'France', value: 393 },
        { name: 'Japan', value: 318 },
        { name: 'Spain', value: 232 },
        { name: 'Korean', value: 231 },
        { name: 'Germany', value: 226 },
        { name: 'Mexico', value: 169 },
        { name: 'Australia', value: 166 },
        { name: 'China', value: 162 },
        { name: 'Italy', value: 152 },
        { name: 'Brazil', value: 152 },
        { name: 'Turkey', value: 108 },
        { name: 'Egypt', value: 106 },
        { name: 'Argentina', value: 106 },
        { name: 'Indonesia', value: 92 },
        { name: 'Thailand', value: 80 },
        { name: 'Philippines', value: 80 },
        { name: 'Taiwan', value: 80 },
        { name: 'Colombia', value: 79 },
        { name: 'Russia', value: 79 },
        { name: 'South Africa', value: 77 },
        { name: 'Nigeria', value: 75 },
        { name: 'Netherlands', value: 67 },
        { name: 'Poland', value: 63 },
        { name: 'Singapore', value: 62 },
        { name: 'Belgium', value: 58 },
        { name: 'Sweden', value: 57 },
        { name: 'Hong Kong', value: 54 },
        { name: 'Ireland', value: 51 },
        { name: 'Denmark', value: 49 },
        { name: 'New Zealand', value: 46 },
        { name: 'Norway', value: 44 },
        { name: 'Chile', value: 42 },
        { name: 'Switzerland', value: 40 },
        { name: 'Malaysia', value: 39 },
        { name: 'Israel', value: 39 },
        { name: 'United Arab Emirates', value: 37 },
        { name: 'Czech Republic', value: 32 },
        { name: 'Pakistan', value: 30 },
        { name: 'Hungary', value: 29 },
        { name: 'Saudi Arabia', value: 27 },
        { name: 'Ukraine', value: 27 },
        { name: 'Greece', value: 27 },
        { name: 'Portugal', value: 25 },
        { name: 'Austria', value: 24 },
        { name: 'Lebanon', value: 23 },
        { name: 'Romania', value: 22 },
        { name: 'Bangladesh', value: 20 },
        { name: 'Peru', value: 19 },
        { name: 'Finland', value: 18 },
        { name: 'Vietnam', value: 18 },
        { name: 'Kazakhstan', value: 18 },
        { name: 'Bulgaria', value: 17 },
        { name: 'Morocco', value: 16 },
        { name: 'Qatar', value: 15 },
        { name: 'Kenya', value: 14 },
        { name: 'Jordan', value: 14 },
        { name: 'Serbia', value: 14 },
        { name: 'Iceland', value: 13 },
        { name: 'Uruguay', value: 12 },
        { name: 'Croatia', value: 12 },
        { name: 'Slovakia', value: 11 },
        { name: 'Ghana', value: 11 },
        { name: 'Lithuania', value: 11 },
        { name: 'Puerto Rico', value: 10 },
        { name: 'Luxembourg', value: 9 },
        { name: 'Slovenia', value: 9 },
        { name: 'Latvia', value: 9 },
        { name: 'Zimbabwe', value: 9 },
        { name: 'Dominican Republic', value: 8 },
        { name: 'Paraguay', value: 8 },
        { name: 'Estonia', value: 8 },
        { name: 'Cyprus', value: 7 },
        { name: 'Panama', value: 6 },
        { name: 'Georgia', value: 6 },
        { name: 'Kuwait', value: 6 },
        { name: 'Costa Rica', value: 6 },
        { name: 'Nepal', value: 5 },
        { name: 'Albania', value: 5 },
        { name: 'Sri Lanka', value: 5 },
        { name: 'Jamaica', value: 4 },
        { name: 'Guatemala', value: 4 },
        { name: 'Bosnia and Herzegovina', value: 4 },
        { name: 'Azerbaijan', value: 4 },
        { name: 'Uganda', value: 4 },
        { name: 'Oman', value: 4 },
        { name: 'Belarus', value: 4 },
        { name: 'Macedonia', value: 3 },
        { name: 'Senegal', value: 3 },
        { name: 'Tunisia', value: 3 },
        { name: 'Venezuela', value: 3 },
        { name: 'Bolivia', value: 3 },
        { name: 'Cambodia', value: 3 },
        { name: 'Honduras', value: 3 },
        { name: 'Namibia', value: 3 },
        { name: 'Angola', value: 3 },
        { name: 'Bermuda', value: 3 },
        { name: 'Malta', value: 2 },
        { name: 'Iraq', value: 2 },
        { name: 'Trinidad and Tobago', value: 2 },
        { name: 'Mozambique', value: 2 },
        { name: 'Botswana', value: 2 },
        { name: 'Nicaragua', value: 2 },
        { name: 'Afghanistan', value: 2 },
        { name: 'Somalia', value: 2 },
        { name: 'El Salvador', value: 2 },
        { name: 'Sudan', value: 2 },
        { name: 'Myanmar', value: 1 },
        { name: 'Moldova', value: 1 },
        { name: 'Syria', value: 1 },
        { name: 'Laos', value: 1 },
        { name: 'Bhutan', value: 1 },
        { name: 'Samoa', value: 1 },
        { name: 'Andorra', value: 1 },
        { name: 'Burkina Faso', value: 1 },
        { name: 'Papua New Guinea', value: 1 },
        { name: 'Benin', value: 1 },
        { name: 'Malawi', value: 1 },
        { name: 'Liberia', value: 1 },
        { name: 'Cape Verde', value: 1 },
        { name: 'Tajikistan', value: 1 },
        { name: 'Ecuador', value: 1 },
        { name: 'Armenia', value: 1 },
        { name: 'Mongolia', value: 1 },
        { name: 'Bahamas', value: 1 },
        { name: 'Montenegro', value: 1 }
      ];
      data.sort(function (a, b) {
        return a.value - b.value;
      });

      const mapOption = {
        visualMap: {
          left: 'right',
          min: 0,
          max: 4000,
          inRange: {
            color: colorSet,
          },
          text: ['High', 'Low'],
          calculable: true
        },
        series: [
          {
            id: 'population',
            type: 'map',
            roam: true,
            map: 'World',
            animationDurationUpdate: 2000,
            universalTransition: true,
            data: data
          }
        ]
      };
      const barOption = {
        xAxis: {
          type: 'value',
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            rotate: 30,
          },
          data: data.map(function (item) {
            return item.name;
          })
        },
        animationDurationUpdate: 2000,
        series: {
          type: 'bar',
          id: 'population',
          data: data.map(item => ({
            value: item.value,
            itemStyle: { color: getColor(item.value) }
          })),
          universalTransition: true
        }
      };

      let currentOption: (typeof mapOption | typeof barOption) = mapOption;
      chartRef.current.setOption(mapOption);
      setInterval(function () {
        currentOption = currentOption === mapOption ? barOption : mapOption;
        chartRef.current.setOption(currentOption, true);
      }, 9000);
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }} ref={domRef}></div>
  );
};

export default ChartMap;