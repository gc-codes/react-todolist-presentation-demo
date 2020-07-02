import React from 'react';
import './App.css';
import Navbar from './core/Navbar';
import Footer from './core/Footer';

import TodoList from './todo-app/TodoList';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="container">
        <TodoList/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
