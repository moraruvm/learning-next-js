# learning-next-js

Project created to follow along with https://www.udemy.com/course/nextjs-react-the-complete-guide

---

## Routing

- next js supports file based routing
  - _pages/index.tsx_ will be loaded when visiting the app index page
- nested routing is done via folders
  - _pages/about.tsx_ on _/about_ route
  - _pages/projects/index.tsx_ on _/projects_ route
- dynamic routes require page names using brackets [].tsx
  - _pages/projects/[projectId].tsx_ on _/projects/project-id_
- folder names can also be dynamic
  - _pages/clients/[clientId]/index.tsx_ on _/clients/coca-cola_
- dynamic route arguments can be obtained via the `useRouter()` hook
  > const clientId = router.query["clientId"];
- "catch all" routes
  - through three dots in the file name: [...slug].tsx
  - then you can get all the segments in the path through `router.query`, which returns an array
- for custom http status code handling
  - like 404, create a _404.tsx_ file in the root pages folder

### Links

- when linking to new pages, using `<a>` tags will trigger a new request to the server (which is a disadvantage)
- instead, use the `<Link href='{}'></Link>` component
- to navigate programatically, you can use the `router.push()` method (or replace)

---
