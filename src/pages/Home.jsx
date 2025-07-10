import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Demo } from "./Demo.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			
		<Demo />

		</div>
	);
}; 