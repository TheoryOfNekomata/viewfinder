import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Page = () => {
  return (
		<>
			<h1>
				Viewfinder Examples
			</h1>
			<nav>
				<h2>
					Layouts
				</h2>
				<div>
					<a href="layouts/basic/index.html">Basic</a>
				</div>
				<div>
					<a href="layouts/basic-narrow/index.html">Basic Narrow</a>
				</div>
				<div>
					<a href="layouts/left-sidebar/index.html">Left Sidebar</a>
				</div>
				<div>
					<a href="layouts/left-sidebar-2/index.html">Left Sidebar (alternate)</a>
				</div>
				<div>
					<a href="layouts/left-sidebar-with-menu/index.html">Left Sidebar With Menu</a>
				</div>
				<div>
					<a href="layouts/right-sidebar-static/index.html">Right Sidebar Static</a>
				</div>
			</nav>
			<p>
				Look at how the layouts are coded in the <a href="https://code.modal.sh/TheoryOfNekomata/viewfinder" rel="noreferrer noopener" target="_blank">Git repository</a>.
			</p>
		</>
  );
};

const root = document.createElement('div')

ReactDOM.render(<Page />, root);

document.body.appendChild(root);
