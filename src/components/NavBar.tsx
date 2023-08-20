import { FC } from 'react';
import {
  Breadcrumb, Breadcrumbs, BreadcrumbProps, Icon,
} from '@blueprintjs/core';

const BREADCRUMBS: BreadcrumbProps[] = [
  { href: '/users', icon: 'folder-close', text: 'Users' },
  { href: '/users/janet', icon: 'folder-close', text: 'Janet' },
  { icon: 'document', text: 'image.jpg' },
];

const filePathToBreadcrumbRoutes = (filePath: string): BreadcrumbProps[] => {
  return [];
}

type Props = {
  filePath: string,
  onChangePath: (props: { newPath: string }) => void,
};

const NavBar: FC<Props> = ({ filePath, onChangePath }) => (
  <Breadcrumbs
    currentBreadcrumbRenderer={({ text, ...restProps }: BreadcrumbProps) => (
      <Breadcrumb {...restProps}>{text} <Icon icon="star" /></Breadcrumb>
    )}
    items={BREADCRUMBS}
    />
);

export default NavBar;
