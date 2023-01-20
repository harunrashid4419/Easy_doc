import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../SharedPage/Navbar/Navbar';

const Documentation = () => {
  return (
    <div className='relative'>
      <Navbar></Navbar>
      <div className='grid grid-cols-3 absolute mt-20 '>
        <div className='container'>
          <div tabIndex={0} className="collapse collapse-arrow  bg-base-100">
            <div className="collapse-title text-xl font-medium">
              <h2>INSTALLATION</h2>
            </div>
            <div className="collapse-content">
              <p>Getting Started</p>
              <p>Add react to a website</p>
              <p>Create a new React App</p>
              <p>CDN Links</p>
              <p>Release Channels</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl font-medium">
              <h2>MAIN CONCEPTS</h2>
            </div>
            <div className="collapse-content">
              <p>Hello World</p>
              <p>Introducing JSX</p>
              <p>Rendering Elements</p>
              <p>Components and Props</p>
              <p>State and Life cycle</p>
              <p>Handling Events</p>
              <p>Conditional Rendering</p>
              <p>List and keys</p>
              <p>Forms </p>
              <p>Lifting state up</p>
              <p>Composition vs inheritance</p>
              <p>Thinking in react</p>
            </div>
          </div>
          <div tabIndex={0} className="collapse collapse-arrow ">
            <div className="collapse-title text-xl font-medium">
              ADVANCED GUIDE
            </div>
            <div className="collapse-content">
              <p>Accebility</p>
              <p>Code-Splitting</p>
              <p>Context</p>
              <p>Error Boundaries</p>
              <p>Forwarding refs</p>
              <p>Fragments</p>
              <p>Higher order components</p>
              <p>Integratings with other labraries</p>
              <p>jSX in Depth </p>
              <p>Optimizing Perfomance</p>
              <p>Portals</p>
              <p>Profiler</p>
              <p>React without ES-6</p>
              <p>Refs and the dom</p>
              <p>Web Components</p>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow  bg-base-100">
              <div className="collapse-title text-xl font-medium">
                <h2>API REFERENCE</h2>
              </div>
              <div className="collapse-content">
                <p>React Dom Client</p>
                <p>React Dom server</p>
                <p>Test Utilities</p>
                <p>Test Renderer</p>
                <p>Js Environment Requirements</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow  bg-base-100">
              <div className="collapse-title text-xl font-medium">
                <h2>Hooks</h2>
              </div>
              <div className="collapse-content">
                <p>Introducing Hooks</p>
                <p>Hooks at a glance</p>
                <p>Using the state hook</p>
                <p>Using the effect Hook</p>
                <p>Rules of Hook</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow  bg-base-100">
              <div className="collapse-title text-xl font-medium">
                <h2>Testings</h2>
              </div>
              <div className="collapse-content">
                <p>Testing Overview</p>
                <p>Testing Recipes</p>
                <p>Testing Environment</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow  bg-base-100">
              <div className="collapse-title text-xl font-medium">
                <h2>CONTRIBUTING</h2>
              </div>
              <div className="collapse-content">
                <p>How to Contribute</p>
                <p>Codebase Overview</p>
                <p>Implementations Notes</p>
             <p>Design Principles</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>


      </div>
    </div>
  );
};

export default Documentation;