import React from "react";
import get from "lodash/get";

const getLocal = (locale) => fetch(`/config/${locale}.json`)
	.then((data) => data.json())
	.then(data => ({ default: data }));

const I18nContext = React.createContext('en');

export class I18nProvider extends React.Component {
	state = {
		locale: null,
		data: null
	};

	componentDidUpdate() {
		if (this.props.locale !== this.state.locale)
			getLocal(this.props.locale).then(({ default: data }) => this.setState({ data, locale: this.props.locale }));
	}

	componentDidMount() {
		getLocal(this.props.locale).then(({ default: data }) => this.setState({ data, locale: this.props.locale }));
	}

	render() {
		return <I18nContext.Provider value={this.state.data}>
			{this.props.children}
		</I18nContext.Provider>;
	}
}

export default (props) => {
	return <I18nContext.Consumer>
		{(data) => get(data, props.value)}
	</I18nContext.Consumer>
}

export const I18nString = (props) => {
	return <I18nContext.Consumer>
		{(data) => props.children.call(null, get(data, props.value))}
	</I18nContext.Consumer>
}