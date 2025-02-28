/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DefaultImport } from './routes/_default'
import { Route as DefaultIndexImport } from './routes/_default/index'

// Create/Update Routes

const DefaultRoute = DefaultImport.update({
  id: '/_default',
  getParentRoute: () => rootRoute,
} as any)

const DefaultIndexRoute = DefaultIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DefaultRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_default': {
      id: '/_default'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof DefaultImport
      parentRoute: typeof rootRoute
    }
    '/_default/': {
      id: '/_default/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof DefaultIndexImport
      parentRoute: typeof DefaultImport
    }
  }
}

// Create and export the route tree

interface DefaultRouteChildren {
  DefaultIndexRoute: typeof DefaultIndexRoute
}

const DefaultRouteChildren: DefaultRouteChildren = {
  DefaultIndexRoute: DefaultIndexRoute,
}

const DefaultRouteWithChildren =
  DefaultRoute._addFileChildren(DefaultRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof DefaultRouteWithChildren
  '/': typeof DefaultIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof DefaultIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_default': typeof DefaultRouteWithChildren
  '/_default/': typeof DefaultIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/'
  id: '__root__' | '/_default' | '/_default/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  DefaultRoute: typeof DefaultRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  DefaultRoute: DefaultRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_default"
      ]
    },
    "/_default": {
      "filePath": "_default.tsx",
      "children": [
        "/_default/"
      ]
    },
    "/_default/": {
      "filePath": "_default/index.tsx",
      "parent": "/_default"
    }
  }
}
ROUTE_MANIFEST_END */
