import React, { CSSProperties, FC } from 'react';

type Props = {
  imageUrl: string,
  title: string,
};

const styles: {[key: string]: CSSProperties} = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  coverImage: {
    width: 200,
    height: 300,
    objectFit: 'contain',
  },
  coverTitle: {
    overflowX: 'scroll',
  },
};

const CoverCard: FC<Props> = ({ imageUrl, title }) => (
  <div style={styles.container}>
    <img style={styles.coverImage} src={imageUrl}></img>
    <div style={styles.coverTitle}>{title}</div>
  </div>
);

export default CoverCard;
