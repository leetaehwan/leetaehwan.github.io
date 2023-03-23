import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '데이터 톺아보기',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        파이썬을 이용해, 넘파이와 판다스를 활용한 데이터 분석과
        Seaborn과 matplotlib의 라이브러리를 활용해 시각화를 합니다.
      </>
    ),
  },
  {
    title: '인공지능을 더한 융합지능 만들기',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        텐서플로와 파이토치를 활용한 딥러닝을 학습하고
        근간이 되는 논문들을 파해친다.
      </>
    ),
  },
  {
    title: '데이터 ETL',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        정형, 비정형 데이터들을 비즈니스 로직에 적합한 형식과 구조로 준비한다.
        SQL 및 스프링 부트 프레임워크를 활용해 보자.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
