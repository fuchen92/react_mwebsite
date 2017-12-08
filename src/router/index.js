import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'

import Layout from '@/views/Layout/layout';
import Home from '@/views/Home/home';

import Subscribe from "@/components/subscribe/subscribe"

const routes = (
	<div>
		<Route path="/" component={ Layout }>
		{/* <IndexRoute component={ Home } /> */}
		</Route>
		<Route path="/" component={ Subscribe }></Route>
	</div>

)


export default routes;
