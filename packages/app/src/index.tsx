// import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

import { AuthProvider } from './pages/Auth';
import { Shopping } from './pages/Shopping';


ReactDOM.render(
	(
		<AuthProvider>
			<Shopping />
		</AuthProvider>
	),
	document.getElementById("root")
);
