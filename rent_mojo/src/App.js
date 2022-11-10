import './App.css';
import LoginSignUp from './ComponentsTks/LoginSignUp';
import { HomePage } from './RohiniPages/HomePage';
import { CartItem } from './vh-component/CartItem';

function App() {
	return (
		<div className='App'>
			<HomePage />
			<CartItem />
			<LoginSignUp />
		</div>
	);
}

export default App;
