import React from 'react';
import * as suscribeStyles from '../components/suscribe.module.scss';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class SuscribeForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            message: ''
        }
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(this.state.email);
        this.setState({ message: "¡Bienvenido! Has sido suscrito" });
        this.setState({email: ''})
    }
    render() {
        return (
            <section className={suscribeStyles.wrapper}>
                <div className={suscribeStyles.container}>
                    <form name="subscribeForm" method="POST" id="subscribe-form" onSubmit={this.handleSubmit}>
                        <div className={suscribeStyles.suscribe}>
                            <h1>Suscribete Hoy</h1>
                            <h2>No te piedas nuestras novedades</h2>
                            <input className={suscribeStyles.suscribemail} type="email" value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Ingrese Email..." />
                            <button className={suscribeStyles.buttonsuscribe} type="submit">
                                Subscribirse
                            </button>
                        </div>
                    </form>
                    <div className="message" dangerouslySetInnerHTML={{__html: this.state.message}}/>
                </div>
            </section>
        );
    }
}
