'use client';

import { FC, useState } from 'react';
import styles from "./page.module.css";
import Menu from './components/menu';
import { Card, Space } from 'antd';
import ChartMap from './components/chartMap';
import ChartLine from './components/chartLine';
import ChartStacked from './components/chartStacked';
import ChartDistribution from './components/chartDistribution';
import ChartHeatmap from './components/chartHeatmap';

const diagramMap = {
  map: ChartMap,
  distribution: ChartDistribution,
  line: ChartLine,
  stacked: ChartStacked,
  heatmap: ChartHeatmap
};

export default function Home() {
  const [current, setCurrent] = useState('map');

  const DiagramComp: FC<{}> = diagramMap[current as keyof typeof diagramMap];

  return (
    <main className={styles.main}>
      <div style={{ position: 'fixed', top: 0, height: '56px', width: '100%', zIndex: 1, background: 'black', color: 'white', lineHeight: '56px', paddingLeft: '32px' }}>NETFLIX</div>
      <div style={{ display: 'flex', marginTop: '56px' }}>
        <div style={{ width: 256, flexShrink: 0, background: 'white' }}>
          <Menu setCurrent={setCurrent} />
        </div>

        <div style={{ margin: '16px', flexGrow: 1 }}>
          <div style={{ background: 'white', height: 500 }}>
          
            <DiagramComp />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2%' }}>
            {

              Object.keys(diagramMap).map((name) => {
                if (name === current) return null;

                const Comp: FC<{}> = diagramMap[name as keyof typeof diagramMap];
                return <div style={{ background: 'white', width: '49%', height: 250, marginTop: '18px' }} key={name}>
                  <Comp />
                </div>
              })
            }
          </div>
        </div>

        <div style={{ width: '300px', flexShrink: 0 }}>
          <div style={{ padding: '24px', background: '#eee' }}>Welcome Back!</div>
          
          <Space direction="vertical" size={16}>
            <Card title="Global View" style={{ width: 300, borderRadius: 0 }}>
              <p>Country: 129</p>
              <p>Occurrences: 129</p>
            </Card>
          </Space>
        </div>


      </div>


    </main>
  );
}
