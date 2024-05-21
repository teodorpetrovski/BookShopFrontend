import React from 'react';
import axios from "../../../axios/axios";




export default class Payment extends React.Component {




    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            stripeLoading: true,
        };

        this.onStripeUpdate = this.onStripeUpdate.bind(this);

        this.loadStripe = this.loadStripe.bind(this);
    }

    loadStripe(onload) {
        if(! window.StripeCheckout) {
            const script = document.createElement('script');
            script.onload = function () {
                console.info("Stripe script loaded");
                onload();
            };
            script.src = 'https://checkout.stripe.com/checkout.js';
            document.head.appendChild(script);
        } else {
            onload();
        }
    }

    componentDidMount() {


        this.loadStripe(() => {


            this.stripeHandler = window.StripeCheckout.configure({
                key: 'pk_test_51NQvfbAm259KtCQ8UFV49MaoA21UGxdp74M79aJfxO9Yiq9XAjbl4TcY2N6rNUSUbaO4CTkOWSi3Eg07XhDZraPa00agobPQ1x',
                image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
                locale: 'auto',
                token: (token) => {
                    this.setState({ loading: true });

                    axios.post('/bookorder/confirmation');


                }
            });

            this.setState({
                stripeLoading: false,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        if(this.stripeHandler) {
            this.stripeHandler.close();
        }
    }

    onStripeUpdate(e) {
        this.stripeHandler.open({
            name: 'Enter credit card details',
            description: 'widget',
            panelLabel: 'Submit',
            allowRememberMe: false,
        });
        e.preventDefault();
    }

    render() {
        const { stripeLoading, loading } = this.state;
        return (
            <div className="container mt-5">
                <h3>Enter your details by clicking this button</h3>

                {(loading || stripeLoading)
                    ? <p>Order Successful</p>
                    : <button className="btn" style={{backgroundColor: '#8B6B2D', color: 'white'}} onClick={this.onStripeUpdate}>Continue with order</button>
                }
            </div>
        );
    }
}