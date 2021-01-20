import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { Button } from 'antd';
const echarts = require('echarts');
import setOptions from './setOptions';

const EChartsDemo02 = () => {
  useEffect(() => {
    initECharts();
  }, []);
  const initECharts = () => {
    const myChart = echarts.init(
      document.getElementById('demo02') as HTMLElement,
    );
    const options = setOptions();
    myChart.setOption(options);
  };

  return (
    <div className={styles.main}>
      <div id="demo02" />
    </div>
  );
};

export default EChartsDemo02;
