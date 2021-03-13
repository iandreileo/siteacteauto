import React, { useContext, useEffect, useState } from 'react';
import ConfirmModal from '../partials/ConfirmModal';

import Header from '../partials/Header';
import { ActiveDocumentsContext } from '../providers/ActiveDocumentsProvider';
import { DocumentsContext } from '../providers/DocumentsProvider';
import { FilesContext } from '../providers/Dosare'

function SelectDocuments() {

  // Global list of documents
  const [documents, setDocuments] = useContext(DocumentsContext);
  const [activeDocuments, setActiveDocuments] = useContext(ActiveDocumentsContext);
  const [files, setFiles] = useContext(FilesContext)
  const [refresh, setRefresh] = useState(1);
  const [toogleOn, setToogleOn] = useState(false);
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  const addToLocalList = (document) => {
    // Check if id exist
    let exist = 0;
    let i;
    console.log(activeDocuments);
    for (i = 0; i < activeDocuments.length; i++) {
      if (activeDocuments[i].id === document.id) {
        exist = 1;
        break;
      }
    }
    // Delete if exist
    if (exist) {
      activeDocuments.splice(i, 1);
    } else {
      console.log(documents.documents[document.id])
      activeDocuments.push(documents.documents[document.id])
    }

    setSelect(false);
    setRefresh(Math.random());
  }

  const addFileToLocalList = (file) => {
    activeDocuments.splice(0, activeDocuments.length)
    file.necesare.forEach(element => {
      if(element.idGenerabil != "-1") {
        
        activeDocuments.push(documents.documents[element.idGenerabil])
      }
    });
    debugger
    checkIfAtleastOne()
  }

  const checkIfAtleastOne = () => {
    debugger
    if (activeDocuments.length != 0) {
      setSelect(false);
      setModal(true);
    } else {
      setSelect(true);
    }
  }

  const onToggle = (checked) => {
    setToogleOn(checked);
    if(!checked) {
      setActiveDocuments(selectedDocuments)
    } else{
      setSelectedDocuments(activeDocuments)
    }
  }

  const getIndividualDocuments = () => {
    const elements = refresh && documents.documents.map((document, key) => {
      return (
        activeDocuments.includes(document) || checkIfDocumentActive(document.id, activeDocuments) ?
          <div className="h-40 w-40 relative cursor-pointer mb-5 align-middle " key={key} onClick={() => addToLocalList(document)}>
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform  hover:rotate-45 transition duration-200">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl self-center">
                <div className="text-center">{document.name}</div>
                <img src={require('../images/check.svg')} className="w-6"></img>
              </div>
            </div>
          </div>
          :
          <div className="h-40 w-40 relative cursor-pointer mb-5 align-middle" key={key} onClick={() => addToLocalList(document)}>
            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
            <div className="absolute inset-0 transform  hover:rotate-45 transition duration-200">
              <div className="h-full w-full bg-white rounded-lg shadow-2xl">
                <div className="text-center h-full">{document.name}</div>
              </div>
            </div>
          </div>
      )
    })
    return (<>
      <section className="flex md:flex-row items-center justify-around flex-wrap sm:flex-col gap-y-4">
        {elements}
      </section>
      {select ? <div
        className="bg-red-200 px-6 py-4 mx-2 my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4 "
      >
        <svg
          viewBox="0 0 24 24"
          className="text-red-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
        >
          <path
            fill="currentColor"
            d="M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
          ></path>
        </svg>
        <span className="text-red-800"> Te rugăm selectează cel puțin o variantă de mai sus. </span>
      </div> : ""
      }

      <div className="max-w-sm mx-auto">
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full px-3">
            <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" onClick={() => { checkIfAtleastOne() }}>Continuă</button>
          </div>
        </div>
      </div>
    </>)
  }

  const getFiles = () => {
    return (
      <section className="flex md:flex-row items-center justify-around flex-wrap sm:flex-col gap-y-4">
        {refresh && files.dosare.map((file, key) => {
          return (
            <article class="sm:grid grid-cols-5 bg-white shadow-sm p-7 relative lg:min-w-md lg:max-w-lg sm:p-4 rounded-lg lg:col-span-2  ">
              <div class="pt-5 self-center sm:pt-0 sm:pl-10 col-span-3">
                <h2 class="text-gray-800 capitalize text-md font-bold">{file.name}</h2>
                <a class="capitalize underline inline-block pt-2">{file.necesare.length} documente necesare</a>
                <div class="inline-block mr-2 mt-2">
                   <button type="button" onClick={() => {addFileToLocalList(file)}} class=" w-30 absolute bottom-0 mr-3 mb-3 right-0 focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
                   >Genereaza</button>
                </div>
              </div>
            </article>
          )
        })}
      </section>)
  }

  const content = toogleOn ? getFiles() : getIndividualDocuments()

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Bine ai venit! Începe procesul de generare.</h1>
                <p className="text-xl text-gray-600">Selectează actele pe care le dorești generate.</p>
              </div>

              <div className="text-center mb-8">
                <label htmlFor="toggle" class="text-xs text-gray-700">Documente individuale</label>
                <div class="relative inline-block w-10 mr-2 ml-2 align-middle select-none transition duration-200 ease-in">
                  <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" onChange={e => onToggle(e.target.checked)} />
                  <label htmlFor="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
                <label htmlFor="toggle" class="text-xs text-gray-700">Dosare complete</label>
              </div>

              {
                content
              }

              {/* Modal */}
              <ConfirmModal open={[modal, setModal]} />
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

const checkIfDocumentActive = (id, activeDocuments) => {
  let i, exist = 0;
  for (i = 0; i < activeDocuments.length; i++) {
    if (activeDocuments[i].id === id) {
      exist = 1;
      break;
    }
  }
  return exist;
}

export default SelectDocuments;