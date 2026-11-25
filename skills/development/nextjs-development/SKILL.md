---
name: nextjs-development
title: Next.js Development
category: Development
version: v1.0.0
status: Published
description: Build production-ready applications using Next.js and React.
tags:
  - TypeScript
  - React
  - Tailwind CSS
---

# Next.js Development

Instructions and guidelines for building scalable Next.js applications.

## Overview

This skill equips AI agents with structured patterns for developing modern, production-ready web applications using the Next.js App Router, React Server Components, TypeScript, and Tailwind CSS.

## What's included

- Project setup
- App Router architecture
- Reusable components
- Server and client components
- API integration
- Best practices

## Core Guidelines

1. **App Router First**: Prefer Next.js App Router conventions (`app/layout.tsx`, `app/page.tsx`, `loading.tsx`, `error.tsx`) and async route parameters.
2. **Server Components by Default**: Keep components on the server unless client interactivity (`useState`, `useEffect`, browser event listeners) requires `"use client"`.
3. **Type Safety**: Enforce strict TypeScript types for props, route parameters, server actions, and API responses.
4. **Styling & UI**: Use Tailwind CSS utility classes paired with accessible, composable UI primitives.

## Package Resources

- `skill.json` — Package manifest and structured metadata
- `SKILL.md` — Primary instructions for the agent
- `references/architecture.md` — Deep-dive reference on App Router architecture
- `scripts/` — Setup and verification utilities
- `examples/` — Production-grade component templates

