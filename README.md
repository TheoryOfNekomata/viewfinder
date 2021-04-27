# Viewfinder

Layout scaffolding for Web apps.

## Usage

Just import:

```tsx
import * as React from 'react'
import { Basic, LeftSidebar, LeftSidebarWithMenu, RightSidebarStatic } from '@tesseract-design/viewfinder'

const Page: React.FC = ({
	avatar,
	fullName,
}) => (
	<Basic.Layout
		brand={
		  <a href="/">
				<img
					src="logo.svg"
					alt="ACME Inc."
				/>
		  </a>
		}
		topBarCenter={
			<form>
				<input
					type="search"
					name="q"
				/>
			</form>
		}
		userLink={
			<a href="/profile">
				<img
					src={avatar}
					alt={fullName}
				/>
			</a>
		}
	>
		<Basic.ContentContainer>
			Hello world!
		</Basic.ContentContainer>
	</Basic.Layout>
)

export default Page
```

The available props per layout is included as a TypeScript declarations file.
