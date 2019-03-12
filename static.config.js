import axios from 'axios'
import path from 'path'
import React from 'react'

export default {
  plugins: [
    'react-static-plugin-styled-components',
    'react-static-plugin-typescript'
  ],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'MyBit'
  }),
  paths: {
    public: 'public'
  },
  getRoutes: async ({ dev }) => [
    // A simple route
    {
      path: 'ventures',
      component: 'src/pages/ventures'
    },
    {
      path: 'about',
      component: 'src/pages/about'
    },
    {
      path: 'tools',
      component: 'src/pages/tools'
    },
    {
      path: '404',
      component: 'src/pages/404'
    }
  ],
  Document: class CustomHtml extends React.Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html itemScope itemType="http://schema.org/Article">
          <Head>
            <title>MyBit</title>
            <meta charSet="UTF-8" />
            <link rel="icon"  type="image/png" href="/favicon.png" />
            {renderMeta.styleTags}
            {renderMeta.helmet && renderMeta.helmet.title.toComponent()}
            {renderMeta.helmet && renderMeta.helmet.meta.toComponent()}
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta httpEquiv="content-language" content="en" />
            <meta itemProp="name" content="MyBit" />
            <meta itemProp="description" content="MyBit designs products that open up the world, creating tools that enable freedom and wealth generation for everyone." />
            <meta name="robots" content="index,follow" />
            <meta name="theme-color" content="#1890ff" />
            <meta name="Description" content="MyBit designs products that open up the world, creating tools that enable freedom and wealth generation for everyone." />
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
