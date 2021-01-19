import React from 'react';
import styles from './index.less';
import { Link } from 'umi';
import Slide from '@/components/slide';

export default (props: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.title}>可视化项目解决方案</div>
      </div>
      <div className={styles.main}>
        <Slide />
        <div className={styles.content}>
          <div style={{ padding: 20 }}>{props.children}</div>;
        </div>
      </div>
    </>
  );
};
