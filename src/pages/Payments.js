import React, { useState,useContext, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { ActiveDocumentsContext } from '../providers/ActiveDocumentsProvider';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");


const ProductDisplay = ({ handleClick, activeDocuments }) => (
    <section>
        {
            activeDocuments.map((document, key) => {
                return (
                    <div className="product">
                        <div className="description">
                            <h3>{document.name}</h3>
                            <h5>5 lei</h5>
                        </div>
                    </div>
                );
            })
      }
        <div>Total: {activeDocuments.length * 5 } lei</div>
        <button type="button" id="checkout-button" role="link" onClick={handleClick}>
            Checkout
    </button>
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
