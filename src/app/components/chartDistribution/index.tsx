'use client';

import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import tvShowData from '../../../json/tv-show.json';
import movieData from '../../../json/movie.json';
import {
  TooltipComponent,
  GridComponent,
  VisualMapComponent
} from 'echarts/components';
import { HeatmapChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  HeatmapChart,
  CanvasRenderer
]);

const ChatDistribution: React.FC = () => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any | null>(null);

  useEffect(() => {
    if (domRef?.current) {
      console.log(111);
      chartRef.current = echarts.init(domRef.current);

      const option = {
        // title: {
        //   text: 'Movie and TV Show height and weight distribution',
        //   subtext: 'Data from: Heinz 2003'
        // },
        grid: {
          left: '3%',
          right: '7%',
          bottom: '7%',
          containLabel: true
        },
        tooltip: {
          // trigger: 'axis',
          showDelay: 0,
          formatter: function (params: any) {
            if (params.value.length > 1) {
              console.log('params1', params);
              return (
                (params.value[2] || '') +
                ' :<br/>Votes:' +
                params.value[0] +
                '<br/>Score:' +
                params.value[1]
                
              );
            } else {
              console.log('params2', params);
              return (
                params.seriesName +
                ' :<br/>' +
                params.name +
                ' : ' +
                params.value
              );
            }
          },
          axisPointer: {
            show: true,
            type: 'cross',
            lineStyle: {
              type: 'dashed',
              width: 1
            }
          }
        },
        // toolbox: {
        //   feature: {
        //     dataZoom: {},
        //     brush: {
        //       type: ['rect', 'polygon', 'clear']
        //     }
        //   }
        // },
        brush: {},
        legend: {
          data: ['TV Show', 'Movie'],
          left: 'center',
          bottom: 10
        },
        xAxis: [
          {
            type: 'value',
            scale: true,
            axisLabel: {
              formatter: '{value}'
            },
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            axisLabel: {
              formatter: '{value}'
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            name: 'TV Show',
            type: 'scatter',
            symbolSize: 2,
            emphasis: {
              focus: 'series'
            },
            // prettier-ignore
            data: tvShowData,
            markArea: {
              silent: true,
              itemStyle: {
                color: 'transparent',
                borderWidth: 1,
                borderType: 'dashed'
              },
              data: [
                [
                  {
                    name: 'TV Show Data Range',
                    xAxis: 'min',
                    yAxis: 'min'
                  },
                  {
                    xAxis: 'max',
                    yAxis: 'max'
                  }
                ]
              ]
            },
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              lineStyle: {
                type: 'solid'
              },
              data: [{ type: 'average', name: 'AVG', valueIndex: 0 }, { type: 'average', name: 'AVG', valueIndex: 1 }]
            }
          },
          {
            name: 'Movie',
            type: 'scatter',
            symbolSize: 2,
            emphasis: {
              focus: 'series'
            },
            // prettier-ignore
            data: movieData,
            markArea: {
              silent: true,
              itemStyle: {
                color: 'transparent',
                borderWidth: 1,
                borderType: 'dashed'
              },
              data: [
                [
                  {
                    name: 'Movie Data Range',
                    xAxis: 'min',
                    yAxis: 'min'
                  },
                  {
                    xAxis: 'max',
                    yAxis: 'max'
                  }
                ]
              ]
            },
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ]
            },
            markLine: {
              lineStyle: {
                type: 'solid'
              },
              data: [{ type: 'average', name: 'AVG', valueIndex: 0 }, { type: 'average', name: 'AVG', valueIndex: 1 }]
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