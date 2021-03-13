import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import {DocumentsProvider} from './providers/DocumentsProvider'
import { DataProvider } from './providers/DataProvider';
import { ActiveDocumentsProvider } from './providers/ActiveDocumentsProvider';
import { FilesProvider } from './providers/Dosare';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilesProvider>
      <DocumentsProvider>
        <DataProvider>
          <ActiveDocumentsProvider>
            <App />
          </ActiveDocumentsProvider>
        </DataProvider>
      </DocumentsProvider>
      </FilesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
