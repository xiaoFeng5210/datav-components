import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default () => {
  return (
    <div className={styles.slide}>
      <div className={styles.slide_item}>
        <Link to="/echarts/demo">echarts图表示例</Link>
      </div>
      <div className={styles.slide_item}>canvas</div>
      <div className={styles.slide_item}>webgl</div>
    </div>
  );
};
