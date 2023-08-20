import React, { CSSProperties, FC } from 'react';

type Props = {
  imageUrl: string,
  title: string,
  onClick: () => void,
};

const styles: {[key: string]: CSSProperties} = {
  container: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
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

const CoverCard: FC<Props> = ({ imageUrl, title, onClick }) => (
  <div style={styles.container} onClick={onClick}>
    <img style={styles.coverImage} src={imageUrl}></img>
    <div style={styles.coverTitle}>{title}</div>
  </div>
);

export default CoverCard;
