import { render } from '@wordpress/element';
import './main.scss';

import App from './components/App';

render(<App/>, document.getElementById('admin-plugin-settings'));
