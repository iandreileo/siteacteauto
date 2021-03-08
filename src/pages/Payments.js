import React, { useState, useContext, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { ActiveDocumentsContext } from '../providers/ActiveDocumentsProvider';
import { DataContext } from '../providers/DataProvider';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");


const ProductDisplay = ({ handleClick, activeDocuments }) => (
    <section>
        <div class="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
            <div class="w-full flex-grow">
                <h2 class="text-center font-bold uppercase mb-4">Plata</h2>
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
                <button class="font-bold bg-gray-600 hover:bg-gray-700 text-white rounded-md px-10 py-2 transition-colors w-full">Checkout</button>
            </div>
        </div>
    </section>
);

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
);

export default function Payment() {
    const [message, setMessage] = useState("");
    const [activeDocuments] = useContext(ActiveDocumentsContext);
    const [data, setData] = useContext(DataContext);

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
        sessionStorage.setItem("activeDocuments", JSON.stringify(activeDocuments));
        sessionStorage.setItem("data", JSON.stringify(data));
        console.log(sessionStorage.getItem("activeDocuments"))
        console.log(sessionStorage.getItem("data"))
        debugger
        const response = await fetch(`http://localhost:3001/checkout?length=${activeDocuments.length}`, {
            method: "POST",
        });

        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };

    return message ? (
        <Message message={message} />
    ) : (
            <ProductDisplay handleClick={handleClick} activeDocuments={activeDocuments} />
        );
}
