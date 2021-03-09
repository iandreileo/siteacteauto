import React, { createContext, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { generateDocuments } from '../api/generateDocuments';
import Header from '../partials/Header';
import { ActiveDocumentsContext } from '../providers/ActiveDocumentsProvider';
import { DataContext } from '../providers/DataProvider';

export const Checkout = (props) => {

    const activeDocuments = JSON.parse(sessionStorage.getItem("activeDocuments"));
    const data = JSON.parse(sessionStorage.getItem("data"));

    const generate = (document) => {
        let fieldData = {};
        activeDocuments[activeDocuments.indexOf(document)].fields.forEach((item) => {
            console.log(data, item.fieldName, data[item.fieldName]);
            fieldData[item.fieldName] = data[item.fieldName];
        });

        const fetchingData = {
            data : fieldData,
            documentId : document.id,
            documentName: document.name
        };
        generateDocuments(fetchingData);
    }
    
    if(activeDocuments.length === 0 || data === []) {
        return <Redirect to='/select'  />
    }



    return (
        <div className="flex flex-col overflow-hidden">
        {/*  Site header */}
        <Header />
  
        {/*  Page content */}
        <main className="flex-grow">
  
          <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="w-full md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
  
                {/* Page header */}
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h1 className="h1 mb-4">Îți mulțumim!</h1>
                  <p className="text-md text-gray-600">Comanda ta a fost procesată cu succes și ti-am generat mai jos actele de care ai nevoie.</p>
                </div>
  
                <div className="max-w-3xl mx-auto pb-12 md:pb-20">
                    {/* Verify data */}
                    {/* Payment */}
                    {/* <div className="flex flex-wrap -mx-3 mt-6"> */}
                    <table className="w-full">
                        {
                            activeDocuments.map((document, key) => {
                                return (
                                        <tr key={key} className="mb-4"> 
                                            <td><p>{document.name}</p></td>
                                            <td><button className="btn text-white bg-green-600 hover:bg-blue-700 ring-4 ring-red-300 ml-2 inline " onClick={() => generate(document)}>Descarcă</button></td>
                                        </tr>
                                )
                            })
                        }
                    </table>
                  {/* </div> */}
                </div>
                </div>
              </div>
            </div>
          </section>
  
        </main>
  
      </div>
    );
}

// export default DocumentsProvider;