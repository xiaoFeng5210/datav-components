import React, { useEffect, useState } from 'react';
import styles from './index.less';
import setOptions from '@/components/echarts/echarts-demo01/setOptions';

const echarts = require('echarts');

export default (props: any) => {
  useEffect(() => {
    initECharts(props.chartData);
  }, props.chartData);

  const initECharts = (chartData: Number[]) => {
    const myChart = echarts.init(
      document.getElementById('main') as HTMLElement,
    );
    const options = setOptions(chartData);
    myChart.setOption(options);
  };

  return <div id="main" className={styles.echart_box} />;
};
