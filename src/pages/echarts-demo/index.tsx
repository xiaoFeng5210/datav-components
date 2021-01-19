import React, { useState } from 'react';
import styles from './index.less';
import EChartsDemo from '@/components/echarts/echarts-demo01';
import { Button } from 'antd';

export default () => {
  const [chartData, setChartData] = useState([5, 20, 36, 10, 10, 20]);
  const changeChartData = () => {
    setChartData([
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
    ]);
  };

  return (
    <div className={styles.main}>
      <div className={styles.demo01}>
        <EChartsDemo chartData={chartData} />
        <div className={styles.action}>
          <Button
            onClick={() => {
              changeChartData();
            }}
          >
            改变数据
          </Button>
        </div>
      </div>
    </div>
  );
};
