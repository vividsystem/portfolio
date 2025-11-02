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

					<Header />
					<Suspense>

						<MetaProvider>
							<Meta
								name="author"
								content="vividsystem"
							/>
							<Meta
								name="application-name"
								content="vividsystem's portfolio"
							/>
							{props.children}

						</MetaProvider>
					</Suspense>

					<Nav />
					<Cursor />
				</>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
