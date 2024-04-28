'use client';

import React, { useEffect, useRef } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
// import * as echarts from 'echarts';
import dataJson from '../../../json/line-data.json';
import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  DatasetComponentOption,
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  TransformComponent,
} from 'echarts/components';
import { LineChart, LineSeriesOption, BarSeriesOption } from 'echarts/charts';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  LineChart,
  CanvasRenderer,
  LabelLayout,
  UniversalTransition
]);

const ChatLine: React.FC = () => {
  const domRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any | null>(null);

  useEffect(() => {
    if (domRef?.current) {
      console.log(111);
      chartRef.current = echarts.init(domRef.current);

      const types = [
        'Comedy',
        'Kid&Children',
        'Horror&Thriller',
        'Romance',
        'Drama',
        'Documentary',
        'Reality',
        'Sci-Fi'
      ];
      const datasetWithFilters: DatasetComponentOption[] = [];
      const seriesList: LineSeriesOption[] = [];
      echarts.util.each(types, function (type) {
        var datasetId = 'dataset_' + type;
        datasetWithFilters.push({
          id: datasetId,
          fromDatasetId: 'dataset_raw',
          transform: {
            type: 'filter',
            config: {
              and: [
                { dimension: 'Type', '=': type }
              ]
            }
          }
        });
        seriesList.push({
          type: 'line',
          datasetId: datasetId,
          showSymbol: false,
          name: type,
          endLabel: {
            show: true,
            formatter: (params: any) => {
              return params.value[1] + ': ' + params.value[0];
            }
          },
          labelLayout: {
            moveOverlap: 'shiftY'
          },
          emphasis: {
            focus: 'series'
          },
          encode: {
            x: 'Time',
            y: 'Ratings',
            label: ['Type', 'Ratings'],
            itemName: 'Time',
            tooltip: ['Ratings']
          }
        });
      });
    
      const option = {
        animationDuration: 10000,
        dataset: [
          {
            id: 'dataset_raw',
            source: dataJson
          },
          ...datasetWithFilters
        ],
        // title: {
        //   text: 'Income of Germany and France since 1950'
        // },
        tooltip: {
          order: 'valueDesc',
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          nameLocation: 'middle'
        },
        yAxis: {
          // name: 'Income'
          name: 'Ratings'
        },
        grid: {
          right: 120
        },
        series: seriesList
      };
    
      chartRef.current.setOption(option);

    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }} ref={domRef}></div>
  );
};

export default ChatLine;