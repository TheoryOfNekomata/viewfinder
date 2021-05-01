# Viewfinder

Layout scaffolding for Web apps.

This library is made to avoid custom repetitive layout code.

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

The available props per layout are included as a TypeScript declarations file.

## Configuration

There are CSS variables that can be declared in the parent of the `*.Layout` components
(preferably `:root`) for customizing the metrics and colors of the layout:

### `--height-topbar`

Default value: `4rem`

Height of the top bar widget.

### `--size-menu`

Default value: `4rem`

Width or height of the menu, depending on the orientation it is rendered.
