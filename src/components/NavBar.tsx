import { FC } from 'react';
import {
  Breadcrumb, Breadcrumbs, BreadcrumbProps, Icon,
} from '@blueprintjs/core';

const BREADCRUMBS: BreadcrumbProps[] = [
  { href: '/users', icon: 'folder-close', text: 'Users' },
  { href: '/users/janet', icon: 'folder-close', text: 'Janet' },
  { icon: 'document', text: 'image.jpg' },
];

const NavBar: FC = () => (
  <Breadcrumbs
    currentBreadcrumbRenderer={({ text, ...restProps }: BreadcrumbProps) => (
      <Breadcrumb {...restProps}>{text} <Icon icon="star" /></Breadcrumb>
    )}
    items={BREADCRUMBS}
    />
);

export default NavBar;
