import React, { useState, useContext, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { ActiveDocumentsContext } from '../providers/ActiveDocumentsProvider';
import { DataContext } from '../providers/DataProvider';
import Header from '../partials/Header';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IP8KmEd63QApqymOnYuHWQVrjsGDBK2j8Mine4Iab3sgj5nSUTov9uhZXmy3NRrsOsg0dSMOVFFKSn8c0Xej36x00RfaUdbFk");

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function Payment() {
    const [message, setMessage] = useState("");
    const [activeDocuments] = useContext(ActiveDocumentsContext);
    const [data, setData] = useContext(DataContext);
    const [collapse, setCollapse] = useState(false);

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
            setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    const handleClick = async (event) => {
        const stripe = await stripePromise;

        const response = await fetch(`http://localhost:3001/checkout?length=${activeDocuments.length}`, {
            method: "POST",
        });

        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        console.log(result);

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };

    return message ? (
        <Message message={message} />
    ) : (
        <div className="flex flex-col overflow-hidden">

        {/*  Site header */}
        <Header />
    
        {/*  Page content */}
        <main className="flex-grow">
            <section className="bg-gradient-to-b from-gray-100 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
                            <div class="w-full flex-grow">
                                <h2 class="text-center font-bold uppercase mb-4">Modalități de plată</h2>
                                <p class="text-sm mb-8">După ce vei efectua plata îți vom genera următoarele documente:</p>
                                <ul class="text-sm mb-8">
                                    {
                                        activeDocuments.map((document, key) => {
                                            return (
                                                <li class="leading-tight"><i class="mdi mdi-check-bold text-lg"></i>{document.name}</li>
                                            );
                                        })
                                    }
                                </ul>
                                <h2 class="text-center font-bold uppercase mb-4">Total: {activeDocuments.length * 5} lei</h2>
                            </div>
                            <div class="w-full">
                                <button class="font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-md px-10 py-2 transition-colors w-full" onClick={handleClick}>Plata cu cardul</button>
                                <button class="font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-md px-10 py-2 transition-colors w-full mt-4 " onClick={() => setCollapse(!collapse)}>Plata prin alte modalități</button>
                                <div style={{display: collapse ? 'block' : 'none'}} className="transition-all duration-500 ease-in-out text-center">
                                    <button class="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 mt-4  w-full">Asigurare RCA</button>
                                    <button class="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 mt-4  w-full">Verifică mașina pe CARVERTICAL</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </div>
        );
}
