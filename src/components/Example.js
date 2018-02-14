import React from 'react';
import { connect } from 'dva';
import styles from './Example.module.css';


const Example = () => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Example Page!</h1>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/components/Example.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

Example.propTypes = {
};

function mapStateToProps(appState){
  return {

  };
}
function mapDispatchToProps(dispatch){
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Example);
