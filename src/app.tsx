import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import Header from "./components/Header";
import Cursor from "./components/Cursor";

export default function App() {
	return (
		<Router
			root={props => (
				<>
					<Header />
					<Suspense>{props.children}</Suspense>
					<Nav />
					<Cursor />
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
