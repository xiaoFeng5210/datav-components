import React from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>可视化项目解决方案</div>
      </div>
      <div className={styles.main}>
        <div className={styles.slide}>
          <div className={styles.slide_item}>
            <Link to="/echarts/demo">echarts图表示例</Link>
          </div>
          <div className={styles.slide_item}>canvas</div>
          <div className={styles.slide_item}>webgl</div>
        </div>
        <div className={styles.content}>
          <div style={{ padding: 20 }}>{props.children}</div>;
        </div>
      </div>
    </>
  );
};
