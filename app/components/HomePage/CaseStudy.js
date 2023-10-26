"use client";

import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Ios from "../../components/casestudy/Ios";
const CaseStudy = () => {
  return (
    <>
      <section className="case-study-section whois-section">
        <div className="container">
          <h1 className="big-text font-light mb-12 text-center">
            Case Studies
          </h1>
          <div className="row">
            <div className="col-lg-12">
              <Tabs defaultActiveKey="IOS" id="casestudy-tab" className="mb-3">
                <Tab eventKey="IOS" title="IOS">
                  <Ios />
                </Tab>
                <Tab eventKey="android" title="Android">
                  <Ios />
                </Tab>
                <Tab eventKey="React Native" title="React Native">
                  <Ios />
                </Tab>
                <Tab eventKey="wearable" title="Wearable">
                  <Ios />
                </Tab>
                <Tab eventKey="windows" title="Windows">
                  <Ios />
                </Tab>
                <Tab eventKey="saas" title="Saas">
                  Tab content for Saas
                </Tab>
                <Tab eventKey="flutter" title="Flutter">
                  Tab content for Flutter
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
