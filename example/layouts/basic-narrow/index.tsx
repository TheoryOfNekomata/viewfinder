import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { BasicNarrow } from '../../..';

const Page = () => {
	return (
		<BasicNarrow.Layout>
			<BasicNarrow.ContentContainer>
				Hello
			</BasicNarrow.ContentContainer>
		</BasicNarrow.Layout>
	)
}

const root = document.createElement('div')

ReactDOM.render(<Page />, root);

document.body.appendChild(root);
