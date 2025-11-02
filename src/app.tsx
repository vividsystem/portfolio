import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import { Meta, MetaProvider } from "@solidjs/meta";

export default function App() {
	return (
		<Router
			root={props => (
				<>
					<MetaProvider>
						<Meta
							name="author"
							content="vividsystem"
						/>
						<Meta
							name="application-name"
							content="vividsystem's portfolio"
						/>

						<Header />
						<Suspense>{props.children}</Suspense>
						<Nav />
						<Cursor />
					</MetaProvider>
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
