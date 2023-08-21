import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '098'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c88'),
    exact: true
  },
  {
    path: '/blog/docusaurus-deploy',
    component: ComponentCreator('/blog/docusaurus-deploy', '5f4'),
    exact: true
  },
  {
    path: '/blog/features_collection',
    component: ComponentCreator('/blog/features_collection', 'd00'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', '0f7'),
    exact: true
  },
  {
    path: '/blog/pandas-2-feature-1',
    component: ComponentCreator('/blog/pandas-2-feature-1', 'da5'),
    exact: true
  },
  {
    path: '/blog/pytorch-dataset-split',
    component: ComponentCreator('/blog/pytorch-dataset-split', '4e6'),
    exact: true
  },
  {
    path: '/blog/pytorch-dataset-split',
    component: ComponentCreator('/blog/pytorch-dataset-split', 'c3b'),
    exact: true
  },
  {
    path: '/blog/spring-boot-component-research',
    component: ComponentCreator('/blog/spring-boot-component-research', '656'),
    exact: true
  },
  {
    path: '/blog/spring-boot-dev-basic',
    component: ComponentCreator('/blog/spring-boot-dev-basic', '6ed'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'a90'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai', 'f29'),
    exact: true
  },
  {
    path: '/blog/tags/blog',
    component: ComponentCreator('/blog/tags/blog', 'b6a'),
    exact: true
  },
  {
    path: '/blog/tags/choropleth',
    component: ComponentCreator('/blog/tags/choropleth', 'a3a'),
    exact: true
  },
  {
    path: '/blog/tags/contoller',
    component: ComponentCreator('/blog/tags/contoller', '0ce'),
    exact: true
  },
  {
    path: '/blog/tags/data',
    component: ComponentCreator('/blog/tags/data', '826'),
    exact: true
  },
  {
    path: '/blog/tags/dataset',
    component: ComponentCreator('/blog/tags/dataset', '042'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fa1'),
    exact: true
  },
  {
    path: '/blog/tags/eda',
    component: ComponentCreator('/blog/tags/eda', 'edc'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '289'),
    exact: true
  },
  {
    path: '/blog/tags/folium',
    component: ComponentCreator('/blog/tags/folium', '298'),
    exact: true
  },
  {
    path: '/blog/tags/geo-interface',
    component: ComponentCreator('/blog/tags/geo-interface', '6e3'),
    exact: true
  },
  {
    path: '/blog/tags/geo-json',
    component: ComponentCreator('/blog/tags/geo-json', 'faa'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings', 'c99'),
    exact: true
  },
  {
    path: '/blog/tags/handler-mapping',
    component: ComponentCreator('/blog/tags/handler-mapping', '47b'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'e72'),
    exact: true
  },
  {
    path: '/blog/tags/key-on',
    component: ComponentCreator('/blog/tags/key-on', 'ff0'),
    exact: true
  },
  {
    path: '/blog/tags/pandas',
    component: ComponentCreator('/blog/tags/pandas', '914'),
    exact: true
  },
  {
    path: '/blog/tags/pytorch',
    component: ComponentCreator('/blog/tags/pytorch', 'c45'),
    exact: true
  },
  {
    path: '/blog/tags/sklearn',
    component: ComponentCreator('/blog/tags/sklearn', '8e2'),
    exact: true
  },
  {
    path: '/blog/tags/spring-boot',
    component: ComponentCreator('/blog/tags/spring-boot', '4f1'),
    exact: true
  },
  {
    path: '/blog/tags/web',
    component: ComponentCreator('/blog/tags/web', '01a'),
    exact: true
  },
  {
    path: '/blog/tags/writing',
    component: ComponentCreator('/blog/tags/writing', 'c53'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '3cd'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '930'),
    exact: true
  },
  {
    path: '/my-markdown-page',
    component: ComponentCreator('/my-markdown-page', 'f22'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', 'e25'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c11'),
    routes: [
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/hello',
        component: ComponentCreator('/docs/hello', '7a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '45d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
