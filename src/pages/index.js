import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <img src="img/logo.png" width={"20%"}></img>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx ("row", styles.buttons)}>
          <div className="col">
            <Link
              className="button button--secondary button--lg button--block col--1 shadow--md"
              to="/docs/atrocities/us"
            >
              🇺🇸 Atrocities
            </Link>
          </div>
          <div className="col">
            <Link
              className="button button--secondary button--lg button--block col--2 col--offset-1 shadow--md"
              to="/docs/feds"
            >
              🌎 Government Assets
            </Link>
          </div>
        </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
