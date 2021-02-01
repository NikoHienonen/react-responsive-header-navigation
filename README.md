# React Responsive Header Navigation

A React header that includes a logo, page navigation and social media links. This component is catered towards artists and brands.

## How to use

Run the following command to install this package:

- `npm i react-responsive-header-navigation`

You can now import `react-responsive-header-navigation` like so:

```
import HeaderNavigation from 'react-responsive-header-navigation'
...
```

## Available props

```

logo: SVGElement | JSX.Element;

menuLinks: NavigationLink[];

socialLinks: SocialLink[];


interface NavigationLink {
  path: string;
  text: string;
}

interface SocialLink extends NavigationLink {
  icon: string;
}

```

## Upcoming updates

Future updates include the ability to supply your own colours and fonts for the header.

**This component was sponsored by [Cybercom Finland](https://www.cybercom.com/fi)**
