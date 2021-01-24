import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Header from '../partials/Header';
import { ActiveDocumentsContext } from '../providers/ActiveDocumentsProvider';
import { DataContext } from '../providers/DataProvider';
import { DocumentsContext } from '../providers/DocumentsProvider';

function GenerateFields() {

  const [activeDocuments] = useContext(ActiveDocumentsContext);
  const [data, setData] = useContext(DataContext);
  const history = useHistory();

  const handleOnChange = (e) => {
    const targetKey = e.target.id;
    const value = e.target.value;
    setData({...data, [targetKey] : value});
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    let ok = 1;
    activeDocuments.forEach((document) => {
      document.fields.forEach((field) => {
          if(data[field.fieldName] === undefined) {
            ok = 0;
          }
      })
    })
    if(ok) {
      // Fetch to server
      history.push("/checkout");
    }
    
  }

  if (activeDocuments.length === 0) return <Redirect to='/select'  />

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
                <h1 className="h1 mb-4">Completează datele pentru a trece la pasul următor</h1>
                <p className="text-xl text-gray-600">Mai jos trebuie să completați datele necesare pentru generare actelor selectate.</p>
              </div>


              {/* Form */}
              <div className="max-w-md mx-auto">
                <form>
                {
                    activeDocuments.map((document) => {
                          console.log(document.fields)
                          return (
                            document.fields.map((field, key) => 
                              <div className="flex flex-wrap -mx-3 mb-4" key={key}>
                                {key === 0 ? <h4 className="h4 mb-4">{document.name}</h4>: ""}
                              <div className="w-full px-3">
                                <label className="block text-gray-800 text-sm font-medium mb-1"> {field.fieldLabel} <span className="text-red-600">*</span></label>
                                <input id={field.fieldName} value={data[field.fieldName]} onChange={handleOnChange} type="text" className="form-input w-full text-gray-800" placeholder={`Introdu ${field.fieldLabel}`} required />
                              </div>
                              </div>
                          ))
                    })
                }
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full" onClick={handleOnClick}>Continuă</button>
                    </div>
                  </div>
                  </form>
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default GenerateFields;