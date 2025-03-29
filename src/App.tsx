import './App.css';
import Header from './partials/Header';
import Preview from './partials/Preview';
import PreviewSkeleton from './partials/PreviewSkeleton';
import WidgetsPanel from './partials/WidgetsPanel';

function App() {
	return (
		<>
			<Header />
			<main
				className="grid grid-cols-[270px_1fr] h-[calc(100vh-91px)]"
				role="main"
			>
				<WidgetsPanel />
				<div className="grid grid-cols-2 content">
					<PreviewSkeleton />
					<Preview />
				</div>
			</main>
		</>
	);
}

export default App;
